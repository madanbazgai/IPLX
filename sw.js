importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

const { StaleWhileRevalidate } = workbox.strategies;

workbox.routing.registerRoute(
    ({ request }) => true,
    new StaleWhileRevalidate()
);
