// ==============================================================
// index.js - Script EXCLUSIVO para index.html
// ==============================================================

// ✅ USA LOS DATOS COMPARTIDOS
const contenidos = CONTENIDOS_DATA;

// Función para abrir modal con contenido de la semana
function abrirModal(tema, week) {
  const data = contenidos?.[String(tema)]?.[String(week)];
  const modal = document.getElementById("contenidoModal");
  const title = document.getElementById("modal-title");
  const body = document.getElementById("modal-body");

  if (!data) {
    title.textContent = `Tema ${tema} · Week ${week}`;
    body.innerHTML = `<p style="color:#ef4444;">⚠️ Contenido no encontrado para esta semana.</p>`;
  } else {
    title.textContent = data.titulo;
    const listHTML = data.puntos.map(p => `<li>${p}</li>`).join('');
    body.innerHTML = `<ul>${listHTML}</ul>`;
  }

  if (modal) {
    modal.style.display = "flex";
  }
}

function cerrarModal() {
  const modal = document.getElementById("contenidoModal");
  if (modal) {
    modal.style.display = "none";
  }
}

window.addEventListener('click', function(event) {
  const modal = document.getElementById("contenidoModal");
  if (event.target === modal) {
    cerrarModal();
  }
});

// Inicializar acordeones
function initAccordions() {
  const sections = document.querySelectorAll('.theme-section');
  
  sections.forEach(section => {
    const toggle = section.querySelector('.theme-toggle');
    const content = section.querySelector('.weeks-content');
    
    if (toggle && content) {
      toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        content.classList.toggle('open');
      });
    }
  });
}

// Actualizar títulos de temas dinámicamente
function actualizarTitulosTemas() {
  const themeSections = document.querySelectorAll('.theme-section');
  
  themeSections.forEach((section, index) => {
    const temaNumber = index + 1;
    const themeNameElement = section.querySelector('.theme-name');
    
    if (themeNameElement && TEMA_NOMBRES[String(temaNumber)]) {
      themeNameElement.textContent = TEMA_NOMBRES[String(temaNumber)];
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  actualizarTitulosTemas();
  initAccordions();
  console.log('✅ index.js cargado - Títulos y acordeones activos');
});
