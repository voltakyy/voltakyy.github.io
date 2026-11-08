# 🐍 Portal Belajar Algoritma & Pemrograman (Python) — UMS

[![Materi Kuliah](https://img.shields.io/badge/Mata%20Kuliah-Algoritma%20%26%20Pemrograman-blue.svg)](https://ums.ac.id)
[![Kode MK](https://img.shields.io/badge/Kode%20MK-TIF3221303%20(3%20SKS)-green.svg)]()
[![Semester](https://img.shields.io/badge/Semester-1%20Gasal%20(MABA)-purple.svg)]()
[![Bahasa](https://img.shields.io/badge/Language-Python%203-yellow.svg)](https://python.org)
[![Arsip Asli](https://img.shields.io/badge/Sumber-Repotif%20HIMATIF%20UMS-orange.svg)](https://repotif.himatifums.org)

Portal interaktif komprehensif untuk persiapan Ujian Tengah Semester (UTS) mata kuliah **Algoritma dan Pemrograman (TIF3221303 - 3 SKS)**, Program Studi Informatika, Fakultas Komunikasi dan Informatika, **Universitas Muhammadiyah Surakarta (UMS)**.

> ⚠️ **Catatan Penting Pemisahan Mata Kuliah:**  
> Repositori ini khusus berfokus pada **Kuliah Teori Algoritma dan Pemrograman (Python)**. Mata kuliah Praktikum Algoritma & Pemrograman (TIF3221104 - 1 SKS dengan materi simulator *Guido van Robot / GvRng*) dikelola secara terpisah sesuai kurikulum UMS.

---

## 🌟 9 Modul & Fitur Unggulan Interaktif

Aplikasi ini dibangun tanpa ketergantungan rumit (*zero external build dependencies*), dapat langsung dibuka di browser modern apa pun atau di-host via GitHub Pages:

| No | Modul / Fitur | Deskripsi |
|---|---|---|
| 0 | **🚀 Halaman Khusus UTS 2026/2027 (`uts-2026.html`)** | Pindaian 3 lembar naskah resmi terbaru + pembahasan 100% akurat: Standar Deviasi & Bug Fixing, Pseudocode Denda Loop ke Python, dan Tracing NIM Slicing format 2026. |
| 1 | **🎯 Halaman Khusus UTS 2025/2026 (`uts-2025.html`)** | Naskah resmi doc_213 UMS: Konsep Teori, Kasir Minimarket 10%, dan Tracing NIM Slicing mundur `Z[9:6:-1]`. |
| 2 | **📜 Halaman Khusus UTS 2024/2025 (`uts-2024.html`)** | Naskah resmi doc_26 UMS: Paket Tipe A (Dr. Husni Thamrin) dan Paket Tipe B (Arif Setiawan, M.Eng.). |
| 3 | **📚 Diktat Teori & Bedah Soal UTS** | Rangkuman Modul 1 s.d. 5 + Bedah Soal Asli UTS gasal 2024/2025 & 2025/2026 (Dosen: *Arif Setiawan, S.Kom., M.Eng.* & *Husni Thamrin, M.T., Ph.D.*). Disertai tautan unduh berkas pindaian asli Repotif. |
| 2 | **🔢 Tracing NIM Stepper (Soal 1 UTS)** | Simulator eksekusi kode *line-by-line* untuk soal wajib UTS NIM Mahasiswa (`m, n, p, q, r, s, t, u, v, w`) dengan inspeksi nilai variabel real-time. |
| 3 | **🛒 Kasir Minimarket & Flowchart (Soal 2 UTS)** | Simulasi kasir belanja dengan kalkulasi diskon bertingkat (`>= 100k: 5%`, `>= 250k: 10%`, `>= 500k: 15%`), visual flowchart SVG aktif, dan cetak struk. |
| 4 | **✂️ Slicing Lab & String Sandbox (Soal 3 UTS)** | Penggaris indeks visual (positif & negatif), validator rumus `string[start:stop:step]`, detektor kalimat palindrom, dan mini-game tebak hasil slicing. |
| 5 | **🔺 Visual Nested Loop Pattern (Soal 4 UTS)** | Generator visual 7 variasi bentuk loop bersarang (*Right Triangle, Inverted Triangle, Mirrored, Pyramid, Diamond, Hollow Rectangle, Number Matrix*) dengan animasi cetak baris per baris. |
| 6 | **📄 Generator Lembar HVS A4 Resmi UTS** | Generator lembar catatan resmi 1 lembar kertas HVS A4 (aturan resmi UTS Informatika UMS) dengan editor catatan kustom dan layout cetak presisi (`@media print`). |
| 7 | **💡 25 Flashcard Cepat & Jebakan UTS** | Kartu flip 3D interaktif seputar konsep fundamental, operator precedence, manipulasi string, dan jebakan logika ujian. |
| 8 | **🎯 UTS Exam Arena (15 Soal Asli UMS)** | Simulasi ujian riil dengan 15 butir soal pilihan ganda & analisis kode dari bank soal HIMATIF, timer hitung mundur 90 menit, grid navigasi nomor, dan rapor evaluasi otomatis. |
| 9 | **💻 Live Python Runner & Sandbox** | Editor kode interaktif langsung di browser dengan 4 preset soal UTS, validator sintaksis Python, dan konsol terminal keluaran. |

---

## 📄 Pembahasan Lengkap & Video

Berkas pendamping di luar portal interaktif:

| Berkas | Isi |
|---|---|
| [`pembahasan/uts-2024-2025.md`](pembahasan/uts-2024-2025.md) | Pembahasan lengkap seluruh soal UTS 2024/2025 (Tipe A & B) dan 2025/2026: pseudocode, flowchart, kode Python, tabel tracing, rubrik, dan strategi belajar. |
| [`pembahasan/trace_nim.py`](pembahasan/trace_nim.py) | Skrip tracing NIM (`m, n, p, q, r, s, t, u, v, w`) — jalankan dengan NIM sendiri. |
| [`video/computational-thinking.mp4`](video/computational-thinking.mp4) | Video penjelasan materi 03 *Computational Thinking* (2:10, 1080p, narasi Bahasa Indonesia). |
| [`video/src/`](video/src) | Sumber animasi + skrip render video (HTML/JS, TTS, ffmpeg). |

---

## 📂 Struktur Berkas Repositori

```text
materi-alpro/
├── index.html                 # Halaman utama portal belajar interaktif (9 modul)
├── alpro.html                 # Salinan / alias untuk kompatibilitas tautan
├── README.md                  # Dokumentasi resmi proyek
├── .gitignore                 # Konfigurasi pengecualian Git
├── pembahasan/                # Pembahasan UTS (Markdown) + skrip tracing NIM
│   ├── uts-2024-2025.md
│   └── trace_nim.py
├── video/                     # Video Computational Thinking + sumber animasi
│   ├── computational-thinking.mp4
│   ├── README.md
│   └── src/
└── repotif_arsip_alpro/       # Berkas pindaian asli dari HIMATIF Repotif UMS
    ├── doc_213_UTS_2025_Reguler_Algoritma_dan_Pemrograman_Reguler.pdf
    ├── doc_213_UTS_2025_..._p1_img1.jpeg
    ├── doc_213_UTS_2025_..._p2_img1.jpeg
    ├── doc_26_UTS_2024_Alpro_Algoritma_dan_Pemrograman.pdf
    ├── doc_26_UTS_2024_..._p1_img1.jpeg
    ├── doc_26_UTS_2024_..._p2_img1.jpeg
    └── doc_26_UTS_2024_..._p3_img1.jpeg
```

---

## 🚀 Cara Menjalankan

### Cara 1: Langsung Buka di Browser (Paling Cepat)
Cukup klik ganda berkas `index.html` pada File Explorer Anda di browser apa pun (Google Chrome, Microsoft Edge, Mozilla Firefox).

### Cara 2: Menjalankan Local Web Server (Direkomendasikan)
Menggunakan terminal PowerShell / Command Prompt:

```bash
# Pindah ke direktori proyek
cd C:\Users\Asus\materi-alpro

# Jalankan server lokal Python
python -m http.server 8081
```

Buka browser dan akses alamat:
👉 **`http://localhost:8081`**

---

## 🔗 Proyek Terkait

- **[Portal Materi Logika & Himpunan (TIF322103)](https://github.com/voltakyy/materi-lohim)**: Bank soal dan modul bedah UTS untuk mata kuliah Logika & Himpunan Informatika UMS.

---

## ⚖️ Lisensi & Hak Cipta
Materi soal dan arsip adalah hak milik civitas akademika **Program Studi Informatika UMS** dan **HIMATIF UMS (Repotif)**. Repositori ini disusun sebagai media pembelajaran nirlaba mahasiswa.
