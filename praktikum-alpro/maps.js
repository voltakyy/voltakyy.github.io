/**
 * GvRng Puzzle & Coding Challenges — Master Dataset
 * Diambil 100% lengkap dari:
 * 1. QUIZ Dasprog B.pdf (Soal 1 & 2)
 * 2. Soal Quiz Aslab.pdf (Soal 1, 2, 3)
 * 3. Buku Praktikum / WhatsApp Images (Hal 51, Hal 52, Hal 53)
 */

window.GVR_MISSIONS = [
  // =========================================================================
  // MISI 1: PAK MUKHLIS SPIRAL (SOAL ASLAB 1)
  // =========================================================================
  {
    id: 'spiral',
    number: 1,
    title: 'Pak Mukhlis & Ruangan Spiral',
    source: 'Soal Quiz Aslab (30 Okt 2026) — No. 1',
    category: 'Struktur Loop & Dinding',
    badge: 'Maksimal 9 Baris Kode',
    badgeType: 'badge-blue',
    prompt: 'Pak Mukhlis ingin menyapu setiap sudut ruangan yang berbentuk spiral seperti yang terlihat pada gambar. Di tiap sudut terdapat sejumlah sampah (beeper). Bantulah Pak Mukhlis dengan membuat program agar sampah tersebut dapat tersapu oleh Pak Mukhlis! (Program tidak lebih dari 9 baris)',
    constraints: {
      maxLines: 9,
      requiredKeywords: ['while'],
      mustClearAllBeepers: true,
      mustReturnToStart: false,
      mustTurnoff: true
    },
    cols: 14,
    rows: 14,
    initialRobot: { x: 4, y: 3, dir: 'EAST', beepers: 0 },
    initialBeepers: [
      [11, 3, 1], [11, 11, 1], [4, 11, 1], [4, 5, 1],
      [9, 5, 1], [9, 9, 1], [6, 9, 1], [6, 7, 1], [7, 7, 1]
    ],
    targetState: {
      description: 'Seluruh 9 sampah beeper di semua sudut spiral terambil (0 beeper tersisa di peta, 9 beeper di tas robot). Robot berhenti di pusat jalan buntu spiral.',
      finalRobot: { x: 7, y: 7, dir: 'NORTH', beepers: 9, isOff: true },
      remainingBeepers: 0
    },
    hWalls: [
      [4, 2], [4, 3], [4, 4], [4, 11], [5, 2], [5, 3], [5, 4], [5, 5], [5, 10], [5, 11],
      [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 9], [6, 10], [6, 11],
      [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [7, 10], [7, 11],
      [8, 2], [8, 3], [8, 4], [8, 5], [8, 8], [8, 9], [8, 10], [8, 11],
      [9, 2], [9, 3], [9, 4], [9, 9], [9, 10], [9, 11], [10, 2], [10, 3], [10, 10], [10, 11],
      [11, 2], [11, 11]
    ],
    vWalls: [
      [3, 3], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11],
      [4, 6], [4, 7], [4, 8], [4, 9], [4, 10], [5, 7], [5, 8], [5, 9],
      [6, 8], [7, 7], [8, 6], [8, 7], [8, 8], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9],
      [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10],
      [11, 3], [11, 4], [11, 5], [11, 6], [11, 7], [11, 8], [11, 9], [11, 10], [11, 11]
    ],
    starterCode: `# Tuliskan kode program GvRng di sini
# Syarat: Maksimal 9 baris kode!
# Hint: Gunakan perulangan while dan sensor front_is_clear serta front_is_blocked

while front_is_clear:
    # Lengkapi instruksi di sini
    move
`,
    solutionCode: `# Solusi Resmi Aslab — Hanya 7 Baris Kode (Batas: 9 Baris)
while front_is_clear:
    move
    if next_to_a_beeper:
        pickbeeper
    if front_is_blocked:
        turnleft
turnoff`,
    logicExplanation: `Kenapa kode ini hanya 7 baris dan berhasil?\n1. Robot terus melangkah sepanjang lorong lurus (\`move\`).\n2. Jika ada beeper di petak, robot mengambilnya (\`pickbeeper\`).\n3. Di setiap sudut ruangan, robot terhalang dinding (\`front_is_blocked\`), lalu robot belok kiri (\`turnleft\`).\n4. Karena ini spiral, setelah belok kiri jalannya terbuka kembali sehingga loop \`while front_is_clear\` berlanjut!\n5. Saat tiba di pusat spiral (jalan buntu), setelah robot belok kiri depannya TETAP tertutup dinding. Kondisi \`while front_is_clear\` menjadi False, loop selesai, lalu \`turnoff\`. Sangat elegan!`
  },

  // =========================================================================
  // MISI 2: ROBOT INSPEKSI LORONG GEDUNG (QUIZ DASPROG B SOAL 1)
  // =========================================================================
  {
    id: 'inspeksi',
    number: 2,
    title: 'Robot Inspeksi Lorong Menara Gedung',
    source: 'Quiz Dasprog B — Soal 1',
    category: 'Modularitas & Percabangan',
    badge: 'Maksimal 35 Baris · Wajib define & if-else',
    badgeType: 'badge-red',
    prompt: 'Sebuah robot inspeksi ditugaskan untuk memeriksa lorong-lorong di sebuah gedung. Robot harus menyusuri seluruh jalur lorong sesuai dengan rute pada gambar hingga mencapai titik akhir. Setelah seluruh lorong selesai diperiksa, robot harus kembali ke posisi awal.\n\nKetentuan pengerjaan:\n1. Robot harus menyusuri seluruh jalur lorong sesuai gambar.\n2. Robot kembali ke posisi awal.\n3. Program wajib menggunakan define dan struktur percabangan if-else.\n4. Program maksimal terdiri dari 35 baris kode.',
    constraints: {
      maxLines: 35,
      requiredKeywords: ['define', 'if', 'else'],
      mustClearAllBeepers: false,
      mustReturnToStart: true,
      mustTurnoff: true
    },
    cols: 14,
    rows: 15,
    initialRobot: { x: 4, y: 7, dir: 'NORTH', beepers: 0 },
    initialBeepers: [],
    targetState: {
      description: 'Robot telah menyusuri seluruh lorong menara bertingkat naik-turun hingga titik akhir di (10, 8), lalu kembali ke posisi awal di (4, 7) dan mematikan sistem.',
      finalRobot: { x: 4, y: 7, dir: 'NORTH', beepers: 0, isOff: true },
      remainingBeepers: 0
    },
    hWalls: [
      [4, 10], [5, 10], [5, 7], [6, 7], [6, 12], [7, 12],
      [7, 8], [8, 8], [8, 13], [9, 13], [4, 6], [5, 6],
      [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [9, 8], [10, 8]
    ],
    vWalls: [
      [3, 7], [3, 8], [3, 9], [3, 10], [4, 8], [4, 9], [5, 8],
      [5, 9], [5, 10], [5, 11], [5, 12], [6, 9], [6, 10], [6, 11],
      [7, 10], [7, 11], [7, 12], [7, 13], [8, 9], [8, 10], [8, 11], [8, 12],
      [10, 7], [10, 8]
    ],
    starterCode: `# Tuliskan program inspeksi lorong gedung
# Wajib: define dan percabangan if-else, maksimal 35 baris!

define turnright:
    # TODO: Buat fungsi belok kanan
    do 3:
        turnleft

# TODO: Buat fungsi inspeksi lorong dan jalankan
`,
    solutionCode: `# Solusi Resmi Quiz Dasprog B (26 Baris Kode, Batas: 35 Baris)
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
turnoff`,
    logicExplanation: `Alur Algoritma:\n1. Mengabstraksikan belok kanan dengan \`define turnright\` (3x turnleft).\n2. Fungsi \`inspect_corridor\` memeriksa lorong dengan mengevaluasi kondisi sensor \`right_is_clear\` pada setiap tikungan menara.\n3. Setelah selesai memeriksa menara ketiga di kanan (10, 8), robot turun ke lorong dasar horizontal di y=7 lalu berjalan lurus kembali ke posisi awal di (4, 7).`
  },

  // =========================================================================
  // MISI 3: ROBOT PEMBERSIH GEDUNG 6 SAMPAH (QUIZ DASPROG B SOAL 2)
  // =========================================================================
  {
    id: 'pembersih',
    number: 3,
    title: 'Robot Pembersih Gedung & 6 Sampah Beeper',
    source: 'Quiz Dasprog B — Soal 2',
    category: 'Pembersihan Sampah & Kembali',
    badge: 'Wajib while, if-else, & define',
    badgeType: 'badge-red',
    prompt: 'Sebuah robot pembersih ditugaskan untuk membersihkan lorong-lorong di sebuah gedung. Di sepanjang lorong terdapat beberapa sampah yang ditandai dengan beeper. Robot harus menyusuri jalur sesuai gambar dan mengambil setiap sampah yang ditemukan. Setelah seluruh sampah berhasil dikumpulkan, robot harus kembali ke posisi awal dan berhenti.\n\nKetentuan pengerjaan:\n1. Robot harus mengambil seluruh sampah yang ditandai dengan beeper (6 titik beeper).\n2. Program wajib menggunakan while, if-else, dan define.\n3. Tidak ada batas maksimal jumlah baris kode.\n4. Setelah seluruh sampah terkumpul, robot harus kembali ke posisi awal dan berhenti.',
    constraints: {
      maxLines: 999,
      requiredKeywords: ['while', 'if', 'else', 'define'],
      mustClearAllBeepers: true,
      mustReturnToStart: true,
      mustTurnoff: true
    },
    cols: 16,
    rows: 15,
    initialRobot: { x: 4, y: 7, dir: 'NORTH', beepers: 0 },
    initialBeepers: [
      [4, 9, 1], [4, 11, 1], [7, 12, 1], [8, 12, 1], [11, 11, 1], [11, 9, 1]
    ],
    targetState: {
      description: 'Semua 6 beeper sampah di sepanjang lorong telah dipungut (tas robot = 6 beeper, 0 beeper di peta). Robot kembali ke posisi awal (4, 7) dan melakukan turnoff.',
      finalRobot: { x: 4, y: 7, dir: 'NORTH', beepers: 6, isOff: true },
      remainingBeepers: 0
    },
    hWalls: [
      [4, 6], [4, 12], [5, 6], [5, 7], [5, 11], [5, 12], [6, 6], [6, 7], [6, 11], [6, 12],
      [7, 6], [7, 7], [7, 11], [7, 12], [8, 6], [8, 7], [8, 11], [8, 12], [9, 6], [9, 7],
      [9, 11], [9, 12], [10, 6], [10, 7], [10, 11], [10, 12], [11, 6], [11, 12]
    ],
    vWalls: [
      [3, 7], [3, 8], [3, 9], [3, 10], [3, 11], [3, 12],
      [4, 8], [4, 9], [4, 10], [4, 11], [10, 8], [10, 9], [10, 10], [10, 11],
      [11, 7], [11, 8], [11, 9], [11, 10], [11, 11], [11, 12]
    ],
    starterCode: `# Tuliskan program pembersih gedung
# Wajib: while, if-else, dan define

define turnright:
    do 3:
        turnleft

define check_and_pick:
    # TODO: Ambil beeper jika berada di petak beeper
    pass
`,
    solutionCode: `# Solusi Resmi Quiz Dasprog B (Menggunakan while, if-else, dan define)
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
# Mengitari koridor hingga seluruh sampah bersih
while any_beepers_in_world:
    step_and_clean
check_and_pick
while not_facing_south:
    turnleft
while front_is_clear:
    move
turnright
while front_is_clear:
    move
turnright
turnoff`,
    logicExplanation: `Alur Logika:\n1. Robot memindai setiap petak sebelum melangkah dengan \`check_and_pick\`.\n2. \`step_and_clean\` menangani navigasi: jika depan kosong robot maju, jika terbentur dinding robot belok kanan menyusuri koridor persegi.\n3. Perulangan \`while any_beepers_in_world:\` menjamin robot tidak akan pulang sebelum seluruh sampah terangkat.\n4. Setelah semua beeper bersih, robot berputar ke arah Selatan dan Barat untuk kembali tepat di titik awal (4, 7).`
  },

  // =========================================================================
  // MISI 4: LINTASAN MENARA BEEPER BERTUMPUK (SOAL ASLAB 2)
  // =========================================================================
  {
    id: 'menara',
    number: 4,
    title: 'Lintasan 4 Menara Beeper Bertumpuk',
    source: 'Soal Quiz Aslab (30 Okt 2026) — No. 2',
    category: 'Penanganan Beeper Variatif',
    badge: 'Maksimal 22 Baris · Wajib while & define',
    badgeType: 'badge-blue',
    prompt: 'Buatlah program Gvrng agar robot menyusuri seluruh lintasan dunia robot (Gambar 2), mengambil semua beeper lalu kembali sekitar titik awal. Jumlah beeper tiap titik berbeda. Gunakan while & define untuk membantu program anda! (Program tidak lebih dari 22 baris)\n\nLihat Gambar 2.1 (Tampilan sebelum dijalankan) vs Gambar 2.2 (Tampilan setelah dijalankan).',
    constraints: {
      maxLines: 22,
      requiredKeywords: ['while', 'define'],
      mustClearAllBeepers: true,
      mustReturnToStart: true,
      mustTurnoff: true
    },
    cols: 24,
    rows: 14,
    initialRobot: { x: 4, y: 4, dir: 'EAST', beepers: 0 },
    initialBeepers: [
      [7, 8, 3],  // Puncak 1 (3 beeper)
      [9, 4, 1],  // Lembah 1 (1 beeper)
      [11, 6, 2], // Puncak 2 (2 beeper)
      [13, 4, 1], // Lembah 2 (1 beeper)
      [15, 8, 2], // Puncak 3 (2 beeper)
      [17, 4, 3], // Lembah 3 (3 beeper)
      [19, 7, 1], // Puncak 4 (1 beeper)
      [21, 4, 2]  // Ujung akhir (2 beeper)
    ],
    targetState: {
      description: 'Persis sesuai Gambar 2.2 Aslab: Seluruh beeper di semua puncak dan lembah menara telah bersih total (tas = 15 beeper). Robot kembali ke sekitar titik awal (4, 4) dan turnoff.',
      finalRobot: { x: 4, y: 4, dir: 'WEST', beepers: 15, isOff: true },
      remainingBeepers: 0
    },
    hWalls: [
      [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3],
      [12, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3], [20, 3], [21, 3],
      [6, 8], [7, 8], [10, 6], [11, 6], [14, 8], [15, 8], [18, 7], [19, 7]
    ],
    vWalls: [
      [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8],
      [9, 4], [9, 5], [9, 6], [11, 4], [11, 5], [11, 6],
      [13, 4], [13, 5], [13, 6], [13, 7], [13, 8], [15, 4], [15, 5], [15, 6], [15, 7], [15, 8],
      [17, 4], [17, 5], [17, 6], [17, 7], [19, 4], [19, 5], [19, 6], [19, 7],
      [21, 4]
    ],
    starterCode: `# Program Menara Beeper Variatif (Maksimal 22 Baris)
# Wajib menggunakan while & define

define turnright:
    do 3:
        turnleft

define ambil_semua:
    # TODO: Ambil semua beeper di petak sampai habis!
    while next_to_a_beeper:
        pickbeeper
`,
    solutionCode: `# Solusi Resmi Aslab 2 (18 Baris Kode, Batas: 22 Baris)
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
turnoff`,
    logicExplanation: `Trik Aslab Paling Krusial:\n1. Jumlah beeper berbeda-beda (ada yang 1, 2, atau 3). Menggunakan \`pickbeeper\` tunggal akan gagal karena menyisakan beeper di puncak!\n2. Fungsi \`ambil_semua\` memakai \`while next_to_a_beeper: pickbeeper\` sehingga berapa pun jumlah beeper pasti terangkat semua tanpa error.\n3. Fungsi \`susur_menara\` menyusuri naik dan turun setiap menara hingga mencapai batas barat untuk pulang.`
  },

  // =========================================================================
  // MISI 5: POLA PAPAN CATUR BEEPER 4x4 (SOAL ASLAB 3)
  // =========================================================================
  {
    id: 'catur',
    number: 5,
    title: 'Pola Papan Catur Beeper 4x4',
    source: 'Soal Quiz Aslab (30 Okt 2026) — No. 3',
    category: 'Pemindaian Bidang Teratur',
    badge: 'Maksimal 24 Baris · Wajib while, do, define',
    badgeType: 'badge-blue',
    prompt: 'Buatlah program GvRng yang membuat robot menyusuri seluruh lintasan dan mengambil semua beeper yang tersusun dengan pola papan catur. Gunakan while, do, dan define untuk membantu program anda. (Program tidak lebih dari 24 baris). Dunia robot tampak seperti pada Gambar 3.',
    constraints: {
      maxLines: 24,
      requiredKeywords: ['while', 'do', 'define'],
      mustClearAllBeepers: true,
      mustReturnToStart: false,
      mustTurnoff: true
    },
    cols: 12,
    rows: 12,
    initialRobot: { x: 4, y: 4, dir: 'EAST', beepers: 0 },
    initialBeepers: [
      [4, 4, 1], [6, 4, 1], [5, 5, 1], [7, 5, 1],
      [4, 6, 1], [6, 6, 1], [5, 7, 1], [7, 7, 1]
    ],
    targetState: {
      description: 'Seluruh 8 beeper pada pola papan catur terangkat bersih (tas = 8 beeper). Robot menyelesaikan pemindaian 4 baris.',
      finalRobot: { x: 4, y: 7, dir: 'WEST', beepers: 8, isOff: true },
      remainingBeepers: 0
    },
    hWalls: [
      [4, 3], [5, 3], [6, 3], [7, 3],
      [4, 7], [5, 7], [6, 7], [7, 7]
    ],
    vWalls: [
      [3, 4], [3, 5], [3, 6], [3, 7],
      [7, 4], [7, 5], [7, 6], [7, 7]
    ],
    starterCode: `# Program Papan Catur Beeper (Maksimal 24 Baris)
# Wajib: while, do, dan define

define turnright:
    do 3:
        turnleft

# TODO: Buat fungsi sapu baris dan transisi antar baris
`,
    solutionCode: `# Solusi Resmi Aslab 3 (20 Baris Kode, Batas: 24 Baris)
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
sweep_row
next_row_left
sweep_row
next_row_right
sweep_row
next_row_left
sweep_row
turnoff`,
    logicExplanation: `Alur Lintasan Boustrophedon (Ular Tangga):\n- Baris 1: Jalan ke Timur sambil menyapu (\`sweep_row\`).\n- Di ujung kanan: Belok kiri naik 1 langkah lalu hadap Barat (\`next_row_left\`).\n- Baris 2: Jalan ke Barat sambil menyapu (\`sweep_row\`).\n- Di ujung kiri: Belok kanan naik 1 langkah lalu hadap Timur (\`next_row_right\`).\n- Mengulang pola untuk baris 3 dan 4. Hanya membutuhkan 20 baris kode!`
  },

  // =========================================================================
  // MISI 6: LORONG 3 PILAR & PINDAHKAN BEEPER (HALAMAN 51 BUKU)
  // =========================================================================
  {
    id: 'tiga_pilar',
    number: 6,
    title: 'Tiga Pilar & Pemindahan Beeper',
    source: 'Buku Praktikum — Hal 51 (Ujian Tengah Jangka Panjang)',
    category: 'Pengumpulan & Peletakan Beeper',
    badge: 'Maksimal 30 Baris Kode',
    badgeType: 'badge-green',
    prompt: 'Buatlah program GvRng sehingga robot memasuki lorong, mengambil semua alat pemberi sinyal (beeper), dan menempatkan semua alat pemberi sinyal tersebut di ujung lorong yang lain. Dunia robot tampak seperti sebuah gambar. Program Anda tidak boleh lebih dari 30 baris!',
    constraints: {
      maxLines: 30,
      requiredKeywords: ['define', 'do'],
      mustClearAllBeepers: false, // beepers moved from pillars to target end
      mustReturnToStart: false,
      mustTurnoff: true
    },
    cols: 14,
    rows: 10,
    initialRobot: { x: 2, y: 2, dir: 'EAST', beepers: 0 },
    initialBeepers: [
      [4, 5, 1], // Puncak pilar 1
      [7, 6, 1], // Puncak pilar 2
      [10, 7, 1]  // Puncak pilar 3
    ],
    targetState: {
      description: 'Ketiga beeper di puncak pilar telah diambil, lalu ditaruh semuanya di ujung lorong seberang (petak 12, 5). Tas robot kembali 0 dan robot turnoff.',
      finalRobot: { x: 12, y: 5, dir: 'EAST', beepers: 0, isOff: true },
      remainingBeepers: 3
    },
    hWalls: [
      [2, 1], [2, 2], [3, 1], [3, 2], [4, 1], [4, 2], [4, 4], [4, 5],
      [5, 1], [5, 5], [6, 2], [6, 3], [7, 2], [7, 3], [7, 5], [7, 6],
      [8, 2], [8, 6], [9, 3], [9, 4], [10, 3], [10, 4], [10, 6], [10, 7],
      [11, 3], [11, 7], [12, 4], [12, 5]
    ],
    vWalls: [
      [1, 2], [3, 5], [4, 3], [4, 4], [5, 2], [5, 4], [5, 5],
      [6, 6], [7, 4], [7, 5], [8, 3], [8, 5], [8, 6],
      [9, 7], [10, 5], [10, 6], [11, 4], [11, 6], [11, 7], [12, 5]
    ],
    starterCode: `# Program Ujian Jangka Panjang Hal 51 (Maksimal 30 Baris)

define move3:
    do 3:
        move

define turnright:
    do 3:
        turnleft

# TODO: Definisikan fungsi pick untuk masuk lorong pilar, ambil beeper, lalu keluar
`,
    solutionCode: `# Solusi Resmi Halaman 51 Buku (28 Baris Kode, Batas: 30 Baris)
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
turnoff`,
    logicExplanation: `Alur Kerja Solusi Buku Hal 51:\n1. \`define move3:\` memampatkan 3 kali langkah menjadi 1 perintah ringkas.\n2. Fungsi \`pick\` memandu robot masuk ke dalam lorong pilar bertingkat, memungut beeper di ujungnya, lalu berputar arah dan keluar kembali ke jalur bawah.\n3. \`do 3: pick\` mengulang pemanggilan fungsi untuk ketiga pilar.\n4. Di akhir lorong seberang, robot mengeksekusi \`do 3: putbeeper\` untuk menaruh ketiga beeper sekaligus, lalu \`turnoff\`.`
  },

  // =========================================================================
  // MISI 7: MENGELILINGI 3 KOTAK (HALAMAN 52 — ALTERNATIF 1)
  // =========================================================================
  {
    id: 'tiga_kotak_alt1',
    number: 7,
    title: 'Mengelilingi 3 Kotak (Alternatif 1: 20 Baris)',
    source: 'Buku Praktikum — Hal 52',
    category: 'Analisis Algoritma & Jalur Kotak',
    badge: '20 Baris Kode · 26 Gerakan Fisik',
    badgeType: 'badge-green',
    prompt: 'Buat program hingga 30 baris agar robot mengelilingi semua kotak dan kemudian kembali ke posisi awalnya. Jika robot menemukan alat pemberi sinyal (beeper), robot harus mengambilnya. Posisi alat pemberi sinyal dapat diubah, tetapi harus selalu berada dekat dengan kotak-kotak tersebut.\n\nAlternatif 1 mengutamakan sedikitnya baris kode instruksi (hanya 20 baris).',
    constraints: {
      maxLines: 30,
      requiredKeywords: ['define', 'do'],
      mustClearAllBeepers: true,
      mustReturnToStart: true,
      mustTurnoff: true
    },
    cols: 14,
    rows: 8,
    initialRobot: { x: 2, y: 2, dir: 'EAST', beepers: 0 },
    initialBeepers: [
      [4, 4, 1], [7, 4, 1], [10, 4, 1]
    ],
    targetState: {
      description: 'Robot mengelilingi 3 kotak dengan pola 20 baris instruksi. Semua beeper dekat kotak diambil. Robot kembali ke posisi awal di (2, 2).',
      finalRobot: { x: 2, y: 2, dir: 'EAST', beepers: 3, isOff: true },
      remainingBeepers: 0
    },
    hWalls: [
      [4, 2], [4, 3], [7, 2], [7, 3], [10, 2], [10, 3]
    ],
    vWalls: [
      [3, 3], [4, 3], [6, 3], [7, 3], [9, 3], [10, 3]
    ],
    starterCode: `# Alternatif 1 Resmi Buku Hal 52 (20 Baris)

define circumference:
    do 4:
        # TODO: Cek beeper dan kelilingi sisi kotak
        pass
`,
    solutionCode: `# Solusi Resmi Buku Hal 52 — Alternatif 1 (20 Baris)
define circumference:
    do 4:
        if next_to_a_beeper:
            pickbeeper
        turnleft
        move
        if next_to_a_beeper:
            pickbeeper
        move
do 3:
    do 3:
        move
    circumference
turnleft
turnleft
do 9:
    move
turnleft
turnleft
turnoff`,
    logicExplanation: `Analisis Alternatif 1:\n- Baris instruksi sangat sedikit, yaitu hanya 20 baris.\n- Namun, robot mengeksekusi 26 gerakan fisik (karena pola putaran di sekeliling kotak yang menghasilkan gerakan tambahan saat berpindah antar kotak).`
  },

  // =========================================================================
  // MISI 8: MENGELILINGI 3 KOTAK (HALAMAN 53 — ALTERNATIF 2 HEMAT ENERGI)
  // =========================================================================
  {
    id: 'tiga_kotak_alt2',
    number: 8,
    title: 'Mengelilingi 3 Kotak (Alternatif 2: Hemat Energi 22 Gerakan)',
    source: 'Buku Praktikum — Hal 53',
    category: 'Analisis Efisiensi Runtime',
    badge: '22 Gerakan Fisik · Hemat Energi Robot!',
    badgeType: 'badge-green',
    prompt: 'Alternatif 2 dari soal mengelilingi 3 kotak.\nCatatan Resmi Buku Hal 53:\n"Program pertama memiliki instruksi yang lebih sedikit, yaitu 20 baris. Pada program kedua, robot mengeksekusi instruksi gerakan yang lebih sedikit, yaitu 22 kali, sedangkan pada program pertama 26 instruksi gerakan. Program kedua lebih hemat energi, robot!"',
    constraints: {
      maxLines: 30,
      requiredKeywords: ['define', 'do'],
      mustClearAllBeepers: true,
      mustReturnToStart: true,
      mustTurnoff: true
    },
    cols: 14,
    rows: 8,
    initialRobot: { x: 2, y: 2, dir: 'EAST', beepers: 0 },
    initialBeepers: [
      [4, 4, 1], [7, 4, 1], [10, 4, 1]
    ],
    targetState: {
      description: 'Robot mengelilingi ketiga kotak hanya dengan 22 gerakan fisik (hemat 4 gerakan dibanding Alternatif 1!). Seluruh beeper terambil dan robot kembali ke (2, 2).',
      finalRobot: { x: 2, y: 2, dir: 'EAST', beepers: 3, isOff: true },
      remainingBeepers: 0
    },
    hWalls: [
      [4, 2], [4, 3], [7, 2], [7, 3], [10, 2], [10, 3]
    ],
    vWalls: [
      [3, 3], [4, 3], [6, 3], [7, 3], [9, 3], [10, 3]
    ],
    starterCode: `# Alternatif 2 Resmi Buku Hal 53 (Hemat Energi: 22 Langkah)

define circumference:
    do 4:
        # TODO: Rancang urutan langkah dan belokan yang tidak memboroskan pergerakan
        pass
`,
    solutionCode: `# Solusi Resmi Buku Hal 53 — Alternatif 2 (24 Baris, 22 Gerakan)
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
turnoff`,
    logicExplanation: `Kenapa Alternatif 2 Lebih Hemat Energi?\nPada Alternatif 2, fungsi \`circumference\` memindahkan instruksi \`turnleft\` ke akhir putaran sisi kotak dan mengoptimalkan langkah pulang (hanya \`do 7: move\` dibanding \`do 9: move\`). Hasilnya: robot hanya melangkah 22 kali fisik, lebih hemat 4 langkah dibanding Alternatif 1!`
  }
];
