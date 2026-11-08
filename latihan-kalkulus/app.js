/* =========================================================
   Logika latihan — Batas & Bentuk
   ========================================================= */

const BANK = window.QUESTION_BANK || [];
const BEST_KEY = 'batas-bentuk-best-v2';

const TOPIC_META = {
  'Bilangan & Modulo': {
    fg: '#8a5a17',
    bg: '#f7eccf',
    dot: '#c08a2e',
    desc: 'akar, penyederhanaan, modulo',
    formula: '-38=7(-6)+4'
  },
  'Trigonometri': {
    fg: '#1f6b64',
    bg: '#e0f0ec',
    dot: '#2f8b80',
    desc: 'sudut istimewa, radian, identitas',
    formula: '\\sin^2x+\\cos^2x=1'
  },
  'Fungsi & Invers': {
    fg: '#8c3a5c',
    bg: '#f8e4ec',
    dot: '#a84f72',
    desc: 'komposisi, invers, domain',
    formula: '(f\\circ g)(x)'
  },
  'Pertidaksamaan': {
    fg: '#a83f28',
    bg: '#fbe8e1',
    dot: '#d4553f',
    desc: 'tanda, interval, garis bilangan',
    formula: '-5 \\le 2x+6 \\lt 4'
  },
  'Domain & Range': {
    fg: '#24549b',
    bg: '#e3ebf8',
    dot: '#24549b',
    desc: 'domain, kodomain, range, grafik',
    formula: 'D,\\ K,\\ R'
  },
  'Limit Aljabar': {
    fg: '#52622c',
    bg: '#eef3e1',
    dot: '#6e7f3d',
    desc: 'bentuk 0/0 dan limit di tak hingga',
    formula: '\\frac{0}{0}\\ \\to\\ \\text{faktorkan}'
  },
  'Limit Trigonometri': {
    fg: '#6d4269',
    bg: '#f1e5ef',
    dot: '#7c4f79',
    desc: 'sin, cos, tan, sec di sekitar nol',
    formula: '\\frac{\\sin u}{u}\\to1'
  }
};
const TOPIC_ORDER = [
  'Bilangan & Modulo',
  'Trigonometri',
  'Fungsi & Invers',
  'Pertidaksamaan',
  'Domain & Range',
  'Limit Aljabar',
  'Limit Trigonometri'
];

const ARROW_SVG = '<svg class="btn-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const CHECK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="#6e7f3d" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const CROSS_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="#d4553f" stroke-width="2.6" stroke-linecap="round"/></svg>';

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
const optionsEl = $('#options');
const feedback = $('#feedback');
const fbIcon = $('#fbIcon');
const fbTitle = $('#fbTitle');
const fbSub = $('#fbSub');
const fbBody = $('#fbBody');
const nextBtn = $('#nextBtn');
const nextBtnTop = $('#nextBtnTop');
const quitBtn = $('#quitBtn');
const formulaBtn = $('#formulaBtn');
const formulaModal = $('#formulaModal');
const formulaClose = $('#formulaClose');
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

function inlineFmt(text) {
  return escapeHTML(text).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function typeset(root) {
  if (!window.renderMathInElement || !root) return;
  try {
    window.renderMathInElement(root, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false,
      strict: false
    });
    gluePunctuation(root);
  } catch (error) {
    /* Kalau CDN KaTeX gagal, teks tetap tampil; latihan tidak berhenti. */
  }
}

/* Jaga tanda baca agar tidak pecah ke baris sendiri setelah rumus inline. */
function gluePunctuation(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    if (node.parentElement && node.parentElement.classList.contains('keep-punct')) return;

    const value = node.nodeValue;
    const match = value && value.match(/^[.,;:!?]+/);
    if (!match) return;

    const previous = node.previousSibling;
    const isMath = previous && previous.nodeType === 1 && (
      previous.matches('.katex') ||
      (previous.tagName === 'SPAN' && previous.children.length === 1 && previous.firstElementChild.matches('.katex'))
    );
    if (!isMath) return;

    const wrapper = document.createElement('span');
    wrapper.className = 'keep-punct';
    previous.parentNode.insertBefore(wrapper, previous);
    wrapper.appendChild(previous);
    wrapper.appendChild(document.createTextNode(match[0]));
    node.nodeValue = value.slice(match[0].length);
  });
}

/**
 * Format pembahasan:
 * - paragraf dipisah baris kosong
 * - baris "- " menjadi <ul>
 * - baris "1. " menjadi <ol>
 * - "! " menjadi catatan
 * - blok $$...$$ menjadi matematika display
 */
function renderRich(source) {
  return String(source)
    .split(/\n{2,}/)
    .map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';

      if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
        return '<div class="math-display">' + trimmed + '</div>';
      }

      if (trimmed.startsWith('! ')) {
        return '<div class="note">' + inlineFmt(trimmed.slice(2)) + '</div>';
      }

      const lines = trimmed.split('\n');
      if (lines.every(line => line.trim().startsWith('- '))) {
        return '<ul>' + lines.map(line => '<li>' + inlineFmt(line.trim().slice(2)) + '</li>').join('') + '</ul>';
      }

      if (lines.every(line => /^\d+\.\s/.test(line.trim()))) {
        return '<ol>' + lines.map(line => '<li>' + inlineFmt(line.trim().replace(/^\d+\.\s/, '')) + '</li>').join('') + '</ol>';
      }

      return '<p>' + lines.map(line => inlineFmt(line)).join('<br>') + '</p>';
    })
    .join('');
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
    /* localStorage bisa diblokir; latihan tetap berjalan. */
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
      <article class="topic-card" style="--tint:${meta.bg};--accent:${meta.fg}">
        <div class="topic-card-top">
          <span class="topic-no">0${index + 1}</span>
          <span class="topic-count">${counts[topic] || 0} soal</span>
        </div>
        <h3 class="topic-name">${escapeHTML(topic)}</h3>
        <p class="topic-desc">${escapeHTML(meta.desc)}</p>
        <div class="topic-formula">$${meta.formula}$</div>
      </article>`;
  }).join('');

  typeset(topicList);
  updateBestNote();
}

function updateBestNote() {
  const best = getBest();
  if (!best || typeof best.correct !== 'number') {
    bestNote.hidden = true;
    return;
  }
  bestNote.hidden = false;
  bestNote.textContent = `Rekor tersimpan: ${best.correct}/${best.total} benar · ${best.percent}%`;
}

/* ---------- kuis ---------- */

function buildDeck() {
  const intro = BANK
    .filter(question => question.intro)
    .sort((a, b) => (a.introOrder || 0) - (b.introOrder || 0));
  const core = BANK.filter(question => !question.intro && !question.challenge);
  const challenge = BANK.filter(question => question.challenge);
  const ordered = [...intro, ...shuffle(core), ...shuffle(challenge)];

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
  closeFormula();

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

  if (question.intro) {
    phaseLabel.textContent = 'materi sendiri';
  } else {
    phaseLabel.textContent = question.challenge ? 'bagian tantangan' : 'bagian inti';
  }
  phaseLabel.classList.toggle('is-challenge', Boolean(question.challenge));
  phaseLabel.classList.toggle('is-intro', Boolean(question.intro));

  qChallenge.hidden = !question.challenge;
  qNumber.textContent = `#${String(state.index + 1).padStart(2, '0')}`;

  const meta = TOPIC_META[question.topic] || TOPIC_META['Pertidaksamaan'];
  qTopic.textContent = question.topic;
  qTopic.style.setProperty('--tag-fg', meta.fg);
  qTopic.style.setProperty('--tag-bg', meta.bg);

  qText.innerHTML = inlineFmt(question.q);
  typeset(qText);

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
  typeset(optionsEl);

  feedback.hidden = true;
  feedback.classList.remove('is-correct', 'is-wrong');
  fbBody.innerHTML = '';
  fbIcon.innerHTML = '';

  const isLast = state.index === total - 1;
  nextBtn.innerHTML = (isLast ? 'Lihat hasil' : 'Soal berikutnya') + ARROW_SVG;
  nextBtnTop.textContent = isLast ? 'Hasil' : 'Lanjut';

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
    ? 'Baca langkahnya, lalu lanjut.'
    : 'Cek alurnya, lalu lanjut.';

  const answerLine = isCorrect
    ? ''
    : `<p class="answer-line">Jawaban benar: <strong>${'ABCD'[question.correctIndex]}. ${inlineFmt(question.opts[question.correctIndex].text)}</strong></p>`;

  let figureHTML = '';
  if (question.figure && window.FIGURES && window.FIGURES[question.figure]) {
    const figure = window.FIGURES[question.figure];
    figureHTML = `<figure class="explain-figure">${figure.svg}<figcaption>${escapeHTML(figure.caption)}</figcaption></figure>`;
  }

  fbBody.innerHTML = answerLine + figureHTML + renderRich(question.explain);
  typeset(fbBody);

  const isLast = state.index === total - 1;
  nextBtn.innerHTML = (isLast ? 'Lihat hasil' : 'Soal berikutnya') + ARROW_SVG;
  nextBtnTop.textContent = isLast ? 'Hasil' : 'Lanjut';

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
    headline = 'Sudah stabil. Jaga ketelitiannya.';
    stamp = 'SIAP UTS';
    tone = 'good';
  } else if (percent >= 75) {
    headline = 'Bekalmu sudah cukup kuat.';
    stamp = 'HAMPIR SIAP';
    tone = 'mid';
  } else if (percent >= 60) {
    headline = 'Alurnya mulai terlihat.';
    stamp = 'PERLU LATIHAN';
    tone = 'mid';
  } else {
    headline = 'Masih ada celah. Itu normal.';
    stamp = 'AYO ULANG';
    tone = 'low';
  }

  resHeadline.textContent = headline;
  scoreStamp.textContent = stamp;
  scoreStamp.dataset.tone = tone;

  const weak = weakestTopic(stats);
  if (correct === total) {
    resSub.textContent = 'Semua benar. Coba ulangi dengan urutan acak untuk mengecek konsistensi.';
  } else if (weak) {
    resSub.textContent = `Kamu benar ${correct} dari ${total} soal. Yang paling perlu diulang: ${weak}.`;
  } else {
    resSub.textContent = `Kamu benar ${correct} dari ${total} soal.`;
  }

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
    typeset(reviewList);
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
  closeFormula();
  quiz.hidden = true;
  result.hidden = true;
  home.hidden = false;
  updateBestNote();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

/* ---------- lembar rumus ---------- */

function openFormula() {
  if (quiz.hidden || !formulaModal.hidden) return;
  formulaModal.hidden = false;
  document.body.style.overflow = 'hidden';
  formulaBtn.setAttribute('aria-expanded', 'true');
  typeset(formulaModal.querySelector('.formula-content'));
  formulaClose.focus();
}

function closeFormula() {
  if (formulaModal.hidden) return;
  formulaModal.hidden = true;
  document.body.style.overflow = '';
  formulaBtn.setAttribute('aria-expanded', 'false');
  formulaBtn.focus();
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

formulaBtn.addEventListener('click', openFormula);
formulaClose.addEventListener('click', closeFormula);
formulaModal.querySelector('[data-close-formula]').addEventListener('click', closeFormula);

document.addEventListener('keydown', event => {
  if (!formulaModal.hidden) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeFormula();
    }
    return;
  }

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
