# materi-fungsi

Web belajar **fungsi** dari nol sampai bisa dipakai untuk kalkulus. Bahasa Indonesia, tanpa akun, tanpa build step.

Fungsi sering dianggap sulit karena diajarkan sebagai definisi kering: "relasi yang memasangkan setiap anggota A ke tepat satu anggota B". Padahal idenya sederhana — **satu input, satu output**. Web ini membongkar ide itu pelan-pelan: dari diagram panah, notasi `f(x)`, domain dan range, sampai invers dan komposisi.

## Isi

| Bab | Bagian |
| --- | --- |
| 01 Dasar | definisi & notasi, domain–kodomain–range, kapan relasi bukan fungsi, substitusi, grafik & uji garis vertikal |
| 02 Bentuk | linear, kuadrat, rasional, akar, nilai mutlak, fungsi sepotong |
| 03 Lanjut | injektif–surjektif–bijektif, invers, komposisi, sifat genap–ganjil dan monoton |

Ditutup dengan latihan bertingkat dan ringkasan satu halaman.

## Struktur

```
index.html        beranda + peta belajar
dasar.html        bab 01 (bagian 01–05)
bentuk.html       bab 02 (bagian 06–11)
lanjut.html       bab 03 (bagian 12–15)
latihan.html      latihan interaktif
ringkasan.html    ringkasan + peta konsep
assets/tema.css   seluruh tampilan
assets/app.js     navigasi, progres baca, latihan
```

## Menjalankan

Buka `index.html` langsung di browser, atau sajikan folder ini secara statis:

```powershell
python -m http.server 4180
```

Progres baca disimpan di `localStorage` (`mf_progress_v1`), jadi tidak perlu server.

## Catatan

- Tanpa framework, tanpa bundler. Satu file CSS, satu file JS.
- Matematika dirender dengan KaTeX dari CDN.
- Sumber awal materi: modul `materi-3.html` pada repo [latihan-kalkulus](https://github.com/voltakyy/latihan-kalkulus), lalu dikembangkan ulang.
