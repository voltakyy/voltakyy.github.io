/* Topik 1 — Pertidaksamaan */
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push(
  {
    topic: 'Pertidaksamaan',
    q: 'Himpunan penyelesaian dari $-5 \\le 2x+6 \\lt 4$ adalah ...',
    options: [
      '$\\left[-\\frac{11}{2},\\,-1\\right)$',
      '$\\left(-\\frac{11}{2},\\,-1\\right]$',
      '$\\left[-1,\\,-\\frac{11}{2}\\right)$',
      '$\\left(-\\infty,\\,-\\frac{11}{2}\\right]\\cup\\left(-1,\\,\\infty\\right)$'
    ],
    answer: 0,
    explain: String.raw`Kerjakan ketiga ruas sekaligus. Kurangi 6 dari setiap bagian:

$$-5-6 \le 2x+6-6 \lt 4-6$$
$$-11 \le 2x \lt -2$$

Lalu bagi dengan 2. Karena 2 bilangan **positif**, arah kedua tanda tidak berubah:

$$-\frac{11}{2} \le x \lt -1$$

Batas $-\frac{11}{2}$ ikut karena memakai tanda $\le$, sedangkan batas $-1$ tidak ikut karena memakai tanda $\lt$. Jadi himpunan penyelesaiannya adalah $\left[-\frac{11}{2},-1\right)$.

Uji batasnya: untuk $x=-\frac{11}{2}$, nilai $2x+6=-5$ sehingga masih memenuhi. Untuk $x=-1$, nilai $2x+6=4$, sedangkan syaratnya harus **kurang dari** 4. Jadi $-1$ memang tidak termasuk.

! Kalau suatu saat harus membagi atau mengalikan dengan bilangan negatif, kedua tanda pertidaksamaan harus dibalik. Di soal ini pembaginya positif, jadi tanda tetap.`
  },
  {
    topic: 'Pertidaksamaan',
    q: 'Himpunan penyelesaian dari $x^2-x-6 \\lt 0$ adalah ...',
    options: [
      '$(-2,\\,3)$',
      '$[-2,\\,3]$',
      '$(-\\infty,\\,-2)\\cup(3,\\,\\infty)$',
      '$(-3,\\,2)$'
    ],
    answer: 0,
    explain: String.raw`Faktorkan dulu bentuk kuadratnya:

$$x^2-x-6=(x-3)(x+2)$$

Pembuat nolnya adalah $x=3$ dan $x=-2$. Kedua titik ini membagi garis bilangan menjadi tiga daerah. Karena koefisien $x^2$ positif, parabola terbuka ke atas dan bernilai **negatif di antara kedua akarnya**.

Cek dengan titik uji:

- $x=-3$: $(-3-3)(-3+2)=(-6)(-1)=6 \gt 0$ → tidak memenuhi.
- $x=0$: $(0-3)(0+2)=(-3)(2)=-6 \lt 0$ → memenuhi.
- $x=4$: $(4-3)(4+2)=(1)(6)=6 \gt 0$ → tidak memenuhi.

Jadi daerah yang memenuhi adalah $-2 \lt x \lt 3$, yaitu $(-2,3)$.

! Tanda kurung biasa dipakai karena pertidaksamaannya ketat: $\lt 0$, bukan $\le 0$. Kalau soalnya $\le 0$, akar $-2$ dan $3$ ikut masuk.`
  },
  {
    topic: 'Pertidaksamaan',
    q: 'Himpunan penyelesaian dari $3x^2-x-2 \\gt 0$ adalah ...',
    options: [
      '$\\left(-\\infty,\\,-\\frac{2}{3}\\right)\\cup(1,\\,\\infty)$',
      '$\\left(-\\frac{2}{3},\\,1\\right)$',
      '$\\left[-\\frac{2}{3},\\,1\\right]$',
      '$\\left(-\\infty,\\,1\\right)\\cup\\left(\\frac{2}{3},\\,\\infty\\right)$'
    ],
    answer: 0,
    explain: String.raw`Faktorkan dengan cara mengelompokkan:

$$3x^2-x-2=3x^2-3x+2x-2$$
$$=3x(x-1)+2(x-1)$$
$$=(3x+2)(x-1)$$

Pembuat nolnya: $x=-\frac{2}{3}$ dan $x=1$. Koefisien $x^2$ positif, jadi parabola terbuka ke atas. Nilainya **positif di luar kedua akar** dan negatif di antaranya.

Uji titik:

- $x=-1$: $(3(-1)+2)(-1-1)=(-1)(-2)=2 \gt 0$ → memenuhi.
- $x=0$: $(2)(-1)=-2 \lt 0$ → tidak memenuhi.
- $x=2$: $(8)(1)=8 \gt 0$ → memenuhi.

Maka penyelesaiannya:

$$\left(-\infty,-\frac{2}{3}\right)\cup(1,\infty)$$

Karena tanda pertidaksamaannya $\gt 0$ (tanpa “sama dengan”), kedua akar tidak ikut.`
  },
  {
    topic: 'Pertidaksamaan',
    challenge: true,
    q: 'Himpunan penyelesaian dari $\\frac{x-1}{x+2} \\ge 0$ adalah ...',
    options: [
      '$(-\\infty,\\,-2)\\cup[1,\\,\\infty)$',
      '$[-2,\\,1]$',
      '$(-\\infty,\\,-2]\\cup[1,\\,\\infty)$',
      '$(-2,\\,1]$'
    ],
    answer: 0,
    explain: String.raw`Jangan mengalikan kedua ruas dengan $x+2$, karena tanda $x+2$ belum diketahui. Kalau nilainya negatif, arah pertidaksamaan akan berubah. Cara aman: gunakan titik kritis dan tabel tanda.

Titik kritis:

- Pembilang nol di $x=1$. Karena tanda pertidaksamaannya $\ge$, nilai 0 boleh, jadi $x=1$ **ikut**.
- Penyebut nol di $x=-2$. Penyebut tidak boleh nol, jadi $x=-2$ **tidak ikut**.

Tabel tanda:

- $x \lt -2$: pembilang negatif, penyebut negatif → hasil positif. Memenuhi.
- $-2 \lt x \lt 1$: pembilang negatif, penyebut positif → hasil negatif. Tidak memenuhi.
- $x \gt 1$: pembilang positif, penyebut positif → hasil positif. Memenuhi.

Jadi penyelesaiannya:

$$(-\infty,-2)\cup[1,\infty)$$

! Perhatikan bedanya: $x=-2$ memakai kurung biasa karena membuat penyebut nol, sedangkan $x=1$ memakai kurung siku karena membuat pembilang nol dan hasilnya tetap 0.`
  },
  {
    topic: 'Pertidaksamaan',
    challenge: true,
    q: 'Untuk setiap bilangan real $x$, pertidaksamaan $x^2-4x+7 \\gt 0$ ...',
    options: [
      'selalu benar untuk semua $x \\in \\mathbb{R}$',
      'tidak pernah benar',
      'hanya benar untuk $x \\gt 2$',
      'hanya benar untuk $x \\lt 2$'
    ],
    answer: 0,
    explain: String.raw`Lengkapi kuadratnya:

$$x^2-4x+7=(x^2-4x+4)+3$$
$$=(x-2)^2+3$$

Bentuk $(x-2)^2$ selalu **lebih dari atau sama dengan 0** untuk semua bilangan real. Jadi $(x-2)^2+3$ selalu minimal 3, dan pasti lebih besar dari 0.

Cara lain: hitung diskriminannya.

$$D=b^2-4ac=(-4)^2-4(1)(7)$$
$$=16-28=-12$$

Karena $D \lt 0$ dan $a=1 \gt 0$, parabola tidak pernah menyentuh sumbu-$x$ dan seluruh grafiknya berada di atas sumbu-$x$. Artinya, pertidaksamaan itu benar untuk semua $x \in \mathbb{R}$.

! Kalau diskriminan negatif dan $a \gt 0$, bentuk kuadrat selalu positif. Kalau $a \lt 0$, bentuk kuadrat selalu negatif.`
  }
);
