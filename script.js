const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const categoryById = id => SITE_DATA.categories.find(category => category.id === id);

const CATEGORY_ICONS = {
  relax: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 3.2C14 3.5 8.5 6.1 6.2 10.4 4.4 13.8 5.1 17 5.1 17s3.2.7 6.6-1.1c4.3-2.3 6.9-7.8 7.2-14.6Z"/><path d="M4 20c2.2-4.5 5.3-7.6 10-10"/></svg>`,
  corpo: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2"/><path d="M4 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2"/><path d="M4 16c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2"/></svg>`,
  sport: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9v6M3.5 10.5v3M18 9v6M20.5 10.5v3M6 12h12"/></svg>`,
  viso: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.2 6.8c1.3-2.1 3.4-3.3 5.9-3.2 2.2.1 4.1 1.2 5.2 3"/><path d="M18.8 6.5c.3 1.5.1 3-.6 4.3l1.5 1.3-1.7.8c-.2 1.8-1.1 3.2-2.5 4.1-1.1.7-2.4 1-3.8.8"/><path d="M8.2 6.8c-.7 1.4-.9 3-.5 4.5.4 1.7 1.5 3.2 3 4.2"/><path d="M8.4 6.5c-1.3-1.8-3.8-2.1-5.4-.6 1.1.1 2 .7 2.6 1.6-1.5.6-2.4 2-2.2 3.5.3 1.7 1.7 2.8 3.3 2.8"/><path d="M6.8 13.6c-.4 2.2.2 4.5 1.8 6"/><path d="M15.5 9.2c.6-.4 1.3-.4 1.9-.1"/><path d="M16.1 12.9c.6.3 1.3.3 1.9 0"/><path d="M21 7.3l.35.75.75.35-.75.35-.35.75-.35-.75-.75-.35.75-.35z"/><path d="M21.1 14.8l.28.6.6.28-.6.28-.28.6-.28-.6-.6-.28.6-.28z"/></svg>`,
  maternita: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>`
};

const categoryIcon = id => CATEGORY_ICONS[id] || "";

function renderHomeCategories() {
  const container = document.querySelector("[data-home-categories]");
  if (!container) return;

  container.innerHTML = SITE_DATA.categories.map(category => `
    <a class="need-card need-card--${category.id}${category.wideOnHome ? " need-card--wide" : ""}" href="trattamenti.html#${category.id}">
      <span class="need-card__icon">${categoryIcon(category.id)}</span>
      <strong>${escapeHtml(category.label)}</strong>
      <small>${escapeHtml(category.teaser)}</small>
    </a>
  `).join("");
}

function renderHomeTreatments() {
  const container = document.querySelector("[data-home-treatments]");
  if (!container) return;

  const featured = SITE_DATA.treatments.filter(treatment => treatment.featured);

  container.innerHTML = featured.map((treatment, index) => {
    const primaryCategory = treatment.category || treatment.categories?.[0];
    const category = categoryById(primaryCategory);
    const imageClass = ["one", "two", "three", "four", "one"][index % 5];

    return `
      <a class="treatment-card" href="trattamenti.html#${treatment.id}">
        <div class="treatment-card__image treatment-card__image--${imageClass}${treatment.image ? " treatment-card__image--photo" : ""}" ${treatment.image ? `style="background-image:url('${treatment.image}')"` : ""}></div>
        <div class="treatment-card__body">
          <h3>${escapeHtml(treatment.name)}</h3>
          <p>${escapeHtml(treatment.homeDescription || treatment.description)}</p>
          <small class="treatment-card__category">${escapeHtml(category?.label || "")}</small>
        </div>
      </a>
    `;
  }).join("") + `
    <a class="treatment-card treatment-card--all" href="trattamenti.html">
      <div class="treatment-card__body treatment-card__body--all">
        <span class="treatment-card__all-mark">→</span>
        <h3>Vedi tutti i trattamenti</h3>
        <p>Scopri l’elenco completo con descrizioni, durata e prezzi.</p>
      </div>
    </a>
  `;
}

function renderTreatmentPage() {
  const chips = document.querySelector("[data-treatment-chips]");
  const groups = document.querySelector("[data-treatment-groups]");

  if (chips) {
    chips.innerHTML = SITE_DATA.categories
      .map(category => `<a href="#${category.id}">${escapeHtml(category.chip)}</a>`)
      .join("");
  }

  if (!groups) return;

  groups.innerHTML = SITE_DATA.categories.map(category => {
    const treatments = SITE_DATA.treatments.filter(treatment =>
      treatment.category === category.id || treatment.categories?.includes(category.id)
    );

    return `
      <section class="treatment-group" id="${category.id}">
        <div class="treatment-group__heading">
          <p class="eyebrow">${escapeHtml(category.eyebrow)}</p>
          <h2>${escapeHtml(category.label)}</h2>
        </div>

        ${treatments.map(treatment => `
          <article class="service-card" id="${treatment.id}">
            <div>
              <h3>${escapeHtml(treatment.name)}</h3>
              <p>${escapeHtml(
                treatment.descriptions?.[category.id] ||
                treatment.description ||
                ""
              )}</p>
              ${treatment.note ? `<p class="service-note">${escapeHtml(treatment.note)}</p>` : ""}
            </div>
            <div class="service-meta">
              <span>${escapeHtml(treatment.duration)}</span>
              <strong>${escapeHtml(treatment.price)}</strong>
            </div>
          </article>
        `).join("")}
      </section>
    `;
  }).join("");
}

function renderLocations() {
  document.querySelectorAll("[data-location-list]").forEach(container => {
    const mode = container.dataset.locationList;

    if (mode === "contact") {
      container.innerHTML = SITE_DATA.locations.map(location => `
        <article class="contact-card">
          <h2 class="contact-city">${escapeHtml(location.city)}</h2>
          <p class="venue-name">presso ${escapeHtml(location.venue)}</p>
          <p><strong>${escapeHtml(location.address)}</strong></p>
          <a class="button button--secondary" href="${location.mapUrl}" target="_blank" rel="noopener">
            Apri in Maps <span>→</span>
          </a>
        </article>
      `).join("");
      return;
    }

    container.innerHTML = SITE_DATA.locations.map(location => `
      <div class="location-card">
        <div>
          <strong class="location-city">${escapeHtml(location.city)}</strong>
          <span class="location-venue">presso ${escapeHtml(location.venue)}</span>
          <p>${escapeHtml(location.address)}</p>
        </div>
        <a class="text-link" href="${location.mapUrl}" target="_blank" rel="noopener">Mappa →</a>
      </div>
    `).join("");
  });
}

function activateContacts() {
  const { phone, phoneDisplay, whatsapp, whatsappMessage } = SITE_DATA.contact;
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    link.href = whatsappUrl;
  });

  document.querySelectorAll("[data-phone]").forEach(link => {
    link.href = `tel:${phone}`;
  });

  document.querySelectorAll("[data-phone-display]").forEach(element => {
    element.textContent = phoneDisplay;
  });
}

function setupMenu() {
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

renderHomeCategories();
renderHomeTreatments();
renderTreatmentPage();
renderLocations();
activateContacts();
setupMenu();
