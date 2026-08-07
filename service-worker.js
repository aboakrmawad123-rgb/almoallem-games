const CACHE_NAME = 'almoallem-v40-privacy-back-fix';
const APP_SHELL = [
  './',
  './index.html',
  './privacy.html',
  './style.css?v=20',
  './script.js?v=40',
  './manifest.webmanifest',
  './favicon.ico',
  './card-back.webp',
  './letter-hunt-basket.webp',
  './apple.webp',
  './banana.webp',
  './orange.webp',
  './strawberry.webp',
  './grapes.webp',
  './watermelon.webp',
  './lion.webp',
  './duck.webp',
  './crocodile.webp',
  './monkey.webp',
  './chicken.webp',
  './turtle.webp',
  './giraffe.webp',
  './rabbit.webp',
  './camel.webp',
  './bear.webp',
  './cow.webp',
  './elephant.webp',
  './sheep.webp',
  './puzzle-cat.webp',
  './puzzle-plant.webp',
  './puzzle-toys.webp',
  './puzzle-trash.webp',
  './puzzle-elder.webp',
  './puzzle-books.webp',
  './word-treasure-l1-kitchen.webp',
  './word-treasure-l1-room.webp',
  './word-treasure-l2-school.webp',
  './word-treasure-l2-garden-azzam.webp',
  './word-treasure-l2-garden.webp',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './icon-maskable-512.png',
  './audio/ahsant.wav',
  './audio/raaie.wav',
  './audio/mumtaz.wav',
  './audio/hawel.wav',
  './audio/win.wav',
  './audio/mashallah.wav',
  './audio/quran-level-complete.wav',
  './audio/letter-hunt-lose.wav'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  // Do not cache title proxy responses; always ask Vercel for fresh metadata.
  if (requestUrl.pathname.startsWith('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }

  if (event.request.mode === 'navigate') {
    const isPrivacyPage = requestUrl.pathname.endsWith('/privacy.html');
    const cacheKey = isPrivacyPage ? './privacy.html' : './index.html';
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(cacheKey, copy));
          return response;
        })
        .catch(() => caches.match(cacheKey))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
