"""Generate Indonesian narration per scene + timing manifest.

Uses the already-installed edge-tts and ffmpeg (imageio-ffmpeg package).
No new downloads, no installs.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(r"D:\video-algo")
SRC = ROOT / "src"
BUILD = ROOT / "build"
AUDIO = BUILD / "audio"
AUDIO.mkdir(parents=True, exist_ok=True)

FFMPEG = Path(
    r"C:\Users\Asus\AppData\Local\Python\pythoncore-3.14-64\Lib\site-packages"
    r"\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
)

LEAD = 0.35   # jeda sebelum narasi mulai di tiap scene
TAIL = 0.55   # jeda setelah narasi selesai
TAIL_END = 1.20  # ekstra di scene terakhir


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")


def dur_of(path: Path) -> float:
    out = run([str(FFMPEG), "-hide_banner", "-i", str(path)]).stderr
    m = re.search(r"Duration: (\d+):(\d+):(\d+\.\d+)", out)
    if not m:
        raise RuntimeError(f"durasi tidak terbaca: {path}\n{out[-500:]}")
    h, mi, s = m.groups()
    return int(h) * 3600 + int(mi) * 60 + float(s)


def main():
    spec = json.loads((SRC / "script.json").read_text(encoding="utf-8"))
    voice, rate = spec["voice"], spec["rate"]
    scenes, cursor = [], 0.0
    total_audio = 0.0
    for i, sc in enumerate(spec["scenes"]):
        mp3 = AUDIO / f"{sc['id']}.mp3"
        if not mp3.exists() or mp3.stat().st_size < 1000:
            r = run([sys.executable, "-m", "edge_tts", "--voice", voice,
                     f"--rate={rate}", "--text", sc["text"], "--write-media", str(mp3)])
            if r.returncode != 0:
                print(r.stderr[-800:])
                raise SystemExit(f"gagal TTS {sc['id']}")
        d = dur_of(mp3)
        total_audio += d
        tail = TAIL_END if i == len(spec["scenes"]) - 1 else TAIL
        scenes.append({
            "id": sc["id"],
            "chapter": sc["chapter"],
            "audio": str(mp3),
            "audioDur": round(d, 3),
            "lead": LEAD,
            "start": round(cursor, 3),
            "dur": round(LEAD + d + tail, 3),
            "narrationStart": round(cursor + LEAD, 3),
        })
        cursor += LEAD + d + tail
    manifest = {
        "fps": 30,
        "width": 1920,
        "height": 1080,
        "total": round(cursor + 0.3, 3),
        "totalAudio": round(total_audio, 3),
        "scenes": scenes,
    }
    (SRC / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    for s in scenes:
        print(f"{s['id']}  start {s['start']:6.2f}s  dur {s['dur']:6.2f}s  audio {s['audioDur']:6.2f}s")
    print(f"TOTAL {manifest['total']:.2f}s  ({manifest['total']/60:.2f} menit), bicara {total_audio:.1f}s")


if __name__ == "__main__":
    main()
