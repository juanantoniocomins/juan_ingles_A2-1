// ==============================================================
// teoria.js - Script EXCLUSIVO para teoria.html
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
  "1": "Introduce Yourself",
  "2": "Daily Routines",
  "3": "Food & Drinks",
  "4": "Family & Friends",
  "5": "Hobbies & Free Time",
  "6": "Shopping & Money",
  "7": "Travel & Transport",
  "8": "Health & Body"
};

function getTemaAndWeekFromUrl() {
  const path = window.location.pathname;
  const match = path.match(/\/tema(\d+)\/week(\d+)\//i);
  if (match && match.length >= 3) {
    return { tema: match[1], week: match[2] };
  }
  return null;
}

function getPageType() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('teoria.html')) return 'teoria';
  if (path.includes('ejercicios.html')) return 'ejercicios';
  if (path.includes('examenes.html')) return 'examenes';
  if (path.includes('extras.html')) return 'extras';
  return 'teoria';
}

// ✅ CORREGIDO: Insertar subtítulo DESPUÉS del título y ANTES del resumen
function cargarContenidoDinamico() {
  const elementos = getTemaAndWeekFromUrl();
  const titleElement = document.querySelector('.topic-title');
  const summaryElement = document.querySelector('.week-summary');
  const pointsElement = document.getElementById('summary-points');

  if (!elementos || !titleElement) {
    return;
  }

  const { tema, week } = elementos;
  const themeData = contenidos[tema];
  const pageType = getPageType();

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

  // Definir subtítulos según tipo de página
  const subtitulos = {
    'teoria': '📖 Teoría',
    'ejercicios': '✏️ Ejercicios',
    'examenes': '📝 Exámenes',
    'extras': '⭐ Extras'
  };

  // ✅ CORRECCIÓN: Insertar el subtítulo DESPUÉS del título y ANTES del resumen
  let subtitleElement = document.querySelector('.page-subtitle');
  
  if (!subtitleElement && titleElement && summaryElement) {
    // Crear el elemento si no existe
    subtitleElement = document.createElement('p');
    subtitleElement.className = 'page-subtitle';
    
    // Insertar DESPUÉS del título (.topic-title) y ANTES del resumen (.week-summary)
    titleElement.parentNode.insertBefore(subtitleElement, summaryElement);
  }
  
  if (subtitleElement) {
    subtitleElement.textContent = subtitulos[pageType] || '';
  }

  // Actualizar puntos de resumen
  if (pointsElement) {
    const listItems = weekData.puntos.map(punto => `<li>${punto}</li>`).join('');
    pointsElement.innerHTML = listItems;
  }
}

function initCollapsibles() {
  const collapsibles = document.querySelectorAll('.collapsible');
  
  collapsibles.forEach(item => {
    const header = item.querySelector('.collapsible-header');
    
    if (header) {
      header.addEventListener('click', function() {
        item.classList.toggle('active');
      });
    }
  });
}

function initTranslationToggle() {
  const buttons = document.querySelectorAll('.translate-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Encuentra la caja de traducción que sigue inmediatamente después del botón
      const translationBox = this.nextElementSibling;
      
      if (translationBox && translationBox.classList.contains('translation-box')) {
        // Muestra u oculta la caja de traducción
        if (translationBox.style.display === 'none' || translationBox.style.display === '') {
          translationBox.style.display = 'block';
          this.textContent = 'Ocultar Traducción';
        } else {
          translationBox.style.display = 'none';
          this.textContent = 'Traducir';
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  cargarContenidoDinamico();
  initCollapsibles();
  initTranslationToggle();
  
  console.log('✅ teoria.js cargado - Automatización completa');
});

// Marcar teoría como completada cuando se visita
if (window.ProgressSystem) {
  const progress = new window.ProgressSystem();
  const { tema, week } = getTemaAndWeekFromUrl();
  if (tema && week) {
    progress.markTheoryComplete(tema, week);
  }
}
