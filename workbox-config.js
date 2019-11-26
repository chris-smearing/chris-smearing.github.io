module.exports = {
    "globDirectory": ".",
    "globPatterns": [
        "index.html",
        "js/bundle.min.js",
        "images/*",
        "img/laptop-javascript.jpg",
        "img/*.svg",
        "img/manifest*.png",
        "style.min.css",
        "manifest.json",
        "particles.json"
    ],
    "swDest": "sw.js",
    "globIgnores": [
        "../workbox-config.js"
    ],
    "runtimeCaching": [{
            urlPattern: new RegExp('^https://polyfill.io'),
            handler: 'CacheFirst',
            options: {
                cacheName: 'polyfill-cache',
                cacheableResponse: {
                    statuses: [0, 200]
                }
            },
        },
        {
            urlPattern: new RegExp('^https://use.fontawesome.com'),
            handler: 'CacheFirst',
            options: {
                cacheName: 'fontawesome-cache',
                cacheableResponse: {
                    statuses: [0, 200]
                }
            },
        },
        {
            urlPattern: new RegExp('(https://www.googletagmanager.com|https://google.com)'),
            handler: 'CacheFirst',
            options: {
                cacheName: 'google-cache',
                cacheableResponse: {
                    statuses: [0, 200]
                }
            },
        },
        {
            urlPattern: new RegExp('^https://fonts.googleapis.com'),
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'google-fonts-stylesheets',
                cacheableResponse: {
                    statuses: [0, 200]
                }
            },
        },
        {
            urlPattern: new RegExp('^https://fonts.gstatic.com'),
            handler: 'CacheFirst',
            options: {
                cacheName: 'google-fonts-webfonts',
                cacheableResponse: {
                    statuses: [0, 200]
                }
            },
        },
    ],
};