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
    "url": "index.html",
    "revision": "be34ebbee70372a9cae9cbcfad2e5f2f"
  },
  {
    "url": "js/bundle.min.js",
    "revision": "887fd172c49a3456a77ea4c557f04744"
  },
  {
    "url": "images/brave_women_travel_screenshot-lqip.jpg",
    "revision": "44cdc40c04b69a19d288148d1ccdc831"
  },
  {
    "url": "images/brave_women_travel_screenshot.jpg",
    "revision": "e9e6cb4b5ebf3fc536e08117c6e662f2"
  },
  {
    "url": "images/brave_women_travel_screenshot.webp",
    "revision": "41b9a48382fa3e52621a8f4cd0dcc67d"
  },
  {
    "url": "images/chaos-club-lqip.jpg",
    "revision": "6b1000d7ff81dfa077eb9423e4a37c0f"
  },
  {
    "url": "images/chaos-club.jpg",
    "revision": "88696a8889175bab04605ec7ea2f994d"
  },
  {
    "url": "images/chaos-club.webp",
    "revision": "0f17bb1a080fdfa27b5d820a9fe392f3"
  },
  {
    "url": "images/cidregistry_screenshot-lqip.jpg",
    "revision": "515ab21fa8f159fe1bd45e2825e359ed"
  },
  {
    "url": "images/cidregistry_screenshot.jpg",
    "revision": "e3c3a549c270df82fb08eb7a635edf4b"
  },
  {
    "url": "images/cidregistry_screenshot.webp",
    "revision": "9a936dfad005ced422429d1db7924c49"
  },
  {
    "url": "images/drvims_screenshot-lqip.jpg",
    "revision": "581f8ae7e9bbd5bf676d5059fa5da041"
  },
  {
    "url": "images/drvims_screenshot.jpg",
    "revision": "9d85d7a4e63af83e1896b1ab7c65e66e"
  },
  {
    "url": "images/drvims_screenshot.webp",
    "revision": "41b271b2d3c64107517579a82e1ac21f"
  },
  {
    "url": "images/gravatar-lqip.jpg",
    "revision": "62dd8d7f175b83d1411fed07057dd477"
  },
  {
    "url": "images/gravatar.jpg",
    "revision": "d4a8b1de3b98dd0a9c7b807835249e72"
  },
  {
    "url": "images/gravatar.webp",
    "revision": "bb6b8c09cd316681cd54d1399c9c6217"
  },
  {
    "url": "images/hungry-huy-lqip.jpg",
    "revision": "58bcf492ab482968e80db5bca7ef1b73"
  },
  {
    "url": "images/hungry-huy.jpg",
    "revision": "bb61a9e891eee0b770b7885955ef4034"
  },
  {
    "url": "images/hungry-huy.webp",
    "revision": "7569f5e4cca7c54281d108dc7be5a409"
  },
  {
    "url": "images/laptop-javascript-lqip.jpg",
    "revision": "30b00f24ab61c6407565dc7c854ae35d"
  },
  {
    "url": "images/laptop-javascript.jpg",
    "revision": "7ea02434b3d12d330796b2d80fbc9857"
  },
  {
    "url": "images/laptop-javascript.webp",
    "revision": "5ec70a9c574126c1b9ff9756e5834a61"
  },
  {
    "url": "images/penzance_map-lqip.jpg",
    "revision": "6bb610ee1ae2d4b59cfbc454c25f1183"
  },
  {
    "url": "images/penzance_map.jpg",
    "revision": "2a427bd792de5a27ce50f2ffdd0966bc"
  },
  {
    "url": "images/penzance_map.webp",
    "revision": "aa6a0d7ace1dcdbd6dc4ef54a5a8fba2"
  },
  {
    "url": "images/service_city_screenshot-lqip.jpg",
    "revision": "2948cf7befd85c2c9857c932c84a7755"
  },
  {
    "url": "images/service_city_screenshot.jpg",
    "revision": "963d222284aeb6610aad7c20cd92f877"
  },
  {
    "url": "images/service_city_screenshot.webp",
    "revision": "fb508e277d9113b4aa2737aff102a586"
  },
  {
    "url": "images/tyra_screenshot-lqip.jpg",
    "revision": "a3f553226ddda6bc2f708fc942dda4f9"
  },
  {
    "url": "images/tyra_screenshot.jpg",
    "revision": "3a05dca92de78ab693976229329b242c"
  },
  {
    "url": "images/tyra_screenshot.webp",
    "revision": "dcb281130dd854e2da036395998874c1"
  },
  {
    "url": "images/westmore_screenshot-lqip.jpg",
    "revision": "b9b8643c4f8dabf815ec81124c6f4b26"
  },
  {
    "url": "images/westmore_screenshot.jpg",
    "revision": "93b433e6e2e613ad46a2306361c699fc"
  },
  {
    "url": "images/westmore_screenshot.webp",
    "revision": "0a542f33f96a6fd4470770e6b62542ea"
  },
  {
    "url": "img/laptop-javascript.jpg",
    "revision": "ac6e9f2da76f5ddb966313372defcb4d"
  },
  {
    "url": "img/favicon.svg",
    "revision": "47078676c694de61b8120db8090f258d"
  },
  {
    "url": "img/shopify-logo.svg",
    "revision": "adaf2acf3b44be8b0c60f2e0e2ef6539"
  },
  {
    "url": "img/ti-logo.svg",
    "revision": "a1b28b7164f505e3debad8a8f931bea9"
  },
  {
    "url": "img/upwork-logo.svg",
    "revision": "59fc7464c85a4dd03161c0bab31b5e30"
  },
  {
    "url": "img/manifest-icon-192.png",
    "revision": "f4df22e0a04cf7fd61ed68070ed7f1be"
  },
  {
    "url": "img/manifest-icon-512.png",
    "revision": "8336feee7f1e515c5cefda76787deca5"
  },
  {
    "url": "style.min.css",
    "revision": "5013da0be232b1c093137b6f0fa6df18"
  },
  {
    "url": "manifest.json",
    "revision": "9d28627cb716ee13f469b033ef9a080f"
  },
  {
    "url": "particles.json",
    "revision": "a06ff3c332a0afd09ea56ba207a781c0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/polyfill.io/, new workbox.strategies.CacheFirst({ "cacheName":"polyfill-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/use.fontawesome.com/, new workbox.strategies.CacheFirst({ "cacheName":"fontawesome-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/(https:\/\/www.googletagmanager.com|https:\/\/google.com)/, new workbox.strategies.CacheFirst({ "cacheName":"google-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.googleapis.com/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.gstatic.com/, new workbox.strategies.CacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
