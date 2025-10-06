// ==============================================================
// index.js - Script EXCLUSIVO para index.html
// ==============================================================

const contenidos = {
  "1": {
    "1": { titulo: "👋 Week 1", puntos: ["Filling forms", "Personal pronouns", "Verbo: To be", "Introducing youself" , "Numbers: 0-12", "The vowels", "Grettings"] },
    "2": { titulo: "👋 Week 2", puntos: ["Meeting people", "Question words", "Questions & answers", "Real English situations"] },
    "3": { titulo: "👋 Week 3", puntos: ["The alphabet", "Numbers: 13-29", "Simple present", "Adverbs of frecuency", "Talking about other people"] }
  },
  "2": {
    "1": { titulo: "⏰ Week 1", puntos: ["Rutinas diarias", "Present Simple (afirmativo)", "Vocabulario: horarios"] },
    "2": { titulo: "⏰ Week 2", puntos: ["Adverbios de frecuencia", "Present Simple (negativo)", "Expresiones de tiempo"] },
    "3": { titulo: "⏰ Week 3", puntos: ["Preguntas en Present Simple", "Short answers", "Hábitos y frecuencia"] }
  },
  "3": {
    "1": { titulo: "🍎 Week 1", puntos: ["Vocabulario de comida", "Artículos A/AN/THE", "Ofrecer y pedir comida"] },
    "2": { titulo: "🍎 Week 2", puntos: ["Countable/Uncountable", "Some/Any/Much/Many", "Medidas y cantidades"] },
    "3": { titulo: "🍎 Week 3", puntos: ["En el restaurante", "Hacer pedidos", "Cortesía básica"] }
  },
  "4": {
    "1": { titulo: "👨‍👩‍👧 Week 1", puntos: ["Miembros de la familia", "Relaciones", "Possessive 's"] },
    "2": { titulo: "👨‍👩‍👧 Week 2", puntos: ["Adjetivos de personalidad", "Describir personas", "Comparaciones básicas"] },
    "3": { titulo: "👨‍👩‍👧 Week 3", puntos: ["Hablar de amigos", "Planes sencillos", "Invitaciones y respuestas"] }
  },
  "5": {
    "1": { titulo: "🎯 Week 1", puntos: ["Pasatiempos comunes", "Like/Love/Enjoy + gerundio", "Vocabulario de ocio"] },
    "2": { titulo: "🎯 Week 2", puntos: ["Dislikes/Don't like", "Prefer/Would rather (intro)", "Opiniones cortas"] },
    "3": { titulo: "🎯 Week 3", puntos: ["Escribir sobre tu tiempo libre", "Conectores básicos", "Presentaciones orales breves"] }
  },
  "6": {
    "1": { titulo: "🛒 Week 1", puntos: ["Vocabulario de compras", "Precios y números", "This/That/These/Those"] },
    "2": { titulo: "🛒 Week 2", puntos: ["Money: cost/price/change", "Ofertas y descuentos", "Preguntar disponibilidad"] },
    "3": { titulo: "🛒 Week 3", puntos: ["Role-play en tienda", "Devolver/Probar productos", "Opiniones y talla"] }
  },
  "7": {
    "1": { titulo: "✈️ Week 1", puntos: ["Transporte básico", "Billetes y horarios", "Asking for information"] },
    "2": { titulo: "✈️ Week 2", puntos: ["Direcciones en ciudad", "Preposiciones de lugar", "Lugares turísticos"] },
    "3": { titulo: "✈️ Week 3", puntos: ["Planear un viaje corto", "Reservas simples", "Itinerarios básicos"] }
  },
  "8": {
    "1": { titulo: "🏥 Week 1", puntos: ["Partes del cuerpo", "Verbo: hurt/ache", "Vocabulario de síntomas"] },
    "2": { titulo: "🏥 Week 2", puntos: ["Decir cómo te sientes", "Should/Shouldn't (consejo)", "Farmacia: productos"] },
    "3": { titulo: "🏥 Week 3", puntos: ["Role-play en clínica", "Citas médicas", "Recomendaciones de cuidado"] }
  }
};

const TEMA_NOMBRES = {
  "1": "Greetings & Introductions",
  "2": "Daily Routines",
  "3": "Food & Drinks",
  "4": "Family & Friends",
  "5": "Hobbies & Free Time",
  "6": "Shopping & Money",
  "7": "Travel & Transport",
  "8": "Health & Body"
};

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

// 🆕 NUEVA FUNCIÓN: Actualizar títulos de temas dinámicamente
function actualizarTitulosTemas() {
  const themeSections = document.querySelectorAll('.theme-section');
  
  themeSections.forEach((section, index) => {
    const temaNumber = index + 1; // Los temas van de 1 a 8
    const themeNameElement = section.querySelector('.theme-name');
    
    if (themeNameElement && TEMA_NOMBRES[String(temaNumber)]) {
      themeNameElement.textContent = TEMA_NOMBRES[String(temaNumber)];
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  actualizarTitulosTemas(); // Actualizar títulos de temas
  initAccordions();
  console.log('✅ index.js cargado - Títulos y acordeones activos');
});
