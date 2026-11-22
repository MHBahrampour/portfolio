import { CV_PDF_BASE64 } from "./generated/pdf";

const FILE_NAME = "Mohammad-H-Bahrampour-CV.pdf";
const VIEW_KEY = "cv:view";
const THEME_KEY = "cv:theme";

type View = "a4" | "web";
type Theme = "light" | "dark";

const root = document.documentElement;
const download = document.querySelector<HTMLAnchorElement>("#download-button");
const themeButton = document.querySelector<HTMLButtonElement>("#theme-button");
const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
const viewButtons = [...document.querySelectorAll<HTMLButtonElement>("[data-view-option]")];
const updatedTimes = [
  ...document.querySelectorAll<HTMLTimeElement>(".toolbar time[datetime]"),
];

/* --------------------------- updated date --------------------------------- */

// Every visible date derives from its <time datetime="YYYY-MM">, which stays the
// single value that ever needs editing.
for (const time of updatedTimes) {
  const [year, month] = time.dateTime.split("-").map(Number);
  if (!year || !month) continue;
  time.textContent = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

function readPreference(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writePreference(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode / file:// without storage — the toggle still works */
  }
}

/* ------------------------------ url mirror ------------------------------- */

// The URL is the fallback when storage is unavailable (sandboxed previews,
// browsers that block file:// storage), and it keeps shareable ?view=/?theme=
// links honest. Adopting the parameters as the saved choice means a refresh
// never contradicts the last thing the visitor picked.
function syncUrl() {
  const url = new URL(location.href);
  url.searchParams.set("view", root.dataset.view ?? "a4");
  url.searchParams.set("theme", root.dataset.theme ?? "light");
  try {
    history.replaceState(null, "", url);
  } catch {
    /* sandboxed frame — storage alone has to carry it */
  }
}

const initialParams = new URLSearchParams(location.search);
if (isView(initialParams.get("view") ?? undefined)) {
  writePreference(VIEW_KEY, initialParams.get("view")!);
}
if (isTheme(initialParams.get("theme") ?? undefined)) {
  writePreference(THEME_KEY, initialParams.get("theme")!);
}

/* --------------------------- bottom bar height --------------------------- */

// Keep the page's bottom padding in sync with the fixed toolbar, including the
// extra row it grows on narrow screens.
const toolbar = document.querySelector<HTMLElement>(".toolbar");

function syncToolbarHeight() {
  if (!toolbar) return;
  root.style.setProperty("--bar-h", `${Math.ceil(toolbar.getBoundingClientRect().height)}px`);
}

syncToolbarHeight();
if (toolbar && typeof ResizeObserver !== "undefined") {
  new ResizeObserver(syncToolbarHeight).observe(toolbar);
} else {
  window.addEventListener("resize", syncToolbarHeight);
}

/* ------------------------------ view switch ------------------------------ */

function isView(value: string | undefined): value is View {
  return value === "a4" || value === "web";
}

function setView(view: View, { persist = true, scroll = false } = {}) {
  root.dataset.view = view;

  for (const button of viewButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.viewOption === view));
  }

  if (persist) {
    writePreference(VIEW_KEY, view);
    syncUrl();
  }
  if (scroll) window.scrollTo({ top: 0 });
}

// The inline script in <head> already chose the initial view before paint;
// this only syncs the buttons with it.
setView(isView(root.dataset.view) ? root.dataset.view : "a4", { persist: false });

for (const button of viewButtons) {
  button.addEventListener("click", () => {
    const next = button.dataset.viewOption;
    if (!isView(next) || next === root.dataset.view) return;
    setView(next, { scroll: true });
  });
}

/* ------------------------------ theme switch ----------------------------- */

function isTheme(value: string | undefined): value is Theme {
  return value === "light" || value === "dark";
}

function setTheme(theme: Theme, { persist = true } = {}) {
  root.dataset.theme = theme;

  themeButton?.setAttribute("aria-pressed", String(theme === "dark"));
  themeButton?.setAttribute(
    "title",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
  );
  themeMeta?.setAttribute("content", theme === "dark" ? "#0c0c0f" : "#e9e9ec");

  if (persist) {
    writePreference(THEME_KEY, theme);
    syncUrl();
  }
}

setTheme(isTheme(root.dataset.theme) ? root.dataset.theme : "light", { persist: false });

themeButton?.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

// Follow the OS only until the visitor makes an explicit choice.
const darkQuery = matchMedia("(prefers-color-scheme: dark)");
darkQuery.addEventListener("change", (event) => {
  if (readPreference(THEME_KEY)) return;
  setTheme(event.matches ? "dark" : "light", { persist: false });
});

/* ------------------------------- download -------------------------------- */

function blobFromBase64(base64: string): Blob {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: "application/pdf" });
}

download?.addEventListener("click", (event) => {
  // The href already points at ./cv.pdf, so without a build (or over http) the
  // browser still gets a working download. With the embedded copy we can also
  // serve file:// pages and keep the file name stable.
  if (!CV_PDF_BASE64) return;
  event.preventDefault();

  const url = URL.createObjectURL(blobFromBase64(CV_PDF_BASE64));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = FILE_NAME;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2_000);
});
