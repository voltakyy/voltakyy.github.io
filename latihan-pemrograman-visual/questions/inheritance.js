/**
 * @file inheritance.js
 * @description Bank Soal Topik 3: Inheritance (Pewarisan Kelas dan Relasi 'is-a')
 * @curriculum Pemrograman Visual (Alice 3 / Java OOP) - SPADA UMS Pertemuan 5 & Modul Netlify
 * @learning_outcomes
 *   - Memahami konsep generalisasi (Superclass) dan spesialisasi (Subclass).
 *   - Menguasai rekonstruksi diagram UML berbasis prinsip Don't Repeat Yourself (DRY).
 *   - Menganalisis sintaks pewarisan `extends` dan pemanggilan `super()`.
 *   - Memahami visibilitas modifier `protected` untuk aksesibilitas kelas turunan.
 */

/* Topik 3 — Inheritance */
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push(
  {
    topic: 'Inheritance',
    q: 'Pada diagram, **Mahasiswa** dan **Petani** sama-sama memiliki [[nama]], [[usia]], [[gender]], [[alamat]], [[berjalan()]], dan [[makan()]]. Rancangan terbaik agar tidak terjadi duplikasi adalah...',
    options: [
      'Menyalin anggota yang sama ke kedua class supaya aman.',
      'Membuat superclass bersama, misalnya [[Orang]], yang menampung anggota tersebut, lalu [[Mahasiswa]] dan [[Petani]] mewarisinya.',
      'Menghapus semua method yang sama dari kedua class.',
      'Menggabungkan Mahasiswa dan Petani menjadi satu class.'
    ],
    answer: 1,
    explain: `Anggota yang sama di dua class adalah tanda adanya **generalisasi**. Solusi OOP-nya: buat superclass yang menampung bagian bersama, lalu subclass menambahkan hal yang khas.

~~~
class Orang {
    protected String nama;
    protected int usia;
    protected String gender;
    protected String alamat;

    void berjalan() { }
    void makan() { }
}

class Mahasiswa extends Orang {
    double ipk;
    String kampus;
    String prodi;

    void belajar() { }
    void mengerjakanTugas() { }
}

class Petani extends Orang {
    String hasilTani;

    void bertani() { }
    void berdagang() { }
    void menawar() { }
}
~~~

Dengan cara ini, [[nama]] dan [[makan()]] hanya ditulis sekali. Kalau nanti ada perubahan aturan makan, kamu cukup mengubahnya di [[Orang]], bukan di dua tempat. Menyalin kode memang cepat di awal, tetapi menyulitkan perawatan. Menggabungkan dua class juga salah karena Mahasiswa dan Petani adalah dua entitas berbeda yang kebetulan berbagi sifat.`
  },
  {
    topic: 'Inheritance',
    q: 'Jika ditulis [[class Mahasiswa extends Orang]], pernyataan yang benar adalah...',
    options: [
      '[[Orang]] adalah subclass dari [[Mahasiswa]].',
      '[[Mahasiswa]] mewarisi property dan method [[Orang]], lalu boleh menambah atau meng-override method.',
      '[[Mahasiswa]] tidak boleh lagi memiliki method sendiri.',
      'Java mengizinkan satu class mewarisi banyak class sekaligus.'
    ],
    answer: 1,
    explain: `Keyword [[extends]] menyatakan pewarisan. [[Mahasiswa]] menjadi **subclass** (class turunan) dari [[Orang]], dan [[Orang]] adalah **superclass**. Hubungannya dibaca “Mahasiswa adalah Orang”, sehingga semua anggota [[Orang]] yang bisa diakses ikut dimiliki [[Mahasiswa]].

Subclass tetap boleh menambah property dan method baru, bahkan mengganti perilaku method warisan dengan **overriding**. Java hanya mengizinkan satu class mewarisi satu superclass secara langsung; multiple inheritance untuk class tidak didukung. Constructor superclass bisa dipanggil dengan [[super(...)]], dan method superclass dengan [[super.method()]].

Perlu diingat: member [[private]] tetap “diwarisi” secara data, tetapi tidak bisa diakses langsung oleh subclass. Untuk itu biasanya dipakai [[protected]] atau getter/setter public.`
  },
  {
    topic: 'Inheritance',
    q: 'Jika Mahasiswa dan Petani mewarisi class [[Orang]] yang punya method [[makan()]], lalu keduanya menulis ulang method itu dengan perilaku berbeda, konsep yang tepat adalah...',
    options: [
      'Overloading',
      'Overriding',
      'Encapsulation',
      'Looping'
    ],
    answer: 1,
    explain: `**Overriding** terjadi ketika subclass menulis ulang method yang sudah ada di superclass dengan nama, parameter, dan return type yang sama. Di diagram, [[Orang.makan()]] bisa di-override oleh [[Mahasiswa.makan()]] dan [[Petani.makan()]] agar masing-masing punya perilaku sendiri.

~~~
class Orang {
    void makan() {
        System.out.println("Orang makan");
    }
}

class Mahasiswa extends Orang {
    @Override
    void makan() {
        System.out.println("Mahasiswa makan sambil membaca");
    }
}
~~~

Anotasi [[@Override]] membantu compiler memeriksa apakah method benar-benar menimpa method superclass. Overriding juga membuat **polymorphism** bekerja: variabel bertipe [[Orang]] bisa menunjuk object [[Mahasiswa]], dan [[makan()]] yang dijalankan adalah versi [[Mahasiswa]]. Bandingkan dengan overloading, yang punya nama sama tetapi **parameter berbeda** di class yang sama.`
  },
  {
    topic: 'Inheritance',
    q: 'Di diagram **Petani**, method [[makan()]] ditulis dua kali dengan parameter yang sama. Interpretasi paling tepat adalah...',
    options: [
      'Itu overloading karena namanya sama.',
      'Itu pendefinisian ganda dengan signature identik; tidak valid dan kemungkinan salah tulis.',
      'Java otomatis menjadikannya dua method berbeda.',
      'Itu membuat Petani menjadi abstract class.'
    ],
    answer: 1,
    explain: `**Signature method** terdiri dari nama dan daftar tipe parameter. Dua method dengan signature identik tidak boleh berada dalam satu class. Kalau [[makan()]] ditulis dua kali tanpa parameter berbeda, Java akan menolaknya saat kompilasi dengan pesan “method is already defined”.

Overloading baru terjadi kalau parameternya berbeda, misalnya:

~~~
void makan() { }
void makan(String menu) { }
void makan(String menu, int porsi) { }
~~~

Ketiganya sah karena signature-nya berbeda. Kalau maksud diagram adalah override dari [[Orang.makan()]], cukup tulis satu kali di [[Petani]]. Kalau maksudnya dua perilaku berbeda, ubah salah satunya agar punya parameter atau nama yang berbeda. Diagram yang menulis [[makan()]] dua kali hampir pasti typo.`
  },
  {
    topic: 'Inheritance',
    q: 'Berdasarkan diagram, method yang khas dimiliki **Petani** dan tidak dimiliki **Mahasiswa** adalah...',
    options: [
      '[[makan()]] dan [[berjalan()]]',
      '[[bertani()]], [[berdagang()]], dan [[menawar()]]',
      '[[mengerjakanTugas()]] dan [[belajar()]]',
      '[[belajar()]]'
    ],
    answer: 1,
    explain: `Membaca diagram class berarti membedakan anggota **bersama** dan anggota **khas**. [[nama]], [[usia]], [[gender]], [[alamat]], [[berjalan()]], dan [[makan()]] muncul di kedua class, sehingga cocok dipindahkan ke superclass [[Orang]].

Yang khas milik [[Petani]] adalah [[bertani()]], [[berdagang()]], dan [[menawar()]], ditambah property [[hasilTani]]. Sementara [[Mahasiswa]] punya [[belajar()]], [[mengerjakanTugas()]], serta property [[ipk]], [[kampus]], dan [[prodi]].

Pembagian ini penting saat merancang inheritance: taruh yang umum di superclass, taruh yang khusus di subclass. Kalau [[belajar()]] dipaksa masuk ke [[Orang]], Petani akan mewarisi perilaku yang tidak relevan. Sebaliknya, kalau [[bertani()]] ditaruh di [[Orang]], semua Mahasiswa ikut bisa bertani padahal belum tentu perlu.`
  },
  {
    topic: 'Inheritance',
    challenge: true,
    q: '[[Orang]] punya property [[private String nama;]]. Jika [[Mahasiswa extends Orang]], apakah [[Mahasiswa]] bisa mengakses [[nama]] secara langsung?',
    options: [
      'Bisa, karena semua anggota superclass otomatis bisa diakses subclass.',
      'Tidak; [[private]] hanya bisa diakses di dalam class pemiliknya. Gunakan getter/setter atau ubah menjadi [[protected]].',
      'Bisa, tetapi hanya di dalam constructor.',
      'Tidak bisa, karena Java melarang class diwariskan.'
    ],
    answer: 1,
    explain: `Keyword [[private]] membatasi akses hanya pada class tempat anggota itu dideklarasikan. Subclass memang “membawa” data tersebut, tetapi tidak boleh menyentuhnya langsung. Jadi [[nama]] tetap ada di object [[Mahasiswa]], hanya saja aksesnya harus lewat method yang disediakan [[Orang]].

~~~
class Orang {
    private String nama;

    public String getNama() {
        return nama;
    }
}

class Mahasiswa extends Orang {
    void sapa() {
        System.out.println("Halo " + getNama()); // boleh
        // System.out.println(nama);             // error
    }
}
~~~

Kalau kamu ingin subclass bisa mengakses langsung, gunakan [[protected]]. Kalau ingin data tetap terlindungi, pertahankan [[private]] dan sediakan getter/setter. Ini contoh nyata bahwa inheritance dan encapsulation harus bekerja sama, bukan saling menggantikan.`
  },
  {
    topic: 'Inheritance',
    challenge: true,
    q: 'Apa fungsi [[super()]] di dalam constructor subclass?',
    options: [
      'Memanggil constructor superclass untuk menginisialisasi bagian yang diwarisi.',
      'Menghapus constructor superclass dari memori.',
      'Membuat object baru dari class yang berbeda.',
      'Mengubah access modifier property superclass.'
    ],
    answer: 0,
    explain: `Berdasarkan **Slide Dosen Netlify (extends-super-inheritance)**:
Saat subclass dibuat, bagian superclass dari object juga harus diinisialisasi terlebih dahulu. [[super()]] memanggil constructor superclass dan **wajib menjadi statement pertama** di dalam constructor subclass (*constructor chaining*).

~~~
class Orang {
    String nama;

    Orang(String nama) {
        this.nama = nama;
    }
}

class Mahasiswa extends Orang {
    double ipk;

    Mahasiswa(String nama, double ipk) {
        super(nama);   // memanggil constructor Orang (wajib di baris 1)
        this.ipk = ipk;
    }
}
~~~

Tiga kegunaan utama keyword [[super]] di Java menurut modul kuliah:
1. **[[super.method()]]**: Memanggil method parent yang telah di-override di child class (contoh pada slide: [[super.start()]] di class [[Car extends Vehicle]]).
2. **[[super(...)]]**: Memanggil constructor superclass.
3. **[[super.field]]**: Mengakses property/field milik parent jika tertutup (*shadowing*) oleh field bernama sama di child class.`
  }
);
