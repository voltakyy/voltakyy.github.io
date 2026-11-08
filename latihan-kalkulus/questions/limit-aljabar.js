/* Topik 3 — Limit Aljabar */
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push(
  {
    topic: 'Limit Aljabar',
    q: 'Soal asli tidak menuliskan arah limitnya. Dengan asumsi $x \\to \\infty$, nilai $\\lim_{x\\to\\infty}\\frac{7x^5-10x^4-13x+6}{3x^2-6x-8}$ adalah ...',
    options: [
      '$\\infty$',
      '$\\frac{7}{3}$',
      '$0$',
      '$-\\frac{3}{4}$'
    ],
    answer: 0,
    explain: String.raw`Bandingkan derajat pembilang dan penyebut. Pembilang berderajat 5, penyebut berderajat 2. Bagi keduanya dengan $x^2$:

$$\frac{7x^3-10x^2-\frac{13}{x}+\frac{6}{x^2}}{3-\frac{6}{x}-\frac{8}{x^2}}$$

Saat $x \to \infty$, semua suku berbentuk $\frac{k}{x^n}$ menuju 0. Bentuknya mendekati:

$$\frac{7x^3}{3}$$

Karena $x^3 \to \infty$, hasil limitnya juga menuju $\infty$.

! Catatan penting: soal yang kamu kirim memang tidak mencantumkan $x \to \infty$. Pola derajat polinomialnya menunjukkan limit di tak hingga. Kalau yang dimaksud $x \to 0$, hasilnya $\frac{6}{-8}=-\frac{3}{4}$. Kalau $x \to -\infty$, pembilang didominasi $7x^5$ yang menuju $-\infty$.`
  },
  {
    topic: 'Limit Aljabar',
    q: 'Nilai dari $\\lim_{t\\to\\infty}\\frac{t^2+t}{t^2+1}$ adalah ...',
    options: [
      '$0$',
      '$1$',
      '$\\infty$',
      '$-1$'
    ],
    answer: 1,
    explain: String.raw`Pembilang dan penyebut sama-sama berderajat 2. Bagi keduanya dengan $t^2$:

$$\frac{t^2+t}{t^2+1}
=\frac{1+\frac{1}{t}}{1+\frac{1}{t^2}}$$

Saat $t \to \infty$:

$$\frac{1+0}{1+0}=1$$

Jadi limitnya 1. Secara cepat, untuk limit di tak hingga pada pecahan polinomial: jika derajat pembilang sama dengan derajat penyebut, hasilnya adalah rasio koefisien pangkat tertinggi, yaitu $\frac{1}{1}=1$.

! Jangan hanya melihat suku $t$ di pembilang. Suku $t^2$ tumbuh jauh lebih cepat, jadi yang menentukan perilaku di tak hingga adalah suku berderajat tertinggi.`
  },
  {
    topic: 'Limit Aljabar',
    q: 'Nilai dari $\\lim_{x\\to3}\\frac{x^2-2x-3}{x-3}$ adalah ...',
    options: [
      '$0$',
      '$3$',
      '$4$',
      '$\\infty$'
    ],
    answer: 2,
    explain: String.raw`Substitusi langsung $x=3$ menghasilkan:

$$\frac{3^2-2(3)-3}{3-3}=\frac{0}{0}$$

Bentuk $\frac{0}{0}$ bukan jawaban; itu tanda bahwa pembilang dan penyebut punya faktor bersama. Faktorkan pembilangnya:

$$x^2-2x-3=(x-3)(x+1)$$

Maka:

$$\lim_{x\to3}\frac{(x-3)(x+1)}{x-3}$$

Untuk $x \ne 3$, faktor $x-3$ boleh dicoret:

$$=\lim_{x\to3}(x+1)=3+1=4$$

Jadi limitnya 4. Grafik fungsinya berupa garis $y=x+1$ dengan lubang di titik $(3,4)$; nilainya tidak terdefinisi tepat di $x=3$, tetapi limitnya tetap 4.

! Mencoret faktor $(x-3)$ sah dilakukan di dalam limit karena $x$ mendekati 3 tetapi tidak pernah sama dengan 3.`
  },
  {
    topic: 'Limit Aljabar',
    q: 'Nilai dari $\\lim_{x\\to\\pi}\\frac{2x^2-6\\pi x+4\\pi^2}{x-\\pi}$ adalah ...',
    options: [
      '$-2\\pi$',
      '$2\\pi$',
      '$0$',
      '$\\pi$'
    ],
    answer: 0,
    explain: String.raw`Substitusi $x=\pi$ menghasilkan bentuk $\frac{0}{0}$. Faktorkan pembilangnya. Anggap $\pi$ sebagai konstanta biasa:

$$2x^2-6\pi x+4\pi^2$$
$$=2(x^2-3\pi x+2\pi^2)$$
$$=2(x-\pi)(x-2\pi)$$

Maka:

$$\lim_{x\to\pi}\frac{2(x-\pi)(x-2\pi)}{x-\pi}$$

Coret faktor $(x-\pi)$ untuk $x \ne \pi$:

$$=\lim_{x\to\pi}2(x-2\pi)$$
$$=2(\pi-2\pi)=-2\pi$$

Jadi hasilnya $-2\pi$. Di sini $\pi$ diperlakukan seperti angka, bukan variabel. Yang berubah adalah $x$, dan $x$ mendekati $\pi$.

! Hati-hati dengan tanda: $x-2\pi$ saat $x=\pi$ menjadi $\pi-2\pi=-\pi$, bukan $+\pi$.`
  },
  {
    topic: 'Limit Aljabar',
    challenge: true,
    q: 'Nilai dari $\\lim_{x\\to2}\\frac{x^3-8}{x-2}$ adalah ...',
    options: [
      '$0$',
      '$8$',
      '$12$',
      '$\\infty$'
    ],
    answer: 2,
    explain: String.raw`Substitusi langsung menghasilkan $\frac{0}{0}$. Gunakan selisih kubus:

$$a^3-b^3=(a-b)(a^2+ab+b^2)$$

Dengan $a=x$ dan $b=2$:

$$x^3-8=(x-2)(x^2+2x+4)$$

Maka:

$$\lim_{x\to2}\frac{(x-2)(x^2+2x+4)}{x-2}$$
$$=\lim_{x\to2}(x^2+2x+4)$$

Substitusikan $x=2$:

$$4+4+4=12$$

Jadi limitnya 12. Kalau kamu sudah belajar turunan, hasil ini juga sama dengan turunan $x^3$ di $x=2$, yaitu $3(2)^2=12$. Tetapi untuk sekarang, pemfaktoran sudah cukup.`
  },
  {
    topic: 'Limit Aljabar',
    challenge: true,
    q: 'Nilai dari $\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+3x}-x\\right)$ adalah ...',
    options: [
      '$0$',
      '$\\frac{3}{2}$',
      '$3$',
      '$\\infty$'
    ],
    answer: 1,
    explain: String.raw`Bentuk $\infty-\infty$ tidak bisa langsung disubstitusi. Kalikan dengan bentuk sekawannya:

$$\frac{\left(\sqrt{x^2+3x}-x\right)\left(\sqrt{x^2+3x}+x\right)}{\sqrt{x^2+3x}+x}$$

Gunakan $(a-b)(a+b)=a^2-b^2$ pada pembilang:

$$=\frac{(x^2+3x)-x^2}{\sqrt{x^2+3x}+x}$$
$$=\frac{3x}{\sqrt{x^2+3x}+x}$$

Karena $x \to \infty$, $x \gt 0$, sehingga $\sqrt{x^2}=x$. Bagi pembilang dan penyebut dengan $x$:

$$=\frac{3}{\sqrt{1+\frac{3}{x}}+1}$$

Saat $x \to \infty$, $\frac{3}{x}\to0$:

$$\frac{3}{\sqrt{1+0}+1}=\frac{3}{2}$$

Jadi limitnya $\frac{3}{2}$.

! Mengapa bukan 0? Karena $\sqrt{x^2+3x}$ sedikit lebih besar dari $x$, dan selisihnya tidak hilang begitu saja; selisih itu mendekati $\frac{3}{2}$.`
  }
);
