# CV — Mohammad H. Bahrampour

A hand-written recreation of `BahrampourCV.docx` as a static web page: plain HTML,
Tailwind CSS v4 and a small TypeScript entry point. It renders the document exactly
as Word lays it out — A4 sheets, 12.7 mm margins, Poppins — and the **Download PDF**
button produces a real, text-selectable PDF of the same page.

A header switch flips between that **A4** view and a fluid **Web** view built from the
same markup, so phones get a readable page instead of a shrunken sheet.

No framework, no client-side rendering: the page you see is the page that gets printed.

```
.
├── index.html              # the CV itself — content lives here
├── src/
│   ├── styles.css          # Tailwind entry + document typography (mm-accurate)
│   └── main.ts             # Download PDF button + view/theme state
├── scripts/
│   ├── build-pdf.ts        # Chromium → cv.pdf → embedded base64
│   └── serve.ts            # tiny static server for local preview
├── assets/
│   ├── fonts/              # Poppins 400 / 400 italic / 700 (latin subset)
│   ├── styles.css          # built output (committed)
│   └── main.js             # built output (committed)
└── cv.pdf                  # built output (committed)
```

## Commands

```bash
bun install        # once
bun run dev        # http://localhost:4173
bun run build      # styles → cv.pdf → main.js
```

`bun run build` is the only command you need after editing `index.html` or the CSS.
It rebuilds the stylesheet, re-renders the PDF with headless Chromium, and re-embeds
the PDF into `assets/main.js`.

Requires Chromium or Chrome on `PATH` (`CHROMIUM=/path/to/chrome bun run build:pdf`
if it lives somewhere unusual).

## Views

Both views render the same single `<article class="sheet">` element. Nothing is
duplicated, and nothing is rebuilt at runtime.

- **A4** (default on desktop) — one fixed 210 × 297 mm sheet, letter-sized to the
  document. One page means there is no page indicator: the sheet is the document.
- **Web** — the sheet constraint is dropped on screen: one fluid column, 16 px base
  size, `clamp()`-sized headings, contacts that wrap instead of sitting on one
  centred line, blank spacer paragraphs removed in favour of section margins.

The `Updated Nov 2026` stamp lives once, in the toolbar's identity strip, so it is
visible in both views and stays current while scrolling. Its label is derived from
`<time datetime="YYYY-MM">`, which is the only value to bump.

The choice lives on `<html data-view="...">`, set by a tiny inline script in `<head>`
before first paint (no flash), then controlled by `src/main.ts`:

| How it is chosen | Result |
| ---------------- | ------ |
| `?view=web` / `?view=a4` | forces that view for this load and adopts it as the saved choice |
| `localStorage["cv:view"]` | remembers the last switch |
| first visit, viewport ≤ 640 px | starts in **Web** |
| first visit, wider than 640 px | starts in **A4** |

Every toggle also mirrors the current state back into the URL (`?view=…&theme=…`
via `history.replaceState`), so a refresh can never contradict what you last picked,
and the URL still works as a shareable link. If storage is unavailable — a sandboxed
preview, a browser that blocks `file://` storage — the URL alone carries the state.
If `replaceState` is blocked too, both fall back to the first-visit defaults.

## Toolbar

A floating card (`position: fixed`, 12 px off the bottom and sides, 16 px radius) in two
sections, and never printed:

- **Identity strip** — an accent-tinted band (`--identity-bg`: 9% burgundy over white,
  a deep maroon in dark mode). `Mohammad H. Bahrampour CV` sits on the left with "CV"
  in `--identity-accent`, `Updated Nov 2026` is pushed to the right by
  `justify-content: space-between`. On narrow screens the name ellipsises but the "CV"
  mark stays whole, since it lives outside the truncating span.
- **Controls** — `A4 | Web` and the theme toggle on the left, Download on the right.

The card is `24rem` wide (384 px, Tailwind's `w-sm`), capped by the viewport through
`width: min(100% - 2 × --bar-gap, --bar-w)`, so it never touches the edges on a phone.
That width gives the identity row's `space-between` real slack — name left, date right.

Padding and clearance use two values: `--bar-pad: 8px` inside both sections on both
axes, `--bar-gap: 12px` for the card's distance from the viewport edges.

Every control shares `--control-h: 34px`, so the segmented switch, the icon button and
the download button line up exactly.

There is no status line and no Print button: the switch already shows the mode, and
`Ctrl/Cmd + P` still prints through the same stylesheet that generates `cv.pdf`.

The page's bottom padding has to clear the bar, so `main.ts` measures it on load and
on resize and writes `--bar-h`; `.paper-stack` pads with
`calc(var(--bar-h) + 48px)`. Without JavaScript the 64 px fallback still keeps the
last line visible.

Printing and the generated `cv.pdf` are **always A4**: every web-view rule sits inside
`@media screen`, so the print stylesheet never sees them.

## Themes

Light and dark are both view-only. A sun/moon button in the header flips the palette
for the chrome, the sheet and the document text; the accent stays the CV's burgundy
(brightened slightly in dark for contrast).

| How it is chosen | Result |
| ---------------- | ------ |
| `?theme=dark` / `?theme=light` | forces that theme for this load |
| `localStorage["cv:theme"]` | remembers the last toggle |
| first visit | follows `prefers-color-scheme` |
| no stored choice | keeps following the OS live |

The palette is a set of custom properties in `:root` (light) with a
`html[data-theme="dark"]` override block. **That block is inside `@media screen` on
purpose** — printing and `bun run build:pdf` never match it, so a dark-mode desktop
still produces a white, black-on-white PDF. `scripts/build-pdf.ts` additionally pins
`?view=a4&theme=light` in the URL it renders.

## How the download works

`cv.pdf` is pre-rendered from the same HTML, so the PDF is vector text with the exact
same line breaks — not a screenshot. The button serves it two ways:

1. `assets/main.js` holds the PDF as base64 and downloads it as a Blob. This works
   even when you open `index.html` straight from disk (`file://`), where `fetch()`
   is blocked.
2. The anchor's `href="./cv.pdf" download` stays as a no-JavaScript fallback.

## Fidelity notes

Every measurement below was read out of the `.docx` (`word/document.xml`,
`styles.xml`, `numbering.xml`) rather than eyeballed:

| Property        | Source value                  | Implementation            |
| --------------- | ----------------------------- | ------------------------- |
| Page            | A4, 11906 × 16838 twips       | `--page-w/h: 210/297mm`   |
| Margins         | 720 twips each side           | `--page-margin: 12.7mm`   |
| Body text       | Poppins 10 pt                 | `--doc-size: 10pt`        |
| Name / tagline  | 24 pt bold / 16 pt regular    | `.name`, `.tagline`       |
| Section titles  | 12 pt bold, centred           | `.section`                |
| Space after ¶   | 80 twips = 4 pt               | `--doc-gap: 4pt`          |
| Bullets         | 12 pt Symbol bullet, ind 432 twips, hanging 216 | `.list li`  |
| Summary         | justified                     | `.summary`                |
| Page count     | one page                             | single sheet, no overflow  |

Two judgement calls worth knowing about:

- **Line height.** Poppins' own single-spacing is 1.5 em, but at 1.5 the page-1
  content overflows by about 14 pt, so Word cannot be using it here. 1.4 em puts the
  last line of page 1 within ~2 mm of the bottom margin — matching where the original
  breaks — so that is what the document uses.
- **One bullet carries 1.5-line spacing** in the source (`Collaborated daily with
  cross-functional teams…`). That is reproduced via `.loose`; it is a defect in the
  `.docx`, not a design choice.

The source `.docx` renders hyperlinks in Word's default blue/underline
(`#0563C1`), so portfolio, email, GitHub, LinkedIn and phone are links here too.

## Editing

Content lives directly in `index.html` — a single `<article class="sheet">`.
If an edit grows past the sheet's bottom margin the text will spill visibly below
the paper, so re-run the build and check `cv.pdf` after any content change:

```bash
bun run build
```

Every paragraph is a `<p>`; the `4pt` gap comes from CSS, not from blank lines.

## Not applied yet

`docs/review-notes.md` holds the CV review notes (content issues, inconsistencies,
things to decide) that this port intentionally does **not** change — the goal of this
step was a faithful replica so that later edits show up as a clean diff.
