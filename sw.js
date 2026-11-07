const CACHE_NAME = "starlight-tales-v7";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icon.svg",
  "./unicorn.svg"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first strategy so updates on GitHub Pages appear immediately on iPhone
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then((networkResp) => {
          const clone = networkResp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return networkResp;
        })
        .catch(() => caches.match(event.request))
    );
  }
});
