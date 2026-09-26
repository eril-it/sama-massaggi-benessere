const CONFIG = {
  whatsappNumber: "",
  phoneNumber: ""
};

const whatsappLinks = document.querySelectorAll("[data-whatsapp]");
const phoneLinks = document.querySelectorAll("[data-phone]");

whatsappLinks.forEach(link => {
  if (!CONFIG.whatsappNumber) return;
  const message = encodeURIComponent("Ciao, ho visto il sito SAMA Massaggi e Benessere e vorrei avere informazioni.");
  link.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
});

phoneLinks.forEach(link => {
  if (!CONFIG.phoneNumber) return;
  link.href = `tel:${CONFIG.phoneNumber}`;
});
