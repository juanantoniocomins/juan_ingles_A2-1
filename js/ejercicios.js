// ==============================================================
// ejercicios.js - Script EXCLUSIVO para páginas de ejercicios
// ==============================================================

// ✅ USA LOS DATOS COMPARTIDOS
const contenidos = CONTENIDOS_DATA;

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

// ✅ FUNCIÓN CORREGIDA: Solo genera enlaces SI hay H2 en el contenido
function generarEnlacesSecciones() {
  const pointsElement = document.getElementById('summary-points');
  
  if (!pointsElement) {
    console.log('❌ No se encontró #summary-points');
    return;
  }
  
  // Asignar ID al contenedor del resumen para poder hacer scroll hacia él
  const summaryContainer = document.querySelector('.week-summary');
  if (summaryContainer && !summaryContainer.id) {
    summaryContainer.id = 'resumen-secciones';
  }
  
  // ⚠️ ESPERAR a que el contenido se cargue completamente
  setTimeout(() => {
    // Buscar todos los H2 dentro de .content
    const headings = document.querySelectorAll('.content h2');
    
    console.log(`🔍 H2 encontrados: ${headings.length}`);
    
    // ✅ SI NO HAY H2, NO HACER NADA (mantener el contenido de cargarContenidoDinamico)
    if (headings.length === 0) {
      console.log('✅ No hay H2, manteniendo contenido del objeto contenidos');
      return;
    }
    
    // ✅ SI HAY H2, ENTONCES SÍ generar los enlaces automáticos
    console.log('✅ Hay H2, generando enlaces automáticos...');
    
    // Limpiar la lista actual
    pointsElement.innerHTML = '';
    
    // Crear un enlace para cada H2
    headings.forEach((heading, index) => {
      // Generar ID automáticamente si no existe
      if (!heading.id) {
        // Crear ID basado en el texto del heading
        const text = heading.textContent.trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '') // Quitar caracteres especiales excepto guiones
          .replace(/\s+/g, '-')      // Espacios a guiones
          .replace(/^-+|-+$/g, '');  // Quitar guiones al inicio/final
        
        heading.id = id;
      }
      
      // Crear el elemento <li> con el enlace
      const li = document.createElement('li');
      const link = document.createElement('a');
      
      // Extraer texto sin emojis al inicio
      const text = heading.textContent
        .replace(/^[^\w\s]+\s*/, '') // Quitar emojis al inicio
        .trim();
      
      link.href = `#${heading.id}`;
      link.textContent = text;
      link.className = 'summary-link';
      
      li.appendChild(link);
      pointsElement.appendChild(li);
      
      // ✅ AÑADIR BOTÓN "VOLVER AL RESUMEN" EN CADA H2
      const backButton = document.createElement('a');
      backButton.href = '#resumen-secciones';
      backButton.className = 'back-to-summary';
      backButton.innerHTML = '↑';
      backButton.title = 'Volver al resumen';
      
      // Asegurar que el H2 tenga position relative
      heading.style.position = 'relative';
      heading.appendChild(backButton);
    });
    
    console.log('✅ Enlaces generados correctamente');
  }, 200); // Aumentado a 200ms para mayor seguridad
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
  
  // Contador para dialogue
  const dialogueTextarea = document.getElementById('dialogue');
  const dialogueCountSpan = document.getElementById('dialogue-word-count');
  
  if (dialogueTextarea && dialogueCountSpan) {
    dialogueTextarea.addEventListener('input', function() {
      const text = this.value.trim();
      const words = text === '' ? 0 : text.split(/\s+/).length;
      dialogueCountSpan.textContent = words;
    });
  }
}

// Prevenir envío de formularios
function initFormPrevention() {
  document.querySelectorAll('.ejercicio-form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
    });
  });
}

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

// Efectos visuales
function initVisualEffects() {
  // Efectos para elementos arrastrables
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

// ============================================================
// SISTEMA DE NAVEGACIÓN DE QUIZ (NEXT/PREVIOUS)
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.multi-question-container');
    
    containers.forEach(container => {
        const questions = container.querySelectorAll('.quiz-question');
        const btnNext = container.querySelector('.btn-next-question');
        const btnPrev = container.querySelector('.btn-prev-question');
        const counter = container.querySelector('.question-counter');
        
        if (questions.length === 0 || !btnNext || !btnPrev) return;
        
        let currentQuestion = 1;
        const totalQuestions = questions.length;
        
        // Función para actualizar el quiz
        function updateQuiz() {
            // Ocultar todas las preguntas
            questions.forEach(q => q.style.display = 'none');
            
            // Mostrar la pregunta actual
            questions[currentQuestion - 1].style.display = 'block';
            
            // Actualizar contador
            if (counter) {
                counter.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
            }
            
            // Actualizar botones
            btnPrev.disabled = currentQuestion === 1;
            btnNext.textContent = currentQuestion === totalQuestions ? 'Finish' : 'Next';
        }
        
        // Inicializar vista
        updateQuiz();
        
        // Botón Next
        btnNext.addEventListener('click', function() {
            if (currentQuestion < totalQuestions) {
                currentQuestion++;
                updateQuiz();
            } else {
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

document.addEventListener('DOMContentLoaded', function() { //Es completamente escalable y funciona con cualquier variante (A, B, C, D, etc.)
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
// FLASHCARDS - VOZ BRITÁNICA CON WEB SPEECH API
// ============================================================
// Detecta automáticamente el tipo de audio:
// - data-audio="true" + data-speak → Usa síntesis de voz británica
// - data-audio="mp3" + data-speak → Reproduce archivos MP3
// - Sin data-audio → Solo voltea
// ============================================================
function initFlashcardsWithVoice() {
  const flashcards = document.querySelectorAll('.flashcard');
  
  if (flashcards.length === 0) {
    console.log('ℹ️ No se encontraron flashcards');
    return;
  }
  
  // Separar flashcards por tipo
  const flashcardsConVoz = document.querySelectorAll('.flashcard[data-audio="true"]');
  const flashcardsConMP3 = document.querySelectorAll('.flashcard[data-audio="mp3"]');
  const flashcardsSinAudio = document.querySelectorAll('.flashcard:not([data-audio])');
  
  console.log(`🃏 Flashcards encontradas: ${flashcards.length}`);
  console.log(`   - Con síntesis de voz: ${flashcardsConVoz.length}`);
  console.log(`   - Con archivos MP3: ${flashcardsConMP3.length}`);
  console.log(`   - Sin audio: ${flashcardsSinAudio.length}`);
  
  // ============================================================
  // PARTE 1: FLASHCARDS SIN AUDIO (solo voltean)
  // ============================================================
  flashcardsSinAudio.forEach(card => {
    card.addEventListener('click', function(e) {
      e.stopPropagation();
      
      const inner = this.querySelector('.flashcard-inner');
      if (inner) {
        inner.classList.toggle('flipped');
      }
    });
  });
  
  if (flashcardsSinAudio.length > 0) {
    console.log('✅ Flashcards sin audio inicializadas (solo voltean)');
  }
  
  // ============================================================
  // PARTE 2: FLASHCARDS CON SÍNTESIS DE VOZ (Web Speech API)
  // ============================================================
  if (flashcardsConVoz.length > 0) {
    // Verificar si el navegador soporta síntesis de voz
    if (!('speechSynthesis' in window)) {
      console.warn('⚠️ Este navegador no soporta síntesis de voz');
      // Hacer que funcionen solo con volteo
      flashcardsConVoz.forEach(card => {
        card.addEventListener('click', function(e) {
          e.stopPropagation();
          const inner = this.querySelector('.flashcard-inner');
          if (inner) inner.classList.toggle('flipped');
        });
      });
      return;
    }
    
    // Variable para almacenar la voz británica
    let britishVoice = null;
    
    // Función para encontrar voz británica
    function findBritishVoice() {
      const voices = speechSynthesis.getVoices();
      
      // Prioridad de búsqueda de voces británicas
      const preferredVoices = [
        'Google UK English Female',
        'Google UK English Male',
        'Microsoft Hazel - English (United Kingdom)',
        'Microsoft Susan - English (United Kingdom)',
        'Microsoft George - English (United Kingdom)',
        'Daniel (Enhanced)', // macOS UK
        'Kate', // macOS UK
        'Serena' // macOS UK
      ];
      
      // Intentar encontrar una voz preferida
      for (const preferred of preferredVoices) {
        const voice = voices.find(v => v.name === preferred);
        if (voice) return voice;
      }
      
      // Si no encuentra ninguna preferida, buscar cualquier voz UK
      const ukVoice = voices.find(v => 
        v.lang === 'en-GB' || 
        v.lang.startsWith('en-GB') ||
        v.name.toLowerCase().includes('uk') ||
        v.name.toLowerCase().includes('british')
      );
      
      if (ukVoice) return ukVoice;
      
      // Como último recurso, usar la primera voz en inglés disponible
      const englishVoice = voices.find(v => v.lang.startsWith('en'));
      
      return englishVoice || voices[0];
    }
    
    // Cargar voces (puede tardar un momento)
    function loadVoices() {
      return new Promise((resolve) => {
        const voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
          britishVoice = findBritishVoice();
          console.log(`🎤 Voz seleccionada: ${britishVoice?.name || 'Predeterminada'} (${britishVoice?.lang || 'sin idioma'})`);
          resolve();
        } else {
          speechSynthesis.onvoiceschanged = () => {
            britishVoice = findBritishVoice();
            console.log(`🎤 Voz seleccionada: ${britishVoice?.name || 'Predeterminada'} (${britishVoice?.lang || 'sin idioma'})`);
            resolve();
          };
        }
      });
    }
    
    // Cargar voces antes de inicializar
    loadVoices().then(() => {
      // Agregar evento click a flashcards con síntesis de voz
      flashcardsConVoz.forEach(card => {
        card.addEventListener('click', function(e) {
          e.stopPropagation();
          
          // Voltear la tarjeta
          const inner = this.querySelector('.flashcard-inner');
          if (inner) {
            inner.classList.toggle('flipped');
          }
          
          // Leer el texto
          const textToSpeak = this.getAttribute('data-speak');
          
          if (textToSpeak) {
            // Cancelar cualquier síntesis anterior
            speechSynthesis.cancel();
            
            // Crear nueva síntesis
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            
            // Configurar la voz británica
            if (britishVoice) {
              utterance.voice = britishVoice;
            }
            utterance.lang = 'en-GB'; // Inglés británico
            utterance.rate = 0.9; // Velocidad ligeramente más lenta para claridad
            utterance.pitch = 1.0; // Tono normal
            utterance.volume = 1.0; // Volumen máximo
            
            // Reproducir
            speechSynthesis.speak(utterance);
            
            console.log(`🔊 Pronunciando: "${textToSpeak}"`);
          }
        });
      });
      
      console.log('✅ Flashcards con síntesis de voz británica inicializadas');
    });
  }
  
  // ============================================================
  // PARTE 3: FLASHCARDS CON ARCHIVOS MP3
  // ============================================================
  if (flashcardsConMP3.length > 0) {
    const audioBasePath = '../../audios/t1/alphabet_audio/';
    const audioCache = {};
    
    // Precargar audios
    const lettersToLoad = new Set();
    flashcardsConMP3.forEach(card => {
      const letter = card.getAttribute('data-speak');
      if (letter) lettersToLoad.add(letter);
    });
    
    console.log(`🎵 Precargando ${lettersToLoad.size} archivos MP3...`);
    
    lettersToLoad.forEach(letter => {
      const audio = new Audio(`${audioBasePath}${letter}.mp3`);
      audio.preload = 'auto';
      audioCache[letter] = audio;
      
      audio.addEventListener('error', function() {
        console.warn(`⚠️ No se pudo cargar: ${audioBasePath}${letter}.mp3`);
      });
    });
    
    // Agregar evento click a flashcards con MP3
    flashcardsConMP3.forEach(card => {
      card.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Voltear la tarjeta
        const inner = this.querySelector('.flashcard-inner');
        if (inner) {
          inner.classList.toggle('flipped');
        }
        
        // Reproducir audio MP3
        const letter = this.getAttribute('data-speak');
        
        if (letter && audioCache[letter]) {
          // Detener todos los audios anteriores
          Object.values(audioCache).forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
          });
          
          // Reproducir el audio
          const audio = audioCache[letter];
          audio.currentTime = 0;
          
          audio.play()
            .then(() => {
              console.log(`🔊 Reproduciendo MP3: ${letter}.mp3`);
            })
            .catch(err => {
              console.error(`❌ Error al reproducir ${letter}:`, err);
            });
        }
      });
    });
    
    console.log('✅ Flashcards con archivos MP3 inicializadas');
  }
}

// Exportar para uso en otros archivos si es necesario
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initFlashcardsWithVoice };
}

// ============================================================
// Ejercicio 28: Spelling Challenge
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.btn-play-word').forEach(function(boton) {
    boton.addEventListener('click', function() {
      var contenedor = boton.closest('.spelling-container');
      if (!contenedor) return;
      var audio = contenedor.querySelector('audio');
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    });
  });
});

// Drag & Drop para spelling manual
document.querySelectorAll('.letter-tile').forEach(tile => {
  tile.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/plain', tile.textContent);
    tile.classList.add('dragging');
  });
  tile.addEventListener('dragend', function () {
    tile.classList.remove('dragging');
  });
});

document.querySelectorAll('.letter-slot').forEach(slot => {
  slot.addEventListener('dragover', function (e) {
    e.preventDefault();
    slot.classList.add('drag-over');
  });
  slot.addEventListener('dragleave', function () {
    slot.classList.remove('drag-over');
  });
  slot.addEventListener('drop', function (e) {
    e.preventDefault();
    slot.classList.remove('drag-over');
    let dragged = document.querySelector('.dragging');
    if (dragged) {
      slot.textContent = '';
      slot.appendChild(dragged); // Mueve el nodo al slot
    }
  });
});

// ============================================================
// FUNCIÓN PARA MOSTRAR/OCULTAR TRANSCRIPCIONES
// ============================================================
// Agregar esta función en ejercicios.js

function toggleTranscription(transcriptionId) {
  const transcriptionBox = document.getElementById(transcriptionId);
  const button = event.target; // El botón que activó la función
  
  if (!transcriptionBox) {
    console.error(`❌ No se encontró el elemento con id: ${transcriptionId}`);
    return;
  }
  
  // Toggle la clase 'show' para mostrar/ocultar
  transcriptionBox.classList.toggle('show');
  
  // Cambiar el texto del botón
  if (transcriptionBox.classList.contains('show')) {
    button.textContent = '📖 Hide Transcription';
  } else {
    button.textContent = '📖 Show Transcription';
  }
}


// =============================================
// Inicialización principal
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('🔧 Iniciando ejercicios.js');
  
  // Cargar contenido dinámico
  cargarContenidoDinamico();
  
  // ✅ GENERAR ENLACES AUTOMÁTICOS A SECCIONES
  generarEnlacesSecciones();
  
  // Inicializar funcionalidades
  initFormPrevention();
  initWordCounters();
  initVisualEffects();
  initFlashcardsWithVoice();  // ← Ahora maneja ambos tipos
  
  // COLLAPSIBLES - Inicializar aquí
  initCollapsibles();
  
  console.log('✅ ejercicios.js cargado completamente');
});
