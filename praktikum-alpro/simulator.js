/**
 * GvRng 2D World Simulation Engine
 * Handles Cartesian Grid (1,1 bottom-left), Walls, Beepers, and Robot State
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
    // Wall sets: horizontal walls (above cell x,y) and vertical walls (right of cell x,y)
    this.hWalls = new Set(); // wall between (x, y) and (x, y+1)
    this.vWalls = new Set(); // wall between (x, y) and (x+1, y)
    this.initialSnapshot = null;
  }

  setRobot(x, y, dir = 'EAST', beepers = 0) {
    this.robot.x = x;
    this.robot.y = y;
    this.robot.dir = dir.toUpperCase();
    this.robot.beepers = beepers;
    this.robot.isOff = false;
    this.robot.stepCount = 0;
  }

  addBeeper(x, y, count = 1) {
    const key = `${x},${y}`;
    const cur = this.beepers.get(key) || 0;
    this.beepers.set(key, cur + count);
  }

  getBeeperCount(x, y) {
    return this.beepers.get(`${x},${y}`) || 0;
  }

  // Add horizontal wall segment between (x, y) and (x, y+1)
  addHWall(x, y) {
    this.hWalls.add(`${x},${y}`);
  }

  // Add vertical wall segment between (x, y) and (x+1, y)
  addVWall(x, y) {
    this.vWalls.add(`${x},${y}`);
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
  }

  // Check if robot can move forward
  frontIsClear() {
    const { x, y, dir } = this.robot;
    if (dir === 'NORTH') {
      if (y >= this.rows) return false;
      return !this.hWalls.has(`${x},${y}`);
    } else if (dir === 'SOUTH') {
      if (y <= 1) return false;
      return !this.hWalls.has(`${x},${y - 1}`);
    } else if (dir === 'EAST') {
      if (x >= this.cols) return false;
      return !this.vWalls.has(`${x},${y}`);
    } else if (dir === 'WEST') {
      if (x <= 1) return false;
      return !this.vWalls.has(`${x - 1},${y}`);
    }
    return false;
  }

  // Sensors
  leftIsClear() {
    const origDir = this.robot.dir;
    this.robot.dir = this.getLeftDir(origDir);
    const clear = this.frontIsClear();
    this.robot.dir = origDir;
    return clear;
  }

  rightIsClear() {
    const origDir = this.robot.dir;
    this.robot.dir = this.getRightDir(origDir);
    const clear = this.frontIsClear();
    this.robot.dir = origDir;
    return clear;
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

  nextToABeeper() {
    return this.getBeeperCount(this.robot.x, this.robot.y) > 0;
  }

  anyBeepersInBag() {
    return this.robot.beepers > 0;
  }

  // Robot Primitive Actions
  move() {
    if (this.robot.isOff) throw new Error('Robot sudah dimatikan (turnoff)!');
    if (!this.frontIsClear()) {
      throw new Error(`TABRAKAN! Robot menabrak dinding di koordinat (${this.robot.x}, ${this.robot.y}) saat menghadap ${this.robot.dir}!`);
    }
    if (this.robot.dir === 'NORTH') this.robot.y += 1;
    else if (this.robot.dir === 'SOUTH') this.robot.y -= 1;
    else if (this.robot.dir === 'EAST') this.robot.x += 1;
    else if (this.robot.dir === 'WEST') this.robot.x -= 1;
    this.robot.stepCount += 1;
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
      throw new Error(`ERROR! Tidak ada beeper di koordinat (${this.robot.x}, ${this.robot.y}) untuk diambil (pickbeeper)!`);
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
    const padX = 36;
    const padY = 36;
    const availW = canvas.width / dpr - padX * 2;
    const availH = canvas.height / dpr - padY * 2;

    const cellW = availW / (this.cols - 1 || 1);
    const cellH = availH / (this.rows - 1 || 1);
    const cellSize = Math.min(cellW, cellH, 46);

    // Center grid in canvas
    const gridW = (this.cols - 1) * cellSize;
    const gridH = (this.rows - 1) * cellSize;
    const startX = padX + ((availW - gridW) / 2);
    const startY = (canvas.height / dpr) - padY - ((availH - gridH) / 2);

    // Coord transform: (x, y) in 1..cols, 1..rows -> Canvas coords
    const toPx = (gx, gy) => ({
      px: startX + (gx - 1) * cellSize,
      py: startY - (gy - 1) * cellSize
    });

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    // 1. Grid Dots & Axes Coordinates
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let x = 1; x <= this.cols; x++) {
      for (let y = 1; y <= this.rows; y++) {
        const { px, py } = toPx(x, y);

        // Dot
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
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

    // 2. Beepers
    this.beepers.forEach((count, key) => {
      if (count <= 0) return;
      const [gx, gy] = key.split(',').map(Number);
      const { px, py } = toPx(gx, gy);

      // Outer ring
      ctx.beginPath();
      ctx.arc(px, py, cellSize * 0.34, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
      ctx.fill();
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Inner badge or count
      ctx.fillStyle = '#1d4ed8';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillText(count.toString(), px, py + 1);
    });

    // 3. Walls (Red solid thick lines with subtle glow)
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    // Horizontal walls: between (x,y) and (x, y+1)
    this.hWalls.forEach(key => {
      const [x, y] = key.split(',').map(Number);
      // In GvRng, a horizontal wall at (x, y) sits midway between y and y+1, extending from x-0.5 to x+0.5
      const p1 = toPx(x - 0.5, y + 0.5);
      const p2 = toPx(x + 0.5, y + 0.5);
      ctx.beginPath();
      ctx.moveTo(p1.px, p1.py);
      ctx.lineTo(p2.px, p2.py);
      ctx.stroke();
    });

    // Vertical walls: between (x,y) and (x+1, y)
    this.vWalls.forEach(key => {
      const [x, y] = key.split(',').map(Number);
      // In GvRng, a vertical wall sits midway between x and x+1, extending from y-0.5 to y+0.5
      const p1 = toPx(x + 0.5, y - 0.5);
      const p2 = toPx(x + 0.5, y + 0.5);
      ctx.beginPath();
      ctx.moveTo(p1.px, p1.py);
      ctx.lineTo(p2.px, p2.py);
      ctx.stroke();
    });

    // 4. Robot Guido
    const rpos = toPx(this.robot.x, this.robot.y);
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
    const rSize = cellSize * 0.42;
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
}

// Export to window for browser access
window.GvrWorld = GvrWorld;
