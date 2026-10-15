// ============================================================
// 🔗 PAGE URLS — GitHub Pages ke liye
// ============================================================
const PAGE_URLS = {
    home:     'index.html',
    career:   'career.html',
    jobs:     'jobs.html',
    more:     'more.html',
    service:  'services.html',
    blog:     'blog.html',
    rsr:      'rsr.html',
    tools:    'tools.html',
    admin:    'admin.html'
};

// ============================================================
// 🎯 RENDER NAVIGATION BAR
// ============================================================
function renderNav(activePage = 'home') {
    const nav = document.getElementById('dynamicNav');
    if (!nav) return;

    const navItems = [
        { key: 'home',    icon: '🏠', label: 'Home' },
        { key: 'career',  icon: '🎯', label: 'Career' },
        { key: 'more',    icon: '⚙️', label: 'More' },
        { key: 'service', icon: '🛠️', label: 'Services' },
        { key: 'blog',    icon: '📝', label: 'Blog' },
        { key: 'rsr',     icon: '📜', label: 'RSR' },
        { key: 'tools',   icon: '🛠️', label: 'Tools' }
    ];

    let html = '';

    // Home button
    html += `<a href="${PAGE_URLS.home}" class="nav-btn ${activePage === 'home' ? 'active' : ''}">🏠 Home</a>`;

    // Jobs dropdown
    html += `
        <div class="dropdown-wrapper" id="govtDropdown">
            <button class="dropdown-btn ${activePage === 'jobs' ? 'active' : ''}" onclick="toggleDropdownMobile('govt', event)">💼 Jobs <span class="arrow">▾</span></button>
            <div class="dropdown-content" id="govtDropdownContent">
                <div class="dropdown-label">📂 Select Category</div>
                <a href="${PAGE_URLS.jobs}?cat=central">🏛️ Central Govt. <span class="count-badge" id="centralCount">0</span></a>
                <a href="${PAGE_URLS.jobs}?cat=state">🏜️ Rajasthan Govt. <span class="count-badge" id="stateCount">0</span></a>
                <a href="${PAGE_URLS.jobs}?cat=private">💼 Private <span class="count-badge" id="privateCount">0</span></a>
                <a href="${PAGE_URLS.jobs}?cat=all">📋 All Jobs</a>
            </div>
        </div>
    `;

    // Other nav items
    navItems.slice(1).forEach(item => {
        const active = item.key === activePage ? 'active' : '';
        html += `<a href="${PAGE_URLS[item.key]}" class="nav-btn ${active}">${item.icon} ${item.label}</a>`;
    });

    // Admin button
    html += `<a href="${PAGE_URLS.admin}" class="nav-btn admin-btn">🔐 Admin</a>`;

    nav.innerHTML = html;
    updateJobCounts();
}

// ============================================================
// 📱 MOBILE DROPDOWN TOGGLE
// ============================================================
function toggleDropdownMobile(name, event) {
    if (event) event.stopPropagation();
    ['govt'].forEach(d => { if (d !== name) closeDropdownMobile(d); });
    const content = document.getElementById(`${name}DropdownContent`);
    if (content) content.classList.toggle('show');
}

function closeDropdownMobile(name) {
    const content = document.getElementById(`${name}DropdownContent`);
    if (content) content.classList.remove('show');
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-wrapper')) {
        closeDropdownMobile('govt');
    }
});

// ============================================================
// 🔢 UPDATE JOB COUNTS
// ============================================================
function updateJobCounts() {
    const publicJobs = jobsData.filter(j => j.visibility !== 'private');
    const centralEl = document.getElementById('centralCount');
    const stateEl = document.getElementById('stateCount');
    const privateEl = document.getElementById('privateCount');
    if (centralEl) centralEl.textContent = publicJobs.filter(j => j.jobType === 'central').length;
    if (stateEl) stateEl.textContent = publicJobs.filter(j => j.jobType === 'state').length;
    if (privateEl) privateEl.textContent = publicJobs.filter(j => j.jobType === 'private').length;
}
