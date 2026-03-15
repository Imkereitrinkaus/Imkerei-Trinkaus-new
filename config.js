/* =========================================================
   TRINKAUS & SÖHNE — Zentrale Inhaltsverwaltung
   =========================================================
   HIER alle Texte, Adressen und Inhalte pflegen.
   Änderungen hier wirken automatisch auf allen Seiten.
   ========================================================= */

const CONFIG = {

  /* ── Marke & Kontakt ──────────────────────────────────── */
  brand: {
    name:        'Trinkaus & Söhne',
    nameShort:   'Trinkaus & Söhne',
    tagline:     'Imkerei · Witten',
    subline:     'Honig aus Witten und Umgebung. Regional, handgemacht, ehrlich.',
  },

  contact: {
    inhaber:     'Vorname Nachname',          // ← anpassen
    strasse:     'Musterstraße 12',           // ← anpassen
    plz:         '58452',                     // ← anpassen
    ort:         'Witten',
    land:        'Deutschland',
    telefon:     '+49 2302 000000',           // ← anpassen
    email:       'imkerei@trinkaus-soehne.de',// ← anpassen
    emailLabel:  'imkerei@trinkaus-soehne.de',
  },

  /* ── Navigation ───────────────────────────────────────── */
  nav: {
    links: [
      { href: 'index.html',      label: 'Start'            },
      { href: 'honig.html',      label: 'Unser Honig'      },
      { href: 'ueber-uns.html',  label: 'Über uns'         },
      { href: 'bestellung.html', label: 'Bestellen'        },
    ],
    ctaLabel: 'Jetzt bestellen',
    ctaHref:  'bestellung.html',
  },

  /* ── Footer ───────────────────────────────────────────── */
  footer: {
    copyright: '© 2025 Trinkaus & Söhne, Witten',
  },

  /* ── SEO: Meta-Daten pro Seite ────────────────────────── */
  meta: {
    'index.html': {
      title:       'Trinkaus & Söhne – Honig aus Witten und Umgebung',
      description: 'Handgeschleuderter Imkerei-Honig aus Witten. Frühlingsblüte und Sommertracht, 500g für 7,50 €. Regional. Handgemacht. Ehrlich.',
    },
    'honig.html': {
      title:       'Unser Honig – Trinkaus & Söhne, Imkerei Witten',
      description: 'Frühlingsblüte und Sommertracht – handgeschleuderter Honig aus Witten, 500g für 7,50 €. Direkt vom Imker.',
    },
    'ueber-uns.html': {
      title:       'Über uns – Trinkaus & Söhne, Imkerei Witten',
      description: 'Trinkaus & Söhne – Hobby-Imkerei aus Witten. Erfahren Sie mehr über unsere Bienen, unsere Standorte und unseren Anspruch.',
    },
    'bestellung.html': {
      title:       'Bestellen & Kontakt – Trinkaus & Söhne, Imkerei Witten',
      description: 'Honig von Trinkaus & Söhne bestellen. Frühlingsblüte und Sommertracht direkt ab Imker in Witten – 500g für 7,50 €.',
    },
    'impressum.html': {
      title:       'Impressum – Trinkaus & Söhne, Imkerei Witten',
      description: 'Impressum der Hobby-Imkerei Trinkaus & Söhne aus Witten.',
    },
    'datenschutz.html': {
      title:       'Datenschutz – Trinkaus & Söhne, Imkerei Witten',
      description: 'Datenschutzerklärung der Hobby-Imkerei Trinkaus & Söhne aus Witten.',
    },
  },

  /* ── Produkte ─────────────────────────────────────────── */
  products: [
    {
      id:       'fruehlingsblute',
      name:     'Frühlingsblüte',
      subtitle: 'Blütenhonig',
      weight:   '500g',
      price:    7.50,
      color:    '#F7C94A',
      cardDesc: 'Leicht und aromatisch — geerntet, wenn Raps, Obstblüte und Löwenzahn in voller Pracht stehen. Mild, golden, floral.',
      fullDesc: 'Wenn der erste Raps aufblüht, die Obstbäume ihre Blüten öffnen und der Löwenzahn die Wiesen gelb färbt — dann beginnt für unsere Bienen die Frühjahrssaison. Der Frühlingsblütenhonig ist das Ergebnis dieser ersten, intensiven Tracht: mild im Geschmack, golden in der Farbe, mit einer feinen floralen Süße.',
      taste:    ['Mild', 'Floral', 'Fein-süß', 'Goldgelb', 'Cremig'],
    },
    {
      id:       'sommertracht',
      name:     'Sommertracht',
      subtitle: 'Wildblütenhonig',
      weight:   '500g',
      price:    7.50,
      color:    '#D4922A',
      cardDesc: 'Kräftig und vielschichtig — Linden, Phacelia, Kleewiesen und Wildkräuter aus der Wittener Umgebung.',
      fullDesc: 'Die Sommertracht ist unsere komplexeste Sorte. Linden, Phacelia, Kleewiesen, Wildkräuter und die Vielfalt der Wittener Umgebung hinterlassen ihren Charakter in diesem vielschichtigen Wildblütenhonig. Kräftiger im Aroma, tiefer in der Farbe.',
      taste:    ['Kräftig', 'Würzig', 'Vielschichtig', 'Bernsteinfarben', 'Aromatisch'],
    },
    /* Neues Produkt ergänzen — einfach diesen Block kopieren und anpassen:
    {
      id:       'heidehonig',
      name:     'Heidehonig',
      subtitle: 'Monofloral',
      weight:   '250g',
      price:    8.90,
      color:    '#C47A3A',
      cardDesc: 'Kurzbeschreibung für die Produktkarte.',
      fullDesc: 'Ausführliche Beschreibung für die Produktdetailseite.',
      taste:    ['Würzig', 'Harzig', 'Aromatisch'],
    },
    */
  ],

  /* ── Startseite ───────────────────────────────────────── */
  home: {
    hero: {
      eyebrow:  'Imkerei Witten & Umgebung',
      headline: 'Echter Honig.<br><em>Von hier.</em>',
      sub:      'Handgeschleudert, ungefiltert und direkt ab Imker — Trinkaus & Söhne steht für Honig, der nach dem schmeckt, was unsere Bienen in der Wittener Umgebung finden.',
      cta1:     'Jetzt bestellen',
      cta2:     'Unsere Sorten',
    },
    previewStrip: {
      label: 'Aktuelle Sorten',
      cta:   'Alle Sorten →',
    },
    values: {
      headline: 'So wie Honig sein sollte.',
      eyebrow:  'Warum Trinkaus & Söhne',
      items: [
        {
          icon:  'location',
          title: 'Regional',
          text:  'Unsere Bienen sammeln ausschließlich in Witten und der näheren Umgebung.',
        },
        {
          icon:  'clock',
          title: 'Handarbeit',
          text:  'Jedes Glas entsteht von Hand — vom Volk bis zum Etikett.',
        },
        {
          icon:  'heart',
          title: 'Ohne Kompromisse',
          text:  'Kein Zuckerwasser, keine Hitzebehandlung, kein Strecken.',
        },
        {
          icon:  'shield',
          title: 'Vertrauen',
          text:  'Hobby-Imkerei mit Namen und Gesicht — keine Anonymität, nur Ehrlichkeit.',
        },
      ],
    },
    aboutTeaser: {
      eyebrow: 'Über uns',
      headline: 'Eine Imkerei mit Haltung.',
      text1: 'Wir sind keine Fabrik und wollen es auch nicht sein. Trinkaus & Söhne ist eine Hobby-Imkerei aus Witten — gegründet aus Leidenschaft für Bienen, Natur und echten Geschmack.',
      text2: 'Unsere Völker stehen an ausgesuchten Standorten rund um Witten. Wir kennen jedes Volk, jede Tracht — und wir wissen, was in jedem Glas steckt.',
      cta:   'Mehr über uns',
    },
    ctaBanner: {
      eyebrow:  'Bereit für echten Honig?',
      headline: '500g für 7,50 €.<br>Direkt vom Imker.',
      cta:      'Jetzt bestellen',
      sub:      'Abholung in Witten oder auf Anfrage als Lieferung.',
    },
  },

  /* ── Über-uns-Seite ───────────────────────────────────── */
  about: {
    hero: {
      eyebrow:  'Unsere Geschichte',
      headline: 'Über uns.',
      sub:      'Keine große Fabrik. Keine leeren Versprechen. Nur Menschen, die Bienen mögen — und wissen, wie guter Honig entsteht.',
    },
    story: {
      eyebrow:   'Die Imkerei',
      headline:  'Angefangen mit einem Volk.<br>Geblieben aus Überzeugung.',
      quote:     '„Wer einmal ein Bienenvolk beobachtet hat, versteht die Faszination sofort."',
      founded:   '2019',
      text1: 'Trinkaus & Söhne ist eine Hobby-Imkerei aus Witten — gegründet aus echtem Interesse an der Natur, an Bienen und an dem, was ein gutes Leben ausmacht. Was mit einem ersten Volk begann, ist heute eine kleine, aber bewusst betriebene Imkerei mit mehreren Völkern an ausgesuchten Standorten rund um Witten.',
      text2: 'Unsere Standorte liegen in artenreicher Umgebung: Streuobstwiesen, Waldränder, Kleingärten und blütenreiche Randstreifen. Wir wählen Plätze, an denen unsere Bienen wirklich etwas finden — und das schmeckt man.',
      text3: 'Wir sind kein Gewerbe und wollen keines sein. Die begrenzte Menge ist kein Mangel, sondern ein Zeichen von Echtheit. Jeder Jahrgang ist anders. Jedes Glas erzählt von einem Sommer, einem Frühling — von dem, was in Witten wächst.',
    },
    stats: [
      { num: '100%', label: 'Regional aus Witten' },
      { num: '0',    label: 'Zusatzstoffe'        },
      { num: '2',    label: 'Honigsorten'          },
      { num: '∞',    label: 'Bienen am Werk'       },
    ],
    principles: {
      eyebrow:  'Unsere Grundsätze',
      headline: 'Was uns wichtig ist.',
      sub:      'Nicht als Marketingversprechen — sondern als Haltung.',
      items: [
        { num: '01', title: 'Tierwohl zuerst',    text: 'Unsere Bienen werden artgerecht gehalten. Wir entnehmen nur, was übrig ist — nicht was wir brauchen.' },
        { num: '02', title: 'Keine Hitze',        text: 'Honig wird nicht erhitzt. Alle wertvollen Inhaltsstoffe, Enzyme und Aromen bleiben erhalten.'         },
        { num: '03', title: 'Ehrliche Mengen',    text: 'Wir strecken nicht und kaufen nicht zu. Was Sie kaufen, kam aus unseren Kästen.'                      },
        { num: '04', title: 'Direktvertrieb',     text: 'Kein Zwischenhändler. Direkt von uns zu Ihnen — mit Gesicht, Name und Verantwortung.'                  },
      ],
    },
    cta: {
      headline: 'Sie möchten unseren Honig probieren?',
      btn:      'Jetzt bestellen',
      sub:      'Abholung in Witten oder auf Anfrage als Lieferung.',
    },
  },

  /* ── Honig-Seite ──────────────────────────────────────── */
  honig: {
    hero: {
      eyebrow:  'Trinkaus & Söhne',
      headline: 'Unser Honig.',
      sub:      'Zwei Sorten. Zwei Jahreszeiten. Ein Anspruch: so ehrlich wie möglich.',
    },
    availabilityNote: {
      eyebrow: 'Hinweis zur Verfügbarkeit',
      text:    'Unser Honig ist naturbedingt eine begrenzte Ernte. Die Verfügbarkeit einzelner Sorten kann saisonbedingt schwanken — fragen Sie uns direkt bei Ihrer Bestellung.',
      cta:     'Zur Bestellung',
    },
  },

  /* ── Bestellseite ─────────────────────────────────────── */
  order: {
    hero: {
      eyebrow:  'Direkt ab Imker',
      headline: 'Bestellen & Kontakt.',
      sub:      'Einfach auswählen, Formular ausfüllen, absenden — wir melden uns persönlich bei Ihnen.',
    },
    sidebar: {
      howTitle:  'Wie funktioniert die Bestellung?',
      howText:   'Wählen Sie Ihre Sorten und Mengen, füllen Sie das Formular aus und senden Sie Ihre Anfrage ab. Wir bestätigen Ihre Bestellung innerhalb von 1–2 Werktagen persönlich per E-Mail oder Telefon.',
      deliveryTitle: 'Abholung & Lieferung',
      deliveryText:  'Bevorzugt: persönliche Abholung in Witten. Lieferung ist nach Absprache möglich. Wir sind keine Online-Plattform — sondern Nachbarn mit Honig.',
      contactTitle:  'Direkter Kontakt',
      contactText:   'Sie haben Fragen? Schreiben Sie uns direkt:',
    },
    labels: {
      step1:       '1. Produkte wählen',
      step2:       '2. Ihre Angaben',
      step3:       '3. Übergabe',
      step4:       '4. Bemerkungen',
      vorname:     'Vorname',
      nachname:    'Nachname',
      email:       'E-Mail',
      telefon:     'Telefon',
      strasse:     'Straße & Hausnummer',
      plz:         'PLZ',
      ort:         'Ort',
      bemerkung:   'Ihre Nachricht an uns',
      bemerkungPH: 'Besondere Wünsche, Fragen zur Verfügbarkeit, gewünschter Abholtermin …',
      abholung:    'Abholung in Witten',
      abholungSub: 'Wir stimmen Ort und Zeit per E-Mail ab.',
      lieferung:   'Lieferung / Anfrage',
      lieferungSub:'Wir prüfen Möglichkeiten und melden uns bei Ihnen.',
      submitBtn:   'Bestellung senden →',
      submitNote:  'Ihre Daten werden nur zur Bestellabwicklung verwendet.<br>Kein Newsletter, kein Spam. Versprochen.',
      summaryTitle:'Ihre Bestellübersicht',
      totalLabel:  'Gesamtsumme',
    },
  },

};
