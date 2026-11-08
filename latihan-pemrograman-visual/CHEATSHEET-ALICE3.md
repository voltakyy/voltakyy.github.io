# Lembar Contek (Cheatsheet) — Alice 3 & Visual Blocks

Panduan ringkas dan cepat seputar perintah bawaan, struktur blok logika, dan orientasi spasial di Alice 3.

---

## 1. Sumbu Orientasi & Pergerakan Spasial (6 Arah)
Dalam Alice 3, pergerakan objek bersifat relatif terhadap orientasi lokal objek itu sendiri:
* `FORWARD` : Bergerak maju ke arah depan objek.
* `BACKWARD` : Bergerak mundur ke arah belakang objek.
* `LEFT` : Bergeser ke arah kiri objek tanpa berputar (*strafe*).
* `RIGHT` : Bergeser ke arah kanan objek tanpa berputar.
* `UP` : Naik lurus ke atas.
* `DOWN` : Turun lurus ke bawah.

### Gerakan Rotasi:
* `turn(direction, amount)` : Berputar pada sumbu objek:
  - `LEFT` / `RIGHT` : Rotasi yaw (menoleh ke kiri/kanan).
  - `FORWARD` / `BACKWARD` : Rotasi pitch (menunduk/mendongak).
* `roll(direction, amount)` : Berguling miring pada sumbu longitudinal objek (`LEFT` / `RIGHT`).

---

## 2. Struktur Kontrol Alur (Control Tiles)

| Blok Logika | Fungsi & Karakteristik |
| :--- | :--- |
| **Do In Order** | Menjalankan baris instruksi di dalamnya secara **sekuensial** (satu demi satu dari atas ke bawah). |
| **Do Together** | Menjalankan instruksi di dalamnya secara **simultan / bersamaan** (misal: tangan bergerak sambil kaki melangkah). |
| **Count Loop** | Perulangan **terhitung (deterministik)**. Menjalankan blok kode sebanyak $N$ kali secara pasti. |
| **While Loop** | Perulangan **kondisional dinamis**. Terus berulang selama kondisi boolean bernilai `true`. |
| **If / Else** | Percabangan kondisi. Mengeksekusi blok `if` jika `true`, atau blok `else` jika `false`. |

---

## 3. Procedure vs Function di Alice 3

| Karakteristik | Procedure (Prosedur) | Function (Fungsi) |
| :--- | :--- | :--- |
| **Tujuan Utama** | Menjalankan aksi / mengubah visual world | Menghitung / mengajukan pertanyaan (*query*) |
| **Return Value** | **TIDAK ADA** (`void`) | **WAJIB ADA** (`Boolean`, `Double`, dsb.) |
| **Efek Visual** | Mengubah *state* posisi/animasi objek | Tidak mengubah *state* secara langsung |
| **Penempatan** | Diletakkan sebagai baris instruksi mandiri | Ditempatkan sebagai argumen/kondisi ekspresi |
| **Contoh Bawaan** | `this.bunny.move(FORWARD, 1.0);` | `this.bunny.getDistanceTo(this.carrot);` |

---

## 4. Pola Prosedur Abstraksi (Procedural Abstraction)
Menyederhanakan urutan aksi rumit menjadi satu prosedur baru yang dapat digunakan berulang-ulang:
```text
// Prosedur kustom: lompatTinggi(jarak)
procedure lompatTinggi(Double tinggi) {
  doTogether {
    this.move(UP, tinggi);
  }
  doTogether {
    this.move(DOWN, tinggi);
  }
}
```
**Keuntungan:**
1. Menghindari duplikasi kode (*Don't Repeat Yourself / DRY*).
2. Memudahkan pembacaan alur program utama (*clean code*).
3. Mudah diperbaiki jika ada kesalahan animasi di satu titik.
