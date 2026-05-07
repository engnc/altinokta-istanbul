// header.js — Her sayfaya eklenecek ortak header/footer HTML'ini yükler
const HEADER_HTML = `
<div class="topbar">
  <div class="topbar-left">
    <span>📞 <a href="tel:02122919171">0212 291 91 71</a></span>
    <span>✉️ <a href="mailto:istanbul_altinokta@hotmail.com">istanbul_altinokta@hotmail.com</a></span>
  </div>
  <div class="topbar-right">
    <span>Pzt–Cuma 09:00–18:00 &nbsp;|&nbsp; Cmt 10:00–18:00</span>
    <a href="https://www.facebook.com/profile.php?id=100012264347269" target="_blank" rel="noopener">Facebook</a>
    <a href="https://www.instagram.com/altinokta1950/" target="_blank" rel="noopener">Instagram</a>
  </div>
</div>
<header>
  <div class="nav-inner">
    <a class="logo" href="/index.html">
      <span class="logo-altı">⠿</span>
      <div class="logo-text">
        <strong>Altı Nokta Körler Derneği</strong>
        <span>İstanbul Şubesi</span>
      </div>
    </a>
    <nav>
      <ul id="nav-menu">
        <li><a href="/index.html">Ana Sayfa</a></li>
        <li><a href="/hakkinda/index.html">Hakkımızda</a></li>
        <li><a href="/hizmetlerimiz/index.html">Hizmetlerimiz</a></li>
        <li><a href="/haberler/index.html">Haberler</a></li>
        <li><a href="/etkinlikler/index.html">Etkinlikler</a></li>
        <li><a href="/galeri/index.html">Galeri</a></li>
        <li><a href="/bagis/index.html">Bağış</a></li>
        <li><a href="/iletisim/index.html">İletişim</a></li>
      </ul>
    </nav>
    <button class="hamburger" aria-label="Menüyü aç">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-ic">
    <div class="footer-logo">
      <strong>⠿ Altı Nokta Körler Derneği<br>İstanbul Şubesi</strong>
      <p>Görme engellilerin kendine yeterli, üretken ve toplumla kaynaşabilen bireyler olarak yetişmesi için 1950'den beri hizmet veriyoruz.</p>
      <div class="sosyal-linkler" style="margin-top:1rem">
        <a class="sosyal-link" href="https://www.facebook.com/profile.php?id=100012264347269" target="_blank" rel="noopener" aria-label="Facebook">f</a>
        <a class="sosyal-link" href="https://www.instagram.com/altinokta1950/" target="_blank" rel="noopener" aria-label="Instagram">in</a>
      </div>
    </div>
    <div>
      <h4>Hızlı Bağlantılar</h4>
      <ul>
        <li><a href="/hakkinda/index.html">Hakkımızda</a></li>
        <li><a href="/hizmetlerimiz/index.html">Hizmetlerimiz</a></li>
        <li><a href="/haberler/index.html">Haberler</a></li>
        <li><a href="/etkinlikler/index.html">Etkinlikler</a></li>
        <li><a href="/galeri/index.html">Galeri</a></li>
        <li><a href="/bagis/index.html">Bağış Yap</a></li>
      </ul>
    </div>
    <div>
      <h4>İletişim</h4>
      <ul>
        <li style="margin-bottom:0.8rem;font-size:0.88rem">İzzetpaşa Çifliği Mah.<br>Vefa Poyraz Cad. No:6<br>Şişli / İstanbul</li>
        <li><a href="tel:02122919171">0212 291 91 71</a></li>
        <li><a href="tel:02122918144">0212 291 81 44</a></li>
        <li><a href="mailto:istanbul_altinokta@hotmail.com">istanbul_altinokta@hotmail.com</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-alt">
    <span>© 2025 Altınokta Körler Derneği İstanbul Şubesi. Tüm hakları saklıdır.</span>
    <span>Kamu Yararına Dernek · Türkiye Körler Federasyonu Üyesi</span>
  </div>
</footer>
<div class="erişilebilirlik-cubugu" aria-label="Erişilebilirlik araçları">
  <button class="eb-btn" id="buyuk-yazi-btn" title="Büyük Yazı" aria-label="Yazı boyutunu büyüt">A+</button>
  <button class="eb-btn" id="kontrast-btn" title="Yüksek Kontrast" aria-label="Yüksek kontrast">◑</button>
</div>`;

// Header ve footer'ı ekle
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.outerHTML = HEADER_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
});
