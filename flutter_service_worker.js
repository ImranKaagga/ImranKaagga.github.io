'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "eb061caf318f466397c4f43df9423d41",
"assets/assets/images/app_store.png": "45788dbb48b2f2178962ce5b5c8ee951",
"assets/assets/images/closed.png": "3e882881ec4274f151d8fe3c741a49ad",
"assets/assets/images/dueToStock.png": "8156218d67a9681a1f27d402aef3c324",
"assets/assets/images/easy_app_icon.png": "fd7857f172503c580e7ee0b6d8fda9ba",
"assets/assets/images/grocery.jpg": "40546798bbd1a312b4ef8013f6bad881",
"assets/assets/images/on_customer_request.png": "e2f0cb9c6e040330e282339698eb5750",
"assets/assets/images/out_of_stock_tag.png": "8c4aeba14f16f5a2de085b263b09c897",
"assets/assets/images/play_image.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/images/store.jpg": "b189778b8dfcf3a2c714455914c2ea2a",
"assets/assets/images/v1.jpg": "77bdde99870297a5382b6ab152030f88",
"assets/assets/images/v2.jpg": "e4dcaca793e218f5ead8a5aa5fdc8e67",
"assets/assets/images/v3.jpg": "252e651246b5d30deaedb668efe8d443",
"assets/assets/images/v4.jpg": "9c42b7a321c0e86ca4e4f70e29f9f062",
"assets/assets/images/v5.jpg": "fe010cbd91b9d64595316aa7e2d4fc71",
"assets/assets/images/v6.jpg": "0dca600e50f9f884b0b4c7944049876e",
"assets/FontManifest.json": "92f8fe616884b539a8c9a6b2ae33b130",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f79a3def434e9c576c063ffec098bd2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/line_awesome_icons/assets/fonts/icon_font.ttf": "4d42f5f0c62a8f51e876c14575354a6e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d3bd33d88cb409a220cd724c17246b83",
"/": "d3bd33d88cb409a220cd724c17246b83",
"main.dart.js": "147d72f2d5a7b5a0de8a2a003ef47aca",
"manifest.json": "5627c2e45f8fbd7b3731939ec9209365"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
