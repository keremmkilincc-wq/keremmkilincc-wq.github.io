const CACHE='kerem-v6';
const ASSETS=['/','/index.html','/manifest.json'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const req=e.request;
  const isNav = req.mode==='navigate' || (req.headers.get('accept')||'').includes('text/html');
  if(isNav){
    e.respondWith(fetch(req).then(res=>{
      const clone=res.clone();
      caches.open(CACHE).then(c=>c.put(req, clone));
      return res;
    }).catch(()=> caches.match(req).then(r=> r || caches.match('/index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(r=> r || fetch(req).then(res=>{
    if(res.ok && req.url.startsWith(location.origin)) caches.open(CACHE).then(c=>c.put(req,res.clone()));
    return res;
  }).catch(()=>caches.match(req))));
});
