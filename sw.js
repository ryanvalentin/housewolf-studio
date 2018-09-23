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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7ddc8a678ead5d11668d.js"
  },
  {
    "url": "app-c331c05260c9c1fd0767.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-77c3d5ab203f9616b16d.js"
  },
  {
    "url": "index.html",
    "revision": "b50898188e47b6142c0aed431772dfa7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5c5f031adbdce05ad0e0eb9edf6a3b01"
  },
  {
    "url": "0.3cc061b25f5344a69f2e.css"
  },
  {
    "url": "component---src-pages-index-js.536d26f60428e97d89f9.css"
  },
  {
    "url": "component---src-pages-index-js-5fa149d765297eb44fa8.js"
  },
  {
    "url": "8-b5f34ee27306f57c7cf5.js"
  },
  {
    "url": "0-b18b1476c17b1601267d.js"
  },
  {
    "url": "static/d/29/path---index-6a9-1objiGGpQa3dVzUWYNIJCb7050.json",
    "revision": "28afb3ab3180113563db711aa4db5f99"
  },
  {
    "url": "component---src-pages-404-js.536d26f60428e97d89f9.css"
  },
  {
    "url": "component---src-pages-404-js-4def88deb3518d83ecf0.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});