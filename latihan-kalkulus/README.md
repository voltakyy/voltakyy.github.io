# Batas & Bentuk — Latihan UTS Kalkulus

Latihan soal pilihan ganda untuk UTS Kalkulus Reguler: **Bilangan & Modulo**, **Trigonometri**, **Fungsi & Invers**, **Pertidaksamaan**, **Domain & Range**, **Limit Aljabar**, dan **Limit Trigonometri**.

- 35 soal: 14 soal materi sendiri + 13 soal inti + 8 soal tantangan
- 14 soal materi sendiri selalu tampil di awal dengan urutan tetap 1–14
- Pembahasan langkah demi langkah di setiap soal
- Lembar rumus bisa dibuka kapan saja saat latihan
- Urutan soal inti dan tantangan diacak, begitu juga pilihan jawabannya
- Bisa dijawab dengan klik, tombol **1–4 / A–D**, lalu **Enter** untuk lanjut
- Rapor per topik, review jawaban salah, dan rekor tersimpan di browser

## Buka latihan dan modul

Langsung buka [`index.html`](index.html) di browser — tidak perlu install, build, atau server.

Lewat GitHub Pages: **https://voltakyy.github.io/latihan-kalkulus/**

## Modul bacaan

Selain latihan, ada empat halaman materi, satu arsip UTS, dan satu cheat sheet A5. Mulai dari indeks [`modul.html`](modul.html).

| Halaman | Isi |
| --- | --- |
| [`materi-1.html`](materi-1.html) | Bilangan vs angka, himpunan N–Z–Q–R–C, representasi, operasi dan akar |
| [`materi-2.html`](materi-2.html) | Enam rasio trigonometri, radian, unit circle, nilai istimewa, identitas |
| [`materi-3.html`](materi-3.html) | Domain–kodomain–range, fungsi injektif/surjektif/bijektif, invers, komposisi, floor, modulo, log, rekursi |
| [`materi-4.html`](materi-4.html) | Limit kiri–kanan, bentuk `0/0`, limit trigonometri, tak hingga, asimtot, kontinuitas |
| [`uts-2025.html`](uts-2025.html) | Arsip UTS Gasal 2025/2026, kunci ringkas, pembahasan lengkap, timer simulasi 90 menit |
| [`cheat-sheet.html`](cheat-sheet.html) | Lembar izin A5 satu muka: pertidaksamaan, fungsi kuadrat, limit, trigonometri, checklist jebakan |

Setiap halaman materi punya daftar isi yang mengikuti posisi bacaan, contoh langkah demi langkah, latihan dengan pembahasan yang bisa dibuka-tutup, diagram SVG, dan tautan PDF sumber di bagian bawah. Gaya visual memakai [`styles.css`](styles.css) yang sama, dengan lapisan tambahan [`modul.css`](modul.css) dan interaksi di [`modul.js`](modul.js). Latihan 35 soal di beranda tetap berjalan lewat [`app.js`](app.js).

PDF sumber disalin ke [`assets/pdf/`](assets/pdf/) agar halaman modul tetap bisa membuka materi asli. File PDF bersifat gambar, jadi isi modul ditulis ulang dari halaman yang sudah dirender, bukan diekstrak otomatis.

Cheat sheet memakai aturan cetak `@page { size: A5 portrait; margin: 0 }` dan tinggi kertas tetap 210 mm, sehingga keluar sebagai satu halaman A5. Tombol **Cetak A5** memanggil dialog cetak browser; pilih skala 100% dan satu muka.

## Catatan soal

Beberapa limit pada lembar UTS tidak menuliskan arah limit. Di latihan ini dipakai asumsi `x → ∞` / `t → ∞`, dan asumsi tersebut dijelaskan pada pembahasan. Typo `sin(-x) = sin x` pada lembar rumus juga sudah dikoreksi menjadi `sin(-x) = -sin x`.

Pada soal materi sendiri nomor 5, sumber hanya menuliskan `θ = 5π/6`; latihan meminta nilai `sin θ`, `cos θ`, dan `tan θ` sekaligus. Soal nomor 8 dan 14 ditulis dengan bentuk pecahan yang jelas: `f(x) = (3x−2)/(x+1)` dan `f(x) = 3/(x−4)`.

## Menambah soal

Tambahkan object baru ke salah satu file di folder [`questions/`](questions/). Setiap soal berisi `topic`, `q`, `options`, `answer`, dan `explain`. Tandai `challenge: true` untuk soal tantangan. Untuk soal pembuka yang urutannya tetap, tambahkan `intro: true` dan `introOrder` (angka urut). Grafik SVG tambahan dapat didaftarkan di [`figures.js`](figures.js).
