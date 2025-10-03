// Diccionario de contenidos dinámicos (rellena cada uno)
/* ===== Contenidos por Tema/Semana (titulo + puntos) ===== */
const contenidos = {
  "1": {
    "1": { titulo: "👋 Week 1", puntos: ["Saludos básicos", "Presentaciones", "Verbo: To be"] },
    "2": { titulo: "👋 Week 2", puntos: ["Formas cortas con 'to be'", "Preguntas/respuestas simples", "Pronombres personales"] },
    "3": { titulo: "👋 Week 3", puntos: ["Diálogos prácticos", "Spelling y nombres", "Interacciones cotidianas"] }
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
    "2": { titulo: "🎯 Week 2", puntos: ["Dislikes/Don’t like", "Prefer/Would rather (intro)", "Opiniones cortas"] },
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
    "2": { titulo: "🏥 Week 2", puntos: ["Decir cómo te sientes", "Should/Shouldn’t (consejo)", "Farmacia: productos"] },
    "3": { titulo: "🏥 Week 3", puntos: ["Role-play en clínica", "Citas médicas", "Recomendaciones de cuidado"] }
  }
};

// Modal
function abrirModal(tema, week) {
  const data = contenidos?.[String(tema)]?.[String(week)];
  const modal = document.getElementById("contenidoModal");
  const title = document.getElementById("modal-title");
  const body = document.getElementById("modal-body");

  if (!data) {
    title.textContent = `Tema ${tema} · Week ${week}`;
    body.innerHTML = `<ul><li>Contenido aún no disponible.</li></ul>`;
    modal.style.display = "block";
    return;
  }

  // Título resaltado (Week N con emoji)
  title.textContent = data.titulo;

  // Lista de puntos
  const items = data.puntos.map(p => `<li>${p}</li>`).join("");
  body.innerHTML = `<ul>${items}</ul>`;

  modal.style.display = "block";
}

function cerrarModal() {
  document.getElementById("contenidoModal").style.display = "none";
}

window.onclick = function (e) {
  const modal = document.getElementById("contenidoModal");
  if (e.target === modal) cerrarModal();
};

// Acordeón
function toggleTheme(button) {
  const content = button.nextElementSibling;
  const isOpen = content.classList.contains("open");
  document.querySelectorAll(".theme-toggle").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".weeks-content").forEach(div => div.classList.remove("open"));
  if (!isOpen) {
    button.classList.add("active");
    content.classList.add("open");
  }
}
