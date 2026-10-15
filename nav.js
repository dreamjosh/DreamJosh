// ============================================================
// DREAM JOSH — COMMON NAVIGATION BAR
// Yeh file har page pe navbar automatically insert karti hai
// ============================================================

(function() {
  'use strict';

  // ---- CONFIG ----
  const SITE_NAME = 'Dream Josh';
  const LOGO_EMOJI = '🚀';

  // ---- SAARE PAGES YAHAN ADD KAREIN ----
  // Naya page banayein to yahan add karein — sab pages pe auto update hoga
  const PAGES = [
    { name: 'Home',     href: '/',         icon: 'fa-home',       file: 'index.html' },
    { name: 'Career',   href: '/career',   icon: 'fa-briefcase',  file: 'career.html' },
    { name: 'Tools',    href: '/tools',    icon: 'fa-tools',      file: 'tools.html' },
    { name: 'More',     href: '/more',     icon: 'fa-book',       file: 'more.html' },
    { name: 'Blog',     href: '/blog',     icon: 'fa-blog',       file: 'blog.html' },
    { name: 'Services', href: '/services', icon: 'fa-cogs',       file: 'services.html' },
    { name: 'Jobs',     href: '/jobs',     icon: 'fa-bullhorn',   file: 'jobs.html' },
    { name: 'RSR',      href: '/rsr',      icon: 'fa-gavel',      file: 'rsr.html' },
    { name: 'Admin',    href: '/admin',    icon: 'fa-cog',        file: 'admin.html', isAdmin: true }
  ];

  // ---- CURRENT PAGE DETECT KAREIN ----
  function getCurrentPage() {
    let path = window.location.pathname;
    // Remove trailing slash
    path = path.replace(/\/$/, '');
    // Root path
    if (path === '' || path === '/') return 'index.html';
    // Get filename
    let filename = path.split('/').pop();
    // Add .html if missing
    if (filename && !filename.endsWith('.html')) {
      filename += '.html';
    }
    return filename || 'index.html';
  }

  const currentPage = getCurrentPage();

  // ---- NAVBAR HTML BUILD KAREIN ----
  function buildNavbar() {
    const links = PAGES.map(p => {
      const isActive = (p.file === currentPage) ? ' active' : '';
      const isAdmin = p.isAdmin ? ' admin-link' : '';
      return `<a href="${p.href}" class="dj-nav-link${isActive}${isAdmin}">
        <i class="fas ${p.icon}"></i><span>${p.name}</span>
      </a>`;
    }).join('');

    return `
      <nav class="dj-navbar" role="navigation">
        <a href="/" class="dj-nav-logo">
          <span class="dj-logo-emoji">${LOGO_EMOJI}</span>
          <span class="dj-logo-text"><span>Dream</span>Josh</span>
        </a>
        <button class="dj-menu-toggle" aria-label="Toggle menu" onclick="document.querySelector('.dj-nav-menu').classList.toggle('open')">
          <i class="fas fa-bars"></i>
        </button>
        <div class="dj-nav-menu">
          ${links}
        </div>
      </nav>
    `;
  }

  // ---- CSS INJECT KAREIN ----
  function injectStyles() {
    if (document.getElementById('dj-navbar-css')) return;

    const style = document.createElement('style');
    style.id = 'dj-navbar-css';
    style.textContent = `
      .dj-navbar {
        background: linear-gradient(135deg, #123c9b, #1976d2);
        padding: 12px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
        position: sticky;
        top: 0;
        z-index: 9999;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        box-sizing: border-box;
      }
      .dj-navbar * { box-sizing: border-box; }

      .dj-navbar .dj-nav-logo {
        color: #fff;
        text-decoration: none;
        font-size: 22px;
        font-weight: 800;
        display: flex;
        align-items: center;
        gap: 8px;
        letter-spacing: 0.3px;
        transition: transform 0.2s;
      }
      .dj-navbar .dj-nav-logo:hover { transform: scale(1.03); }
      .dj-navbar .dj-logo-emoji { font-size: 24px; }
      .dj-navbar .dj-logo-text span { color: #ffd700; }

      .dj-navbar .dj-nav-menu {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        align-items: center;
      }

      .dj-navbar .dj-nav-link {
        color: #fff;
        text-decoration: none;
        padding: 8px 14px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        transition: all .2s ease;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
      }
      .dj-navbar .dj-nav-link i { font-size: 13px; }
      .dj-navbar .dj-nav-link:hover {
        background: rgba(255, 255, 255, .2);
        transform: translateY(-1px);
      }
      .dj-navbar .dj-nav-link.active {
        background: rgba(255, 215, 0, .35);
        color: #ffd700;
      }
      .dj-navbar .dj-nav-link.admin-link {
        background: rgba(255, 215, 0, .2);
        border: 1px solid rgba(255, 215, 0, .5);
      }
      .dj-navbar .dj-nav-link.admin-link:hover { background: rgba(255, 215, 0, .4); }
      .dj-navbar .dj-nav-link.admin-link.active {
        background: #ffd700;
        color: #123c9b;
      }

      .dj-navbar .dj-menu-toggle {
        display: none;
        background: rgba(255, 255, 255, .15);
        color: #fff;
        border: none;
        font-size: 18px;
        cursor: pointer;
        padding: 8px 12px;
        border-radius: 6px;
        transition: background .2s;
      }
      .dj-navbar .dj-menu-toggle:hover { background: rgba(255, 255, 255, .3); }

      @media (max-width: 900px) {
        .dj-navbar .dj-nav-menu {
          display: none;
          width: 100%;
          flex-direction: column;
          align-items: stretch;
          background: rgba(0, 0, 0, .15);
          border-radius: 8px;
          padding: 8px;
          margin-top: 8px;
        }
        .dj-navbar .dj-nav-menu.open { display: flex; }
        .dj-navbar .dj-nav-link { padding: 12px 16px; justify-content: flex-start; }
        .dj-navbar .dj-menu-toggle { display: block; }
      }
    `;
    document.head.appendChild(style);
  }

  // ---- NAVBAR INSERT KAREIN ----
  function insertNavbar() {
    // Agar navbar already hai to skip
    if (document.querySelector('.dj-navbar')) return;

    const navbarHTML = buildNavbar();

    // Priority: #navbar → #nav → [data-navbar] → body top
    const target = document.getElementById('navbar')
                || document.getElementById('nav')
                || document.querySelector('[data-navbar]');

    if (target) {
      target.innerHTML = navbarHTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }
  }

  // ---- INIT ----
  function init() {
    injectStyles();
    insertNavbar();
    console.log('✅ Dream Josh Navbar loaded');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
