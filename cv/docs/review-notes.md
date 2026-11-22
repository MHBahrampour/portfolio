# CV review notes

Notes taken while reading `BahrampourCV.docx` and while porting it to HTML. Nothing
here is applied yet — the HTML is a faithful replica of the `.docx` so that later
edits appear as clean diffs.

## Corrections to my first read

Two things I got wrong from the plain-text dump, now verified against the XML:

- ~~Key Skills lines are misaligned.~~ The tab characters I saw were `<w:tabs>`
  *tab-stop definitions* in `pPr`, not tabs in the text. All four skill lines are
  flush left. Nothing to fix.
- ~~Only "My Portfolio" is clickable.~~ Portfolio, email, GitHub, LinkedIn **and**
  phone are all hyperlinks (`rId6`–`rId11`). The real gaps: the handles are shown as
  bare handles (`Github: MHBahrampour`) rather than URLs, and the phone is local-only.

## Content

1. ~~**Timeline gap.**~~ **Resolved 21 Nov 2026** — the 030labs end date was wrong.
   It ran `Sep 2022 – Nov 2023`, not `Apr 2023`, so there is no eight-month hole and
   the military-service theory is moot. Do **not** add a military line: it would
   introduce a negative to explain a gap that does not exist.
2. ~~**Date formatting is inconsistent.**~~ **Resolved 21 Nov 2026** — en dashes
   throughout; exact tenure kept on the two finished roles, none on the current one
   (a `+N years` value would age into being wrong). The 030labs end date was also
   corrected to Nov 2023.
3. ~~**Phone has no country code.**~~ **Resolved 21 Nov 2026** — now
   `+98 916 477 0851` (and `tel:+989164770851`).
4. ~~**Education reads as a past degree.**~~ **Resolved 21 Nov 2026** — now
   `Master of Software Engineering: Iranian E-University • Expected 2029`. The
   institution is named "Iranian E-University" by the owner (not "Payam Noor").
5. ~~**Projects is thin.**~~ **Resolved 21 Nov 2026** — the section was dropped. There
   were no other public projects, and the one entry duplicated the portfolio link in
   the header.
6. ~~**Page 2 is ~40% empty.**~~ **Resolved 21 Nov 2026** — the CV is now one page:
   Projects dropped, three soft bullets removed ("Collaborated closely…", "Collaborated
   daily…", vanilla-JS freelance line), the remaining 030labs bullets merged, and the
   summary tightened to four lines. Leading 1.35, paragraph gap 2.5 pt, section margins
   16 px. 19 px of slack at the bottom margin.
7. ~~**Brand casing.**~~ **Resolved 21 Nov 2026** — GitHub, HeroUI, shadcn/ui,
   Better Auth. `React.js` was left as-is (deliberate: the `.js` matches Next.js and
   Vue.js in the same list).
8. **"4+ years"** is the summary's only quantified claim. Career starts Feb 2020
   (freelance), so ~6.5 calendar years by late 2026, ~4 years if only counted from
   030labs. Decide which number is defensible and keep one.
9. ~~**Summary says "primary frontend engineer"…**~~ **Rewritten 21 Nov 2026** — the
   summary no longer restates the tagline. It now opens with the products at Simorgh
   and keeps the "four-plus years" framing, which stays accurate for professional
   frontend work (Sep 2022 → now); the 2020–2022 freelance period is full-stack.
10. **"Fintech and legal-tech"** is accurate for Hampeyman/Tokenization but the summary
    front-loads it before saying what he actually does. A reader outside Iran will not
    know Digikala or Snapp either — worth a half-clause (`Iran's largest marketplace /
    ride-hailing app`).

## Document defects (present in the .docx)

11. One bullet — `Collaborated daily with cross-functional teams…` — carries 1.5-line
    spacing (`w:line="360" w:lineRule="auto"`) while every other bullet is single.
    Visible as extra air around that line.
12. Trailing whitespace in `Simorgh • Dec 2023 - Present ` and `Freelance Full-stack
    Developer  `; stray empty paragraph with a red `C00000` run property.
13. Section headings set in black, but two of them carry an unused `8B1540` colour on
    the paragraph mark; the document has no other use of colour except hyperlinks.

## Skills audit (21 Nov 2026)

Source: the four Simorgh apps — `hampeyman-v2-user`, `hampeyman-v2-admin`,
`tokenization-v2-user`, `tokenization-v2-admin` — read from their `package.json`
files, not from memory.

**Used by all four:** Next.js 16 (`src/app`, App Router), React 19, TypeScript 7,
Tailwind CSS 4, HeroUI 2.8 (React Aria), TanStack Query, react-hook-form + Zod,
Framer Motion, Biome (via Ultracite), Vitest, React Testing Library, jalali-moment.

**Used by two or three:** Zustand (hampeyman-admin, tokenization-user), Recharts
(tokenization), next-intl (tokenization), `@stellar/stellar-sdk` (tokenization),
Playwright + MSW (hampeyman ×2, tokenization-user), react-aria-components
(hampeyman-admin, tokenization ×2).

**Single-project differentiators:** `@trustwallet/wallet-core` (WASM wallets) and
Serwist PWA in tokenization-user; CKEditor 5 in hampeyman-admin; signature pad and
image compression in hampeyman-user.

### cportfolio (personal project)

Stack: TanStack Start / Router / Query / Table / Form, Vite 8, React 19, TypeScript 6,
Tailwind 4 with shadcn/ui (Radix + CVA), Drizzle ORM on PostgreSQL (Neon), Better Auth,
Paraglide (inlang) i18n, Vercel Blob, Nitro, Vitest, oxlint/oxfmt.

Folded into the CV: **TanStack Start / Router**, **shadcn/ui**, **PostgreSQL**,
**Drizzle ORM**.

Left out for space, not because they are unused: Zustand, Recharts, MSW, CKEditor 5
(still appears in a bullet), Better Auth, Vercel Blob, Paraglide by name (covered by
"i18n / RTL").

**Final curation (21 Nov 2026):** prior experience is back even where these five repos
do not show it — SCSS, Jest, Auth.js, Better Auth, Prisma, Recharts, MSW, Zustand,
CKEditor 5. Vue.js was removed at the owner's request (little real use). Material UI
dropped as dated; Git and Linux stay out as assumed.

The block is six lines (Frameworks / State & Forms / UI / Testing / Backend & Auth /
Additional). Additional reads: Agentic Development • Stellar SDK • Wallet Core • PWA /
TWA • i18n • Recharts • CKEditor 5, and fits on one line. Section margin 12 px,
paragraph gap 2 pt. Slack: 18 px.

## Structural ideas (not decided)

- Put GitHub + portfolio as the first line of the header — they are the strongest
  verifiable signals for a frontend role.
- Consider `Frontend Engineer — React, TypeScript, Design Systems` as the tagline;
  "React Ecosystem" is vague to non-frontend screeners.
- If two pages stay, page 2 should not open mid-job. Break at a role boundary instead.
