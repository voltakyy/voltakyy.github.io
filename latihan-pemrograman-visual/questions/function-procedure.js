/**
 * @file function-procedure.js
 * @description Bank Soal Topik 4: Function & Procedure (Abstraksi Prosedural & Fungsi Komputasi)
 * @curriculum Pemrograman Visual (Alice 3 / Java OOP) - SPADA UMS Pertemuan 6
 * @learning_outcomes
 *   - Memahami konsep dasar Procedural Abstraction dalam rekayasa perangkat lunak.
 *   - Membedakan aksi void (Procedure) vs komputasi dengan return value (Function).
 *   - Menganalisis parameter input dan fleksibilitas pemanggilan subprogram.
 *   - Menerapkan fungsi bawaan Alice 3 (getDistanceTo, getWidth, dsb) dalam ekspresi kondisi.
 */

/* Topik 4 — Function & Procedure */
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push(
  {
    topic: 'Function & Procedure',
    q: 'Perbedaan utama antara **function** dan **procedure** adalah...',
    options: [
      'Function selalu berjalan lebih cepat daripada procedure.',
      'Function mengembalikan nilai, sedangkan procedure menjalankan aksi tanpa mengembalikan nilai.',
      'Procedure hanya ada di Alice 3, function hanya ada di Java.',
      'Function tidak boleh memiliki parameter, procedure harus punya parameter.'
    ],
    answer: 1,
    explain: `Berdasarkan **Modul Pertemuan 6 SPADA UMS**:
- **Procedure** adalah subprogram/method yang menjalankan urutan aksi atau perintah tanpa mengembalikan nilai data (*void*). Contoh di Alice 3: [[this.bunny.move()]], [[this.bunny.turn()]], [[say("Halo")]], atau custom procedure [[jump()]].
- **Function** adalah subprogram/method yang melakukan perhitungan atau membaca keadaan object lalu **mengembalikan suatu nilai** (*non-void*). Contoh di Alice 3: [[this.bunny.getDistanceTo(target)]] (mengembalikan angka jarak) atau [[getHeight()]].

Di Java, perbedaan ini terlihat jelas dari *return type*:

~~~
public int hitungLuas(int p, int l) {
    return p * l;          // Function (mengembalikan nilai int)
}

public void sapa(String nama) {
    System.out.println("Halo " + nama); // Procedure (void, tanpa return nilai)
}
~~~

Function dapat diletakkan di dalam ekspresi atau kondisi logika, misalnya:
[[if (this.bunny.getDistanceTo(target) < 2.0)]].
Sebaliknya, procedure dipanggil sebagai instruksi aksi mandiri yang mengubah *state* visual di layar.`
  },
  {
    topic: 'Function & Procedure',
    q: 'Perhatikan dua method berikut. Pernyataan yang benar adalah...',
    code: `public int hitungLuas(int panjang, int lebar) {
    return panjang * lebar;
}

public void sapa(String nama) {
    System.out.println("Halo, " + nama);
}`,
    options: [
      'Keduanya function karena sama-sama punya parameter.',
      '[[hitungLuas]] adalah function, [[sapa]] adalah procedure.',
      '[[hitungLuas]] procedure karena menghitung, [[sapa]] function karena mencetak.',
      'Keduanya procedure karena berada di dalam class.'
    ],
    answer: 1,
    explain: `[[hitungLuas]] punya return type [[int]] dan mengembalikan hasil perkalian, jadi ia adalah **function**. [[sapa]] punya return type [[void]] dan hanya menjalankan aksi mencetak, jadi ia adalah **procedure**.

~~~
int luas = hitungLuas(5, 3); // hasil bisa disimpan
System.out.println(luas);    // 15

sapa("Ayu");                 // dipanggil untuk efeknya
~~~

Banyak yang keliru mengira “yang menghitung itu function, yang mencetak itu procedure”. Yang menentukan adalah **return type** dan ada tidaknya nilai yang dikembalikan, bukan isi method-nya. Sebuah procedure boleh melakukan perhitungan juga, asalkan tidak mengembalikan nilai. Sebaliknya, function sebaiknya tidak bergantung pada efek samping seperti mencetak ke layar.`
  },
  {
    topic: 'Function & Procedure',
    q: 'Di Alice 3, [[getDistanceTo(target)]] dan [[say("Halo")]] termasuk...',
    options: [
      'Keduanya procedure.',
      '[[getDistanceTo]] function karena mengembalikan nilai, [[say]] procedure karena menjalankan aksi.',
      'Keduanya function.',
      '[[getDistanceTo]] procedure, [[say]] function.'
    ],
    answer: 1,
    explain: `Di Alice 3, method dikelompokkan menjadi **procedure** dan **function**. Function menghasilkan nilai yang bisa dipakai di ekspresi atau kondisi. [[getDistanceTo(target)]] mengembalikan angka jarak, sehingga termasuk function. [[say("Halo")]] hanya menampilkan ucapan dan tidak menghasilkan nilai, sehingga termasuk procedure.

~~~
if (this.getDistanceTo(bunny) < 2.0) {
    this.say("Halo, Bunny!");
}
~~~

Perhatikan bahwa function [[getDistanceTo]] dipakai **di dalam** kondisi [[if]], sedangkan procedure [[say]] menjadi perintah di dalam blok. Pola ini penting saat merancang aplikasi interaktif: function dipakai untuk mengambil informasi, procedure dipakai untuk melakukan sesuatu. Kalau kamu menaruh function sebagai statement biasa tanpa memakai hasilnya, biasanya itu tanda ada yang kurang tepat.`
  },
  {
    topic: 'Function & Procedure',
    q: 'Sebuah method dideklarasikan [[public int hitung()]] tetapi ada jalur eksekusi yang tidak memiliki [[return]]. Apa yang terjadi?',
    options: [
      'Java otomatis mengembalikan 0.',
      'Terjadi error saat kompilasi karena method non-void wajib mengembalikan nilai di semua jalur.',
      'Method otomatis berubah menjadi procedure.',
      'Program berjalan dan mengembalikan null.'
    ],
    answer: 1,
    explain: `Method dengan return type selain [[void]] **wajib** mengembalikan nilai di setiap jalur eksekusi. Java memeriksa ini saat kompilasi, bukan saat program berjalan. Kalau ada kemungkinan alur sampai akhir method tanpa [[return]], compiler akan menolak dengan pesan “missing return statement”.

~~~
public int hitung(int a) {
    if (a > 0) {
        return a;
    }
    // jika a <= 0, tidak ada return → compile error
}
~~~

Perbaikannya bisa dengan menambahkan [[return 0;]] di akhir, atau memakai [[else]], atau melempar exception. Java tidak mengembalikan 0 secara otomatis seperti anggapan sebagian orang. Yang otomatis diberi nilai default adalah **field**, bukan nilai return method. Untuk procedure [[void]], kamu boleh memakai [[return;]] tanpa nilai, tetapi tidak wajib.`
  },
  {
    topic: 'Function & Procedure',
    challenge: true,
    q: 'Function [[hitungTotal(int harga, int jumlah)]] mengembalikan total harga. Manakah pemakaian yang paling tepat?',
    options: [
      '[[hitungTotal(5000, 3);]] lalu berharap hasilnya tersimpan otomatis.',
      '[[int total = hitungTotal(5000, 3);]] lalu gunakan [[total]].',
      '[[void total = hitungTotal(5000, 3);]]',
      '[[hitungTotal;]]'
    ],
    answer: 1,
    explain: `Nilai yang dikembalikan function harus **ditangkap** atau langsung dipakai. Cara paling jelas adalah menyimpannya ke variabel dengan tipe yang sesuai:

~~~
int total = hitungTotal(5000, 3);
System.out.println("Total: " + total);
~~~

Kamu juga boleh memakai hasilnya langsung di ekspresi:

~~~
System.out.println(hitungTotal(5000, 3));
int bayar = hitungTotal(5000, 3) + 2000;
~~~

Memanggil [[hitungTotal(5000, 3);]] tanpa menyimpan hasilnya secara sintaks sah, tetapi nilai return-nya terbuang dan pemanggilan itu tidak berguna. [[void total = ...]] salah karena [[void]] bukan tipe data variabel. Menulis [[hitungTotal;]] juga salah karena method harus dipanggil dengan tanda kurung.`
  }
);
