//install service worker

self.addEventListener('install', e => {
    console.log('service worker has been installed')
});

//activate service worker

self.addEventListener('activate', e => {
    console.log('service worker has been activated')
})

//before install prompt

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});