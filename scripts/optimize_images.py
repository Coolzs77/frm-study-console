import os
import glob
from io import BytesIO
from PIL import Image


def optimize_question_images(folder: str = "public/images") -> None:
    files = sorted(glob.glob(os.path.join(folder, "*")))
    total_before = 0
    total_after = 0
    changed = 0

    for path in files:
        orig_bytes = os.path.getsize(path)
        total_before += orig_bytes
        ext = os.path.splitext(path)[1].lower()

        im = Image.open(path)
        had_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)

        if ext in (".jpg", ".jpeg"):
            rgb = im.convert("RGB")
            if rgb.width > 1400:
                new_h = int(round(rgb.height * (1400.0 / rgb.width)))
                rgb = rgb.resize((1400, new_h), Image.Resampling.LANCZOS)
            buf = BytesIO()
            rgb.save(buf, format="JPEG", quality=86, optimize=True, progressive=True)
            data = buf.getvalue()
            if len(data) < orig_bytes:
                with open(path, "wb") as f:
                    f.write(data)
                total_after += len(data)
                changed += 1
                print(f"[IMG] {os.path.basename(path)}: {orig_bytes/1024:.1f} -> {len(data)/1024:.1f} KB")
            else:
                total_after += orig_bytes
        elif ext == ".png":
            if had_alpha:
                rgba = im.convert("RGBA")
                bg = Image.new("RGBA", rgba.size, (255, 255, 255, 255))
                bg.alpha_composite(rgba)
                rgb = bg.convert("RGB")
            else:
                rgb = im.convert("RGB")

            if rgb.width > 1600:
                new_h = int(round(rgb.height * (1600.0 / rgb.width)))
                rgb = rgb.resize((1600, new_h), Image.Resampling.LANCZOS)

            pal = rgb.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
            buf = BytesIO()
            pal.save(buf, format="PNG", optimize=True)
            data = buf.getvalue()

            if len(data) < orig_bytes or had_alpha:
                # 若去除了透明底但体积未变小，也尝试保存不量化 RGB PNG 取最小者
                if len(data) >= orig_bytes:
                    buf2 = BytesIO()
                    rgb.save(buf2, format="PNG", optimize=True)
                    if buf2.tell() < len(data):
                        data = buf2.getvalue()
                with open(path, "wb") as f:
                    f.write(data)
                total_after += len(data)
                changed += 1
                print(f"[IMG] {os.path.basename(path)}: {orig_bytes/1024:.1f} -> {len(data)/1024:.1f} KB (alphaFixed={had_alpha})")
            else:
                total_after += orig_bytes
        else:
            total_after += orig_bytes

    print(f"\nQuestion Images Summary: {len(files)} files, modified {changed}, {total_before/1024:.1f} KB -> {total_after/1024:.1f} KB (-{(1 - total_after/max(total_before,1))*100:.1f}%)")


def optimize_slide_images(folder: str = "public/slides") -> None:
    files = sorted(glob.glob(os.path.join(folder, "*")))
    total_before = 0
    total_after = 0
    changed = 0

    for path in files:
        orig_bytes = os.path.getsize(path)
        total_before += orig_bytes
        ext = os.path.splitext(path)[1].lower()
        if ext != ".png":
            total_after += orig_bytes
            continue

        im = Image.open(path).convert("RGB")
        if im.width > 1280:
            new_h = int(round(im.height * (1280.0 / im.width)))
            im = im.resize((1280, new_h), Image.Resampling.LANCZOS)

        pal = im.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG)
        buf = BytesIO()
        pal.save(buf, format="PNG", optimize=True)
        data = buf.getvalue()

        if len(data) < orig_bytes:
            with open(path, "wb") as f:
                f.write(data)
            total_after += len(data)
            changed += 1
            if orig_bytes > 300 * 1024:
                print(f"[SLIDE] {os.path.basename(path)}: {orig_bytes/1024:.1f} -> {len(data)/1024:.1f} KB")
        else:
            total_after += orig_bytes

    print(f"\nSlide Images Summary: {len(files)} files, modified {changed}, {total_before/1024:.1f} KB -> {total_after/1024:.1f} KB (-{(1 - total_after/max(total_before,1))*100:.1f}%)")


if __name__ == "__main__":
    optimize_question_images("public/images")
    optimize_slide_images("public/slides")
