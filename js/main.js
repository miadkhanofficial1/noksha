// ============ LANGUAGE TOGGLE ============
(function () {
  const STORAGE_KEY = 'gb_lang';
  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('[lang-block]').forEach(el => {
      const isActive = el.getAttribute('lang-block') === lang;
      el.classList.toggle('lang-active', isActive);
      // Override any inline display:none set as the default hidden state in markup
      if (isActive) {
        el.style.removeProperty('display');
      } else {
        el.style.display = 'none';
      }
    });
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem(STORAGE_KEY, lang);
  }
  window.setLang = applyLang;
  window.applyLangGlobal = applyLang;
  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(STORAGE_KEY) || 'bn';
    applyLang(saved);
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
  });
})();

// ============ CART STATE ============
const GBCart = {
  KEY: 'gb_cart',
  get() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch (e) { return []; }
  },
  save(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadge();
  },
  add(item) {
    const items = this.get();
    const existing = items.find(i => i.id === item.id);
    if (existing) { existing.qty += 1; }
    else { items.push({ ...item, qty: 1 }); }
    this.save(items);
    showToast(document.documentElement.getAttribute('data-lang') === 'en' ? 'Added to cart' : 'কার্টে যোগ হয়েছে');
  },
  remove(id) {
    this.save(this.get().filter(i => i.id !== id));
  },
  setQty(id, qty) {
    const items = this.get();
    const it = items.find(i => i.id === id);
    if (it) { it.qty = Math.max(1, qty); this.save(items); }
  },
  count() { return this.get().reduce((s, i) => s + i.qty, 0); },
  total() { return this.get().reduce((s, i) => s + i.qty * i.price, 0); },
  clear() { this.save([]); },
  updateBadge() {
    document.querySelectorAll('.cart-count').forEach(el => { el.textContent = this.count(); });
  }
};
document.addEventListener('DOMContentLoaded', () => GBCart.updateBadge());

// ============ FAVORITES ============
const GBFav = {
  KEY: 'gb_favorites',
  get() { try { return JSON.parse(localStorage.getItem(this.KEY)) || []; } catch (e) { return []; } },
  toggle(id) {
    let items = this.get();
    if (items.includes(id)) { items = items.filter(i => i !== id); }
    else { items.push(id); }
    localStorage.setItem(this.KEY, JSON.stringify(items));
    return items.includes(id);
  },
  has(id) { return this.get().includes(id); }
};

// ============ TOAST ============
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<span class="dot"></span><span class="msg"></span>';
    document.body.appendChild(toast);
  }
  toast.querySelector('.msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2400);
}

// ============ HEADER SEARCH BOX ============
// Opens/closes the small search dropdown attached to the header's
// magnifying glass icon. See .header-search-box in css/main.css and
// the markup in js/layout.js (renderHeader function).
function toggleHeaderSearch() {
  const box = document.getElementById('header-search-box');
  if (!box) return;
  box.classList.toggle('is-open');
  if (box.classList.contains('is-open')) {
    const input = document.getElementById('header-search-input');
    if (input) input.focus();
  }
}

// Called when the header search form is submitted (Enter key or the
// arrow button). Sends the visitor to category.html?q=<their text>,
// where pages/category.html's runSearch() picks up the ?q= param and
// filters the results automatically on load.
function submitHeaderSearch(event, root) {
  event.preventDefault();
  const input = document.getElementById('header-search-input');
  const query = input ? input.value.trim() : '';
  const target = `${root}/pages/category.html` + (query ? `?q=${encodeURIComponent(query)}` : '');
  window.location.href = target;
  return false;
}

// Close the header search box if the visitor clicks anywhere else on the page
document.addEventListener('click', (e) => {
  const wrap = document.querySelector('.header-search-wrap');
  const box = document.getElementById('header-search-box');
  if (wrap && box && box.classList.contains('is-open') && !wrap.contains(e.target)) {
    box.classList.remove('is-open');
  }
});

// ============ MOBILE MENU ============
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.main-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#fff';
      nav.style.padding = '16px 24px';
      nav.style.borderBottom = '1px solid #E4DDC9';
      nav.style.gap = '16px';
    });
  }
});

// ============ FORM SUBMIT DEMO HANDLER ============
function demoSubmit(e, redirect, msg) {
  e.preventDefault();
  showToast(msg || 'সফল হয়েছে');
  if (redirect) setTimeout(() => { window.location.href = redirect; }, 700);
  return false;
}
