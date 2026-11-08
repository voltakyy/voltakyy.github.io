/* Topik 4 — Limit Trigonometri */
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push(
  {
    topic: 'Limit Trigonometri',
    q: String.raw`Nilai dari $\lim_{t\to0}\frac{\cos 2t}{1+\sin t}$ adalah ...`,
    options: [
      '$0$',
      '$\\frac{1}{2}$',
      '$1$',
      'tidak ada'
    ],
    answer: 2,
    explain: String.raw`Fungsi $\cos 2t$ dan $\sin t$ kontinu di $t=0$. Jadi substitusi langsung boleh dilakukan:

$$\lim_{t\to0}\frac{\cos 2t}{1+\sin t}
=\frac{\cos 0}{1+\sin 0}$$
$$=\frac{1}{1+0}=1$$

Tidak ada bentuk $\frac{0}{0}$ di sini. Penyebutnya justru menuju 1, bukan 0.

! Kebiasaan yang baik: substitusi dulu. Kalau hasilnya bilangan biasa, selesai. Kita baru memakai manipulasi aljabar atau identitas trigonometri kalau muncul bentuk tak tentu seperti $\frac{0}{0}$.`
  },
  {
    topic: 'Limit Trigonometri',
    q: String.raw`Nilai dari $\lim_{\theta\to0}\frac{\tan 5\theta}{\sin 3\theta}$ adalah ...`,
    options: [
      '$\\frac{5}{3}$',
      '$\\frac{3}{5}$',
      '$1$',
      '$0$'
    ],
    answer: 0,
    explain: String.raw`Ubah $\tan 5\theta$ menjadi $\frac{\sin 5\theta}{\cos 5\theta}$:

$$\frac{\tan 5\theta}{\sin 3\theta}
=\frac{\sin 5\theta}{\cos 5\theta}\cdot\frac{1}{\sin 3\theta}$$
$$=\frac{\sin 5\theta}{\sin 3\theta}\cdot\frac{1}{\cos 5\theta}$$

Sekarang pakai limit istimewa $\frac{\sin u}{u}\to1$ saat $u\to0$:

$$\frac{\sin 5\theta}{\sin 3\theta}
=\frac{\frac{\sin 5\theta}{5\theta}}{\frac{\sin 3\theta}{3\theta}}\cdot\frac{5\theta}{3\theta}
\to\frac{1}{1}\cdot\frac{5}{3}=\frac{5}{3}$$

Sementara $\cos 5\theta \to \cos 0=1$. Jadi:

$$\lim_{\theta\to0}\frac{\tan 5\theta}{\sin 3\theta}=\frac{5}{3}\cdot1=\frac{5}{3}$$

! Yang menentukan adalah perbandingan koefisien sudutnya, bukan koefisien di depan fungsi. Karena $\tan 5\theta$ “setara” dengan $5\theta$ dan $\sin 3\theta$ setara dengan $3\theta$, hasilnya $\frac{5}{3}$.`
  },
  {
    topic: 'Limit Trigonometri',
    q: String.raw`Nilai dari $\lim_{t\to0}\frac{\sin 3t+4t}{t}$ adalah ...`,
    options: [
      '$3$',
      '$4$',
      '$7$',
      '$\\infty$'
    ],
    answer: 2,
    explain: String.raw`Pecah pembilangnya menjadi dua bagian:

$$\frac{\sin 3t+4t}{t}=\frac{\sin 3t}{t}+\frac{4t}{t}$$

Suku kedua langsung menjadi 4. Untuk suku pertama, kalikan dan bagi dengan 3 agar muncul bentuk $\frac{\sin u}{u}$:

$$\frac{\sin 3t}{t}=3\cdot\frac{\sin 3t}{3t}$$

Karena $3t\to0$ saat $t\to0$:

$$\lim_{t\to0}3\cdot\frac{\sin 3t}{3t}=3\cdot1=3$$

Jadi:

$$\lim_{t\to0}\left(\frac{\sin 3t}{t}+4\right)=3+4=7$$

! Jangan menjawab 3 atau 4 saja. Kedua suku sama-sama memberi kontribusi, jadi hasilnya dijumlahkan.`
  },
  {
    topic: 'Limit Trigonometri',
    q: String.raw`Nilai dari $\lim_{t\to0} t\sec t$ adalah ...`,
    options: [
      '$0$',
      '$1$',
      '$\\infty$',
      'tidak ada'
    ],
    answer: 0,
    explain: String.raw`Ubah $\sec t$ menjadi $\frac{1}{\cos t}$:

$$t\sec t=t\cdot\frac{1}{\cos t}=\frac{t}{\cos t}$$

Saat $t\to0$, pembilangnya menuju 0 dan penyebutnya menuju $\cos 0=1$. Maka:

$$\lim_{t\to0}\frac{t}{\cos t}=\frac{0}{1}=0$$

Tidak ada bentuk tak tentu di sini. Faktor $t$ yang mengecil “mengalahkan” nilai $\sec t$ yang mendekati 1.

! $\sec 0=1$, bukan 0 atau tak hingga. Yang menuju nol hanya faktor $t$-nya.`
  },
  {
    topic: 'Limit Trigonometri',
    challenge: true,
    q: String.raw`Nilai dari $\lim_{x\to0}\frac{1-\cos x}{x^2}$ adalah ...`,
    options: [
      '$0$',
      '$\\frac{1}{2}$',
      '$1$',
      '$\\infty$'
    ],
    answer: 1,
    explain: String.raw`Substitusi langsung menghasilkan $\frac{0}{0}$. Kalikan pembilang dan penyebut dengan bentuk sekawan $1+\cos x$:

$$\frac{1-\cos x}{x^2}\cdot\frac{1+\cos x}{1+\cos x}$$
$$=\frac{1-\cos^2 x}{x^2(1+\cos x)}$$

Gunakan identitas $\sin^2 x+\cos^2 x=1$, sehingga $1-\cos^2 x=\sin^2 x$:

$$=\frac{\sin^2 x}{x^2(1+\cos x)}$$
$$=\left(\frac{\sin x}{x}\right)^2\cdot\frac{1}{1+\cos x}$$

Saat $x\to0$:

$$\left(\frac{\sin x}{x}\right)^2\to1^2=1$$
$$\frac{1}{1+\cos x}\to\frac{1}{1+1}=\frac{1}{2}$$

Jadi limitnya $1\cdot\frac{1}{2}=\frac{1}{2}$.

! Hasil ini sering muncul sebagai limit standar. Ingat bentuknya: $1-\cos x$ sebanding dengan $\frac{x^2}{2}$ untuk $x$ kecil.`
  },
  {
    topic: 'Limit Trigonometri',
    challenge: true,
    q: String.raw`Nilai dari $\lim_{x\to0}\frac{1-\cos 4x}{x^2}$ adalah ...`,
    options: [
      '$4$',
      '$8$',
      '$16$',
      '$\\frac{1}{2}$'
    ],
    answer: 1,
    explain: String.raw`Gunakan substitusi $u=4x$. Maka $x=\frac{u}{4}$ dan $x^2=\frac{u^2}{16}$. Saat $x\to0$, $u\to0$ juga.

$$\frac{1-\cos 4x}{x^2}
=\frac{1-\cos u}{\frac{u^2}{16}}$$
$$=16\cdot\frac{1-\cos u}{u^2}$$

Dari limit standar, $\frac{1-\cos u}{u^2}\to\frac{1}{2}$. Maka:

$$16\cdot\frac{1}{2}=8$$

Jadi hasilnya 8.

Cara lain: pakai identitas $1-\cos 4x=2\sin^2 2x$. Maka:

$$\frac{2\sin^2 2x}{x^2}
=2\left(\frac{\sin 2x}{x}\right)^2$$
$$=2\left(2\cdot\frac{\sin 2x}{2x}\right)^2$$
$$\to2\cdot4=8$$

! Perhatikan faktor 4 yang ikut dikuadratkan. Kalau hanya mengganti $\cos 4x$ dengan $\cos x$, hasilnya akan salah.`
  }
);
