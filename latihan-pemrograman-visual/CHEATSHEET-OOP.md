# Lembar Contek (Cheatsheet) — OOP Java & Diagram Kelas UML

Rangkuman cepat konsep Object-Oriented Programming (OOP) dan notasi standar UML untuk persiapan UTS Pemrograman Visual.

---

## 1. Class vs Object

| Aspek | Class (Kelas) | Object (Objek) |
| :--- | :--- | :--- |
| **Definisi** | Cetak biru (*blueprint*) atau cetakan umum | Entitas nyata (*instance*) hasil cetakan |
| **Keberadaan Memori**| Hanya berupa deklarasi tipe data abstrak | Mengonsumsi memori nyata saat dijalankan |
| **State** | Mendefinisikan nama dan tipe variabel | Memiliki nilai data konkret tersimpan |
| **Analogi** | Gambar denah arsitektur rumah | Bangunan fisik rumah di lokasi tertentu |
| **Sintaks Java** | `public class Robot { ... }` | `Robot robotA = new Robot();` |

---

## 2. State & Behavior

* **State (Keadaan)**:
  - Disimpan dalam bentuk **Field / Variabel / Properti**.
  - Menjelaskan kondisi objek pada waktu tertentu (contoh: `energi = 100`, `posisiX = 4`).
* **Behavior (Perilaku)**:
  - Diimplementasikan dalam bentuk **Method / Prosedur / Fungsi**.
  - Menjelaskan aksi apa saja yang mampu dieksekusi oleh objek (contoh: `berjalan()`, `menembak()`).

---

## 3. Pewarisan (Inheritance & Relasi "is-a")

Inheritance memungkinkan sebuah kelas anak (*subclass*) memperoleh seluruh atribut dan metode dari kelas induk (*superclass*):
```java
// Superclass
public class Manusia {
    protected String nama;
    protected int umur;

    public void makan() {
        System.out.println("Sedang makan...");
    }
}

// Subclass
public class Mahasiswa extends Manusia {
    private String nim;
    private double ipk;

    public void belajar() {
        System.out.println("Sedang belajar materi visual...");
    }
}
```

### Keuntungan Inheritance:
1. **Pencegahan Redundansi**: Atribut umum (`nama`, `umur`) dideklarasikan satu kali di superclass.
2. **Ekstensibilitas**: Subclass cukup mendeklarasikan properti unik miliknya sendiri (`nim`, `ipk`).
3. **Polimorfisme**: Objek bertipe `Mahasiswa` dapat diperlakukan sebagai tipe umumnya `Manusia`.

---

## 4. Standar Notasi Diagram Kelas UML

Sebuah kotak kelas UML dibagi menjadi 3 kompartemen utama:
```text
+-----------------------------------+
|            NamaKelas              |  <-- Baris 1: Nama Kelas
+-----------------------------------+
| - atributPrivat: String           |  <-- Baris 2: Daftar Properti (Atribut)
| # atributProtected: int           |
| + atributPublik: boolean          |
+-----------------------------------+
| + methodPublik(param): void       |  <-- Baris 3: Daftar Behavior (Metode)
| + functionKembalian(): double     |
+-----------------------------------+
```

### Simbol Aksesibilitas (Visibility Modifier):
* `+` : **Public** (dapat diakses dari kelas mana saja).
* `-` : **Private** (hanya dapat diakses dari dalam kelas itu sendiri).
* `#` : **Protected** (dapat diakses oleh kelas itu sendiri dan kelas-kelas turunannya).
* `~` : **Package / Default** (dapat diakses oleh kelas dalam package yang sama).

### Simbol Relasi Inheritance:
* Garis panah dengan **kepala panah segitiga kosong (hollow triangle)** yang mengarah dari **Subclass menuju Superclass**.
