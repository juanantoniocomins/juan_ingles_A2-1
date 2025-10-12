// ============================================================
// progress-system.js - Sistema de Progreso, Estadísticas y Logros
// ============================================================

/**
 * SISTEMA CENTRALIZADO DE TRACKING
 * 
 * Funciona en todas las páginas del curso:
 * - index.html: Muestra estadísticas y logros
 * - teoria.html: Marca teoría como completada
 * - ejercicios.html: Registra ejercicios completados
 * 
 * Usa localStorage para persistencia de datos
 */

// ============================================================
// CONFIGURACIÓN DE LOGROS
// ============================================================

const ACHIEVEMENTS = {
  first_steps: {
    id: 'first_steps',
    name: 'Primeros Pasos',
    desc: 'Completa tu primera lección',
    icon: '👶',
    condition: (stats) => stats.teoriasCompletadas >= 1
  },
  week_warrior: {
    id: 'week_warrior',
    name: 'Guerrero Semanal',
    desc: 'Completa una week entera',
    icon: '⚔️',
    condition: (stats) => stats.weeksCompletadas >= 1
  },
  theme_master: {
    id: 'theme_master',
    name: 'Maestro Temático',
    desc: 'Completa un tema completo',
    icon: '🎓',
    condition: (stats) => stats.temasCompletados >= 1
  },
  exercise_pro: {
    id: 'exercise_pro',
    name: 'Pro de Ejercicios',
    desc: 'Completa 10 ejercicios',
    icon: '💪',
    condition: (stats) => stats.ejerciciosCompletados >= 10
  },
  perfect_score: {
    id: 'perfect_score',
    name: 'Puntuación Perfecta',
    icon: '⭐',
    desc: 'Obtén 100% en un ejercicio',
    condition: (stats) => stats.puntacionesPerfectas >= 1
  },
exam_master: {
    id: 'exam_master',
    name: 'As de Exámenes',
    desc: 'Completa 10 exámenes',
    icon: '🎯',
    condition: (stats) => stats.examenesCompletados >= 10
  },
  streak_7: {
    id: 'streak_7',
    name: 'Racha de Fuego',
    desc: 'Estudia 7 días seguidos',
    icon: '🔥',
    condition: (stats) => stats.streakDays >= 7
  },
  half_course: {
    id: 'half_course',
    name: 'Mitad del Camino',
    desc: 'Completa 4 temas',
    icon: '🏃',
    condition: (stats) => stats.temasCompletados >= 4
  },
  course_complete: {
    id: 'course_complete',
    name: 'Curso Completado',
    desc: 'Completa los 8 temas',
    icon: '🏆',
    condition: (stats) => stats.temasCompletados >= 8
  }
};

// ============================================================
// CLASE PRINCIPAL DEL SISTEMA
// ============================================================

class ProgressSystem {
  constructor() {
    this.storageKey = 'courseProgress';
    this.data = this.loadData();
    this.initializeData();
  }

  // Inicializar estructura de datos
  initializeData() {
    if (!this.data.temas) {
      this.data = {
        temas: {},
        achievements: [],
        stats: {
          teoriasCompletadas: 0,
          ejerciciosCompletados: 0,
          examenesCompletados: 0,
          puntacionesPerfectas: 0,
          weeksCompletadas: 0,
          temasCompletados: 0,
          streakDays: 0,
          lastStudyDate: null
        }
      };
      this.saveData();
    }
  }

  // Cargar datos de localStorage
  loadData() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Error cargando progreso:', e);
      return {};
    }
  }

  // Guardar datos en localStorage
  saveData() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) {
      console.error('Error guardando progreso:', e);
    }
  }

  // Marcar teoría como completada
  markTheoryComplete(tema, week) {
    if (!this.data.temas[tema]) this.data.temas[tema] = {};
    if (!this.data.temas[tema][week]) this.data.temas[tema][week] = {};
    
    if (!this.data.temas[tema][week].teoria) {
      this.data.temas[tema][week].teoria = {
        completada: true,
        fecha: new Date().toISOString()
      };
      this.data.stats.teoriasCompletadas++;
      this.updateStreak();
      this.checkWeekCompletion(tema, week);
      this.checkAchievements();
      this.saveData();
      console.log(`✅ Teoría completada: Tema ${tema}, Week ${week}`);
    }
  }

  // Marcar ejercicio como completado
  markExerciseComplete(tema, week, score = 100) {
    if (!this.data.temas[tema]) this.data.temas[tema] = {};
    if (!this.data.temas[tema][week]) this.data.temas[tema][week] = {};
    
    if (!this.data.temas[tema][week].ejercicios) {
      this.data.temas[tema][week].ejercicios = [{
        completado: true,
        fecha: new Date().toISOString(),
        puntuacion: score
      }];
      this.data.stats.ejerciciosCompletados++;
      
      if (score === 100) {
        this.data.stats.puntacionesPerfectas++;
      }
      
      this.updateStreak();
      this.checkWeekCompletion(tema, week);
      this.checkAchievements();
      this.saveData();
      console.log(`✅ Ejercicio completado: Tema ${tema}, Week ${week} (${score}%)`);
    }
  }

  // Marcar examen como completado
  markExamComplete(tema, week, score = 100) {
    if (!this.data.temas[tema]) this.data.temas[tema] = {};
    if (!this.data.temas[tema][week]) this.data.temas[tema][week] = {};
    
    if (!this.data.temas[tema][week].examen) {
      this.data.temas[tema][week].examen = {
        completado: true,
        fecha: new Date().toISOString(),
        puntuacion: score
      };
      this.data.stats.examenesCompletados++;
      
      if (score === 100) {
        this.data.stats.puntacionesPerfectas++;
      }
      
      this.updateStreak();
      this.checkWeekCompletion(tema, week);
      this.checkAchievements();
      this.saveData();
      console.log(`✅ Examen completado: Tema ${tema}, Week ${week} (${score}%)`);
    }
  }

  // Verificar si una week está completa
  checkWeekCompletion(tema, week) {
    const weekData = this.data.temas[tema]?.[week];
    if (!weekData) return false;

    const isComplete = weekData.teoria && weekData.ejercicios && weekData.examen;
    
    if (isComplete && !weekData.completed) {
      weekData.completed = true;
      this.data.stats.weeksCompletadas++;
      this.checkThemeCompletion(tema);
      console.log(`🎉 Week completada: Tema ${tema}, Week ${week}`);
    }
    
    return isComplete;
  }

  // Verificar si un tema está completo
  checkThemeCompletion(tema) {
    const weeks = [1, 2, 3];
    const allComplete = weeks.every(week => 
      this.data.temas[tema]?.[week]?.completed
    );
    
    if (allComplete && !this.data.temas[tema].themeCompleted) {
      this.data.temas[tema].themeCompleted = true;
      this.data.stats.temasCompletados++;
      console.log(`🏆 Tema completado: Tema ${tema}`);
    }
  }

  // Actualizar racha de estudio
  updateStreak() {
    const today = new Date().toDateString();
    const lastDate = this.data.stats.lastStudyDate;
    
    if (lastDate === today) {
      return; // Ya estudiaste hoy
    }
    
    if (lastDate) {
      const last = new Date(lastDate);
      const now = new Date();
      const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        // Día consecutivo
        this.data.stats.streakDays++;
      } else if (diffDays > 1) {
        // Racha rota
        this.data.stats.streakDays = 1;
      }
    } else {
      // Primera vez
      this.data.stats.streakDays = 1;
    }
    
    this.data.stats.lastStudyDate = today;
  }

  // Verificar y desbloquear logros
  checkAchievements() {
    let newAchievements = [];
    
    Object.values(ACHIEVEMENTS).forEach(achievement => {
      if (!this.data.achievements.includes(achievement.id)) {
        if (achievement.condition(this.data.stats)) {
          this.data.achievements.push(achievement.id);
          newAchievements.push(achievement);
          console.log(`🏆 ¡Logro desbloqueado! ${achievement.name}`);
        }
      }
    });
    
    if (newAchievements.length > 0) {
      this.showAchievementNotification(newAchievements);
    }
  }

  // Mostrar notificación de logro
  showAchievementNotification(achievements) {
    achievements.forEach(achievement => {
      // Aquí puedes añadir una notificación toast si quieres
      console.log(`🎉 ${achievement.icon} ${achievement.name}: ${achievement.desc}`);
    });
  }

  // Obtener progreso global (0-100)
  getGlobalProgress() {
    const totalItems = 8 * 3 * 3; // 8 temas × 3 weeks × 3 elementos (teoria, ejercicios, examen)
    const completed = 
      this.data.stats.teoriasCompletadas +
      this.data.stats.ejerciciosCompletados +
      this.data.stats.examenesCompletados;
    
    return Math.round((completed / totalItems) * 100);
  }

  // Verificar si un elemento está completado
  isCompleted(tipo, tema, week) {
    const weekData = this.data.temas[tema]?.[week];
    if (!weekData) return false;
    
    if (tipo === 'teoria') {
      return weekData.teoria?.completada || false;
    } else if (tipo === 'ejercicios') {
      return weekData.ejercicios && weekData.ejercicios.length > 0;
    } else if (tipo === 'examen') {
      return weekData.examen?.completado || false;
    }
    
    return false;
  }

  // ============================================
  // NUEVO: Obtener días con actividad
  // ============================================
  getActiveDays() {
    const activeDays = [];
    
    // Recorrer todos los temas y weeks
    for (let tema = 1; tema <= 8; tema++) {
      for (let week = 1; week <= 3; week++) {
        const weekData = this.data.temas[tema]?.[week];
        if (weekData) {
          // Si hay teoría completada
          if (weekData.teoria?.completada && weekData.teoria?.fecha) {
            const date = new Date(weekData.teoria.fecha).toISOString().split('T')[0];
            if (!activeDays.includes(date)) activeDays.push(date);
          }
          
          // Si hay ejercicios completados
          if (weekData.ejercicios && weekData.ejercicios.length > 0) {
            weekData.ejercicios.forEach(ej => {
              if (ej.fecha) {
                const date = new Date(ej.fecha).toISOString().split('T')[0];
                if (!activeDays.includes(date)) activeDays.push(date);
              }
            });
          }
          
          // Si hay examen completado
          if (weekData.examen?.completado && weekData.examen?.fecha) {
            const date = new Date(weekData.examen.fecha).toISOString().split('T')[0];
            if (!activeDays.includes(date)) activeDays.push(date);
          }
        }
      }
    }
    
    return activeDays;
  }

  // Resetear todo el progreso
  resetProgress() {
    if (confirm('⚠️ ¿Estás seguro de que quieres borrar TODO tu progreso? Esta acción no se puede deshacer.')) {
      localStorage.removeItem(this.storageKey);
      this.data = {};
      this.initializeData();
      location.reload();
    }
  }

  // Obtener estadísticas para el dashboard
  getStats() {
    return {
      globalProgress: this.getGlobalProgress(),
      temasCompletados: this.data.stats.temasCompletados,
      weeksCompletadas: this.data.stats.weeksCompletadas,
      teoriasCompletadas: this.data.stats.teoriasCompletadas,
      ejerciciosCompletados: this.data.stats.ejerciciosCompletados,
      examenesCompletados: this.data.stats.examenesCompletados,
      puntacionesPerfectas: this.data.stats.puntacionesPerfectas,
      streakDays: this.data.stats.streakDays,
      lastStudyDate: this.data.stats.lastStudyDate,
      achievements: this.data.achievements
    };
  }
}


// ============================================================
// FUNCIONES DE RENDERIZADO (SOLO EN INDEX.HTML)
// ============================================================

function renderProgressDashboard() {
  const progress = new ProgressSystem();
  const stats = progress.getStats();
  
  // Calcular progresos separados
  const teoriasTotal = 24; // 8 temas × 3 weeks
  const teoriaProgress = Math.round((stats.teoriasCompletadas / teoriasTotal) * 100);
  
  const practicaTotal = stats.ejerciciosCompletados + stats.examenesCompletados;
  const practicaTotalMax = 48; // 24 ejercicios + 24 exámenes
  const practicaProgress = Math.round((practicaTotal / practicaTotalMax) * 100);
  
  const circumference = 339.292;
  
  // Actualizar círculo de Teoría
  const teoriaCircle = document.querySelector('.progress-fill-teoria');
  const teoriaNumber = document.getElementById('teoria-progress-number');
  if (teoriaCircle && teoriaNumber) {
    const offsetTeoria = circumference - (teoriaProgress / 100) * circumference;
    teoriaCircle.style.strokeDashoffset = offsetTeoria;
    teoriaNumber.textContent = `${teoriaProgress}%`;
  }
  
  // Actualizar círculo de Práctica
  const practicaCircle = document.querySelector('.progress-fill-practica');
  const practicaNumber = document.getElementById('practica-progress-number');
  if (practicaCircle && practicaNumber) {
    const offsetPractica = circumference - (practicaProgress / 100) * circumference;
    practicaCircle.style.strokeDashoffset = offsetPractica;
    practicaNumber.textContent = `${practicaProgress}%`;
  }
  
  // Actualizar estadísticas - TEORÍA
  document.getElementById('temas-completados').textContent = `${stats.temasCompletados}/8`;
  document.getElementById('weeks-completadas').textContent = `${stats.weeksCompletadas}/24`;
  document.getElementById('teorias-completadas').textContent = `${stats.teoriasCompletadas}/24`;
  
  // Actualizar estadísticas - PRÁCTICA
  document.getElementById('ejercicios-completados').textContent = stats.ejerciciosCompletados;
  document.getElementById('puntuaciones-perfectas').textContent = stats.puntacionesPerfectas;
  document.getElementById('examenes-completados').textContent = stats.examenesCompletados;
  
  // Actualizar racha
  document.getElementById('streak-days').textContent = stats.streakDays;
  
  // Actualizar fecha de último estudio
  const lastStudyEl = document.getElementById('last-study');
  if (stats.lastStudyDate) {
    const date = new Date(stats.lastStudyDate);
    const today = new Date().toDateString();
    const dateStr = date.toDateString();
    
    if (dateStr === today) {
      lastStudyEl.textContent = 'Último estudio: Hoy';
    } else {
      const diffDays = Math.floor((new Date() - date) / (1000 * 60 * 60 * 24));
      lastStudyEl.textContent = `Último estudio: Hace ${diffDays} día${diffDays !== 1 ? 's' : ''}`;
    }
  } else {
    lastStudyEl.textContent = 'Último estudio: Nunca';
  }
  
  // Renderizar logros
  renderAchievements(stats.achievements);
  
  // Renderizar indicadores visuales en botones
  renderCompletionIndicators(progress);
  
  // Renderizar nuevas secciones
  renderWeeklyProgress(progress);
  renderRecentActivities(progress);
  renderNextGoal(progress);
  // Renderizar calendario de actividad
  renderActivityCalendar(progress);
  // Renderizar resumen semanal
  renderWeeklySummary(progress);
    
  // Botón de información
  document.getElementById('info-progress-btn').addEventListener('click', () => {
    showProgressInfo();
  });
  
  // Botón de exportar
  document.getElementById('export-progress-btn').addEventListener('click', () => {
    exportProgress();
  });
  
  // Botón de importar
  document.getElementById('import-progress-btn').addEventListener('click', () => {
    importProgress();
  });
  
  // Input de archivo para importar
  document.getElementById('import-file-input').addEventListener('change', handleFileImport);
  
  // Botón de reset
  document.getElementById('reset-progress-btn').addEventListener('click', () => {
    progress.resetProgress();
  });
}

function renderAchievements(unlockedIds) {
  const container = document.getElementById('achievements-container');
  container.innerHTML = '';
  
  Object.values(ACHIEVEMENTS).forEach(achievement => {
    const isUnlocked = unlockedIds.includes(achievement.id);
    const div = document.createElement('div');
    div.className = `achievement-item ${isUnlocked ? '' : 'locked'}`;
    div.title = achievement.desc;
    
    div.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-name">${achievement.name}</div>
      <div class="achievement-desc">${achievement.desc}</div>
    `;
    
    container.appendChild(div);
  });
}

function renderCompletionIndicators(progress) {
  // Marcar teorías completadas
  document.querySelectorAll('.teoria-btn').forEach(btn => {
    const tema = btn.dataset.tema;
    const week = btn.dataset.week;
    
    if (progress.isCompleted('teoria', tema, week)) {
      btn.classList.add('btn-completado');
      btn.innerHTML = '✅ Ver';
    }
  });
  
  // Marcar ejercicios completados
  document.querySelectorAll('.ejercicios-btn').forEach(btn => {
    const tema = btn.dataset.tema;
    const week = btn.dataset.week;
    
    if (progress.isCompleted('ejercicios', tema, week)) {
      btn.classList.add('btn-completado');
      btn.innerHTML = '✅ Ver';
    }
  });
  
  // Marcar exámenes completados
  document.querySelectorAll('.examenes-btn').forEach(btn => {
    const tema = btn.dataset.tema;
    const week = btn.dataset.week;
    
    if (progress.isCompleted('examen', tema, week)) {
      btn.classList.add('btn-completado');
      btn.innerHTML = '✅ Ver';
    }
  });
}

// ============================================================
// NUEVAS FUNCIONES DE RENDERIZADO
// ============================================================

// 1. PROGRESO SEMANAL
function renderWeeklyProgress(progress) {
  const container = document.getElementById('weekly-progress-bars');
  if (!container) return;
  
  const data = progress.data;
  const weekProgress = [];
  
  // Calcular progreso por week (últimas 4 weeks con actividad)
  for (let tema = 1; tema <= 8; tema++) {
    for (let week = 1; week <= 3; week++) {
      const weekData = data.temas[tema]?.[week];
      if (weekData) {
        let completed = 0;
        if (weekData.teoria) completed++;
        if (weekData.ejercicios) completed++;
        if (weekData.examen) completed++;
        
        const percent = Math.round((completed / 3) * 100);
        weekProgress.push({
          label: `T${tema}W${week}`,
          percent: percent,
          completed: completed,
          total: 3
        });
      }
    }
  }
  
  // Tomar las últimas 4
  const recentWeeks = weekProgress.slice(-4);
  
  if (recentWeeks.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: #94a3b8; font-size: 0.875rem; padding: 1rem;">
        No hay progreso registrado aún
      </div>
    `;
    return;
  }
  
  container.innerHTML = recentWeeks.map(week => `
    <div class="week-bar-item">
      <div class="week-bar-header">
        <span class="week-bar-label">${week.label}</span>
        <span class="week-bar-percent">${week.percent}%</span>
      </div>
      <div class="week-bar-bg">
        <div class="week-bar-fill ${week.percent === 0 ? 'empty' : ''}" 
             style="width: ${week.percent}%"></div>
      </div>
    </div>
  `).join('');
}

// 2. ÚLTIMAS ACTIVIDADES
function renderRecentActivities(progress) {
  const container = document.getElementById('recent-activities');
  if (!container) return;
  
  const data = progress.data;
  const activities = [];
  
  // Recopilar todas las actividades con timestamp
  for (let tema = 1; tema <= 8; tema++) {
    for (let week = 1; week <= 3; week++) {
      const weekData = data.temas[tema]?.[week];
      if (weekData) {
        if (weekData.teoria) {
          activities.push({
            type: 'teoria',
            icon: '📖',
            title: `Teoría T${tema}W${week}`,
            time: 'Hoy'
          });
        }
        if (weekData.ejercicios) {
          activities.push({
            type: 'ejercicio',
            icon: '✏️',
            title: `Ejercicio T${tema}W${week}`,
            time: 'Hoy'
          });
        }
        if (weekData.examen) {
          activities.push({
            type: 'examen',
            icon: '📝',
            title: `Examen T${tema}W${week}`,
            time: 'Hoy'
          });
        }
      }
    }
  }
  
  // Añadir logros
  data.achievements.forEach((achId, index) => {
    const achievement = ACHIEVEMENTS[achId];
    if (achievement) {
      activities.push({
        type: 'logro',
        icon: achievement.icon,
        title: `Logro: ${achievement.name}`,
        time: 'Hoy'
      });
    }
  });
  
  // Tomar las últimas 5
  const recentActivities = activities.slice(-5).reverse();
  
  if (recentActivities.length === 0) {
    container.innerHTML = `
      <div class="activities-list empty">
        No hay actividades registradas
      </div>
    `;
    return;
  }
  
  container.innerHTML = recentActivities.map(activity => `
    <div class="activity-item ${activity.type}">
      <div class="activity-icon">${activity.icon}</div>
      <div class="activity-details">
        <div class="activity-title">${activity.title}</div>
        <div class="activity-time">${activity.time}</div>
      </div>
    </div>
  `).join('');
}

// 3. PRÓXIMO OBJETIVO
function renderNextGoal(progress) {
  const container = document.getElementById('next-goal-content');
  if (!container) return;
  
  const stats = progress.data.stats;
  const unlockedAchievements = progress.data.achievements;
  
  // Encontrar el próximo logro no desbloqueado
  const allAchievements = Object.values(ACHIEVEMENTS);
  const nextAchievement = allAchievements.find(ach => 
    !unlockedAchievements.includes(ach.id)
  );
  
  if (!nextAchievement) {
    container.innerHTML = `
      <div class="goal-icon">🏆</div>
      <div class="goal-name">¡Todos los logros completados!</div>
      <div class="goal-message">Has desbloqueado todos los logros disponibles</div>
    `;
    container.classList.add('completed');
    return;
  }
  
  // Calcular progreso hacia ese logro
  let current = 0;
  let target = 0;
  let progressPercent = 0;
  
  if (nextAchievement.id === 'first_steps') {
    current = stats.teoriasCompletadas;
    target = 1;
  } else if (nextAchievement.id === 'exercise_pro') {
    current = stats.ejerciciosCompletados;
    target = 10;
  } else if (nextAchievement.id === 'perfect_score') {
    current = stats.puntacionesPerfectas;
    target = 1;
  } else if (nextAchievement.id === 'week_warrior') {
    current = stats.weeksCompletadas;
    target = 1;
  } else if (nextAchievement.id === 'theme_master') {
    current = stats.temasCompletados;
    target = 1;
  } else if (nextAchievement.id === 'streak_7') {
    current = stats.streakDays;
    target = 7;
  } else if (nextAchievement.id === 'half_course') {
    current = stats.temasCompletados;
    target = 4;
  } else if (nextAchievement.id === 'course_complete') {
    current = stats.temasCompletados;
    target = 8;
  }
  
  progressPercent = Math.min(100, Math.round((current / target) * 100));
  const remaining = Math.max(0, target - current);
  
  container.innerHTML = `
    <div class="goal-icon">${nextAchievement.icon}</div>
    <div class="goal-name">${nextAchievement.name}</div>
    <div class="goal-progress-container">
      <div class="goal-progress-bar">
        <div class="goal-progress-fill" style="width: ${progressPercent}%"></div>
      </div>
      <div class="goal-progress-text">
        <span class="goal-current">${current}/${target}</span>
        <span class="goal-target">${progressPercent}%</span>
      </div>
    </div>
    <div class="goal-message">
      ${remaining > 0 ? `Faltan ${remaining} más para desbloquearlo` : '¡Ya está listo!'}
    </div>
  `;
}

// ============================================================
// EXPORTAR/IMPORTAR PROGRESO
// ============================================================

function exportProgress() {
  const progress = new ProgressSystem();
  const data = progress.data;
  
  // Crear objeto con metadata
  const exportData = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    data: data
  };
  
  // Convertir a JSON
  const jsonString = JSON.stringify(exportData, null, 2);
  
  // Crear blob y descargar
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  // Crear nombre de archivo con fecha
  const date = new Date();
  const fileName = `progreso-ingles-${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}.json`;
  
  // Descargar
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  // Mostrar confirmación
  showNotification('✅ Progreso exportado correctamente', 'success');
}

function importProgress() {
  const input = document.getElementById('import-file-input');
  input.click();
}

function handleFileImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importData = JSON.parse(e.target.result);
      
      // Validar estructura
      if (!importData.data || !importData.version) {
        throw new Error('Formato de archivo inválido');
      }
      
      // Confirmar importación
      if (confirm('⚠️ ¿Estás seguro de que quieres importar este progreso? Esto sobrescribirá tu progreso actual.')) {
        // Guardar datos importados
        localStorage.setItem('courseProgress', JSON.stringify(importData.data));
        
        // Mostrar confirmación y recargar
        showNotification('✅ Progreso importado correctamente. Recargando...', 'success');
        setTimeout(() => {
          location.reload();
        }, 1500);
      }
    } catch (error) {
      showNotification('❌ Error al importar: Archivo inválido o corrupto', 'error');
      console.error('Error importando:', error);
    }
  };
  reader.readAsText(file);
  
  // Limpiar input para permitir reimportar el mismo archivo
  event.target.value = '';
}

function showNotification(message, type = 'info') {
  // Crear notificación toast
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Estilos inline para la notificación
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10001;
    font-weight: 600;
    font-size: 0.9rem;
    animation: slideInRight 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Auto-eliminar después de 3 segundos
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// ============================================================
// MODAL DE INFORMACIÓN
// ============================================================

function showProgressInfo() {
  const modal = document.createElement('div');
  modal.className = 'info-modal';
  modal.innerHTML = `
    <div class="info-modal-overlay"></div>
    <div class="info-modal-content">
      <div class="info-modal-header">
        <h3>ℹ️ Información del Sistema de Progreso</h3>
        <button class="info-modal-close" onclick="this.closest('.info-modal').remove()">✕</button>
      </div>
      <div class="info-modal-body">
        <div class="info-section">
          <h4>✅ Funcionamiento</h4>
          <p>Tu progreso se guarda automáticamente en el navegador usando <strong>localStorage</strong>. No necesitas crear cuenta ni iniciar sesión.</p>
        </div>
        
        <div class="info-section warning">
          <h4>⚠️ Limitaciones del localStorage</h4>
          <ul>
            <li><strong>Por navegador:</strong> El progreso guardado en Chrome no se verá en Firefox, Edge u otros navegadores del mismo dispositivo.</li>
            <li><strong>Por dispositivo:</strong> Lo guardado en tu PC no aparece automáticamente en tu móvil o tablet.</li>
            <li><strong>Sin sincronización automática:</strong> No hay backup automático en la nube.</li>
            <li><strong>Limpieza de datos:</strong> Si borras las cookies o datos del navegador, perderás el progreso guardado localmente.</li>
          </ul>
        </div>
        
        <div class="info-section tip">
          <h4>💾 Solución: Exportar/Importar</h4>
          <p>Para <strong>transferir tu progreso entre navegadores o dispositivos</strong>, o simplemente hacer copias de seguridad, usa los botones de Exportar e Importar.</p>
        </div>
        
        <div class="info-section">
          <h4>📤 Cómo Exportar tu Progreso</h4>
          <ol style="margin: 0.5rem 0 0 1rem; padding-left: 0.5rem; line-height: 1.8;">
            <li>Haz clic en el botón <strong>💾 Exportar</strong> en el panel de progreso.</li>
            <li>Se descargará automáticamente un archivo <strong>.json</strong> con este formato de nombre:<br>
            <code style="background: #e2e8f0; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.85rem;">progreso-ingles-2025-10-12.json</code></li>
            <li>El archivo se guardará en tu carpeta de <strong>Descargas</strong>.</li>
            <li>Guarda este archivo en un lugar seguro (USB, nube, email, etc.).</li>
          </ol>
        </div>
        
        <div class="info-section">
          <h4>📥 Cómo Importar tu Progreso</h4>
          <ol style="margin: 0.5rem 0 0 1rem; padding-left: 0.5rem; line-height: 1.8;">
            <li>Haz clic en el botón <strong>📥 Importar</strong> en el panel de progreso.</li>
            <li>Se abrirá un selector de archivos. Busca tu archivo <strong>.json</strong> exportado previamente.</li>
            <li>Selecciona el archivo y confirma.</li>
            <li>⚠️ <strong>Importante:</strong> Esto sobrescribirá tu progreso actual. Se te pedirá confirmación.</li>
            <li>La página se recargará automáticamente y verás tu progreso restaurado.</li>
          </ol>
        </div>
        
        <div class="info-section tip">
          <h4>💡 Casos de Uso</h4>
          <ul>
            <li><strong>Cambiar de navegador:</strong> Exporta en Chrome, importa en Firefox.</li>
            <li><strong>Cambiar de dispositivo:</strong> Exporta en PC, envía el archivo a tu móvil y luego importa.</li>
            <li><strong>Backup periódico:</strong> Exporta cada semana para tener copias de seguridad.</li>
            <li><strong>Antes de limpiar el navegador:</strong> Exporta antes de borrar datos/cookies.</li>
          </ul>
        </div>
        
        <div class="info-section">
          <h4>📄 Sobre el Archivo Exportado</h4>
          <ul>
            <li><strong>Formato:</strong> JSON (JavaScript Object Notation)</li>
            <li><strong>Extensión:</strong> .json</li>
            <li><strong>Contenido:</strong> Todos tus datos de progreso, logros, estadísticas y rachas</li>
            <li><strong>Tamaño:</strong> Muy pequeño (generalmente menos de 5 KB)</li>
            <li><strong>Seguridad:</strong> No contiene contraseñas ni datos sensibles, solo tu progreso del curso</li>
          </ul>
        </div>
        
        <div class="info-section warning">
          <h4>⚠️ Importante al Importar</h4>
          <ul>
            <li>Solo importa archivos que tú mismo hayas exportado desde este curso.</li>
            <li>No modifiques el contenido del archivo JSON manualmente.</li>
            <li>Asegúrate de que el archivo tenga extensión <strong>.json</strong></li>
            <li>Si el archivo está corrupto o es inválido, recibirás un mensaje de error.</li>
          </ul>
        </div>
        
        <div class="info-section">
          <h4>🔄 Resetear Progreso</h4>
          <p>Si quieres empezar de cero, usa el botón <strong>🔄 Reset</strong>. Esto borrará TODO tu progreso local. ⚠️ Esta acción no se puede deshacer (a menos que tengas un backup exportado).</p>
        </div>
        
        <div class="info-section tip">
          <h4>✅ Recomendaciones Finales</h4>
          <ul>
            <li>Usa <strong>siempre el mismo navegador</strong> para tu estudio diario.</li>
            <li><strong>Exporta tu progreso regularmente</strong> (cada 1-2 semanas recomendado).</li>
            <li>Guarda los archivos exportados en la nube (Google Drive, Dropbox, etc.) para mayor seguridad.</li>
            <li>Nombra tus backups con fechas para identificarlos fácilmente.</li>
          </ul>
        </div>
      </div>
      <div class="info-modal-footer">
        <button class="info-modal-btn" onclick="this.closest('.info-modal').remove()">Entendido</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Cerrar al hacer clic en el overlay
  modal.querySelector('.info-modal-overlay').addEventListener('click', () => {
    modal.remove();
  });
}

// ============================================
// RENDERIZAR CALENDARIO DE ACTIVIDAD
// ============================================

let calendarOffset = 0; // Offset en semanas (0 = hoy, -1 = 1 semana atrás, etc.)

function renderActivityCalendar(progress) {
  const grid = document.getElementById('activity-calendar-grid');
  const dateRange = document.getElementById('calendar-date-range');
  const prevBtn = document.getElementById('calendar-prev');
  const nextBtn = document.getElementById('calendar-next');
  
  if (!grid || !dateRange || !prevBtn || !nextBtn) return;
  
  // Configurar botones de navegación
  prevBtn.onclick = () => {
    calendarOffset -= 4; // Retroceder 4 semanas
    renderActivityCalendar(progress);
  };
  
  nextBtn.onclick = () => {
    calendarOffset += 4; // Avanzar 4 semanas
    if (calendarOffset > 0) calendarOffset = 0; // No puede ir más allá de hoy
    renderActivityCalendar(progress);
  };
  
  // Deshabilitar botón Next si estamos en el presente
  nextBtn.disabled = calendarOffset === 0;
  
  // Calcular rango de fechas (4 semanas = 28 días)
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + (calendarOffset * 7));
  
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 27); // 28 días incluyendo el último
  
  // Ajustar al inicio de la semana (lunes)
  const startDay = startDate.getDay();
  const daysToMonday = startDay === 0 ? 6 : startDay - 1;
  startDate.setDate(startDate.getDate() - daysToMonday);
  
  // Generar array de 28 días
  const days = [];
  for (let i = 0; i < 28; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    days.push(date);
  }
  
  // Actualizar rango de fechas
  const formatDate = (date) => {
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  };
  dateRange.textContent = `${formatDate(days[0])} - ${formatDate(days[27])}`;
  
  // Obtener días con actividad
  const activeDays = progress.getActiveDays(); // Implementaremos esto
  
  // Renderizar días
  grid.innerHTML = days.map(date => {
    const isToday = date.toDateString() === today.toDateString();
    const dateStr = date.toISOString().split('T')[0];
    const isActive = activeDays.includes(dateStr);
    
    let className = 'calendar-day';
    if (isToday) className += ' today';
    if (isActive) className += ' active';
    else className += ' inactive';
    
    const emoji = isActive ? '✅' : '⬜';
    const title = `${date.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}`;
    
    return `<div class="${className}" title="${title}">${emoji}</div>`;
  }).join('');
  
  // Actualizar estadísticas
  updateCalendarStats(progress, days);
}

// Actualizar estadísticas del calendario
function updateCalendarStats(progress, days) {
  const thisWeekEl = document.getElementById('calendar-this-week');
  const lastWeekEl = document.getElementById('calendar-last-week');
  const bestStreakEl = document.getElementById('calendar-best-streak');
  
  if (!thisWeekEl || !lastWeekEl || !bestStreakEl) return;
  
  const activeDays = progress.getActiveDays();
  const today = new Date();
  
  // Esta semana (últimos 7 días)
  const thisWeekDays = days.slice(-7).filter(date => {
    const dateStr = date.toISOString().split('T')[0];
    return activeDays.includes(dateStr) && date <= today;
  }).length;
  
  // Semana pasada (días 14-7)
  const lastWeekDays = days.slice(-14, -7).filter(date => {
    const dateStr = date.toISOString().split('T')[0];
    return activeDays.includes(dateStr);
  }).length;
  
  // Mejor racha
  let currentStreak = 0;
  let bestStreak = 0;
  days.forEach(date => {
    if (date > today) return;
    const dateStr = date.toISOString().split('T')[0];
    if (activeDays.includes(dateStr)) {
      currentStreak++;
      bestStreak = Math.max(bestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });
  
  thisWeekEl.textContent = `Esta semana: ${thisWeekDays} días`;
  lastWeekEl.textContent = `Semana pasada: ${lastWeekDays} días`;
  bestStreakEl.textContent = `Mejor racha: ${bestStreak} días`;
}

// ============================================
// RENDERIZAR RESUMEN SEMANAL
// ============================================

function renderWeeklySummary(progress) {
  const stats = progress.data.stats;
  
  // Actualizar textos
  const teoriasEl = document.getElementById('summary-teorias');
  const ejerciciosEl = document.getElementById('summary-ejercicios');
  const rachaEl = document.getElementById('summary-racha');
  const perfectosEl = document.getElementById('summary-perfectos');
  const messageEl = document.getElementById('motivational-message');
  
  if (teoriasEl) teoriasEl.textContent = `${stats.teoriasCompletadas} lecciones completadas`;
  if (ejerciciosEl) ejerciciosEl.textContent = `${stats.ejerciciosCompletados} ejercicios hechos`;
  if (rachaEl) rachaEl.textContent = `${stats.streakDays} días de racha`;
  if (perfectosEl) perfectosEl.textContent = `${stats.puntacionesPerfectas} puntuaciones perfectas`;
  
  // Mensaje motivacional
  if (messageEl) {
    const total = stats.teoriasCompletadas + stats.ejerciciosCompletados + stats.examenesCompletados;
    
    let message = '';
    if (total === 0) {
      message = '<p>🎉 ¡Empieza tu viaje hoy!</p><p>💪 Completa tu primera lección</p>';
    } else if (total < 5) {
      message = '<p>🌱 ¡Buen comienzo!</p><p>✨ Sigue así, vas genial</p>';
    } else if (total < 10) {
      message = '<p>🚀 ¡Excelente progreso!</p><p>🔥 Estás en racha</p>';
    } else if (total < 20) {
      message = '<p>⭐ ¡Increíble trabajo!</p><p>🎯 Ya dominas lo básico</p>';
    } else {
      message = '<p>🏆 ¡Eres imparable!</p><p>💎 ¡Sigue conquistando!</p>';
    }
    
    messageEl.innerHTML = message;
  }
}

// ============================================================
// INICIALIZACIÓN GLOBAL
// ============================================================

// Exportar para uso en otros archivos
window.ProgressSystem = ProgressSystem;

// Auto-inicializar en index.html
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.progress-dashboard')) {
      renderProgressDashboard();
    }
  });
} else {
  if (document.querySelector('.progress-dashboard')) {
    renderProgressDashboard();
  }
}

