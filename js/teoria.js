// ==============================================================
// Lógica de Automatización para Teoria.html y Ejercicios.html
// Este script asume que el objeto 'contenidos' de index.js ya fue cargado.
// ==============================================================

// Mapa para obtener el nombre largo del tema
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

/**
 * Extrae el número de tema y semana de la URL (e.g., /temaX/weekY/pagina.html).
 * @returns {{tema: string, week: string} | null}
 */
function getTemaAndWeekFromUrl() {
    // Busca patrones como /tema[1-8]/week[1-3]/ en la ruta de la URL
    const path = window.location.pathname;
    const match = path.match(/\/tema(\d+)\/week(\d+)\//i);

    if (match && match.length >= 3) {
        return {
            tema: match[1], // Número de Tema (1 a 8)
            week: match[2]  // Número de Semana (1 a 3)
        };
    }
    return null;
}

/**
 * Carga el título y los puntos de resumen en la página si los elementos están presentes.
 */
function cargarContenidoDinamico() {
    const elementos = getTemaAndWeekFromUrl();
    
    // Elementos a rellenar
    const titleElement = document.querySelector('.topic-title');
    const pointsElement = document.getElementById('summary-points');

    // Salir si no estamos en una página de tema/semana o si faltan elementos clave
    // Y si 'contenidos' no está definido (porque no se cargó index.js)
    if (!elementos || !titleElement || !pointsElement || typeof contenidos === 'undefined') {
        return;
    }

    const { tema, week } = elementos;
    const themeData = contenidos[tema];

    // Verificar que los datos existan en el diccionario
    if (!themeData || !themeData[week]) {
        titleElement.textContent = `Tema ${tema} – Contenido no encontrado`;
        pointsElement.innerHTML = `<li>No hay puntos de resumen disponibles.</li>`;
        return;
    }

    const data = themeData[week];
    const temaLongName = TEMA_NOMBRES[tema] || `Tema ${tema}`;
    
    // 1. Rellenar el Título (h1.topic-title)
    const weekNumber = data.titulo.match(/\d+/) ? data.titulo.match(/\d+/)[0] : week;
    titleElement.textContent = `Tema ${tema} – ${temaLongName} – Week ${weekNumber}`;

    // 2. Rellenar los Puntos de Resumen (ul#summary-points)
    const items = data.puntos.map(p => `<li>${p}</li>`).join("");
    pointsElement.innerHTML = items;

    // Opcional: Actualizar el <title> de la página
    document.title = titleElement.textContent;
}

// Ejecutar la función cuando el documento esté listo
document.addEventListener('DOMContentLoaded', cargarContenidoDinamico);


// ==============================================================
// Inserción dinámica de subtítulo según la página actual
// ==============================================================

document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.querySelector('h1.topic-title');
    const summaryBox = document.querySelector('.week-summary');
    if (!mainTitle || !summaryBox) return;

    const file = window.location.href.split('/').pop().split('?')[0].split('#')[0].toLowerCase();
    let subtitleText = '';

    if (file === 'teoria.html') subtitleText = 'Teoría';
    else if (file === 'ejercicios.html') subtitleText = 'Ejercicios';
    else if (file === 'examenes.html') subtitleText = 'Exámenes';
    else if (file === 'extras.html') subtitleText = 'Extras';

    if (subtitleText) {
        const subtitle = document.createElement('h2');
        subtitle.textContent = subtitleText;
        subtitle.className = 'page-subtitle';
        // Insertar justo antes de la caja de resumen
        mainTitle.insertAdjacentElement('afterend', subtitle);
    }
});
// ==============================================================
// Cajas desplegables con flecha (Consejo, Advertencia, etc.)
// ==============================================================

document.addEventListener('DOMContentLoaded', function() {
  const collapsibles = document.querySelectorAll('.collapsible');
  collapsibles.forEach(box => {
    const header = box.querySelector('.collapsible-header');
    const arrow = box.querySelector('.arrow');
    header.addEventListener('click', () => {
      box.classList.toggle('active');
      // Cambiar símbolo ▶ / ▼
      if (box.classList.contains('active')) {
        arrow.textContent = '▼';
      } else {
        arrow.textContent = '▶';
      }
    });
  });
});

