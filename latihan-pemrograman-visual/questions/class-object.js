/**
 * @file class-object.js
 * @description Bank Soal Topik 1: Class & Object (Kelas dan Objek)
 * @curriculum Pemrograman Visual (Alice 3 / Java OOP) - SPADA UMS Pertemuan 3 & 4
 * @learning_outcomes
 *   - Memahami perbedaan fundamental cetak biru (blueprint) vs wujud nyata (instance).
 *   - Mengidentifikasi proses instansiasi objek menggunakan operator `new`.
 *   - Menganalisis relasi One Class to Many Objects (Satu Kelas Banyak Objek).
 *   - Menjelaskan alokasi memori heap objek dan variabel referensi.
 */

/* Topik 1 — Class & Object */
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push(
  {
    topic: 'Class & Object',
    q: 'Manakah penjelasan yang paling tepat tentang **class** dan **object**?',
    options: [
      'Class adalah object yang sudah dijalankan, sedangkan object adalah rancangan dari class.',
      'Class adalah cetak biru (blueprint) yang mendefinisikan data dan perilaku, sedangkan object adalah instance nyata yang dibuat dari class tersebut.',
      'Class dan object adalah dua istilah yang merujuk pada hal yang sama.',
      'Object harus dibuat terlebih dahulu sebelum sebuah class bisa didefinisikan.'
    ],
    answer: 1,
    explain: `Berdasarkan **Modul Pertemuan 3 & 4 SPADA UMS**:
- **Class** adalah cetak biru (blueprint) atau template yang mendefinisikan struktur data (**property**) dan perilaku (**method**). Di Alice 3, class berada di **Gallery** (misalnya class [[Bunny]] atau [[Robot]]).
- **Object** adalah wujud nyata (*instance*) dari class yang dimasukkan ke dalam **Scene** (misalnya [[Robot A]], [[Robot B]], [[Robot C]] atau [[bunny]], [[bunny2]]).

Satu class bisa menghasilkan banyak object (**One Class, Many Objects**). Setiap object memiliki salinan property-nya sendiri (misalnya warna, posisi, orientasi, ukuran, kecepatan), sehingga mengubah property object yang satu tidak akan mengubah object lainnya.

Analogi resmi modul dosen: Dari satu cetak biru **Class Rumah** (warna, jumlah lantai, lokasi), dapat dibangun **Rumah A** (Solo, putih), **Rumah B** (Yogyakarta, cokelat), dan **Rumah C** (Bandung, abu-abu).

~~~
class Robot {
    String nama;
    String warna;
    int kecepatan;
}

Robot a = new Robot();
Robot b = new Robot();

a.nama = "Robot A"; a.warna = "Biru";  a.kecepatan = 2;
b.nama = "Robot B"; b.warna = "Merah"; b.kecepatan = 3;
~~~

[[a]] dan [[b]] adalah dua instance berbeda dari class yang sama. Jadi, class bicara soal **rancangan/blueprint**, sedangkan object bicara soal **wujud nyata/instance** dari rancangan itu.`
  },
  {
    topic: 'Class & Object',
    q: 'Perhatikan baris kode [[Petani tani1 = new Petani();]]. Apa yang sebenarnya terjadi pada baris tersebut?',
    options: [
      'Hanya mendeklarasikan variabel, tanpa membuat object apa pun.',
      'Membuat object [[Petani]] di memori, menjalankan constructor, lalu menyimpan referensinya ke variabel [[tani1]].',
      'Menyalin seluruh isi class [[Petani]] ke dalam variabel.',
      'Menghapus object [[Petani]] lain yang sudah ada.'
    ],
    answer: 1,
    explain: `Baris [[Petani tani1 = new Petani();]] melakukan tiga hal sekaligus:

- [[Petani tani1]] mendeklarasikan variabel bertipe [[Petani]].
- [[new Petani()]] membuat object baru di memori dan menjalankan **constructor** [[Petani()]].
- Hasilnya berupa **referensi** yang disimpan ke [[tani1]], sehingga object bisa diakses lewat variabel itu.

Constructor adalah method khusus yang namanya sama dengan class dan tidak punya return type. Ia dipakai untuk menyiapkan keadaan awal object, misalnya mengisi property [[nama]] dan [[usia]].

~~~
Petani tani1 = new Petani("Pak Slamet", 45);
System.out.println(tani1.nama); // Pak Slamet
~~~

Sebagai perbandingan, [[Petani tani2;]] hanya mendeklarasikan variabel. Isinya masih [[null]] karena belum ada object yang dibuat. Memanggil [[tani2.bertani()]] sebelum object dibuat akan menghasilkan error.`
  },
  {
    topic: 'Class & Object',
    q: 'Dua object dibuat dari class [[Mahasiswa]]: [[m1]] dan [[m2]]. Lalu [[m1.ipk = 3.8;]] dijalankan. Berapa nilai [[m2.ipk]] jika [[ipk]] adalah instance field bertipe [[double]]?',
    options: [
      '3.8, karena property dibagi bersama oleh semua object.',
      '0.0, karena setiap object punya salinan instance field sendiri dan [[m2.ipk]] belum diisi.',
      'Terjadi error karena [[m2]] belum punya nilai.',
      'null, karena [[double]] tidak bisa menyimpan angka desimal.'
    ],
    answer: 1,
    explain: `Instance field adalah data milik **object**, bukan milik class secara keseluruhan. Saat [[m2]] dibuat, Java memberi nilai default untuk field-nya: [[double]] menjadi [[0.0]], [[int]] menjadi [[0]], [[boolean]] menjadi [[false]], dan tipe object menjadi [[null]]. Nilai [[3.8]] hanya masuk ke field [[ipk]] milik [[m1]].

~~~
Mahasiswa m1 = new Mahasiswa();
Mahasiswa m2 = new Mahasiswa();

m1.ipk = 3.8;

System.out.println(m1.ipk); // 3.8
System.out.println(m2.ipk); // 0.0
~~~

Akan berbeda ceritanya kalau [[ipk]] diberi keyword [[static]]. Field static dimiliki oleh class dan dipakai bersama semua object, sehingga perubahan lewat [[m1]] akan terlihat di [[m2]]. Untuk data yang memang khas per object — seperti nama, usia, atau IPK — gunakan instance field, bukan static.`
  },
  {
    topic: 'Class & Object',
    q: 'Apa fungsi utama **constructor** pada sebuah class?',
    options: [
      'Mengembalikan nilai hasil perhitungan ke pemanggil.',
      'Menginisialisasi object saat dibuat; namanya sama dengan class dan tidak memiliki return type.',
      'Menghapus object dari memori ketika program selesai.',
      'Mengubah sebuah class menjadi object secara otomatis.'
    ],
    answer: 1,
    explain: `Constructor dijalankan otomatis ketika object dibuat dengan [[new]]. Tugasnya menyiapkan keadaan awal: mengisi property, menjalankan validasi, atau menyiapkan resource yang dibutuhkan object. Nama constructor **harus sama dengan nama class** dan ia **tidak punya return type**, bahkan tidak boleh ditulis [[void]].

~~~
class Petani {
    String nama;
    int usia;

    Petani(String nama, int usia) {
        this.nama = nama;
        this.usia = usia;
    }
}

Petani p = new Petani("Pak Slamet", 45);
~~~

Kalau class tidak punya constructor sama sekali, Java menyediakan **default constructor** tanpa parameter. Begitu kamu menulis constructor sendiri, default constructor tidak lagi otomatis dibuat. Constructor juga bisa di-overload: beberapa constructor dengan parameter berbeda boleh ada dalam satu class.`
  },
  {
    topic: 'Class & Object',
    challenge: true,
    q: 'Di Alice 3 kamu menaruh dua objek kelinci, [[bunny1]] dan [[bunny2]], yang sama-sama dibuat dari class [[Bunny]]. Kamu memperbesar [[bunny1]]. Apa yang terjadi pada [[bunny2]]?',
    options: [
      'Ikut membesar karena keduanya memakai class yang sama.',
      'Tetap, karena setiap object menyimpan state-nya sendiri.',
      'Menghilang karena satu class hanya boleh punya satu object.',
      'Error, karena ukuran object tidak bisa diubah.'
    ],
    answer: 1,
    explain: `Di Alice 3, saat kamu menambahkan dua kelinci ke scene, sebenarnya kamu membuat dua **instance** dari class [[Bunny]]. Class menyediakan perilaku yang sama — misalnya method untuk melompat atau berbicara — tetapi ukuran, posisi, warna, dan state lain disimpan pada masing-masing object.

Jadi memperbesar [[bunny1]] tidak otomatis memperbesar [[bunny2]]. Ini persis seperti dua object [[Mahasiswa]] di Java: method-nya sama, tetapi nilai property-nya bisa berbeda.

Hal yang dibagi bersama adalah **definisi class**, bukan state object. Kalau kamu mengubah method di class [[Bunny]], kedua object akan memakai perilaku baru itu. Tetapi kalau kamu mengubah property milik [[bunny1]], hanya [[bunny1]] yang berubah. Inilah alasan object disebut instance: masing-masing punya wujud dan state sendiri.`
  }
);
