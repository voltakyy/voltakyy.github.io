# Catatan Perubahan (Changelog)

Semua pembaruan penting pada proyek **Ruang Visual — Latihan UTS Pemrograman Visual** didokumentasikan dalam berkas ini.

Format berkas ini mengacu pada panduan [Keep a Changelog](https://keepachangelog.com/id/1.0.0/) dan mematuhi [Semantic Versioning](https://semver.org/).

---

## [2.1.1] - 2026-11-05
### Diperbaiki
- **Pencegahan Text Overflow & Squashing:** Memperbaiki layout bug pada `.tab-trigger` dan `.nav-pill` di `uts-2024.html` dan `uts-2026.html` menggunakan `flex: 0 0 auto`, `flex-shrink: 0`, dan `white-space: nowrap`.
- **Akselerasi Touch Scroll (iOS/WebKit):** Menambahkan `-webkit-overflow-scrolling: touch` pada container horizontal tab navigation `.exam-tabs`.
- **Auto Smooth Centering:** Tombol tab aktif otomatis melakukan pergeseran mulus (*smooth auto-scroll into view*) ke tengah layar saat ditekan pada layar perangkat ponsel.
- **Responsivitas Header:** Menambahkan `flex-wrap: wrap` pada `.head-meta` di `styles.css` agar badge navigasi tidak berhimpitan pada breakpoint menengah.
- **Tautan Eksternal:** Menghubungkan footer `index.html` dengan portal pendamping UTS KKI (Kepemimpinan).

---

## [2.1.0] - 2026-11-04
### Ditambahkan
- Modul pembelajaran komprehensif UTS 2026/2027 (`uts-2026.html`) berdasarkan materi SPADA UMS Pertemuan 1-7.
- Visualizer interaktif perbandingan alur eksekusi Procedure vs Function pada Alice 3.
- Kamus istilah lengkap `GLOSSARY.md` dengan lebih dari 30 definisi konsep OOP dan visual blocks.
- Dokumen panduan kontribusi `CONTRIBUTING.md` dan lisensi open source `LICENSE`.
- Rangkuman siap cetak (*Print to A4 / PDF*) untuk persiapan ujian mendadak.

### Diperbaiki
- Sinkronisasi kunci jawaban UTS 2024 dan UTS 2026 dengan rubrik penilaian resmi dosen UMS.
- Penyesuaian skema diagram UML relasi inheritance kelas `Manusia`, `Mahasiswa`, `Petani`, dan `Pedagang`.

---

## [2.0.0] - 2026-10-30
### Ditambahkan
- Halaman bedah tuntas naskah ujian asli UTS Gasal 2024/2025 (`uts-2024.html`).
- Arena latihan esai interaktif dengan fitur penilaian mandiri (self-scoring 0-100 poin) dan penyimpanan lokal (`localStorage`).
- Kuis 10 studi kasus dan jebakan konsep ujian.
- Salinan naskah asli PDF di folder `docs/uts-2024-pemrograman-visual.pdf`.

---

## [1.0.0] - 2026-10-25
### Ditambahkan
- Rilis perdana web kuis interaktif **Ruang Visual** (`index.html`).
- 31 bank soal pilihan ganda interaktif yang terbagi ke dalam 5 topik materi utama:
  - Class & Object (Kelas & Objek)
  - Property & Method (Properti & Metode)
  - Inheritance (Pewarisan)
  - Function & Procedure (Fungsi & Prosedur)
  - Loops (Struktur Perulangan)
- Dukungan navigasi responsif dan tombol pintasan keyboard (tombol angka 1-4, A-D, dan Enter).
- Desain visual bertema Neo-Brutalist Studio Paper dengan palet warna hangat.
