const CACHE='kerem-v8';
const ASSETS=['/','/index.html','/manifest.json'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const req=e.request;
  const isNav = req.mode==='navigate' || (req.headers.get('accept')||'').includes('text/html');
  if(isNav){
    e.respondWith(fetch(req, {cache:'no-store'}).catch(()=> caches.match(req).then(r=> r || caches.match('/index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(cached=>{
    if(cached) return cached;
    return fetch(req, {cache:'no-store'}).then(res=>{
      try{
        if(res && res.ok && !res.bodyUsed && req.url.startsWith(location.origin)){
          const clone=res.clone();
          caches.open(CACHE).then(c=>c.put(req, clone)).catch(()=>{});
        }
      }catch(err){}
      return res;
    }).catch(()=>caches.match(req));
  }));
});
