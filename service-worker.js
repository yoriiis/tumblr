/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a4b94a21ea5bccecdbfa1c1098f9b517"
  },
  {
    "url": "assets/css/0.styles.3beb4edd.css",
    "revision": "b855c963a702255d07594c78618fd8c2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.75395e2a.js",
    "revision": "b8764c0ff2fa2bfc499aa5dd2a11c6d0"
  },
  {
    "url": "assets/js/11.ad141203.js",
    "revision": "9413fe1442488ea6672fb9347711c9a8"
  },
  {
    "url": "assets/js/12.ce9011f6.js",
    "revision": "d4f2902d341c047a1d9ab9dd498297dc"
  },
  {
    "url": "assets/js/13.9036aab9.js",
    "revision": "1859923e77b5c7d956db350bf6ffe0ad"
  },
  {
    "url": "assets/js/14.abc82924.js",
    "revision": "23db9863752e4404119c5b4ecf24402e"
  },
  {
    "url": "assets/js/15.ca934ab9.js",
    "revision": "081045f48611b91434849e5364b4cb20"
  },
  {
    "url": "assets/js/2.1f2f8a53.js",
    "revision": "e5ff3e002c7cedfedee91c3e76c4dff3"
  },
  {
    "url": "assets/js/3.5c2027bb.js",
    "revision": "659cd44601488257e9fc82b9a6977e78"
  },
  {
    "url": "assets/js/4.1acad89d.js",
    "revision": "f68e42992ad3cce124cc824bdfd73f4d"
  },
  {
    "url": "assets/js/5.d46b1a1b.js",
    "revision": "003503ac30b6bfc130ff6ca7da6e5898"
  },
  {
    "url": "assets/js/6.96989ac4.js",
    "revision": "301a564c0fce9f79477e48755d87daf3"
  },
  {
    "url": "assets/js/7.d46041d3.js",
    "revision": "398b42e8287ef615bf085f4c3a4d7aac"
  },
  {
    "url": "assets/js/8.78016ff0.js",
    "revision": "a563c9d61da9c6af58f44e4c3b8cd994"
  },
  {
    "url": "assets/js/9.99673ace.js",
    "revision": "052dbde785a6cc859ed5cdd007e3da82"
  },
  {
    "url": "assets/js/app.82cacb20.js",
    "revision": "9ab1876acfeabe1c29e844c0f5e23bce"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "7c5d4a2862773d168ee01aac99f2ad3f"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "b0015cacb1418b445d313d6c0b1c3742"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "1652063168d24e649418618566d41c53"
  },
  {
    "url": "guide/deploying.html",
    "revision": "4e49702a8a14c1b001d70feaf876a7ce"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1c6b33f1e59ae6034bd812971adde0da"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "c02f9ffdbed3106b95de5ae58ca5357b"
  },
  {
    "url": "guide/index.html",
    "revision": "0cf3d908e6f44448998ca31db6898d89"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "ed5ebd2a7fc7b231569a1942f9bb257f"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "5b4585243011d6045f7bf4087655d7c3"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "f15c8fd25961995fa1bc1fdb8bcdef83"
  },
  {
    "url": "index.html",
    "revision": "099b6e57105b1c4ddd455ff23b1e8cbc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})