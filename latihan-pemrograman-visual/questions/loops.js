/**
 * @file loops.js
 * @description Bank Soal Topik 5: Control Structures & Loops (Struktur Kontrol & Perulangan)
 * @curriculum Pemrograman Visual (Alice 3 / Java OOP) - SPADA UMS Pertemuan 3 & 5
 * @learning_outcomes
 *   - Memahami konsep urutan sekuensial (Sequence) vs eksekusi konkuren (Do Together).
 *   - Membedakan Count Loop (deterministik/pasti) vs While Loop (kondisional dinamis).
 *   - Menganalisis kondisi batas terminasi perulangan dan pencegahan infinite loop.
 *   - Mengidentifikasi pola perulangan bersarang (Nested Loop) pada animasi grafis.
 */

/* Topik 5 — Perulangan */
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push(
  {
    topic: 'Perulangan',
    q: 'Perulangan (loop) paling tepat dijelaskan sebagai...',
    options: [
      'Blok kode yang dijalankan tepat satu kali.',
      'Struktur kontrol yang mengulang blok kode selama kondisi terpenuhi atau sebanyak jumlah tertentu.',
      'Method khusus untuk menghitung angka.',
      'Class yang menyimpan banyak object.'
    ],
    answer: 1,
    explain: `Berdasarkan **Modul Pertemuan 3 & 5 UMS**:
Urutan instruksi (*sequence*) menentukan hasil akhir perilaku program, dan komputer menjalankan instruksi secara berurutan. Saat instruksi yang sama perlu diulang berkali-kali (misalnya robot bergerak maju 5 langkah), kita menggunakan struktur kontrol **perulangan (loop)** daripada menulis baris perintah berulang-ulang.

Ada dua model loop: **count-controlled** (diulang sebanyak jumlah tertentu yang sudah pasti, seperti for atau count up to) dan **condition-controlled** (diulang selama kondisi boolean bernilai benar, seperti while).

~~~
for (int i = 1; i <= 5; i++) {
    System.out.println("Putaran ke-" + i);
}
~~~

Di sini [[i]] mulai dari 1, diulang selama [[i <= 5]], dan bertambah satu setiap putaran. Tanpa pembaruan nilai, kondisi bisa selalu benar dan menyebabkan infinite loop.`
  },
  {
    topic: 'Perulangan',
    q: 'Apa output dari kode berikut?',
    code: `for (int i = 1; i <= 3; i++) {
    System.out.print(i + " ");
}`,
    options: [
      '[[1 2 3]]',
      '[[0 1 2]]',
      '[[1 2 3 4]]',
      'Tidak mencetak apa pun.'
    ],
    answer: 0,
    explain: `Loop [[for]] punya tiga bagian: [[int i = 1]] (inisialisasi, dijalankan sekali), [[i <= 3]] (kondisi, dicek sebelum tiap putaran), dan [[i++]] (update, dijalankan setelah body).

Urutannya: [[i = 1]] lolos kondisi, cetak [[1]], naik ke 2; cetak [[2]], naik ke 3; cetak [[3]], naik ke 4; kondisi [[4 <= 3]] salah, loop berhenti. Karena memakai [[print]] bukan [[println]], hasilnya satu baris: [[1 2 3]].

Kalau kondisinya [[i < 3]], outputnya hanya [[1 2]]. Kalau dimulai dari [[i = 0]], outputnya [[0 1 2]]. Kesalahan satu langkah seperti ini sering muncul di soal, jadi biasakan menelusuri nilai variabel satu per satu.`
  },
  {
    topic: 'Perulangan',
    q: 'Perbedaan **while** dan **do-while** yang benar adalah...',
    options: [
      'Keduanya selalu menjalankan body minimal satu kali.',
      '[[do-while]] memeriksa kondisi setelah body sehingga body minimal sekali, sedangkan [[while]] memeriksa kondisi sebelum body.',
      '[[while]] minimal sekali, sedangkan [[do-while]] bisa nol kali.',
      '[[do-while]] tidak memakai kondisi sama sekali.'
    ],
    answer: 1,
    explain: `[[while]] menguji kondisi **sebelum** menjalankan body. Kalau kondisi sudah salah sejak awal, body tidak pernah dijalankan. [[do-while]] menguji kondisi **setelah** body, sehingga body pasti dijalankan minimal satu kali.

~~~
int x = 10;

while (x < 5) {
    System.out.println("while");
} // tidak pernah tercetak

do {
    System.out.println("do-while");
} while (x < 5); // tercetak sekali
~~~

Perhatikan titik koma setelah [[while (x < 5)]] pada do-while. Gunakan [[while]] kalau blok mungkin tidak perlu dijalankan sama sekali, dan [[do-while]] kalau blok harus dijalankan dulu sebelum kondisi diperiksa — misalnya menampilkan menu lalu meminta pilihan pengguna.`
  },
  {
    topic: 'Perulangan',
    q: 'Mengapa kode berikut berpotensi menyebabkan **infinite loop**?',
    code: `int i = 0;
while (i < 5) {
    System.out.println("Halo");
}`,
    options: [
      'Karena [[System.out.println]] tidak boleh berada di dalam while.',
      'Karena nilai [[i]] tidak pernah berubah, sehingga kondisi [[i < 5]] selalu benar.',
      'Karena while hanya boleh dipakai untuk angka genap.',
      'Karena kurung kurawal pada while tidak diperlukan.'
    ],
    answer: 1,
    explain: `Variabel [[i]] dimulai dari 0, tetapi tidak pernah diubah di dalam body. Akibatnya kondisi [[i < 5]] selalu benar dan loop berjalan tanpa henti. Program bisa terasa macet atau menghabiskan CPU.

~~~
int i = 0;
while (i < 5) {
    System.out.println("Halo");
    i++; // update yang hilang
}
~~~

Loop [[while (true)]] juga sah kalau memang disengaja, asalkan ada jalur keluar seperti [[break]]. Yang berbahaya adalah loop yang seharusnya berhenti tetapi variabel pengendalinya tidak pernah berubah. Saat menulis loop, selalu tanyakan: **apa yang membuat kondisi ini akhirnya bernilai salah?**`
  },
  {
    topic: 'Perulangan',
    q: 'Guardian harus menembakkan air **tepat 5 kali**. Struktur perulangan paling sesuai adalah...',
    options: [
      '[[while (true) { tembakAir(); }]]',
      '[[for (int i = 0; i < 5; i++) { tembakAir(); }]]',
      '[[do { tembakAir(); } while (nyawa > 0);]]',
      '[[if (air > 0) { tembakAir(); }]]'
    ],
    answer: 1,
    explain: `Berdasarkan **Modul Pertemuan 5 SPADA UMS**:
Struktur perulangan (*loop*) secara garis besar dibedakan menjadi:
1. **Count-controlled loop** (di Alice 3 berupa blok **count up to**; di Java berupa perulangan [[for]]): dipakai ketika jumlah pengulangan sudah diketahui pasti sejak awal (misalnya tepat 5 kali).
2. **Condition-controlled loop** (di Alice 3 dan Java berupa blok [[while]]): dipakai ketika pengulangan bergantung pada suatu kondisi logika *boolean* yang belum tentu pasti jumlah putarannya.

~~~
for (int i = 0; i < 5; i++) {
    tembakAir();
}
~~~

Perhatikan: mulai dari 0 dan kondisi [[i < 5]] menghasilkan tepat 5 putaran (0, 1, 2, 3, 4). Di Alice 3, pola ini setara dengan membungkus instruksi ke dalam blok **count up to 5** yang dieksekusi secara sekuensial (di dalam [[doInOrder]]) atau simultan (di dalam [[doTogether]]).`
  },
  {
    topic: 'Perulangan',
    challenge: true,
    q: 'Berapa nilai akhir [[total]] setelah kode berikut dijalankan?',
    code: `int total = 0;
for (int i = 1; i <= 4; i++) {
    total += i;
}`,
    options: [
      '4',
      '10',
      '15',
      '24'
    ],
    answer: 1,
    explain: `[[total += i]] adalah singkatan dari [[total = total + i]]. Loop berjalan untuk [[i = 1, 2, 3, 4]], lalu berhenti saat [[i = 5]] karena kondisi [[i <= 4]] salah.

~~~
total = 0
i = 1 → total = 0 + 1 = 1
i = 2 → total = 1 + 2 = 3
i = 3 → total = 3 + 3 = 6
i = 4 → total = 6 + 4 = 10
~~~

Jadi hasil akhirnya **10**. Pola akumulasi seperti ini sering muncul di soal: inisialisasi [[total = 0]], lalu tambahkan nilai setiap putaran. Kalau loop-nya sampai [[i <= 5]], hasilnya 15. Kalau yang dijumlahkan hanya angka genap, hasilnya berbeda lagi — jadi selalu telusuri satu per satu, jangan menebak.`
  },
  {
    topic: 'Perulangan',
    challenge: true,
    q: 'Apa output dari kode **nested loop** berikut?',
    code: `for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}`,
    options: [
      '[[*\n**\n***]]',
      '[[***\n***\n***]]',
      '[[1\n12\n123]]',
      '[[***\n**\n*]]'
    ],
    answer: 0,
    explain: `Ini adalah **nested loop**: loop [[j]] berada di dalam loop [[i]]. Untuk setiap nilai [[i]], loop [[j]] berjalan dari 1 sampai [[i]], mencetak bintang tanpa pindah baris. Setelah loop dalam selesai, [[System.out.println()]] membuat baris baru.

- [[i = 1]]: [[j]] mencetak 1 bintang → [[*]]
- [[i = 2]]: [[j]] mencetak 2 bintang → [[**]]
- [[i = 3]]: [[j]] mencetak 3 bintang → [[***]]

Hasilnya adalah segitiga bertambah:

~~~
*
**
***
~~~

Kalau loop dalam memakai [[println]], setiap bintang akan berada di baris sendiri. Kalau kondisinya [[j <= 3]], kamu akan mendapat tiga baris berisi tiga bintang. Nested loop berguna untuk pola baris-kolom, tetapi hati-hati dengan jumlah putarannya: total putaran adalah hasil kali atau penjumlahan tergantung batas loop dalam.`
  }
);
