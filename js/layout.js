function gbPath(p) {
  return p;
}

/* ======================================================================
   >>> YOUR LOGO GOES HERE <<<
   ====================================================================== */
function renderLogoMark(root) {
  return `<img src="${root}/images/logo.png" alt="Noksha" class="logo-img">`;
}

function renderHeader(active) {
  const root = document.body.getAttribute('data-root') || '.';
  document.write(`
  <div class="utility-bar">
    <div class="container">
      <div class="flex" style="gap:18px;">
        <span lang-block="bn">📞 +৮৮০ ০১৯৭২-৪২৮৪৮২</span>
        <span lang-block="en">📞 +880 1972-428482</span>
        <a href="${root}/pages/contact.html" lang-block="bn">যোগাযোগ</a>
        <a href="${root}/pages/contact.html" lang-block="en">Contact</a>
      </div>
      <div class="flex" style="gap:16px; align-items:center;">
        <a href="${root}/pages/seller-page.html" lang-block="bn">ডিজাইনার হিসেবে যোগ দিন</a>
        <a href="${root}/pages/seller-page.html" lang-block="en">Become a Designer</a>
        <div class="lang-toggle">
          <button data-lang="bn">বাং</button>
          <button data-lang="en">EN</button>
        </div>
        <button class="theme-switch" title="Dark / Light mode" aria-checked="false">
          <span class="theme-switch-knob">☀️</span>
        </button>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="container nav-row">
      <a href="${root}/index.html" class="logo">
        ${renderLogoMark(root)}
        <span lang-block="bn">নকশা</span>
        <span lang-block="en">Noksha</span>
      </a>
      <nav class="main-nav">
        <div class="dropdown-wrap">
          <a href="#" lang-block="bn">অনুসন্ধান ▾</a>
          <a href="#" lang-block="en">Explore ▾</a>
          <div class="dropdown-panel">
            <a href="${root}/pages/category.html?view=collections" lang-block="bn">কালেকশন</a>
            <a href="${root}/pages/category.html?view=collections" lang-block="en">Collections</a>
            <a href="${root}/pages/category.html?tier=premium" lang-block="bn">প্রিমিয়াম</a>
            <a href="${root}/pages/category.html?tier=premium" lang-block="en">Premium</a>
            <a href="${root}/pages/category.html?view=popular" lang-block="bn">জনপ্রিয়</a>
            <a href="${root}/pages/category.html?view=popular" lang-block="en">Popular</a>
          </div>
        </div>
        <div class="dropdown-wrap">
          <a href="${root}/pages/category.html" lang-block="bn">ক্যাটাগরি ▾</a>
          <a href="${root}/pages/category.html" lang-block="en">Categories ▾</a>
          <div class="dropdown-panel">
            <a href="${root}/pages/category.html?c=banner" lang-block="bn">ব্যানার ডিজাইন</a>
            <a href="${root}/pages/category.html?c=banner" lang-block="en">Banner Design</a>
            <a href="${root}/pages/category.html?c=poster" lang-block="bn">পোস্টার ডিজাইন</a>
            <a href="${root}/pages/category.html?c=poster" lang-block="en">Poster Design</a>
            <a href="${root}/pages/category.html?c=card" lang-block="bn">ভিজিটিং কার্ড</a>
            <a href="${root}/pages/category.html?c=card" lang-block="en">Business Card</a>
            <a href="${root}/pages/category.html?c=logo" lang-block="bn">লোগো ডিজাইন</a>
            <a href="${root}/pages/category.html?c=logo" lang-block="en">Logo Design</a>
          </div>
        </div>
        <a href="${root}/pages/subscription.html" lang-block="bn">সাবস্ক্রিপশন</a>
        <a href="${root}/pages/subscription.html" lang-block="en">Subscription</a>
        <a href="${root}/pages/contact.html" lang-block="bn">যোগাযোগ</a>
        <a href="${root}/pages/contact.html" lang-block="en">Contact</a>
      </nav>
      <div class="nav-actions">
        <!-- ============ HEADER SEARCH ============
             Clicking the magnifying glass opens a small search box right
             here in the header (see toggleHeaderSearch() in js/main.js).
             Submitting it sends the visitor to category.html?q=...,
             which performs the actual filtering — see the "WORKING
             SEARCH + FILTER + SORT" comment block in pages/category.html
             for how the results page reads that ?q= value. -->
        <div class="header-search-wrap">
          <button class="icon-btn" onclick="toggleHeaderSearch()" title="Search" id="header-search-btn">🔍</button>
          <form class="header-search-box" id="header-search-box" onsubmit="return submitHeaderSearch(event, '${root}')">
            <input type="text" id="header-search-input" placeholder="খুঁজুন... / Search...">
            <button type="submit">→</button>
          </form>
        </div>
        <button class="icon-btn" onclick="window.location.href='${root}/pages/cart.html'" title="Cart">
          🛒<span class="cart-count">0</span>
        </button>
        <button class="icon-btn" onclick="window.location.href='${root}/pages/dashboard.html'" title="Dashboard">👤</button>
        <a href="${root}/pages/login.html" class="btn btn-outline" lang-block="bn">লগইন</a>
        <a href="${root}/pages/login.html" class="btn btn-outline" lang-block="en">Login</a>
        <a href="${root}/pages/signup.html" class="btn btn-primary" lang-block="bn">সাইন আপ</a>
        <a href="${root}/pages/signup.html" class="btn btn-primary" lang-block="en">Sign Up</a>
        <button class="mobile-menu-btn">☰</button>
      </div>
    </div>
  </header>
  `);
}

function renderFooter() {
  const root = document.body.getAttribute('data-root') || '.';
  document.write(`
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="logo" style="color:#fff; margin-bottom:14px;">
            ${renderLogoMark(root)}
            <span lang-block="bn">নকশা</span>
            <span lang-block="en">Noksha</span>
          </div>
          <p style="font-size:13.5px; max-width:280px;" lang-block="bn">নকশা প্রত্যেককে বিনামূল্যে ও প্রিমিয়াম গ্রাফিক ডিজাইন ফাইল প্রদান করে — ব্যানার, পোস্টার, বিজনেস কার্ড, টাইপোগ্রাফি ও আরও অনেক কিছু।</p>
          <p style="font-size:13.5px; max-width:280px;" lang-block="en">Noksha provides free and premium graphic design files for everyone — banners, posters, business cards, typography and more.</p>
          <div class="social-row" style="margin-top:16px;">
            <a href="https://www.facebook.com/MiadKhan.Official90/" target="_blank" title="Facebook">f</a>
            <a href="https://bd.linkedin.com/in/miadkhanofficial" target="_blank" title="LinkedIn">in</a>
            <a href="https://www.behance.net/miadkhan" target="_blank" title="Behance">be</a>
            <a href="https://dribbble.com/miadkhan" target="_blank" title="Dribbble">dr</a>
            <a href="https://www.pinterest.com/miadkhan_official/" target="_blank" title="Pinterest">pt</a>
            <a href="https://wa.me/8801972428482" target="_blank" title="WhatsApp">wa</a>
          </div>
        </div>
        <div>
          <h5 lang-block="bn">অনুসন্ধান</h5>
          <h5 lang-block="en">Explore</h5>
          <ul>
            <li><a href="${root}/pages/category.html" lang-block="bn">সদস্য</a><a href="${root}/pages/category.html" lang-block="en">Members</a></li>
            <li><a href="${root}/pages/category.html" lang-block="bn">কালেকশন</a><a href="${root}/pages/category.html" lang-block="en">Collections</a></li>
            <li><a href="${root}/pages/category.html" lang-block="bn">প্রিমিয়াম</a><a href="${root}/pages/category.html" lang-block="en">Premium</a></li>
            <li><a href="${root}/pages/category.html" lang-block="bn">জনপ্রিয়</a><a href="${root}/pages/category.html" lang-block="en">Popular</a></li>
          </ul>
        </div>
        <div>
          <h5 lang-block="bn">ক্যাটাগরি</h5>
          <h5 lang-block="en">Categories</h5>
          <ul>
            <li><a href="${root}/pages/category.html?c=banner" lang-block="bn">ব্যানার ডিজাইন</a><a href="${root}/pages/category.html?c=banner" lang-block="en">Banner Design</a></li>
            <li><a href="${root}/pages/category.html?c=poster" lang-block="bn">পোস্টার ডিজাইন</a><a href="${root}/pages/category.html?c=poster" lang-block="en">Poster Design</a></li>
            <li><a href="${root}/pages/category.html?c=card" lang-block="bn">ভিজিটিং কার্ড</a><a href="${root}/pages/category.html?c=card" lang-block="en">Business Card</a></li>
            <li><a href="${root}/pages/category.html?c=logo" lang-block="bn">লোগো ডিজাইন</a><a href="${root}/pages/category.html?c=logo" lang-block="en">Logo Design</a></li>
          </ul>
        </div>
        <div>
          <h5 lang-block="bn">প্রয়োজনীয় লিংক</h5>
          <h5 lang-block="en">Useful Links</h5>
          <ul>
            <li><a href="${root}/pages/seller-page.html" lang-block="bn">বিক্রেতা হোন</a><a href="${root}/pages/seller-page.html" lang-block="en">Become a Seller</a></li>
            <li><a href="${root}/pages/buyer-page.html" lang-block="bn">ক্রেতা গাইড</a><a href="${root}/pages/buyer-page.html" lang-block="en">Buyer Guide</a></li>
            <li><a href="${root}/pages/subscription.html" lang-block="bn">সাবস্ক্রিপশন প্ল্যান</a><a href="${root}/pages/subscription.html" lang-block="en">Subscription Plans</a></li>
            <li><a href="${root}/pages/contact.html" lang-block="bn">যোগাযোগ</a><a href="${root}/pages/contact.html" lang-block="en">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span lang-block="bn">কপিরাইট © ২০২৬।</span>
        <span lang-block="en">Copyright © 2026.</span>
        <span lang-block="bn">তৈরি করেছে নকশা টিম</span>
        <span lang-block="en">Built by the Noksha team</span> 
      </div>
    </div>
  </footer>
  <script src="${root}/js/main.js"></script>
  `);
}
