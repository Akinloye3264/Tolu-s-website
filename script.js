document.addEventListener('DOMContentLoaded', () => {
  const whatsappNumber = '2348170254863'; // no leading + for wa.me

  // Update footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('primary-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // WhatsApp ordering for product buttons
  const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
  whatsappButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      const title = card?.querySelector('.product-title')?.textContent?.trim() || 'Ankara Fabric';
      const message = `Hello Tolu's Ankara Boutique!\nI would like to order:\n• Product: ${title}\n\nPlease confirm availability, price, and delivery options.`;
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noopener');
    });
  });

  // WhatsApp ordering when clicking product image
  const productLinks = document.querySelectorAll('.product-link');
  productLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const title = link.getAttribute('data-product') || link.closest('.product-card')?.querySelector('.product-title')?.textContent?.trim() || 'Ankara Fabric';
      const message = `Hello Tolu's Ankara Boutique!\nI would like to order:\n• Product: ${title}\n\nPlease confirm availability, price, and delivery options.`;
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noopener');
    });
  });
});


