/* =========================================================
   TRINKAUS & SÖHNE — Seiten-Logik
   Greift auf CONFIG aus config.js zurück.
   Diese Datei enthält keine Texte oder Inhalte.
   ========================================================= */

function fmt(num) {
  return num.toFixed(2).replace('.', ',') + ' \u20AC';
}

/* ─── Produktkarten ──────────────────────────────────────── */
function renderProductCards(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var html = '';
  CONFIG.products.forEach(function(p) {
    html +=
      '<article class="product-card">'
      + '<div class="product-card__visual" style="background:' + p.color + '">'
      + '<svg class="product-card__icon" viewBox="0 0 100 100" fill="none"><polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" stroke="#1C1C1B" stroke-width="4" fill="none"/></svg>'
      + '<span class="product-card__name-script">' + p.name + '</span>'
      + '</div>'
      + '<div class="product-card__body">'
      + '<span class="product-card__tag">' + p.subtitle + ' \u00B7 ' + p.weight + ' Glas</span>'
      + '<h3 class="product-card__title">' + p.name + '</h3>'
      + '<p class="product-card__desc">' + p.cardDesc + '</p>'
      + '</div>'
      + '<div class="product-card__footer">'
      + '<span class="product-card__size">' + p.weight + '</span>'
      + '<span class="product-card__price">' + fmt(p.price) + '</span>'
      + '</div>'
      + '</article>';
  });
  container.innerHTML = html;
}

/* ─── Vorschau-Karten (Startseite) ───────────────────────── */
function renderPreviewCards(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var html = '';
  CONFIG.products.slice(0, 2).forEach(function(p) {
    html +=
      '<div class="preview-card">'
      + '<div class="preview-card__dot" style="background:' + p.color + '"></div>'
      + '<div>'
      + '<div class="label label--honey" style="margin-bottom:.25rem">' + p.subtitle + '</div>'
      + '<strong class="preview-card__name">' + p.name + '</strong>'
      + '<div class="preview-card__price">' + fmt(p.price) + ' \u00B7 ' + p.weight + '</div>'
      + '</div>'
      + '</div>';
  });
  container.innerHTML = html;
}

/* ─── Startseite ─────────────────────────────────────────── */
function renderHome() {
  var h = CONFIG.home;

  var hero = document.getElementById('homeHero');
  if (hero) {
    hero.innerHTML =
      '<div class="container"><div class="hero__content">'
      + '<div class="hero__eyebrow"><div class="hero__eyebrow-line"></div>'
      + '<span class="label">' + h.hero.eyebrow + '</span></div>'
      + '<h1>' + h.hero.headline + '</h1>'
      + '<p class="hero__sub">' + h.hero.sub + '</p>'
      + '<div class="hero__actions">'
      + '<a href="bestellung.html" class="btn btn--primary btn--lg">' + h.hero.cta1 + '</a>'
      + '<a href="honig.html" class="btn btn--outline btn--lg">' + h.hero.cta2 + '</a>'
      + '</div></div></div>';
  }

  var strip = document.getElementById('previewStrip');
  if (strip) {
    strip.innerHTML =
      '<div class="container"><div class="preview-strip__inner">'
      + '<span class="preview-strip__label">' + h.previewStrip.label + '</span>'
      + '<div id="previewCards"></div>'
      + '<a href="honig.html" class="btn btn--honey" style="margin-left:auto">' + h.previewStrip.cta + '</a>'
      + '</div></div>';
    renderPreviewCards('previewCards');
  }

  var vals = document.getElementById('homeValues');
  if (vals) {
    var itemsHtml = '';
    h.values.items.forEach(function(item) {
      itemsHtml +=
        '<div class="value-item">'
        + '<div class="value-item__icon">' + svgIcon(item.icon) + '</div>'
        + '<h3>' + item.title + '</h3>'
        + '<p>' + item.text + '</p>'
        + '</div>';
    });
    vals.innerHTML =
      '<div class="container">'
      + '<div class="section-header" style="text-align:center">'
      + '<span class="label label--honey">' + h.values.eyebrow + '</span>'
      + '<div class="divider divider--center"></div>'
      + '<h2>' + h.values.headline + '</h2>'
      + '</div>'
      + '<div class="values-grid">' + itemsHtml + '</div>'
      + '</div>';
  }

  var at = document.getElementById('aboutTeaser');
  if (at) {
    at.innerHTML =
      '<div class="container"><div class="about-teaser">'
      + '<div class="about-teaser__visual">'
      + '<svg style="width:70%;opacity:.25" viewBox="0 0 200 200" fill="none" aria-hidden="true"><g stroke="#1C1C1B" stroke-width="3" fill="none"><polygon points="100,10 160,45 160,115 100,150 40,115 40,45"/><polygon points="100,35 140,57.5 140,102.5 100,125 60,102.5 60,57.5"/></g></svg>'
      + '<div class="about-teaser__logo-center">'
      + svgLogo('#1C1C1B', 80)
      + '<span class="about-teaser__brand">' + CONFIG.brand.name + '</span>'
      + '<span class="about-teaser__brand-sub">' + CONFIG.brand.tagline + '</span>'
      + '</div></div>'
      + '<div class="about-teaser__text">'
      + '<span class="label label--honey">' + h.aboutTeaser.eyebrow + '</span>'
      + '<div class="divider"></div>'
      + '<h2>' + h.aboutTeaser.headline + '</h2>'
      + '<p>' + h.aboutTeaser.text1 + '</p>'
      + '<p>' + h.aboutTeaser.text2 + '</p>'
      + '<a href="ueber-uns.html" class="btn btn--primary">' + h.aboutTeaser.cta + '</a>'
      + '</div></div></div>';
  }

  var ctaEl = document.getElementById('ctaBanner');
  if (ctaEl) {
    ctaEl.innerHTML =
      '<div class="container" style="text-align:center">'
      + '<span class="label" style="color:var(--honey-dark)">' + h.ctaBanner.eyebrow + '</span>'
      + '<div class="divider divider--center"></div>'
      + '<h2 style="margin-bottom:1.5rem">' + h.ctaBanner.headline + '</h2>'
      + '<a href="bestellung.html" class="btn btn--primary btn--lg">' + h.ctaBanner.cta + '</a>'
      + '<span style="display:block;margin-top:1rem;font-size:.9rem;color:var(--charcoal)">' + h.ctaBanner.sub + '</span>'
      + '</div>';
  }
}

/* ─── Über-uns-Seite ─────────────────────────────────────── */
function renderAbout() {
  var a = CONFIG.about;
  renderPageHero(a.hero);

  var story = document.getElementById('aboutStory');
  if (story) {
    story.innerHTML =
      '<div class="container"><div class="story-grid">'
      + '<div class="story-visual">'
      + '<div class="story-visual__hex"><svg width="100%" viewBox="0 0 300 400" fill="none" aria-hidden="true"><g stroke="#1C1C1B" stroke-width="2"><polygon points="150,20 220,60 220,140 150,180 80,140 80,60"/><polygon points="80,140 150,180 150,260 80,300 10,260 10,180"/><polygon points="220,140 290,180 290,260 220,300 150,260 150,180"/></g></svg></div>'
      + '<div class="story-visual__center">' + svgLogo('#1C1C1B', 90) + '</div>'
      + '<div class="story-visual__year">' + a.story.founded + '</div>'
      + '</div>'
      + '<div class="story-text">'
      + '<span class="label label--honey">' + a.story.eyebrow + '</span>'
      + '<div class="divider"></div>'
      + '<h2>' + a.story.headline + '</h2>'
      + '<blockquote>' + a.story.quote + '</blockquote>'
      + '<p>' + a.story.text1 + '</p>'
      + '<p>' + a.story.text2 + '</p>'
      + '<p>' + a.story.text3 + '</p>'
      + '</div></div></div>';
  }

  var statsEl = document.getElementById('aboutStats');
  if (statsEl) {
    var sHtml = '';
    a.stats.forEach(function(s) {
      sHtml += '<div class="stat-item"><span class="stat-item__num">' + s.num + '</span><span class="stat-item__label">' + s.label + '</span></div>';
    });
    statsEl.innerHTML =
      '<div class="container">'
      + '<span class="label label--light">Zahlen, die z\u00E4hlen</span>'
      + '<div class="divider divider--center" style="background:var(--honey)"></div>'
      + '<div class="stat-row">' + sHtml + '</div>'
      + '</div>';
  }

  var princEl = document.getElementById('aboutPrinciples');
  if (princEl) {
    var pHtml = '';
    a.principles.items.forEach(function(item) {
      pHtml +=
        '<div class="principle-card">'
        + '<div class="principle-card__number">' + item.num + '</div>'
        + '<h3>' + item.title + '</h3>'
        + '<p>' + item.text + '</p>'
        + '</div>';
    });
    princEl.innerHTML =
      '<div class="container">'
      + '<div class="section-header">'
      + '<span class="label label--honey">' + a.principles.eyebrow + '</span>'
      + '<div class="divider"></div>'
      + '<h2>' + a.principles.headline + '</h2>'
      + '<p>' + a.principles.sub + '</p>'
      + '</div>'
      + '<div class="principles">' + pHtml + '</div>'
      + '</div>';
  }

  var ctaEl = document.getElementById('aboutCta');
  if (ctaEl) {
    ctaEl.innerHTML =
      '<div class="container" style="text-align:center">'
      + '<h2 style="margin-bottom:1.5rem">' + a.cta.headline + '</h2>'
      + '<a href="bestellung.html" class="btn btn--primary btn--lg">' + a.cta.btn + '</a>'
      + '<span style="display:block;margin-top:1rem;font-size:.9rem;color:var(--charcoal)">' + a.cta.sub + '</span>'
      + '</div>';
  }
}

/* ─── Honig-Seite ────────────────────────────────────────── */
function renderHonig() {
  var hg = CONFIG.honig;
  renderPageHero(hg.hero);
  renderProductCards('productsGrid');

  var detailsEl = document.getElementById('productDetails');
  if (detailsEl) {
    var html = '';
    CONFIG.products.forEach(function(p, i) {
      var rev = (i % 2 !== 0) ? ' product-detail--reverse' : '';
      var tHtml = '';
      p.taste.forEach(function(t) { tHtml += '<span class="taste-tag">' + t + '</span>'; });
      html +=
        '<div class="product-detail' + rev + '">'
        + '<div class="product-visual" style="background:' + p.color + '">'
        + '<svg class="product-visual__bg" viewBox="0 0 300 300" fill="none" aria-hidden="true"><polygon points="150,10 230,55 230,145 150,190 70,145 70,55" stroke="#1C1C1B" stroke-width="2" fill="none"/></svg>'
        + '<span class="product-visual__label">' + p.name + '</span>'
        + '</div>'
        + '<div class="product-info">'
        + '<div class="product-info__tag">' + p.subtitle + '</div>'
        + '<h2>' + p.name + '</h2>'
        + '<p class="product-info__desc">' + p.fullDesc + '</p>'
        + '<div class="product-info__details">'
        + '<div class="product-info__detail-item"><span class="product-info__detail-key">Inhalt</span><span class="product-info__detail-val">' + p.weight + '</span></div>'
        + '<div class="product-info__detail-item"><span class="product-info__detail-key">Preis</span><span class="product-info__detail-val">' + fmt(p.price) + '</span></div>'
        + '<div class="product-info__detail-item"><span class="product-info__detail-key">Herkunft</span><span class="product-info__detail-val">' + CONFIG.contact.ort + ' & Umgebung</span></div>'
        + '</div>'
        + '<div class="taste-notes"><h4>Geschmacksprofil</h4><div class="taste-tags">' + tHtml + '</div></div>'
        + '<div style="margin-top:2rem"><a href="bestellung.html" class="btn btn--primary">' + p.name + ' bestellen</a></div>'
        + '</div></div>';
    });
    detailsEl.innerHTML = html;
  }

  var avEl = document.getElementById('availabilityNote');
  if (avEl) {
    var av = hg.availabilityNote;
    avEl.innerHTML =
      '<div class="container" style="text-align:center">'
      + '<span class="label label--light">' + av.eyebrow + '</span>'
      + '<div class="divider divider--center" style="background:var(--honey)"></div>'
      + '<p style="color:rgba(255,255,255,.7);font-size:1rem;max-width:56ch;margin:0 auto 1.5rem">' + av.text + '</p>'
      + '<a href="bestellung.html" class="btn btn--honey">' + av.cta + '</a>'
      + '</div>';
  }
}

/* ─── Bestellformular ────────────────────────────────────── */
function renderOrderForm() {
  var form = document.getElementById('orderForm');
  if (!form) return;

  var l = CONFIG.order.labels;
  renderPageHero(CONFIG.order.hero);

  // Sidebar befüllen
  var s     = CONFIG.order.sidebar;
  var sideEl = document.getElementById('orderSidebar');
  if (sideEl) {
    sideEl.innerHTML =
      '<div id="summaryBox" style="display:none">'
      + '<div class="order-summary">'
      + '<h3>' + l.summaryTitle + '</h3>'
      + '<div id="summaryBody"></div>'
      + '<div id="summaryTotal" class="order-summary__total"></div>'
      + '</div></div>'
      + '<div class="sidebar-info"><h4>' + s.howTitle + '</h4><p>' + s.howText + '</p></div>'
      + '<div class="sidebar-info" style="margin-top:1rem"><h4>' + s.deliveryTitle + '</h4><p>' + s.deliveryText + '</p></div>'
      + '<div class="sidebar-info" style="margin-top:1rem"><h4>' + s.contactTitle + '</h4>'
      + '<p style="margin-bottom:.5rem">' + s.contactText + '</p>'
      + '<a href="mailto:' + CONFIG.contact.email + '" style="color:var(--honey-dark);font-weight:600;font-size:.9rem">' + CONFIG.contact.emailLabel + '</a>'
      + '</div>';
  }

  // Produktzeilen
  var orderLinesEl = document.getElementById('orderLines');
  if (!orderLinesEl) return;

  var linesHtml = '';
  CONFIG.products.forEach(function(p) {
    linesHtml +=
      '<div class="order-line" data-id="' + p.id + '">'
      + '<div style="flex:1;min-width:0">'
      + '<div class="label label--honey" style="margin-bottom:.2rem">' + p.subtitle + '</div>'
      + '<strong class="order-line__name">' + p.name + '</strong>'
      + '<div class="order-line__unit">' + p.weight + ' \u00B7 ' + fmt(p.price) + ' / Glas</div>'
      + '</div>'
      + '<div class="order-line__right">'
      + '<div class="qty-stepper">'
      + '<button type="button" class="qty-btn" data-action="minus" data-target="qty_' + p.id + '" aria-label="Weniger">\u2212</button>'
      + '<input type="number" class="qty-input" id="qty_' + p.id + '" name="qty_' + p.id + '" value="0" min="0" max="99">'
      + '<button type="button" class="qty-btn" data-action="plus" data-target="qty_' + p.id + '" aria-label="Mehr">+</button>'
      + '</div>'
      + '<div class="order-line__subtotal" id="sub_' + p.id + '">0,00 \u20AC</div>'
      + '</div></div>';
  });
  orderLinesEl.innerHTML = linesHtml;

  function getSummaryEls() {
    return {
      box:   document.getElementById('summaryBox'),
      body:  document.getElementById('summaryBody'),
      total: document.getElementById('summaryTotal'),
    };
  }

  function updateCalc() {
    var total = 0;
    var lines = [];
    CONFIG.products.forEach(function(p) {
      var input = document.getElementById('qty_' + p.id);
      var qty   = input ? Math.max(0, parseInt(input.value, 10) || 0) : 0;
      var sub   = qty * p.price;
      total += sub;
      var subEl = document.getElementById('sub_' + p.id);
      if (subEl) subEl.textContent = fmt(sub);
      if (qty > 0) lines.push({ name: p.name, qty: qty, sub: sub });
    });
    var els = getSummaryEls();
    if (!els.box || !els.body || !els.total) return;
    if (lines.length > 0) {
      var rowsHtml = '';
      lines.forEach(function(ln) {
        rowsHtml += '<div class="order-summary__row"><span>' + ln.qty + ' \u00D7 ' + ln.name + '</span><span>' + fmt(ln.sub) + '</span></div>';
      });
      els.body.innerHTML  = rowsHtml;
      els.total.innerHTML = '<span>' + l.totalLabel + '</span><span>' + fmt(total) + '</span>';
      els.box.style.display = 'block';
    } else {
      els.body.innerHTML  = '<p style="color:rgba(255,255,255,.5);font-size:.9rem">Noch keine Produkte gew\u00E4hlt.</p>';
      els.total.innerHTML = '<span>' + l.totalLabel + '</span><span>0,00 \u20AC</span>';
      els.box.style.display = 'none';
    }
  }

  orderLinesEl.addEventListener('click', function(e) {
    var btn = e.target.closest ? e.target.closest('.qty-btn') : null;
    if (!btn) return;
    var input = document.getElementById(btn.getAttribute('data-target'));
    if (!input) return;
    var val = parseInt(input.value, 10) || 0;
    if (btn.getAttribute('data-action') === 'plus')  input.value = Math.min(99, val + 1);
    if (btn.getAttribute('data-action') === 'minus') input.value = Math.max(0,  val - 1);
    updateCalc();
  });

  orderLinesEl.addEventListener('input', function(e) {
    if (e.target.classList.contains('qty-input')) updateCalc();
  });

  updateCalc();

  var submitBtn = document.getElementById('submitBtn');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var total = 0;
    CONFIG.products.forEach(function(p) {
      var input = document.getElementById('qty_' + p.id);
      total += (input ? Math.max(0, parseInt(input.value, 10) || 0) : 0) * p.price;
    });
    if (total <= 0) { alert('Bitte w\u00E4hlen Sie mindestens ein Produkt aus.'); return; }
    var required = ['vorname', 'nachname', 'email', 'strasse', 'plz', 'ort'];
    for (var i = 0; i < required.length; i++) {
      var el = document.getElementById(required[i]);
      if (!el || !el.value.trim()) { if (el) el.focus(); alert('Bitte f\u00FCllen Sie alle Pflichtfelder aus.'); return; }
    }
    if (submitBtn) {
      submitBtn.textContent = '\u2713 Bestellung \u00FCbermittelt';
      submitBtn.disabled = true;
      submitBtn.style.cssText += ';background:#2ecc71;border-color:#2ecc71;color:#fff;';
    }
  });
}

/* ─── Impressum & Datenschutz: Adresse injizieren ───────── */
function renderLegalAddress() {
  var c = CONFIG.contact;
  document.querySelectorAll('.js-legal-address').forEach(function(el) {
    el.innerHTML =
      '<strong>' + CONFIG.brand.name + '</strong><br>'
      + 'Hobby-Imkerei<br>'
      + c.inhaber + '<br>'
      + c.strasse + '<br>'
      + c.plz + ' ' + c.ort + '<br>'
      + c.land;
  });
  document.querySelectorAll('.js-legal-contact').forEach(function(el) {
    el.innerHTML =
      'Telefon: ' + c.telefon + '<br>'
      + 'E-Mail: <a href="mailto:' + c.email + '">' + c.emailLabel + '</a>';
  });
  document.querySelectorAll('.js-legal-verantwortlich').forEach(function(el) {
    el.innerHTML = c.inhaber + '<br>' + c.strasse + '<br>' + c.plz + ' ' + c.ort;
  });
  document.querySelectorAll('.js-legal-email').forEach(function(el) {
    el.innerHTML = '<a href="mailto:' + c.email + '">' + c.emailLabel + '</a>';
  });
}

/* ─── Init ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  applyMeta();
  renderNav();
  renderFooter();

  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '')    renderHome();
  if (page === 'ueber-uns.html')               renderAbout();
  if (page === 'honig.html')                   renderHonig();
  if (page === 'bestellung.html')              renderOrderForm();
  if (page === 'impressum.html' || page === 'datenschutz.html') renderLegalAddress();
});
