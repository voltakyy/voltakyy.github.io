/**
 * Praktikum Alpro GvRng — Main Application Controller
 * Handles UI interactions, Step-by-Step debugger, canvas rendering loop,
 * and seamless map loading.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Elements
  const canvas = document.getElementById('worldCanvas');
  const codeLinesList = document.getElementById('codeLinesList');
  const customCodeTextarea = document.getElementById('customCodeTextarea');
  const codeViewerWrapper = document.getElementById('codeViewerWrapper');
  const toggleEditBtn = document.getElementById('toggleEditBtn');
  const loadSolutionBtn = document.getElementById('loadSolutionBtn');
  const mapSelect = document.getElementById('mapSelect');

  // Controls
  const btnPlay = document.getElementById('btnPlay');
  const btnStep = document.getElementById('btnStep');
  const btnReset = document.getElementById('btnReset');
  const speedSlider = document.getElementById('speedSlider');
  const speedLabel = document.getElementById('speedLabel');

  // Metrics
  const statPos = document.getElementById('statPos');
  const statDir = document.getElementById('statDir');
  const statBag = document.getElementById('statBag');
  const statWorld = document.getElementById('statWorld');
  const statSteps = document.getElementById('statSteps');
  const statLines = document.getElementById('statLines');
  const consoleLog = document.getElementById('consoleLog');

  // State
  let world = new GvrWorld(15, 15);
  let interpreter = new GvrInterpreter(world);
  let isRunning = false;
  let playInterval = null;
  let currentSpeed = 250; // ms per step
  let isEditMode = false;
  let activeMapKey = 'spiral';

  // Resize canvas for sharp retina display
  function setupCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 600;
    const h = rect.height || 480;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    world.render(canvas);
  }

  window.addEventListener('resize', () => {
    setupCanvas();
  });

  // 2. Logging helper
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
    if (consoleLog) consoleLog.innerHTML = '<div class="log-entry info">Simulator siap. Pilih soal dan jalankan kode!</div>';
  }

  // 3. UI Update Helpers
  function updateMetrics() {
    if (statPos) statPos.textContent = `(${world.robot.x}, ${world.robot.y})`;
    if (statDir) statDir.textContent = world.robot.dir;
    if (statBag) statBag.textContent = world.robot.beepers.toString();
    
    // Count total beepers in world
    let totalInWorld = 0;
    world.beepers.forEach(c => totalInWorld += c);
    if (statWorld) statWorld.textContent = totalInWorld.toString();
    if (statSteps) statSteps.textContent = world.robot.stepCount.toString();

    // Effective lines of current code
    const curCode = customCodeTextarea.value;
    const lines = GvrInterpreter.countEffectiveLines(curCode);
    if (statLines) statLines.textContent = lines.toString();
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
        // Scroll active line into view smoothly
        li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
      li.innerHTML = GvrInterpreter.highlightLine(line);
      codeLinesList.appendChild(li);
    });
  }

  // 4. Execution Logic
  function doStep() {
    if (interpreter.isFinished) {
      pause();
      log('Eksekusi selesai.', 'success');
      return;
    }

    try {
      const result = interpreter.step();
      world.render(canvas);
      updateMetrics();

      if (result.error) {
        pause();
        log(result.error, 'error');
        renderCodeLines(result.lineNo);
        return;
      }

      if (result.lineNo) {
        renderCodeLines(result.lineNo);
      }

      if (result.command) {
        log(`Baris ${result.lineNo}: ${result.command}`);
      }

      if (result.isFinished) {
        pause();
        log(`Robot selesai! Total pergerakan/langkah: ${world.robot.stepCount} langkah.`, 'success');
      }
    } catch (err) {
      pause();
      log(`Runtime Error: ${err.message}`, 'error');
    }
  }

  function play() {
    if (isRunning) return;

    if (isEditMode) {
      toggleEditor(false); // switch back to viewer
    }

    // If finished or newly reset, reload
    if (interpreter.isFinished) {
      resetSimulation();
    }

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
      if (interpreter.isFinished) {
        pause();
      }
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
    world.render(canvas);

    try {
      interpreter.loadSource(customCodeTextarea.value);
    } catch (err) {
      log(`Syntax Error: ${err.message}`, 'error');
    }

    updateMetrics();
    renderCodeLines(-1);
    clearLog();
    log('Simulasi di-reset ke kondisi awal.', 'info');
  }

  // 5. Toggle Editor vs Line Viewer
  function toggleEditor(forceEdit = null) {
    if (forceEdit !== null) isEditMode = forceEdit;
    else isEditMode = !isEditMode;

    if (isEditMode) {
      pause();
      codeViewerWrapper.style.display = 'none';
      customCodeTextarea.style.display = 'block';
      toggleEditBtn.textContent = 'Tampilkan Alur';
      toggleEditBtn.classList.add('highlight');
    } else {
      customCodeTextarea.style.display = 'none';
      codeViewerWrapper.style.display = 'block';
      toggleEditBtn.textContent = 'Edit Kode';
      toggleEditBtn.classList.remove('highlight');
      resetSimulation();
    }
  }

  // 6. Map Loader (Puzzles from PDF & Books)
  window.loadMapAndSolution = function(mapKey) {
    activeMapKey = mapKey;
    const mapDef = window.GVR_MAPS && window.GVR_MAPS[mapKey];
    if (!mapDef) return;

    pause();
    world.cols = mapDef.cols || 15;
    world.rows = mapDef.rows || 15;
    world.reset();

    // Setup robot
    world.setRobot(mapDef.robot.x, mapDef.robot.y, mapDef.robot.dir, mapDef.robot.beepers || 0);

    // Setup beepers
    if (mapDef.beepers) {
      mapDef.beepers.forEach(([x, y, count]) => {
        world.addBeeper(x, y, count || 1);
      });
    }

    // Setup walls
    if (mapDef.hWalls) {
      mapDef.hWalls.forEach(([x, y]) => world.addHWall(x, y));
    }
    if (mapDef.vWalls) {
      mapDef.vWalls.forEach(([x, y]) => world.addVWall(x, y));
    }

    world.saveSnapshot();
    setupCanvas();

    // Load default solution code
    customCodeTextarea.value = mapDef.solution.trim();
    updateMetrics();
    renderCodeLines(-1);
    clearLog();
    log(`Berhasil memuat: ${mapDef.title} (${mapDef.source})`, 'info');
    if (mapDef.constraint) {
      log(`Constraint: ${mapDef.constraint}`, 'warn');
    }
  };

  // 7. Event Listeners
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

  if (btnReset) {
    btnReset.addEventListener('click', resetSimulation);
  }

  if (toggleEditBtn) {
    toggleEditBtn.addEventListener('click', () => toggleEditor());
  }

  if (loadSolutionBtn) {
    loadSolutionBtn.addEventListener('click', () => {
      const mapDef = window.GVR_MAPS && window.GVR_MAPS[activeMapKey];
      if (mapDef) {
        customCodeTextarea.value = mapDef.solution.trim();
        resetSimulation();
        log('Solusi resmi dimuat ulang.', 'success');
      }
    });
  }

  if (mapSelect) {
    mapSelect.addEventListener('change', (e) => {
      window.loadMapAndSolution(e.target.value);
    });
  }

  if (speedSlider) {
    speedSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      // Map 1..5 to ms: 1=800ms, 2=500ms, 3=250ms, 4=100ms, 5=30ms
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

  // 8. Navigation Tab Switcher
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        if (targetId === 'tabSimulator') {
          setTimeout(setupCanvas, 50);
        }
      }
    });
  });

  // Initial load
  setTimeout(() => {
    setupCanvas();
    if (window.GVR_MAPS && window.GVR_MAPS['spiral']) {
      window.loadMapAndSolution('spiral');
    }
  }, 100);
});
