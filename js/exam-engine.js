// ==============================================================
// exam-engine.js - Motor completo del sistema de exámenes
// ==============================================================

console.log('🔄 Cargando motor de exámenes...');

let preguntasActuales = [];
let respuestasUsuario = {};
let tiempoInicio = null;
let tiempoFin = null;
let intervaloTemporizador = null;
let examenEnviado = false;
let tiempoAcumulado = 0; // Tiempo acumulado en segundos cuando está pausado
let temporizadorPausado = false;
let ultimoPausaTime = null;

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('📚 DOM cargado, inicializando sistema...');
    
    // Dar un pequeño margen para que los scripts terminen de ejecutarse
    setTimeout(() => {
        const startBtn = document.getElementById('startExamBtn');
        const submitBtn = document.getElementById('submitExamBtn');
        const retryBtn = document.getElementById('retryExamBtn');
        
        if (!startBtn || !submitBtn || !retryBtn) {
            console.error('❌ No se encontraron los botones necesarios');
            return;
        }
        
        startBtn.addEventListener('click', iniciarExamen);
        submitBtn.addEventListener('click', enviarExamen);
        retryBtn.addEventListener('click', reiniciarExamen);
        
        // Verificar que el banco de preguntas esté cargado
        if (typeof window.bancoPreguntasExamen === 'undefined') {
            console.warn('⚠️ El banco de preguntas no está cargado aún');
            console.log('⏳ Esperando a que el banco de preguntas se cargue...');
            
            // Intentar esperar un poco más
            let intentos = 0;
            const maxIntentos = 10;
            const intervalo = setInterval(() => {
                intentos++;
                if (typeof window.bancoPreguntasExamen !== 'undefined') {
                    console.log('✅ Banco de preguntas cargado correctamente');
                    console.log(`✅ ${window.bancoPreguntasExamen.length} preguntas disponibles`);
                    clearInterval(intervalo);
                } else if (intentos >= maxIntentos) {
                    console.error('❌ El banco de preguntas no se cargó después de esperar');
                    clearInterval(intervalo);
                    // Mostrar mensaje al usuario
                    if (startBtn) {
                        startBtn.innerHTML = '⚠️ Error: Recarga la página';
                        startBtn.style.backgroundColor = '#ef4444';
                        startBtn.disabled = true;
                    }
                }
            }, 100);
            return;
        }
        
        if (typeof window.obtenerPreguntasAleatorias !== 'function') {
            console.error('❌ La función obtenerPreguntasAleatorias no está definida');
            if (startBtn) {
                startBtn.innerHTML = '⚠️ Error: Recarga la página';
                startBtn.style.backgroundColor = '#ef4444';
                startBtn.disabled = true;
            }
            return;
        }
        
        console.log('✅ Sistema de exámenes inicializado correctamente');
        console.log(`✅ Banco de preguntas cargado: ${window.bancoPreguntasExamen.length} preguntas`);
    }, 50); // Pequeño delay para asegurar que todos los scripts se han ejecutado
});

// ============================================
// FUNCIONES DE MODALES Y NOTIFICACIONES
// ============================================

function mostrarModal(opciones) {
    const { 
        icono = '⚠️', 
        titulo = '¿Estás seguro?', 
        mensaje = '', 
        botonPrimario = 'Aceptar', 
        botonSecundario = 'Cancelar',
        onConfirm = () => {},
        onCancel = () => {}
    } = opciones;
    
    // Crear modal si no existe
    let overlay = document.getElementById('customModalOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'customModalOverlay';
        overlay.className = 'custom-modal-overlay';
        overlay.innerHTML = `
            <div class="custom-modal">
                <div class="modal-icon" id="modalIcon"></div>
                <h3 class="modal-title" id="modalTitle"></h3>
                <p class="modal-message" id="modalMessage"></p>
                <div class="modal-buttons">
                    <button class="modal-btn modal-btn-secondary" id="modalBtnCancel"></button>
                    <button class="modal-btn modal-btn-primary" id="modalBtnConfirm"></button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        
        // Cerrar al hacer clic fuera
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                cerrarModal();
                onCancel();
            }
        });
    }
    
    // Actualizar contenido
    document.getElementById('modalIcon').textContent = icono;
    document.getElementById('modalTitle').textContent = titulo;
    document.getElementById('modalMessage').textContent = mensaje;
    document.getElementById('modalBtnCancel').textContent = botonSecundario;
    document.getElementById('modalBtnConfirm').textContent = botonPrimario;
    
    // Event listeners
    const btnConfirm = document.getElementById('modalBtnConfirm');
    const btnCancel = document.getElementById('modalBtnCancel');
    
    btnConfirm.onclick = () => {
        cerrarModal();
        onConfirm();
    };
    
    btnCancel.onclick = () => {
        cerrarModal();
        onCancel();
    };
    
    // Mostrar modal
    setTimeout(() => overlay.classList.add('active'), 10);
}

function cerrarModal() {
    const overlay = document.getElementById('customModalOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

function mostrarNotificacion(opciones) {
    const {
        icono = 'ℹ️',
        titulo = 'Información',
        mensaje = '',
        tipo = 'info', // success, info, warning
        duracion = 4000
    } = opciones;
    
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = `exam-notification ${tipo}`;
    notification.innerHTML = `
        <div class="notification-icon">${icono}</div>
        <div class="notification-content">
            <div class="notification-title">${titulo}</div>
            <div class="notification-message">${mensaje}</div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">✕</button>
        <div class="notification-progress"></div>
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar con animación
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Auto-cerrar
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 400);
    }, duracion);
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

// ============================================
// FUNCIÓN: INICIAR EXAMEN
// ============================================

function iniciarExamen() {
    console.log('🚀 Iniciando examen...');
    
    // VALIDACIÓN CRÍTICA: Verificar que el banco de preguntas está cargado
    if (typeof window.bancoPreguntasExamen === 'undefined' || !window.bancoPreguntasExamen) {
        console.error('❌ ERROR: El banco de preguntas no está cargado');
        mostrarNotificacion({
            icono: '❌',
            titulo: 'Error al cargar el examen',
            mensaje: 'El banco de preguntas no está disponible. Por favor, recarga la página.',
            tipo: 'warning',
            duracion: 5000
        });
        return; // Detener ejecución
    }
    
    if (window.bancoPreguntasExamen.length === 0) {
        console.error('❌ ERROR: El banco de preguntas está vacío');
        mostrarNotificacion({
            icono: '❌',
            titulo: 'Error',
            mensaje: 'No hay preguntas disponibles en el banco.',
            tipo: 'warning',
            duracion: 5000
        });
        return;
    }
    
    if (typeof window.obtenerPreguntasAleatorias !== 'function') {
        console.error('❌ ERROR: La función obtenerPreguntasAleatorias no está definida');
        mostrarNotificacion({
            icono: '❌',
            titulo: 'Error al cargar el examen',
            mensaje: 'Funciones del examen no disponibles. Por favor, recarga la página.',
            tipo: 'warning',
            duracion: 5000
        });
        return;
    }
    
    console.log(`✅ Banco de preguntas cargado: ${window.bancoPreguntasExamen.length} preguntas`);
    
    // Mostrar notificación
    mostrarNotificacion({
        icono: '🚀',
        titulo: '¡Examen iniciado!',
        mensaje: 'El temporizador ha comenzado. ¡Mucha suerte!',
        tipo: 'success',
        duracion: 3000
    });
    
    // Resetear variables
    respuestasUsuario = {};
    tiempoInicio = new Date();
    tiempoFin = null;
    examenEnviado = false;
    tiempoAcumulado = 0;
    temporizadorPausado = false;
    ultimoPausaTime = null;
    
    // Ocultar botón de inicio
    document.getElementById('startExamBtn').style.display = 'none';
    
    // Obtener 20 preguntas aleatorias
    try {
        preguntasActuales = window.obtenerPreguntasAleatorias();
        console.log('📋 Preguntas seleccionadas:', preguntasActuales.length);
        
        // Validar que se obtuvieron preguntas
        if (!preguntasActuales || preguntasActuales.length === 0) {
            throw new Error('No se obtuvieron preguntas');
        }
    } catch (error) {
        console.error('❌ ERROR al obtener preguntas:', error);
        mostrarNotificacion({
            icono: '❌',
            titulo: 'Error',
            mensaje: 'No se pudieron cargar las preguntas. Por favor, recarga la página.',
            tipo: 'warning',
            duracion: 5000
        });
        // Mostrar de nuevo el botón de inicio
        document.getElementById('startExamBtn').style.display = 'inline-block';
        return;
    }
    
    // Generar HTML de preguntas
    try {
        generarPreguntasHTML();
    } catch (error) {
        console.error('❌ ERROR al generar HTML de preguntas:', error);
        mostrarNotificacion({
            icono: '❌',
            titulo: 'Error',
            mensaje: 'Error al generar las preguntas. Por favor, recarga la página.',
            tipo: 'warning',
            duracion: 5000
        });
        // Mostrar de nuevo el botón de inicio
        document.getElementById('startExamBtn').style.display = 'inline-block';
        return;
    }
    
    // Mostrar contenedor de preguntas
    document.getElementById('examQuestionsContainer').style.display = 'block';
    document.getElementById('submitArea').style.display = 'block';
    
    // Iniciar temporizador
    iniciarTemporizador();
    
    // Mostrar botones de control del temporizador
    const pauseBtn = document.getElementById('timerPauseBtn');
    const resetBtn = document.getElementById('timerResetBtn');
    if (pauseBtn) pauseBtn.style.display = 'flex';
    if (resetBtn) resetBtn.style.display = 'flex';
    
    // Scroll suave al inicio de las preguntas
    setTimeout(() => {
        document.getElementById('examQuestionsContainer').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// ============================================
// FUNCIÓN: GENERAR HTML DE PREGUNTAS
// ============================================

function generarPreguntasHTML() {
    const container = document.getElementById('examQuestionsContainer');
    container.innerHTML = '';
    
    preguntasActuales.forEach((pregunta, index) => {
        const preguntaDiv = document.createElement('div');
        preguntaDiv.className = 'ejercicio-box exam-question';
        preguntaDiv.id = `pregunta-${pregunta.id}`;
        
        // Añadir clase específica según el tipo para los colores
        const tipoClases = {
            'text': 'tipo-text',
            'radio': 'tipo-radio',
            'checkbox': 'tipo-checkbox',
            'select': 'tipo-select',
            'audio': 'tipo-audio',
            'true-false': 'tipo-truefalse',
            'fill-blanks': 'tipo-fillblanks',
            'matching': 'tipo-matching',
            'sentence-ordering': 'tipo-ordering'
        };
        
        if (tipoClases[pregunta.tipo]) {
            preguntaDiv.classList.add(tipoClases[pregunta.tipo]);
        }
        
        let contenidoHTML = `
            <div class="ejercicio-header">
                <h3>❓ Pregunta ${index + 1} de ${preguntasActuales.length}</h3>
                <span class="tipo-ejercicio">${obtenerNombreTipo(pregunta.tipo)}</span>
            </div>
            <p class="question-text"><strong>${pregunta.pregunta}</strong></p>
        `;
        
        // Generar HTML según el tipo de pregunta
        switch(pregunta.tipo) {
            case 'text':
                contenidoHTML += generarInputTexto(pregunta);
                break;
            case 'radio':
                contenidoHTML += generarRadioButtons(pregunta);
                break;
            case 'checkbox':
                contenidoHTML += generarCheckboxes(pregunta);
                break;
            case 'select':
                contenidoHTML += generarSelect(pregunta);
                break;
            case 'audio':
                contenidoHTML += generarAudioPregunta(pregunta);
                break;
            case 'true-false':
                contenidoHTML += generarTrueFalse(pregunta);
                break;
            case 'fill-blanks':
                contenidoHTML += generarFillBlanks(pregunta);
                break;
            case 'matching':
                contenidoHTML += generarMatching(pregunta);
                break;
            case 'sentence-ordering':
                contenidoHTML += generarSentenceOrdering(pregunta);
                break;
            case 'audio-multiple':
                contenidoHTML += generarAudioMultiple(pregunta);
                break;
        }
        
        preguntaDiv.innerHTML = contenidoHTML;
        container.appendChild(preguntaDiv);
        
        // Añadir event listeners para guardar respuestas
        agregarEventListeners(pregunta);
    });
}

// ============================================
// GENERADORES DE TIPOS DE PREGUNTA
// ============================================

// Función auxiliar para agregar reproductor de audio si existe
function agregarReproductorAudio(pregunta) {
    if (!pregunta.audioSrc) return '';
    
    return `
        <div class="multimedia-box audio-player">
            <p>🎧 <strong>Escucha el audio:</strong></p>
            <audio controls style="width: 100%;">
                <source src="${pregunta.audioSrc}" type="audio/mpeg">
                <source src="${pregunta.audioSrc}" type="audio/wav">
                <source src="${pregunta.audioSrc}" type="audio/ogg">
                Tu navegador no soporta el elemento de audio.
            </audio>
        </div>
    `;
}

function generarInputTexto(pregunta) {
    return `
        ${agregarReproductorAudio(pregunta)}
        <div class="answer-input-group">
            <input 
                type="text" 
                id="respuesta-${pregunta.id}" 
                class="exam-text-input"
                placeholder="Escribe tu respuesta aquí..."
            >
        </div>
    `;
}

function generarRadioButtons(pregunta) {
    let html = agregarReproductorAudio(pregunta);
    
    html += '<div class="answer-options">';
    
    pregunta.opciones.forEach(opcion => {
        html += `
            <label class="option-label">
                <input 
                    type="radio" 
                    name="pregunta-${pregunta.id}" 
                    value="${opcion.valor}"
                    id="pregunta-${pregunta.id}-${opcion.valor}"
                >
                <span>${opcion.texto}</span>
            </label>
        `;
    });
    
    html += '</div>';
    return html;
}

function generarCheckboxes(pregunta) {
    let html = agregarReproductorAudio(pregunta);
    
    html += '<div class="answer-options">';
    
    pregunta.opciones.forEach(opcion => {
        html += `
            <label class="option-label">
                <input 
                    type="checkbox" 
                    name="pregunta-${pregunta.id}" 
                    value="${opcion.valor}"
                    id="pregunta-${pregunta.id}-${opcion.valor}"
                >
                <span>${opcion.texto}</span>
            </label>
        `;
    });
    
    html += '</div>';
    return html;
}

function generarSelect(pregunta) {
    let html = agregarReproductorAudio(pregunta);
    
    html += `
        <div class="answer-select-group">
            <select id="respuesta-${pregunta.id}" class="exam-select">
                <option value="">-- Selecciona una opción --</option>
    `;
    
    pregunta.opciones.forEach(opcion => {
        html += `<option value="${opcion.valor}">${opcion.texto}</option>`;
    });
    
    html += `
            </select>
        </div>
    `;
    return html;
}

function generarAudioPregunta(pregunta) {
    let html = agregarReproductorAudio(pregunta);
    
    // Si no hay audio, mostrar mensaje de advertencia
    if (!pregunta.audioSrc) {
        html = `
            <div class="multimedia-box audio-player" style="background: #fef3c7; border-left-color: #f59e0b;">
                <p>🎧 <strong>Audio:</strong> <em>No disponible en este momento</em></p>
                <p style="margin-top: 0.5rem; color: #92400e; font-size: 0.9rem;">
                    💡 Responde basándote en el texto de la pregunta.
                </p>
            </div>
        `;
    }
    
    // Si tiene opciones (radio), generarlas SIN el reproductor (ya lo agregamos arriba)
    if (pregunta.opciones) {
        html += '<div class="answer-options">';
        pregunta.opciones.forEach(opcion => {
            html += `
                <label class="option-label">
                    <input 
                        type="radio" 
                        name="pregunta-${pregunta.id}" 
                        value="${opcion.valor}"
                        id="pregunta-${pregunta.id}-${opcion.valor}"
                    >
                    <span>${opcion.texto}</span>
                </label>
            `;
        });
        html += '</div>';
    } else {
        // Si es texto libre, generar input SIN el reproductor (ya lo agregamos arriba)
        html += `
            <div class="answer-input-group">
                <input 
                    type="text" 
                    id="respuesta-${pregunta.id}" 
                    class="exam-text-input"
                    placeholder="Escribe tu respuesta aquí..."
                >
            </div>
        `;
    }
    
    return html;
}

// ============================================
// NUEVOS GENERADORES DE TIPOS DE PREGUNTA
// ============================================

function generarTrueFalse(pregunta) {
    return `
        <div class="answer-options">
            <label class="option-label">
                <input 
                    type="radio" 
                    name="pregunta-${pregunta.id}" 
                    value="true"
                    id="pregunta-${pregunta.id}-true"
                >
                <span>✅ True</span>
            </label>
            <label class="option-label">
                <input 
                    type="radio" 
                    name="pregunta-${pregunta.id}" 
                    value="false"
                    id="pregunta-${pregunta.id}-false"
                >
                <span>❌ False</span>
            </label>
        </div>
    `;
}

function generarFillBlanks(pregunta) {
    // Retrocompatibilidad: soportar tanto 'blanks' (week2) como 'espacios' (week3)
    const numBlanks = pregunta.espacios ? pregunta.espacios.length : pregunta.blanks.length;
    let html = '<div class="fill-blanks-container">';
    
    for (let i = 0; i < numBlanks; i++) {
        html += `
            <div class="blank-item">
                <label>Blank ${i + 1}:</label>
                <input 
                    type="text" 
                    class="exam-text-input blank-input"
                    id="respuesta-${pregunta.id}-blank-${i}"
                    placeholder="Write here..."
                    data-blank-index="${i}"
                >
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function generarMatching(pregunta) {
    // RETROCOMPATIBILIDAD: Soportar 'parejas' (week1) y 'pares' (week3)
    const lista = pregunta.pares || pregunta.parejas;
    
    if (!lista || lista.length === 0) {
        console.error('❌ ERROR: Pregunta matching sin pares/parejas', pregunta);
        return '<div class="error">Error: Pregunta sin opciones</div>';
    }
    
    // Extraer todas las opciones del lado derecho y mezclarlas
    const opcionesDerechas = lista.map(par => par.derecha);
    const opcionesMezcladas = [...opcionesDerechas].sort(() => Math.random() - 0.5);
    
    let html = '<div class="matching-container">';
    
    lista.forEach((par, index) => {
        html += `
            <div class="matching-row">
                <div class="matching-left">
                    ${par.izquierda}
                </div>
                <div class="matching-right">
                    <select 
                        class="exam-select" 
                        id="respuesta-${pregunta.id}-par-${index}"
                        data-par-index="${index}"
                    >
                        <option value="">-- Select --</option>
                        ${opcionesMezcladas.map(op => 
                            `<option value="${op}">${op}</option>`
                        ).join('')}
                    </select>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

function generarSentenceOrdering(pregunta) {
    const palabrasMezcladas = [...pregunta.palabras].sort(() => Math.random() - 0.5);
    
    let html = `
        <div class="sentence-ordering-container">
            <div class="words-pool" id="words-pool-${pregunta.id}">
                ${palabrasMezcladas.map((palabra, index) => `
                    <button 
                        class="word-button" 
                        data-word="${palabra}"
                        data-index="${index}"
                        onclick="moverPalabra(${pregunta.id}, '${palabra}', ${index}, 'to-sentence')"
                    >
                        ${palabra}
                    </button>
                `).join('')}
            </div>
            <div class="sentence-builder">
                <p class="sentence-label">📝 Your sentence:</p>
                <div class="sentence-area" id="sentence-area-${pregunta.id}">
                    <!-- Las palabras seleccionadas aparecerán aquí -->
                </div>
            </div>
            <button class="btn-reset-sentence" onclick="resetearOrden(${pregunta.id})">
                🔄 Reset
            </button>
        </div>
    `;
    
    return html;
}

// ============================================
// NUEVO: GENERADOR AUDIO-MULTIPLE
// ============================================

function generarAudioMultiple(pregunta) {
    let html = `
        <div class="multimedia-box audio-player">
            <p>🎧 <strong>Listen to the audio and answer ALL the questions below:</strong></p>
            <audio controls>
                <source src="${pregunta.audioSrc}" type="audio/mpeg">
                Tu navegador no soporta audio.
            </audio>
        </div>
        
        <div class="audio-multiple-questions">
    `;
    
    pregunta.subpreguntas.forEach((subpregunta, index) => {
        html += `
            <div class="sub-question-box">
                <h4 class="sub-question-title">❓ Question ${index + 1}:</h4>
                <p class="sub-question-text"><strong>${subpregunta.pregunta}</strong></p>
        `;
        
        if (subpregunta.tipo === 'radio') {
            html += '<div class="answer-options">';
            subpregunta.opciones.forEach(opcion => {
                html += `
                    <label class="option-label">
                        <input 
                            type="radio" 
                            name="pregunta-${pregunta.id}-sub-${subpregunta.id}" 
                            value="${opcion.valor}"
                            id="pregunta-${pregunta.id}-sub-${subpregunta.id}-${opcion.valor}"
                        >
                        <span>${opcion.texto}</span>
                    </label>
                `;
            });
            html += '</div>';
        } else if (subpregunta.tipo === 'text') {
            html += `
                <div class="answer-input-group">
                    <input 
                        type="text" 
                        id="respuesta-${pregunta.id}-sub-${subpregunta.id}" 
                        class="exam-text-input"
                        placeholder="Write your answer here..."
                    >
                </div>
            `;
        } else if (subpregunta.tipo === 'checkbox') {
            html += '<div class="answer-options">';
            subpregunta.opciones.forEach(opcion => {
                html += `
                    <label class="option-label">
                        <input 
                            type="checkbox" 
                            name="pregunta-${pregunta.id}-sub-${subpregunta.id}" 
                            value="${opcion.valor}"
                            id="pregunta-${pregunta.id}-sub-${subpregunta.id}-${opcion.valor}"
                        >
                        <span>${opcion.texto}</span>
                    </label>
                `;
            });
            html += '</div>';
        }
        
        html += '</div>';
    });
    
    html += '</div>';
    
    return html;
}

// ============================================
// EVENT LISTENERS PARA GUARDAR RESPUESTAS
// ============================================

function agregarEventListeners(pregunta) {
    setTimeout(() => {
        if (pregunta.tipo === 'text' || (pregunta.tipo === 'audio' && !pregunta.opciones)) {
            const input = document.getElementById(`respuesta-${pregunta.id}`);
            if (input) {
                input.addEventListener('input', () => {
                    respuestasUsuario[pregunta.id] = input.value.trim().toLowerCase();
                });
            }
        } else if (pregunta.tipo === 'radio' || pregunta.tipo === 'true-false' || (pregunta.tipo === 'audio' && pregunta.opciones)) {
            const radios = document.getElementsByName(`pregunta-${pregunta.id}`);
            radios.forEach(radio => {
                radio.addEventListener('change', () => {
                    respuestasUsuario[pregunta.id] = radio.value;
                });
            });
        } else if (pregunta.tipo === 'checkbox') {
            const checkboxes = document.getElementsByName(`pregunta-${pregunta.id}`);
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    const seleccionados = [];
                    checkboxes.forEach(cb => {
                        if (cb.checked) seleccionados.push(cb.value);
                    });
                    respuestasUsuario[pregunta.id] = seleccionados;
                });
            });
        } else if (pregunta.tipo === 'select') {
            const select = document.getElementById(`respuesta-${pregunta.id}`);
            if (select) {
                select.addEventListener('change', () => {
                    respuestasUsuario[pregunta.id] = select.value;
                });
            }
        } else if (pregunta.tipo === 'fill-blanks') {
            const blanks = [];
            // Retrocompatibilidad: soportar tanto 'blanks' como 'espacios'
            const numBlanks = pregunta.espacios ? pregunta.espacios.length : pregunta.blanks.length;
            for (let i = 0; i < numBlanks; i++) {
                const input = document.getElementById(`respuesta-${pregunta.id}-blank-${i}`);
                if (input) {
                    input.addEventListener('input', () => {
                        blanks[i] = input.value.trim().toLowerCase();
                        respuestasUsuario[pregunta.id] = blanks.filter(b => b);
                    });
                }
            }
        } else if (pregunta.tipo === 'matching') {
            // RETROCOMPATIBILIDAD: Soportar 'parejas' (week1) y 'pares' (week3)
            const lista = pregunta.pares || pregunta.parejas;
            const respuestas = {};
            lista.forEach((par, index) => {
                const select = document.getElementById(`respuesta-${pregunta.id}-par-${index}`);
                if (select) {
                    select.addEventListener('change', () => {
                        respuestas[index] = select.value;
                        respuestasUsuario[pregunta.id] = respuestas;
                    });
                }
            });
        } else if (pregunta.tipo === 'audio-multiple') {
            pregunta.subpreguntas.forEach(subpregunta => {
                if (subpregunta.tipo === 'radio') {
                    const radios = document.getElementsByName(`pregunta-${pregunta.id}-sub-${subpregunta.id}`);
                    radios.forEach(radio => {
                        radio.addEventListener('change', () => {
                            if (!respuestasUsuario[pregunta.id]) {
                                respuestasUsuario[pregunta.id] = {};
                            }
                            respuestasUsuario[pregunta.id][subpregunta.id] = radio.value;
                        });
                    });
                } else if (subpregunta.tipo === 'text') {
                    const input = document.getElementById(`respuesta-${pregunta.id}-sub-${subpregunta.id}`);
                    if (input) {
                        input.addEventListener('input', () => {
                            if (!respuestasUsuario[pregunta.id]) {
                                respuestasUsuario[pregunta.id] = {};
                            }
                            respuestasUsuario[pregunta.id][subpregunta.id] = input.value.trim().toLowerCase();
                        });
                    }
                } else if (subpregunta.tipo === 'checkbox') {
                    const checkboxes = document.getElementsByName(`pregunta-${pregunta.id}-sub-${subpregunta.id}`);
                    checkboxes.forEach(checkbox => {
                        checkbox.addEventListener('change', () => {
                            if (!respuestasUsuario[pregunta.id]) {
                                respuestasUsuario[pregunta.id] = {};
                            }
                            const seleccionados = [];
                            checkboxes.forEach(cb => {
                                if (cb.checked) seleccionados.push(cb.value);
                            });
                            respuestasUsuario[pregunta.id][subpregunta.id] = seleccionados;
                        });
                    });
                }
            });
        }
        // sentence-ordering no necesita listener aquí (usa funciones globales)
    }, 100);
}

// ============================================
// TEMPORIZADOR
// ============================================

function iniciarTemporizador() {
    actualizarTemporizador();
    intervaloTemporizador = setInterval(actualizarTemporizador, 1000);
}

function actualizarTemporizador() {
    if (!tiempoInicio || temporizadorPausado) return;
    
    const ahora = new Date();
    const diferencia = Math.floor((ahora - tiempoInicio) / 1000) + tiempoAcumulado;
    
    const minutos = Math.floor(diferencia / 60);
    const segundos = diferencia % 60;
    
    const display = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    
    // Buscar en el nuevo diseño de badge
    let timerElement = document.querySelector('.timer-value-badge');
    
    // Fallback al diseño antiguo por compatibilidad
    if (!timerElement) {
        timerElement = document.querySelector('#examTimer .timer-value-compact');
    }
    
    if (timerElement) {
        timerElement.textContent = display;
    }
    
    // Advertencias de tiempo
    const timerBadge = document.querySelector('.timer-badge-new') || document.getElementById('examTimer');
    if (timerBadge) {
        timerBadge.classList.remove('warning', 'critical');
        if (minutos >= 15) {
            timerBadge.classList.add('critical');
        } else if (minutos >= 10) {
            timerBadge.classList.add('warning');
        }
    }
}

function detenerTemporizador() {
    if (intervaloTemporizador) {
        clearInterval(intervaloTemporizador);
        intervaloTemporizador = null;
    }
    temporizadorPausado = false;
    tiempoAcumulado = 0;
}

// ============================================
// FUNCIONES DE CONTROL DEL TEMPORIZADOR
// ============================================

function pausarTemporizador() {
    if (temporizadorPausado || !tiempoInicio) return;
    
    temporizadorPausado = true;
    ultimoPausaTime = new Date();
    
    // Calcular tiempo acumulado hasta ahora
    const ahora = new Date();
    tiempoAcumulado += Math.floor((ahora - tiempoInicio) / 1000);
    
    // Actualizar UI
    const pauseBtn = document.getElementById('timerPauseBtn');
    const playBtn = document.getElementById('timerPlayBtn');
    if (pauseBtn) pauseBtn.style.display = 'none';
    if (playBtn) {
        playBtn.style.display = 'flex';
        playBtn.classList.add('paused');
    }
    
    // Mostrar notificación
    mostrarNotificacion({
        icono: '⏸️',
        titulo: 'Temporizador pausado',
        mensaje: 'El tiempo se ha detenido',
        tipo: 'info',
        duracion: 2000
    });
    
    console.log('⏸️ Temporizador pausado');
}

function reanudarTemporizador() {
    if (!temporizadorPausado) return;
    
    temporizadorPausado = false;
    
    // Reiniciar el tiempo de inicio desde el punto actual
    tiempoInicio = new Date();
    
    // Actualizar UI
    const pauseBtn = document.getElementById('timerPauseBtn');
    const playBtn = document.getElementById('timerPlayBtn');
    if (pauseBtn) pauseBtn.style.display = 'flex';
    if (playBtn) {
        playBtn.style.display = 'none';
        playBtn.classList.remove('paused');
    }
    
    // Mostrar notificación
    mostrarNotificacion({
        icono: '▶️',
        titulo: 'Temporizador reanudado',
        mensaje: 'El tiempo continúa',
        tipo: 'success',
        duracion: 2000
    });
    
    console.log('▶️ Temporizador reanudado');
}

function resetearTemporizador() {
    mostrarModal({
        icono: '🔄',
        titulo: '¿Reiniciar temporizador?',
        mensaje: '¿Quieres reiniciar el tiempo a 00:00? Esta acción no se puede deshacer.',
        botonPrimario: 'Reiniciar',
        botonSecundario: 'Cancelar',
        onConfirm: () => {
            tiempoInicio = new Date();
            tiempoAcumulado = 0;
            temporizadorPausado = false;
            
            // Actualizar UI
            actualizarTemporizador();
            
            const pauseBtn = document.getElementById('timerPauseBtn');
            const playBtn = document.getElementById('timerPlayBtn');
            if (pauseBtn) pauseBtn.style.display = 'flex';
            if (playBtn) playBtn.style.display = 'none';
            
            // Remover advertencias
            const timerBadge = document.querySelector('.timer-badge-new') || document.getElementById('examTimer');
            if (timerBadge) {
                timerBadge.classList.remove('warning', 'critical');
            }
            
            mostrarNotificacion({
                icono: '🔄',
                titulo: 'Temporizador reiniciado',
                mensaje: 'El tiempo ha vuelto a 00:00',
                tipo: 'success',
                duracion: 2000
            });
            
            console.log('🔄 Temporizador reiniciado');
        }
    });
}

// Hacer funciones globales para usar en HTML
window.pausarTemporizador = pausarTemporizador;
window.reanudarTemporizador = reanudarTemporizador;
window.resetearTemporizador = resetearTemporizador;

// ============================================
// FUNCIÓN: ENVIAR EXAMEN
// ============================================

function enviarExamen() {
    if (examenEnviado) {
        mostrarNotificacion({
            icono: '⚠️',
            titulo: 'Atención',
            mensaje: 'Ya has enviado el examen',
            tipo: 'warning'
        });
        return;
    }
    
    // Mostrar modal de confirmación
    mostrarModal({
        icono: '📮',
        titulo: '¿Enviar el examen?',
        mensaje: '¿Estás seguro de que quieres enviar el examen? No podrás modificar tus respuestas después.',
        botonPrimario: 'Enviar',
        botonSecundario: 'Cancelar',
        onConfirm: () => {
            console.log('📤 Enviando examen...');
            
            examenEnviado = true;
            tiempoFin = new Date();
            detenerTemporizador();
            
            deshabilitarInputs();
            
            const resultados = calcularResultados();
            mostrarResultados(resultados);
            
            document.getElementById('submitArea').style.display = 'none';
            document.getElementById('retryButtonArea').style.display = 'block';
            
            // Notificación de examen enviado
            mostrarNotificacion({
                icono: '✅',
                titulo: '¡Examen enviado!',
                mensaje: 'Revisa tus resultados a continuación',
                tipo: 'success',
                duracion: 3000
            });
            
            setTimeout(() => {
                document.getElementById('resultsPanel').scrollIntoView({ behavior: 'smooth' });
            }, 300);
        },
        onCancel: () => {
            console.log('❌ Envío cancelado');
        }
    });
}

// ============================================
// CALCULAR RESULTADOS
// ============================================

function calcularResultados() {
    let correctas = 0;
    let incorrectas = 0;
    let sinResponder = 0;
    const detalles = [];
    
    preguntasActuales.forEach(pregunta => {
        const respuestaUsuario = respuestasUsuario[pregunta.id];
        const respuestaCorrecta = pregunta.respuestaCorrecta;
        
        let esCorrecta = false;
        let sinResp = false;
        
        // NUEVO: Manejo de audio-multiple
        if (pregunta.tipo === 'audio-multiple') {
            if (!respuestaUsuario || Object.keys(respuestaUsuario).length === 0) {
                sinResponder++;
                sinResp = true;
            } else {
                let todasCorrectas = true;
                let hayRespuestas = false;
                
                pregunta.subpreguntas.forEach(sub => {
                    const respUser = respuestaUsuario[sub.id];
                    const respCorr = sub.respuestaCorrecta;
                    
                    if (!respUser) {
                        todasCorrectas = false;
                    } else {
                        hayRespuestas = true;
                        if (sub.tipo === 'text') {
                            const respuestasAceptadas = Array.isArray(respCorr) ? respCorr : [respCorr];
                            if (!respuestasAceptadas.some(resp => respUser.toLowerCase().includes(resp.toLowerCase()))) {
                                todasCorrectas = false;
                            }
                        } else if (sub.tipo === 'checkbox') {
                            const respUserArr = Array.isArray(respUser) ? respUser.sort() : [];
                            const respCorrArr = Array.isArray(respCorr) ? respCorr.sort() : [];
                            if (JSON.stringify(respUserArr) !== JSON.stringify(respCorrArr)) {
                                todasCorrectas = false;
                            }
                        } else {
                            if (respUser !== respCorr) {
                                todasCorrectas = false;
                            }
                        }
                    }
                });
                
                if (!hayRespuestas) {
                    sinResponder++;
                    sinResp = true;
                } else {
                    esCorrecta = todasCorrectas;
                    if (esCorrecta) {
                        correctas++;
                    } else {
                        incorrectas++;
                    }
                }
            }
        } else if (!respuestaUsuario || respuestaUsuario === '' || (Array.isArray(respuestaUsuario) && respuestaUsuario.length === 0)) {
            sinResponder++;
            sinResp = true;
        } else {
            if (pregunta.tipo === 'checkbox') {
                const respUser = Array.isArray(respuestaUsuario) ? respuestaUsuario.sort() : [];
                const respCorr = Array.isArray(respuestaCorrecta) ? respuestaCorrecta.sort() : [];
                esCorrecta = JSON.stringify(respUser) === JSON.stringify(respCorr);
            } else if (pregunta.tipo === 'text' || (pregunta.tipo === 'audio' && !pregunta.opciones)) {
                const respuestasAceptadas = Array.isArray(respuestaCorrecta) ? respuestaCorrecta : [respuestaCorrecta];
                esCorrecta = respuestasAceptadas.some(resp => 
                    respuestaUsuario.toLowerCase().includes(resp.toLowerCase())
                );
            } else if (pregunta.tipo === 'fill-blanks') {
                const respUser = Array.isArray(respuestaUsuario) ? respuestaUsuario : [];
                
                // Retrocompatibilidad: soportar estructura antigua (blanks) y nueva (espacios)
                if (pregunta.espacios) {
                    // Estructura nueva: cada espacio tiene un array de respuestas aceptadas
                    esCorrecta = respUser.length === pregunta.espacios.length && 
                                 respUser.every((r, i) => {
                                     const respuestasAceptadas = pregunta.espacios[i].respuestas.map(resp => resp.toLowerCase());
                                     return respuestasAceptadas.includes(r.toLowerCase());
                                 });
                } else {
                    // Estructura antigua: array simple de respuestas
                    esCorrecta = respUser.length === pregunta.blanks.length && 
                                 respUser.every((r, i) => r.toLowerCase() === pregunta.blanks[i].toLowerCase());
                }
            } else if (pregunta.tipo === 'matching') {
                const respUser = respuestaUsuario || {};
                
                // RETROCOMPATIBILIDAD: Soportar ambas estructuras
                if (pregunta.pares) {
                    // Estructura nueva (week3): validar contra pares directamente
                    esCorrecta = pregunta.pares.every((par, index) => {
                        return respUser[index] === par.derecha;
                    });
                } else if (pregunta.parejas && pregunta.respuestaCorrecta) {
                    // Estructura antigua (week1): validar contra respuestaCorrecta
                    // Convertir índices a valores de izquierda
                    esCorrecta = pregunta.parejas.every((pareja, index) => {
                        const respuestaEsperada = pregunta.respuestaCorrecta[pareja.izquierda];
                        return respUser[index] === respuestaEsperada;
                    });
                } else {
                    console.error('❌ Estructura matching no reconocida:', pregunta);
                    esCorrecta = false;
                }
            } else if (pregunta.tipo === 'sentence-ordering') {
                const respUser = respuestaUsuario || [];
                const respCorr = pregunta.respuestaCorrecta;
                esCorrecta = JSON.stringify(respUser) === JSON.stringify(respCorr);
            } else {
                esCorrecta = respuestaUsuario === respuestaCorrecta;
            }
            
            if (esCorrecta) {
                correctas++;
            } else {
                incorrectas++;
            }
        }
        
        detalles.push({
            pregunta: pregunta,
            respuestaUsuario: respuestaUsuario,
            esCorrecta: esCorrecta,
            sinResponder: sinResp
        });
    });
    
    const tiempoTotal = Math.floor((tiempoFin - tiempoInicio) / 1000) + tiempoAcumulado;
    const porcentaje = Math.round((correctas / preguntasActuales.length) * 100);
    
    return {
        correctas,
        incorrectas,
        sinResponder,
        total: preguntasActuales.length,
        porcentaje,
        tiempoTotal,
        detalles
    };
}

// ============================================
// MOSTRAR RESULTADOS
// ============================================

function mostrarResultados(resultados) {
    const panel = document.getElementById('resultsPanel');
    
    let medalla = '';
    let tituloMedalla = '';
    let mensajeFeedback = '';
    let claseResultado = '';
    let colorBorde = '';
    
    if (resultados.porcentaje >= 90) {
        medalla = '🏆';
        tituloMedalla = '¡EXCELENTE!';
        mensajeFeedback = '<strong>¡Fantástico trabajo!</strong> Has demostrado un dominio sobresaliente de los contenidos. ¡Sigue así!';
        claseResultado = 'excelente';
        colorBorde = '#f59e0b';
    } else if (resultados.porcentaje >= 75) {
        medalla = '🥇';
        tituloMedalla = '¡MUY BIEN!';
        mensajeFeedback = '<strong>¡Muy buen resultado!</strong> Tienes un buen conocimiento de la materia. Con un poco más de práctica alcanzarás la excelencia.';
        claseResultado = 'muy-bien';
        colorBorde = '#10b981';
    } else if (resultados.porcentaje >= 60) {
        medalla = '🥈';
        tituloMedalla = '¡BIEN!';
        mensajeFeedback = '<strong>Buen intento.</strong> Has aprobado, pero hay margen de mejora. Revisa las respuestas incorrectas y vuelve a intentarlo.';
        claseResultado = 'bien';
        colorBorde = '#3b82f6';
    } else if (resultados.porcentaje >= 50) {
        medalla = '🥉';
        tituloMedalla = 'APROBADO';
        mensajeFeedback = '<strong>Has aprobado por poco.</strong> Te recomendamos repasar los contenidos y practicar más para mejorar tu puntuación.';
        claseResultado = 'aprobado';
        colorBorde = '#8b5cf6';
    } else {
        medalla = '📚';
        tituloMedalla = 'NECESITAS REPASAR';
        mensajeFeedback = '<strong>No te desanimes.</strong> Revisa la teoría, estudia las explicaciones de las respuestas correctas y vuelve a intentarlo. ¡Tú puedes!';
        claseResultado = 'repasar';
        colorBorde = '#ef4444';
    }
    
    const minutos = Math.floor(resultados.tiempoTotal / 60);
    const segundos = resultados.tiempoTotal % 60;
    const tiempoFormateado = `${minutos}:${String(segundos).padStart(2, '0')}`;
    
    // HTML del panel de resultados MEJORADO
    panel.innerHTML = `
        <div class="resultado-container ${claseResultado}" style="border-color: ${colorBorde}">
            <div class="resultado-header">
                <div class="resultado-medalla">${medalla}</div>
                <h2 class="resultado-titulo">${tituloMedalla}</h2>
            </div>
            
            <div class="resultado-porcentaje-container">
                <div class="circular-progress">
                    <svg viewBox="0 0 200 200">
                        <defs>
                            <linearGradient id="gradient-success" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:${colorBorde};stop-opacity:1" />
                                <stop offset="100%" style="stop-color:${colorBorde};stop-opacity:0.7" />
                            </linearGradient>
                        </defs>
                        <circle class="circular-progress-bg" cx="100" cy="100" r="90"></circle>
                        <circle class="circular-progress-fill" cx="100" cy="100" r="90" id="progressCircle"></circle>
                    </svg>
                    <div class="circular-progress-text" id="progressText">0%</div>
                </div>
            </div>
            
            <div class="resultado-stats">
                <div class="stat-item correctas">
                    <div class="stat-icon">✅</div>
                    <span class="stat-label">Correctas</span>
                    <span class="stat-value">${resultados.correctas}</span>
                </div>
                <div class="stat-item incorrectas">
                    <div class="stat-icon">❌</div>
                    <span class="stat-label">Incorrectas</span>
                    <span class="stat-value">${resultados.incorrectas}</span>
                </div>
                <div class="stat-item sin-responder">
                    <div class="stat-icon">⚠️</div>
                    <span class="stat-label">Sin responder</span>
                    <span class="stat-value">${resultados.sinResponder}</span>
                </div>
                <div class="stat-item total">
                    <div class="stat-icon">📊</div>
                    <span class="stat-label">Total preguntas</span>
                    <span class="stat-value">${resultados.total}</span>
                </div>
                <div class="stat-item tiempo">
                    <div class="stat-icon">⏱️</div>
                    <span class="stat-label">Tiempo total</span>
                    <span class="stat-value">${tiempoFormateado}</span>
                </div>
            </div>
            
            <div class="resultado-mensaje">
                <p>${mensajeFeedback}</p>
            </div>
        </div>
    `;
    
    panel.classList.add('show');
    panel.style.display = 'block';
    
    // Animar círculo de progreso
    setTimeout(() => {
        const circle = document.getElementById('progressCircle');
        const progressText = document.getElementById('progressText');
        const circumference = 2 * Math.PI * 90;
        const offset = circumference - (resultados.porcentaje / 100) * circumference;
        
        circle.style.strokeDashoffset = offset;
        
        // Animar contador de porcentaje
        animarContador(progressText, 0, resultados.porcentaje, 2000);
    }, 500);
    
    // Lanzar confeti si aprobó (>= 50%)
    if (resultados.porcentaje >= 50) {
        lanzarConfeti(resultados.porcentaje);
    }
    
    // Mostrar revisión detallada
    mostrarRevisionDetallada(resultados.detalles);
    
    // Marcar preguntas con colores
    setTimeout(() => {
        marcarPreguntasConColores(resultados.detalles);
    }, 100);
}

// ============================================
// MARCAR PREGUNTAS CON COLORES (VERDE/ROJO)
// ============================================

function marcarPreguntasConColores(detalles) {
    detalles.forEach((detalle, index) => {
        const preguntaDiv = document.getElementById(`pregunta-${detalle.pregunta.id}`);
        if (!preguntaDiv) return;
        
        // Limpiar clases anteriores
        preguntaDiv.classList.remove('respuesta-correcta', 'respuesta-incorrecta', 'sin-responder');
        
        // Añadir clase según el resultado
        if (detalle.sinResponder) {
            preguntaDiv.classList.add('sin-responder');
        } else if (detalle.esCorrecta) {
            preguntaDiv.classList.add('respuesta-correcta');
        } else {
            preguntaDiv.classList.add('respuesta-incorrecta');
            
            // Marcar la opción correcta y la incorrecta del usuario
            if (detalle.pregunta.tipo === 'radio' || detalle.pregunta.tipo === 'checkbox' || detalle.pregunta.tipo === 'true-false') {
                const opciones = preguntaDiv.querySelectorAll('.option-label');
                
                opciones.forEach(opcion => {
                    const input = opcion.querySelector('input');
                    if (!input) return;
                    
                    const valorOpcion = input.value;
                    const respuestaCorrecta = detalle.pregunta.respuestaCorrecta;
                    const respuestaUsuario = detalle.respuestaUsuario;
                    
                    // Marcar opción correcta
                    if (Array.isArray(respuestaCorrecta)) {
                        if (respuestaCorrecta.includes(valorOpcion)) {
                            opcion.classList.add('opcion-correcta');
                        }
                    } else {
                        if (valorOpcion === respuestaCorrecta) {
                            opcion.classList.add('opcion-correcta');
                        }
                    }
                    
                    // Marcar opción incorrecta del usuario
                    if (Array.isArray(respuestaUsuario)) {
                        if (respuestaUsuario.includes(valorOpcion) && !respuestaCorrecta.includes(valorOpcion)) {
                            opcion.classList.add('opcion-usuario-incorrecta');
                        }
                    } else {
                        if (valorOpcion === respuestaUsuario && valorOpcion !== respuestaCorrecta) {
                            opcion.classList.add('opcion-usuario-incorrecta');
                        }
                    }
                });
            }
        }
    });
}

// ============================================
// FUNCIÓN: ANIMAR CONTADOR DE PORCENTAJE
// ============================================

function animarContador(elemento, inicio, fin, duracion) {
    const incremento = (fin - inicio) / (duracion / 16);
    let actual = inicio;
    
    const timer = setInterval(() => {
        actual += incremento;
        if (actual >= fin) {
            actual = fin;
            clearInterval(timer);
        }
        elemento.textContent = Math.floor(actual) + '%';
    }, 16);
}

// ============================================
// FUNCIÓN: LANZAR CONFETI
// ============================================

function lanzarConfeti(porcentaje) {
    // Crear canvas para confeti
    let canvas = document.getElementById('confettiCanvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'confettiCanvas';
        document.body.appendChild(canvas);
    }
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Configuración de confeti
    const confettiCount = porcentaje >= 90 ? 150 : porcentaje >= 75 ? 100 : 60;
    const confetti = [];
    const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6', '#ec4899'];
    
    class ConfettiPiece {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = -20;
            this.size = Math.random() * 8 + 4;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            
            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }
    
    // Crear piezas de confeti
    for (let i = 0; i < confettiCount; i++) {
        confetti.push(new ConfettiPiece());
    }
    
    // Animar confeti
    let frames = 0;
    const maxFrames = 300; // 5 segundos a 60fps
    
    function animarConfeti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach(piece => {
            piece.update();
            piece.draw();
        });
        
        frames++;
        if (frames < maxFrames) {
            requestAnimationFrame(animarConfeti);
        } else {
            // Limpiar canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.remove();
        }
    }
    
    animarConfeti();
}

// ============================================
// MOSTRAR REVISIÓN DETALLADA
// ============================================

function mostrarRevisionDetallada(detalles) {
    const reviewPanel = document.getElementById('answersReviewPanel');
    
    let html = '<h3 class="revision-title">📋 Revisión Detallada de Respuestas</h3>';
    
    detalles.forEach((detalle, index) => {
        const pregunta = detalle.pregunta;
        const claseEstado = detalle.esCorrecta ? 'correct-answer' : (detalle.sinResponder ? 'no-answer' : 'incorrect-answer');
        const icono = detalle.esCorrecta ? '✅' : (detalle.sinResponder ? '❔' : '❌');
        
        html += `
            <div class="answer-item ${claseEstado}">
                <div class="answer-question">
                    ${icono} <strong>Pregunta ${index + 1}:</strong> ${pregunta.pregunta}
                </div>
        `;
        
        if (detalle.sinResponder) {
            html += `<div class="answer-user">⚠️ <strong>No respondida</strong></div>`;
        } else {
            html += `<div class="answer-user">📝 <strong>Tu respuesta:</strong> ${formatearRespuesta(detalle.respuestaUsuario, pregunta)}</div>`;
        }
        
        if (!detalle.esCorrecta) {
            html += `<div class="answer-correct">✅ <strong>Respuesta correcta:</strong> ${formatearRespuesta(pregunta.respuestaCorrecta, pregunta)}</div>`;
        }
        
        html += `
                <div class="answer-explanation">${pregunta.explicacion}</div>
            </div>
        `;
    });
    
    reviewPanel.innerHTML = html;
    reviewPanel.style.display = 'block';
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================

function formatearRespuesta(respuesta, pregunta = null) {
    if (!respuesta) return '';
    
    // Para audio-multiple, formatear cada sub-respuesta
    if (pregunta && pregunta.tipo === 'audio-multiple' && typeof respuesta === 'object' && !Array.isArray(respuesta)) {
        let resultado = '<ul>';
        pregunta.subpreguntas.forEach((sub, index) => {
            const respUser = respuesta[sub.id] || 'Sin responder';
            resultado += `<li><strong>Q${index + 1}:</strong> ${respUser}</li>`;
        });
        resultado += '</ul>';
        return resultado;
    }
    
    if (Array.isArray(respuesta)) {
        if (pregunta && pregunta.opciones) {
            const textos = respuesta.map(valor => {
                const opcion = pregunta.opciones.find(op => op.valor === valor);
                return opcion ? opcion.texto : valor;
            });
            return textos.join(', ');
        }
        return respuesta.join(', ');
    }
    
    if (pregunta && pregunta.opciones) {
        const opcion = pregunta.opciones.find(op => op.valor === respuesta);
        return opcion ? opcion.texto : respuesta;
    }
    
    return respuesta;
}

function obtenerNombreTipo(tipo) {
    const nombres = {
        'text': '✍️ Texto',
        'radio': '🔘 Opción múltiple',
        'checkbox': '☑️ Selección múltiple',
        'select': '📋 Lista',
        'audio': '🎧 Listening',
        'audio-multiple': '🎧 Listening Comprehension',
        'true-false': '✔️ Verdadero/Falso',
        'fill-blanks': '📝 Rellenar espacios',
        'matching': '🔗 Relacionar',
        'sentence-ordering': '🔤 Ordenar frase'
    };
    return nombres[tipo] || tipo;
}

function deshabilitarInputs() {
    const inputs = document.querySelectorAll('.exam-text-input, input[type="radio"], input[type="checkbox"], .exam-select, .word-button');
    inputs.forEach(input => input.disabled = true);
}

// ============================================
// FUNCIÓN: REINICIAR EXAMEN
// ============================================

function reiniciarExamen() {
    mostrarModal({
        icono: '🔄',
        titulo: '¿Reiniciar el examen?',
        mensaje: '¿Quieres empezar un nuevo examen con diferentes preguntas?',
        botonPrimario: 'Reiniciar',
        botonSecundario: 'Cancelar',
        onConfirm: () => {
            console.log('🔄 Reiniciando examen...');
            
            respuestasUsuario = {};
            preguntasActuales = [];
            tiempoInicio = null;
            tiempoFin = null;
            examenEnviado = false;
            tiempoAcumulado = 0;
            temporizadorPausado = false;
            ultimoPausaTime = null;
            
            // Detener temporizador si está corriendo
            detenerTemporizador();
            
            // Limpiar paneles de resultados
            document.getElementById('resultsPanel').style.display = 'none';
            document.getElementById('resultsPanel').classList.remove('show');
            document.getElementById('resultsPanel').innerHTML = '';
            document.getElementById('answersReviewPanel').style.display = 'none';
            document.getElementById('answersReviewPanel').innerHTML = '';
            document.getElementById('retryButtonArea').style.display = 'none';
            document.getElementById('submitArea').style.display = 'none';
            
            // CRÍTICO: Limpiar completamente el contenedor de preguntas
            const questionsContainer = document.getElementById('examQuestionsContainer');
            questionsContainer.innerHTML = '';
            questionsContainer.style.display = 'none';
            
            // Resetear temporizador - buscar en nuevo diseño y antiguo
            let timerElement = document.querySelector('.timer-value-badge');
            if (!timerElement) {
                timerElement = document.querySelector('#examTimer .timer-value-compact');
            }
            if (timerElement) {
                timerElement.textContent = '00:00';
            }
            
            // Remover clases de estado del temporizador
            const examTimer = document.getElementById('examTimer');
            if (examTimer) {
                examTimer.classList.remove('warning', 'critical');
            }
            
            // Ocultar botones de control del temporizador
            const pauseBtn = document.getElementById('timerPauseBtn');
            const playBtn = document.getElementById('timerPlayBtn');
            const resetBtn = document.getElementById('timerResetBtn');
            if (pauseBtn) pauseBtn.style.display = 'none';
            if (playBtn) playBtn.style.display = 'none';
            if (resetBtn) resetBtn.style.display = 'none';
            
            // Mostrar botón de inicio
            document.getElementById('startExamBtn').style.display = 'inline-block';
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Notificación de reinicio
            mostrarNotificacion({
                icono: '🔄',
                titulo: 'Examen reiniciado',
                mensaje: 'Pulsa "Iniciar Examen" cuando estés listo',
                tipo: 'info',
                duracion: 3000
            });
            
            console.log('✅ Examen reiniciado');
        },
        onCancel: () => {
            console.log('❌ Reinicio cancelado');
        }
    });
}

// ============================================
// FUNCIONES GLOBALES PARA SENTENCE-ORDERING
// ============================================

window.sentenceOrders = {};

function moverPalabra(preguntaId, palabra, index, direccion) {
    const pool = document.getElementById(`words-pool-${preguntaId}`);
    const sentenceArea = document.getElementById(`sentence-area-${preguntaId}`);
    
    if (direccion === 'to-sentence') {
        const wordBtn = pool.querySelector(`[data-word="${palabra}"][data-index="${index}"]`);
        if (wordBtn) {
            wordBtn.remove();
            
            const newBtn = document.createElement('button');
            newBtn.className = 'word-button in-sentence';
            newBtn.textContent = palabra;
            newBtn.setAttribute('data-word', palabra);
            newBtn.onclick = () => moverPalabra(preguntaId, palabra, index, 'to-pool');
            
            sentenceArea.appendChild(newBtn);
            actualizarOrdenFrase(preguntaId);
        }
    } else {
        const wordBtn = sentenceArea.querySelector(`[data-word="${palabra}"]`);
        if (wordBtn) {
            wordBtn.remove();
            
            const newBtn = document.createElement('button');
            newBtn.className = 'word-button';
            newBtn.textContent = palabra;
            newBtn.setAttribute('data-word', palabra);
            newBtn.setAttribute('data-index', index);
            newBtn.onclick = () => moverPalabra(preguntaId, palabra, index, 'to-sentence');
            
            pool.appendChild(newBtn);
            actualizarOrdenFrase(preguntaId);
        }
    }
}

function actualizarOrdenFrase(preguntaId) {
    const sentenceArea = document.getElementById(`sentence-area-${preguntaId}`);
    const palabras = Array.from(sentenceArea.querySelectorAll('.word-button'))
                         .map(btn => btn.getAttribute('data-word'));
    
    respuestasUsuario[preguntaId] = palabras;
    window.sentenceOrders[preguntaId] = palabras;
}

function resetearOrden(preguntaId) {
    const sentenceArea = document.getElementById(`sentence-area-${preguntaId}`);
    const pool = document.getElementById(`words-pool-${preguntaId}`);
    
    const palabrasEnFrase = sentenceArea.querySelectorAll('.word-button');
    palabrasEnFrase.forEach(btn => {
        const palabra = btn.getAttribute('data-word');
        btn.className = 'word-button';
        btn.onclick = () => moverPalabra(preguntaId, palabra, 0, 'to-sentence');
        pool.appendChild(btn);
    });
    
    respuestasUsuario[preguntaId] = [];
    window.sentenceOrders[preguntaId] = [];
}

console.log('✅ Motor de exámenes cargado correctamente');

// Verificación adicional cuando TODOS los recursos estén cargados
window.addEventListener('load', function() {
    console.log('🔍 Verificando estado de carga completo...');
    
    const estado = {
        bancoPreguntasExiste: typeof window.bancoPreguntasExamen !== 'undefined',
        numeroPreguntasEnBanco: window.bancoPreguntasExamen ? window.bancoPreguntasExamen.length : 0,
        funcionObtenerExiste: typeof window.obtenerPreguntasAleatorias === 'function',
        botonIniciarExiste: !!document.getElementById('startExamBtn'),
        contenedorPreguntasExiste: !!document.getElementById('examQuestionsContainer')
    };
    
    console.log('📊 Estado del sistema:', estado);
    
    if (!estado.bancoPreguntasExiste) {
        console.error('❌ CRÍTICO: Banco de preguntas NO cargado después de window.load');
    } else if (estado.numeroPreguntasEnBanco === 0) {
        console.error('❌ CRÍTICO: Banco de preguntas vacío');
    } else {
        console.log(`✅ Todo OK: ${estado.numeroPreguntasEnBanco} preguntas disponibles`);
    }
});
