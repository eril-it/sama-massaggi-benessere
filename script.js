const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const categoryById = id => SITE_DATA.categories.find(category => category.id === id);

function renderHomeCategories() {
  const container = document.querySelector("[data-home-categories]");
  if (!container) return;

  container.innerHTML = SITE_DATA.categories.map(category => `
    <a class="need-card${category.wideOnHome ? " need-card--wide" : ""}" href="trattamenti.html#${category.id}">
      <span class="need-card__icon">${escapeHtml(category.icon)}</span>
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
        <div class="treatment-card__image treatment-card__image--${imageClass}${treatment.image ? " treatment-card__image--photo" : ""}" ${treatment.image ? `style="background-image:url('${treatment.image}')"` : ""}>
          <span>${String(index + 1).padStart(2, "0")}</span>
        </div>
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
