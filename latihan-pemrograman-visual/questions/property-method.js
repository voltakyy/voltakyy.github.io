/**
 * @file property-method.js
 * @description Bank Soal Topik 2: Property & Method (Atribut dan Perilaku Objek)
 * @curriculum Pemrograman Visual (Alice 3 / Java OOP) - SPADA UMS Pertemuan 3 & 4
 * @learning_outcomes
 *   - Membedakan State (data/keadaan) dan Behavior (aksi/operasi).
 *   - Memahami konsep enkapsulasi dan penentu akses (public, private, protected).
 *   - Menganalisis perbedaan variabel instans (field) vs variabel lokal.
 *   - Memetakan properti grafis Alice 3 (posisi, warna, orientasi, opacity).
 */

/* Topik 2 — Property & Method */
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push(
  {
    topic: 'Property & Method',
    q: 'Dalam pemrograman berorientasi object, **property** (atribut/field) paling tepat dijelaskan sebagai...',
    options: [
      'Perilaku yang bisa dijalankan oleh object.',
      'Data atau keadaan (state) yang disimpan di dalam object.',
      'Method khusus yang dipakai untuk membuat object.',
      'File tempat class disimpan.'
    ],
    answer: 1,
    explain: `Berdasarkan **Modul Pertemuan 3 & 4 SPADA UMS**:
- **Property** (sering disebut atribut/field/state) adalah **data atau keadaan** yang dimiliki oleh object. Misalnya warna (*paint/color*), posisi koordinat (*x, y, z*), ukuran (*size*), orientasi/arah (*facing*), dan kecepatan (*speed*). Di Alice 3, nilai property ini dapat dilihat dan diubah di panel Properties atau lewat code.
- **Method** adalah aksi atau perilaku (*behavior*) yang dapat dilakukan oleh object, seperti [[move()]], [[turn()]], [[say()]], dan [[stop()]].

Pada diagram naskah UTS, [[nama]], [[usia]], [[gender]], [[alamat]], dan [[ipk]] adalah property milik [[Mahasiswa]]. Setiap property memiliki tipe data yang sesuai (misalnya [[String]] untuk nama atau [[double]] untuk IPK).

~~~
class Mahasiswa {
    String nama;      // property
    int usia;         // property
    double ipk;       // property
    String prodi;     // property
}
~~~

Property menempel pada siklus hidup object dan berbeda dari variabel lokal yang hanya hidup di dalam satu method.`
  },
  {
    topic: 'Property & Method',
    q: 'Perhatikan class berikut. Manakah yang merupakan **method**?',
    code: `class Mahasiswa {
    String nama;
    int usia;
    double ipk;
    String prodi;

    void belajar() {
        System.out.println(nama + " sedang belajar");
    }

    void mengerjakanTugas() {
        System.out.println(nama + " mengerjakan tugas");
    }

    double hitungIPK() {
        return ipk;
    }

    void makan() {
        System.out.println(nama + " makan");
    }
}`,
    options: [
      '[[nama]]',
      '[[usia]]',
      '[[mengerjakanTugas()]]',
      '[[prodi]]'
    ],
    answer: 2,
    explain: `Method adalah blok kode yang mendefinisikan **perilaku (behavior)** object. Ciri yang paling mudah dikenali: namanya diikuti tanda kurung [[()]], punya body di dalam [[{ }]], dan bisa menerima parameter serta mengembalikan nilai.

Pada class di atas, [[belajar()]], [[mengerjakanTugas()]], [[hitungIPK()]], dan [[makan()]] adalah method. Sementara [[nama]], [[usia]], [[ipk]], dan [[prodi]] adalah property (data/keadaan).

Menurut **Modul Pertemuan 3 UMS**: Tidak semua objek memiliki behavior yang sama, dan method harus sesuai dengan jenis objeknya (misalnya [[open()]] cocok untuk Door tetapi tidak untuk Robot/Character; sebaliknya [[move()]] cocok untuk Robot/Car tetapi tidak cocok untuk Door). Method mengeksekusi instruksi yang mengubah property/state object.`
  },
  {
    topic: 'Property & Method',
    q: 'Manakah penulisan property yang **paling tepat** di dalam class Java?',
    options: [
      '[[String nama;]]',
      '[[nama String;]]',
      '[[property String nama;]]',
      '[[void nama;]]'
    ],
    answer: 0,
    explain: `Penulisan property mengikuti pola **access modifier → tipe data → nama**, lalu diakhiri titik koma. Access modifier boleh tidak ditulis (berarti package-private), tetapi urutan tipe data dan nama tidak boleh dibalik.

~~~
class Mahasiswa {
    private String nama;
    private int usia = 18; // boleh langsung diberi nilai awal
}
~~~

Nama property sebaiknya memakai camelCase, misalnya [[namaLengkap]] atau [[hasilTani]]. Keyword [[property]] bukan bagian dari sintaks Java, dan [[void]] adalah tipe return untuk method yang tidak mengembalikan nilai — bukan tipe data property. Menulis [[nama String;]] juga salah karena Java membaca [[nama]] sebagai tipe dan [[String]] sebagai nama.`
  },
  {
    topic: 'Property & Method',
    q: 'Mengapa property sebaiknya diberi akses [[private]] dan diakses lewat getter/setter?',
    options: [
      'Agar program berjalan lebih lambat tetapi lebih aman.',
      'Agar data terlindungi dan validasi bisa dipusatkan di dalam class.',
      'Karena Java mewajibkan semua property harus private.',
      'Agar object tidak bisa dibuat oleh class lain.'
    ],
    answer: 1,
    explain: `Ini adalah inti dari **encapsulation** (enkapsulasi). Dengan membuat property [[private]], kode dari luar tidak bisa mengubah nilainya secara langsung. Perubahan harus melewati method yang kamu sediakan, sehingga kamu punya tempat untuk memeriksa nilai sebelum disimpan.

~~~
class Mahasiswa {
    private double ipk;

    public double getIpk() {
        return ipk;
    }

    public void setIpk(double ipk) {
        if (ipk >= 0.0 && ipk <= 4.0) {
            this.ipk = ipk;
        }
    }
}
~~~

Tanpa setter, [[m1.ipk = 99;]] bisa lolos dan merusak data. Dengan setter, nilai di luar rentang 0–4 otomatis ditolak. Getter dipakai kalau class lain hanya perlu membaca nilai. Java tidak mewajibkan semua field private, tetapi ini praktik yang umum karena membuat class lebih mudah dijaga dan diubah tanpa membongkar kode pemakai.`
  },
  {
    topic: 'Property & Method',
    q: 'Pada diagram class, tanda **+** di depan [[nama]] dan [[berjalan()]] menunjukkan bahwa anggota tersebut...',
    options: [
      'Bersifat private dan hanya bisa diakses dari dalam class.',
      'Bersifat public dan bisa diakses dari luar class.',
      'Bersifat protected dan hanya untuk subclass.',
      'Bersifat static dan dipakai bersama semua object.'
    ],
    answer: 1,
    explain: `Dalam notasi UML, **visibility** ditulis di depan anggota class:

- [[+]] berarti **public** — bisa diakses dari mana saja.
- [[-]] berarti **private** — hanya dari dalam class itu.
- [[#]] berarti **protected** — bisa diakses class itu dan subclass-nya.
- [[~]] berarti **package-private** — bisa diakses class lain di package yang sama.

Karena di diagram semua anggota ditandai [[+]], berarti [[nama]], [[usia]], [[ipk]], [[berjalan()]], dan method lain dirancang public. Dalam praktik, property biasanya lebih aman dibuat private dengan getter/setter public. Namun untuk menjawab soal diagram, ikuti notasi yang tertulis: [[+]] tetap berarti public.`
  },
  {
    topic: 'Property & Method',
    challenge: true,
    q: 'Perhatikan pemanggilan [[m1.setIpk(3.75);]]. Apa peran angka [[3.75]]?',
    options: [
      'Parameter, yaitu variabel yang dideklarasikan di dalam method.',
      'Argumen, yaitu nilai nyata yang dikirim ke parameter [[nilai]] saat method dipanggil.',
      'Nama method yang dipanggil.',
      'Tipe return dari method [[setIpk]].'
    ],
    answer: 1,
    explain: `**Parameter** adalah variabel yang ditulis di definisi method. **Argumen** adalah nilai nyata yang kamu kirim saat memanggil method. Bedanya terlihat dari posisinya:

~~~
public void setIpk(double nilai) { // nilai = parameter
    this.ipk = nilai;
}

m1.setIpk(3.75); // 3.75 = argumen
~~~

Saat [[setIpk(3.75)]] dijalankan, argumen [[3.75]] masuk ke parameter [[nilai]], lalu isi parameter itu disalin ke property [[ipk]]. Kalau method punya beberapa parameter, urutan argumen harus sesuai. Memahami istilah ini penting karena soal sering menyebut “parameter” dan “argumen” secara bergantian, padahal posisinya berbeda.`
  },
  {
    topic: 'Property & Method',
    challenge: true,
    q: 'Perhatikan constructor berikut. Apa yang salah?',
    code: `class Mahasiswa {
    String nama;

    Mahasiswa(String nama) {
        nama = nama;
    }
}`,
    options: [
      'Tidak ada yang salah; property [[nama]] otomatis terisi.',
      '[[nama = nama;]] mengisi parameter dengan dirinya sendiri, property tetap kosong. Seharusnya [[this.nama = nama;]].',
      'Constructor tidak boleh memiliki parameter.',
      '[[String nama;]] seharusnya ditulis [[void nama;]].'
    ],
    answer: 1,
    explain: `Di dalam constructor, parameter [[nama]] **menutupi** (shadowing) property [[nama]] milik object. Jadi ketika ditulis [[nama = nama;]], Java menganggap keduanya merujuk ke parameter. Hasilnya parameter diisi dengan dirinya sendiri, sementara property object tidak pernah tersentuh dan tetap [[null]].

~~~
Mahasiswa(String nama) {
    this.nama = nama;
}
~~~

Keyword [[this]] merujuk ke object yang sedang dibuat. Dengan [[this.nama]], kamu secara eksplisit memilih property milik object, lalu mengisinya dengan nilai parameter. Pola yang sama sering dipakai di setter. Ini juga contoh bagus bahwa dua hal bisa punya nama sama tetapi berada di ruang lingkup berbeda.`
  }
);
