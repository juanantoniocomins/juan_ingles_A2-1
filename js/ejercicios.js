// ==============================================================
// ejercicios.js - Script EXCLUSIVO para páginas de ejercicios
// ==============================================================

const contenidos = {
  "1": {
    "1": { titulo: "👋 Week 1", puntos: ["Filling forms", "Personal pronouns", "Verbo: To be", "Introducing yourself", "Numbers: 0-12", "The vowels", "Greetings"] },
    "2": { titulo: "👋 Week 2", puntos: ["Meeting people", "Question words", "Questions & answers", "Real English situations"] },
    "3": { titulo: "👋 Week 3", puntos: ["The alphabet", "Numbers: 13-29", "Simple present", "Adverbs of frequency", "Talking about other people"] }
  },
  "2": {
    "1": { titulo: "⏰ Week 1", puntos: ["Rutinas diarias", "Present Simple (afirmativo)", "Vocabulario: horarios"] },
    "2": { titulo: "⏰ Week 2", puntos: ["Adverbios de frecuencia", "Present Simple (negativo)", "Expresiones de tiempo"] },
    "3": { titulo: "⏰ Week 3", puntos: ["Preguntas en Present Simple", "Short answers", "Hábitos y frecuencia"] }
  },
  // ... resto de temas (3-8) igual que en teoria.js
};

const TEMA_NOMBRES = {
  "1": "Introduce Yourself",
  "2": "Daily Routines",
  "3": "Food & Drinks",
  "4": "Family & Friends",
  "5": "Hobbies & Free Time",
  "6": "Shopping & Money",
  "7": "Travel & Transport",
  "8": "Health & Body"
};

// Obtener tema y week de la URL
function getTemaAndWeekFromUrl() {
  const path = window.location.pathname;
  const match = path.match(/\/tema(\d+)\/week(\d+)\//i);
  if (match && match.length >= 3) {
    return { tema: match[1], week: match[2] };
  }
  return null;
}

// Cargar contenido dinámico (título y resumen)
function cargarContenidoDinamico() {
  const elementos = getTemaAndWeekFromUrl();
  const titleElement = document.querySelector('.topic-title');
  const pointsElement = document.getElementById('summary-points');

  if (!elementos || !titleElement) {
    console.warn('No se encontraron elementos para actualizar');
    return;
  }

  const { tema, week } = elementos;
  const themeData = contenidos[tema];

  if (!themeData || !themeData[week]) {
    titleElement.textContent = `Tema ${tema} – Contenido no encontrado`;
    if (pointsElement) {
      pointsElement.innerHTML = '<li>⚠️ No hay datos para este tema/semana.</li>';
    }
    return;
  }

  const weekData = themeData[week];
  const themeName = TEMA_NOMBRES[tema] || `Tema ${tema}`;

  // Actualizar título principal
  titleElement.textContent = `Tema ${tema} – ${themeName} – ${weekData.titulo}`;

  // Agregar subtítulo de "✏️ Ejercicios"
  let subtitleElement = document.querySelector('.page-subtitle');
  const summaryElement = document.querySelector('.week-summary');
  
  if (!subtitleElement && summaryElement) {
    subtitleElement = document.createElement('p');
    subtitleElement.className = 'page-subtitle';
    subtitleElement.textContent = '✏️ Ejercicios';
    summaryElement.parentNode.insertBefore(subtitleElement, summaryElement);
  }

  // Actualizar puntos de resumen
  if (pointsElement) {
    const listItems = weekData.puntos.map(punto => `<li>${punto}</li>`).join('');
    pointsElement.innerHTML = listItems;
  }
}

// Inicializar contadores de palabras (para ejercicios de writing)
function initWordCounters() {
  // Contador para essay/writing
  const essayTextarea = document.getElementById('essay');
  const wordCountSpan = document.getElementById('word-count');
  
  if (essayTextarea && wordCountSpan) {
    essayTextarea.addEventListener('input', function() {
      const text = this.value.trim();
      const words = text === '' ? 0 : text.split(/\s+/).length;
      wordCountSpan.textContent = words;
    });
  }

  // Contador para dictation
  const dictationTextarea = document.getElementById('dictation-answer');
  const dictationWordCount = document.getElementById('dictation-word-count');
  
  if (dictationTextarea && dictationWordCount) {
    dictationTextarea.addEventListener('input', function() {
      const text = this.value.trim();
      const words = text === '' ? 0 : text.split(/\s+/).length;
      dictationWordCount.textContent = words;
    });
  }
}

// Prevenir envío de formularios (para evitar recargas de página)
function initFormPrevention() {
  const forms = document.querySelectorAll('.ejercicio-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
    });
  });
}

// Inicializar efectos visuales adicionales
function initVisualEffects() {
  // Memory cards (juego de memoria)
  initMemoryGame();
  
  // Drag and drop visual feedback
  initDragAndDropFeedback();
  
  // Flashcards con voz en inglés UK
  initFlashcardsWithVoice();
}

// Inicializar juego de memoria (si existe)
function initMemoryGame() {
  const cards = document.querySelectorAll('.memory-card');
  if (cards.length === 0) return;
  
  let flippedCards = [];
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);
        
        if (flippedCards.length === 2) {
          setTimeout(() => {
            // Check if match (manejado por ejercicios-sistema.js)
            flippedCards = [];
          }, 1000);
        }
      }
    });
  });
}

// Feedback visual para drag & drop
function initDragAndDropFeedback() {
  // Agregar efectos visuales al arrastrar
  document.querySelectorAll('[draggable="true"]').forEach(item => {
    item.addEventListener('dragstart', function() {
      this.style.opacity = '0.5';
    });
    
    item.addEventListener('dragend', function() {
      this.style.opacity = '1';
    });
  });
  
  // Efectos para zonas de drop
  document.querySelectorAll('.drop-zone, .gap, .letter-slot').forEach(zone => {
    zone.addEventListener('dragover', function(e) {
      e.preventDefault();
      this.classList.add('drag-over');
    });
    
    zone.addEventListener('dragleave', function() {
      this.classList.remove('drag-over');
    });
    
    zone.addEventListener('drop', function() {
      this.classList.remove('drag-over');
    });
  });
}

/* ============================= */
/* FUNCIÓN PARA MOSTRAR/OCULTAR TRANSCRIPCIÓN */
/* ============================= */

function toggleTranscription(transcriptionId) {
  const transcriptionBox = document.getElementById(transcriptionId);
  
  // Encontrar el botón que llamó esta función
  const button = event.currentTarget || event.target;
  
  if (transcriptionBox.classList.contains('show')) {
    // Ocultar transcripción
    transcriptionBox.classList.remove('show');
    button.innerHTML = 'Show Transcription';
  } else {
    // Mostrar transcripción
    transcriptionBox.classList.add('show');
    button.innerHTML = 'Hide Transcription';
    
    // Scroll suave hacia la transcripción
    setTimeout(() => {
      transcriptionBox.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }, 100);
  }
}

// ============================================================
// QUIZ INTERACTIVO CON BARRA DE PROGRESO (Ejercicios 45-54)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // Buscar todos los quiz containers
    const allQuizzes = document.querySelectorAll('[data-tipo="quiz-progress"]');
    
    allQuizzes.forEach(quizBox => {
        const quizId = quizBox.getAttribute('data-id');
        
        // Si no tiene data-id, saltar (para mantener compatibilidad con ejercicio 23)
        if (!quizId) return;
        
        const quizContainer = quizBox.querySelector(`#${quizId}`);
        if (!quizContainer) return;
        
        const questions = quizContainer.querySelectorAll('.quiz-question');
        const totalQuestions = questions.length;
        const progressFill = quizBox.querySelector('.progress-fill');
        const currentQuestionSpan = quizBox.querySelector(`[id^="current-question"]`);
        const totalQuestionsSpan = quizBox.querySelector(`[id^="total-questions"]`);
        const btnPrev = quizBox.querySelector('.btn-prev');
        const btnNext = quizBox.querySelector('.btn-next');
        
        if (!questions.length || !btnNext || !btnPrev) return;
        
        let currentQuestion = 1;
        
        // Inicializar
        totalQuestionsSpan.textContent = totalQuestions;
        updateQuiz();
        
        // Función para actualizar el quiz
        function updateQuiz() {
            // Ocultar todas las preguntas
            questions.forEach(q => q.classList.remove('active'));
            
            // Mostrar pregunta actual
            const activeQuestion = quizContainer.querySelector(`[data-question="${currentQuestion}"]`);
            if (activeQuestion) {
                activeQuestion.classList.add('active');
            }
            
            // Actualizar contador
            currentQuestionSpan.textContent = currentQuestion;
            
            // Actualizar barra de progreso
            const progress = (currentQuestion / totalQuestions) * 100;
            progressFill.style.width = progress + '%';
            
            // Actualizar botones
            btnPrev.disabled = (currentQuestion === 1);
            
            // Cambiar texto del botón Next a Finish en la última pregunta
            if (currentQuestion === totalQuestions) {
                btnNext.textContent = 'Finish';
            } else {
                btnNext.textContent = 'Next ➡';
            }
        }
        
        // Botón Next
        btnNext.addEventListener('click', function() {
            if (currentQuestion < totalQuestions) {
                currentQuestion++;
                updateQuiz();
            } else {
                // Última pregunta - mostrar mensaje
                alert('Quiz completed! Great job!');
                // Opcional: resetear el quiz
                currentQuestion = 1;
                updateQuiz();
            }
        });
        
        // Botón Previous
        btnPrev.addEventListener('click', function() {
            if (currentQuestion > 1) {
                currentQuestion--;
                updateQuiz();
            }
        });
    });
});

// ============================================================
// CARGAR VIDEOS DE YOUTUBE AL HACER CLIC
// ============================================================

function loadVideo(element) {
    const videoId = element.getAttribute('data-video-id');
    const iframe = document.createElement('iframe');
    
    // Crear un contenedor para el iframe cuadrado
    const iframeWrapper = document.createElement('div');
    iframeWrapper.style.position = 'relative';
    iframeWrapper.style.width = '100%';
    iframeWrapper.style.paddingBottom = '100%'; // Aspect ratio 1:1
    iframeWrapper.style.borderRadius = '8px';
    iframeWrapper.style.overflow = 'hidden';
    
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    
    iframeWrapper.appendChild(iframe);
    
    // Reemplazar el thumbnail con el wrapper del iframe
    element.parentElement.replaceChild(iframeWrapper, element);
}

// ============================================================
// AUTO-AÑADIR IDs A EJERCICIOS PARA NAVEGACIÓN (TABLA EJERCICIOS)
// ============================================================

document.addEventListener('DOMContentLoaded', function() { //Es completamente escalable y funciona con cualquier variante (A, B, C, D, etc.) (captura cualquier combinación de números y letras:)
    const ejercicios = document.querySelectorAll('.ejercicio-box');
    
    ejercicios.forEach((ejercicio, index) => {
        const titulo = ejercicio.querySelector('.ejercicio-numero');
        if (titulo) {
            // Extraer el número del ejercicio del texto (ej: "Ejercicio 1:" -> "1")
            const match = titulo.textContent.match(/Ejercicio\s+([\dA-Za-z]+):/i);
            if (match) {
                const numero = match[1].toLowerCase();
                ejercicio.id = `ejercicio-${numero}`;
            }
        }
    });
});

// ============================================================
// FLASHCARDS - VOZ EN INGLÉS UK (REUTILIZABLE)
// ============================================================
function initFlashcardsWithVoice() {
  const flashcards = document.querySelectorAll('.flashcard');
  
  if ('speechSynthesis' in window) {
    // Esperar a que las voces se carguen
    let voicesLoaded = false;
    
    function loadVoices() {
      return new Promise((resolve) => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          resolve(voices);
        } else {
          window.speechSynthesis.onvoiceschanged = () => {
            resolve(window.speechSynthesis.getVoices());
          };
          setTimeout(() => {
            resolve(window.speechSynthesis.getVoices());
          }, 100);
        }
      });
    }
    
    // Cargar voces al inicio
    loadVoices().then(() => {
      voicesLoaded = true;
      console.log('✅ Voces cargadas:', window.speechSynthesis.getVoices().length);
    });
    
    // Agregar evento click a cada flashcard
    flashcards.forEach(card => {
      // Variable para evitar múltiples clicks
      let isAnimating = false;
      
      card.addEventListener('click', function(e) {
        // Prevenir clicks durante animación
        if (isAnimating) {
          console.log('⏸️ Animación en curso, ignorando click...');
          return;
        }
        
        isAnimating = true;
        
        // ✅ CRÍTICO: Capturar el texto ANTES de cualquier cambio
        const frontText = this.querySelector('.flashcard-front h4').textContent.trim();
        console.log('📝 Texto capturado:', frontText);
        
        // Voltear la tarjeta
        this.classList.toggle('flipped');
        
        // ✅ SOLUCIÓN: Esperar 400ms (más tiempo que la animación CSS)
        // Esto garantiza que el audio se ejecute DESPUÉS de la transición
        setTimeout(() => {
          console.log('🎬 Animación completada, reproduciendo audio...');
          speakTextUK(frontText);
          
          // Desbloquear después de 1 segundo
          setTimeout(() => {
            isAnimating = false;
          }, 1000);
        }, 400); // 400ms: tiempo suficiente para la transición CSS
      });
    });
    
  } else {
    // Sin soporte de voz, solo voltear
    flashcards.forEach(card => {
      card.addEventListener('click', function() {
        this.classList.toggle('flipped');
      });
    });
  }
  
  /**
   * Función para pronunciar texto en inglés UK
   * @param {string} text - Texto a pronunciar
   */
  function speakTextUK(text) {
    // Cancelar cualquier pronunciación en curso
    window.speechSynthesis.cancel();
    
    // Si el texto contiene '&', tomar solo la primera parte
    let textToSpeak = text;
    if (text.includes('&')) {
      textToSpeak = text.split('&')[0].trim();
    }
    // Si contiene '/', tomar solo la primera parte
    if (textToSpeak.includes('/')) {
      textToSpeak = textToSpeak.split('/')[0].trim();
    }
    
    console.log('🔊 Intentando pronunciar:', textToSpeak);
    
    // Crear nueva instancia de pronunciación
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-GB';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Intentar usar voz británica si está disponible
    const voices = window.speechSynthesis.getVoices();
    const ukVoice = voices.find(voice =>
      voice.lang === 'en-GB' ||
      voice.lang.startsWith('en-GB') ||
      voice.name.includes('British') ||
      voice.name.includes('UK')
    );
    
    if (ukVoice) {
      utterance.voice = ukVoice;
      console.log('✅ Usando voz:', ukVoice.name);
    } else {
      console.warn('⚠️ No se encontró voz británica, usando voz por defecto');
    }
    
    // Event listeners para debugging
    utterance.onstart = () => {
      console.log('▶️ Audio iniciado');
    };
    
    utterance.onend = () => {
      console.log('⏹️ Audio terminado');
    };
    
    utterance.onerror = (e) => {
      console.error('❌ Error de audio:', e);
    };
    
    // Pronunciar con un pequeño retraso adicional
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
      console.log('🎤 Comando speak() ejecutado');
    }, 50); // 50ms extra para asegurar que el DOM está estable
  }
}


// ============================================================
// Inicialización principal
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('📝 Iniciando ejercicios.js');
  
  // Cargar contenido dinámico
  cargarContenidoDinamico();
  
  // Inicializar funcionalidades
  initFormPrevention();
  initWordCounters();
  initVisualEffects();
  initFlashcardsWithVoice();
  
  // COLLAPSIBLES - Inicializar aquí
  initCollapsibles();
  
  console.log('✅ ejercicios.js cargado completamente');
});

// ============================================================
// COLLAPSIBLES - Desplegables interactivos
// ============================================================
function initCollapsibles() {
  const collapsibles = document.querySelectorAll('.collapsible');
  
  collapsibles.forEach(item => {
    const header = item.querySelector('.collapsible-header');
    const content = item.querySelector('.collapsible-content');
    const arrow = header?.querySelector('.arrow');
    
    if (header && content) {
      header.addEventListener('click', function() {
        // Toggle active en el contenedor
        item.classList.toggle('active');
        
        // Toggle la visibilidad del contenido
        if (content.style.maxHeight) {
          // Cerrar
          content.style.maxHeight = null;
          if (arrow) arrow.textContent = '▶';
        } else {
          // Abrir
          content.style.maxHeight = content.scrollHeight + 'px';
          if (arrow) arrow.textContent = '▼';
        }
      });
    }
  });
  
  console.log('✅ Collapsibles inicializados:', collapsibles.length);
}

