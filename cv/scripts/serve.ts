import { join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const port = Number(process.env.PORT ?? 4173);

const types: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

Bun.serve({
  port,
  async fetch(request) {
    const { pathname } = new URL(request.url);
    const relative = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
    let file = join(root, relative);

    if (pathname === "/" || pathname.endsWith("/")) file = join(file, "index.html");

    const handle = Bun.file(file);
    if (!(await handle.exists())) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(handle, {
      headers: {
        "content-type": types[file.slice(file.lastIndexOf("."))] ?? "application/octet-stream",
        "cache-control": "no-store",
      },
    });
  },
});

console.log(`[serve] http://localhost:${port}`);
