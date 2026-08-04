#!/usr/bin/env bash
# Regenerate public/og/og.png (the 1200x630 social preview) from public/og/og.html.
#
# The image is RENDERED from the site's own tokens and webfonts rather than drawn,
# so a brand change means re-running this, not re-editing a binary. Run it after
# touching og.html, styles/globals.css, or the wordmark.
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."

SRC="public/og/og.html"
OUT="public/og/og.png"

# Binary name differs per machine/OS; don't hardcode one.
BROWSER=""
for candidate in google-chrome chromium chromium-browser \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; do
  if command -v "$candidate" >/dev/null 2>&1 || [ -x "$candidate" ]; then
    BROWSER="$candidate"
    break
  fi
done
[ -n "$BROWSER" ] || { echo "no chrome/chromium found on PATH" >&2; exit 1; }

# --virtual-time-budget so the Google Fonts request completes before capture;
# without it the shot can land on the fallback face.
"$BROWSER" --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1200,630 --screenshot="$OUT" \
  --virtual-time-budget=12000 "$SRC" >/dev/null 2>&1

# A written file is not a correct file — a wrong window size fails silently and
# every downstream consumer (X, Slack, LinkedIn) expects exactly 1200x630.
python3 - "$OUT" <<'PY'
import struct, sys
with open(sys.argv[1], "rb") as fh:
    header = fh.read(24)
width, height = struct.unpack(">II", header[16:24])
if (width, height) != (1200, 630):
    sys.exit(f"expected 1200x630, rendered {width}x{height}")
print(f"{sys.argv[1]}: {width}x{height}")
PY
