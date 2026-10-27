#!/usr/bin/env python3
"""
Generate the social share card (public/og-image.png, 1200x630).

Content is read from src/data/portfolio.js so the card can never drift out of
sync with the site. Re-run after changing your name, role, tagline, or links:

    python3 scripts/generate-og-image.py

Requires Pillow. Colors mirror src/styles/tokens.css (Palantir Blueprint dark).
"""

import re
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "src" / "data" / "portfolio.js"
OUTPUT = ROOT / "public" / "og-image.png"

WIDTH, HEIGHT = 1200, 630

# Blueprint dark theme
BG = (28, 33, 39)  # --bp-dark-gray1
TEXT_PRIMARY = (246, 247, 249)  # --bp-light-gray5
TEXT_MUTED = (171, 179, 191)  # --bp-gray4
ACCENT = (45, 114, 210)  # --bp-blue3
ACCENT_TEXT = (138, 187, 255)  # --bp-blue5
HAIRLINE = (255, 255, 255, 38)  # rgba(255,255,255,0.15)
GRID = (255, 255, 255, 7)  # rgba(255,255,255,0.028)

SANS_CANDIDATES = [
    "/System/Library/Fonts/SFNS.ttf",
    "/System/Library/Fonts/HelveticaNeue.ttc",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
]
MONO_CANDIDATES = [
    "/System/Library/Fonts/SFNSMono.ttf",
    "/System/Library/Fonts/Menlo.ttc",
    "/System/Library/Fonts/Supplemental/Courier New.ttf",
]


def read_field(source: str, field: str) -> str:
    """Pull `field: 'value'` out of the content module, tolerating escapes."""
    match = re.search(rf"{field}:\s*'((?:[^'\\]|\\.)*)'", source)
    if not match:
        return ""
    return match.group(1).replace("\\'", "'")


def load_font(candidates, size, variation=None):
    for path in candidates:
        if not Path(path).exists():
            continue
        try:
            font = ImageFont.truetype(path, size)
        except OSError:
            continue
        if variation:
            try:
                font.set_variation_by_name(variation)
            except (OSError, ValueError):
                pass
        return font
    return ImageFont.load_default(size)


def main():
    source = SOURCE.read_text(encoding="utf-8")

    name = read_field(source, "name") or "Your Name"
    role = read_field(source, "role")
    tagline = read_field(source, "tagline")
    location = read_field(source, "location")
    availability = read_field(source, "availability")

    handle = re.search(r"https://github\.com/([^']+)", source)
    handle = handle.group(1) if handle else ""

    initials = "".join(word[0] for word in name.split()[:2]).upper()

    # --- canvas ---------------------------------------------------------
    canvas = Image.new("RGBA", (WIDTH, HEIGHT), BG + (255,))

    # Faint blueprint grid, matching body::before on the site.
    grid = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid)
    for x in range(0, WIDTH + 1, 60):
        grid_draw.line([(x, 0), (x, HEIGHT)], fill=GRID, width=1)
    for y in range(0, HEIGHT + 1, 60):
        grid_draw.line([(0, y), (WIDTH, y)], fill=GRID, width=1)

    canvas = Image.alpha_composite(canvas, grid)
    draw = ImageDraw.Draw(canvas)

    # Inset hairline border.
    draw.rectangle([(0, 0), (WIDTH - 1, HEIGHT - 1)], outline=HAIRLINE, width=1)

    left = 80

    # --- identity mark --------------------------------------------------
    mark = 56
    draw.rounded_rectangle(
        [(left, 72), (left + mark, 72 + mark)], radius=4, fill=ACCENT + (255,)
    )
    mark_font = load_font(SANS_CANDIDATES, 24, variation="Bold")
    box = draw.textbbox((0, 0), initials, font=mark_font)
    draw.text(
        (left + mark / 2 - (box[2] - box[0]) / 2 - box[0],
         72 + mark / 2 - (box[3] - box[1]) / 2 - box[1]),
        initials,
        font=mark_font,
        fill=(255, 255, 255),
    )

    # --- name / role / tagline -----------------------------------------
    name_font = load_font(SANS_CANDIDATES, 76, variation="Bold")
    draw.text((left, 190), name, font=name_font, fill=TEXT_PRIMARY)

    y = 296
    if role:
        role_font = load_font(SANS_CANDIDATES, 32, variation="Regular")
        draw.text((left, y), role, font=role_font, fill=ACCENT_TEXT)
        y += 62

    if tagline:
        tagline_font = load_font(SANS_CANDIDATES, 24, variation="Regular")
        for line in textwrap.wrap(tagline, width=64)[:2]:
            draw.text((left, y), line, font=tagline_font, fill=TEXT_MUTED)
            y += 34

    # --- footer status bar ---------------------------------------------
    rule_y = HEIGHT - 108
    draw.line([(left, rule_y), (WIDTH - left, rule_y)], fill=HAIRLINE, width=1)

    parts = [p for p in (location, availability, f"github.com/{handle}" if handle else "") if p]
    footer_font = load_font(MONO_CANDIDATES, 21)
    draw.text(
        (left, rule_y + 28),
        "   ·   ".join(parts),
        font=footer_font,
        fill=TEXT_MUTED,
    )

    # Blueprint blue accent strip along the bottom edge.
    draw.rectangle([(0, HEIGHT - 6), (WIDTH, HEIGHT)], fill=ACCENT + (255,))

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(OUTPUT, "PNG", optimize=True)
    print(f"wrote {OUTPUT.relative_to(ROOT)} ({WIDTH}x{HEIGHT})")


if __name__ == "__main__":
    main()
