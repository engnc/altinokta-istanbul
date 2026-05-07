# Altı Nokta Körler Derneği İstanbul Şubesi — Web Sitesi

## Kurulum Adımları

### 1. GitHub'a Yükleyin

1. [github.com](https://github.com)'a gidin, ücretsiz hesap açın (yoksa)
2. Sağ üstteki **+** → **New repository** tıklayın
3. Repo adı: `altinoktaistanbul`
4. **Public** seçin → **Create repository**
5. Bu klasördeki TÜM dosyaları GitHub'a yükleyin:
   - "uploading an existing file" bağlantısına tıklayın
   - Tüm dosya ve klasörleri sürükleyin
   - "Commit changes" tıklayın

---

### 2. Netlify'a Bağlayın

1. [netlify.com](https://netlify.com)'a gidin → **GitHub ile giriş yap**
2. **Add new site** → **Import an existing project** → **GitHub**
3. `altinoktaistanbul` reposunu seçin
4. **Deploy site** tıklayın
5. 1-2 dakika içinde siteniz `https://xxxxx.netlify.app` adresinde yayında!

---

### 3. Admin Panelini Aktive Edin

1. Netlify panelinde **Site configuration** → **Identity** → **Enable Identity**
2. **Registration** → **Invite only** seçin (güvenlik için)
3. **Git Gateway** → **Enable Git Gateway**
4. **Invite users** → kendi e-posta adresinizi girin
5. E-postanıza gelen davet linkini açarak şifre belirleyin
6. Admin paneline girmek için: `https://siteniz.netlify.app/admin`

---

### 4. Kendi Domaininizi Bağlayın

1. Netlify panelinde **Domain management** → **Add a domain**
2. Domaininizi yazın (örn. `altinoktaistanbul.com`)
3. Size verilen DNS kayıtlarını domain sağlayıcınıza girin:
   - CNAME: `www` → `xxxxx.netlify.app`
   - A kaydı: `@` → Netlify IP
4. SSL sertifikası otomatik yüklenir (Let's Encrypt, ücretsiz)

---

### 5. İletişim Formunu Aktive Edin

1. [formspree.io](https://formspree.io)'ya gidin, ücretsiz hesap açın
2. **New Form** → form oluşturun
3. Size verilen URL'yi (https://formspree.io/f/XXXXXXXX) kopyalayın
4. `iletisim/index.html` dosyasında `FORMSPREEID` yazan yeri bu URL ile değiştirin

---

## Admin Paneli Kullanımı

`https://siteniz.com/admin` adresine gidin ve şununları yapabilirsiniz:

| Bölüm | Ne yapabilirsiniz |
|-------|-----------------|
| Haberler | Yeni haber ekle, düzenle, sil |
| Etkinlikler | Etkinlik ekle, tarih/konum güncelle |
| Galeri | Fotoğraf URL'si ekle |
| Sayfalar | Hakkımızda ve Bağış bilgilerini güncelle |

---

## Dosya Yapısı

```
altinoktaistanbul/
├── index.html              ← Ana sayfa
├── css/style.css           ← Tüm stiller
├── js/
│   ├── header.js           ← Header/footer (ortak)
│   └── main.js             ← Sayfa işlevleri
├── hakkinda/index.html     ← Hakkımızda sayfası
├── hizmetlerimiz/index.html
├── haberler/
│   ├── index.html
│   └── haberler.json       ← Admin'den güncellenir
├── etkinlikler/
│   ├── index.html
│   └── etkinlikler.json
├── galeri/
│   ├── index.html
│   └── galeri.json
├── iletisim/index.html
├── bagis/index.html
├── admin/
│   ├── index.html          ← CMS giriş sayfası
│   └── config.yml          ← CMS konfigürasyonu
└── netlify.toml            ← Netlify ayarları
```

---

## Fotoğraf Yükleme (Cloudinary)

1. [cloudinary.com](https://cloudinary.com)'e gidin, ücretsiz hesap açın (25 GB)
2. Fotoğrafı yükleyin → URL'yi kopyalayın
3. Admin panelinde ilgili alana URL'yi yapıştırın

---

## Destek

Herhangi bir sorun yaşarsanız:
- Netlify destek: [docs.netlify.com](https://docs.netlify.com)
- Decap CMS: [decapcms.org/docs](https://decapcms.org/docs)
