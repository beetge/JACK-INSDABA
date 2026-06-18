// JavaScript extracted from inline <script> block 002 in the 'home' template/context. Related area: programme_v3_tabs.

function getCsiProgrammeV3CarouselControls(list) {
  const controls = list.previousElementSibling;
  return controls && controls.classList.contains('csi-programme-v3-carousel-controls') ? controls : null;
}

function updateCsiProgrammeV3Carousel(list) {
  const controls = getCsiProgrammeV3CarouselControls(list);
  if (!controls) return;

  const previousButton = controls.querySelector('[data-csi-programme-v3-direction="-1"]');
  const nextButton = controls.querySelector('[data-csi-programme-v3-direction="1"]');
  const hasOverflow = list.scrollWidth > list.clientWidth + 2;
  const scrollThreshold = 10;
  const atStart = list.scrollLeft <= scrollThreshold;
  const atEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - scrollThreshold;

  previousButton.disabled = !hasOverflow || atStart;
  nextButton.disabled = !hasOverflow || atEnd;
}

function getCsiProgrammeV3CarouselStep(list) {
  const firstCard = list.querySelector('.csi-programme-v3-row');
  if (!firstCard) return list.clientWidth;

  const listStyles = window.getComputedStyle(list);
  const gap = parseFloat(listStyles.columnGap || listStyles.gap) || 12;
  return firstCard.getBoundingClientRect().width + gap;
}

function initCsiProgrammeV3Carousels(scope) {
  const root = scope || document;
  root.querySelectorAll('#csi-awards-exp-programme .csi-programme-v3-list').forEach(function (list) {
    if (list.dataset.csiProgrammeV3CarouselReady === 'true') {
      updateCsiProgrammeV3Carousel(list);
      return;
    }

    const controls = document.createElement('div');
    controls.className = 'csi-programme-v3-carousel-controls';
    controls.setAttribute('aria-label', 'Programme carousel controls');

    const previousButton = document.createElement('button');
    previousButton.type = 'button';
    previousButton.className = 'csi-programme-v3-carousel-btn';
    previousButton.dataset.csiProgrammeV3Direction = '-1';
    previousButton.setAttribute('aria-label', 'Previous programme item');
    previousButton.textContent = '<';

    const nextButton = document.createElement('button');
    nextButton.type = 'button';
    nextButton.className = 'csi-programme-v3-carousel-btn';
    nextButton.dataset.csiProgrammeV3Direction = '1';
    nextButton.setAttribute('aria-label', 'Next programme item');
    nextButton.textContent = '>';

    controls.append(previousButton, nextButton);
    list.parentNode.insertBefore(controls, list);
    list.dataset.csiProgrammeV3CarouselReady = 'true';
    list.setAttribute('tabindex', '0');

    controls.addEventListener('click', function (event) {
      const button = event.target.closest('[data-csi-programme-v3-direction]');
      if (!button) return;

      const direction = Number(button.dataset.csiProgrammeV3Direction);
      list.scrollBy({
        left: getCsiProgrammeV3CarouselStep(list) * direction,
        behavior: 'smooth'
      });
    });

    list.addEventListener('scroll', function () {
      window.requestAnimationFrame(function () {
        updateCsiProgrammeV3Carousel(list);
      });
    });

    window.addEventListener('resize', function () {
      updateCsiProgrammeV3Carousel(list);
    });

    updateCsiProgrammeV3Carousel(list);
    window.requestAnimationFrame(function () {
      updateCsiProgrammeV3Carousel(list);
    });
  });
}

function refreshCsiProgrammeV3Carousels() {
  initCsiProgrammeV3Carousels();
  document.querySelectorAll('#csi-awards-exp-programme .csi-programme-v3-list').forEach(function (list) {
    updateCsiProgrammeV3Carousel(list);
  });
}

function showCsiProgrammeV3(button, panelName) {
  const section = button.closest('.csi-programme-v3');
  section.querySelectorAll('.csi-programme-v3-tab').forEach(tab => tab.classList.remove('active'));
  section.querySelectorAll('.csi-programme-v3-panel').forEach(panel => panel.classList.remove('active'));
  button.classList.add('active');
  const panel = section.querySelector('[data-programme-v3-panel="' + panelName + '"]');
  if (panel) {
    panel.classList.add('active');
    initCsiProgrammeV3Carousels(panel);
    panel.querySelectorAll('.csi-programme-v3-list').forEach(function (list) {
      if (window.matchMedia('(max-width: 768px)').matches) {
        list.scrollTo({ left: 0, behavior: 'auto' });
      }
      updateCsiProgrammeV3Carousel(list);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    refreshCsiProgrammeV3Carousels();
  });
} else {
  refreshCsiProgrammeV3Carousels();
}

window.addEventListener('load', refreshCsiProgrammeV3Carousels);
