// ==============================================================
// ejercicios-sistema.js - Sistema Universal de Ejercicios
// ==============================================================
/*
  GUÍA DE USO COMPLETA
  ====================
  
  Este archivo contiene toda la funcionalidad para TODOS los ejercicios.
  Se usa en las 24 páginas (8 temas × 3 weeks) sin modificarlo.
  
  ┌─────────────────────────────────────────────────────────────┐
  │ PASO 1: INCLUIR LOS SCRIPTS EN TU HTML                     │
  └─────────────────────────────────────────────────────────────┘
  
  Al final de cada archivo ejercicios.html, antes de </body>:
  
  <script src="../../js/ejercicios.js"></script>
  <script src="../../js/ejercicios-sistema.js"></script>
  <script src="../../js/respuestas/tema1-week1.js"></script>
  
  Cambia "tema1-week1.js" según corresponda (tema1-week2.js, etc.)
  
  ┌─────────────────────────────────────────────────────────────┐
  │ PASO 2: CREAR ARCHIVO DE RESPUESTAS                        │
  └─────────────────────────────────────────────────────────────┘
  
  Crea un archivo en js/respuestas/tema1-week1.js con:
  
  configurarEjercicios({
    tema: '1',
    week: '1',
    respuestas: {
      'fill-blanks-1': { q1: 'am', q2: 'is', q3: 'are' },
      'multiple-choice-1': { mc1: 'b', mc2: 'c' },
      // ... resto de ejercicios
    }
  });
  
  IMPORTANTE: Cada tema/week tiene su propio archivo de respuestas
  
  ┌─────────────────────────────────────────────────────────────┐
  │ PASO 3: ASIGNAR IDs A LOS EJERCICIOS EN EL HTML            │
  └─────────────────────────────────────────────────────────────┘
  
  Cada ejercicio debe tener data-tipo y data-id:
  
  <div class="ejercicio-box" data-tipo="fill-blanks" data-id="ejercicio-1">
    ...
  </div>
  
  Si no pones data-id, se auto-asigna como: fill-blanks-1, fill-blanks-2, etc.
  
  ┌─────────────────────────────────────────────────────────────┐
  │ FORMATOS DE RESPUESTAS POR TIPO DE EJERCICIO               │
  └─────────────────────────────────────────────────────────────┘
  
  1. FILL IN THE BLANKS (data-tipo="fill-blanks")
     Inputs de texto con name="q1", name="q2", etc.
     
     'ejercicio-1': {
       q1: 'am',
       q2: 'is',
       q3: 'are'
     }
  
  2. MULTIPLE CHOICE (data-tipo="multiple-choice")
     Radio buttons con name="mc1", name="mc2", value="a", value="b", etc.
     
     'ejercicio-2': {
       mc1: 'b',    // La letra correcta
       mc2: 'c'
     }
  
  3. TRUE/FALSE (data-tipo="true-false")
     Radio buttons con value="true" o value="false"
     
     'ejercicio-3': {
       tf1: 'true',
       tf2: 'false'
     }
  
  4. MATCHING (data-tipo="matching")
     Select dropdowns con options value="a", value="b", etc.
     
     'ejercicio-4': {
       match1: 'a',
       match2: 'b',
       match3: 'c'
     }
  
  5. WORD ORDER (data-tipo="word-order")
     Inputs de texto (funciona igual que fill-blanks)
     
     'ejercicio-5': {
       order1: 'i am a student',
       order2: 'she is from london'
     }
     NOTA: No importan mayúsculas ni puntuación
  
  6. READING COMPREHENSION (data-tipo="reading-comprehension")
     Combinación de inputs y checkboxes
     
     'ejercicio-6': {
       comp1: 'teacher',
       comp2: 'manchester',
       hobbies: ['reading', 'tennis']  // Array para checkboxes
     }
  
  7. ERROR CORRECTION (data-tipo="error-correction")
     Inputs de texto con oraciones corregidas
     
     'ejercicio-7': {
       error1: "she doesn't like coffee",
       error2: 'he is a student'
     }
  
  8. TRANSLATION (data-tipo="translation")
     Inputs de texto con traducciones
     
     'ejercicio-8': {
       trans1: 'i am twenty years old',
       trans2: 'she is an english teacher'
     }
  
  9. WORD BANK (data-tipo="word-bank")
     Inputs donde el usuario elige de un banco de palabras
     
     'ejercicio-9': {
       bank1: 'teacher',
       bank2: 'london',
       bank3: 'brother'
     }
  
  10. VERB CONJUGATION (data-tipo="verb-conjugation")
      Tabla de inputs con nombres específicos
      
      'ejercicio-10': {
        'go-present': 'go',
        'go-present-3rd': 'goes',
        'go-past': 'went',
        'eat-present': 'eat',
        'eat-present-3rd': 'eats',
        'eat-past': 'ate'
      }
  
  11. CLOZE TEST (data-tipo="cloze-test")
      Selects inline en texto (funciona como matching)
      
      'ejercicio-11': {
        cloze1: 'went',
        cloze2: 'saw',
        cloze3: 'played'
      }
  
  12. DIALOGUE (data-tipo="dialogue")
      Selects para completar diálogos
      
      'ejercicio-12': {
        dial1: 'a',
        dial2: 'b',
        dial3: 'c'
      }
  
  13. DRAG & DROP CATEGORIZE (data-tipo="drag-drop-categorize")
      Palabras que se arrastran a categorías
      
      'ejercicio-13': {
        'apple': 'fruits',      // palabra: categoría
        'banana': 'fruits',
        'car': 'transport',
        'bus': 'transport'
      }
      IMPORTANTE: La categoría debe coincidir con data-category del drop-zone
  
  14. DRAG TO GAPS (data-tipo="drag-to-gaps")
      Palabras que se arrastran a huecos con data-answer
      No necesita respuestas (usa data-answer del HTML)
      
      'ejercicio-14': {}  // Vacío o puedes omitirlo
  
  15. RANKING/ORDERING (data-tipo="ranking")
      Items que se ordenan arrastrando
      
      'ejercicio-15': [
        'wake up',
        'have breakfast',
        'have lunch',
        'have dinner',
        'go to bed'
      ]
      NOTA: Array en el orden correcto
  
  16. CATEGORIZATION (data-tipo="categorization")
      Checkboxes para categorizar (true = debe marcarse)
      
      'ejercicio-16': {
        'cat-fruit-apple': true,
        'cat-fruit-banana': true,
        'cat-fruit-car': false,
        'cat-trans-car': true,
        'cat-trans-bus': true
      }
  
  17. MEMORY GAME (data-tipo="memory-game")
      No necesita respuestas (usa data-pair del HTML)
      
      'ejercicio-17': {}  // Vacío
  
  18. QUIZ PROGRESS (data-tipo="quiz-progress")
      Quiz con barra de progreso (funciona como multiple choice)
      
      'ejercicio-18': {
        'quiz-q1': 'correct',
        'quiz-q2': 'correct',
        'quiz-q3': 'correct'
      }
      IMPORTANTE: Los valores deben coincidir con value="correct"
  
  19. STORY COMPLETION (data-tipo="story-completion")
      Arrastrar palabras a gaps (funciona como drag-to-gaps)
      
      'ejercicio-19': {}  // Usa data-answer del HTML
  
  20. TRANSFORMATION (data-tipo="transformation")
      Transformar oraciones (funciona como fill-blanks)
      
      'ejercicio-20': {
        q1: 'is she a doctor',
        q2: 'do they live in london'
      }
  
  21. VERB TENSES (data-tipo="verb-tenses")
      Conjugar verbos (funciona como fill-blanks)
      
      'ejercicio-21': {
        q1: 'walk',
        q2: 'visited',
        q3: 'will go'
      }
  
  22. PREPOSITIONS (data-tipo="prepositions")
      Selects de preposiciones
      
      'ejercicio-22': {
        q1: 'in',
        q2: 'at',
        q3: 'on'
      }
  
  ┌─────────────────────────────────────────────────────────────┐
  │ EJEMPLO COMPLETO DE UNA PÁGINA                             │
  └─────────────────────────────────────────────────────────────┘
  
  <!-- tema1/week1/ejercicios.html -->
  
  <!-- Tus ejercicios aquí -->
  <div class="ejercicio-box" data-tipo="fill-blanks" data-id="fill-blanks-1">
    <h3>Complete the sentences</h3>
    <form class="ejercicio-form">
      <input type="text" name="q1">
      <input type="text" name="q2">
      <button class="btn-check">Check</button>
    </form>
  </div>
  
  <div class="ejercicio-box" data-tipo="multiple-choice" data-id="multiple-choice-1">
    <h3>Choose the correct answer</h3>
    <form class="ejercicio-form">
      <input type="radio" name="mc1" value="a"> Option A
      <input type="radio" name="mc1" value="b"> Option B
      <button class="btn-check">Check</button>
    </form>
  </div>
  
  <!-- Al final antes de </body> -->
  <script src="../../js/teoria.js"></script>
  <script src="../../js/ejercicios-sistema.js"></script>
  <script src="../../js/respuestas/tema1-week1.js"></script>
  
  ┌─────────────────────────────────────────────────────────────┐
  │ ESTRUCTURA DE CARPETAS                                      │
  └─────────────────────────────────────────────────────────────┘
  
  proyecto/
  ├── tema1/
  │   ├── week1/
  │   │   └── ejercicios.html
  │   ├── week2/
  │   │   └── ejercicios.html
  │   └── week3/
  │       └── ejercicios.html
  ├── tema2/...
  └── js/
      ├── teoria.js
      ├── ejercicios-sistema.js (este archivo)
      └── respuestas/
          ├── tema1-week1.js
          ├── tema1-week2.js
          ├── tema1-week3.js
          ├── tema2-week1.js
          └── ... (24 archivos total)
  
  ┌─────────────────────────────────────────────────────────────┐
  │ SISTEMA DE PUNTUACIÓN AUTOMÁTICO                           │
  └─────────────────────────────────────────────────────────────┘
  
  El sistema guarda automáticamente en localStorage:
  - Puntuación de cada ejercicio
  - Porcentaje obtenido
  - Fecha de realización
  - Progreso por tema y semana
  
  Ver progreso en consola:
  JSON.parse(localStorage.getItem('ejercicios_progreso'))
  
  Borrar progreso:
  localStorage.removeItem('ejercicios_progreso')
  
  ┌─────────────────────────────────────────────────────────────┐
  │ CONSEJOS Y BUENAS PRÁCTICAS                                │
  └─────────────────────────────────────────────────────────────┘
  
  1. Usa IDs descriptivos: 'verb-to-be', 'prepositions-place'
  2. Las respuestas NO distinguen mayúsculas/minúsculas
  3. Se ignoran signos de puntuación automáticamente
  4. Asegúrate que los 'name' en HTML coincidan con las claves
  5. Para drag & drop, data-category debe coincidir exactamente
  6. Flashcards y hotspots funcionan sin configuración
  
  ┌─────────────────────────────────────────────────────────────┐
  │ SOLUCIÓN DE PROBLEMAS                                       │
  └─────────────────────────────────────────────────────────────┘
  
  Ejercicio no funciona:
  → Verifica que data-tipo esté bien escrito
  → Confirma que data-id existe en respuestas{}
  → Revisa la consola del navegador (F12)
  
  Respuestas siempre incorrectas:
  → Verifica que los 'name' coincidan con las claves
  → Para selects, verifica que los 'value' sean correctos
  
  Modal no aparece:
  → Verifica que .btn-check exista en el HTML
  → Confirma que hay al menos una respuesta configurada
  
  ┌─────────────────────────────────────────────────────────────┐
  │ SOPORTE PARA NUEVOS TIPOS DE EJERCICIO                     │
  └─────────────────────────────────────────────────────────────┘
  
  Si necesitas añadir un nuevo tipo de ejercicio:
  1. Añade el handler en activarEjercicio()
  2. Crea la función initNuevoTipo(id, box)
  3. Implementa la lógica de corrección
  4. Llama a this.mostrarResultado(puntos, maxPuntos, id)

=======================================================================================================================================================  
Plantilla de solicitud:
=======================================================================================================================================================

Necesito completar los ejercicios del Tema [N], Week [M]

Ejercicios que voy a usar (copia de tu plantilla):
- Ejercicio 1: Fill in the Blanks - Verbo "to be"
- Ejercicio 2: Multiple Choice - Preguntas básicas
- Ejercicio 3: True/False - Cultura general
- [lista los que vas a incluir]

Respuestas correctas:
- Ejercicio 1: q1=am, q2=is, q3=are
- Ejercicio 2: mc1=b, mc2=c
- [etc.]

(Opcional) Si cambiaste algo del HTML original, avísame qué modificaste.

*/
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
