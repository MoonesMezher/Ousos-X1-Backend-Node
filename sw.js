const STATIC_CACHE_VERSION = 'v1'; // ← Increment this when you update assets
const DYNAMIC_CACHE_VERSION = 'dynamic-v1'; // ← Increment this too
const SITE_STATIC_CACHE_NAME = `pwa-cache-${STATIC_CACHE_VERSION}`;
const SITE_DYNAMIC_CACHE_NAME = `pwa-cache-${DYNAMIC_CACHE_VERSION}`;

const assets = [
    "/",
    "/index.html",
    "/fallback.html",
    "/assets/index.css",
    "/assets/index.js", 
    "/assets/lecture.css",
    "/logo.jpg",
    "/assets/images/logos/CSS.webp",
    "/assets/images/logos/github.webp",
    "/assets/images/logos/hosting.webp",
    "/assets/images/logos/html.webp",
    "/assets/images/logos/JS.webp",
    "/assets/images/logos/languages.jpg",
    "/assets/images/logos/React.webp",
    "/assets/images/logos/tailwind-css.webp",
    "/assets/images/logos/zus.png",
    "/manifest.json"
];

self.addEventListener("install", event => {
    // Skip waiting to activate immediately
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(SITE_STATIC_CACHE_NAME)
            .then(cache => {
                console.log('Caching static assets');
                return cache.addAll(assets);
            })
            .catch(error => {
                console.log('Cache addAll error:', error);
            })
    );
});

self.addEventListener("activate", event => {
    console.log("Service worker activated, cleaning old caches");
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Delete ALL caches that aren't the current version
                    if (cacheName !== SITE_STATIC_CACHE_NAME && 
                        cacheName !== SITE_DYNAMIC_CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Claim clients immediately
            return self.clients.claim();
        })
    );
});

self.addEventListener("fetch", event => {
    // Skip non-GET requests and chrome-extension requests
    if (event.request.method !== 'GET' || 
        event.request.url.startsWith('chrome-extension://')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version if found
                if (response) {
                    return response;
                }

                // Otherwise fetch from network
                return fetch(event.request)
                    .then(async res => {
                        // Only cache successful responses
                        if (res && res.status === 200) {
                            const cache = await caches.open(SITE_DYNAMIC_CACHE_NAME);
                            cache.put(event.request, res.clone());
                        }
                        return res;
                    })
                    .catch(async error => {
                        // Fallback for HTML requests
                        if (event.request.destination === 'document' || 
                            event.request.headers.get('accept')?.includes('text/html')) {
                            const fallback = await caches.match('/fallback.html');
                            if (fallback) {
                                return fallback;
                            }
                        }
                        throw error;
                    });
            })
    );
});