/* Nankin Brand Guide — shared layout
   Injects sidebar on every page.
   Each page sets <body data-page="ID"> to highlight active link. */

const NK_NAV = [
  {
    title: "Visão geral",
    items: [
      { id: "index", label: "Início", href: "index.html" },
    ],
  },
  {
    title: "Fundações",
    items: [
      { id: "foundations", label: "F · Visão geral", href: "foundations.html" },
      { id: "f-spacing", label: "F1 · Spacing", href: "foundations/spacing.html" },
      { id: "f-type-scale", label: "F2 · Type scale", href: "foundations/type-scale.html" },
      { id: "f-grid", label: "F3 · Grid", href: "foundations/grid.html" },
      { id: "f-vertical-rhythm", label: "F4 · Vertical rhythm", href: "foundations/vertical-rhythm.html" },
      { id: "f-radii", label: "F5 · Radii", href: "foundations/radii.html" },
      { id: "f-elevation", label: "F6 · Elevation", href: "foundations/elevation.html" },
      { id: "f-motion", label: "F7 · Motion", href: "foundations/motion.html" },
      { id: "f-iconography", label: "F8 · Iconography", href: "foundations/iconography.html" },
    ],
  },
  {
    title: "Marca",
    items: [
      { id: "brand", label: "B · Visão geral", href: "brand.html" },
      { id: "b-architecture", label: "B1 · Arquitetura", href: "brand/architecture.html" },
      { id: "b-logos", label: "B2 · Logos", href: "brand/logos.html" },
      { id: "b-color", label: "B3 · Cores", href: "brand/color.html" },
      { id: "b-typography", label: "B4 · Tipografia", href: "brand/typography.html" },
      { id: "b-applying", label: "B5 · Aplicando", href: "brand/applying.html" },
    ],
  },
  {
    title: "Componentes",
    items: [
      { id: "c-button", label: "C1 · Button", href: "components/button.html" },
      { id: "c-card", label: "C2 · Card", href: "components/card.html" },
      { id: "c-tag", label: "C3 · Tag", href: "components/tag.html" },
      { id: "c-alert", label: "C4 · Alert", href: "components/alert.html" },
      { id: "c-tabs", label: "C5 · Tabs", href: "components/tabs.html" },
      { id: "c-accordion", label: "C6 · Accordion", href: "components/accordion.html" },
      { id: "c-pagination", label: "C7 · Pagination", href: "components/pagination.html" },
      { id: "c-table", label: "C8 · Table", href: "components/table.html" },
      { id: "c-input", label: "C9 · Input", href: "components/input.html" },
      { id: "c-checkbox", label: "C10 · Checkbox & Radio", href: "components/checkbox.html" },
      { id: "c-switch", label: "C11 · Switch", href: "components/switch.html" },
      { id: "c-avatar", label: "C12 · Avatar", href: "components/avatar.html" },
      { id: "c-badge", label: "C13 · Badge", href: "components/badge.html" },
      { id: "c-tooltip", label: "C14 · Tooltip", href: "components/tooltip.html" },
      { id: "c-modal", label: "C15 · Modal", href: "components/modal.html" },
      { id: "c-drawer", label: "C16 · Drawer", href: "components/drawer.html" },
      { id: "c-dropdown", label: "C17 · Dropdown", href: "components/dropdown.html" },
      { id: "c-breadcrumb", label: "C18 · Breadcrumb", href: "components/breadcrumb.html" },
      { id: "c-progress", label: "C19 · Progress", href: "components/progress.html" },
      { id: "c-skeleton", label: "C20 · Skeleton", href: "components/skeleton.html" },
      { id: "c-separator", label: "C21 · Separator", href: "components/separator.html" },
    ],
  },
  {
    title: "Padrões",
    items: [
      { id: "patterns", label: "P · Visão geral", href: "patterns.html" },
      { id: "p-sticky", label: "P1 · Sticky banner", href: "patterns/sticky-banner.html" },
      { id: "p-palettes", label: "P2 · Paletas", href: "patterns/palettes.html" },
      { id: "p-form", label: "P3 · Form", href: "patterns/form.html" },
      { id: "p-search", label: "P4 · Search", href: "patterns/search.html" },
      { id: "p-filter", label: "P5 · Filter", href: "patterns/filter.html" },
      { id: "p-sticky-card", label: "P6 · Sticky card", href: "patterns/sticky-card.html" },
      { id: "p-tile", label: "P7 · Tile", href: "patterns/tile.html" },
    ],
  },
  {
    title: "Aplicações",
    items: [
      { id: "applications", label: "A · Visão geral", href: "applications.html" },
      { id: "a-dashboard", label: "A1 · Dashboard", href: "applications/dashboard.html" },
      { id: "a-site", label: "A2 · Site", href: "applications/site.html" },
      { id: "a-slides", label: "A3 · Slides", href: "applications/slides.html" },
    ],
  },
  {
    title: "Estratégia",
    items: [
      { id: "strategy", label: "S · Visão geral", href: "strategy.html" },
      { id: "s-essence", label: "S1 · Essência", href: "strategy/essence.html" },
      { id: "s-mission", label: "S2 · Missão & Visão", href: "strategy/mission.html" },
      { id: "s-attributes", label: "S3 · Atributos", href: "strategy/attributes.html" },
      { id: "s-tone", label: "S4 · Tom de voz", href: "strategy/tone.html" },
      { id: "s-phrases", label: "S5 · Frases-chave", href: "strategy/phrases.html" },
      { id: "s-social", label: "S6 · Redes sociais", href: "strategy/social.html" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { id: "resources", label: "R · Visão geral", href: "resources.html" },
      { id: "r-downloads", label: "R1 · Downloads", href: "resources/downloads.html" },
      { id: "r-faq", label: "R2 · FAQ", href: "resources/faq.html" },
      { id: "r-changelog", label: "R3 · Histórico", href: "resources/changelog.html" },
      { id: "r-contact", label: "R4 · Contato", href: "resources/contact.html" },
    ],
  },
];

function nkResolveBase() {
  // Resolve relative path to /brand-guide/ root.
  // Works for: GitHub Pages (/repo/brand-guide/...), Netlify (/brand-guide/... or /...),
  // local file:// and any subpath deploy.
  const path = window.location.pathname;
  let tail;
  const marker = '/brand-guide/';
  const idx = path.indexOf(marker);
  if (idx !== -1) {
    tail = path.slice(idx + marker.length);
  } else {
    // Site published with brand-guide as root — count segments after host.
    const parts = path.split('/').filter(Boolean);
    // If last segment looks like a file, drop it
    const last = parts[parts.length - 1] || '';
    if (last.includes('.')) parts.pop();
    tail = parts.join('/') + (parts.length ? '/' : '');
  }
  const depth = (tail.match(/\//g) || []).length;
  return depth === 0 ? './' : '../'.repeat(depth);
}

function nkRenderSidebar(activeId) {
  const base = nkResolveBase();
  let html = '';
  html += `<div class="nk-sidebar">`;
  html += `  <a class="nk-sidebar__brand" href="${base}index.html">`;
  html += `    <span class="nk-sidebar__wordmark">nankin.</span>`;
  html += `    <span class="nk-sidebar__suffix">Brand Guide · v3.0</span>`;
  html += `  </a>`;
  html += `  <nav class="nk-sidebar__nav">`;
  for (const sec of NK_NAV) {
    html += `<div class="nk-sidebar__section">`;
    html += `  <div class="nk-sidebar__title">${sec.title}</div>`;
    html += `  <ul class="nk-sidebar__list">`;
    for (const it of sec.items) {
      const active = it.id === activeId ? ' is-active' : '';
      html += `<li><a class="nk-sidebar__link${active}" href="${base}${it.href}">${it.label}</a></li>`;
    }
    html += `  </ul>`;
    html += `</div>`;
  }
  html += `  </nav>`;
  html += `  <div class="nk-sidebar__footer">© Nankin · São Paulo · 2026</div>`;
  html += `</div>`;
  return html;
}

function nkInit() {
  const id = document.body.dataset.page || '';
  const host = document.createElement('div');
  host.className = 'nk-shell';
  host.innerHTML = nkRenderSidebar(id);

  const main = document.createElement('main');
  main.className = 'nk-main';
  while (document.body.firstChild) {
    main.appendChild(document.body.firstChild);
  }
  document.body.appendChild(host);
  document.body.appendChild(main);
}

document.addEventListener('DOMContentLoaded', nkInit);
