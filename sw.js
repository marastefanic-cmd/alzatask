/* Game Week service worker: cache-first with background refresh, so the
   scoreboard opens instantly (and offline) and picks up updates on the
   following visit. Bump CACHE to invalidate.
   Cache names are prefixed because <user>.github.io is one origin shared by
   every project site — activate must only garbage-collect its own caches. */
const PREFIX = 'gameweek-';
const CACHE = PREFIX + 'v13';
const ASSETS = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(c =>
      c.match(e.request, { ignoreSearch: true }).then(cached => {
        const fresh = fetch(e.request).then(res => {
          if(res && res.ok){
            const copy = res.clone();
            e.waitUntil(c.put(e.request, copy));
          }
          return res;
        });
        if(cached){
          // keep the event alive so the revalidation isn't killed with the SW
          e.waitUntil(fresh.then(() => {}, () => {}));
          return cached;
        }
        return fresh.catch(() => e.request.mode === 'navigate' ? c.match('index.html') : undefined);
      })
    )
  );
});
