/* =========================================================
   Modul Kalkulus — interaksi halaman bacaan
   ========================================================= */

(function () {
  'use strict';

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  function renderMath() {
    if (typeof window.renderMathInElement !== 'function') return;
    try {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false,
        strict: false
      });
    } catch (error) {
      console.warn('KaTeX belum bisa merender seluruh rumus.', error);
    }
  }

  function initReadingProgress() {
    const bar = $('#readProgress span');
    if (!bar) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      bar.style.width = (ratio * 100).toFixed(2) + '%';
    };
    const request = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
  }

  function initToc() {
    const tocLinks = $$('.toc-list a[href^="#"]');
    if (!tocLinks.length) return;

    const mobileToc = $('.toc-mobile');
    const targets = tocLinks
      .map((link) => {
        const id = link.getAttribute('href').slice(1);
        return id ? document.getElementById(id) : null;
      })
      .filter(Boolean);

    if (!targets.length) return;

    let activeId = '';
    const setActive = (id) => {
      if (!id || id === activeId) return;
      activeId = id;
      tocLinks.forEach((link) => {
        if (link.getAttribute('href') === '#' + id) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    const updateActive = () => {
      const marker = window.scrollY + Math.min(190, window.innerHeight * 0.3);
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = targets[0];
      if (atBottom) {
        current = targets[targets.length - 1];
      } else {
        for (const target of targets) {
          const top = target.getBoundingClientRect().top + window.scrollY;
          if (top <= marker) current = target;
        }
      }
      setActive(current.id);
    };

    let frame = 0;
    const request = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          updateActive();
        });
      }
    };

    updateActive();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);

    if (mobileToc) {
      tocLinks.forEach((link) => {
        link.addEventListener('click', () => {
          mobileToc.removeAttribute('open');
        });
      });
    }
  }

  function initSolutionToggles() {
    $$('[data-toggle-solutions]').forEach((button) => {
      const scope = button.closest('.practice') || document;
      const solutions = $$('details.solution', scope);
      const setLabel = () => {
        const allOpen = solutions.length > 0 && solutions.every((item) => item.open);
        button.textContent = allOpen ? 'Tutup semua' : 'Buka semua';
        button.setAttribute('aria-expanded', String(allOpen));
      };

      button.addEventListener('click', () => {
        const shouldOpen = !solutions.every((item) => item.open);
        solutions.forEach((item) => {
          item.open = shouldOpen;
        });
        setLabel();
      });

      solutions.forEach((item) => item.addEventListener('toggle', setLabel));
      setLabel();
    });

    $$('[data-toggle-exam-solutions]').forEach((button) => {
      const solutions = $$('details.exam-solution');
      const setLabel = () => {
        const allOpen = solutions.length > 0 && solutions.every((item) => item.open);
        button.textContent = allOpen ? 'Tutup semua pembahasan' : 'Buka semua pembahasan';
      };

      button.addEventListener('click', () => {
        const shouldOpen = !solutions.every((item) => item.open);
        solutions.forEach((item) => {
          item.open = shouldOpen;
        });
        setLabel();
      });

      solutions.forEach((item) => item.addEventListener('toggle', setLabel));
      setLabel();
    });
  }

  function initExamTimer() {
    const display = $('#examTimer');
    if (!display) return;

    const startButton = $('[data-timer-start]');
    const resetButton = $('[data-timer-reset]');
    const status = $('#timerStatus');
    const total = 90 * 60;
    let remaining = total;
    let running = false;
    let interval = null;

    const format = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const rest = seconds % 60;
      return String(minutes).padStart(2, '0') + ':' + String(rest).padStart(2, '0');
    };

    const paint = () => {
      display.textContent = format(remaining);
      display.style.color = remaining <= 300 ? '#d4553f' : '';
      if (startButton) {
        startButton.textContent = running ? 'Jeda' : (remaining === total ? 'Mulai' : 'Lanjut');
      }
      if (status && !status.dataset.static) {
        status.textContent = running
          ? 'Timer berjalan. Pembahasan tetap tertutup sampai kamu membukanya.'
          : (remaining === total ? '90 menit, tanpa pengawasan. Gunakan sebagai simulasi.' : 'Timer dijeda.');
      }
    };

    const stop = () => {
      running = false;
      if (interval) window.clearInterval(interval);
      interval = null;
    };

    const tick = () => {
      remaining -= 1;
      if (remaining <= 0) {
        remaining = 0;
        stop();
        if (status) {
          status.dataset.static = 'true';
          status.textContent = 'Waktu habis. Bandingkan jawabanmu dengan pembahasan.';
        }
      }
      paint();
    };

    if (startButton) {
      startButton.addEventListener('click', () => {
        if (running) {
          stop();
          paint();
          return;
        }
        if (remaining <= 0) return;
        running = true;
        if (status) delete status.dataset.static;
        interval = window.setInterval(tick, 1000);
        paint();
      });
    }

    if (resetButton) {
      resetButton.addEventListener('click', () => {
        stop();
        remaining = total;
        if (status) {
          delete status.dataset.static;
          status.textContent = '90 menit, tanpa pengawasan. Gunakan sebagai simulasi.';
        }
        paint();
      });
    }

    paint();
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderMath();
    initReadingProgress();
    initToc();
    initSolutionToggles();
    initExamTimer();
  });
})();
