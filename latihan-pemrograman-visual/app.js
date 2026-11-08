/**
 * @file app.js
 * @description Modul pengelola logika kuis interaktif, peracikan bank soal,
 * pelacak statistik CPMK, navigasi keyboard, dan penyimpanan status lokal (localStorage).
 * @author voltakyy
 * @license MIT
 */

/* =========================================================
   Logika latihan — Ruang Visual
   ========================================================= */

const BANK = window.QUESTION_BANK || [];
const BEST_KEY = 'ruang-visual-best-v1';

const TOPIC_META = {
  'Class & Object': {
    fg: '#1f6b5c',
    bg: '#e5f2ee',
    dot: '#2b8a79',
    desc: 'blueprint vs instance'
  },
  'Property & Method': {
    fg: '#8c6110',
    bg: '#fdf2d4',
    dot: '#d99a24',
    desc: 'state & behaviour'
  },
  'Inheritance': {
    fg: '#a83f28',
    bg: '#fbe8e1',
    dot: '#dd5a3a',
    desc: 'extends, override, super'
  },
  'Function & Procedure': {
    fg: '#3d6f88',
    bg: '#e8f1f5',
    dot: '#6f9fb8',
    desc: 'return vs void — Alice 3'
  },
  'Perulangan': {
    fg: '#6b4a73',
    bg: '#f0e9f2',
    dot: '#7d5a86',
    desc: 'for, while, do-while'
  }
};
const TOPIC_ORDER = Object.keys(TOPIC_META);

const ARROW_SVG = '<svg class="btn-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const CHECK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="#2b8a79" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const CROSS_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="#dd5a3a" stroke-width="2.6" stroke-linecap="round"/></svg>';

const $ = (selector, parent = document) => parent.querySelector(selector);

const home = $('#home');
const quiz = $('#quiz');
const result = $('#result');
const startBtn = $('#startBtn');
const bestNote = $('#bestNote');
const topicList = $('#topicList');
const qCounter = $('#qCounter');
const phaseLabel = $('#phaseLabel');
const progressBar = $('#progressBar');
const progressFill = $('#progressFill');
const scoreNum = $('#scoreNum');
const qCard = $('#qCard');
const qTopic = $('#qTopic');
const qChallenge = $('#qChallenge');
const qNumber = $('#qNumber');
const qText = $('#qText');
const qCodeWrap = $('#qCodeWrap');
const qCode = $('#qCode');
const optionsEl = $('#options');
const feedback = $('#feedback');
const fbIcon = $('#fbIcon');
const fbTitle = $('#fbTitle');
const fbSub = $('#fbSub');
const fbBody = $('#fbBody');
const nextBtn = $('#nextBtn');
const nextBtnTop = $('#nextBtnTop');
const quitBtn = $('#quitBtn');
const resHeadline = $('#resHeadline');
const resSub = $('#resSub');
const scoreStamp = $('#scoreStamp');
const resScore = $('#resScore');
const resPercent = $('#resPercent');
const breakdown = $('#breakdown');
const review = $('#review');
const wrongCount = $('#wrongCount');
const reviewList = $('#reviewList');
const retryBtn = $('#retryBtn');
const homeBtn = $('#homeBtn');

const state = {
  deck: [],
  index: 0,
  correctCount: 0,
  answers: [],
  locked: false,
  current: null
};

/* ---------- util ---------- */

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Format teks soal: [[kode]] jadi inline code, **teks** jadi bold.
 * Bagian code dipisah dulu supaya tanda bintang di dalamnya tidak
 * ikut diproses sebagai bold.
 */
function inlineFmt(text) {
  const escaped = escapeHTML(text);
  return escaped
    .split(/(\[\[[\s\S]+?\]\])/)
    .map(part => {
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const inner = part.slice(2, -2);
        const stackClass = inner.includes('\n') ? ' class="code-stack"' : '';
        return '<code' + stackClass + '>' + inner + '</code>';
      }
      return part.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    })
    .join('');
}

/**
 * Format pembahasan:
 * - paragraf dipisah baris kosong
 * - baris yang semuanya diawali "- " menjadi <ul>
 * - blok di antara ~~~ menjadi <pre><code>
 */
function renderRich(source) {
  const chunks = String(source).split('~~~');
  let html = '';

  chunks.forEach((chunk, index) => {
    if (index % 2 === 1) {
      const code = chunk.replace(/^\n+|\n+$/g, '');
      html += '<pre><code>' + escapeHTML(code) + '</code></pre>';
      return;
    }

    chunk.split(/\n{2,}/).forEach(block => {
      const trimmed = block.trim();
      if (!trimmed) return;

      const lines = trimmed.split('\n');
      if (lines.every(line => line.trim().startsWith('- '))) {
        html += '<ul>' + lines.map(line => '<li>' + inlineFmt(line.trim().slice(2)) + '</li>').join('') + '</ul>';
      } else {
        html += '<p>' + lines.map(line => inlineFmt(line)).join('<br>') + '</p>';
      }
    });
  });

  return html;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getBest() {
  try {
    return JSON.parse(localStorage.getItem(BEST_KEY) || 'null');
  } catch (error) {
    return null;
  }
}

function saveBest(next) {
  try {
    localStorage.setItem(BEST_KEY, JSON.stringify(next));
  } catch (error) {
    /* localStorage bisa diblokir di beberapa browser; latihan tetap jalan. */
  }
}

/* ---------- beranda ---------- */

function renderHome() {
  const counts = {};
  BANK.forEach(question => {
    counts[question.topic] = (counts[question.topic] || 0) + 1;
  });

  topicList.innerHTML = TOPIC_ORDER.map((topic, index) => {
    const meta = TOPIC_META[topic];
    return `
      <li class="topic-row">
        <span class="topic-index">${String(index + 1).padStart(2, '0')}</span>
        <span class="topic-dot" style="--dot:${meta.dot}" aria-hidden="true"></span>
        <span class="topic-name">${escapeHTML(topic)}</span>
        <span class="topic-desc">${escapeHTML(meta.desc)}</span>
        <span class="topic-count" style="--tint:${meta.bg}">${counts[topic] || 0} soal</span>
      </li>`;
  }).join('');

  updateBestNote();
}

function updateBestNote() {
  const best = getBest();
  if (!best || typeof best.correct !== 'number') {
    bestNote.hidden = true;
    return;
  }
  bestNote.hidden = false;
  bestNote.textContent = `Rekor terakhir: ${best.correct}/${best.total} benar · ${best.percent}%`;
}

/* ---------- kuis ---------- */

function buildDeck() {
  const core = BANK.filter(question => !question.challenge);
  const challenge = BANK.filter(question => question.challenge);
  const ordered = [...shuffle(core), ...shuffle(challenge)];

  return ordered.map(question => {
    const opts = shuffle(
      question.options.map((text, index) => ({
        text,
        isCorrect: index === question.answer
      }))
    );
    return {
      ...question,
      opts,
      correctIndex: opts.findIndex(option => option.isCorrect)
    };
  });
}

function startQuiz() {
  if (!BANK.length) return;

  state.deck = buildDeck();
  state.index = 0;
  state.correctCount = 0;
  state.answers = [];
  state.locked = false;
  state.current = null;

  home.hidden = true;
  result.hidden = true;
  quiz.hidden = false;

  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function renderQuestion() {
  const question = state.deck[state.index];
  const total = state.deck.length;
  state.current = question;
  state.locked = false;

  qCounter.textContent = `Soal ${String(state.index + 1).padStart(2, '0')} / ${total}`;
  progressBar.setAttribute('aria-valuemax', String(total));
  progressBar.setAttribute('aria-valuenow', String(state.index + 1));
  progressFill.style.width = `${(state.index / total) * 100}%`;
  scoreNum.textContent = String(state.correctCount);

  phaseLabel.textContent = question.challenge ? 'bagian tantangan' : 'bagian inti';
  phaseLabel.classList.toggle('is-challenge', Boolean(question.challenge));

  qChallenge.hidden = !question.challenge;
  qNumber.textContent = `#${String(state.index + 1).padStart(2, '0')}`;

  const meta = TOPIC_META[question.topic] || TOPIC_META['Class & Object'];
  qTopic.textContent = question.topic;
  qTopic.style.setProperty('--tag-fg', meta.fg);
  qTopic.style.setProperty('--tag-bg', meta.bg);

  qText.innerHTML = inlineFmt(question.q);

  if (question.code) {
    qCode.textContent = question.code.trim();
    qCodeWrap.hidden = false;
  } else {
    qCode.textContent = '';
    qCodeWrap.hidden = true;
  }

  optionsEl.innerHTML = '';
  question.opts.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option';
    button.innerHTML = `
      <span class="option-key">${'ABCD'[index]}</span>
      <span class="option-text">${inlineFmt(option.text)}</span>
      <span class="option-mark" aria-hidden="true"></span>`;
    button.addEventListener('click', () => selectAnswer(index));
    optionsEl.appendChild(button);
  });

  feedback.hidden = true;
  feedback.classList.remove('is-correct', 'is-wrong');
  fbBody.innerHTML = '';
  fbIcon.innerHTML = '';

  nextBtn.innerHTML = (state.index === total - 1 ? 'Lihat hasil' : 'Soal berikutnya') + ARROW_SVG;
  nextBtnTop.textContent = state.index === total - 1 ? 'Hasil' : 'Lanjut';

  qCard.style.animation = 'none';
  void qCard.offsetWidth;
  qCard.style.animation = '';
}

function selectAnswer(selectedIndex) {
  if (state.locked) return;

  const question = state.current;
  const total = state.deck.length;
  const isCorrect = selectedIndex === question.correctIndex;

  state.locked = true;
  if (isCorrect) state.correctCount += 1;

  [...optionsEl.children].forEach((button, index) => {
    button.disabled = true;
    const mark = button.querySelector('.option-mark');

    if (index === question.correctIndex) {
      button.classList.add('is-correct');
      mark.textContent = '✓';
    } else if (index === selectedIndex) {
      button.classList.add('is-wrong');
      mark.textContent = '×';
    } else {
      button.classList.add('is-muted');
    }
  });

  state.answers.push({
    number: state.index + 1,
    question,
    chosenText: question.opts[selectedIndex].text,
    correctText: question.opts[question.correctIndex].text,
    isCorrect
  });

  scoreNum.textContent = String(state.correctCount);
  progressFill.style.width = `${((state.index + 1) / total) * 100}%`;

  feedback.hidden = false;
  feedback.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
  fbIcon.innerHTML = isCorrect ? CHECK_SVG : CROSS_SVG;
  fbTitle.textContent = isCorrect ? 'Tepat.' : 'Belum tepat.';
  fbSub.textContent = isCorrect
    ? 'Baca pembahasannya, lalu lanjut.'
    : 'Cek alasannya, lalu lanjut.';

  const answerLine = isCorrect
    ? ''
    : `<p class="answer-line">Jawaban benar: <strong>${'ABCD'[question.correctIndex]}. ${inlineFmt(question.opts[question.correctIndex].text)}</strong></p>`;
  fbBody.innerHTML = answerLine + renderRich(question.explain);

  nextBtn.innerHTML = (state.index === total - 1 ? 'Lihat hasil' : 'Soal berikutnya') + ARROW_SVG;
  nextBtnTop.textContent = state.index === total - 1 ? 'Hasil' : 'Lanjut';

  if (window.innerWidth < 720) {
    window.setTimeout(() => {
      feedback.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 70);
  }
}

function nextQuestion() {
  if (!state.locked) return;

  if (state.index >= state.deck.length - 1) {
    showResult();
    return;
  }

  state.index += 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- hasil ---------- */

function topicStats() {
  const stats = {};
  TOPIC_ORDER.forEach(topic => {
    stats[topic] = { correct: 0, total: 0 };
  });

  state.answers.forEach(answer => {
    const topic = answer.question.topic;
    if (!stats[topic]) stats[topic] = { correct: 0, total: 0 };
    stats[topic].total += 1;
    if (answer.isCorrect) stats[topic].correct += 1;
  });

  return stats;
}

function weakestTopic(stats) {
  let weakest = null;
  let lowest = Infinity;

  TOPIC_ORDER.forEach(topic => {
    const item = stats[topic];
    if (!item || item.total === 0) return;
    const ratio = item.correct / item.total;
    if (ratio < lowest) {
      lowest = ratio;
      weakest = topic;
    }
  });

  return weakest;
}

function showResult() {
  quiz.hidden = true;
  result.hidden = false;

  const total = state.deck.length;
  const correct = state.correctCount;
  const percent = Math.round((correct / total) * 100);
  const stats = topicStats();

  resScore.textContent = `${correct} / ${total}`;
  resPercent.textContent = `${percent}% benar`;

  let headline;
  let stamp;
  let tone;

  if (percent >= 90) {
    headline = 'Sudah matang. Tinggal jaga ritme.';
    stamp = 'SIAP UTS';
    tone = 'good';
  } else if (percent >= 75) {
    headline = 'Bekalmu sudah cukup kuat.';
    stamp = 'HAMPIR SIAP';
    tone = 'mid';
  } else if (percent >= 60) {
    headline = 'Dasar-dasarnya sudah masuk.';
    stamp = 'PERLU REVIEW';
    tone = 'mid';
  } else {
    headline = 'Masih ada ruang untuk naik.';
    stamp = 'AYO ULANG';
    tone = 'low';
  }

  resHeadline.textContent = headline;
  scoreStamp.textContent = stamp;
  scoreStamp.dataset.tone = tone;

  const weak = weakestTopic(stats);
  if (correct === total) {
    resSub.textContent = 'Semua benar. Konsisten banget — coba ulangi dengan urutan acak untuk mengecek pemahaman.';
  } else if (weak) {
    resSub.textContent = `Kamu benar ${correct} dari ${total} soal. Yang paling perlu diulang: ${weak}.`;
  } else {
    resSub.textContent = `Kamu benar ${correct} dari ${total} soal.`;
  }

  breakdown.querySelectorAll('.perfect-note').forEach(node => node.remove());

  breakdown.innerHTML = TOPIC_ORDER.map(topic => {
    const item = stats[topic];
    const meta = TOPIC_META[topic];
    if (!item || item.total === 0) return '';

    const pct = Math.round((item.correct / item.total) * 100);
    return `
      <div class="break-row">
        <span class="break-name"><i style="--dot:${meta.dot}" aria-hidden="true"></i>${escapeHTML(topic)}</span>
        <span class="break-bar" aria-hidden="true"><span data-width="${pct}" style="--dot:${meta.dot}"></span></span>
        <span class="break-val">${item.correct}/${item.total}</span>
      </div>`;
  }).join('');

  window.requestAnimationFrame(() => {
    breakdown.querySelectorAll('.break-bar span').forEach(bar => {
      bar.style.width = `${bar.dataset.width}%`;
    });
  });

  const wrong = state.answers.filter(answer => !answer.isCorrect);

  if (wrong.length) {
    review.hidden = false;
    wrongCount.textContent = `${wrong.length} soal`;
    reviewList.innerHTML = wrong.map(answer => `
      <details class="review-item">
        <summary>Soal ${String(answer.number).padStart(2, '0')} · ${escapeHTML(answer.question.topic)}</summary>
        <div class="review-body">
          <p class="review-q">${inlineFmt(answer.question.q)}</p>
          <div class="review-ans">
            <span class="bad">Jawabanmu: <b>${inlineFmt(answer.chosenText)}</b></span>
            <span class="good">Kunci: <b>${inlineFmt(answer.correctText)}</b></span>
          </div>
          <div class="rich">${renderRich(answer.question.explain)}</div>
        </div>
      </details>`).join('');
    review.open = false;
  } else {
    review.hidden = true;
    reviewList.innerHTML = '';
    breakdown.insertAdjacentHTML(
      'beforeend',
      '<p class="perfect-note">Tidak ada jawaban salah. Coba ulangi dengan urutan yang diacak — kalau tetap konsisten, pemahamanmu benar-benar kuat.</p>'
    );
  }

  const best = getBest();
  if (!best || correct > best.correct || (correct === best.correct && percent > best.percent)) {
    saveBest({ correct, total, percent });
  }
  updateBestNote();

  window.scrollTo({ top: 0, behavior: 'auto' });
}

function goHome() {
  quiz.hidden = true;
  result.hidden = true;
  home.hidden = false;
  updateBestNote();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

/* ---------- event ---------- */

startBtn.addEventListener('click', startQuiz);
retryBtn.addEventListener('click', startQuiz);
homeBtn.addEventListener('click', goHome);

quitBtn.addEventListener('click', () => {
  if (state.answers.length > 0 && !window.confirm('Keluar dari latihan? Progres sesi ini akan hilang.')) {
    return;
  }
  goHome();
});

nextBtn.addEventListener('click', nextQuestion);
nextBtnTop.addEventListener('click', nextQuestion);

document.addEventListener('keydown', event => {
  if (quiz.hidden) return;

  if (event.key === 'Enter' && state.locked) {
    event.preventDefault();
    nextQuestion();
    return;
  }

  if (state.locked || !state.current) return;

  const key = event.key.toUpperCase();
  const map = { '1': 0, '2': 1, '3': 2, '4': 3, 'A': 0, 'B': 1, 'C': 2, 'D': 3 };

  if (Object.prototype.hasOwnProperty.call(map, key)) {
    const index = map[key];
    if (index < state.current.opts.length) {
      event.preventDefault();
      selectAnswer(index);
    }
  }
});

renderHome();

/**
 * Menampilkan pesan toast sementara di layar
 * @param {string} msg Teks pesan yang ingin ditampilkan
 * @param {number} duration Durasi tayang dalam milidetik
 */
function showToast(msg, duration = 2500) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--ink);color:#fff;padding:10px 20px;border-radius:999px;font-family:var(--mono);font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.25);transition:opacity 0.2s ease;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
  }, duration);
}
window.showToast = showToast;
