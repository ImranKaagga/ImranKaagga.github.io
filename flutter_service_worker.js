'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b36f39a1f8f1dfc9aafe5d6b917d4884",
"assets/assets/images/1.png": "8df87798840120718655b402b9d9934d",
"assets/assets/images/2.png": "68043e199d0715de47feeecc3e78c6dd",
"assets/assets/images/3.png": "2b240c9a393139510f5b4c5f23957a05",
"assets/assets/images/about_us.png": "40c390b9ad7c60a1f65558292d13588d",
"assets/assets/images/appstore.png": "71cbdaa3eb8e654197e151cf3d0837c0",
"assets/assets/images/app_store.png": "45788dbb48b2f2178962ce5b5c8ee951",
"assets/assets/images/bg9.png": "68861f8645c27e080d27121d01a2fab0",
"assets/assets/images/closed.png": "3e882881ec4274f151d8fe3c741a49ad",
"assets/assets/images/company.jpg": "2b83a2c6cae5fc42aa41c1b975e6b79a",
"assets/assets/images/cover.png": "084f191a3afedbe91185f85e355b1c59",
"assets/assets/images/cover_bg.png": "1dd2164bb0ced4693e035b42359f2790",
"assets/assets/images/dueToStock.png": "8156218d67a9681a1f27d402aef3c324",
"assets/assets/images/ea1.png": "7fc4d3a28004f74f30a80693e603f198",
"assets/assets/images/ea2.png": "d0c2bef581b9f33823966b47540508f8",
"assets/assets/images/easy_app_icon.png": "fd7857f172503c580e7ee0b6d8fda9ba",
"assets/assets/images/grocery.jpg": "40546798bbd1a312b4ef8013f6bad881",
"assets/assets/images/grocery_bag.png": "db4b3fe987b5a66ed3330719396f13f0",
"assets/assets/images/KV-Logo.png": "868963039ca66917811ba7e605595df5",
"assets/assets/images/logo2.png": "748f1742baed339f3a21bbebec480a3b",
"assets/assets/images/logo3.png": "7a9013279c472b6cac42f72f56f9477a",
"assets/assets/images/logo4.png": "7a9013279c472b6cac42f72f56f9477a",
"assets/assets/images/logo5.png": "3d8bd181c1c9e4bdc3cd15f23381434d",
"assets/assets/images/logo6.png": "e68d1741fc3bec38b3701fdbb7444d85",
"assets/assets/images/map.png": "144c1cf4b5587c22196a6df52086e64b",
"assets/assets/images/om.jpg": "a0e235fe5e8548ac18ee8bcbc6643cda",
"assets/assets/images/om2.png": "cbd77e9cf5c3c6bdb81e89776033190e",
"assets/assets/images/on_customer_request.png": "e2f0cb9c6e040330e282339698eb5750",
"assets/assets/images/out_of_stock_tag.png": "8c4aeba14f16f5a2de085b263b09c897",
"assets/assets/images/p1.png": "16215a28117b32b6445850595a15956c",
"assets/assets/images/p2.png": "fac2c2a03d28613a3d5159e9707378a2",
"assets/assets/images/p3.png": "d0b4ce888c66ce9b02e68d937891664f",
"assets/assets/images/p7.png": "effce58d5244bba1944820a791268563",
"assets/assets/images/p9.png": "9cb947eea72009fb54b3861a41519efe",
"assets/assets/images/playstore.png": "5b38fc9bbf28c6dd7324351ce2e8ecea",
"assets/assets/images/play_image.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/images/s1.jpg": "e620c721686f85686f9209b4e90e08e4",
"assets/assets/images/s2.jpg": "08fd88a94756095462e9e58b62d7362b",
"assets/assets/images/s3.jpg": "95bdd04228cbdda938748554d1754795",
"assets/assets/images/s4.jpg": "b791dc7573a9bc53387d1ac922535f93",
"assets/assets/images/startup_bg.png": "7c67702f6cb9e81be52fc3de6db645de",
"assets/assets/images/startup_bg2.png": "0e18a577235497783ba568dea9e9449b",
"assets/assets/images/startup_bg3.png": "0acf3f3f5b757d47102fd2c9413a681e",
"assets/assets/images/startup_bg4.png": "0664ca92e2ff759259f6553b06082f19",
"assets/assets/images/startup_bg5.jpg": "06abcbfd5c12c1b282cda36d7bab12f4",
"assets/assets/images/store.jpg": "b189778b8dfcf3a2c714455914c2ea2a",
"assets/assets/images/v1.jpg": "77bdde99870297a5382b6ab152030f88",
"assets/assets/images/v2.jpg": "e4dcaca793e218f5ead8a5aa5fdc8e67",
"assets/assets/images/v3.jpg": "252e651246b5d30deaedb668efe8d443",
"assets/assets/images/v4.jpg": "9c42b7a321c0e86ca4e4f70e29f9f062",
"assets/assets/images/v5.jpg": "fe010cbd91b9d64595316aa7e2d4fc71",
"assets/assets/images/v6.jpg": "0dca600e50f9f884b0b4c7944049876e",
"assets/assets/images/white-logo.png": "afa7dbc83d601d3611ff213243328ce9",
"assets/assets/images/wyngs1.png": "332296b55ecd98b41ff2a44686391fb6",
"assets/assets/images/wyngs2.png": "88c3bf2b9975ecde2c990e33172a9ebd",
"assets/assets/website/1.png": "8f5e25eff112a444bde425d78eea3eea",
"assets/assets/website/2.png": "3020fb4730564a23399ba87b208bed30",
"assets/assets/website/3.png": "ced4c05719016121584e3b5d0a2e35b9",
"assets/assets/website/4.png": "d92ecb96665411d37ff711c437151856",
"assets/assets/website/5.png": "b18ba524d9c3e38473cf51d871e32634",
"assets/assets/website/6.png": "5866768d98b38e9dbd729b921ba867bc",
"assets/assets/website/7.png": "075569caa6de52844051582e677c49dd",
"assets/assets/website/kv_logo_new.png": "21520207a3a968cb346ed726894cb8d4",
"assets/assets/website/top_bg.png": "4b044053e55f3114a890c27e2c4137db",
"assets/assets/website/top_bg_2.png": "5370a913102011836370a83e470d7e33",
"assets/FontManifest.json": "10ecd043fd7c0bd18ce1960d5f0a1ec5",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "6b516e41f94ff597d57984625f11be4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/line_awesome_icons/assets/fonts/icon_font.ttf": "4d42f5f0c62a8f51e876c14575354a6e",
"assets/packages/some_calendar/fonts/playfair.ttf": "b3721ba3bde34e5b38b0e1523cccfd7f",
"assets/packages/some_calendar/fonts/RobotoSlab-Regular.ttf": "f7ffac600a7a4edb6db9b21c606a6884",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "dcc54e804321c2622a11335160ed2252",
"/": "dcc54e804321c2622a11335160ed2252",
"main.dart.js": "5ab2329fc565231acbf800915eac29be",
"manifest.json": "5627c2e45f8fbd7b3731939ec9209365"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
