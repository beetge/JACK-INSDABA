// JavaScript extracted from inline <script> block 003 in the 'home' template/context. Related area: programme_panel_tabs.

function csiKeynoteSlide() {
    const fill = document.getElementById('knProgressFill');
    const countdown = document.getElementById('knCountdown');
    const countdownNumber = document.getElementById('knCountdownNumber');
    const countdownName = document.getElementById('knNextName');
    const slides = document.querySelectorAll('.kn-slide');
    const imgs = document.querySelectorAll('[data-slide-img]');
    if (!fill || !slides.length) return;
    let current = 0;
    const total = slides.length;
    const duration = 5500;
    const speakerNames = ['Dr Geraldine Fraser-Moleketi', 'Dr Mogamad GamoefEbrajo'];
    
    function startCountdown(nextIndex) {
        countdown.style.display = 'flex';
        countdownName.textContent = speakerNames[nextIndex];
        countdownNumber.textContent = '3';
        
        let count = 3;
        const countInterval = setInterval(function() {
            count--;
            if (count > 0) {
                countdownNumber.textContent = count;
            } else {
                clearInterval(countInterval);
                countdown.style.display = 'none';
                goNext();
            }
        }, 1000);
    }
    
    function goNext() {
        const cur = slides[current];
        const next = slides[(current + 1) % total];
        fill.style.transition = 'none';
        fill.style.width = '0%';
        void fill.offsetHeight;
        cur.classList.remove('kn-slide-active');
        cur.classList.add('kn-slide-exit');
        imgs.forEach(function(img) {
            img.style.opacity = '0';
            if (img.getAttribute('data-slide-img') === String((current + 1) % total)) {
                img.style.opacity = '1';
            }
        });
        setTimeout(function() {
            cur.style.display = 'none';
            cur.classList.remove('kn-slide-exit');
            next.style.display = '';
            next.classList.add('kn-slide-active');
            current = (current + 1) % total;
            fill.style.transition = 'width ' + (duration/1000) + 's linear';
            fill.style.width = '100%';
        }, 650);
    }
    
    fill.style.transition = 'width ' + (duration/1000) + 's linear';
    fill.style.width = '100%';
    
    setInterval(function() {
        startCountdown((current + 1) % total);
    }, duration + 650);
}
document.addEventListener('DOMContentLoaded', csiKeynoteSlide);

function csiSmoothBackToTop() {
  const start = window.pageYOffset || document.documentElement.scrollTop || 0;
  const duration = Math.min(1100, Math.max(620, start * 0.45));
  const startTime = performance.now();
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  function step(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, Math.round(start * (1 - easeOutCubic(progress))));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
function showCsiProProgrammePanel(button, panelName) {
  const section = button.closest('.csi-pro-programme');
  if (!section) return;
  section.querySelectorAll('.csi-pro-tab').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');
  section.querySelectorAll('.csi-pro-panel').forEach(panel => panel.classList.remove('active'));
  const nextPanel = section.querySelector('[data-csi-pro-panel="' + panelName + '"]');
  if (nextPanel) nextPanel.classList.add('active');
}
function filterCsiProRooms(button, roomName) {
  const panel = button.closest('.csi-pro-panel');
  if (!panel) return;
  panel.querySelectorAll('.csi-room-filter').forEach(filter => filter.classList.remove('active'));
  button.classList.add('active');
  panel.querySelectorAll('.csi-pro-row[data-room]').forEach(row => {
    row.classList.toggle('is-hidden', roomName !== 'all' && row.dataset.room !== roomName);
  });
}
function filterCsiProRoom(button, roomName) {
  filterCsiProRooms(button, roomName);
}

(function startCsiAwardsCountdown() {
  const countdown = document.querySelector('[data-csi-awards-countdown]');
  if (!countdown) return;

  const dayEl = countdown.querySelector('[data-countdown-days]');
  const hourEl = countdown.querySelector('[data-countdown-hours]');
  const minuteEl = countdown.querySelector('[data-countdown-minutes]');
  const secondEl = countdown.querySelector('[data-countdown-seconds]');
  const baseTarget = new Date('2026-07-14T09:00:00+02:00').getTime();
  const loopWindow = 7 * 24 * 60 * 60 * 1000;
  const pad = value => String(value).padStart(2, '0');

  function getLoopedTarget(now) {
    if (now < baseTarget) return baseTarget;
    return baseTarget + Math.ceil((now - baseTarget + 1) / loopWindow) * loopWindow;
  }

  function updateCountdown() {
    const now = Date.now();
    const target = getLoopedTarget(now);
    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diff % (60 * 1000)) / 1000);

    if (dayEl) dayEl.textContent = pad(days);
    if (hourEl) hourEl.textContent = pad(hours);
    if (minuteEl) minuteEl.textContent = pad(minutes);
    if (secondEl) secondEl.textContent = pad(seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
