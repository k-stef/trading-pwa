self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('trading-pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/styles/main.css',
                '/src/app.js',
                '/src/components/Calculator.js',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});