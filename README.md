# Navis Landing Page

Homepage dan halaman layanan Nautiq, dengan versi HTML statis siap hosting.

Sumber website yang dipublikasikan: https://www.navis.rizkypermn.com.
Versi Sites 2 berasal dari commit `7ae2a81917af62cfe2f6cec5ae661c6204555c95`.
Hasil pemeriksaan halaman live terhadap ekspor tercatat di `published-build.json`.
Jalankan `node scripts/verify-published.mjs` setelah build untuk memeriksa status
HTTP dan kecocokan judul bagian Homepage serta Nautiq dengan website live.

## Versi HTML

Folder `html/` berisi hasil build yang ikut disimpan di GitHub:

- `html/index.html` — Homepage.
- `html/services/nautiq/index.html` — halaman Nautiq.
- `html/assets/` dan `html/_next/` — gambar, CSS, dan JavaScript.

Unggah **seluruh isi folder `html/`** ke root hosting/subdomain. Website tidak
memerlukan server Node.js saat dihosting; JavaScript tetap diperlukan untuk menu,
tab layanan, dan formulir. Formulir membuka aplikasi email pengguna (mailto).
Gunakan server HTTP untuk preview, bukan membuka HTML dengan `file://`.

Path aset memakai root domain. Jika memakai GitHub Pages, gunakan custom domain
atau hosting pada root domain; path proyek `/navis-landing-page/` memerlukan
penyesuaian base path terlebih dahulu. Push ke GitHub tidak otomatis mengaktifkan
GitHub Pages.

## Membuat ulang HTML

```sh
npm ci
npm run build:html
```

Perintah ini mengganti folder `html/` dengan hasil terbaru dan memeriksa halaman
serta referensi asetnya. Commit folder tersebut setelah build ulang.

## Pengembangan

```sh
npm run dev
```

`npm run build` tetap menghasilkan build Sites/Cloudflare yang biasa.
`npm run build:html` menggunakan mode ekspor statis secara terpisah.
