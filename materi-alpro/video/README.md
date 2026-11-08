# Video Penjelasan — Computational Thinking

`computational-thinking.mp4` — video penjelasan materi **03 Computational Thinking**
(berpikir komputasional: 4 pilar + contoh rute perjalanan).

## Spesifikasi

| Parameter | Nilai |
|---|---|
| Resolusi | 1920 × 1080 (16:9) |
| Frame rate | 30 fps |
| Durasi | 2 menit 10,9 detik |
| Video | H.264 High, `yuv420p` (TV range), CRF 19 |
| Audio | AAC-LC, 48 kHz, stereo, 192 kbps |
| Narasi | `id-ID-ArdiNeural` (edge-tts), Bahasa Indonesia |
| Ukuran | ± 6,2 MB |

## Struktur

| Berkas | Isi |
|---|---|
| `computational-thinking.mp4` | hasil akhir |
| `src/video.html` | seluruh animasi (8 scene) + mesin waktu `renderAt(t)` |
| `src/script.json` | naskah narasi per scene |
| `src/tts.py` | buat audio + `manifest.json` (timeline) |
| `src/render.js` | screenshot frame via Chrome → encode ffmpeg → mux |
| `src/qa.js` | render still di detik tertentu untuk cek tampilan |
| `src/manifest.json` | hasil hitung durasi tiap scene |

## Alur produksi

```powershell
# 1) narasi + timeline
python src/tts.py

# 2) cek tampilan (detik ke-8, 38, 72, 110)
node src/qa.js 8 38 72 110

# 3) render
node src/render.js frames
node src/render.js audio
node src/render.js mux
```

## Catatan

- Skrip di `src/` memakai path absolut (`D:\video-algo`) dan memanggil tool yang
  sudah terpasang di mesin produksi (Chrome, puppeteer, ffmpeg dari paket
  `imageio-ffmpeg`, `edge-tts`). Sesuaikan path bila dijalankan di komputer lain.
- Animasi sepenuhnya deterministik: satu fungsi `renderAt(t)` menghitung posisi
  dan opasitas setiap elemen dari waktu `t`, sehingga frame bisa diulang persis.
- Scene: pembuka → empat pilar → dekomposisi → pengenalan pola → abstraksi →
  perancangan algoritma → studi kasus rute → penutup.
