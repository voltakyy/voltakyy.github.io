# Ruang Visual — Latihan & Modul Pembelajaran UTS Pemrograman Visual

Platform web interaktif untuk mempelajari materi dan latihan soal persiapan Ujian Tengah Semester (UTS) mata kuliah **Pemrograman Visual** (berbasis Alice 3 dan Konsep Pemrograman Berorientasi Objek / OOP Java).

---

## 🎯 Daftar Topik Pembelajaran

1. **Class & Object (Kelas & Objek):**
   - Konsep cetak biru (*blueprint*) vs entitas nyata (*instance*).
   - Analisis *state* (atribut/variabel) dan *behavior* (perilaku/metode).
2. **Property & Method (Properti & Metode):**
   - Karakteristik data anggota dan fungsi operasional.
   - Hak akses (*access modifier*: `public`, `private`, `protected`).
3. **Inheritance (Pewarisan / Relasi "is-a"):**
   - Hierarki *Superclass* dan *Subclass*.
   - Rekonstruksi diagram kelas UML.
   - Kata kunci `extends` dan pemanggilan `super()`.
4. **Function & Procedure (Fungsi & Prosedur):**
   - Perbedaan mendasar: eksekusi aksi (*side-effect*) vs pengembalian nilai (*return value*).
   - Abstraksi prosedural (*Procedural Abstraction*) dan modularitas kode di Alice 3.
5. **Control Structures & Perulangan (Loops):**
   - Sekuensial (*Do in order*) vs Konkuren (*Do together*).
   - Perulangan terhitung (*Count Loop*) vs Perulangan kondisional (*While Loop*).

---

## 🚀 Fitur Unggulan Web

### 1. Halaman Khusus Latihan UTS 2026 (Terbaru)
Buka [`uts-2026.html`](uts-2026.html) untuk mempelajari materi mutakhir selaras SPADA UMS:
- **6 Pilar Modul Inti:** Class vs Object, State & Behavior, Behavior Manusia, Kebutuhan Procedure di Software Engineering, Alice 3 Procedure vs Function, dan Kebermanfaatan Inheritance.
- **Arena Simulasi Esai & Self-Scoring:** Pengetikan jawaban mandiri dengan scoring (0–100 Poin), rubrik penilaian dosen, dan auto-save `localStorage`.
- **Kuis 10 Kasus & Jebakan Konseptual:** Latihan pilihan ganda interaktif dengan feedback langsung.
- **Visualizer Alur Data Alice 3:** Perbandingan eksekusi Procedure vs Function secara grafis.
- **Rangkuman Catatan A4:** Siap cetak / simpan PDF (`Ctrl + P`).

### 2. Halaman Khusus UTS 2024 (Naskah Asli UMS)
Buka [`uts-2024.html`](uts-2024.html) untuk bedah tuntas naskah ujian resmi **UTS Gasal 2024/2025**:
- **Bedah Tuntas 5 Soal Esai:** Solusi ideal 100% dosen untuk Class vs Object, Property & Method, Rekonstruksi Diagram UML (Mahasiswa, Petani, Pedagang), Alice 3 Functions vs Procedures, dan Perulangan.
- **Visualizer Diagram UML:** Membandingkan diagram sebelum vs sesudah inheritance secara visual interaktif.
- **Naskah Asli PDF:** Tersedia di folder [`docs/uts-2024-pemrograman-visual.pdf`](docs/uts-2024-pemrograman-visual.pdf).

### 3. Bank Soal Pilihan Ganda (31 Soal Interaktif)
Buka [`index.html`](index.html) untuk berlatih 31 soal pilihan ganda:
- 23 soal inti + 8 soal tantangan tingkat lanjut.
- Pembahasan mendalam di setiap soal (bukan sekadar kunci jawaban).
- Navigasi keyboard cepat: tombol **1–4 / A–D**, lalu **Enter**.
- Rapor performa per topik dan review jawaban salah otomatis.

---

## 📂 Struktur Repositori & Lembar Belajar

```text
latihan-pemrograman-visual/
├── docs/                      # Dokumen naskah ujian resmi (PDF)
│   └── uts-2024-pemrograman-visual.pdf
├── questions/                 # Bank soal modular berdasarkan topik
│   ├── class-object.js
│   ├── function-procedure.js
│   ├── inheritance.js
│   ├── loops.js
│   └── property-method.js
├── app.js                     # Logika kuis interaktif, timer, scoring, toast
├── styles.css                 # Desain sistem Neo-Brutalist & print stylesheet
├── index.html                 # Halaman utama kuis pilihan ganda interaktif
├── uts-2024.html              # Pembahasan interaktif naskah resmi UTS 2024
├── uts-2026.html              # Modul lengkap dan simulasi UTS 2026
├── GLOSSARY.md                # Kamus istilah lengkap Pemrograman Visual & OOP
├── CHEATSHEET-ALICE3.md       # Lembar contek cepat orientasi & blok kontrol Alice 3
├── CHEATSHEET-OOP.md          # Intisari pewarisan, enkapsulasi, & diagram UML
├── TIPS-UTS.md                # Strategi pengerjaan soal esai & manajemen waktu
├── CONTRIBUTING.md            # Panduan berkontribusi dan format penambahan soal
├── CHANGELOG.md               # Catatan riwayat versi dan pembaruan materi
├── LICENSE                    # Lisensi Open Source MIT
├── site.webmanifest           # Konfigurasi instalasi Web App PWA
├── favicon.svg                # Ikon identitas web
└── README.md                  # Dokumentasi utama proyek
```

---

## 📚 Pusat Referensi & Cheatsheet

Untuk memudahkan belajar cepat sebelum masuk ruang ujian:
- 📖 [**GLOSSARY.md**](GLOSSARY.md) — Kamus istilah 30+ konsep OOP dan pemrograman visual.
- 📐 [**CHEATSHEET-ALICE3.md**](CHEATSHEET-ALICE3.md) — Ringkasan 6 arah orientasi spasial dan perbandingan blok logika.
- 🏛️ [**CHEATSHEET-OOP.md**](CHEATSHEET-OOP.md) — Rangkuman relasi *is-a*, kata kunci `extends` & `super`, serta simbol UML.
- ⏱️ [**TIPS-UTS.md**](TIPS-UTS.md) — Panduan manajemen waktu ujian 90 menit dan trik mendapatkan nilai maksimal dosen.
- 📝 [**CONTRIBUTING.md**](CONTRIBUTING.md) — Standarisasi format penambahan soal pilihan ganda baru.
- 📜 [**CHANGELOG.md**](CHANGELOG.md) — Log catatan evolusi fitur dan modul web.
- ⚖️ [**LICENSE**](LICENSE) — Lisensi open source MIT.

---

## 📖 Cara Menjalankan

Tidak membutuhkan instalasi *runtime*, compiler, ataupun web server:
1. Cukup unduh atau clone repositori ini:
   ```bash
   git clone https://github.com/voltakyy/latihan-pemrograman-visual.git
   ```
2. Klik ganda file [`index.html`](index.html) untuk membuka di browser apa pun (Chrome, Edge, Firefox, dsb).
3. Atau akses versi daring via GitHub Pages:
   **[https://voltakyy.github.io/latihan-pemrograman-visual/](https://voltakyy.github.io/latihan-pemrograman-visual/)**

---

## 🤝 Kontribusi Soal

Ingin menambahkan soal latihan baru? Cukup edit salah satu file di dalam folder [`questions/`](questions/). Setiap objek soal mengikuti skema:
```javascript
{
  topic: 'Nama Topik',
  q: 'Pertanyaan lengkap...',
  options: ['Opsi A', 'Opsi B', 'Opsi C', 'Opsi D'],
  answer: 0, // indeks jawaban yang benar (0-3)
  explain: 'Penjelasan komprehensif...',
  challenge: false // true jika soal tantangan/HOTS
}
```
