/* Topik 2 — Domain, Kodomain, Range */
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push(
  {
    topic: 'Domain & Range',
    q: 'Untuk fungsi $y=x^2+5x+6$ dengan domain seluruh bilangan real, manakah pasangan domain, kodomain, dan range yang benar?',
    options: [
      '$D=\\mathbb{R},\\ K=\\mathbb{R},\\ R=\\left[-\\frac{1}{4},\\,\\infty\\right)$',
      '$D=\\mathbb{R},\\ K=\\mathbb{R},\\ R=\\left(-\\frac{1}{4},\\,\\infty\\right)$',
      '$D=\\mathbb{R},\\ K=\\left[-\\frac{1}{4},\\,\\infty\\right),\\ R=\\mathbb{R}$',
      '$D=\\mathbb{R}\\setminus\\{-3,-2\\},\\ K=\\mathbb{R},\\ R=\\mathbb{R}$'
    ],
    answer: 0,
    figure: 'parabolaA',
    explain: String.raw`Fungsi $y=x^2+5x+6$ adalah polinomial, sehingga terdefinisi untuk semua bilangan real:

$$D=\mathbb{R}$$

**Kodomain** adalah himpunan tujuan tempat nilai fungsi “dipetakan”. Untuk fungsi kuadrat dengan domain $\mathbb{R}$, kodomain yang dipakai adalah $\mathbb{R}$. Kodomain tidak harus sama dengan range: kodomain boleh lebih besar karena memuat nilai-nilai yang sebenarnya tidak pernah dicapai.

Untuk mencari **range**, cari titik puncaknya. Pada $y=ax^2+bx+c$ dengan $a=1$, $b=5$, dan $c=6$:

$$x_p=-\frac{b}{2a}=-\frac{5}{2(1)}=-\frac{5}{2}$$

Substitusikan $x=-\frac{5}{2}$:

$$y_p=\left(-\frac{5}{2}\right)^2+5\left(-\frac{5}{2}\right)+6$$
$$=\frac{25}{4}-\frac{25}{2}+6=-\frac{1}{4}$$

Karena $a=1 \gt 0$, parabola terbuka ke atas. Titik puncak adalah nilai **minimum**, jadi range dimulai dari $-\frac{1}{4}$ dan naik tanpa batas:

$$R=\left[-\frac{1}{4},\infty\right)$$

! Akar-akar $-3$ dan $-2$ hanya titik potong dengan sumbu-$x$. Itu bukan domain dan bukan range. Domain tetap $\mathbb{R}$ karena semua $x$ boleh dipakai.`
  },
  {
    topic: 'Domain & Range',
    q: 'Range dari fungsi $y=2x^2-5x-3$ adalah ...',
    options: [
      '$\\left[-\\frac{49}{8},\\,\\infty\\right)$',
      '$\\left(-\\frac{49}{8},\\,\\infty\\right)$',
      '$\\left(-\\infty,\\,-\\frac{49}{8}\\right]$',
      '$[-3,\\,\\infty)$'
    ],
    answer: 0,
    figure: 'parabolaB',
    explain: String.raw`Karena $a=2 \gt 0$, parabola terbuka ke atas. Range-nya dimulai dari nilai minimum di titik puncak.

Cari absis puncak:

$$x_p=-\frac{b}{2a}=-\frac{-5}{2(2)}=\frac{5}{4}$$

Substitusikan $x=\frac{5}{4}$ ke fungsi:

$$y_p=2\left(\frac{5}{4}\right)^2-5\left(\frac{5}{4}\right)-3$$
$$=2\cdot\frac{25}{16}-\frac{25}{4}-3$$
$$=\frac{25}{8}-\frac{50}{8}-\frac{24}{8}=-\frac{49}{8}$$

Nilai minimumnya $-\frac{49}{8}$. Karena parabola terbuka ke atas dan terus naik, semua nilai yang lebih besar juga tercapai:

$$R=\left[-\frac{49}{8},\infty\right)$$

Faktornya adalah $(2x+1)(x-3)$, jadi grafik memotong sumbu-$x$ di $x=-\frac{1}{2}$ dan $x=3$. Titik potong sumbu-$y$ di $(0,-3)$ juga bukan nilai minimum.

! Jangan memakai titik potong sumbu-$y$ sebagai batas range. Di soal ini, $y=-3$ masih di atas nilai puncak $-\frac{49}{8}$, jadi bukan nilai terkecil.`
  },
  {
    topic: 'Domain & Range',
    challenge: true,
    q: 'Domain dari fungsi $f(x)=\\frac{1}{x^2-4}$ adalah ...',
    options: [
      '$\\mathbb{R}\\setminus\\{-2,2\\}$',
      '$\\mathbb{R}$',
      '$\\mathbb{R}\\setminus\\{2\\}$',
      '$[-2,\\,2]$'
    ],
    answer: 0,
    explain: String.raw`Fungsi pecahan hanya bermasalah ketika penyebutnya nol. Maka cari nilai $x$ yang membuat penyebut nol:

$$x^2-4=0$$
$$(x-2)(x+2)=0$$
$$x=2 \quad \text{atau} \quad x=-2$$

Kedua nilai ini harus dikeluarkan dari domain. Untuk semua $x$ lain, penyebutnya tidak nol sehingga fungsi terdefinisi:

$$D=\mathbb{R}\setminus\{-2,2\}$$

Di $x=-2$ dan $x=2$ grafik memiliki asimtot tegak: nilainya membesar ke arah tak hingga atau mengecil ke arah negatif tak hingga, tetapi tidak pernah benar-benar berada di garis vertikal itu.

! Yang dikeluarkan hanya pembuat nol penyebut, bukan pembuat nol pembilang. Di sini pembilangnya 1, jadi tidak ada pembuat nol.`
  },
  {
    topic: 'Domain & Range',
    challenge: true,
    q: 'Domain dan range dari $f(x)=\\sqrt{x-3}$ adalah ...',
    options: [
      '$D=[3,\\,\\infty),\\ R=[0,\\,\\infty)$',
      '$D=(3,\\,\\infty),\\ R=(0,\\,\\infty)$',
      '$D=[0,\\,\\infty),\\ R=[3,\\,\\infty)$',
      '$D=\\mathbb{R},\\ R=[0,\\,\\infty)$'
    ],
    answer: 0,
    explain: String.raw`Bentuk akar kuadrat hanya terdefinisi jika isi di dalamnya **tidak negatif**:

$$x-3 \ge 0$$
$$x \ge 3$$

Jadi domainnya adalah $[3,\infty)$. Angka 3 ikut karena $\sqrt{0}=0$ masih terdefinisi.

Untuk range, hasil akar kuadrat utama selalu **nol atau positif**. Nilai terkecilnya terjadi saat $x=3$:

$$f(3)=\sqrt{3-3}=0$$

Saat $x$ makin besar, $\sqrt{x-3}$ juga makin besar tanpa batas. Maka range-nya:

$$R=[0,\infty)$$

Grafiknya dimulai dari titik $(3,0)$ lalu naik pelan-pelan ke kanan. Tidak ada bagian grafik di sebelah kiri $x=3$ karena di sana isi akar negatif.

! Jangan tertukar: domain berasal dari syarat isi akar, sedangkan range berasal dari nilai keluaran akar itu sendiri.`
  }
);
