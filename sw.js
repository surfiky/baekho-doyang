// Service worker mínimo: guarda la app para que abra rápido y funcione sin conexión.
// Al cambiar cualquier archivo de la app, sube la versión para que los móviles descarguen la nueva.
const CACHE = "baekho-v1";
const APP = ["./", "index.html", "manifest.webmanifest", "img/logo-256.webp", "img/icon-192.png", "img/icon-512.png", "img/apple-touch-icon.png", "img/favicon.png"];
const JSPDF = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(APP);
    await c.add(JSPDF).catch(() => {});
    await self.skipWaiting();
  })());
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Red primero para la página (así se ven los cambios), caché como respaldo sin conexión.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok && (e.request.url.startsWith(self.location.origin) || e.request.url.includes("cdnjs.cloudflare.com"))) {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
