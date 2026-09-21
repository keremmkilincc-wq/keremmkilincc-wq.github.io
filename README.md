# Kerem KILINÇ — Dijital Portfolyo & Arcade ✨ müq müq müq müq müq

> **Oyun dünyaları tasarlıyorum — harita & karakter, kod kalabalığı değil görsel ve oynanabilir sonuç.**

<p align="center">
  <a href="https://keremmkilincc-wq.github.io/"><img src="https://img.shields.io/badge/Live-keremmkilincc--wq.github.io-8b5cf6?style=for-the-badge&logo=vercel" alt="Live"></a>
  <a href="https://github.com/keremmkilincc-wq"><img src="https://img.shields.io/badge/GitHub-keremmkilincc--wq-181717?style=for-the-badge&logo=github" alt="GitHub"></a>
  <img src="https://img.shields.io/badge/PWA-ready-06b6d4?style=for-the-badge&logo=pwa" alt="PWA">
  <img src="https://img.shields.io/badge/Arcade-10_Oyun-ec4899?style=for-the-badge" alt="Arcade">
  <img src="https://img.shields.io/badge/Muse_Spark-AI-8b5cf6?style=for-the-badge" alt="AI">
  <img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge" alt="MIT">
</p>

<p align="center">
  <b>TR</b> | <a href="README_EN.md">EN</a> | <a href="README_DE.md">DE</a> — <b>20 dil</b> • <b>10 tema</b> • <b>tek dosya</b> <code>index.html</code> + <code>manifest.json</code> + <code>sw.js</code>
</p>

<p align="center">
  <img src="https://github.com/keremmkilincc-wq.png" width="88" style="border-radius:50%; border:3px solid #8b5cf6">
  <br>
  <sub>Kerem KILINÇ — Oyun Geliştirici & Dijital Tasarımcı — 2026</sub>
</p>

---

## 📑 İçindekiler

- [🎯 Öne Çıkanlar](#-öne-çıkanlar--müq)
- [🎬 Hero — Video + Micro](#-hero--video--micro-animasyonlar)
- [🎮 Arcade 10 Oyun](#-arcade--10-oyun)
- [📝 Blog — Beğeni/Yorum/Paylaş + AI Özet](#-blog--beğeniyorum--ai-özet)
- [🧪 Playground — HTML Canlı](#-playground--html-canlı)
- [🌌 Evren Wiki + 🧱 Duvar](#-evren-wiki----duvar)
- [💬 Sohbet + ☕ Destek](#-sohbet----destek)
- [⚡ Admin Panel — Ayrı Arayüz](#-admin-panel--ayrı-arayüz)
- [🤖 Kerem AI — Muse Spark](#-kerem-ai--muse-spark)
- [🎵 Müzik + 🎨 3D Viewer](#-müzik----3d-viewer)
- [🧠 Yetenekler + 💻 Terminal](#-yetenekler----terminal)
- [🛠️ Teknoloji](#️-teknoloji)
- [🚀 Kurulum](#-kurulum)
- [⚙️ Ayarlar — 20 Dil / 10 Tema](#️-ayarlar--20-dil--10-tema)
- [🔍 SEO & PWA](#-seo--pwa--lighthouse)
- [📬 İletişim](#-iletişim)
- [📄 Lisans](#-lisans)

---

## 🎯 Öne Çıkanlar — müq

| Özellik | Detay |
|---|---|
| **Aşırı Modern UI** | Aurora + `bg-grid`, glassmorphism, bento grid, `reveal` scroll, `float`, `btn-micro`, 10 tema (CSS variables), hamburger `≡` (sağ üst) + sağ dikey dock |
| **Hero Video** | `pixabay 32179` loop, `0.18` opacity, gradient fade, tech tags `#JS #Python #React #FullStack #GameDev`, `<K/>` logo |
| **Canlı GitHub** | `api.github.com/users/keremmkilincc-wq/repos` anlık, filtre chips `Hepsi/JS/Python/HTML/Diğer` + arama, stats `repo/star` |
| **Arcade 10 Oyun** | Canvas 2D, `localStorage` skor, `Lv 50` seviye, `🥇🥈🥉` rozet, `R` restart, `KAYBETTİN!` overlay |
| **Blog** | Herkes okur, sadece admin yazar — `♥` beğeni, `💬` yorum, `🔗` paylaş, `AI ile Özetle` (`pollinations`) |
| **Playground** | HTML/CSS/JS yaz → `Çalıştır` → `iframe srcdoc` önizleme, örnek `neon/card/game`, `localStorage` |
| **Evren Wiki** | `TRUST NO ONE` lore 6 kart, aranabilir — `Evren` sekmesi |
| **Duvar** | `640×360` piksel tuval, renk seç, sürükle çiz, `kerem_wall` 2000 piksel |
| **Admin** | Tam ayrı overlay `z-90`, `keremmkilincc@gmail.com` + 6 haneli kod (`FormSubmit`), diğer mailler `Misafir` |
| **AI** | Muse Spark `pollinations` free, model indirmeden, systemPrompt müq, fallback rule-based |
| **PWA & SEO** | `manifest.json` + `sw.js` (`kerem-v5`), `preconnect`, `OG/twitter`, `JSON-LD Person`, `sitemap.xml`/`robots.txt`, `loading=lazy` |

---

## 🎬 Hero — Video + Micro Animasyonlar

```html
<video autoplay muted loop playsinline preload="metadata" poster="..."> → opacity 0.18
.glow-text, .float (6s), .btn-micro (hover 1.015), .reveal (IntersectionObserver 0.12)
```

- Tech tags: `#JavaScript` `#Python` `#React` `#FullStack` `#GameDev` (FA ikonlu)
- Sağ bento: `TRUST NO ONE` + `Harita`/`Karakter` `glass-panel-hover`
- Nav: `KEREM KILINÇ.` + `<K/>` + `SOFTWARE DEVELOPER`, hamburger `≡` sağ üstte tüm sekmeler dikey

---

## 🎮 Arcade — 10 Oyun

| # | Oyun | Kontrol | Müq Özellik |
|---|---|---|---|
| 1 | **3D Tetris** | ←→↓↑ Space | Ghost, Next, Level `1→1.45` hız |
| 2 | **3D Flappy** | Space / Tıkla | Parallax, `p.x+w<210` skor fix |
| 3 | **Snake Neon** | Yön | Neon grid, pulse food |
| 4 | **Breakout** | ←→ / Mouse | Trail + 5 renk brick |
| 5 | **Pong Retro** | W/S / Mouse | Güçlü AI tahmin |
| 6 | **Space Invaders** | ←→ Space | Kalkan, patlama |
| 7 | **Asteroids** | ←→ | Dönen kayalar, thrust |
| 8 | **Runner Dash** | Space | 220px engel, bob |
| 9 | **2048 Mini** | Yön | Resmi palet, shine |
| 10 | **Memory Flip** | Tıkla | Flip 3D, 4×4 |

`Arcade` sekmesi altındaki **Liderlik Tablosu** artık `Evren`/`Blog` değil `Arcade` içinde, `🏆 — isim`, rozet `🥇250/🥈100/🥉50`, `localStorage lb_*` + `best_*`.

---

## 📝 Blog — Beğeni/Yorum + AI Özet

- **Okuma:** `Blog` sekmesi herkes `published` görür, admin `draft` de görür, `Blog ara` + `featured` öncelikli
- **Etkileşim:** Kartta `♥/💬` sayıları, modalda `♥ Beğen` (`kerem_blog_likes`), `🔗 Paylaş` (`navigator.share`/`clipboard` `#blog-slug`), yorumlar (`kerem_blog_comments` → `name/date/text`)
- **Yazma (Admin):** `Yazı Editörü — Detaylı` → başlık/slug/özet/cover/category/featured/tags, toolbar `B/I/<> /H2/•/❝`, canlı önizleme, `AI ile Özetle` → `pollinations` `OZET:/ETIKET:` parse → `bExcerpt`/`bTags` doldurur
- **Kaynak:** `localStorage kerem_blogs`, `Dışa Aktar` JSON, `Tümünü Sil`

---

## 🧪 Playground — HTML Canlı

`Playground` sekmesi → sol `textarea#pgCode` (16 satır, `font-mono`), sağ `iframe#pgPreview` (`sandbox allow-scripts allow-same-origin`, `srcdoc`).

```js
runPlayground() → iframe.srcdoc = code; localStorage kerem_playground
```

Örnekler: `Neon Buton`, `Kart`, `Mini Oyun (canvas)` — `Çalıştır` → `doc.write` değil `srcdoc` (sandBox uyumlu), `Temizle`/`Paylaş`.

---

## 🌌 Evren Wiki — 🧱 Duvar

**Evren:** `TRUST NO ONE` / `Neon Ronin` / `Kayıp Sektör` / `Pulse Tüfek` / `Gece Şehri` / `Gölge Protokolü` — `loreData` aranabilir `loreGrid`.

**Duvar:** `wallCanvas 640×360` + `wallColor` + `kerem_wall` (2000 piksel). `mousedown/touch` çiz, `renderWall` grid + pikseller, `wallCount`.

---

## 💬 Sohbet — ☕ Destek

**Sohbet:** `iletisim` altında `💬 Canlı Sohbet` → `chatBox` 180px, `kerem_chat` 100 mesaj, `Misafir` adıyla anında, `renderChat`.

**Destek:** `Buy Me a Coffee` bölümü (amber gradient) → `☕ Destekle` (`buymeacoffee.com`) + `Adımı duvara ekle` → `kerem_supporters` duvarı `♥`.

---

## ⚡ Admin Panel — Ayrı Arayüz

`#adminOverlay` `fixed inset-0 z-90 bg-[#050507] overflow-auto` — normal arayüz değil!

- Topbar: `ADMIN PANEL` + `keremmkilincc@gmail.com • müq 👑` + `● CANLI` + `← Siteye Dön` (`closeAdminPanel`)
- Giriş: `#hamburger → Admin` veya `#userMenu → Admin` → `openAdminPanel()` guard → değilse `openLogin()` + `⚠️ sadece kod ile`
- Kod: `keremmkilincc@gmail.com` girince 6 haneli kod `FormSubmit` ile mail + `localStorage pending_*` (10dk), `Tekrar Gönder` artık kodu ekranda göstermez
- İç sekmeler: `Yazılar` / `✏️ Blog Oluştur` / `🖼️ Medya` / `⚙️ Ayarlar` — stats `toplam/yayında/taslak/♾️ müq`

---

## 🤖 Kerem AI — Muse Spark

Sol alt `🤖` → `#aiPanel 380px` (`Muse Spark • anında • müq`), `WebLLM` kaldırıldı (model indirme yok).

```js
fetch('https://text.pollinations.ai/' + encodeURIComponent(systemPrompt + '\n\nKullanıcı: ' + q) + '?model=openai')
```

`systemPrompt` Kerem portfolyo odaklı, hata → rule-based `fallbackAI`. `Gönder` `disabled` while streaming.

---

## 🎵 Müzik — 🎨 3D Viewer

**Müzik:** Alt orta `Neon Loop` `audio loop` (`SoundHelix` + `pixabay` fallback), `▶️/⏸️` + `WebAudio beep` fallback, `musicBar` her yerde `flex`.

**3D:** `projeler` içinde `model-viewer 3.4` `Astronaut.glb` (Neon Ronin demo), `camera-controls auto-rotate ar`.

---

## 🧠 Yetenekler — 💻 Terminal

**Yetenekler:** `Frontend 92% / Backend 88% / Oyun 90% / DevOps 85%` progress, `glass-panel`, sağda `developer.js` kod penceresi `copyDevCode()` (`fa-copy → check`).

**Terminal:** `help/about/skills/contact/clear/projects` → `projects` direkt `github` sekmesine atar, `bash` prompt `guest@kerem:~$`, `initTerminal()`.

---

## 🛠️ Teknoloji

- **Statik:** `HTML5` + `Tailwind CDN` + `Vanilla JS` (`Canvas 2D`, `localStorage`, `IntersectionObserver`)
- **Görsel:** `model-viewer 3.4`, `Font Awesome 6.4`, `Fira Code` + `Space Grotesk`/`Inter`/`JetBrains Mono`
- **API:** `GitHub REST` (`users/keremmkilincc-wq/repos`), `FormSubmit AJAX` (iletişim + kod mail), `pollinations free` (AI + özet)
- **PWA:** `manifest.json` + `sw.js` (`kerem-v5` cache)
- **Deploy:** `GitHub Pages` (`main` branch, `https://keremmkilincc-wq.github.io/`)

---

## 🚀 Kurulum

```bash
git clone https://github.com/keremmkilincc-wq/keremmkilincc-wq.github.io.git
cd keremmkilincc-wq.github.io
python -m http.server 8000
# -> http://localhost:8000
# ya da: npx serve .
```

**İlk kullanım:**
- İletişim / kod maili → inbox `Confirm` → `FormSubmit` aktif
- Blog → `Giriş Yap` → `keremmkilincc@gmail.com` → kod → `Admin`
- PWA → `manifest.json` + `sw.js` otomatik, offline Arcade

---

## ⚙️ Ayarlar — 20 Dil / 10 Tema

Sağ dikey dock `⚙️` → **Dil (20)** + **Tema (10)** + **Hesap**.

**Dil:** `TR, EN, DE, FR, ES, IT, PT, RU, ZH, JA, KO, AR, HI, NL, PL, SV, NO, DA, EL, CS` — `data-i18n` + `placeholder` çevrilir, `localStorage lang`.

**Tema:** `Midnight, Neon Violet, Cyan Ocean, Emerald Forest, Crimson Rose, Sunset Orange, Arctic Blue, Golden Hour, Monochrome, Cyberpunk` — `CSS variables --accent/--card` anında.

**Hesap:** `E-posta / Nickname` gösterim, `Yeni nickname` + `Değiştir` (`arcadeUser`), `Çıkış Yap — her şeyi sıfırla` (`auth_email/auth_role/arcadeUser/pending_*`).

---

## 🔍 SEO & PWA — Lighthouse

- `preconnect` `fonts.googleapis|gstatic|cdn.tailwind|github`
- `canonical` + `OG/twitter` + `JSON-LD Person` (`Kerem KILINÇ, sameAs github`)
- `sitemap.xml` + `robots.txt`, `img loading=lazy decoding=async`, `video preload=metadata`
- `hero-video` `filter saturate`, `reveal` scroll, `btn-micro` hover, sağ dock + hamburger `≡`

Lighthouse hedef `95+`.

---

## 📬 İletişim

- **Kerem KILINÇ** — Oyun Geliştirici & Dijital Tasarımcı
- GitHub: [@keremmkilincc-wq](https://github.com/keremmkilincc-wq)
- E-posta: `keremmkilincc@gmail.com` / `keremmkilincc@hotmail.com` (form üzerinden)
- Discord: `keremmkilincc-wq`

---

## 📄 Lisans

MIT — Dilediğin gibi kullan, geliştir, paylaş.

---

<p align="center">Made with <span style="color:#8b5cf6">♥</span> by Kerem KILINÇ — 2026 — <b>müq müq müq müq müq harika</b> ✨</p>
