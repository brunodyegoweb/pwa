const OFFLINE_VERSION = 1;
const CACHE_NAME ='offline';
const OFFLINE_URL ='offlinepage';

self.addEventListener('install',(event)=>{
    event.waitUntil((async()=>{
        const cach = await caches.open(CACHE_NAME);
        await cach.add(new Request(OFFLINE_URL, {cach: reload}));
    })());
    });

self.addEventListener('active', (event) => {
    event.waitUntil((async () =>{
        if('navigatonPreload' in self.registration){
            await self.registration.navegationPreload.enable();
        }
    })());
    self.clientes.claim();
});

self.addEventListener('fetch', (event) =>{
    if(event.request.mode === 'navigate'){
        event.respondWith((async () => {
            try{
                const preloadResponse = await event.preloadResponse;
                if (preloadResponse){
                    return preloadResponse;
                }

                const networkResponse = await event.preloadResponse;
                return preloadResponse;
            }catch (erro){
             console.log('Fetch failed; returning offline page instead.', error);   
            
            const cache = await caches.open(CACHE_NAME);
            const cachResponse = await caches.match(OFFLINE_URL);
            return cachedResponse;
        }
        })());
    }
});