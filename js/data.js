// ============ SAMPLE DATA ============
const GB_CATEGORIES = [
  { id: 'banner', icon: '🚩', bn: 'ব্যানার ডিজাইন', en: 'Banner Design', swatch: 's1' },
  { id: 'poster', icon: '📋', bn: 'পোস্টার ডিজাইন', en: 'Poster Design', swatch: 's2' },
  { id: 'card', icon: '💳', bn: 'ভিজিটিং কার্ড', en: 'Business Card', swatch: 's3' },
  { id: 'calendar', icon: '📅', bn: 'ক্যালেন্ডার ডিজাইন', en: 'Calendar Design', swatch: 's4' },
  { id: 'memo', icon: '🧾', bn: 'ক্যাশ মেমো', en: 'Cash Memo', swatch: 's5' },
  { id: 'certificate', icon: '🏅', bn: 'সার্টিফিকেট', en: 'Certificate', swatch: 's6' },
  { id: 'logo', icon: '🔷', bn: 'লোগো ডিজাইন', en: 'Logo Design', swatch: 's7' },
  { id: 'tshirt', icon: '👕', bn: 'টি-শার্ট ডিজাইন', en: 'T-Shirt Design', swatch: 's8' },
  { id: 'leaflet', icon: '📰', bn: 'লিফলেট ডিজাইন', en: 'Leaflet Design', swatch: 's1' },
  { id: 'idcard', icon: '🪪', bn: 'আইডি কার্ড', en: 'ID Card', swatch: 's2' },
  { id: 'envelope', icon: '✉️', bn: 'খাম/চিঠি ডিজাইন', en: 'Envelope Design', swatch: 's3' },
  { id: 'typography', icon: '🖋️', bn: 'টাইপোগ্রাফি', en: 'Typography', swatch: 's4' },
];

function genDesigns() {
  const titles = [
    { bn: 'ঈদ মোবারক ব্যানার ডিজাইন', en: 'Eid Mubarak Banner Design', cat: 'banner' },
    { bn: 'মাদ্রাসা ভর্তি বিজ্ঞপ্তি পোস্টার', en: 'Madrasa Admission Notice Poster', cat: 'poster' },
    { bn: 'কোচিং সেন্টার ভিজিটিং কার্ড', en: 'Coaching Center Business Card', cat: 'card' },
    { bn: 'নববর্ষ ক্যালেন্ডার ডিজাইন ২০২৬', en: 'New Year Calendar Design 2026', cat: 'calendar' },
    { bn: 'ফার্নিচার দোকানের ক্যাশ মেমো', en: 'Furniture Shop Cash Memo', cat: 'memo' },
    { bn: 'বিদ্যালয় সনদপত্র ডিজাইন', en: 'School Certificate Design', cat: 'certificate' },
    { bn: 'রেস্টুরেন্ট লোগো ডিজাইন', en: 'Restaurant Logo Design', cat: 'logo' },
    { bn: 'ফুটবল টুর্নামেন্ট টি-শার্ট', en: 'Football Tournament T-Shirt', cat: 'tshirt' },
    { bn: 'ইফতার মাহফিল লিফলেট', en: 'Iftar Mahfil Leaflet', cat: 'leaflet' },
    { bn: 'অফিস কর্মী আইডি কার্ড', en: 'Office Employee ID Card', cat: 'idcard' },
    { bn: 'বিবাহ আমন্ত্রণপত্র খাম', en: 'Wedding Invitation Envelope', cat: 'envelope' },
    { bn: 'বাংলা টাইপোগ্রাফি আর্ট', en: 'Bangla Typography Art', cat: 'typography' },
    { bn: 'নির্বাচনী প্রচারণা ব্যানার', en: 'Election Campaign Banner', cat: 'banner' },
    { bn: 'ওয়াজ মাহফিল পোস্টার ডিজাইন', en: 'Waz Mahfil Poster Design', cat: 'poster' },
    { bn: 'ডাক্তার প্যাড ডিজাইন', en: 'Doctor Pad Design', cat: 'card' },
    { bn: 'স্মরণিকা কভার ডিজাইন', en: 'Souvenir Cover Design', cat: 'certificate' },
    { bn: 'মুদি দোকানের সাইনবোর্ড', en: 'Grocery Shop Signboard', cat: 'banner' },
    { bn: 'জন্মদিনের পোস্টার ডিজাইন', en: 'Birthday Poster Design', cat: 'poster' },
  ];
  const designers = ['Saif Graphic', 'Zehad Hossain', 'Mahamud Islam', 'Eshan Sinha', 'Somrat Naeem', 'RS Design', 'Sohel Rahat'];
  return titles.map((t, i) => ({
    id: 'd' + (i + 1),
    title: t,
    cat: t.cat,
    swatch: GB_CATEGORIES.find(c => c.id === t.cat)?.swatch || 's1',
    designer: designers[i % designers.length],
    price: i % 4 === 0 ? 0 : [99, 149, 199, 249, 299][i % 5],
    downloads: Math.floor(Math.random() * 4000) + 120,
    badge: i % 5 === 0 ? { bn: 'নতুন', en: 'New' } : (i % 7 === 0 ? { bn: 'জনপ্রিয়', en: 'Popular' } : null),
  }));
}
const GB_DESIGNS = genDesigns();

const GB_COLLECTIONS = [
  { id: 'c1', bn: 'আর্জেন্টিনা ফিফা বিশ্বকাপ ব্যানার ২০২৬', en: 'Argentina FIFA World Cup Banner 2026', count: 156, swatch: 's6' },
  { id: 'c2', bn: 'ব্রাজিল ফিফা বিশ্বকাপ ব্যানার ২৬', en: 'Brazil FIFA World Cup Banner 26', count: 108, swatch: 's4' },
  { id: 'c3', bn: 'ঈদুল ফিতর স্পেশাল কালেকশন', en: 'Eid-ul-Fitr Special Collection', count: 84, swatch: 's1' },
  { id: 'c4', bn: 'বিজয় দিবস ব্যানার কালেকশন', en: 'Victory Day Banner Collection', count: 62, swatch: 's2' },
];

// ============ RENDER HELPERS ============
function priceLabel(price, lang) {
  if (price === 0) return lang === 'en' ? 'Free' : 'ফ্রি';
  return '৳' + price;
}

function designCardHTML(d, root) {
  const lang = document.documentElement.getAttribute('data-lang') || 'bn';
  const badge = d.badge ? `<span class="badge">${d.badge[lang]}</span>` : '';
  return `
  <div class="design-card">
    <div class="design-thumb">
      <a href="${root}/pages/product-detail.html?id=${d.id}">
        <div class="swatch ${d.swatch}"><span>${d.title[lang]}</span></div>
      </a>
      ${badge}
      <button class="fav-btn" onclick="toggleFav(this,'${d.id}')">${GBFav.has(d.id) ? '❤️' : '🤍'}</button>
      <div class="quick-add" onclick="quickAdd('${d.id}')" lang-block="bn">কার্টে যোগ করুন</div>
      <div class="quick-add" onclick="quickAdd('${d.id}')" lang-block="en" style="display:none;">Add to Cart</div>
    </div>
    <div class="design-body">
      <h4><a href="${root}/pages/product-detail.html?id=${d.id}">${d.title[lang]}</a></h4>
      <div class="design-meta">
        <span>${d.designer}</span>
        <span class="design-price ${d.price === 0 ? 'free' : ''}">${priceLabel(d.price, lang)}</span>
      </div>
    </div>
  </div>`;
}

function renderDesignGrid(elId, list, root) {
  root = root || (document.body.getAttribute('data-root') || '.');
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = list.map(d => designCardHTML(d, root)).join('');
  applyLangToNode(el);
}

function renderCategoryGrid(elId, root) {
  root = root || (document.body.getAttribute('data-root') || '.');
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = GB_CATEGORIES.map(c => `
    <a class="cat-card" href="${root}/pages/category.html?c=${c.id}">
      <div class="ic">${c.icon}</div>
      <span lang-block="bn">${c.bn}</span>
      <span lang-block="en" style="display:none;">${c.en}</span>
    </a>`).join('');
  applyLangToNode(el);
}

function renderCollectionGrid(elId, list, root) {
  root = root || (document.body.getAttribute('data-root') || '.');
  const el = document.getElementById(elId);
  if (!el) return;
  const lang = document.documentElement.getAttribute('data-lang') || 'bn';
  el.innerHTML = list.map(c => `
    <div class="collection-card">
      <a href="${root}/pages/category.html?collection=${c.id}">
        <div class="collection-imgs">
          <div class="swatch ${c.swatch}"><span>${c[lang]}</span></div>
          <div class="stack">
            <div class="swatch ${c.swatch}" style="opacity:.75;"></div>
            <div class="swatch ${c.swatch}" style="opacity:.55;"></div>
          </div>
        </div>
      </a>
      <div class="collection-body">
        <h3><a href="${root}/pages/category.html?collection=${c.id}">${c[lang]}</a></h3>
        <div class="by">
          <span lang-block="bn">${c.count} ডিজাইন · তৈরি করেছেন Noksha</span>
          <span lang-block="en" style="display:none;">${c.count} designs · by Noksha</span>
        </div>
      </div>
    </div>`).join('');
  applyLangToNode(el);
}

function applyLangToNode(node) {
  const lang = document.documentElement.getAttribute('data-lang') || 'bn';
  node.querySelectorAll('[lang-block]').forEach(el => {
    const isActive = el.getAttribute('lang-block') === lang;
    el.classList.toggle('lang-active', isActive);
    if (isActive) {
      el.style.removeProperty('display');
    } else {
      el.style.display = 'none';
    }
  });
}

function toggleFav(btn, id) {
  const has = GBFav.toggle(id);
  btn.textContent = has ? '❤️' : '🤍';
}

function quickAdd(id) {
  const d = GB_DESIGNS.find(x => x.id === id);
  if (!d) return;
  const lang = document.documentElement.getAttribute('data-lang') || 'bn';
  GBCart.add({ id: d.id, title: d.title[lang], price: d.price, swatch: d.swatch });
}

// Re-render on language change
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.design-grid, #cat-grid, #collection-grid').forEach(applyLangToNode);
    });
  });
});
