/* =========================================================
   TRINKAUS & SÖHNE — Komponenten-Renderer
   Baut Nav, Footer und Meta-Tags aus config.js auf.
   Diese Datei nie direkt bearbeiten.
   ========================================================= */

/* ─── SVG: Waben-Logo (wiederverwendbar) ─────────────────── */
function svgLogo(color, size) {
  color = color || '#F0B429';
  size  = size  || 36;
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 60 60" fill="none" aria-hidden="true">'
    + '<g stroke="' + color + '" stroke-width="2.2" fill="none">'
    + '<polygon points="30,4 40,9.5 40,20.5 30,26 20,20.5 20,9.5"/>'
    + '<polygon points="42,12 52,17.5 52,28.5 42,34 32,28.5 32,17.5"/>'
    + '<polygon points="18,12 28,17.5 28,28.5 18,34 8,28.5 8,17.5"/>'
    + '<polygon points="30,22 40,27.5 40,38.5 30,44 20,38.5 20,27.5"/>'
    + '<polygon points="42,30 52,35.5 52,46.5 42,52 32,46.5 32,35.5"/>'
    + '<polygon points="18,30 28,35.5 28,46.5 18,52 8,46.5 8,35.5"/>'
    + '<polygon points="30,40 40,45.5 40,56.5 30,62 20,56.5 20,45.5"/>'
    + '</g></svg>';
}

/* ─── SVG: Value-Icons ───────────────────────────────────── */
function svgIcon(name) {
  var icons = {
    location: '<path d="M12 2C8 2 4 6 4 11c0 5 8 11 8 11s8-6 8-11c0-5-4-9-8-9z"/>',
    clock:    '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    heart:    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  };
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">'
    + (icons[name] || '') + '</svg>';
}

/* ─── Seitentitel & Meta-Description setzen ──────────────── */
function applyMeta() {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var m    = CONFIG.meta[page];
  if (!m) return;
  document.title = m.title;
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', m.description);
}

/* ─── Navigation rendern ─────────────────────────────────── */
function renderNav() {
  var el = document.getElementById('siteNav');
  if (!el) return;

  var current = window.location.pathname.split('/').pop() || 'index.html';
  var b = CONFIG.brand;
  var n = CONFIG.nav;

  var linksHtml = '';
  n.links.forEach(function(link) {
    var active = (link.href === current) ? ' nav__link--active' : '';
    linksHtml += '<li><a href="' + link.href + '" class="nav__link' + active + '">' + link.label + '</a></li>';
  });

  el.innerHTML =
    '<div class="nav__inner">'
    + '<a href="index.html" class="nav__logo" aria-label="' + b.name + ' – Startseite">'
    +   '<div class="nav__logo-mark">' + svgLogo('#F0B429', 36) + '</div>'
    +   '<div class="nav__logo-text">'
    +     '<span class="nav__logo-name">' + b.name + '</span>'
    +     '<span class="nav__logo-sub">'  + b.tagline + '</span>'
    +   '</div>'
    + '</a>'
    + '<ul class="nav__links" id="navLinks">' + linksHtml + '</ul>'
    + '<a href="' + n.ctaHref + '" class="nav__cta">' + n.ctaLabel + '</a>'
    + '<button class="nav__toggle" id="navToggle" aria-label="Menü öffnen" aria-expanded="false">'
    +   '<span></span><span></span><span></span>'
    + '</button>'
    + '</div>';

  // Mobile Toggle
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('.nav__link').forEach(function(link) {
      link.addEventListener('click', function() {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ─── Footer rendern ─────────────────────────────────────── */
function renderFooter() {
  var el = document.getElementById('siteFooter');
  if (!el) return;

  var b = CONFIG.brand;
  var c = CONFIG.contact;
  var n = CONFIG.nav;
  var f = CONFIG.footer;

  var navLinksHtml = '';
  n.links.forEach(function(link) {
    navLinksHtml += '<li><a href="' + link.href + '" class="footer__link">' + link.label + '</a></li>';
  });

  el.innerHTML =
    '<div class="container">'
    + '<div class="footer__inner">'

    + '<div>'
    +   svgLogo('#F0B429', 36)
    +   '<p class="footer__brand-name">' + b.name + '</p>'
    +   '<p class="footer__tagline">'    + b.subline + '</p>'
    + '</div>'

    + '<div>'
    +   '<p class="footer__heading">Navigation</p>'
    +   '<ul class="footer__links">' + navLinksHtml + '</ul>'
    + '</div>'

    + '<div>'
    +   '<p class="footer__heading">Kontakt</p>'
    +   '<ul class="footer__links">'
    +     '<li><a href="mailto:' + c.email + '" class="footer__link">' + c.emailLabel + '</a></li>'
    +     '<li><span class="footer__link" style="cursor:default">' + c.telefon + '</span></li>'
    +     '<li><span class="footer__link" style="cursor:default">' + c.ort + '</span></li>'
    +   '</ul>'
    + '</div>'

    + '<div>'
    +   '<p class="footer__heading">Rechtliches</p>'
    +   '<ul class="footer__links">'
    +     '<li><a href="impressum.html"  class="footer__link">Impressum</a></li>'
    +     '<li><a href="datenschutz.html" class="footer__link">Datenschutz</a></li>'
    +   '</ul>'
    + '</div>'

    + '</div>'
    + '<div class="footer__bottom">'
    +   '<span>' + f.copyright + '</span>'
    +   '<div class="footer__legal">'
    +     '<a href="impressum.html">Impressum</a>'
    +     '<a href="datenschutz.html">Datenschutz</a>'
    +   '</div>'
    + '</div>'
    + '</div>';
}

/* ─── Page Hero rendern (generisch) ─────────────────────── */
function renderPageHero(cfg) {
  var el = document.getElementById('pageHero');
  if (!el || !cfg) return;
  el.innerHTML =
    '<div class="container">'
    + '<span class="label">' + cfg.eyebrow + '</span>'
    + '<div class="divider" style="margin-bottom:1rem"></div>'
    + '<h1>' + cfg.headline + '</h1>'
    + (cfg.sub ? '<p style="font-size:1.1rem;color:var(--charcoal);margin-top:.75rem;max-width:52ch">' + cfg.sub + '</p>' : '')
    + '</div>';
}
