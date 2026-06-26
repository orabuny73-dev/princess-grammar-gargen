const CACHE_NAME='princess-grammar-garden-v5';
const FILES=['./','./index.html','./styles.css','./app.js','./data.js','./manifest.webmanifest','./word_bank.json','./icons/icon-192.png','./icons/icon-512.png','./assets/palace.svg','./assets/princess.svg','./assets/reward.svg','./assets/castle.svg','./assets/garden.svg','./assets/dressroom.svg','./assets/unicorn.svg','./assets/friends.svg','./assets/rainbow.svg','./assets/bridge.svg','./assets/maze.svg','./assets/book.svg','./assets/stars.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});
