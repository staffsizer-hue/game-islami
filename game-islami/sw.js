const CACHE_NAME = 'islamic-game-zone-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
    'https://cdn.jsdelivr.net/npm/admob-plus-cordova@1.9.0/dist/admob.min.js'
];

// ===== INSTALL SERVICE WORKER =====
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Service Worker: Meng-cache file...');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('✅ Service Worker: Cache berhasil!');
                return self.skipWaiting();
            })
            .catch(err => {
                console.error('❌ Service Worker: Gagal cache:', err);
            })
    );
});

// ===== AKTIVASI SERVICE WORKER =====
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if (cache !== CACHE_NAME) {
                            console.log('🗑️ Service Worker: Hapus cache lama:', cache);
                            return caches.delete(cache);
                        }
                    })
                );
            })
            .then(() => {
                console.log('✅ Service Worker: Aktivasi selesai!');
                return self.clients.claim();
            })
    );
});

// ===== INTERCEPT REQUEST =====
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(networkResponse => {
                        if (networkResponse && networkResponse.status === 200) {
                            const responseClone = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseClone);
                                });
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        return caches.match('/index.html');
                    });
            })
    );
});

// ===== PUSH NOTIFICATION =====
self.addEventListener('push', event => {
    const data = event.data.json();
    const options = {
        body: data.body || 'Ada pesan baru nih!',
        icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" rx="20" fill="%2313261e"/%3E%3Ctext x="50" y="68" font-size="60" text-anchor="middle" fill="%234caf7a"%3E🕌%3C/text%3E%3C/svg%3E',
        badge: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" rx="20" fill="%2313261e"/%3E%3Ctext x="50" y="68" font-size="60" text-anchor="middle" fill="%234caf7a"%3E🕌%3C/text%3E%3C/svg%3E',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(
        self.registration.showNotification('🕌 Islamic Game Zone', options)
    );
});

// ===== NOTIFICATION CLICK =====
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});

console.log('🕌 Service Worker Islamic Game Zone siap!');