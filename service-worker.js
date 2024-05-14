const CACHE_NAME = 'liff-cache-v1';
const urlsToCache = [
  '/',
  'ulrc.jpg',
  'calculator.png',
  'finecalc_filres.html',
  'finecalc_cirgrad.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});