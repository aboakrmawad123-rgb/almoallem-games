// عند الضغط على الإشعار افتح التطبيق
// مهم: يجب أن يكون notificationclick قبل استيراد Firebase
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetUrl =
    event.notification?.data?.url || '/';

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          if ('navigate' in client) {
            client.navigate(targetUrl);
          }
          return client.focus();
        }
      }

      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});


// Firebase Cloud Messaging
importScripts(
  'https://www.gstatic.com/firebasejs/12.16.0/firebase-app-compat.js'
);

importScripts(
  'https://www.gstatic.com/firebasejs/12.16.0/firebase-messaging-compat.js'
);


// إعداد Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBr3gk_UiPy_qLBaV-o8GRj5N4yMMjtFQM",
  authDomain: "almoallem-al-saghir.firebaseapp.com",
  projectId: "almoallem-al-saghir",
  storageBucket: "almoallem-al-saghir.firebasestorage.app",
  messagingSenderId: "791016900005",
  appId: "1:791016900005:web:56448a3cdb85bcb736944c"
});

const messaging = firebase.messaging();


// استقبال الإشعارات عندما يكون التطبيق بالخلفية
messaging.onBackgroundMessage((payload) => {
  console.log(
    '[Firebase] Background message:',
    payload
  );

  const notificationTitle =
    payload.notification?.title ||
    'المعلّم الصغير';

  const notificationOptions = {
    body:
      payload.notification?.body ||
      'لديك محتوى جديد',

    icon: '/icon-192.png',

    badge: '/icon-192.png',

    data: {
      url:
        payload.data?.url ||
        payload.fcmOptions?.link ||
        '/'
    }
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});


// اسم الكاش الجديد حتى تتحدث الأجهزة
const CACHE_NAME =
  'almoallem-v45-recovery';


// ملفات التطبيق التي يتم حفظها للعمل دون اتصال
const APP_SHELL = [
  './',
  './index.html',
  './privacy.html',
  './style.css?v=20',
  './script.js?v=45',
  './manifest.webmanifest',
  './favicon.ico',

  './card-back.webp',
  './letter-hunt-basket.webp',

  './apple.webp',
  './banana.webp',
  './orange.webp',
  './strawberry.webp',
  './grapes.webp',
  './watermelon.webp',

  './lion.webp',
  './duck.webp',
  './crocodile.webp',
  './monkey.webp',
  './chicken.webp',
  './turtle.webp',
  './giraffe.webp',
  './rabbit.webp',
  './camel.webp',
  './bear.webp',
  './cow.webp',
  './elephant.webp',
  './sheep.webp',

  './puzzle-cat.webp',
  './puzzle-plant.webp',
  './puzzle-toys.webp',
  './puzzle-trash.webp',
  './puzzle-elder.webp',
  './puzzle-books.webp',

  './word-treasure-l1-kitchen.webp',
  './word-treasure-l1-room.webp',
  './word-treasure-l2-school.webp',
  './word-treasure-l2-garden-azzam.webp',
  './word-treasure-l2-garden.webp',

  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './icon-maskable-512.png',

  './audio/ahsant.wav',
  './audio/raaie.wav',
  './audio/mumtaz.wav',
  './audio/hawel.wav',
  './audio/win.wav',
  './audio/mashallah.wav',
  './audio/quran-level-complete.wav',
  './audio/letter-hunt-lose.wav'
];


// تثبيت Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
  );

  self.skipWaiting();
});


// حذف الكاش القديم وتفعيل الجديد
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});


// التعامل مع طلبات الموقع
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl =
    new URL(event.request.url);

  // تجاهل الملفات الخارجية
  if (
    requestUrl.origin !==
    self.location.origin
  ) {
    return;
  }


  // لا نخزن API
  // حتى تبقى البيانات محدثة دائمًا
  if (
    requestUrl.pathname.startsWith('/api/')
  ) {
    event.respondWith(
      fetch(event.request)
    );

    return;
  }


  // صفحات التطبيق
  if (
    event.request.mode === 'navigate'
  ) {
    const isPrivacyPage =
      requestUrl.pathname.endsWith(
        '/privacy.html'
      );

    const cacheKey =
      isPrivacyPage
        ? './privacy.html'
        : './index.html';

    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy =
            response.clone();

          caches
            .open(CACHE_NAME)
            .then((cache) => {
              cache.put(
                cacheKey,
                copy
              );
            });

          return response;
        })
        .catch(() =>
          caches.match(cacheKey)
        )
    );

    return;
  }


  // باقي ملفات التطبيق
  event.respondWith(
    caches
      .match(event.request)
      .then((cached) => {
        if (cached) {
          return cached;
        }

        return fetch(event.request)
          .then((response) => {
            if (
              !response ||
              response.status !== 200 ||
              response.type !== 'basic'
            ) {
              return response;
            }

            const copy =
              response.clone();

            caches
              .open(CACHE_NAME)
              .then((cache) => {
                cache.put(
                  event.request,
                  copy
                );
              });

            return response;
          });
      })
  );
});
