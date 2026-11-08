/* Materi sendiri — 14 soal pembuka, urutan tetap 1–14 */
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push(
  {
    topic: 'Bilangan & Modulo',
    intro: true,
    introOrder: 1,
    q: String.raw`Hasil dari $\frac{\sqrt{72}-\sqrt{18}}{\sqrt{2}}+(\sqrt{5}+\sqrt{3})(\sqrt{5}-\sqrt{3})$ adalah ...`,
    options: [
      '$5$',
      '$3$',
      String.raw`$2\sqrt{6}$`,
      '$8$'
    ],
    answer: 0,
    explain: String.raw`Sederhanakan dulu setiap akar. Faktorkan bilangan di dalam akar menjadi perkalian bilangan kuadrat:

$$\sqrt{72}=\sqrt{36\cdot2}=6\sqrt{2}$$
$$\sqrt{18}=\sqrt{9\cdot2}=3\sqrt{2}$$

Maka bagian pertama menjadi:

$$\frac{6\sqrt{2}-3\sqrt{2}}{\sqrt{2}}
=\frac{3\sqrt{2}}{\sqrt{2}}=3$$

Bagian kedua memakai bentuk $(a+b)(a-b)=a^2-b^2$:

$$(\sqrt{5}+\sqrt{3})(\sqrt{5}-\sqrt{3})
=(\sqrt{5})^2-(\sqrt{3})^2$$
$$=5-3=2$$

Jadi hasil keseluruhannya:

$$3+2=5$$

! Akar yang berbeda tidak bisa langsung dijumlahkan. Yang boleh dijumlahkan hanya akar sejenis, misalnya $6\sqrt{2}$ dan $3\sqrt{2}$.`
  },
  {
    topic: 'Bilangan & Modulo',
    intro: true,
    introOrder: 2,
    q: String.raw`Jika $p=\sqrt{12}+\sqrt{27}$, nilai $p$ adalah ...`,
    options: [
      String.raw`$5\sqrt{3}$`,
      String.raw`$6\sqrt{3}$`,
      String.raw`$3\sqrt{5}$`,
      String.raw`$9\sqrt{3}$`
    ],
    answer: 0,
    explain: String.raw`Sederhanakan masing-masing akar dengan mencari faktor kuadrat terbesar:

$$\sqrt{12}=\sqrt{4\cdot3}=2\sqrt{3}$$
$$\sqrt{27}=\sqrt{9\cdot3}=3\sqrt{3}$$

Karena keduanya sudah berbentuk akar $3$, koefisiennya boleh dijumlahkan:

$$p=2\sqrt{3}+3\sqrt{3}=5\sqrt{3}$$

Cek secara numerik: $\sqrt{12}\approx3{,}46$ dan $\sqrt{27}\approx5{,}20$. Jumlahnya sekitar $8{,}66$, sedangkan $5\sqrt{3}\approx5(1{,}732)=8{,}66$. Cocok.

! Kesalahan yang sering terjadi adalah menjumlahkan angka di dalam akar: $\sqrt{12}+\sqrt{27}\ne\sqrt{39}$. Akar tidak bisa dijumlahkan seperti bilangan biasa.`
  },
  {
    topic: 'Trigonometri',
    intro: true,
    introOrder: 3,
    q: String.raw`Nilai dari $\sin 60^\circ+\cos 45^\circ\tan 30^\circ$ adalah ...`,
    options: [
      String.raw`$\dfrac{3\sqrt{3}+\sqrt{6}}{6}$`,
      String.raw`$\dfrac{\sqrt{3}+\sqrt{6}}{3}$`,
      String.raw`$\dfrac{3\sqrt{3}-\sqrt{6}}{6}$`,
      String.raw`$\dfrac{2\sqrt{3}+\sqrt{6}}{3}$`
    ],
    answer: 0,
    explain: String.raw`Tulis nilai sudut istimewanya satu per satu:

$$\sin60^\circ=\frac{\sqrt{3}}{2},\qquad
\cos45^\circ=\frac{\sqrt{2}}{2},\qquad
\tan30^\circ=\frac{\sqrt{3}}{3}$$

Hitung hasil kali bagian kedua:

$$\cos45^\circ\tan30^\circ
=\frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{3}
=\frac{\sqrt{6}}{6}$$

Sekarang jumlahkan dengan $\sin60^\circ$. Samakan penyebutnya menjadi 6:

$$\frac{\sqrt{3}}{2}=\frac{3\sqrt{3}}{6}$$

Maka:

$$\sin60^\circ+\cos45^\circ\tan30^\circ
=\frac{3\sqrt{3}}{6}+\frac{\sqrt{6}}{6}
=\frac{3\sqrt{3}+\sqrt{6}}{6}$$

! $\tan30^\circ$ boleh ditulis $\frac{\sqrt3}{3}$ karena $\tan30^\circ=\frac{\sin30^\circ}{\cos30^\circ}=\frac{1/2}{\sqrt3/2}=\frac{1}{\sqrt3}=\frac{\sqrt3}{3}$.`
  },
  {
    topic: 'Trigonometri',
    intro: true,
    introOrder: 4,
    q: String.raw`Besar sudut $\frac{7\pi}{6}$ radian dalam derajat adalah ...`,
    options: [
      String.raw`$210^\circ$`,
      String.raw`$150^\circ$`,
      String.raw`$240^\circ$`,
      String.raw`$330^\circ$`
    ],
    answer: 0,
    explain: String.raw`Gunakan hubungan dasar:

$$\pi\ \text{rad}=180^\circ$$

Maka untuk mengubah radian ke derajat, kalikan dengan $\frac{180^\circ}{\pi}$:

$$\frac{7\pi}{6}\cdot\frac{180^\circ}{\pi}
=\frac{7\cdot180^\circ}{6}$$

Hitung pembilangnya:

$$7\cdot180^\circ=1260^\circ$$

Lalu bagi 6:

$$\frac{1260^\circ}{6}=210^\circ$$

Sudut $210^\circ$ berada di kuadran III, karena $180^\circ<210^\circ<270^\circ$. Sudut acuannya $210^\circ-180^\circ=30^\circ$.

! Cara cepat: $\frac{7\pi}{6}=\pi+\frac{\pi}{6}=180^\circ+30^\circ=210^\circ$.`
  },
  {
    topic: 'Trigonometri',
    intro: true,
    introOrder: 5,
    q: String.raw`Diketahui $\theta=\frac{5\pi}{6}$. Nilai $\sin\theta$, $\cos\theta$, dan $\tan\theta$ berturut-turut adalah ...`,
    options: [
      String.raw`$\dfrac12,\ -\dfrac{\sqrt3}{2},\ -\dfrac{\sqrt3}{3}$`,
      String.raw`$-\dfrac12,\ \dfrac{\sqrt3}{2},\ -\dfrac{\sqrt3}{3}$`,
      String.raw`$\dfrac12,\ -\dfrac{\sqrt3}{2},\ \dfrac{\sqrt3}{3}$`,
      String.raw`$-\dfrac12,\ -\dfrac{\sqrt3}{2},\ \dfrac{\sqrt3}{3}$`
    ],
    answer: 0,
    explain: String.raw`Ubah sudutnya ke derajat agar posisinya jelas:

$$\theta=\frac{5\pi}{6}=\frac{5\cdot180^\circ}{6}=150^\circ$$

Sudut $150^\circ$ berada di kuadran II. Sudut acuannya:

$$180^\circ-150^\circ=30^\circ=\frac{\pi}{6}$$

Di kuadran II, hanya sinus yang positif; kosinus dan tangen negatif. Maka:

$$\sin150^\circ=\sin30^\circ=\frac12$$
$$\cos150^\circ=-\cos30^\circ=-\frac{\sqrt3}{2}$$

Untuk tangen, gunakan $\tan\theta=\frac{\sin\theta}{\cos\theta}$:

$$\tan150^\circ
=\frac{\frac12}{-\frac{\sqrt3}{2}}
=-\frac{1}{\sqrt3}
=-\frac{\sqrt3}{3}$$

Cek dengan identitas $\sin^2\theta+\cos^2\theta=1$:

$$\left(\frac12\right)^2+\left(-\frac{\sqrt3}{2}\right)^2
=\frac14+\frac34=1$$

! Soal aslinya hanya menuliskan $\theta=\frac{5\pi}{6}$. Di sini diminta ketiga nilai sekaligus, jadi jawabannya adalah pasangan $\sin$, $\cos$, dan $\tan$ pada urutan tersebut.`
  },
  {
    topic: 'Trigonometri',
    intro: true,
    introOrder: 6,
    q: String.raw`Bentuk sederhana dari $\frac{\sec^2 x-1}{\sec^2 x}$ adalah ...`,
    options: [
      String.raw`$\sin^2 x$`,
      String.raw`$\cos^2 x$`,
      String.raw`$\tan^2 x$`,
      '$1$'
    ],
    answer: 0,
    explain: String.raw`Mulai dari identitas Pythagoras:

$$1+\tan^2 x=\sec^2 x$$

Pindahkan 1 ke ruas kanan:

$$\tan^2 x=\sec^2 x-1$$

Substitusikan ke pembilang:

$$\frac{\sec^2 x-1}{\sec^2 x}
=\frac{\tan^2 x}{\sec^2 x}$$

Ubah keduanya ke sinus dan kosinus:

$$\tan^2 x=\frac{\sin^2 x}{\cos^2 x},\qquad
\sec^2 x=\frac{1}{\cos^2 x}$$

Maka:

$$\frac{\frac{\sin^2 x}{\cos^2 x}}{\frac{1}{\cos^2 x}}
=\sin^2 x$$

Cara lain yang lebih singkat: pecah menjadi dua suku,

$$\frac{\sec^2 x}{\sec^2 x}-\frac{1}{\sec^2 x}
=1-\cos^2 x=\sin^2 x$$

! Identitas ini berlaku selama $\cos x\ne0$, karena $\sec x$ dan $\tan x$ tidak terdefinisi saat $\cos x=0$.`
  },
  {
    topic: 'Fungsi & Invers',
    intro: true,
    introOrder: 7,
    q: String.raw`Diketahui $f(x)=2x-3$ dan $g(x)=x^2+1$. Nilai $(f\circ g)(2)$ adalah ...`,
    options: [
      '$7$',
      '$5$',
      '$10$',
      '$3$'
    ],
    answer: 0,
    explain: String.raw`Notasi $(f\circ g)(2)$ berarti $f(g(2))$. Kerjakan dari dalam: hitung $g(2)$ lebih dulu.

$$g(2)=2^2+1=4+1=5$$

Sekarang masukkan hasil itu ke fungsi $f$:

$$f(5)=2(5)-3=10-3=7$$

Jadi:

$$(f\circ g)(2)=f(g(2))=f(5)=7$$

Sebagai pengecekan, kita juga bisa menyusun rumus komposisinya:

$$(f\circ g)(x)=f(g(x))=2(x^2+1)-3=2x^2-1$$

Lalu substitusikan $x=2$:

$$(f\circ g)(2)=2(2)^2-1=8-1=7$$

! $(f\circ g)(2)$ bukan $f(2)\cdot g(2)$. Komposisi berarti fungsi $g$ dikerjakan lebih dulu, lalu hasilnya dimasukkan ke $f$.`
  },
  {
    topic: 'Fungsi & Invers',
    intro: true,
    introOrder: 8,
    q: String.raw`Invers dari $f(x)=\frac{3x-2}{x+1}$, $x\ne-1$, adalah $f^{-1}(x)=...$`,
    options: [
      String.raw`$\dfrac{x+2}{3-x},\quad x\ne3$`,
      String.raw`$\dfrac{x-2}{3+x},\quad x\ne-3$`,
      String.raw`$\dfrac{3x+2}{x-1},\quad x\ne1$`,
      String.raw`$\dfrac{x+2}{x-3},\quad x\ne3$`
    ],
    answer: 0,
    explain: String.raw`Tulis $y=f(x)$, lalu tukar peran $x$ dan $y$ di akhir:

$$y=\frac{3x-2}{x+1}$$

Kalikan kedua ruas dengan $x+1$ untuk menghilangkan pecahan:

$$y(x+1)=3x-2$$
$$xy+y=3x-2$$

Kumpulkan semua suku yang memuat $x$ di satu ruas:

$$xy-3x=-2-y$$

Faktorkan $x$:

$$x(y-3)=-(y+2)$$

Maka:

$$x=\frac{-(y+2)}{y-3}=\frac{y+2}{3-y}$$

Yakni:

$$f^{-1}(y)=\frac{y+2}{3-y},\qquad y\ne3$$

Ganti nama variabelnya menjadi $x$:

$$f^{-1}(x)=\frac{x+2}{3-x},\qquad x\ne3$$

Nilai $x=3$ harus dikecualikan karena penyebutnya menjadi nol. Ini juga masuk akal: $f(x)=3$ tidak punya penyelesaian, sebab $\frac{3x-2}{x+1}=3$ menghasilkan $3x-2=3x+3$, yaitu $-2=3$ yang mustahil.

! Cara cepat: untuk $f(x)=\frac{ax+b}{cx+d}$, inversnya adalah $\frac{-dx+b}{cx-a}$. Dengan $a=3$, $b=-2$, $c=1$, $d=1$, hasilnya $\frac{-x-2}{x-3}=\frac{x+2}{3-x}$.`
  },
  {
    topic: 'Bilangan & Modulo',
    intro: true,
    introOrder: 9,
    q: String.raw`Nilai dari $(-38)\bmod 7$ adalah ...`,
    options: [
      '$4$',
      '$3$',
      '$-3$',
      '$6$'
    ],
    answer: 0,
    explain: String.raw`Gunakan hubungan:

$$a=mq+r,\qquad 0\le r<m$$

Di sini $a=-38$ dan $m=7$. Kita perlu mencari bilangan bulat $q$ sedemikian sehingga sisanya $r$ tidak negatif dan kurang dari 7.

Coba $q=-6$:

$$7(-6)=-42$$

Maka:

$$r=a-mq=-38-(-42)=-38+42=4$$

Karena $0\le4<7$, pilihan ini memenuhi syarat. Jadi:

$$-38=7(-6)+4$$

Dengan demikian:

$$(-38)\bmod 7=4$$

Mengapa bukan $-3$? Karena $-38=7(-5)+(-3)$ memang benar secara hitungan, tetapi sisanya negatif. Definisi modulo dalam matematika mensyaratkan $0\le r<m$, jadi $-3$ tidak dipakai.

! Di beberapa bahasa pemrograman, hasil operasi % untuk bilangan negatif bisa berbeda. Untuk soal ini, pakai definisi matematika: sisa selalu berada di $0$ sampai $m-1$.`
  },
  {
    topic: 'Limit Aljabar',
    intro: true,
    introOrder: 10,
    q: String.raw`Nilai dari $\lim_{x\to2}(3x^2-5x+4)$ adalah ...`,
    options: [
      '$6$',
      '$4$',
      '$8$',
      '$12$'
    ],
    answer: 0,
    explain: String.raw`Fungsi $3x^2-5x+4$ adalah polinomial, sehingga kontinu di semua bilangan real. Untuk fungsi kontinu, limit di suatu titik cukup dihitung dengan substitusi langsung:

$$\lim_{x\to2}(3x^2-5x+4)=3(2)^2-5(2)+4$$

Hitung pangkatnya lebih dulu:

$$3(4)-10+4=12-10+4$$

Maka:

$$12-10+4=6$$

Tidak ada bentuk $\frac00$ atau akar yang bermasalah di sini, jadi tidak perlu pemfaktoran.

! Urutan operasi tetap berlaku: pangkat dulu, lalu perkalian, baru penjumlahan dan pengurangan.`
  },
  {
    topic: 'Limit Aljabar',
    intro: true,
    introOrder: 11,
    q: String.raw`Nilai dari $\lim_{x\to3}\frac{x^2-9}{x^2-5x+6}$ adalah ...`,
    options: [
      '$6$',
      '$0$',
      '$3$',
      String.raw`$\infty$`
    ],
    answer: 0,
    explain: String.raw`Substitusi langsung $x=3$:

$$\frac{3^2-9}{3^2-5(3)+6}=\frac{9-9}{9-15+6}=\frac00$$

Bentuk $\frac00$ menandakan pembilang dan penyebut punya faktor bersama. Faktorkan keduanya.

Pembilang adalah selisih kuadrat:

$$x^2-9=(x-3)(x+3)$$

Penyebut dicari dua bilangan yang hasil kalinya $6$ dan jumlahnya $-5$, yaitu $-3$ dan $-2$:

$$x^2-5x+6=(x-3)(x-2)$$

Maka:

$$\lim_{x\to3}\frac{(x-3)(x+3)}{(x-3)(x-2)}$$

Untuk $x\ne3$, faktor $(x-3)$ boleh dicoret:

$$=\lim_{x\to3}\frac{x+3}{x-2}$$

Substitusikan $x=3$:

$$=\frac{3+3}{3-2}=\frac61=6$$

Grafik fungsinya berupa kurva dengan lubang di titik $(3,6)$; nilai fungsi tidak terdefinisi tepat di $x=3$, tetapi limitnya tetap 6.

! Mencoret faktor $(x-3)$ sah di dalam limit karena $x$ mendekati 3 tetapi tidak pernah sama dengan 3.`
  },
  {
    topic: 'Limit Trigonometri',
    intro: true,
    introOrder: 12,
    q: String.raw`Nilai dari $\lim_{x\to0}\frac{\sin4x}{2x}$ adalah ...`,
    options: [
      '$2$',
      '$4$',
      String.raw`$\dfrac12$`,
      '$0$'
    ],
    answer: 0,
    explain: String.raw`Substitusi $x=0$ menghasilkan $\frac{\sin0}{0}=\frac00$, jadi gunakan limit istimewa:

$$\lim_{u\to0}\frac{\sin u}{u}=1$$

Agar bentuknya muncul, kalikan dan bagi dengan 4:

$$\frac{\sin4x}{2x}
=\frac{\sin4x}{4x}\cdot\frac{4x}{2x}$$

Suku kedua menyederhana:

$$\frac{4x}{2x}=2$$

Maka:

$$\lim_{x\to0}\frac{\sin4x}{2x}
=\lim_{x\to0}\left(\frac{\sin4x}{4x}\cdot2\right)$$

Saat $x\to0$, $4x\to0$ juga, sehingga $\frac{\sin4x}{4x}\to1$. Jadi:

$$=1\cdot2=2$$

! Cara cepat: untuk $x\to0$, $\sin(ax)\sim ax$. Maka $\frac{\sin4x}{2x}\sim\frac{4x}{2x}=2$. Perbandingan koefisien sudutnya adalah $\frac42=2$.`
  },
  {
    topic: 'Limit Aljabar',
    intro: true,
    introOrder: 13,
    q: String.raw`Nilai dari $\lim_{x\to+\infty}\frac{5x^2-3x+2}{2x^2+7x-1}$ adalah ...`,
    options: [
      String.raw`$\dfrac52$`,
      '$0$',
      String.raw`$\infty$`,
      String.raw`$\dfrac57$`
    ],
    answer: 0,
    explain: String.raw`Pembilang dan penyebut sama-sama berderajat 2. Bagi keduanya dengan $x^2$, suku berpangkat tertinggi:

$$\frac{5x^2-3x+2}{2x^2+7x-1}
=\frac{5-\frac{3}{x}+\frac{2}{x^2}}{2+\frac{7}{x}-\frac{1}{x^2}}$$

Saat $x\to+\infty$, setiap suku berbentuk $\frac{k}{x^n}$ menuju 0:

$$\frac{3}{x}\to0,\qquad
\frac{2}{x^2}\to0,\qquad
\frac{7}{x}\to0,\qquad
\frac{1}{x^2}\to0$$

Maka limitnya:

$$\frac{5-0+0}{2+0-0}=\frac52$$

Secara umum, jika derajat pembilang sama dengan derajat penyebut, hasil limit di tak hingga adalah rasio koefisien pangkat tertinggi. Di sini $\frac52$.

! Suku $-3x$ dan $7x$ tidak menentukan hasil akhir, karena pertumbuhan $x^2$ jauh lebih cepat. Yang menentukan adalah koefisien $x^2$ di kedua polinomial.`
  },
  {
    topic: 'Limit Aljabar',
    intro: true,
    introOrder: 14,
    q: String.raw`Diketahui $f(x)=\frac{3}{x-4}$. Limit kiri dan limit kanan fungsi saat $x\to4$, serta limit dua arahnya adalah ...`,
    options: [
      String.raw`limit kiri $-\infty$, limit kanan $+\infty$, limit dua arah tidak ada`,
      String.raw`limit kiri $+\infty$, limit kanan $-\infty$, limit dua arah tidak ada`,
      String.raw`limit kiri $-\infty$, limit kanan $+\infty$, limit dua arah $0$`,
      String.raw`limit kiri dan limit kanan $+\infty$, limit dua arah $+\infty$`
    ],
    answer: 0,
    explain: String.raw`Fungsi $f(x)=\frac{3}{x-4}$ tidak terdefinisi di $x=4$, karena penyebutnya menjadi nol. Kita periksa perilakunya dari kiri dan kanan.

**Limit kiri.** Tulis $x=4-h$ dengan $h>0$ dan $h\to0$. Maka $x-4=-h$, sehingga:

$$f(4-h)=\frac{3}{-h}=-\frac{3}{h}$$

Karena $h\to0^+$, nilai $-\frac{3}{h}$ menjadi negatif sangat besar:

$$\lim_{x\to4^-}\frac{3}{x-4}=-\infty$$

**Limit kanan.** Tulis $x=4+h$ dengan $h>0$ dan $h\to0$. Maka $x-4=h$, sehingga:

$$f(4+h)=\frac{3}{h}$$

Karena $h\to0^+$, nilai $\frac{3}{h}$ menjadi positif sangat besar:

$$\lim_{x\to4^+}\frac{3}{x-4}=+\infty$$

**Limit dua arah.** Limit $\lim_{x\to4}f(x)$ hanya ada jika limit kiri dan limit kanan sama-sama menuju bilangan real yang sama. Di sini keduanya berbeda: yang kiri menuju $-\infty$, yang kanan menuju $+\infty$. Jadi limit dua arahnya tidak ada.

Garis $x=4$ adalah asimtot vertikal. Di sebelah kiri asimtot grafiknya turun tanpa batas, di sebelah kanan naik tanpa batas.

! Tanda $\infty$ bukan bilangan real. Pernyataan “limitnya $-\infty$” menggambarkan perilaku fungsi, bukan berarti limit itu punya nilai berhingga.`
  }
);
