/**
 * GvRng 2D World Simulation Engine
 * Handles Authentic Cartesian Grid (Intersections at dots (x, y), Cells between dots, Dot-to-Dot Walls)
 */

class GvrWorld {
  constructor(cols = 15, rows = 15) {
    this.cols = cols;
    this.rows = rows;
    this.reset();
  }

  reset() {
    this.robot = {
      x: 1,
      y: 1,
      dir: 'EAST', // 'NORTH', 'EAST', 'SOUTH', 'WEST'
      beepers: 0,
      isOff: false,
      stepCount: 0
    };
    // Map of "x,y" -> beeper count
    this.beepers = new Map();
    // Wall sets:
    // hWalls: horizontal wall on Street s from Avenue a to a+1 (connects dot (a, s) to (a+1, s))
    // vWalls: vertical wall on Avenue a from Street s to s+1 (connects dot (a, s) to (a, s+1))
    this.hWalls = new Set();
    this.vWalls = new Set();
    this.initialSnapshot = null;
    this.pathHistory = []; // stores [{x, y}] coordinates visited
  }

  setRobot(x, y, dir = 'EAST', beepers = 0) {
    this.robot.x = x;
    this.robot.y = y;
    this.robot.dir = dir.toUpperCase();
    this.robot.beepers = beepers;
    this.robot.isOff = false;
    this.robot.stepCount = 0;
    this.pathHistory = [{ x, y }];
  }

  addBeeper(x, y, count = 1) {
    const key = `${x},${y}`;
    const cur = this.beepers.get(key) || 0;
    this.beepers.set(key, cur + count);
  }

  getBeeperCount(x, y) {
    return this.beepers.get(`${x},${y}`) || 0;
  }

  // Add horizontal wall segment on Street s from Avenue a to a+1
  addHWall(a, s) {
    this.hWalls.add(`${a},${s}`);
  }

  // Add vertical wall segment on Avenue a from Street s to s+1
  addVWall(a, s) {
    this.vWalls.add(`${a},${s}`);
  }

  // Save snapshot to allow resetting to the exact initial world state
  saveSnapshot() {
    this.initialSnapshot = {
      robot: { ...this.robot },
      beepers: new Map(this.beepers),
      hWalls: new Set(this.hWalls),
      vWalls: new Set(this.vWalls),
      cols: this.cols,
      rows: this.rows
    };
  }

  restoreSnapshot() {
    if (!this.initialSnapshot) return;
    this.robot = { ...this.initialSnapshot.robot, isOff: false, stepCount: 0 };
    this.beepers = new Map(this.initialSnapshot.beepers);
    this.hWalls = new Set(this.initialSnapshot.hWalls);
    this.vWalls = new Set(this.initialSnapshot.vWalls);
    this.cols = this.initialSnapshot.cols;
    this.rows = this.initialSnapshot.rows;
    this.pathHistory = [{ x: this.robot.x, y: this.robot.y }];
  }

  getLeftDir(dir) {
    const order = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    const idx = order.indexOf(dir);
    return order[(idx + 1) % 4];
  }

  getRightDir(dir) {
    const order = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    const idx = order.indexOf(dir);
    return order[(idx + 1) % 4];
  }

  // Comprehensive Sensor Suite according to GvRng Specification
  frontIsClear() {
    const { x, y, dir } = this.robot;
    if (dir === 'NORTH') {
      if (y >= this.rows - 1) return false;
      return !this.hWalls.has(`${x},${y + 1}`);
    } else if (dir === 'SOUTH') {
      if (y <= 1) return false;
      return !this.hWalls.has(`${x},${y}`);
    } else if (dir === 'EAST') {
      if (x >= this.cols - 1) return false;
      return !this.vWalls.has(`${x + 1},${y}`);
    } else if (dir === 'WEST') {
      if (x <= 1) return false;
      return !this.vWalls.has(`${x},${y}`);
    }
    return false;
  }

  frontIsBlocked() {
    return !this.frontIsClear();
  }

  leftIsClear() {
    const origDir = this.robot.dir;
    this.robot.dir = this.getLeftDir(origDir);
    const clear = this.frontIsClear();
    this.robot.dir = origDir;
    return clear;
  }

  leftIsBlocked() {
    return !this.leftIsClear();
  }

  rightIsClear() {
    const origDir = this.robot.dir;
    this.robot.dir = this.getRightDir(origDir);
    const clear = this.frontIsClear();
    this.robot.dir = origDir;
    return clear;
  }

  rightIsBlocked() {
    return !this.rightIsClear();
  }

  nextToABeeper() {
    return this.getBeeperCount(this.robot.x, this.robot.y) > 0;
  }

  notNextToABeeper() {
    return !this.nextToABeeper();
  }

  anyBeepersInBag() {
    return this.robot.beepers > 0;
  }

  noBeepersInBag() {
    return !this.anyBeepersInBag();
  }

  anyBeepersInWorld() {
    let total = 0;
    this.beepers.forEach(c => total += c);
    return total > 0;
  }

  noBeepersInWorld() {
    return !this.anyBeepersInWorld();
  }

  facingNorth() { return this.robot.dir === 'NORTH'; }
  notFacingNorth() { return this.robot.dir !== 'NORTH'; }
  facingSouth() { return this.robot.dir === 'SOUTH'; }
  notFacingSouth() { return this.robot.dir !== 'SOUTH'; }
  facingEast() { return this.robot.dir === 'EAST'; }
  notFacingEast() { return this.robot.dir !== 'EAST'; }
  facingWest() { return this.robot.dir === 'WEST'; }
  notFacingWest() { return this.robot.dir !== 'WEST'; }

  // Robot Primitive Actions
  move() {
    if (this.robot.isOff) throw new Error('Robot sudah dimatikan (turnoff)!');
    if (!this.frontIsClear()) {
      throw new Error(`TABRAKAN! Robot menabrak dinding di petak (${this.robot.x}, ${this.robot.y}) saat menghadap ${this.robot.dir}!`);
    }
    if (this.robot.dir === 'NORTH') this.robot.y += 1;
    else if (this.robot.dir === 'SOUTH') this.robot.y -= 1;
    else if (this.robot.dir === 'EAST') this.robot.x += 1;
    else if (this.robot.dir === 'WEST') this.robot.x -= 1;
    this.robot.stepCount += 1;
    this.pathHistory.push({ x: this.robot.x, y: this.robot.y });
  }

  turnleft() {
    if (this.robot.isOff) throw new Error('Robot sudah dimatikan (turnoff)!');
    this.robot.dir = this.getLeftDir(this.robot.dir);
    this.robot.stepCount += 1;
  }

  pickbeeper() {
    if (this.robot.isOff) throw new Error('Robot sudah dimatikan (turnoff)!');
    const key = `${this.robot.x},${this.robot.y}`;
    const count = this.beepers.get(key) || 0;
    if (count <= 0) {
      throw new Error(`ERROR! Tidak ada beeper di petak (${this.robot.x}, ${this.robot.y}) untuk diambil (pickbeeper)!`);
    }
    if (count === 1) this.beepers.delete(key);
    else this.beepers.set(key, count - 1);
    this.robot.beepers += 1;
    this.robot.stepCount += 1;
  }

  putbeeper() {
    if (this.robot.isOff) throw new Error('Robot sudah dimatikan (turnoff)!');
    if (this.robot.beepers <= 0) {
      throw new Error('ERROR! Tas beeper robot kosong, tidak bisa putbeeper!');
    }
    this.robot.beepers -= 1;
    this.addBeeper(this.robot.x, this.robot.y, 1);
    this.robot.stepCount += 1;
  }

  turnoff() {
    this.robot.isOff = true;
  }

  // Render to HTML5 Canvas
  render(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Viewport padding
    const padX = 40;
    const padY = 40;
    const availW = canvas.width / dpr - padX * 2;
    const availH = canvas.height / dpr - padY * 2;

    const cellW = availW / (this.cols - 1 || 1);
    const cellH = availH / (this.rows - 1 || 1);
    const cellSize = Math.min(cellW, cellH, 44);

    const gridW = (this.cols - 1) * cellSize;
    const gridH = (this.rows - 1) * cellSize;
    const startX = padX + ((availW - gridW) / 2);
    const startY = (canvas.height / dpr) - padY - ((availH - gridH) / 2);

    // Coord transform: (gx, gy) in 1..cols, 1..rows -> Canvas coords for grid intersections (dots)
    const toPx = (gx, gy) => ({
      px: startX + (gx - 1) * cellSize,
      py: startY - (gy - 1) * cellSize
    });

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    // 1. Grid Dots & Axes Coordinates
    ctx.fillStyle = '#64748b';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let x = 1; x <= this.cols; x++) {
      for (let y = 1; y <= this.rows; y++) {
        const { px, py } = toPx(x, y);

        // Dot
        ctx.beginPath();
        ctx.arc(px, py, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = '#94a3b8';
        ctx.fill();

        // Label on bottom and left axis
        if (y === 1) {
          ctx.fillStyle = '#64748b';
          ctx.fillText(x.toString(), px, py + 18);
        }
        if (x === 1) {
          ctx.fillStyle = '#64748b';
          ctx.fillText(y.toString(), px - 18, py);
        }
      }
    }

    // 1b. Boundary Walls (Avenue 1 and Street 1)
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    // Western boundary (Avenue 1)
    const pBL = toPx(1, 1);
    const pTL = toPx(1, this.rows);
    ctx.beginPath();
    ctx.moveTo(pBL.px, pBL.py);
    ctx.lineTo(pTL.px, pTL.py);
    ctx.stroke();

    // Southern boundary (Street 1)
    const pBR = toPx(this.cols, 1);
    ctx.beginPath();
    ctx.moveTo(pBL.px, pBL.py);
    ctx.lineTo(pBR.px, pBR.py);
    ctx.stroke();

    // 2. Path Trail Trace (through cell centers)
    if (this.pathHistory && this.pathHistory.length > 1) {
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 102, 204, 0.35)';
      ctx.lineWidth = 3;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      const pStart = toPx(this.pathHistory[0].x + 0.5, this.pathHistory[0].y + 0.5);
      ctx.moveTo(pStart.px, pStart.py);
      for (let i = 1; i < this.pathHistory.length; i++) {
        const pt = toPx(this.pathHistory[i].x + 0.5, this.pathHistory[i].y + 0.5);
        ctx.lineTo(pt.px, pt.py);
      }
      ctx.stroke();
      ctx.restore();
    }

    // 3. Walls (Drawn directly dot-to-dot!)
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    // Horizontal walls on Street s from Ave a to a+1
    this.hWalls.forEach(key => {
      const [a, s] = key.split(',').map(Number);
      const p1 = toPx(a, s);
      const p2 = toPx(a + 1, s);
      ctx.beginPath();
      ctx.moveTo(p1.px, p1.py);
      ctx.lineTo(p2.px, p2.py);
      ctx.stroke();
    });

    // Vertical walls on Ave a from Street s to s+1
    this.vWalls.forEach(key => {
      const [a, s] = key.split(',').map(Number);
      const p1 = toPx(a, s);
      const p2 = toPx(a, s + 1);
      ctx.beginPath();
      ctx.moveTo(p1.px, p1.py);
      ctx.lineTo(p2.px, p2.py);
      ctx.stroke();
    });

    // 4. Beepers (Squarely inside cells (gx + 0.5, gy + 0.5))
    this.beepers.forEach((count, key) => {
      if (count <= 0) return;
      const [gx, gy] = key.split(',').map(Number);
      const { px, py } = toPx(gx + 0.5, gy + 0.5);

      // Outer ring
      ctx.beginPath();
      ctx.arc(px, py, cellSize * 0.36, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
      ctx.fill();
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Inner badge count
      ctx.fillStyle = '#1d4ed8';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillText(count.toString(), px, py + 1);
    });

    // 5. Robot Guido (Squarely inside cell (x + 0.5, y + 0.5))
    const rpos = toPx(this.robot.x + 0.5, this.robot.y + 0.5);
    ctx.save();
    ctx.translate(rpos.px, rpos.py);

    // Rotation angle based on direction
    let angle = 0;
    if (this.robot.dir === 'NORTH') angle = -Math.PI / 2;
    else if (this.robot.dir === 'SOUTH') angle = Math.PI / 2;
    else if (this.robot.dir === 'WEST') angle = Math.PI;
    else if (this.robot.dir === 'EAST') angle = 0;
    ctx.rotate(angle);

    // Draw Robot Body (Modern Arrow-Wedge like Guido van Robot)
    const rSize = cellSize * 0.44;
    ctx.beginPath();
    ctx.moveTo(rSize, 0); // Nose
    ctx.lineTo(-rSize * 0.75, -rSize * 0.75); // Left fin
    ctx.lineTo(-rSize * 0.4, 0); // Center notch
    ctx.lineTo(-rSize * 0.75, rSize * 0.75); // Right fin
    ctx.closePath();

    if (this.robot.isOff) {
      ctx.fillStyle = '#64748b'; // Grayed out when off
      ctx.strokeStyle = '#334155';
    } else {
      ctx.fillStyle = '#0066cc';
      ctx.strokeStyle = '#004c99';
    }
    ctx.lineWidth = 2.5;
    ctx.fill();
    ctx.stroke();

    // Direction marker (bright amber eye)
    ctx.beginPath();
    ctx.arc(rSize * 0.25, 0, 3, 0, Math.PI * 2);
    ctx.fillStyle = this.robot.isOff ? '#94a3b8' : '#f59e0b';
    ctx.fill();

    ctx.restore();
    ctx.restore();
  }

  // Render Static Target Preview Canvas
  renderTargetPreview(canvas, targetDef) {
    if (!canvas || !targetDef) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const padX = 40;
    const padY = 40;
    const availW = canvas.width / dpr - padX * 2;
    const availH = canvas.height / dpr - padY * 2;

    const cellW = availW / (this.cols - 1 || 1);
    const cellH = availH / (this.rows - 1 || 1);
    const cellSize = Math.min(cellW, cellH, 44);

    const gridW = (this.cols - 1) * cellSize;
    const gridH = (this.rows - 1) * cellSize;
    const startX = padX + ((availW - gridW) / 2);
    const startY = (canvas.height / dpr) - padY - ((availH - gridH) / 2);

    const toPx = (gx, gy) => ({
      px: startX + (gx - 1) * cellSize,
      py: startY - (gy - 1) * cellSize
    });

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    // 1. Grid Dots & Coordinates
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let x = 1; x <= this.cols; x++) {
      for (let y = 1; y <= this.rows; y++) {
        const { px, py } = toPx(x, y);
        ctx.beginPath();
        ctx.arc(px, py, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = '#cbd5e1';
        ctx.fill();

        if (y === 1) {
          ctx.fillStyle = '#64748b';
          ctx.fillText(x.toString(), px, py + 18);
        }
        if (x === 1) {
          ctx.fillStyle = '#64748b';
          ctx.fillText(y.toString(), px - 18, py);
        }
      }
    }

    // 1b. Boundary Walls
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    const pBL = toPx(1, 1);
    const pTL = toPx(1, this.rows);
    ctx.beginPath();
    ctx.moveTo(pBL.px, pBL.py);
    ctx.lineTo(pTL.px, pTL.py);
    ctx.stroke();

    const pBR = toPx(this.cols, 1);
    ctx.beginPath();
    ctx.moveTo(pBL.px, pBL.py);
    ctx.lineTo(pBR.px, pBR.py);
    ctx.stroke();

    // 2. Target Beepers
    if (targetDef.remainingBeepers > 0 && targetDef.beeperPositions) {
      targetDef.beeperPositions.forEach(([gx, gy, count]) => {
        const { px, py } = toPx(gx + 0.5, gy + 0.5);
        ctx.beginPath();
        ctx.arc(px, py, cellSize * 0.36, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 166, 126, 0.15)';
        ctx.fill();
        ctx.strokeStyle = '#00a67e';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.fillStyle = '#008a69';
        ctx.font = 'bold 12px "JetBrains Mono", monospace';
        ctx.fillText(count.toString(), px, py + 1);
      });
    }

    // 3. Walls
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    this.hWalls.forEach(key => {
      const [a, s] = key.split(',').map(Number);
      const p1 = toPx(a, s);
      const p2 = toPx(a + 1, s);
      ctx.beginPath();
      ctx.moveTo(p1.px, p1.py);
      ctx.lineTo(p2.px, p2.py);
      ctx.stroke();
    });

    this.vWalls.forEach(key => {
      const [a, s] = key.split(',').map(Number);
      const p1 = toPx(a, s);
      const p2 = toPx(a, s + 1);
      ctx.beginPath();
      ctx.moveTo(p1.px, p1.py);
      ctx.lineTo(p2.px, p2.py);
      ctx.stroke();
    });

    // 4. Target Robot Position (Emerald Green Finish Outline)
    if (targetDef.finalRobot) {
      const r = targetDef.finalRobot;
      const rpos = toPx(r.x + 0.5, r.y + 0.5);
      ctx.save();
      ctx.translate(rpos.px, rpos.py);

      let angle = 0;
      if (r.dir === 'NORTH') angle = -Math.PI / 2;
      else if (r.dir === 'SOUTH') angle = Math.PI / 2;
      else if (r.dir === 'WEST') angle = Math.PI;
      else if (r.dir === 'EAST') angle = 0;
      ctx.rotate(angle);

      const rSize = cellSize * 0.44;
      ctx.beginPath();
      ctx.moveTo(rSize, 0);
      ctx.lineTo(-rSize * 0.75, -rSize * 0.75);
      ctx.lineTo(-rSize * 0.4, 0);
      ctx.lineTo(-rSize * 0.75, rSize * 0.75);
      ctx.closePath();

      ctx.fillStyle = '#00a67e';
      ctx.strokeStyle = '#006647';
      ctx.lineWidth = 2.5;
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(rSize * 0.25, 0, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ctx.restore();

      // Finish Badge Flag
      ctx.fillStyle = '#008a69';
      ctx.font = 'bold 11px "Inter", sans-serif';
      ctx.fillText(`FINISH (${r.x}, ${r.y})`, rpos.px, rpos.py - cellSize * 0.65);
    }

    ctx.restore();
  }
}

// Export to window for browser access
window.GvrWorld = GvrWorld;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GvrWorld };
}
