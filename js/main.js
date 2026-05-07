// Altınokta İstanbul — Ana JS

// Hamburger menü
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
if (hamburger && navUl) {
  hamburger.addEventListener('click', () => {
    navUl.classList.toggle('acik');
  });
}

// Aktif menü öğesi
const aktifLink = () => {
  const yol = window.location.pathname;
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === yol || yol.startsWith(a.getAttribute('href').replace('index.html',''))) {
      a.classList.add('aktif');
    }
  });
};
aktifLink();

// Erişilebilirlik — büyük yazı
const buyukYaziBtn = document.getElementById('buyuk-yazi-btn');
if (buyukYaziBtn) {
  let buyuk = localStorage.getItem('buyuk-yazi') === '1';
  if (buyuk) document.body.classList.add('buyuk-yazi');
  buyukYaziBtn.addEventListener('click', () => {
    buyuk = !buyuk;
    document.body.classList.toggle('buyuk-yazi', buyuk);
    localStorage.setItem('buyuk-yazi', buyuk ? '1' : '0');
  });
}

// Erişilebilirlik — yüksek kontrast
const kontrastBtn = document.getElementById('kontrast-btn');
if (kontrastBtn) {
  let kontrast = localStorage.getItem('yuksek-kontrast') === '1';
  if (kontrast) document.body.classList.add('yuksek-kontrast');
  kontrastBtn.addEventListener('click', () => {
    kontrast = !kontrast;
    document.body.classList.toggle('yuksek-kontrast', kontrast);
    localStorage.setItem('yuksek-kontrast', kontrast ? '1' : '0');
  });
}

// İletişim formu gönderimi (Formspree ile)
const form = document.getElementById('iletisim-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Gönderiliyor...';
    btn.disabled = true;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        form.innerHTML = '<p style="color:var(--altin);font-size:1.1rem;font-weight:600;padding:1.5rem 0">✓ Mesajınız iletildi. En kısa sürede size dönüş yapacağız.</p>';
      } else {
        btn.textContent = 'Gönder';
        btn.disabled = false;
        alert('Bir hata oluştu. Lütfen e-posta ile iletişime geçin.');
      }
    } catch {
      btn.textContent = 'Gönder';
      btn.disabled = false;
    }
  });
}

// İçerik yükleyici — JSON'dan haber/etkinlik/galeri çekme
async function icerikYukle(dosya, konteyner, sablon) {
  if (!konteyner) return;
  try {
    const res = await fetch(dosya);
    const data = await res.json();
    konteyner.innerHTML = data.items.map(sablon).join('');
  } catch(e) {
    konteyner.innerHTML = '<p style="color:var(--metin-ac);text-align:center">İçerik yüklenemedi.</p>';
  }
}

// Ana sayfa — son haberler
const haberKonteyner = document.getElementById('son-haberler');
if (haberKonteyner) {
  icerikYukle('/haberler/haberler.json', haberKonteyner, h => `
    <a class="kart" href="/haberler/${h.slug}.html">
      <div class="kart-gorsel">${h.gorsel ? `<img src="${h.gorsel}" alt="${h.baslik}" loading="lazy">` : '📰'}</div>
      <div class="kart-icerik">
        <p class="kart-tarih">${h.tarih}</p>
        <h3>${h.baslik}</h3>
        <p>${h.ozet}</p>
        <span class="kart-etiket">Haberi Oku →</span>
      </div>
    </a>
  `);
}

// Ana sayfa — yaklaşan etkinlikler
const etkinlikKonteyner = document.getElementById('yaklasan-etkinlikler');
if (etkinlikKonteyner) {
  icerikYukle('/etkinlikler/etkinlikler.json', etkinlikKonteyner, e => `
    <a class="kart" href="/etkinlikler/${e.slug}.html">
      <div class="kart-gorsel" style="background:var(--lacivert);height:120px;font-size:2.5rem">${e.ikon || '📅'}</div>
      <div class="kart-icerik">
        <p class="kart-tarih">${e.tarih} · ${e.saat}</p>
        <h3>${e.baslik}</h3>
        <p>${e.ozet}</p>
        <span class="kart-etiket">${e.konum}</span>
      </div>
    </a>
  `);
}

// Galeri sayfası
const galeriGrid = document.getElementById('galeri-grid');
if (galeriGrid) {
  icerikYukle('/galeri/galeri.json', galeriGrid, g => `
    <div class="galeri-item" onclick="lightbox('${g.url}','${g.baslik}')">
      <img src="${g.url}" alt="${g.baslik}" loading="lazy">
    </div>
  `);
}

// Basit lightbox
window.lightbox = function(src, alt) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;padding:2rem';
  overlay.innerHTML = `<img src="${src}" alt="${alt}" style="max-width:90vw;max-height:85vh;border-radius:8px;object-fit:contain">`;
  overlay.addEventListener('click', () => overlay.remove());
  document.body.appendChild(overlay);
};
