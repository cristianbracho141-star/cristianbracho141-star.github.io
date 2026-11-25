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
