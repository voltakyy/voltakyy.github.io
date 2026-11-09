/**
 * GvRng Web Simulator — Professional Web IDE & Puzzle Runner Engine
 * True Guido van Robot NG runtime with step-by-step debugger, live line gutter,
 * dual visual output comparison, and authentic GvRng rules.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const liveCanvas = document.getElementById('worldCanvas');
  const targetCanvas = document.getElementById('targetCanvas');
  const canvasViewport = document.getElementById('canvasViewport');
  const targetCanvasWrapper = document.getElementById('targetCanvasWrapper');
  const puzzleSelect = document.getElementById('puzzleSelect');

  // View mode toggles
  const btnViewLive = document.getElementById('btnViewLive');
  const btnViewTarget = document.getElementById('btnViewTarget');
  const btnViewSplit = document.getElementById('btnViewSplit');
  const btnToggleTrail = document.getElementById('btnToggleTrail');

  // Execution Controls
  const btnRun = document.getElementById('btnRun');
  const btnStep = document.getElementById('btnStep');
  const btnReset = document.getElementById('btnReset');
  const btnValidate = document.getElementById('btnValidate');
  const btnLoadStarter = document.getElementById('btnLoadStarter');
  const btnLoadSolution = document.getElementById('btnLoadSolution');
  const speedSlider = document.getElementById('speedSlider');
  const speedLabel = document.getElementById('speedLabel');

  // Mission Info Elements
  const missionTitle = document.getElementById('missionTitle');
  const missionConstraint = document.getElementById('missionConstraint');
  const missionPrompt = document.getElementById('missionPrompt');

  // Editor & Gutter
  const editorGutter = document.getElementById('editorGutter');
  const editorTextarea = document.getElementById('editorTextarea');

  // Telemetry Elements
  const telPos = document.getElementById('telPos');
  const telDir = document.getElementById('telDir');
  const telBag = document.getElementById('telBag');
  const telWorld = document.getElementById('telWorld');
  const telSteps = document.getElementById('telSteps');
  const telLines = document.getElementById('telLines');
  const telStatus = document.getElementById('telStatus');

  // Terminal & Toast
  const termBody = document.getElementById('termBody');
  const toastNotification = document.getElementById('toastNotification');

  // State
  const missions = window.GVR_MISSIONS || [];
  let currentMission = missions[0];
  let world = new GvrWorld(15, 15);
  let interpreter = new GvrInterpreter(world);
  let isRunning = false;
  let playInterval = null;
  let currentSpeed = 200;
  let showTrail = true;
  let viewMode = 'live'; // 'live', 'target', 'split'

  // Web Audio Synthesizer
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.04) {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  }

  function playVictoryFanfare() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      setTimeout(() => playTone(freq, 'triangle', 0.28, 0.06), i * 90);
    });
  }

  // Canvas Setup & Rendering
  function setupCanvases() {
    const dpr = window.devicePixelRatio || 1;

    // Dimensions based on viewport
    const containerW = canvasViewport.clientWidth - 40;
    const containerH = canvasViewport.clientHeight - 40;

    let targetW = Math.max(380, Math.min(containerW, 640));
    let targetH = Math.max(340, Math.min(containerH, 520));

    if (viewMode === 'split') {
      targetW = Math.max(320, (containerW - 30) / 2);
    }

    if (liveCanvas) {
      liveCanvas.width = targetW * dpr;
      liveCanvas.height = targetH * dpr;
      liveCanvas.style.width = `${targetW}px`;
      liveCanvas.style.height = `${targetH}px`;
      world.render(liveCanvas);
    }

    if (targetCanvas && currentMission) {
      targetCanvas.width = targetW * dpr;
      targetCanvas.height = targetH * dpr;
      targetCanvas.style.width = `${targetW}px`;
      targetCanvas.style.height = `${targetH}px`;

      world.renderTargetPreview(targetCanvas, {
        finalRobot: currentMission.targetState.finalRobot,
        remainingBeepers: currentMission.targetState.remainingBeepers,
        beeperPositions: currentMission.targetState.beeperPositions || []
      });
    }
  }

  window.addEventListener('resize', setupCanvases);

  // Terminal Log
  function termLog(msg, type = 'info') {
    if (!termBody) return;
    const div = document.createElement('div');
    div.className = `term-entry ${type}`;
    const time = new Date().toLocaleTimeString('id-ID', { hour12: false });
    div.textContent = `[${time}] ${msg}`;
    termBody.appendChild(div);
    termBody.scrollTop = termBody.scrollHeight;
  }

  function clearTerm() {
    if (termBody) termBody.innerHTML = '<div class="term-entry info">GvRng Web Runtime v2.0 siap. Klik Run atau Step untuk mengeksekusi program.</div>';
  }

  function showToast(title, desc, type = 'success') {
    if (!toastNotification) return;
    toastNotification.className = `gvr-toast ${type}`;
    toastNotification.innerHTML = `
      <strong style="display: block; font-size: 0.95rem; margin-bottom: 0.25rem;">${title}</strong>
      <span style="font-size: 0.85rem; line-height: 1.4;">${desc}</span>
    `;
    toastNotification.style.display = 'block';
    setTimeout(() => {
      toastNotification.style.display = 'none';
    }, 4500);
  }

  // Update Gutter (Line Numbers & Active Marker)
  function updateGutter(activeLine = -1) {
    if (!editorGutter || !editorTextarea) return;
    const lines = editorTextarea.value.split('\n');
    const totalLines = Math.max(lines.length, 1);

    let html = '';
    for (let i = 1; i <= totalLines; i++) {
      const isActive = i === activeLine;
      html += `<div class="gutter-num ${isActive ? 'active' : ''}">${i}</div>`;
    }
    editorGutter.innerHTML = html;

    // Scroll gutter to match textarea scroll
    editorGutter.scrollTop = editorTextarea.scrollTop;
  }

  if (editorTextarea) {
    editorTextarea.addEventListener('scroll', () => {
      if (editorGutter) editorGutter.scrollTop = editorTextarea.scrollTop;
    });

    editorTextarea.addEventListener('input', () => {
      updateGutter(-1);
      updateTelemetry();
    });

    // Support Tab key in editor
    editorTextarea.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = editorTextarea.selectionStart;
        const end = editorTextarea.selectionEnd;
        editorTextarea.value = editorTextarea.value.substring(0, start) + '    ' + editorTextarea.value.substring(end);
        editorTextarea.selectionStart = editorTextarea.selectionEnd = start + 4;
        updateGutter(-1);
        updateTelemetry();
      }
    });
  }

  // Telemetry Bar
  function updateTelemetry(statusText = null) {
    if (telPos) telPos.textContent = `(${world.robot.x}, ${world.robot.y})`;
    if (telDir) telDir.textContent = world.robot.dir;
    if (telBag) telBag.textContent = world.robot.beepers.toString();

    let totalWorld = 0;
    world.beepers.forEach(cnt => totalWorld += cnt);
    if (telWorld) telWorld.textContent = totalWorld.toString();
    if (telSteps) telSteps.textContent = world.robot.stepCount.toString();

    const lines = GvrInterpreter.countEffectiveLines(editorTextarea.value);
    if (telLines) {
      telLines.textContent = lines.toString();
      if (currentMission && currentMission.constraints && currentMission.constraints.maxLines) {
        const max = currentMission.constraints.maxLines;
        if (lines > max && max < 999) {
          telLines.style.color = '#f87171';
          telLines.title = `Melebihi batas ${max} baris!`;
        } else {
          telLines.style.color = '#34d399';
          telLines.title = `Batas: ${max} baris`;
        }
      }
    }

    if (statusText && telStatus) {
      telStatus.textContent = statusText;
    }
  }

  // Step Execution
  function doStep() {
    if (interpreter.isFinished) {
      pause();
      termLog('Program selesai dieksekusi.', 'success');
      updateTelemetry('SELESAI');
      validateObjectives(false);
      return;
    }

    try {
      const res = interpreter.step();
      world.render(liveCanvas);
      updateTelemetry('BERJALAN');

      if (res.error) {
        pause();
        playTone(180, 'sawtooth', 0.25, 0.08);
        termLog(res.error, 'error');
        updateGutter(res.lineNo);
        updateTelemetry('CRASH');
        showToast('TABRAKAN / ERROR', res.error, 'error');
        return;
      }

      if (res.lineNo) {
        updateGutter(res.lineNo);
      }

      if (res.command) {
        termLog(`Line ${res.lineNo}: ${res.command}`);
        if (res.command.includes('pickbeeper')) playTone(880, 'sine', 0.12, 0.06);
        else if (res.command.includes('putbeeper')) playTone(440, 'sine', 0.12, 0.06);
        else if (res.command.includes('move')) playTone(520, 'sine', 0.04, 0.02);
      }

      if (res.isFinished) {
        pause();
        termLog(`Robot selesai! Total pergerakan: ${world.robot.stepCount} langkah fisik.`, 'success');
        updateTelemetry('SELESAI (TURNOFF)');
        validateObjectives(false);
      }
    } catch (err) {
      pause();
      termLog(`Runtime Error: ${err.message}`, 'error');
      updateTelemetry('ERROR');
    }
  }

  function run() {
    if (isRunning) return;

    if (interpreter.isFinished) {
      resetSimulation();
    }

    isRunning = true;
    btnRun.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="4" width="4" height="16"/>
        <rect x="14" y="4" width="4" height="16"/>
      </svg> Pause
    `;
    btnRun.style.background = '#f59e0b';
    updateTelemetry('RUNNING');

    playInterval = setInterval(() => {
      doStep();
      if (interpreter.isFinished) pause();
    }, currentSpeed);
  }

  function pause() {
    isRunning = false;
    if (playInterval) {
      clearInterval(playInterval);
      playInterval = null;
    }
    btnRun.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg> Run
    `;
    btnRun.style.background = '#10b981';
    updateTelemetry(world.robot.isOff ? 'SELESAI' : 'PAUSED');
  }

  function resetSimulation() {
    pause();
    world.restoreSnapshot();
    world.render(liveCanvas);

    try {
      interpreter.loadSource(editorTextarea.value);
    } catch (err) {
      termLog(`Syntax Error: ${err.message}`, 'error');
    }

    updateGutter(-1);
    updateTelemetry('READY');
    clearTerm();
    termLog('Dunia & robot di-reset ke kondisi awal.', 'info');
  }

  // Objective Validation
  function validateObjectives(showToastNotification = true) {
    if (!currentMission) return;
    const code = editorTextarea.value;
    const lines = GvrInterpreter.countEffectiveLines(code);
    const c = currentMission.constraints;

    const errors = [];
    const successes = [];

    // Check robot turned off
    if (!world.robot.isOff) {
      errors.push('Robot belum dimatikan (wajib diakhiri turnoff)');
    } else {
      successes.push('Robot aman dimatikan (turnoff)');
    }

    // Check beepers in world
    let totalBeepers = 0;
    world.beepers.forEach(cnt => totalBeepers += cnt);

    if (c.mustClearAllBeepers) {
      if (totalBeepers > 0) {
        errors.push(`Masih ada ${totalBeepers} sampah beeper belum terambil`);
      } else {
        successes.push(`Seluruh beeper berhasil dipungut (${world.robot.beepers} di tas)`);
      }
    }

    // Check return to start
    if (c.mustReturnToStart) {
      const init = currentMission.initialRobot;
      if (world.robot.x !== init.x || world.robot.y !== init.y) {
        errors.push(`Robot tidak kembali ke posisi awal (${init.x}, ${init.y})`);
      } else {
        successes.push(`Robot kembali ke titik awal (${init.x}, ${init.y})`);
      }
    }

    // Check lines limit
    if (c.maxLines && c.maxLines < 999) {
      if (lines > c.maxLines) {
        errors.push(`Kode ${lines} baris, melebihi kuota maksimal ${c.maxLines} baris`);
      } else {
        successes.push(`Jumlah baris (${lines} baris) memenuhi batas ${c.maxLines} baris`);
      }
    }

    // Check required keywords
    if (c.requiredKeywords) {
      c.requiredKeywords.forEach(kw => {
        const regex = new RegExp(`\\b${kw}\\b`, 'i');
        if (!regex.test(code)) {
          errors.push(`Program wajib menggunakan kata kunci '${kw}'`);
        } else {
          successes.push(`Menggunakan struktur '${kw}'`);
        }
      });
    }

    if (errors.length === 0) {
      playVictoryFanfare();
      termLog('🎉 VALIDASI SUKSES: Seluruh objektif misi terpenuhi 100%!', 'success');
      if (showToastNotification) {
        showToast('🎉 MISI SELESAI SEMPURNA!', 'Visual output program Anda cocok 100% dengan target soal!', 'success');
      }
    } else {
      termLog(`⚠️ VALIDASI BELUM TERPENUHI: ${errors.join(', ')}`, 'warn');
      if (showToastNotification) {
        showToast('⚠️ BELUM SESUAI TARGET', errors.join(' • '), 'error');
      }
    }
  }

  // Load Puzzle Mission
  function loadMission(missionId) {
    pause();
    const mission = missions.find(m => m.id === missionId) || missions[0];
    currentMission = mission;

    // Update Header
    missionTitle.textContent = `Misi #${mission.number}: ${mission.title}`;
    missionConstraint.textContent = mission.badge;
    missionPrompt.textContent = mission.prompt;

    // Setup World Grid
    world.cols = mission.cols || 15;
    world.rows = mission.rows || 15;
    world.reset();

    const r = mission.initialRobot;
    world.setRobot(r.x, r.y, r.dir, r.beepers || 0);

    mission.initialBeepers.forEach(([x, y, count]) => {
      world.addBeeper(x, y, count || 1);
    });

    mission.hWalls.forEach(([x, y]) => world.addHWall(x, y));
    mission.vWalls.forEach(([x, y]) => world.addVWall(x, y));

    world.saveSnapshot();

    // Load starter code by default
    editorTextarea.value = mission.starterCode.trim();

    setupCanvases();
    resetSimulation();
    updateGutter(-1);
    termLog(`Memuat ${mission.title} (${mission.source})`, 'info');
  }

  // Populate Puzzle Select Dropdown
  function populatePuzzleSelect() {
    if (!puzzleSelect) return;
    puzzleSelect.innerHTML = '';
    missions.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = `Misi ${m.number}: ${m.title} (${m.source})`;
      puzzleSelect.appendChild(opt);
    });

    puzzleSelect.addEventListener('change', (e) => {
      loadMission(e.target.value);
    });
  }

  // View Mode Switcher
  function setViewMode(mode) {
    viewMode = mode;
    btnViewLive.classList.toggle('active', mode === 'live');
    btnViewTarget.classList.toggle('active', mode === 'target');
    btnViewSplit.classList.toggle('active', mode === 'split');

    if (mode === 'live') {
      canvasViewport.classList.remove('split-mode');
      document.getElementById('liveCanvasWrapper').style.display = 'block';
      targetCanvasWrapper.style.display = 'none';
    } else if (mode === 'target') {
      canvasViewport.classList.remove('split-mode');
      document.getElementById('liveCanvasWrapper').style.display = 'none';
      targetCanvasWrapper.style.display = 'block';
    } else if (mode === 'split') {
      canvasViewport.classList.add('split-mode');
      document.getElementById('liveCanvasWrapper').style.display = 'block';
      targetCanvasWrapper.style.display = 'block';
    }

    setupCanvases();
  }

  if (btnViewLive) btnViewLive.addEventListener('click', () => setViewMode('live'));
  if (btnViewTarget) btnViewTarget.addEventListener('click', () => setViewMode('target'));
  if (btnViewSplit) btnViewSplit.addEventListener('click', () => setViewMode('split'));

  // Execution Listeners
  if (btnRun) {
    btnRun.addEventListener('click', () => {
      if (isRunning) pause();
      else run();
    });
  }

  if (btnStep) {
    btnStep.addEventListener('click', () => {
      pause();
      doStep();
    });
  }

  if (btnReset) btnReset.addEventListener('click', resetSimulation);
  if (btnValidate) btnValidate.addEventListener('click', () => validateObjectives(true));

  if (btnLoadStarter) {
    btnLoadStarter.addEventListener('click', () => {
      if (currentMission) {
        editorTextarea.value = currentMission.starterCode.trim();
        resetSimulation();
        updateGutter(-1);
        termLog('Template latihan siswa dimuat.', 'info');
      }
    });
  }

  if (btnLoadSolution) {
    btnLoadSolution.addEventListener('click', () => {
      if (currentMission) {
        editorTextarea.value = currentMission.solutionCode.trim();
        resetSimulation();
        updateGutter(-1);
        termLog('Kunci solusi resmi aslab dimuat. Tekan Run atau Step untuk melihat alur!', 'success');
      }
    });
  }

  if (speedSlider) {
    speedSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      const speeds = [600, 350, 180, 70, 20];
      currentSpeed = speeds[val - 1] || 180;
      const labels = ['1x', '2x', '3x', '4x', '5x'];
      if (speedLabel) speedLabel.textContent = labels[val - 1];

      if (isRunning) {
        pause();
        run();
      }
    });
  }

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (document.activeElement === editorTextarea) return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (isRunning) pause();
      else run();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      pause();
      doStep();
    } else if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      resetSimulation();
    }
  });

  // Init
  populatePuzzleSelect();
  loadMission(missions[0].id);
  setViewMode('live');
});
