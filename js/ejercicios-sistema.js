const EjerciciosUniversal = {
  config: null,

  // Inicializar con configuración específica de cada página
  init(configuracion) {
    this.config = configuracion;
    console.log(`Inicializando ejercicios - Tema ${configuracion.tema}, Week ${configuracion.week}`);
    // Detectar y activar ejercicios presentes en la página
    this.detectarYActivarEjercicios();
  },

  // Detecta automáticamente qué ejercicios hay en la página
  detectarYActivarEjercicios() {
    const ejerciciosEnPagina = document.querySelectorAll('.ejercicio-box[data-tipo]');

    ejerciciosEnPagina.forEach((box, index) => {
      const tipo = box.dataset.tipo;
      const id = box.dataset.id || `${tipo}-${index + 1}`;
      box.dataset.id = id; // Asignar ID si no tiene

      console.log(`Activando ejercicio: ${id} (tipo: ${tipo})`);
      this.activarEjercicio(tipo, id, box);

      // Event listeners para botones Reset y Solutions
      this.initBotonesAdicionales(id, box);
    });
  },

  // Activa la funcionalidad según el tipo de ejercicio
  activarEjercicio(tipo, id, box) {
    const handlers = {
      'fill-blanks': () => this.initFillBlanks(id, box),
      'multiple-choice': () => this.initMultipleChoice(id, box),     
      'listening-mc': () => this.initMultipleChoice(id, box),      
      'true-false': () => this.initTrueFalse(id, box),
      'matching': () => this.initMatching(id, box),
      'word-order': () => this.initWordOrder(id, box),
      'reading-comprehension': () => this.initReadingComprehension(id, box),
      'error-correction': () => this.initErrorCorrection(id, box),
      'translation': () => this.initTranslation(id, box),
      'word-bank': () => this.initWordBank(id, box),
      'verb-conjugation': () => this.initVerbConjugation(id, box),
      'cloze-test': () => this.initClozeTest(id, box),
      'dialogue': () => this.initDialogue(id, box),
      'drag-drop-categorize': () => this.initDragDropCategorize(id, box),
      'drag-drop-categorize-table': () => this.initDragDropCategorizeTable(id, box),
      'drag-to-gaps': () => this.initDragToGaps(id, box),
      'ranking': () => this.initRanking(id, box),
      'memory-game': () => this.initMemoryGame(id, box),
      'quiz-progress': () => this.initQuizProgress(id, box),
      'story-completion': () => this.initStoryCompletion(id, box),
      'transformation': () => this.initTransformation(id, box),
      spelling: this.initDragToGaps,     
      'verb-tenses': () => this.initVerbTenses(id, box),
      'prepositions': () => this.initPrepositions(id, box),
      'categorization': () => this.initCategorization(id, box),
      'multiple-choice-select': () => this.initMultipleChoice(id, box),
      'multiple-choice-select': () => this.initMatching(id, box)          
    };

    if (handlers[tipo]) {
      handlers[tipo]();
    } else {
      console.warn(`Tipo de ejercicio no implementado: ${tipo}`);
    }
  },

  // ==================== BOTONES ADICIONALES (RESET Y SOLUTIONS) ====================

  initBotonesAdicionales(id, box) {
    // Reset
    const btnReset = box.querySelector('.btn-reset');
    if (btnReset) {
      btnReset.addEventListener('click', (e) => {
        e.preventDefault();
        this.resetExercise(box);
      });
    }

    // Show Solutions
    const btnSolutions = box.querySelector('.btn-solutions');
    if (btnSolutions) {
      btnSolutions.addEventListener('click', (e) => {
        e.preventDefault();
        this.showSolutions(id, box);
      });
    }
  },

  // FUNCIÓN: RESET (Limpiar ejercicio)
  resetExercise(box) {
    // Inputs
    const inputs = box.querySelectorAll('input[type="text"], input[type="number"], textarea');
    inputs.forEach(input => {
      input.value = '';
      input.classList.remove('correct', 'incorrect');
      input.style.borderColor = '';
      input.style.backgroundColor = '';
    });

    // Radio y checkbox
    const radios = box.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    radios.forEach(radio => {
      radio.checked = false;
      const label = radio.closest('label') || radio.closest('.radio-option') || radio.closest('.checkbox-option') || radio.parentElement;
      if (label) {
        label.classList.remove('correct', 'incorrect');
        label.style.borderColor = '';
        label.style.backgroundColor = '';
      }
    });

    // Selects
    const selects = box.querySelectorAll('select');
    selects.forEach(select => {
      select.selectedIndex = 0;
      select.classList.remove('correct', 'incorrect');
      select.style.borderColor = '';
      select.style.backgroundColor = '';
    });

    // Limpiar huecos de arrastrar a huecos
    const gaps = box.querySelectorAll('.gap, .gap-story');
    gaps.forEach(g => {
      g.textContent = '';
      g.classList.remove('filled', 'correct', 'incorrect');
      g.style.borderColor = '';
      g.style.backgroundColor = '';
    });

    // Ocultar feedback
    const feedback = box.querySelector('.exercise-feedback');
    if (feedback) {
      feedback.style.display = 'none';
    }

    console.log('✓ Ejercicio reseteado');
  },

  // FUNCIÓN: SHOW SOLUTIONS (Mostrar respuestas)
  showSolutions(id, box) {
    const tipo = (box.dataset.tipo || '').toLowerCase();

    // Soporte directo para drag-to-gaps usando data-answer del HTML
    if (tipo === 'drag-to-gaps') {
      const gaps = box.querySelectorAll('.gap, .gap-story');
      gaps.forEach(gap => {
        const ans = gap.dataset.answer || '';
        gap.textContent = ans;
        gap.classList.add('filled');
        this.mostrarFeedback(gap, true);
      });

      this._mostrarBannerSolutions(box);
      console.log('✓ Soluciones mostradas (drag-to-gaps)');
      return;
    }

    // Resto de tipos: usar archivo de respuestas
    const respuestas = (this.config && this.config.respuestas) ? this.config.respuestas[id] : null;
    if (!respuestas) {
      alert('No hay soluciones disponibles para este ejercicio.');
      return;
    }

    // Fill-blanks y listening (inputs de texto)
    const inputs = box.querySelectorAll('input[type="text"], input[type="number"], textarea');
    inputs.forEach(input => {
      const name = input.name || input.id;
      if (name && respuestas[name] != null) {
        input.value = respuestas[name];
        input.classList.add('correct');
        input.classList.remove('incorrect');
        this.mostrarFeedback(input, true);
      }
    });

    // Multiple choice y true-false (radio buttons)
    const radios = box.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
      const questionName = radio.name;
      if (questionName && respuestas[questionName] != null) {
        const shouldBe = respuestas[questionName];
        if (radio.value === shouldBe) {
          radio.checked = true;
          const label = radio.closest('label') || radio.closest('.radio-option') || radio.parentElement;
          if (label) {
            label.classList.add('correct');
            label.classList.remove('incorrect');
            this.mostrarFeedback(label, true);
          }
        }
      }
    });

    // Checkboxes individuales con boolean o listas
    const checkboxes = box.querySelectorAll('input[type="checkbox"]');
    if (checkboxes.length) {
      checkboxes.forEach(cb => {
        const nm = cb.name;
        if (nm && Array.isArray(respuestas[nm])) {
          cb.checked = respuestas[nm].includes(cb.value);
          const label = cb.closest('.checkbox-option') || cb.closest('label') || cb.parentElement;
          if (label) this.mostrarFeedback(label, cb.checked);
        } else if (nm && typeof respuestas[nm] === 'boolean') {
          cb.checked = respuestas[nm];
          const label = cb.closest('.checkbox-option') || cb.closest('label') || cb.parentElement;
          if (label) this.mostrarFeedback(label, true);
        }
      });
    }

    // Matching y selects
    const selects = box.querySelectorAll('select');
    selects.forEach(select => {
      const name = select.name || select.id;
      if (name && respuestas[name] != null) {
        select.value = respuestas[name];
        select.classList.add('correct');
        select.classList.remove('incorrect');
        this.mostrarFeedback(select, true);
      }
    });

    this._mostrarBannerSolutions(box);
    console.log('✓ Soluciones mostradas');
  },

  _mostrarBannerSolutions(box) {
    let feedback = box.querySelector('.exercise-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.className = 'exercise-feedback';
      const form = box.querySelector('.ejercicio-form') || box;
      form.appendChild(feedback);
    }
    feedback.innerHTML = `
      <div class="feedback-success" style="
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        border: 2px solid #10b981;
        border-radius: 8px;
        padding: 1rem;
        margin-top: 1rem;
        text-align: center;
      ">
        <span class="feedback-icon" style="font-size: 2rem;">💡</span>
        <span class="feedback-text" style="color: #047857; font-weight: 600; margin-left: 0.5rem;">Solutions shown!</span>
      </div>
    `;
    feedback.style.display = 'block';
  },

  // ==================== UTILIDADES ====================

  // Localiza el botón de corrección soportando ambas clases sin tocar el HTML
  getCheckButton(box) {
    return box.querySelector('.btn-check, .btn-check-unique');
  },

  normalizar(texto) {
    return String(texto || '').toLowerCase().trim().replace(/[.,!?¿¡]/g, '');
  },

  compararRespuestas(userAnswer, correctAnswer) {
    return this.normalizar(userAnswer) === this.normalizar(correctAnswer);
  },

  mostrarFeedback(elemento, esCorrecto) {
    if (!elemento) return;
    elemento.style.transition = 'all 0.3s ease';
    if (esCorrecto) {
      elemento.style.borderColor = '#10b981';
      elemento.style.backgroundColor = '#d1fae5';
    } else {
      elemento.style.borderColor = '#ef4444';
      elemento.style.backgroundColor = '#fee2e2';
    }
  },

mostrarResultado(puntos, maxPuntos, idEjercicio) {
  const porcentaje = Math.round((puntos / maxPuntos) * 100);

  let mensaje, emoji;
  if (porcentaje === 100) {
    mensaje = 'Perfecto'; emoji = '🌟';
  } else if (porcentaje >= 80) {
    mensaje = 'Muy bien'; emoji = '😊';
  } else if (porcentaje >= 60) {
    mensaje = 'Buen trabajo'; emoji = '🙂';
  } else {
    mensaje = 'Sigue practicando'; emoji = '📚';
  }

  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.7); display: flex;
    align-items: center; justify-content: center; z-index: 10000;
    animation: fadeIn 0.3s ease;
  `;

  modal.innerHTML = `
    <div style="
      background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
      border: 3px solid #10b981; border-radius: 16px; padding: 3rem;
      text-align: center; width: 500px; min-height: 520px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      display: flex; flex-direction: column; justify-content: space-between;
    ">
      <div style="font-size: 4rem; margin-bottom: 1rem; height: 80px; display: flex; align-items: center; justify-content: center;">
        ${emoji}
      </div>
      <h2 style="color: #047857; font-size: 2rem; margin-bottom: 1rem; font-weight: 800; height: 60px; display: flex; align-items: center; justify-content: center;">
        ${mensaje}
      </h2>
      <div style="
        width: 160px; height: 160px; margin: 2rem auto; border-radius: 50%;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4); flex-shrink: 0;
      ">
        <span style="color: white; font-size: 3.5rem; font-weight: 800; line-height: 1;">
          ${porcentaje}%
        </span>
      </div>
      <p style="color: #065f46; font-size: 1.2rem; margin: 1.5rem 0; font-weight: 600; height: 40px; display: flex; align-items: center; justify-content: center;">
        <strong>${puntos}</strong> <span style="margin: 0 0.3rem;">de</span> <strong>${maxPuntos}</strong><span style="margin: 0 0.1rem;"></span>correctas.
      </p>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
        color: white; border: none; border-radius: 10px;
        padding: 1rem 2.5rem; font-size: 1.1rem; font-weight: 700;
        cursor: pointer; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        transition: all 0.3s ease; margin-top: 1rem; width: 100%;
      " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(59, 130, 246, 0.4)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(59, 130, 246, 0.3)'">
        Continuar
      </button>
    </div>
  `;

  document.body.appendChild(modal);
  this.guardarPuntuacion(idEjercicio, puntos, maxPuntos, porcentaje);
},

  guardarPuntuacion(idEjercicio, puntos, maxPuntos, porcentaje) {
    const clave = `tema${this.config.tema}_week${this.config.week}`;
    let datos = JSON.parse(localStorage.getItem('ejercicios_progreso') || '{}');

    if (!datos[clave]) datos[clave] = {};

    datos[clave][idEjercicio] = {
      puntos,
      maxPuntos,
      porcentaje,
      fecha: new Date().toISOString()
    };

    localStorage.setItem('ejercicios_progreso', JSON.stringify(datos));
    
    // ============================================================
    // INTEGRACIÓN CON EL SISTEMA DE PROGRESO
    // ============================================================
    if (window.ProgressSystem && porcentaje >= 70) {
      const progress = new window.ProgressSystem();
      const tema = this.config.tema;
      const week = this.config.week;
      
      if (tema && week) {
        progress.markExerciseComplete(tema, week, porcentaje);
        console.log(`📊 Progreso actualizado: Tema ${tema}, Week ${week} - ${porcentaje}%`);
      }
    }
  },

  // ==================== EJERCICIOS TIPO FORMULARIO ====================

  initFillBlanks(id, box) {
    const btn = this.getCheckButton(box);
    if (!btn) return;
    const form = box.querySelector('.ejercicio-form');
    const respuestas = this.config?.respuestas?.[id];
    if (!respuestas || !form) return;

    btn.addEventListener('click', () => {
      let puntos = 0;
      const maxPuntos = Object.keys(respuestas).length;

      Object.keys(respuestas).forEach(campo => {
        const input = form.querySelector(`[name="${campo}"]`);
        if (input) {
          const esCorrecto = this.compararRespuestas(input.value, respuestas[campo]);
          this.mostrarFeedback(input, esCorrecto);
          if (esCorrecto) puntos++;
        }
      });

      this.mostrarResultado(puntos, maxPuntos, id);
    });
  },

  initMultipleChoice(id, box) {
    const btn = this.getCheckButton(box);
    if (!btn) return;
    const form = box.querySelector('.ejercicio-form');
    const respuestas = this.config?.respuestas?.[id];
    if (!respuestas || !form) return;

    btn.addEventListener('click', () => {
      let puntos = 0;
      const maxPuntos = Object.keys(respuestas).length;

      Object.keys(respuestas).forEach(campo => {
        const selected = form.querySelector(`input[name="${campo}"]:checked`);
        if (selected) {
          const label = selected.closest('.radio-option') || selected.closest('label') || selected.parentElement;
          const esCorrecto = selected.value === respuestas[campo];
          this.mostrarFeedback(label, esCorrecto);
          if (esCorrecto) puntos++;
        }
      });

      this.mostrarResultado(puntos, maxPuntos, id);
    });
  },

  initTrueFalse(id, box) {
    this.initMultipleChoice(id, box);
  },

  initMatching(id, box) {
    const btn = this.getCheckButton(box);
    if (!btn) return;
    const form = box.querySelector('.ejercicio-form');
    const respuestas = this.config?.respuestas?.[id];
    if (!respuestas || !form) return;

    btn.addEventListener('click', () => {
      let puntos = 0;
      const maxPuntos = Object.keys(respuestas).length;

      Object.keys(respuestas).forEach(campo => {
        const select = form.querySelector(`[name="${campo}"]`);
        if (select) {
          const esCorrecto = select.value === respuestas[campo];
          this.mostrarFeedback(select, esCorrecto);
          if (esCorrecto) puntos++;
        }
      });

      this.mostrarResultado(puntos, maxPuntos, id);
    });
  },

  initWordOrder(id, box) { this.initFillBlanks(id, box); },
  initErrorCorrection(id, box) { this.initFillBlanks(id, box); },
  initTranslation(id, box) { this.initFillBlanks(id, box); },
  initWordBank(id, box) { this.initFillBlanks(id, box); },
  initVerbConjugation(id, box) { this.initFillBlanks(id, box); },
  initClozeTest(id, box) { this.initMatching(id, box); },
  initDialogue(id, box) { this.initMatching(id, box); },
  initTransformation(id, box) { this.initFillBlanks(id, box); },
  initVerbTenses(id, box) { this.initFillBlanks(id, box); },
  initPrepositions(id, box) { this.initMatching(id, box); },

  initReadingComprehension(id, box) {
    const btn = this.getCheckButton(box);
    if (!btn) return;
    const form = box.querySelector('.ejercicio-form');
    const respuestas = this.config?.respuestas?.[id];
    if (!respuestas || !form) return;

    btn.addEventListener('click', () => {
      let puntos = 0;
      let maxPuntos = 0;

      // Inputs de texto
      Object.keys(respuestas).forEach(campo => {
        if (campo !== 'hobbies') {
          maxPuntos++;
          const input = form.querySelector(`[name="${campo}"]`);
          if (input) {
            const esCorrecto = this.compararRespuestas(input.value, respuestas[campo]);
            this.mostrarFeedback(input, esCorrecto);
            if (esCorrecto) puntos++;
          }
        }
      });

      // Checkboxes
      if (Array.isArray(respuestas.hobbies)) {
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => {
          const esRespuestaCorrecta = respuestas.hobbies.includes(cb.value);
          const estaSeleccionado = cb.checked;
          const label = cb.closest('.checkbox-option') || cb.closest('label') || cb.parentElement;

          if ((esRespuestaCorrecta && estaSeleccionado) || (!esRespuestaCorrecta && !estaSeleccionado)) {
            this.mostrarFeedback(label, true);
            puntos++;
          } else {
            this.mostrarFeedback(label, false);
          }
        });
        maxPuntos += checkboxes.length;
      }

      this.mostrarResultado(puntos, maxPuntos, id);
    });
  },

  initCategorization(id, box) {
    const btn = this.getCheckButton(box);
    if (!btn) return;
    const respuestas = this.config?.respuestas?.[id];
    if (!respuestas) return;

    btn.addEventListener('click', () => {
      let puntos = 0;
      let maxPuntos = 0;

      Object.keys(respuestas).forEach(checkboxName => {
        maxPuntos++;
        const checkbox = box.querySelector(`[name="${checkboxName}"]`);
        if (checkbox) {
          const deberiaMarcarse = respuestas[checkboxName];
          const estaMarcado = checkbox.checked;
          const label = checkbox.closest('.checkbox-option') || checkbox.closest('label') || checkbox.parentElement;

          const esCorrecto = deberiaMarcarse === estaMarcado;
          this.mostrarFeedback(label, esCorrecto);
          if (esCorrecto) puntos++;
        }
      });

      this.mostrarResultado(puntos, maxPuntos, id);
    });
  },

  // ==================== DRAG & DROP ====================

  initDragDropCategorize(id, box) {
    const draggables = box.querySelectorAll('.draggable-item');
    const dropZones = box.querySelectorAll('.drop-zone');
    const btn = this.getCheckButton(box);
    if (!btn) return;

    const respuestas = this.config?.respuestas?.[id];
    if (!respuestas) return;

    draggables.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', item.textContent.trim());
        item.classList.add('dragging');
      });
      item.addEventListener('dragend', () => item.classList.remove('dragging'));
    });

    dropZones.forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('drag-over');
      });
      zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        const texto = e.dataTransfer.getData('text');
        const item = Array.from(draggables).find(d => d.textContent.trim() === texto);
        if (item) zone.appendChild(item);
      });
    });

    btn.addEventListener('click', () => {
      let puntos = 0;
      const maxPuntos = Object.keys(respuestas).length;

      dropZones.forEach(zone => {
        const categoria = zone.dataset.category;
        const items = zone.querySelectorAll('.draggable-item');

        items.forEach(item => {
          const palabra = this.normalizar(item.textContent);
          const esCorrecto = respuestas[palabra] === categoria;
          this.mostrarFeedback(item, esCorrecto);
          if (esCorrecto) puntos++;
        });
      });

      this.mostrarResultado(puntos, maxPuntos, id);
    });
  },

  // NUEVO: Drag and Drop Categorize con tabla (word-item)
  initDragDropCategorizeTable(id, box) {
    const draggables = box.querySelectorAll('.word-item');
    const dropZones = box.querySelectorAll('.drop-zone');
    const btn = this.getCheckButton(box);
    
    if (!btn) return;
    
    const respuestas = this.config?.respuestas?.[id];
    if (!respuestas) return;
    
    // Hacer elementos arrastrables
    draggables.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', item.textContent.trim());
        item.classList.add('dragging');
      });
      
      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
      });
    });
    
    // Configurar zonas de soltar
    dropZones.forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('drag-over');
      });
      
      zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
      });
      
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        
        const texto = e.dataTransfer.getData('text');
        const item = Array.from(draggables).find(d => d.textContent.trim() === texto);
        
        if (item) {
          zone.appendChild(item);
        }
      });
    });
    
    // Botón de corrección
    btn.addEventListener('click', () => {
      let puntos = 0;
      const maxPuntos = Object.keys(respuestas).length;
      
      dropZones.forEach(zone => {
        const categoria = zone.dataset.category;
        const items = zone.querySelectorAll('.word-item');
        
        items.forEach(item => {
          const palabra = this.normalizar(item.textContent);
          const esCorrecto = respuestas[palabra] === categoria;
          this.mostrarFeedback(item, esCorrecto);
          if (esCorrecto) puntos++;
        });
      });
      
      this.mostrarResultado(puntos, maxPuntos, id);
    });
    
    // Botón Reset
    const resetBtn = box.querySelector('.btn-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const wordBank = box.querySelector('.word-bank');
        dropZones.forEach(zone => {
          const items = zone.querySelectorAll('.word-item');
          items.forEach(item => {
            item.classList.remove('correct', 'incorrect');
            wordBank.appendChild(item);
          });
        });
        this.limpiarResultado(box);
      });
    }
    
    // Botón Show Solutions
    const solutionsBtn = box.querySelector('.btn-solutions');
    if (solutionsBtn) {
      solutionsBtn.addEventListener('click', () => {
        // Limpiar todas las zonas primero
        const wordBank = box.querySelector('.word-bank');
        draggables.forEach(item => {
          item.classList.remove('correct', 'incorrect');
          wordBank.appendChild(item);
        });
        
        // Colocar cada item en su categoría correcta
        draggables.forEach(item => {
          const palabra = this.normalizar(item.textContent);
          const categoriaCorrecta = respuestas[palabra];
          
          if (categoriaCorrecta) {
            const zoneCorrecta = Array.from(dropZones).find(
              zone => zone.dataset.category === categoriaCorrecta
            );
            if (zoneCorrecta) {
              zoneCorrecta.appendChild(item);
              item.classList.add('correct');
            }
          }
        });
        
        this.mostrarResultado(Object.keys(respuestas).length, Object.keys(respuestas).length, id);
      });
    }
  },

  initDragToGaps(id, box) {
    const words = box.querySelectorAll('.word-item');
    const gaps = box.querySelectorAll('.gap, .gap-story');
    const btn = this.getCheckButton(box);
    if (!btn) return;

    words.forEach(word => {
      word.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', word.textContent.trim());
      });
    });

    gaps.forEach(gap => {
      gap.addEventListener('dragover', (e) => {
        e.preventDefault();
        gap.classList.add('drag-over');
      });
      gap.addEventListener('dragleave', () => gap.classList.remove('drag-over'));
      gap.addEventListener('drop', (e) => {
        e.preventDefault();
        gap.classList.remove('drag-over');
        gap.textContent = e.dataTransfer.getData('text');
        gap.classList.add('filled');
      });
    });

    btn.addEventListener('click', () => {
      let puntos = 0;
      const maxPuntos = gaps.length;

      gaps.forEach(gap => {
        const esCorrecto = this.compararRespuestas(gap.textContent, gap.dataset.answer);
        this.mostrarFeedback(gap, esCorrecto);
        if (esCorrecto) puntos++;
      });

      this.mostrarResultado(puntos, maxPuntos, id);
    });
  },

  initStoryCompletion(id, box) {
    this.initDragToGaps(id, box);
  },

  initRanking(id, box) {
    const btn = this.getCheckButton(box);
    if (!btn) return;
    const respuestas = this.config?.respuestas?.[id];
    if (!respuestas) return;

    let draggedItem = null;

    // Hacer los items arrastrables y reordenables
    box.querySelectorAll('.sortable-item').forEach(item => {
      item.addEventListener('dragstart', () => draggedItem = item);
      item.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (item !== draggedItem) {
          const allItems = [...box.querySelectorAll('.sortable-item')];
          const draggedIndex = allItems.indexOf(draggedItem);
          const targetIndex = allItems.indexOf(item);

          if (draggedIndex < targetIndex) {
            item.parentNode.insertBefore(draggedItem, item.nextSibling);
          } else {
            item.parentNode.insertBefore(draggedItem, item);
          }
        }
      });
    });

    btn.addEventListener('click', () => {
      const currentItems = [...box.querySelectorAll('.sortable-item')]; // orden actual
      const ordenActual = currentItems.map(it =>
        this.normalizar(it.querySelector('.sortable-item-content').textContent)
      );

      let puntos = 0;
      const maxPuntos = respuestas.length;

      ordenActual.forEach((texto, index) => {
        const item = currentItems[index];
        const esCorrecto = this.normalizar(respuestas[index]) === texto;
        this.mostrarFeedback(item, esCorrecto);
        if (esCorrecto) puntos++;
      });

      this.mostrarResultado(puntos, maxPuntos, id);
    });
  },
  
  // ==================== JUEGOS ====================

  initMemoryGame(id, box) {
    const cards = box.querySelectorAll('.memory-card');
    const moveCounter = box.querySelector('#move-counter');
    const pairsCounter = box.querySelector('#pairs-counter');
    const resetBtn = box.querySelector('.btn-retry');

    let flippedCards = [];
    let moves = 0;
    let pairs = 0;
    const maxPairs = cards.length / 2;

    const shuffle = () => {
      const array = Array.from(cards);
      array.sort(() => Math.random() - 0.5);
      array.forEach(card => box.querySelector('.memory-game-container').appendChild(card));
    };

    const reset = () => {
      cards.forEach(card => card.classList.remove('flipped', 'matched'));
      flippedCards = [];
      moves = 0;
      pairs = 0;
      if (moveCounter) moveCounter.textContent = moves;
      if (pairsCounter) pairsCounter.textContent = pairs;
      shuffle();
    };

    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (flippedCards.length >= 2 || card.classList.contains('flipped')) return;

        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
          moves++;
          if (moveCounter) moveCounter.textContent = moves;

          const [c1, c2] = flippedCards;
          if (c1.dataset.pair === c2.dataset.pair) {
            setTimeout(() => {
              c1.classList.add('matched');
              c2.classList.add('matched');
              pairs++;
              if (pairsCounter) pairsCounter.textContent = pairs;
              flippedCards = [];

              if (pairs === maxPairs) {
                setTimeout(() => this.mostrarResultado(maxPairs, maxPairs, id), 500);
              }
            }, 500);
          } else {
            setTimeout(() => {
              c1.classList.remove('flipped');
              c2.classList.remove('flipped');
              flippedCards = [];
            }, 1000);
          }
        }
      });
    });

    if (resetBtn) resetBtn.addEventListener('click', reset);
    shuffle();
  },

  initQuizProgress(id, box) {
    const questions = box.querySelectorAll('.quiz-question');
    const progressFill = box.querySelector('.progress-fill');
    const currentQ = box.querySelector('#current-question');
    const btnPrev = box.querySelector('.btn-prev');
    const btnNext = box.querySelector('.btn-next');
    const respuestas = this.config?.respuestas?.[id];

    let currentIndex = 0;

    const updateProgress = () => {
      questions.forEach((q, i) => q.classList.toggle('active', i === currentIndex));
      const progress = ((currentIndex + 1) / questions.length) * 100;
      if (progressFill) progressFill.style.width = `${progress}%`;
      if (currentQ) currentQ.textContent = currentIndex + 1;
      if (btnPrev) btnPrev.disabled = currentIndex === 0;
      if (btnNext) btnNext.textContent = currentIndex === questions.length - 1 ? 'Finalizar' : 'Next';
    };

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateProgress();
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (currentIndex < questions.length - 1) {
          currentIndex++;
          updateProgress();
        } else {
          // Finalizar quiz
          let puntos = 0;
          const maxPuntos = Object.keys(respuestas || {}).length;

          Object.keys(respuestas || {}).forEach(campo => {
            const selected = box.querySelector(`input[name="${campo}"]:checked`);
            if (selected && selected.value === respuestas[campo]) puntos++;
          });

          this.mostrarResultado(puntos, maxPuntos, id);
        }
      });
    }

    updateProgress();
  }
};

// Auto-inicializar con window.configurarEjercicios
window.configurarEjercicios = function(config) {
  EjerciciosUniversal.init(config);
};

// Funcionalidades adicionales que siempre se activan
document.addEventListener('DOMContentLoaded', () => {
  // Flashcards
  document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  // Hotspots
  document.querySelectorAll('.hotspot').forEach(spot => {
    spot.addEventListener('click', () => {
      spot.classList.add('clicked');
      setTimeout(() => spot.classList.remove('clicked'), 2000);
    });
  });

  // Prevenir envío de formularios
  document.querySelectorAll('.ejercicio-form').forEach(form => {
    form.addEventListener('submit', e => e.preventDefault());
  });

  console.log('Sistema de ejercicios listo ✅');
});

// lea lo que ya guardas, compute estadísticas y otorgue logros; se engancha tras guardarPuntuacion sin romper nada.

const Progress = {
  load() {
    return JSON.parse(localStorage.getItem('ejercicios_progreso') || '{}');
  },
  saveAchievements(ach) {
    localStorage.setItem('ejercicios_logros', JSON.stringify(ach));
  },
  loadAchievements() {
    return JSON.parse(localStorage.getItem('ejercicios_logros') || '{}');
  },
  // % de una week: media de porcentajes de sus ejercicios
  computeWeekProgress(tema, week) {
    const data = this.load();
    const clave = `tema${tema}_week${week}`;
    const ejercicios = data[clave] || {};
    const vals = Object.values(ejercicios).map(e => e.porcentaje);
    if (!vals.length) return { percent: 0, done: 0, total: 0 };
    const percent = Math.round(vals.reduce((a,b)=>a+b,0) / vals.length);
    return { percent, done: vals.filter(v=>v===100).length, total: vals.length };
  },
  // % de un tema: media de todas sus weeks presentes
  computeTopicProgress(tema) {
    const data = this.load();
    const entries = Object.entries(data).filter(([k]) => k.startsWith(`tema${tema}_week`));
    if (!entries.length) return { percent: 0, weeks: [] };
    const weeks = entries.map(([k]) => {
      const week = k.match(/week(\d+)/)?.[1] || '?';
      const vals = Object.values(data[k]).map(e => e.porcentaje);
      const percent = vals.length ? Math.round(vals.reduce((a,b)=>a+b,0)/vals.length) : 0;
      return { week, percent };
    });
    const percent = Math.round(weeks.reduce((a,w)=>a+w.percent,0)/weeks.length);
    return { percent, weeks };
  },
  // Logros simples
  awardAchievements(tema, week) {
    const ach = this.loadAchievements();
    const data = this.load();
    const clave = `tema${tema}_week${week}`;
    const items = Object.values(data[clave] || {});
    const completed100 = items.filter(x => x.porcentaje === 100).length;
    const total = items.length;

    const grant = (id, meta, valor) => {
      if (!ach[id]) ach[id] = { fecha: new Date().toISOString(), meta, valor };
    };

    if (total >= 1) grant('primer_ejercicio', 'Completar el primer ejercicio', total);
    if (completed100 >= 1) grant('primer_100', 'Primer ejercicio al 100%', completed100);
    if (total >= 10) grant('diez_ejercicios', '10 ejercicios completados en la week', total);

    // Racha diaria básica por fechas ISO
    const dias = Array.from(new Set(items.map(x => x.fecha?.slice(0,10)).filter(Boolean))).length;
    if (dias >= 3) grant('racha_3_dias', 'Practicar 3 días distintos', dias);

    this.saveAchievements(ach);
    return ach;
  },
  // Render widgets de progreso
  renderWeekWidget(container, tema, week) {
    const { percent, done, total } = this.computeWeekProgress(tema, week);
    container.innerHTML = `
      <div class="resultado-box">
        <h3>Week ${week} • Progreso</h3>
        <div class="progress-bar" style="margin:1rem 0;">
          <div class="progress-fill" style="width:${percent}%"></div>
        </div>
        <div class="feedback-details">
          <p>${percent}% completado · ${done}/${total} ejercicios al 100%</p>
        </div>
      </div>
    `;
  },
};

// Hook tras guardar puntuación
(function hookGuardar() {
  const original = EjerciciosUniversal.guardarPuntuacion;
  EjerciciosUniversal.guardarPuntuacion = function(idEjercicio, puntos, maxPuntos, porcentaje) {
    original.call(this, idEjercicio, puntos, maxPuntos, porcentaje);
    // Tras guardar, recalcular logros para la week actual
    Progress.awardAchievements(this.config.tema, this.config.week);
    // Render opcional si existe un contenedor
    const box = document.getElementById('week-progress');
    if (box) Progress.renderWeekWidget(box, this.config.tema, this.config.week);
  };
})();
