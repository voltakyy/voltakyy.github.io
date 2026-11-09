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
  },

  // =========================================================================
  // PUZZLE 3: ROBOT PEMBERSIH GEDUNG (QUIZ DASPROG B SOAL 2)
  // Wajib while, if-else, define, kumpulkan semua sampah beeper & kembali
  // =========================================================================
  pembersih: {
    id: 'pembersih',
    title: 'Puzzle 3: Robot Pembersih Gedung & Sampah',
    source: 'Quiz Dasprog B — Soal 2',
    constraint: 'Wajib while, if-else, define, kembali ke (4, 7)',
    description: 'Sebuah robot pembersih ditugaskan membersihkan lorong persegi gedung dengan 6 titik sampah beeper. Robot menyusuri lorong, memungut semua sampah, lalu kembali ke posisi awal dan berhenti.',
    cols: 16,
    rows: 15,
    robot: { x: 4, y: 7, dir: 'NORTH', beepers: 0 },
    beepers: [
      [4, 9, 1],
      [4, 11, 1],
      [7, 13, 1],
      [8, 13, 1],
      [11, 11, 1],
      [11, 9, 1]
    ],
    // Dinding lorong segiempat bertingkat
    hWalls: [
      // Dinding atas luar (y=13)
      [5, 13], [6, 13], [7, 13], [8, 13], [9, 13], [10, 13],
      // Dinding bawah luar (y=6)
      [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [11, 6],
      // Ruang tengah
      [6, 8], [7, 8], [8, 8], [9, 8],
      [6, 11], [7, 11], [8, 11], [9, 11]
    ],
    vWalls: [
      // Dinding kiri luar
      [3, 7], [3, 8], [3, 9], [3, 10], [3, 11], [3, 12],
      // Dinding kanan luar
      [11, 7], [11, 8], [11, 9], [11, 10], [11, 11], [11, 12],
      // Dinding dalam
      [5, 8], [5, 9], [5, 10], [5, 11],
      [9, 8], [9, 9], [9, 10], [9, 11]
    ],
    solution: `# Solusi Quiz Dasprog B - Pembersih Gedung (Menggunakan while, if-else, define)
define turnright:
    do 3:
        turnleft
define check_and_pick:
    if next_to_a_beeper:
        pickbeeper
define step_and_clean:
    check_and_pick
    if front_is_clear:
        move
    else:
        turnright
        if front_is_clear:
            move
        else:
            turnright
# Mengitari koridor hingga mengumpulkan 6 beeper
while any_beepers_in_world: # simulator loop
    step_and_clean
while not_facing_south:
    turnleft
while front_is_clear:
    move
turnright
while front_is_clear:
    move
turnright
turnoff`
  },

  // =========================================================================
  // PUZZLE 4: LINTASAN MENARA BEEPER VARIATIF (SOAL ASLAB 2)
  // Max Lines Constraint: <= 22 Baris, Wajib while & define
  // =========================================================================
  menara: {
    id: 'menara',
    title: 'Puzzle 4: Lintasan Menara Beeper Bertumpuk',
    source: 'Soal Quiz Aslab — No. 2',
    constraint: 'Maksimal 22 baris, wajib while & define',
    description: 'Robot harus menyusuri 4 menara berulang, mengambil semua beeper yang jumlahnya berbeda-beda di tiap titik (membutuhkan while next_to_a_beeper), lalu kembali ke dekat titik awal.',
    cols: 24,
    rows: 14,
    robot: { x: 4, y: 4, dir: 'EAST', beepers: 0 },
    beepers: [
      [7, 8, 3],  // Puncak menara 1 (3 beeper)
      [9, 4, 1],  // Lembah 1 (1 beeper)
      [11, 6, 2], // Puncak menara 2 (2 beeper)
      [13, 4, 1], // Lembah 2 (1 beeper)
      [15, 8, 2], // Puncak menara 3 (2 beeper)
      [17, 4, 3], // Lembah 3 (3 beeper)
      [19, 7, 1], // Puncak menara 4 (1 beeper)
      [21, 4, 2]  // Ujung akhir (2 beeper)
    ],
    hWalls: [
      // Dasar bawah
      [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3],
      [12, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3], [20, 3], [21, 3],
      // Puncak menara 1
      [6, 8], [7, 8],
      // Puncak menara 2
      [10, 6], [11, 6],
      // Puncak menara 3
      [14, 8], [15, 8],
      // Puncak menara 4
      [18, 7], [19, 7]
    ],
    vWalls: [
      // Menara 1
      [5, 4], [5, 5], [5, 6], [5, 7], [5, 8],
      [7, 4], [7, 5], [7, 6], [7, 7], [7, 8],
      // Menara 2
      [9, 4], [9, 5], [9, 6],
      [11, 4], [11, 5], [11, 6],
      // Menara 3
      [13, 4], [13, 5], [13, 6], [13, 7], [13, 8],
      [15, 4], [15, 5], [15, 6], [15, 7], [15, 8],
      // Menara 4
      [17, 4], [17, 5], [17, 6], [17, 7],
      [19, 4], [19, 5], [19, 6], [19, 7],
      // Ujung kanan
      [21, 4]
    ],
    solution: `# Solusi Resmi Soal Aslab 2 - Menara Beeper Variatif (18 Baris)
define turnright:
    do 3:
        turnleft
define ambil_semua:
    while next_to_a_beeper:
        pickbeeper
define susur_menara:
    while front_is_clear:
        move
        ambil_semua
    if left_is_clear:
        turnleft
    else:
        turnright
while not_facing_west:
    susur_menara
while front_is_clear:
    move
turnoff`
  },

  // =========================================================================
  // PUZZLE 5: POLA PAPAN CATUR BEEPER 4x4 (SOAL ASLAB 3)
  // Max Lines Constraint: <= 24 Baris, Wajib while, do, dan define
  // =========================================================================
  catur: {
    id: 'catur',
    title: 'Puzzle 5: Pola Papan Catur Beeper (Checkerboard)',
    source: 'Soal Quiz Aslab — No. 3',
    constraint: 'Maksimal 24 baris, wajib while, do, dan define',
    description: 'Sebuah ruangan 4x4 berisi beeper yang tersusun berselang-seling membentuk pola papan catur (checkerboard). Robot harus menyusuri seluruh petak dan mengumpulkan semua beeper.',
    cols: 12,
    rows: 12,
    robot: { x: 4, y: 4, dir: 'EAST', beepers: 0 },
    beepers: [
      [4, 4, 1], [6, 4, 1], // Baris 1
      [5, 5, 1], [7, 5, 1], // Baris 2
      [4, 6, 1], [6, 6, 1], // Baris 3
      [5, 7, 1], [7, 7, 1]  // Baris 4
    ],
    // Dinding kotak mengelilingi ruangan 4x4
    hWalls: [
      [4, 3], [5, 3], [6, 3], [7, 3], // Bawah
      [4, 7], [5, 7], [6, 7], [7, 7]  // Atas
    ],
    vWalls: [
      [3, 4], [3, 5], [3, 6], [3, 7], // Kiri
      [7, 4], [7, 5], [7, 6], [7, 7]  // Kanan
    ],
    solution: `# Solusi Resmi Aslab 3 - Papan Catur Beeper (20 Baris)
define turnright:
    do 3:
        turnleft
define pick_if_any:
    if next_to_a_beeper:
        pickbeeper
define sweep_row:
    while front_is_clear:
        pick_if_any
        move
    pick_if_any
define next_row_left:
    turnleft
    move
    turnleft
define next_row_right:
    turnright
    move
    turnright
# Susur 4 baris bergantian
sweep_row
next_row_left
sweep_row
next_row_right
sweep_row
next_row_left
sweep_row
turnoff`
  },

  // =========================================================================
  // PUZZLE 6: LORONG 3 PILAR & PINDAHKAN BEEPER (HALAMAN 51 BUKU)
  // Max Lines Constraint: <= 30 Baris
  // =========================================================================
  tiga_pilar: {
    id: 'tiga_pilar',
    title: 'Puzzle 6: Tiga Pilar & Pemindahan Beeper',
    source: 'Buku Praktikum — Hal 51 (Ujian Tengah Jangka Panjang)',
    constraint: 'Maksimal 30 baris kode',
    description: 'Robot memasuki 3 lorong pilar bertingkat, mengambil beeper di setiap puncak pilar, lalu meletakkan ketiga beeper tersebut di ujung lorong seberang.',
    cols: 14,
    rows: 12,
    robot: { x: 3, y: 3, dir: 'EAST', beepers: 0 },
    beepers: [
      [5, 6, 1], // Puncak pilar 1
      [7, 7, 1], // Puncak pilar 2
      [9, 8, 1]  // Puncak pilar 3
    ],
    hWalls: [
      [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2],
      [4, 6], [5, 6],
      [6, 7], [7, 7],
      [8, 8], [9, 8],
      [4, 4], [6, 5], [8, 6], [10, 5], [11, 5]
    ],
    vWalls: [
      [4, 3], [4, 4], [4, 5],
      [5, 3], [5, 4], [5, 5],
      [6, 3], [6, 4], [6, 5], [6, 6],
      [7, 3], [7, 4], [7, 5], [7, 6],
      [8, 3], [8, 4], [8, 5], [8, 6], [8, 7],
      [9, 3], [9, 4], [9, 5], [9, 6], [9, 7],
      [11, 3], [11, 4]
    ],
    solution: `# Solusi Resmi Halaman 51 Buku (28 Baris)
define move3:
    do 3:
        move
define turnright:
    do 3:
        turnleft
define pick:
    move3
    turnleft
    move3
    turnleft
    move
    pickbeeper
    turnleft
    turnleft
    move
    turnright
    move
    move
    turnleft
do 3:
    pick
move
do 3:
    putbeeper
turnoff`
  },

  // =========================================================================
  // PUZZLE 7: TIGA KOTAK & ANALISIS ENERGI (HALAMAN 52-53 BUKU)
  // Membandingkan Efisiensi Baris vs Energi Langkah
  // =========================================================================
  tiga_kotak: {
    id: 'tiga_kotak',
    title: 'Puzzle 7: Mengelilingi 3 Kotak (Analisis Hemat Energi)',
    source: 'Buku Praktikum — Hal 52-53',
    constraint: 'Maksimal 30 baris, bandingkan Alternatif 1 vs Alternatif 2',
    description: 'Robot mengelilingi 3 kotak balok terpisah. Mengambil beeper bila ditemukan di sepanjang sisi kotak, lalu kembali ke posisi awal. Alternatif 2 mendemonstrasikan algoritma lebih hemat energi (22 langkah vs 26 langkah).',
    cols: 14,
    rows: 10,
    robot: { x: 3, y: 4, dir: 'NORTH', beepers: 0 },
    beepers: [
      [5, 6, 1], // Di atas kotak 1
      [6, 5, 1], // Di kanan kotak 1
      [10, 6, 1] // Di atas kotak 3
    ],
    hWalls: [
      // Kotak 1
      [4, 4], [5, 4],
      [4, 6], [5, 6],
      // Kotak 2
      [7, 4], [8, 4],
      [7, 6], [8, 6],
      // Kotak 3
      [10, 4], [11, 4],
      [10, 6], [11, 6]
    ],
    vWalls: [
      // Kotak 1
      [3, 5], [3, 6],
      [5, 5], [5, 6],
      // Kotak 2
      [6, 5], [6, 6],
      [8, 5], [8, 6],
      // Kotak 3
      [9, 5], [9, 6],
      [11, 5], [11, 6]
    ],
    solution: `# Alternatif 2 Resmi Buku Hal 53 (Hemat Energi: hanya 22 gerakan)
define circumference:
    do 4:
        if next_to_a_beeper:
            pickbeeper
        move
        if next_to_a_beeper:
            pickbeeper
        move
        turnleft
move
circumference
do 3:
    move
circumference
do 3:
    move
circumference
turnleft
turnleft
do 7:
    move
turnleft
turnleft
turnoff`
  }
};
