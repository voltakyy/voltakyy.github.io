/**
 * Praktikum Alpro GvRng — Interactive Puzzle & Challenge Arena
 * Dual-Canvas Visualizer (Live vs Target Program Output),
 * Real-Time Objective Validation, and Step Tracing
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const liveCanvas = document.getElementById('worldCanvas');
  const targetCanvas = document.getElementById('targetCanvas');
  const missionSidebarList = document.getElementById('missionSidebarList');

  // Mission Info Elements
  const missionTitle = document.getElementById('missionTitle');
  const missionSource = document.getElementById('missionSource');
  const missionBadge = document.getElementById('missionBadge');
  const missionPrompt = document.getElementById('missionPrompt');
  const missionConstraintText = document.getElementById('missionConstraintText');
  const missionTargetDesc = document.getElementById('missionTargetDesc');
  const logicExplanationBox = document.getElementById('logicExplanationBox');

  // Code & Editor
  const customCodeTextarea = document.getElementById('customCodeTextarea');
  const codeLinesList = document.getElementById('codeLinesList');
  const codeViewerWrapper = document.getElementById('codeViewerWrapper');
  const btnLoadStarter = document.getElementById('btnLoadStarter');
  const btnLoadSolution = document.getElementById('btnLoadSolution');
  const btnToggleEdit = document.getElementById('btnToggleEdit');
  const statLines = document.getElementById('statLines');

  // Playback Controls
  const btnPlay = document.getElementById('btnPlay');
  const btnStep = document.getElementById('btnStep');
  const btnReset = document.getElementById('btnReset');
  const btnValidate = document.getElementById('btnValidate');
  const speedSlider = document.getElementById('speedSlider');
  const speedLabel = document.getElementById('speedLabel');

  // Telemetry
  const statPos = document.getElementById('statPos');
  const statDir = document.getElementById('statDir');
  const statBag = document.getElementById('statBag');
  const statWorld = document.getElementById('statWorld');
  const statSteps = document.getElementById('statSteps');
  const consoleLog = document.getElementById('consoleLog');
  const traceTableBody = document.getElementById('traceTableBody');
  const validationBanner = document.getElementById('validationBanner');

  // State
  const missions = window.GVR_MISSIONS || [];
  let currentMission = missions[0];
  let world = new GvrWorld(15, 15);
  let interpreter = new GvrInterpreter(world);
  let isRunning = false;
  let playInterval = null;
  let currentSpeed = 250;
  let isEditMode = false;
  let traceHistory = [];

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

  function playSuccessChord() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      setTimeout(() => playTone(freq, 'triangle', 0.25, 0.05), i * 80);
    });
  }

  // Setup Canvases
  function setupCanvases() {
    const dpr = window.devicePixelRatio || 1;

    if (liveCanvas) {
      const rect = liveCanvas.getBoundingClientRect();
      const w = rect.width || 480;
      const h = rect.height || 400;
      liveCanvas.width = w * dpr;
      liveCanvas.height = h * dpr;
      world.render(liveCanvas);
    }

    if (targetCanvas && currentMission) {
      const rect = targetCanvas.getBoundingClientRect();
      const w = rect.width || 480;
      const h = rect.height || 400;
      targetCanvas.width = w * dpr;
      targetCanvas.height = h * dpr;

      // Render target preview
      world.renderTargetPreview(targetCanvas, {
        finalRobot: currentMission.targetState.finalRobot,
        remainingBeepers: currentMission.targetState.remainingBeepers,
        beeperPositions: currentMission.targetState.beeperPositions || []
      });
    }
  }

  window.addEventListener('resize', setupCanvases);

  // Logging
  function log(msg, type = 'info') {
    if (!consoleLog) return;
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    const time = new Date().toLocaleTimeString('id-ID', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    entry.textContent = `[${time}] ${msg}`;
    consoleLog.appendChild(entry);
    consoleLog.scrollTop = consoleLog.scrollHeight;
  }

  function clearLog() {
    if (consoleLog) consoleLog.innerHTML = '<div class="log-entry info">Simulator siap. Jalankan atau langkah kodinganmu!</div>';
  }

  // Telemetry & Tracing
  function updateMetrics() {
    if (statPos) statPos.textContent = `(${world.robot.x}, ${world.robot.y})`;
    if (statDir) statDir.textContent = world.robot.dir;
    if (statBag) statBag.textContent = world.robot.beepers.toString();

    let totalWorld = 0;
    world.beepers.forEach(c => totalWorld += c);
    if (statWorld) statWorld.textContent = totalWorld.toString();
    if (statSteps) statSteps.textContent = world.robot.stepCount.toString();

    // Line Count Validator
    const curCode = customCodeTextarea.value;
    const lines = GvrInterpreter.countEffectiveLines(curCode);
    if (statLines) {
      statLines.textContent = lines.toString();
      if (currentMission && currentMission.constraints && currentMission.constraints.maxLines) {
        const limit = currentMission.constraints.maxLines;
        if (lines > limit) {
          statLines.style.color = '#ef4444';
          statLines.title = `PERINGATAN: Melebihi batas maksimal ${limit} baris!`;
        } else {
          statLines.style.color = '#00a67e';
          statLines.title = `AMAN: Memenuhi kuota maksimal ${limit} baris.`;
        }
      }
    }
  }

  function recordTrace(lineNo, command) {
    if (!traceTableBody) return;
    const stepNo = world.robot.stepCount;
    let beepersOnCell = world.getBeeperCount(world.robot.x, world.robot.y);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>#${stepNo}</strong></td>
      <td>Line ${lineNo || '-'}</td>
      <td><code>${escapeHtml(command || '-')}</code></td>
      <td>(${world.robot.x}, ${world.robot.y})</td>
      <td>${world.robot.dir}</td>
      <td>${world.robot.beepers}</td>
      <td>${beepersOnCell}</td>
    `;
    traceTableBody.prepend(tr);

    // Limit trace table to last 40 rows to avoid DOM lag
    if (traceTableBody.children.length > 40) {
      traceTableBody.removeChild(traceTableBody.lastChild);
    }
  }

  function renderCodeLines(activeLine = -1) {
    if (isEditMode) return;
    const lines = customCodeTextarea.value.split('\n');
    codeLinesList.innerHTML = '';

    lines.forEach((line, idx) => {
      const lineNo = idx + 1;
      const li = document.createElement('li');
      li.className = 'code-line';
      if (lineNo === activeLine) {
        li.classList.add('active');
        li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
      li.innerHTML = GvrInterpreter.highlightLine(line);
      codeLinesList.appendChild(li);
    });
  }

  // Execution Step
  function doStep() {
    if (interpreter.isFinished) {
      pause();
      log('Eksekusi selesai.', 'success');
      validateMissionObjectives(false);
      return;
    }

    try {
      const result = interpreter.step();
      world.render(liveCanvas);
      updateMetrics();

      if (result.error) {
        pause();
        playTone(180, 'sawtooth', 0.25, 0.08);
        log(result.error, 'error');
        renderCodeLines(result.lineNo);
        recordTrace(result.lineNo, `ERROR: ${result.error}`);
        validateMissionObjectives(false);
        return;
      }

      if (result.lineNo) renderCodeLines(result.lineNo);

      if (result.command) {
        log(`Baris ${result.lineNo}: ${result.command}`);
        recordTrace(result.lineNo, result.command);

        if (result.command.includes('pickbeeper')) playTone(880, 'sine', 0.12, 0.06);
        else if (result.command.includes('putbeeper')) playTone(440, 'sine', 0.12, 0.06);
        else if (result.command.includes('move')) playTone(520, 'sine', 0.04, 0.02);
      }

      if (result.isFinished) {
        pause();
        log(`Robot selesai! Total pergerakan/langkah: ${world.robot.stepCount} langkah.`, 'success');
        validateMissionObjectives(false);
      }
    } catch (err) {
      pause();
      log(`Runtime Error: ${err.message}`, 'error');
    }
  }

  function play() {
    if (isRunning) return;
    if (isEditMode) toggleEditor(false);

    if (interpreter.isFinished) resetSimulation();

    isRunning = true;
    btnPlay.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="4" width="4" height="16"/>
        <rect x="14" y="4" width="4" height="16"/>
      </svg> Pause
    `;
    btnPlay.classList.add('btn-primary');

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
    btnPlay.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg> Play
    `;
  }

  function resetSimulation() {
    pause();
    world.restoreSnapshot();
    world.render(liveCanvas);

    try {
      interpreter.loadSource(customCodeTextarea.value);
    } catch (err) {
      log(`Syntax Error: ${err.message}`, 'error');
    }

    if (traceTableBody) traceTableBody.innerHTML = '';
    updateMetrics();
    renderCodeLines(-1);
    clearLog();
    if (validationBanner) validationBanner.style.display = 'none';
  }

  function toggleEditor(forceEdit = null) {
    if (forceEdit !== null) isEditMode = forceEdit;
    else isEditMode = !isEditMode;

    if (isEditMode) {
      pause();
      codeViewerWrapper.style.display = 'none';
      customCodeTextarea.style.display = 'block';
      btnToggleEdit.textContent = 'Lihat Alur Eksekusi';
      btnToggleEdit.classList.add('highlight');
    } else {
      customCodeTextarea.style.display = 'none';
      codeViewerWrapper.style.display = 'block';
      btnToggleEdit.textContent = 'Edit Kodingan';
      btnToggleEdit.classList.remove('highlight');
      resetSimulation();
    }
  }

  // Objective Validation Engine
  function validateMissionObjectives(showAlertOnSuccess = true) {
    if (!currentMission || !validationBanner) return;

    const code = customCodeTextarea.value;
    const lines = GvrInterpreter.countEffectiveLines(code);
    const c = currentMission.constraints;
    const errors = [];
    const successes = [];

    // 1. Crash or Turned off check
    if (!world.robot.isOff) {
      errors.push('Robot belum mematikan sistem (harus diakhiri perintah turnoff).');
    } else {
      successes.push('Robot berhasil dimatikan dengan aman (turnoff).');
    }

    // 2. Beepers check
    let beepersInWorld = 0;
    world.beepers.forEach(cnt => beepersInWorld += cnt);

    if (c.mustClearAllBeepers) {
      if (beepersInWorld > 0) {
        errors.push(`Masih ada ${beepersInWorld} sampah beeper yang belum terambil di dunia!`);
      } else {
        successes.push(`Seluruh sampah beeper berhasil dipungut (Beeper di tas: ${world.robot.beepers}).`);
      }
    }

    // 3. Return to start position check
    if (c.mustReturnToStart) {
      const initR = currentMission.initialRobot;
      if (world.robot.x !== initR.x || world.robot.y !== initR.y) {
        errors.push(`Robot tidak kembali ke posisi awal (${initR.x}, ${initR.y}). Saat ini di (${world.robot.x}, ${world.robot.y}).`);
      } else {
        successes.push(`Robot berhasil kembali ke posisi awal (${initR.x}, ${initR.y}).`);
      }
    }

    // 4. Line count limit
    if (c.maxLines && c.maxLines < 999) {
      if (lines > c.maxLines) {
        errors.push(`Kode terdiri dari ${lines} baris, melebihi kuota maksimal ${c.maxLines} baris.`);
      } else {
        successes.push(`Jumlah baris (${lines} baris) memenuhi batas maksimal ${c.maxLines} baris.`);
      }
    }

    // 5. Required keywords check
    if (c.requiredKeywords) {
      c.requiredKeywords.forEach(kw => {
        const regex = new RegExp(`\\b${kw}\\b`, 'i');
        if (!regex.test(code)) {
          errors.push(`Program wajib menggunakan struktur '${kw}'!`);
        } else {
          successes.push(`Menggunakan struktur '${kw}'.`);
        }
      });
    }

    validationBanner.style.display = 'block';

    if (errors.length === 0) {
      playSuccessChord();
      validationBanner.className = 'validation-banner success';
      validationBanner.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 1.8rem;">🎉</span>
          <div>
            <h4 style="margin: 0; font-size: 1.1rem; color: #065f46;">SELAMAT! MISI SELESAI SEMPURNA!</h4>
            <p style="margin: 0.2rem 0 0; font-size: 0.88rem; color: #047857;">
              Hasil kodinganmu telah cocok 100% dengan target visual program dan memenuhi seluruh ketentuan aslab!
            </p>
            <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; font-size: 0.82rem; color: #065f46;">
              ${successes.map(s => `<li>✓ ${s}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
      log('VALIDASI BERHASIL: Seluruh kriteria misi terpenuhi!', 'success');
    } else {
      validationBanner.className = 'validation-banner error';
      validationBanner.innerHTML = `
        <div style="display: flex; align-items: start; gap: 0.75rem;">
          <span style="font-size: 1.8rem;">⚠️</span>
          <div>
            <h4 style="margin: 0; font-size: 1.05rem; color: #991b1b;">HASIL KODINGAN BELUM MEMENUHI TARGET</h4>
            <p style="margin: 0.2rem 0 0; font-size: 0.88rem; color: #b91c1c;">
              Periksa catatan berikut dan bandingkan dengan Target Output Program di sebelah kanan:
            </p>
            <ul style="margin: 0.5rem 0 0; padding-left: 1.2rem; font-size: 0.82rem; color: #991b1b;">
              ${errors.map(e => `<li>✗ ${e}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
      log(`VALIDASI GAGAL: ${errors.join(' | ')}`, 'warn');
    }
  }

  // Load Mission
  function loadMission(missionId) {
    pause();
    const mission = missions.find(m => m.id === missionId) || missions[0];
    currentMission = mission;

    // Update Sidebar Active state
    const items = missionSidebarList.querySelectorAll('.mission-nav-item');
    items.forEach(el => {
      if (el.getAttribute('data-id') === mission.id) el.classList.add('active');
      else el.classList.remove('active');
    });

    // Update Header Info
    missionTitle.textContent = `Misi ${mission.number}: ${mission.title}`;
    missionSource.textContent = mission.source;
    missionBadge.textContent = mission.badge;
    missionBadge.className = `clinic-badge ${mission.badgeType}`;
    missionPrompt.textContent = mission.prompt;
    missionConstraintText.textContent = `Batas: ${mission.constraints.maxLines ? mission.constraints.maxLines + ' baris' : 'Tanpa batas'}, Wajib: ${mission.constraints.requiredKeywords ? mission.constraints.requiredKeywords.join(', ') : '-'}`;
    missionTargetDesc.textContent = mission.targetState.description;

    if (logicExplanationBox) {
      logicExplanationBox.innerHTML = `
        <strong>💡 Analisis Logika &amp; Trik Aslab:</strong>
        <p style="margin: 0.4rem 0 0; white-space: pre-line; font-size: 0.88rem; color: #475569;">${mission.logicExplanation}</p>
      `;
    }

    // Configure World
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

    // Default: load starter code for students
    customCodeTextarea.value = mission.starterCode.trim();

    setupCanvases();
    resetSimulation();
    log(`Misi ${mission.number} dimuat: ${mission.title}`, 'info');
  }

  // Render Mission Sidebar
  function renderMissionSidebar() {
    if (!missionSidebarList) return;
    missionSidebarList.innerHTML = '';

    missions.forEach(m => {
      const btn = document.createElement('button');
      btn.className = `mission-nav-item ${m.id === currentMission.id ? 'active' : ''}`;
      btn.setAttribute('data-id', m.id);
      btn.innerHTML = `
        <div class="mission-item-header">
          <span class="mission-number">Misi #${m.number}</span>
          <span class="mission-cat">${escapeHtml(m.category)}</span>
        </div>
        <strong class="mission-item-title">${escapeHtml(m.title)}</strong>
        <span class="mission-item-source">${escapeHtml(m.source)}</span>
      `;
      btn.addEventListener('click', () => loadMission(m.id));
      missionSidebarList.appendChild(btn);
    });
  }

  // Event Listeners
  if (btnPlay) {
    btnPlay.addEventListener('click', () => {
      if (isRunning) pause();
      else play();
    });
  }

  if (btnStep) {
    btnStep.addEventListener('click', () => {
      pause();
      if (isEditMode) toggleEditor(false);
      doStep();
    });
  }

  if (btnReset) btnReset.addEventListener('click', resetSimulation);

  if (btnValidate) {
    btnValidate.addEventListener('click', () => {
      validateMissionObjectives(true);
    });
  }

  if (btnToggleEdit) {
    btnToggleEdit.addEventListener('click', () => toggleEditor());
  }

  if (btnLoadStarter) {
    btnLoadStarter.addEventListener('click', () => {
      if (currentMission) {
        customCodeTextarea.value = currentMission.starterCode.trim();
        resetSimulation();
        log('Template latihan siswa dimuat ulang.', 'info');
      }
    });
  }

  if (btnLoadSolution) {
    btnLoadSolution.addEventListener('click', () => {
      if (currentMission) {
        customCodeTextarea.value = currentMission.solutionCode.trim();
        resetSimulation();
        log('Solusi resmi aslab dimuat. Klik Step atau Play untuk melihat animasi alur kodenya!', 'success');
      }
    });
  }

  if (customCodeTextarea) {
    customCodeTextarea.addEventListener('input', () => {
      updateMetrics();
    });
  }

  if (speedSlider) {
    speedSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      const speeds = [800, 500, 250, 100, 30];
      currentSpeed = speeds[val - 1] || 250;
      const labels = ['Sangat Lambat', 'Lambat', 'Normal', 'Cepat', 'Kilat'];
      if (speedLabel) speedLabel.textContent = labels[val - 1];

      if (isRunning) {
        pause();
        play();
      }
    });
  }

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (document.activeElement === customCodeTextarea) return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (isRunning) pause();
      else play();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      pause();
      if (isEditMode) toggleEditor(false);
      doStep();
    } else if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      resetSimulation();
    }
  });

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Initialize
  renderMissionSidebar();
  loadMission(missions[0].id);
});
