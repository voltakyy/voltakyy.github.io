# Panduan Kontribusi (Contributing Guidelines)

Terima kasih atas ketertarikanmu berkontribusi pada repositori **Ruang Visual — Latihan UTS Pemrograman Visual**! Repositori ini didedikasikan untuk membantu mahasiswa dan pembelajar memahami konsep Pemrograman Visual (Alice 3) dan Pemrograman Berorientasi Objek (Java OOP) dengan cara yang interaktif dan menyenangkan.

---

## 📌 Ruang Lingkup Kontribusi

Anda dapat berkontribusi dalam berbagai bentuk:
1. **Penambahan Soal Latihan Baru**: Menambahkan soal pilihan ganda baru ke direktori `questions/`.
2. **Koreksi Pembahasan / Penjelasan**: Memperbaiki penjelasan yang kurang akurat, typo, atau ambigu.
3. **Penyempurnaan Tampilan (UI/UX)**: Meningkatkan kenyamanan membaca, tata letak responsif, atau animasi visualizer.
4. **Dokumentasi & Cheatsheet**: Menambah rangkuman materi baru atau melengkapi glosarium.

---

## 📝 Format Standar Soal Pilihan Ganda

Setiap soal baru ditempatkan pada file topik yang bersangkutan di dalam folder `questions/`:
- `class-object.js` untuk konsep Kelas, Objek, Instansiasi, dan State.
- `property-method.js` untuk Atribut, Nilai Properti, Prosedur, dan Hak Akses.
- `inheritance.js` untuk Pewarisan, Superclass, Subclass, Relasi "is-a", dan Diagram UML.
- `function-procedure.js` untuk Perbedaan Fungsi vs Prosedur, Return Value, dan Abstraksi.
- `loops.js` untuk Count Loop, While Loop, Do in order, dan Do together.

### Struktur Objek Soal:
```javascript
{
  topic: 'Nama Kategori Topik',
  q: 'Teks pertanyaan yang jelas, tidak ambigu, dan kontekstual.',
  options: [
    'Pilihan jawaban A',
    'Pilihan jawaban B',
    'Pilihan jawaban C',
    'Pilihan jawaban D'
  ],
  answer: 1, // Angka indeks 0-3 (0 = A, 1 = B, 2 = C, 3 = D)
  explain: 'Penjelasan mendalam mengapa opsi tersebut benar, dan mengapa opsi lainnya keliru.',
  challenge: false // Beri nilai true jika merupakan soal tingkat tinggi (HOTS) / studi kasus kompleks
}
```

---

## 🌿 Alur Git & Pull Request (PR)

1. **Fork** repositori ini ke akun GitHub Anda.
2. Buat branch baru untuk fitur atau perbaikan Anda:
   ```bash
   git checkout -b fiturs/tambah-soal-inheritance
   ```
3. Lakukan commit dengan pesan yang deskriptif menggunakan format Conventional Commits:
   ```bash
   git commit -m "feat(questions): tambah 2 soal studi kasus diagram UML inheritance"
   ```
4. Push ke branch Anda di GitHub:
   ```bash
   git push origin fiturs/tambah-soal-inheritance
   ```
5. Buat **Pull Request** ke branch `main` repositori utama dan jelaskan perubahan yang Anda buat.

---

## 💡 Etika & Standar Kualitas

- Pastikan tidak ada soal yang mengandung kunci jawaban yang keliru (*errata*).
- Berikan penjelasan (*explain*) yang mendidik, bukan sekadar "Jawaban B benar karena ada di buku".
- Jaga keselarasan gaya visual Neo-Brutalist Studio Paper pada file HTML/CSS jika mengubah tampilan.
