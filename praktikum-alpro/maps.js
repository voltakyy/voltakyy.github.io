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
  }
};
