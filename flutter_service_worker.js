'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {
    "style.css": "2721b4b37d80996d66c2d03d8620bd3f",
    "canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
    "canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
    "canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
    "canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
    "canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
    "canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
    "canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
    "version.json": "528590cfb00fc1ca502120db4808bb64",
    "assets/apple.png": "d10c7a7b68bd94d09e8baab976b20123",
    "assets/android.png": "d53911236aac63ac2b4fcf5be31ba8c7",
    "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f1fe8534278939ab8bcc9bf4307e88db",
    "assets/AssetManifest.json": "74422e6fc119709caadf073c5f2ac899",
    "assets/assets/images/app-store.svg": "86acbaefbfe00e94d3ad6370d01eb6d7",
    "assets/assets/images/iPhone-14.jpg": "98dbd4c4ea32e03ea38400259be62344",
    "assets/assets/images/android_wallpaper.jpg": "e7463766d37cb4cf33aff037ba114941",
    "assets/assets/images/macos_dark_wallpaper.jpg": "bbfd9bff43faf99d143f4749a11932b0",
    "assets/assets/images/w11_blue_wallpaper.jpg": "7ed10f67e4c9994e31b83c7e8bee1142",
    "assets/assets/images/my_memoji.png": "63317205da02ef430a258c1afb02273b",
    "assets/assets/images/projects/enviofacil.jpg": "b29290ff57afdd6a86dd847681d3e238",
    "assets/assets/images/projects/proanimals.jpg": "a037401478aeb7cc1fc90387572c6390",
    "assets/assets/images/projects/pedidofacil-logo.png": "ed947ba08d7fb6dcabc7bf9ccaef40a0",
    "assets/assets/images/projects/citroen.png": "15c4bec82068a6e7976e071bb809b64d",
    "assets/assets/images/projects/proanimals-logo.png": "08e189df302f5c2cc018e0406670a71e",
    "assets/assets/images/projects/sushiboo-logo.png": "54d3d7850ba74bccd483f5d5849efb98",
    "assets/assets/images/projects/pedidofacil.png": "1769ed62f11ac61705176fb01912f6c2",
    "assets/assets/images/projects/cashews.png": "380eab3a47d3550ef7472b74d726975c",
    "assets/assets/images/projects/cashews-logo.png": "e8f9d6cee585cadc55087a830ea87588",
    "assets/assets/images/projects/sushiboo.jpg": "16811094228463b80effdd52c902e5c6",
    "assets/assets/images/projects/enviofacil-logo.jpg": "c0dad4260cce078490a8ed1698e686ef",
    "assets/assets/images/projects/citroen-logo.png": "2bc835db65b50f07d65bcfc68ddfbb2f",
    "assets/assets/fonts/segoe_ui_variable/Segoe-UI-Variable-Static-Display-Bold.ttf": "d68089a3544bcfc2ee160948adfbfdc6",
    "assets/assets/fonts/segoe_ui_variable/Segoe-UI-Variable-Static-Display.ttf": "ffba890a1b873f1a9734c169e4478828",
    "assets/assets/fonts/segoe_ui_variable/Segoe-UI-Variable-Static-Display-Semilight.ttf": "bc4575dc557a32ee635c367970cc6afe",
    "assets/assets/fonts/segoe_ui_variable/Segoe-UI-Variable-Static-Display-Semibold.ttf": "624a34eb4051daa73f9011dcaa420c93",
    "assets/assets/fonts/san_francisco/SFUIDisplay-Black.otf": "0239f1f4ae3f75176608051a28b76643",
    "assets/assets/fonts/san_francisco/SFUIDisplay-Semibold.otf": "10a14e64c8f94a4270c05aa42114e0f2",
    "assets/assets/fonts/san_francisco/SFUIDisplay-Bold.ttf": "00004807645e595b176434f1c0438591",
    "assets/assets/fonts/san_francisco/SFUIDisplay-Medium.otf": "73ab62f0506129eb3638d4be0b695479",
    "assets/assets/fonts/san_francisco/SFUIDisplay-Regular.otf": "d4550c5e326a628ac8ef82e9f2703484",
    "assets/assets/icons/android/contact.png": "291cbf61d8176eed09f67145543c6516",
    "assets/assets/icons/android/phone.png": "d3d739b5b256409cab0b81675189e2b5",
    "assets/assets/icons/android/calendar.png": "63b51c1f87d687bfba1a939ed805a8a8",
    "assets/assets/icons/android/gmail.png": "984c127b2a900a71830a0e97b77aa34f",
    "assets/assets/icons/android/google-play.png": "fabf60b4eb38f0da3dc32bb207b817e8",
    "assets/assets/icons/android/chrome.png": "62fc2b0300e75d39e767bb4ce2a95bc0",
    "assets/assets/icons/android/pdf.png": "1a31f77114888e3367c36fbf78c4bf74",
    "assets/assets/icons/macos/user_folder.png": "19dad2d94c41852dd6bd2bb905882808",
    "assets/assets/icons/macos/contacts.png": "700c182fab96911311b102ac0b9ef72d",
    "assets/assets/icons/macos/safari.png": "a65030be39c7b3407509453eafa56cb1",
    "assets/assets/icons/macos/contacts-ios.png": "08e8c1d5b801d81b8ad51f5e5ff5f4b7",
    "assets/assets/icons/macos/alias_arrow.png": "253af3102807d52583e1d4259990fad2",
    "assets/assets/icons/macos/phone.png": "fd4705a097c996a1a35b73dab07ba20d",
    "assets/assets/icons/macos/linkedin.png": "1767993bd5d0c5c6d33623772521c7d7",
    "assets/assets/icons/macos/mail.png": "ebfa6982cea7c1e4848f050aac47933d",
    "assets/assets/icons/macos/github.png": "6cf4828a0a4fb11e470705f01c038b9b",
    "assets/assets/icons/macos/app_store.png": "6874b391b879c2dde56fef9b700357a2",
    "assets/assets/icons/macos/pdf.png": "c34f1cb48cbf5be719cc4bb1314be53f",
    "assets/assets/icons/facefolio.png": "d4918a331412736b7bdfeb81bdd78fdb",
    "assets/assets/icons/buy-me-a-coffee-logo.png": "fcd622b1fb0b6a0cfaff9ae16d32edcb",
    "assets/assets/icons/windows/win11_logo.png": "c3bd1b2170969a79d9aae73a2dc7419b",
    "assets/assets/icons/windows/address_book.png": "43384b352064a6849698bfedfb495083",
    "assets/assets/icons/windows/shortcut_arrow.png": "926f71b3bc13c7689a3a1a3e52c14f94",
    "assets/assets/icons/windows/linkedin.png": "c2a12e1690e3a42f2b9d816c923880aa",
    "assets/assets/icons/windows/github.png": "eee342625fdbba45f5232fa82551d4b4",
    "assets/assets/icons/windows/calendar.png": "c61ca7bfc7198b8bdd70509acda2fdcf",
    "assets/assets/icons/windows/edge.png": "4999a092c56093ce21ee113ac6294f43",
    "assets/assets/icons/windows/microsoft-store.png": "2320cf15813ca5f477f708122e58ecfa",
    "assets/assets/icons/windows/pdf.png": "b42db736c478fa96890d7196e4d7bc09",
    "assets/assets/icons/windows/email.png": "717db3f66fcd80c8af10528a060e4460",
    "assets/AssetManifest.bin": "1b8bb29c69608f277c7418a528594b40",
    "assets/fonts/MaterialIcons-Regular.otf": "ae53da9cba1df995dc7571a0aabbb1e9",
    "assets/NOTICES": "70809e5754f1c28831157b332f7d86ab",
    "assets/windows.png": "7da6b631956025101622a74a3cf40241",
    "assets/FontManifest.json": "2afa590363ae15fc1f3e5194cf81ce9d",
    "assets/my_memoji.png": "63317205da02ef430a258c1afb02273b",
    "assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
    "icons/Icon-512.png": "4f41a7e6b7cce64b99e1a04c23a805fe",
    "icons/Icon-192.png": "438f1fb099a57ff9b7e450d1edffb17a",
    "index.html": "3293eba48fc9f968521c2ea76fd08064",
    "/": "3293eba48fc9f968521c2ea76fd08064",
    "main.dart.js": "5901213e69d4a3c32aee5151eb6c57eb",
    "flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
    "favicon.png": "6d7bab1b1cf37598051e9e5725f2d617",
    "manifest.json": "59e4fd3923b31c4c763e718b8a6d0761"
};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
    "index.html",
    "assets/AssetManifest.json",
    "assets/FontManifest.json"
];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
    self.skipWaiting();
    return event.waitUntil(
        caches.open(TEMP).then((cache) => {
            return cache.addAll(
                CORE.map((value) => new Request(value, {
                    'cache': 'reload'
                })));
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
                // Claim client to enable caching on first launch
                self.clients.claim();
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
            // Claim client to enable caching on first launch
            self.clients.claim();
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
    if (event.request.method !== 'GET') {
        return;
    }
    var origin = self.location.origin;
    var key = event.request.url.substring(origin.length + 1);
    // Redirect URLs to the index.html
    if (key.indexOf('?v=') != -1) {
        key = key.split('?v=')[0];
    }
    if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
        key = '/';
    }
    // If the URL is not the RESOURCE list then return to signal that the
    // browser should take over.
    if (!RESOURCES[key]) {
        return;
    }
    // If the URL is the index.html, perform an online-first request.
    if (key == '/') {
        return onlineFirst(event);
    }
    event.respondWith(caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.match(event.request).then((response) => {
                // Either respond with the cached resource, or perform a fetch and
                // lazily populate the cache only if the resource was successfully fetched.
                return response || fetch(event.request).then((response) => {
                    if (response && Boolean(response.ok)) {
                        cache.put(event.request, response.clone());
                    }
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
        self.skipWaiting();
        return;
    }
    if (event.data === 'downloadOffline') {
        downloadOffline();
        return;
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
    for (var resourceKey of Object.keys(RESOURCES)) {
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