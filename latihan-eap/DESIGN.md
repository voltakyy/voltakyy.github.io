# Design Direction: Ruang EAP

> DESIGN.md is the soul and direction document for Ruang EAP (English for Academic Purposes), Universitas Muhammadiyah Surakarta.

## 1. Product Identity & Purpose
- **Product**: Ruang EAP (Persiapan UTS Bahasa Inggris Akademik).
- **Institution**: Program Studi Teknik Informatika, Fakultas Komunikasi dan Informatika, Universitas Muhammadiyah Surakarta (UMS).
- **Audience**: Mahasiswa semester 1 Teknik Informatika yang mempersiapkan Ujian Tengah Semester (UTS) mata kuliah English for Academic Purposes (EAP).
- **Core Value**: 100% materi otentik dosen, zero fluff, zero AI-buzzword slop, jujur, taktil, dan interaktif.

## 2. Personality & Mood
- **Tone**: Jujur, akademis, grounded, suportif, dan fokus.
- **Copywriting Standard**: Bahasa Indonesia & Inggris yang alami dan lugas. Tidak menggunakan jargon AI klise ("revolutionary", "seamless", "next-gen"). Tidak menggunakan karakter em dash (U+2014) sesuai aturan R-02.
- **No Deceptive Elements**: Tidak ada statistik palsu, tidak ada testimoni fiktif, tidak ada tombol hiasan mati.

## 3. Visual Aesthetic: Neo-Brutalist Studio Paper
- **Concept**: Nuansa lembar naskah ujian fisik akademik (studio paper) yang dipadukan dengan kontrol taktil modern bergaris tegas (neo-brutalism).
- **Color Palette**:
  - `Canvas Paper`: `#f6f0e4` (kertas ujian alami)
  - `Deep Paper Surface`: `#eae2d3` (kartu bertingkat)
  - `Solid Dark Ink`: `#24221f` (kontras teks dan batas garis, rasio 14:1 WCAG AAA)
  - `Muted Text Ink`: `#5c564f` (keterangan tambahan)
  - `Academic Teal`: `#0e7490` (aksi utama, pemutar audio)
  - `Soft Teal`: `#e0f2fe` (panel pendukung transkrip)
  - `Mustard Amber`: `#d97706` (status jeda, skor ujian, penanda)
  - `Tomato Red`: `#dc2626` (jawaban salah, tombol stop)
  - `Emerald Forest`: `#15803d` (jawaban benar, validasi)
- **Shadows & Borders**:
  - Batas garis: `2px solid #24221f` (tajam dan tegas, tanpa blur transparan yang melayang)
  - Bayangan keras: `2px 2px 0 #24221f` dan `3px 3px 0 #24221f`
  - Feedback tekan: `transform: translate(1px, 1px); box-shadow: 1px 1px 0 #24221f`
- **Typography**:
  - Judul / Display: `Space Grotesk`, sans-serif
  - Isi Bacaan / Body: `Plus Jakarta Sans`, sans-serif
  - Angka & Transkrip / Code: `JetBrains Mono`, monospace

## 4. Liveliness Toolkit Dials
- **ENERGY: 2** (Taktil, berkarakter editorial akademik, tidak monoton namun tidak kacau)
- **RHYTHM: 2** (Variasi kartu yang kaya: pemutar audio garis waktu, Lembar Jawaban Komputer 17 nomor, puzzle penyusunan klausa, dan evaluator paragraf)
- **MOTION: 1** (Gerakan fungsional cepat 150ms: spinner berputar hanya saat memuat audio, gelombang halus saat suara membaca)

## 5. Accessibility & Ergonomics
- Target sentuh sentuhan mobile: minimal 44x44px.
- Indikator fokus keyboard: `outline: 3px solid #0e7490; outline-offset: 2px`.
- Seluruh elemen interaktif memiliki `cursor: pointer` dan status hover/active yang jelas.
