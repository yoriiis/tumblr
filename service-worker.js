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
    "revision": "bd083fc832dab32d9b608d131f5b21f2"
  },
  {
    "url": "assets/css/0.styles.d8d6f3e2.css",
    "revision": "1a521617629a74794c4ea521ce9d68b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1aa4c97c.js",
    "revision": "4a357f608cf5c5a8b5b61623ed9d1a0e"
  },
  {
    "url": "assets/js/11.ffabb050.js",
    "revision": "1eb40778ec4f61ae0837b1873b036c7c"
  },
  {
    "url": "assets/js/12.ef799392.js",
    "revision": "f4323c2b77ceb2b1acadf200435f7222"
  },
  {
    "url": "assets/js/13.84a004a3.js",
    "revision": "dc6140fa4c832648c57ff3b959095ef5"
  },
  {
    "url": "assets/js/14.bca8ce1d.js",
    "revision": "5a2bad710eb5ced3836e79df64af69e4"
  },
  {
    "url": "assets/js/15.851405a0.js",
    "revision": "1954f8b1563b737a1efacfff7d771e7e"
  },
  {
    "url": "assets/js/16.b8255c31.js",
    "revision": "b9f1afb224dee6a47205bafe38462b3f"
  },
  {
    "url": "assets/js/3.8c91f459.js",
    "revision": "4c2af75c084ab494a756d4947e8e00c4"
  },
  {
    "url": "assets/js/4.74d20110.js",
    "revision": "e86fdfd923813c60deecda2cdf44457e"
  },
  {
    "url": "assets/js/5.78102a98.js",
    "revision": "26d828b11ec02c643fee93e8a77bfe64"
  },
  {
    "url": "assets/js/6.225880d2.js",
    "revision": "4dfd20dbee60c13bec3bd1c8497b399d"
  },
  {
    "url": "assets/js/7.d231f8b0.js",
    "revision": "70b64840a604f5fff18af4626b9b909b"
  },
  {
    "url": "assets/js/8.ce58fa61.js",
    "revision": "ca098a7625ca9c278b7a0e13650c8c66"
  },
  {
    "url": "assets/js/9.569d9c89.js",
    "revision": "6a729f14aa708d703ae5a1748aebda0f"
  },
  {
    "url": "assets/js/app.921e2d93.js",
    "revision": "6d770a8c42211c9d85078c494dbfe98b"
  },
  {
    "url": "assets/js/vendors~docsearch.7e9ae195.js",
    "revision": "5701edfa0ac40adbf6b1a48a30ef6473"
  },
  {
    "url": "guide/available-methods.html",
    "revision": "eb85bd6421a4bd220203c0c52336c8cd"
  },
  {
    "url": "guide/custom-pages.html",
    "revision": "7b138ce7d902ee823407c5493eab0773"
  },
  {
    "url": "guide/custom-posts.html",
    "revision": "f9c5e47fc23515b7f171301214025191"
  },
  {
    "url": "guide/deploying.html",
    "revision": "888274f51e957d4f5a09172fdd8a3f5f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "62e9edfae854e9d7254a3e1b51ad2eac"
  },
  {
    "url": "guide/how-it-works.html",
    "revision": "2a19d5dd5618abee4323738face0e774"
  },
  {
    "url": "guide/index.html",
    "revision": "ec81971a361615f176b07ac5d3a8d7c5"
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
    "revision": "4cdf53150a42bf42817352899efc0270"
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
