# Panduan & Strategi Lolos UTS Pemrograman Visual (Skor Maksimal)

Berdasarkan analisis naskah ujian resmi UTS Pemrograman Visual UMS dan evaluasi rubrik penilaian dosen.

---

## 🎯 1. Pola Soal yang Selalu Keluar di Setiap UTS

1. **Definisi & Perbedaan Class vs Object**:
   - *Kunci Skor Penuh*: Jangan cuma jawab "class itu kelas, object itu objek".
   - Jelaskan konsep **Cetak Biru (*blueprint*)** vs **Wujud Nyata (*instance*)**.
   - Berikan contoh nyata: `class Mobil` punya properti `roda, warna`, sedangkan `object mobilSaya = new Mobil()` dengan `warna = "Hitam"`.

2. **Daftar State (Property) dan Behavior (Method)**:
   - *Kunci Skor Penuh*: Bedakan dengan tegas antara **kata benda/keadaan** (*state*) dan **kata kerja/tindakan** (*behavior*).
   - Contoh Objek Manusia:
     - State: `nama`, `tinggiBadan`, `warnaKulit`, `golonganDarah`.
     - Behavior: `berjalan()`, `berbicara()`, `makan()`, `tidur()`.

3. **Rekonstruksi Diagram UML Inheritance (Kasus Mahasiswa, Petani, Pedagang)**:
   - *Kunci Skor Penuh*:
     - Gambar Superclass paling atas (`Manusia`), letakkan atribut umum (`nama`, `nik`, `alamat`) dan method umum (`makan()`, `bernapas()`) di sana.
     - Gambar Subclass di bawahnya (`Mahasiswa`, `Petani`, `Pedagang`) yang hanya berisi atribut unik masing-masing (misal Mahasiswa punya `nim`, Petani punya `luasLahan`).
     - Arah panah: dari anak **menunjuk ke induk** dengan kepala panah **segitiga kosong**.

4. **Perbedaan Function vs Procedure di Alice 3**:
   - *Kunci Skor Penuh*:
     - Sebutkan kata kunci **Return Value** (Function mengembalikan nilai, Procedure tidak / *void*).
     - Sebutkan perbedaan **efek terhadap animasi/state** (Procedure mengubah dunia virtual, Function hanya menghitung informasi).

5. **Kapan Menggunakan While Loop vs Count Loop**:
   - Count Loop: Jika jumlah perulangan **sudah diketahui secara pasti di awal** (contoh: lompat 5 kali).
   - While Loop: Jika perulangan bergantung pada **kondisi dinamis/sensor yang belum pasti kapan selesainya** (contoh: jalan terus selama jarak ke dinding > 1 meter).

---

## ⏱️ 2. Manajemen Waktu Pengerjaan Ujian (90 Menit)

* **Menit 0 - 10**: Baca keseluruhan soal esai dan identifikasi kata kunci utama.
* **Menit 10 - 35**: Kerjakan soal diagram UML (biasanya membutuhkan waktu menggambar kotak dan relasi).
* **Menit 35 - 65**: Tuliskan jawaban esai konseptual (Class/Object, State/Behavior, Procedure/Function).
* **Menit 65 - 80**: Selesaikan soal perulangan dan algoritma visual.
* **Menit 80 - 90**: *Review* ulang seluruh jawaban: periksa apakah ada nomor yang terlewat atau notasi diagram yang terbalik.
