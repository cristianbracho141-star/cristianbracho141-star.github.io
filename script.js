/* ==========================================================================
   Cris — Portafolio
   Lógica de interfaz: navbar, contenido dinámico y contacto.
   ========================================================================== */
JavaScript
document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initNavbarScroll();
  initMobileMenu();
  renderTrayectoria();
  renderServicios();
  initDiscordCopy();
});

/* ---------- Año en el footer ---------- */
function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------- Navbar: fondo sólido al hacer scroll ---------- */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Menú hamburguesa (móvil) ---------- */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.classList.remove("is-open");
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al elegir una opción
  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

/* ==========================================================================
   TRAYECTORIA
   ========================================================================== */
const trayectoriaData = [
  {
   nombre: "Próximamente",
    rol: "Próximamente",
    descripcion: "Próximamente.",
    info: "Próximamente",
  },
  {
    nombre: "Próximamente",
    rol: "Próximamente",
    descripcion: "Próximamente.",
    info: "Próximamente",
  },
  {
    nombre: "Próximamente",
    rol: "Próximamente",
    descripcion: "Próximamente.",
    info: "Próximamente",
  },
  {
    nombre: "Próximamente",
    rol: "Próximamente",
    descripcion: "Próximamente.",
    info: "Próximamente",
  },
];

function renderTray() {
  const grid = document.getElementById("trayectoriaGrid");
  if (!grid) return;

  <div id="trayectoriaGrid"></div>
    .map(
      (item) => `
      <article class="card">
        <span class="card__role">${item.rol}</span>
        <h3 class="card__title">${item.nombre}</h3>
        <p class="card__desc">${item.descripcion}</p>
        <p class="card__meta">${item.info}</p>
      </article>
    `
    )
    .join("");
}

/* ==========================================================================
   SERVICIOS
   ========================================================================== */
const serviciosData = [
  {
    titulo: "Edición de vídeos",
    descripcion: "Edito mis videos y estoy aprendiendo más para mejorar su calidad.",
    icono: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="1.5"/><path d="M10 9.5v5l4-2.5-4-2.5Z" fill="currentColor"/></svg>`,
  },
  {
    titulo: "Creación de contenido",
    descripcion: "Ideas originales para crear contenido.",
    icono: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 5h16v10H8l-4 4V5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  },
  {
    titulo: "Habilidades de moderación",
    descripcion: "Cada día intento mejorar como creador de contenido y staff.",
    icono: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="10" r="1.4" fill="currentColor"/><path d="M5 17l5-5 4 4 3-3 2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
];

function renderServicios() {
  const grid = document.getElementById("serviciosGrid");
  if (!grid) return;

  grid.innerHTML = serviciosData
    .map(
      (item) => `
      <article class="card service-card">
        <div class="service-card__icon">${item.icono}</div>
        <h3 class="card__title">${item.titulo}</h3>
        <p class="card__desc">${item.descripcion}</p>
      </article>
    `
    )
    .join("");
}
