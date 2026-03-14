/* =========================================================
   TRINKAUS & SÖHNE — Main JavaScript
   ========================================================= */

/* ─── Product Data (zentrale Quelle) ─────────────────────── */
const PRODUCTS = [
  {
    id: 'fruehlingsblute',
    name: 'Frühlingsblüte',
    subtitle: 'Blütenhonig',
    weight: '500g',
    price: 7.50,
    desc: 'Leicht und aromatisch — geerntet, wenn Raps, Obstblüte und Löwenzahn in voller Pracht stehen. Ein milder, goldener Honig mit feiner Süße und floralen Noten. Ideal für Tee, Frühstück und Kinder.',
    color: '#F7C94A',
  },
  {
    id: 'sommertracht',
    name: 'Sommertracht',
    subtitle: 'Wildblütenhonig',
    weight: '500g',
    price: 7.50,
    desc: 'Kräftig und vielschichtig — ein Sommerblütenhonig aus der vielfältigen Wittener Kulturlandschaft. Linden, Phacelia, Kleewiesen und Wildkräuter geben ihm seinen unverwechselbaren Charakter.',
    color: '#D4922A',
  },
  /* Neue Produkte hier ergänzen:
  {
    id: 'heide',
    name: 'Heidehonig',
    subtitle: 'Monofloral',
    weight: '250g',
    price: 8.90,
    desc: '...',
    color: '#C47A3A',
  },
  */
];

/* ─── Navigation: Active State & Mobile Toggle ───────────── */
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });

    // Close on link click
    links.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // Active link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('nav__link--active');
  });
}

/* ─── Product Card Renderer ──────────────────────────────── */
function renderProductCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = PRODUCTS.map(p => `
    <article class="product-card">
      <div class="product-card__visual" style="background:${p.color}">
        <svg class="product-card__icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" stroke="#1C1C1B" stroke-width="4" fill="none"/>
        </svg>
        <span class="product-card__name-script">${p.name}</span>
      </div>
      <div class="product-card__body">
        <span class="product-card__tag">${p.subtitle} · ${p.weight} Glas</span>
        <h3 class="product-card__title">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
      </div>
      <div class="product-card__footer">
        <span class="product-card__size">${p.weight}</span>
        <span class="product-card__price">${p.price.toFixed(2).replace('.', ',')} €</span>
      </div>
    </article>
  `).join('');
}

/* ─── Preview Cards (Startseite — 2 Produkte kompakt) ───── */
function renderPreviewCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = PRODUCTS.slice(0, 2).map(p => `
    <div class="preview-card">
      <div class="preview-card__dot" style="background:${p.color}"></div>
      <div>
        <div class="label label--honey" style="margin-bottom:.25rem">${p.subtitle}</div>
        <strong class="preview-card__name">${p.name}</strong>
        <div class="preview-card__price">${p.price.toFixed(2).replace('.', ',')} € · ${p.weight}</div>
      </div>
    </div>
  `).join('');
}

/* ─── Order Calculator ───────────────────────────────────── */
function initOrderForm() {
  const form = document.getElementById('orderForm');
  if (!form) return;

  const orderLinesContainer = document.getElementById('orderLines');
  const summaryBody          = document.getElementById('summaryBody');
  const summaryTotal         = document.getElementById('summaryTotal');
  const summaryBox           = document.getElementById('summaryBox');
  const submitBtn            = document.getElementById('submitBtn');

  // Build product quantity rows
  orderLinesContainer.innerHTML = PRODUCTS.map(p => `
    <div class="order-line" data-product-id="${p.id}">
      <div class="order-line__info">
        <div class="label label--honey" style="margin-bottom:.2rem">${p.subtitle}</div>
        <strong class="order-line__name">${p.name}</strong>
        <div class="order-line__unit">${p.weight} · ${p.price.toFixed(2).replace('.', ',')} € / Glas</div>
      </div>
      <div class="order-line__right">
        <div class="qty-stepper">
          <button type="button" class="qty-btn qty-minus" aria-label="Weniger">−</button>
          <input type="number" class="qty-input" value="0" min="0" max="99"
            id="qty_${p.id}" aria-label="Anzahl ${p.name}">
          <button type="button" class="qty-btn qty-plus" aria-label="Mehr">+</button>
        </div>
        <div class="order-line__subtotal" id="sub_${p.id}">0,00 €</div>
      </div>
    </div>
  `).join('');

  // Attach events
  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const line  = btn.closest('.order-line');
      const input = line.querySelector('.qty-input');
      input.value = Math.min(99, parseInt(input.value || 0) + 1);
      updateCalc();
    });
  });

  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const line  = btn.closest('.order-line');
      const input = line.querySelector('.qty-input');
      input.value = Math.max(0, parseInt(input.value || 0) - 1);
      updateCalc();
    });
  });

  document.querySelectorAll('.qty-input').forEach(input => {
    input.addEventListener('input', updateCalc);
  });

  function updateCalc() {
    let total = 0;
    const summaryRows = [];

    PRODUCTS.forEach(p => {
      const input = document.getElementById('qty_' + p.id);
      const qty   = Math.max(0, parseInt(input?.value || 0));
      const sub   = qty * p.price;
      total += sub;

      const subEl = document.getElementById('sub_' + p.id);
      if (subEl) subEl.textContent = sub.toFixed(2).replace('.', ',') + ' €';

      if (qty > 0) {
        summaryRows.push({ name: p.name, qty, sub });
      }
    });

    // Update summary box
    if (summaryRows.length > 0) {
      summaryBody.innerHTML = summaryRows.map(r => `
        <div class="order-summary__row">
          <span>${r.qty} × ${r.name}</span>
          <span>${r.sub.toFixed(2).replace('.', ',')} €</span>
        </div>
      `).join('');
      summaryTotal.innerHTML = `
        <span>Gesamtsumme</span>
        <span>${total.toFixed(2).replace('.', ',')} €</span>
      `;
      summaryBox.style.display = 'block';
    } else {
      summaryBody.innerHTML = '<p style="color:rgba(255,255,255,.5);font-size:.9rem">Noch keine Produkte gewählt.</p>';
      summaryTotal.innerHTML = `<span>Gesamtsumme</span><span>0,00 €</span>`;
    }
  }

  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const total = PRODUCTS.reduce((acc, p) => {
      const qty = parseInt(document.getElementById('qty_' + p.id)?.value || 0);
      return acc + qty * p.price;
    }, 0);

    if (total === 0) {
      alert('Bitte wählen Sie mindestens ein Produkt aus.');
      return;
    }

    submitBtn.textContent = '✓ Bestellung übermittelt';
    submitBtn.disabled = true;
    submitBtn.style.background = '#2ecc71';
    submitBtn.style.color = '#fff';
    submitBtn.style.borderColor = '#2ecc71';

    // In production: replace with real fetch() to backend / mailto
    const subject = encodeURIComponent('Bestellung Trinkaus & Söhne');
    const vorname  = form.querySelector('[name="vorname"]').value;
    const nachname = form.querySelector('[name="nachname"]').value;
    const email    = form.querySelector('[name="email"]').value;

    console.info('Bestellung von:', vorname, nachname, email, '| Gesamt:', total.toFixed(2), '€');
  });

  updateCalc();
}

/* ─── Init ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderProductCards('productsGrid');
  renderPreviewCards('previewCards');
  initOrderForm();
});
