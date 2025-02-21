self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","scriptCalc.js","scriptEncode.js","styleCalc.css","styleEncode.css","joe-160.png","joe-512.png"]);
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})
