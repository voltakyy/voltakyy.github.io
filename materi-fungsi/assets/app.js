/* =========================================================
   materi-fungsi — navigasi, progres baca, dan latihan
   Tanpa dependensi selain KaTeX (opsional).
   ========================================================= */
(function () {
  'use strict';

  var KEY = 'mf_progress_v1';
  var TOTAL = 15;

  var CHAPTERS = {
    dasar: ['01', '02', '03', '04', '05'],
    bentuk: ['06', '07', '08', '09', '10', '11'],
    lanjut: ['12', '13', '14', '15']
  };

  function load() {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || '[]');
      return new Set(Array.isArray(raw) ? raw : []);
    } catch (e) {
      return new Set();
    }
  }

  function save(set) {
    try {
      localStorage.setItem(KEY, JSON.stringify(Array.from(set)));
    } catch (e) {
      /* mode privat: progres tidak disimpan */
    }
  }

  var done = load();

  function countDone(ids) {
    return ids.filter(function (id) { return done.has(id); }).length;
  }

  /* ---------- bilah progres atas ---------- */

  function paintTopbar() {
    var chip = document.querySelector('[data-readchip]');
    if (!chip) return;
    var n = done.size;
    var label = chip.querySelector('b');
    var fill = chip.querySelector('.bar span');
    if (label) label.textContent = n + '/' + TOTAL;
    if (fill) fill.style.width = Math.round((n / TOTAL) * 100) + '%';
  }

  /* ---------- rail ---------- */

  function paintRail() {
    document.querySelectorAll('.rail a[data-for]').forEach(function (a) {
      var id = a.getAttribute('data-for');
      a.classList.toggle('is-done', done.has(id));
    });
  }

  function watchSections() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.rail a[data-for]'));
    if (!links.length || !('IntersectionObserver' in window)) return;

    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('data-for')] = a; });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('data-lesson');
        links.forEach(function (a) { a.classList.remove('is-active'); });
        if (byId[id]) byId[id].classList.add('is-active');
      });
    }, { rootMargin: '-15% 0px -72% 0px', threshold: 0 });

    document.querySelectorAll('.sec[data-lesson]').forEach(function (sec) {
      observer.observe(sec);
    });
  }

  /* ---------- tombol tandai selesai ---------- */

  function paintButtons() {
    document.querySelectorAll('[data-done]').forEach(function (btn) {
      var id = btn.getAttribute('data-done');
      var isDone = done.has(id);
      btn.classList.toggle('is-done', isDone);
      btn.setAttribute('aria-pressed', String(isDone));
      var text = btn.querySelector('span');
      if (text) text.textContent = isDone ? 'Sudah dipahami' : 'Tandai sudah paham';
    });
  }

  document.addEventListener('click', function (event) {
    var btn = event.target.closest('[data-done]');
    if (!btn) return;
    var id = btn.getAttribute('data-done');
    if (done.has(id)) done.delete(id);
    else done.add(id);
    save(done);
    paintButtons();
    paintRail();
    paintTopbar();
    paintRoadmap();
  });

  /* ---------- peta belajar di beranda ---------- */

  function paintRoadmap() {
    document.querySelectorAll('[data-chapter]').forEach(function (bar) {
      var ids = CHAPTERS[bar.getAttribute('data-chapter')] || [];
      var n = countDone(ids);
      var fill = bar.querySelector('i');
      var label = bar.querySelector('b');
      if (fill) fill.style.width = Math.round((n / ids.length) * 100) + '%';
      if (label) label.textContent = n + '/' + ids.length;
    });

    var all = document.querySelector('[data-total-done]');
    if (all) all.textContent = done.size + ' dari ' + TOTAL;
  }

  /* ---------- matematika ---------- */

  function renderMath() {
    if (typeof window.renderMathInElement !== 'function') return;
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false,
      trust: false
    });
  }

  /* ---------- latihan ---------- */

  function initQuiz() {
    var list = document.querySelector('[data-quiz]');
    if (!list) return;

    var cards = Array.prototype.slice.call(list.querySelectorAll('.q-card'));
    var scoreEl = document.querySelector('[data-score]');
    var answered = {};

    list.addEventListener('click', function (event) {
      var btn = event.target.closest('[data-reveal]');
      if (!btn) return;
      var card = btn.closest('.q-card');
      var answer = card.querySelector('.q-answer');
      var open = answer.hasAttribute('hidden');
      if (open) {
        answer.removeAttribute('hidden');
        btn.textContent = 'Sembunyikan langkah';
        btn.setAttribute('aria-expanded', 'true');
        var id = card.getAttribute('data-q');
        answered[id] = true;
        if (scoreEl) scoreEl.textContent = Object.keys(answered).length + ' dari ' + cards.length;
      } else {
        answer.setAttribute('hidden', '');
        btn.textContent = 'Lihat langkah';
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    list.addEventListener('click', function (event) {
      var btn = event.target.closest('[data-self]');
      if (!btn) return;
      var card = btn.closest('.q-card');
      var state = btn.getAttribute('data-self');
      card.setAttribute('data-result', state);
      card.querySelectorAll('[data-self]').forEach(function (b) {
        b.classList.toggle('is-picked', b === btn);
      });
      var answer = card.querySelector('.q-answer');
      if (answer && answer.hasAttribute('hidden')) {
        answer.removeAttribute('hidden');
        var rev = card.querySelector('[data-reveal]');
        if (rev) {
          rev.textContent = 'Sembunyikan langkah';
          rev.setAttribute('aria-expanded', 'true');
        }
      }
      answered[card.getAttribute('data-q')] = true;
      if (scoreEl) scoreEl.textContent = Object.keys(answered).length + ' dari ' + cards.length;
    });

    document.querySelectorAll('[data-reset-quiz]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        answered = {};
        if (scoreEl) scoreEl.textContent = '0 dari ' + cards.length;
        cards.forEach(function (card) {
          card.removeAttribute('data-result');
          card.querySelectorAll('[data-self]').forEach(function (b) {
            b.classList.remove('is-picked');
          });
          var answer = card.querySelector('.q-answer');
          if (answer) answer.setAttribute('hidden', '');
          var rev = card.querySelector('[data-reveal]');
          if (rev) {
            rev.textContent = 'Lihat langkah';
            rev.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });
  }

  /* ---------- mulai ---------- */

  function init() {
    paintTopbar();
    paintRail();
    paintButtons();
    paintRoadmap();
    watchSections();
    initQuiz();
    renderMath();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
