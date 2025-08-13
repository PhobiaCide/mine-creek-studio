  // Lightbox elements
  const lightbox = document.getElementById('lightbox-overlay');
  const lightboxContent = document.getElementById('lightbox-content');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxSvgContainer = document.getElementById('lightbox-svg-container');

  const openLightbox = card => {
    // Clear previous content
    lightboxSvgContainer.innerHTML = '';

    // Clone placeholder SVG from card into lightbox and enlarge it
    const placeholderSvg = card.querySelector('svg.placeholder');
    if (placeholderSvg) {
      const clone = placeholderSvg.cloneNode(true);
      clone.setAttribute('width', '80%');
      clone.setAttribute('height', 'auto');
      clone.style.maxHeight = '300px';
      clone.style.marginBottom = '1rem';
      lightboxSvgContainer.appendChild(clone);
    }

    lightboxTitle.textContent = card.querySelector('.card-title').textContent;
    lightboxDesc.textContent = card.querySelector('.card-desc').textContent;

    lightbox.classList.add('active');
    lightbox.focus();
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Add click and keyboard interaction on cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openLightbox(card));
  });
