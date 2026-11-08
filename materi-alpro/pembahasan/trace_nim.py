"""Trace soal UTS Algoritma & Pemrograman (2024/2025 dan 2025/2026).

Kode yang diuji:
    z = 'L200101010'
    m = z[9:6:-1]
    n = int(m[0])
    p = int(m) + 19
    q = 15 - n
    r = p // 10
    s = 2 * m
    t = p % q
    u = t ** 2
    v = p - t
    w = n < 6

Jalankan:  python trace_nim.py
"""


def trace(nim: str) -> dict:
    z = nim.strip().upper()
    if len(z) != 10:
        print(f"PERINGATAN: NIM {len(z)} karakter; soal mengasumsikan 10 karakter.")
        # tetap lanjut agar terlihat efeknya

    m = z[9:6:-1]
    n = int(m[0])
    p = int(m) + 19
    q = 15 - n
    r = p // 10
    s = 2 * m
    t = p % q
    u = t ** 2
    v = p - t
    w = n < 6

    return {
        "m": m, "n": n, "p": p, "q": q, "r": r,
        "s": s, "t": t, "u": u, "v": v, "w": w,
    }


def main() -> None:
    nim = input("Masukkan NIM (10 karakter, mis. L200101010): ").strip()
    hasil = trace(nim)

    print("\nVariabel  Nilai        Tipe")
    print("-" * 34)
    for nama, nilai in hasil.items():
        print(f"{nama:<9} {nilai!r:<12} {type(nilai).__name__}")

    print("\nCek manual:")
    print(f"  3 digit terakhir dibalik (m) : {hasil['m']!r}")
    print(f"  2 * m (pengulangan string)   : {hasil['s']!r}")


if __name__ == "__main__":
    main()
