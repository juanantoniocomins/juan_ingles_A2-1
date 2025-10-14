// ==============================================================
// teoria.js - Script EXCLUSIVO para teoria.html
// ==============================================================

// ✅ USA LOS DATOS COMPARTIDOS
const contenidos = CONTENIDOS_DATA;

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

  titleElement.textContent = `Tema ${tema} – ${themeName} – ${weekData.titulo}`;

  const subtitulos = {
    'teoria': '📖 Teoría',
    'ejercicios': '✏️ Ejercicios',
    'examenes': '📝 Exámenes',
    'extras': '⭐ Extras'
  };

  let subtitleElement = document.querySelector('.page-subtitle');
  
  if (!subtitleElement && titleElement && summaryElement) {
    subtitleElement = document.createElement('p');
    subtitleElement.className = 'page-subtitle';
    titleElement.parentNode.insertBefore(subtitleElement, summaryElement);
  }
  
  if (subtitleElement) {
    subtitleElement.textContent = subtitulos[pageType] || '';
  }

  if (pointsElement) {
    const listItems = weekData.puntos.map(punto => `<li>${punto}</li>`).join('');
    pointsElement.innerHTML = listItems;
  }
}

// ✅ FUNCIÓN CORREGIDA: Solo genera enlaces SI hay H2 en el contenido
function generarEnlacesSecciones() {
  const pointsElement = document.getElementById('summary-points');
  
  if (!pointsElement) return;
  
  const summaryContainer = document.querySelector('.week-summary');
  if (summaryContainer && !summaryContainer.id) {
    summaryContainer.id = 'resumen-secciones';
  }
  
  const headings = document.querySelectorAll('.content h2');
  
  // ✅ SI NO HAY H2, NO HACER NADA (mantener el contenido de cargarContenidoDinamico)
  if (headings.length === 0) return;
  
  // ✅ SI HAY H2, ENTONCES SÍ generar los enlaces automáticos
  pointsElement.innerHTML = '';
  
  headings.forEach((heading, index) => {
    if (!heading.id) {
      const text = heading.textContent.trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      heading.id = id;
    }
    
    const li = document.createElement('li');
    const link = document.createElement('a');
    
    const text = heading.textContent
      .replace(/^[^\w\s]+\s*/, '')
      .trim();
    
    link.href = `#${heading.id}`;
    link.textContent = text;
    link.className = 'summary-link';
    
    li.appendChild(link);
    pointsElement.appendChild(li);
    
    const backButton = document.createElement('a');
    backButton.href = '#resumen-secciones';
    backButton.className = 'back-to-summary';
    backButton.innerHTML = '↑';
    backButton.title = 'Volver al resumen';
    
    heading.style.position = 'relative';
    heading.appendChild(backButton);
  });
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
      const translationBox = this.nextElementSibling;
      
      if (translationBox && translationBox.classList.contains('translation-box')) {
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
  generarEnlacesSecciones();
  initCollapsibles();
  initTranslationToggle();
  
  console.log('✅ teoria.js cargado - Automatización completa con enlaces a secciones');
});

if (window.ProgressSystem) {
  const progress = new window.ProgressSystem();
  const elementos = getTemaAndWeekFromUrl();
  if (elementos) {
    const { tema, week } = elementos;
    if (tema && week) {
      progress.markTheoryComplete(tema, week);
    }
  }
}
