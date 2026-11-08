# Kamus Istilah (Glossary) — Pemrograman Visual & Alice 3 (OOP)

Daftar istilah penting dalam materi Pemrograman Visual berbasis Alice 3 dan Pemrograman Berorientasi Objek (OOP) Java untuk persiapan Ujian Tengah Semester (UTS).

---

## A
* **Alice 3**: Lingkungan pemrograman visual 3D berbasis blok dan teks Java yang dirancang untuk mengajarkan konsep dasar pemrograman berorientasi objek (OOP) secara visual dan intuitif.
* **Argument / Parameter Value**: Nilai konkret yang dikirimkan ke dalam *procedure* atau *function* saat dipanggil untuk mempengaruhi perilakunya (misal: jarak perpindahan `2.0`, arah `UP`).
* **Atomic Action**: Tindakan atau perintah tunggal yang tidak dapat dipecah lagi (misalnya `move`, `turn`, `roll`).

---

## B
* **Behavior (Perilaku)**: Segala tindakan, aksi, atau operasi yang dapat dilakukan oleh sebuah objek. Dalam pemrograman, *behavior* diimplementasikan melalui *methods* (*procedures* atau *functions*).
* **Biped**: Subkelas objek dalam Alice 3 yang memiliki dua kaki (seperti manusia, alien, robot bipedal) yang mewarisi kemampuan gerak langkah dua kaki.
* **Blueprint (Cetall Biru)**: Analogi populer untuk sebuah **Class**. Cetak biru mendefinisikan atribut dan kemampuan yang akan dimiliki oleh objek ketika dibuat (*instantiated*).
* **Boolean Expression**: Ekspresi logika yang menghasilkan nilai kebenaran `true` (benar) atau `false` (salah). Sering digunakan sebagai kondisi dalam percabangan `if/else` atau perulangan `while`.

---

## C
* **Class (Kelas)**: Cetak biru (*blueprint*) atau template abstrak yang mendefinisikan *state* (atribut/property) dan *behavior* (operasi/method) dari sekumpulan objek serupa. Contoh: `class Mahasiswa`, `class Robot`.
* **Control Structures**: Struktur kontrol alur logika program, mencakup sekuensial (*Do in order*), konkuren (*Do together*), kondisional (*If/Else*), dan repetisi (*Count*, *While*).
* **Count Loop**: Struktur perulangan terhitung (*definite loop*) yang mengeksekusi blok kode sebanyak $N$ kali yang telah ditentukan secara pasti di awal.

---

## D
* **Direction**: Sumbu pergerakan spasial 3D dalam Alice 3 yang relatif terhadap orientasi objek: `FORWARD`, `BACKWARD`, `LEFT`, `RIGHT`, `UP`, `DOWN`.
* **Do In Order**: Blok instruksi dalam Alice 3 yang mengeksekusi baris kode di dalamnya secara berurutan satu per satu dari atas ke bawah (sekuensial).
* **Do Together**: Blok instruksi dalam Alice 3 yang mengeksekusi seluruh baris kode di dalamnya secara serentak/bersamaan (konkuren).

---

## E
* **Encapsulation (Enkapsulasi)**: Prinsip OOP membungkus data (*properties*) dan operasi (*methods*) ke dalam satu kesatuan (*class*), serta melindungi data internal dari akses langsung yang tidak sah dari luar (*information hiding*).
* **Extends**: Kata kunci dalam Java yang digunakan oleh subkelas (*subclass*) untuk mewarisi sifat dan perilaku dari superkelas (*superclass*). Contoh: `class Mahasiswa extends Manusia`.

---

## F
* **Flyer**: Subkelas objek di Alice 3 yang memiliki sayap dan mewarisi animasi terbang/mengepak.
* **Function (Fungsi)**: Blok instruksi yang bertugas melakukan komputasi atau pengecekan, serta **wajib mengembalikan suatu nilai (*return value*)** kepada pemanggilnya tanpa mengubah *state* visual secara langsung. Contoh: `getDistanceTo()`, `getWidth()`.

---

## I
* **Inheritance (Pewarisan)**: Mekanisme OOP di mana sebuah kelas baru (*subclass*) mewarisi atribut (*properties*) dan metode (*behavior*) dari kelas yang sudah ada (*superclass*), merepresentasikan hubungan relasi **"is-a"** (adalah sebuah).
* **Instance**: Istilah teknis lain untuk **Object** konkret yang telah dialokasikan ke memori berdasarkan definisi suatu *class*.
* **Instantiation**: Proses pembuatan objek nyata dari cetak biru *class* (misalnya menggunakan kata kunci `new`).

---

## M
* **Method**: Blok kode modular di dalam suatu *class* yang merepresentasikan perilaku (*behavior*). Dalam Alice 3, *method* dibagi menjadi dua: **Procedure** (menjalankan aksi) dan **Function** (mengembalikan nilai).
* **Modifier (Access Modifier)**: Penentu hak akses suatu atribut atau method: `public` (+), `private` (-), dan `protected` (#).

---

## N
* **Nested Loop**: Perulangan di dalam perulangan lain, digunakan untuk menangani data multidimensi atau animasi bertingkat (misal: melakukan 3 langkah putaran, dan setiap putaran melompat 2 kali).

---

## O
* **Object (Objek)**: Entitas nyata (*concrete instance*) di memori yang dibuat berdasarkan cetak biru *class*, memiliki identitas unik, status (*state* spesifik), dan perilaku (*behavior*). Contoh: `mhs1` dengan nama "Budi".
* **Orientation**: Sudut hadap atau rotasi 3D suatu objek di dunia virtual, ditentukan oleh pergerakan `turn` (rotasi yaw/pitch) dan `roll` (kemiringan).

---

## P
* **Parameter**: Variabel penampung di definisi prosedur/fungsi yang menerima argumen data dari luar agar blok kode dapat bekerja secara dinamis dan fleksibel.
* **Procedural Abstraction**: Teknik menyembunyikan detail langkah-langkah implementasi yang rumit di balik sebuah nama prosedur yang bermakna. Mempermudah pemeliharaan (*maintainability*) dan *code reusability*.
* **Procedure (Prosedur)**: Blok instruksi yang menjalankan urutan aksi atau mengubah status (*state*) visual objek di dunia virtual, dan **tidak mengembalikan nilai** (*void*). Contoh: `move()`, `turn()`, `say()`.
* **Property (Atribut / Variabel Anggota)**: Karakteristik atau data yang dimiliki oleh suatu objek yang merepresentasikan status (*state*). Contoh: `warna`, `tinggi`, `kecepatan`.

---

## Q
* **Quadruped**: Kategori kelas objek di Alice 3 yang berkaki empat (seperti kuda, anjing, kucing) yang mewarisi sekumpulan prosedur animasi berjalan 4 kaki.

---

## R
* **Return Value**: Nilai hasil pemrosesan yang dikembalikan oleh sebuah *function* kepada pemanggil instruksi (dapat bertipe `Boolean`, `Number`, `TextString`, dsb.).
* **Roll**: Gerakan rotasi objek pada sumbu longitudinal (berguling ke kiri atau kanan).

---

## S
* **Scene**: Dunia virtual 3D tempat objek, kamera, pencahayaan, dan latar belakang ditempatkan di Alice 3.
* **State (Status / Keadaan)**: Nilai-nilai konkret yang tersimpan di dalam atribut/property objek pada suatu titik waktu tertentu (misal: `energi = 80`, `posisi = (0, 1.5, 0)`).
* **Subclass (Kelas Anak)**: Kelas turunan yang mewarisi sifat dari *superclass*, dan dapat menambahkan atribut atau method baru yang lebih spesifik.
* **Superclass (Kelas Induk)**: Kelas umum yang mewariskan atribut dan method ke satu atau beberapa subkelas di bawahnya.
* **Super (Kata Kunci)**: Referensi dalam pemrograman berorientasi objek yang digunakan untuk memanggil konstruktor atau metode dari kelas induk (*superclass*).
* **Swimmer**: Subkelas objek di Alice 3 yang hidup di air (seperti ikan, paus) dengan animasi sirip/berenang bawaan.

---

## T
* **Turn**: Gerakan rotasi objek pada sumbu vertikal (*yaw*, menghadap ke kiri/kanan) atau horizontal (*pitch*, mendongak/menunduk).

---

## U
* **UML (Unified Modeling Language)**: Bahasa visual standar untuk membuat diagram pemodelan perangkat lunak, terutama diagram kelas (*Class Diagram*) yang menggambarkan relasi inheritance, atribut, dan metode.

---

## W
* **While Loop**: Struktur perulangan bersyarat (*indefinite loop*) yang terus menerus mengeksekusi blok kode selama kondisi logika bernilai `true`, dan berhenti saat kondisi berubah menjadi `false`.
