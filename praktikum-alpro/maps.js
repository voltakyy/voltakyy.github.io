/**
 * GvRng Puzzles & Official Exam Maps
 * Formatted directly from:
 * - Soal Quiz Aslab.pdf (30 Okt 2026)
 * - QUIZ Dasprog B.pdf
 * - WhatsApp Archival Material (Ujian Tengah Jangka Panjang & Efisiensi Energi)
 */

window.GVR_MAPS = {
  // =========================================================================
  // PUZZLE 1: PAK MUKHLIS SPIRAL (SOAL ASLAB 1)
  // Max Lines Constraint: <= 9 Baris
  // =========================================================================
  spiral: {
    id: 'spiral',
    title: 'Puzzle 1: Ruangan Spiral Pak Mukhlis',
    source: 'Soal Quiz Aslab — No. 1',
    constraint: 'Maksimal 9 baris kode',
    description: 'Pak Mukhlis ingin menyapu setiap sudut ruangan berbentuk spiral. Di tiap sudut terdapat sejumlah sampah (beeper). Program harus mengumpulkan semua beeper dan berhenti di tengah spiral.',
    cols: 14,
    rows: 14,
    robot: { x: 4, y: 3, dir: 'EAST', beepers: 0 },
    beepers: [
      [11, 3, 1], // Sudut luar kanan bawah
      [11, 11, 1], // Sudut luar kanan atas
      [4, 11, 1], // Sudut luar kiri atas
      [4, 5, 1], // Sudut tengah kiri bawah
      [9, 5, 1], // Sudut tengah kanan bawah
      [9, 9, 1], // Sudut tengah kanan atas
      [6, 9, 1], // Sudut dalam kiri atas
      [6, 7, 1], // Sudut dalam kiri tengah
      [7, 7, 1]  // Pusat spiral
    ],
    // Dinding spiral konsentris
    hWalls: [
      // Dinding bawah luar
      [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2],
      // Dinding atas luar
      [4, 11], [5, 11], [6, 11], [7, 11], [8, 11], [9, 11], [10, 11],
      // Spiral dalam lapis 2
      [5, 4], [6, 4], [7, 4], [8, 4], [9, 4],
      [5, 9], [6, 9], [7, 9], [8, 9],
      // Spiral lapis 3
      [6, 6], [7, 6],
      [7, 8]
    ],
    vWalls: [
      // Dinding kanan luar
      [11, 3], [11, 4], [11, 5], [11, 6], [11, 7], [11, 8], [11, 9], [11, 10],
      // Dinding kiri luar
      [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10],
      // Spiral lapis 2
      [9, 5], [9, 6], [9, 7], [9, 8],
      [4, 5], [4, 6], [4, 7], [4, 8], [4, 9],
      // Spiral lapis 3
      [8, 7], [8, 8],
      [5, 7], [5, 8]
    ],
    solution: `# Solusi Resmi Aslab - Spiral Pak Mukhlis (7 Baris)
while front_is_clear:
    move
    if next_to_a_beeper:
        pickbeeper
    if front_is_blocked:
        turnleft
turnoff`
  },

  // =========================================================================
  // PUZZLE 2: INSPEKSI LORONG GEDUNG (QUIZ DASPROG B SOAL 1)
  // Max Lines Constraint: <= 35 Baris, Wajib define & if-else
  // =========================================================================
  inspeksi: {
    id: 'inspeksi',
    title: 'Puzzle 2: Robot Inspeksi Lorong Gedung',
    source: 'Quiz Dasprog B — Soal 1',
    constraint: 'Maksimal 35 baris, wajib define & percabangan if-else',
    description: 'Sebuah robot inspeksi ditugaskan memeriksa lorong-lorong berundak 3 menara di sebuah gedung. Robot menyusuri seluruh rute hingga ujung lorong, lalu kembali ke posisi awal di (4, 7).',
    cols: 14,
    rows: 15,
    robot: { x: 4, y: 7, dir: 'NORTH', beepers: 0 },
    beepers: [],
    // Dinding membatasi jalur lorong berundak
    hWalls: [
      // Tutup atas pilar 1 (y=10)
      [4, 10], [5, 10],
      // Dasar lekukan 1 (y=7)
      [5, 7], [6, 7],
      // Tutup atas pilar 2 (y=12)
      [6, 12], [7, 12],
      // Dasar lekukan 2 (y=8)
      [7, 8], [8, 8],
      // Tutup atas pilar 3 (y=13)
      [8, 13], [9, 13],
      // Ujung kanan turun & lorong pulang bawah (y=6)
      [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6],
      [9, 8], [10, 8]
    ],
    vWalls: [
      // Dinding samping luar kiri pilar 1
      [3, 7], [3, 8], [3, 9], [3, 10],
      // Dinding antara pilar 1 turun
      [4, 8], [4, 9],
      // Sisi kanan lekuk 1 naik ke pilar 2
      [5, 8],
      // Dinding pilar 2
      [5, 9], [5, 10], [5, 11], [5, 12],
      [6, 9], [6, 10], [6, 11],
      // Dinding pilar 3
      [7, 10], [7, 11], [7, 12], [7, 13],
      [8, 9], [8, 10], [8, 11], [8, 12],
      // Dinding luar kanan pilar 3 & lorong pulang
      [10, 7], [10, 8]
    ],
    solution: `# Solusi Resmi Quiz Dasprog B - Inspeksi Gedung (26 Baris)
define turnright:
    do 3:
        turnleft
define turnaround:
    turnleft
    turnleft
define inspect_corridor:
    while front_is_clear:
        move
    if right_is_clear:
        turnright
        move
        if right_is_clear:
            turnright
        else:
            turnleft
    else:
        turnleft
while not_facing_south:
    inspect_corridor
while front_is_clear:
    move
turnright
while front_is_clear:
    move
turnright
turnoff`
  }
};
