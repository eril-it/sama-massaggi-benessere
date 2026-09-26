const CONFIG = {
  whatsappNumber: "",
  phoneNumber: "+393519392394"
};

const whatsappLinks = document.querySelectorAll("[data-whatsapp]");
const phoneLinks = document.querySelectorAll("[data-phone]");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

whatsappLinks.forEach(link => {
  if (!CONFIG.whatsappNumber) return;
  const message = encodeURIComponent("Ciao, ho visto il sito SAMA Massaggi & Benessere e vorrei avere informazioni.");
  link.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
});

phoneLinks.forEach(link => {
  if (!CONFIG.phoneNumber) return;
  link.href = `tel:${CONFIG.phoneNumber}`;
});

if (menuButton && mobileMenu) {
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
