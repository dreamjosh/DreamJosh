// ============================================================
// 📄 GENERIC PAGE RENDER
// ============================================================
function renderGenericPage(pageKey) {
    const page = PAGE_DATA[pageKey];
    if (!page) return;

    const container = document.getElementById(`${pageKey}Content`);
    const counter   = document.getElementById(`${pageKey}Counter`);
    const prevBtn   = document.getElementById(`${pageKey}Prev`);
    const nextBtn   = document.getElementById(`${pageKey}Next`);

    if (!container) return;

    const items = page.items || [];
    if (counter) counter.textContent = `${items.length} items`;

    let html = page.content || '';

    if (items.length > 0) {
        const idx = pageItemIndex[pageKey] || 0;
        const item = items[idx];
        const linkHtml = item.link
            ? `<a href="${item.link}" target="_blank" class="item-link"><i class="fas fa-external-link-alt"></i> Visit</a>`
            : '';

        html += `
            <div style="margin-top:20px;border-top:2px solid var(--border-color);padding-top:16px;">
                <h3 style="color:var(--primary-blue);margin-bottom:12px;">
                    📂 Item ${idx + 1} of ${items.length}
                </h3>
                <ul class="item-list">
                    <li>
                        <div class="item-title">${item.title || 'Untitled'}</div>
                        ${item.description ? `<div class="item-desc">${item.description}</div>` : ''}
                        ${linkHtml}
                    </li>
                </ul>
            </div>
        `;
    }

    container.innerHTML = html;

    if (items.length <= 1) {
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
    } else {
        if (prevBtn) prevBtn.disabled = (pageItemIndex[pageKey] === 0);
        if (nextBtn) nextBtn.disabled = (pageItemIndex[pageKey] === items.length - 1);
    }
}

function pageItemNext(pageKey) {
    const items = PAGE_DATA[pageKey]?.items || [];
    if (pageItemIndex[pageKey] < items.length - 1) {
        pageItemIndex[pageKey]++;
        renderGenericPage(pageKey);
        document.querySelector('.main-scroll-area').scrollTop = 0;
    }
}

function pageItemPrev(pageKey) {
    if (pageItemIndex[pageKey] > 0) {
        pageItemIndex[pageKey]--;
        renderGenericPage(pageKey);
        document.querySelector('.main-scroll-area').scrollTop = 0;
    }
}

// ============================================================
// 📜 RSR & TOOLS
// ============================================================
function renderRsrPage() {
    const container = document.getElementById('rsrContent');
    if (!container) return;
    container.innerHTML = PAGE_DATA.rsr?.content || '';
}

function renderToolsPage() {
    const container = document.getElementById('toolsContent');
    if (!container) return;
    container.innerHTML = PAGE_DATA.tools?.content || '';
}

// ============================================================
// 💼 JOBS PAGE
// ============================================================
function renderJobsPage() {
    const titleEl = document.getElementById('jobsPageTitle');
    const counterEl = document.getElementById('jobsPageCounter');
    const badgeEl = document.getElementById('totalJobsBadge');
    const catLabelEl = document.getElementById('selectedCategoryLabel');
    const subFilterEl = document.getElementById('subCategoryFilter');
    const grid = document.getElementById('jobsGrid');
    const countDisplay = document.getElementById('jobCountDisplay');
    const detailDisplay = document.getElementById('jobDetailDisplay');

    const publicJobs = jobsData.filter(j => j.visibility !== 'private');

    let filtered;
    let info;

    if (showAllJobsMode) {
        filtered = publicJobs;
        info = { label: '📋 All Jobs', icon: '📋',
            detail: 'Central • Rajasthan • Private — All Categories' };
        if (titleEl) titleEl.textContent = '💼 All Jobs';
        if (catLabelEl) catLabelEl.textContent = info.label;
        if (subFilterEl) subFilterEl.style.display = 'none';
    } else {
        filtered = publicJobs.filter(j => j.jobType === currentCategory);
        if (currentSubCategory !== 'all') {
            const subDisplay = SUB_CATEGORIES[currentCategory].find(s => s.toLowerCase() === currentSubCategory);
            if (subDisplay && subDisplay !== 'All') {
                filtered = filtered.filter(j => j.subCat === subDisplay);
            }
        }
        info = CATEGORY_INFO[currentCategory];
        const total = publicJobs.filter(j => j.jobType === currentCategory).length;
        if (titleEl) titleEl.textContent = info.icon + ' ' + info.label + ' Jobs';
        if (catLabelEl) catLabelEl.textContent = info.label;
        if (badgeEl) badgeEl.textContent = `Total: ${total}`;
        if (subFilterEl) {
            subFilterEl.style.display = 'flex';
            const subs = SUB_CATEGORIES[currentCategory] || ['All'];
            subFilterEl.innerHTML = subs.map(s =>
                `<button class="sub-btn ${(s === 'All' && currentSubCategory === 'all') || s.toLowerCase() === currentSubCategory ? 'active' : ''}" onclick="filterSubCategory('${s.toLowerCase()}')">${s === 'All' ? '📌 All' : s}</button>`
            ).join('');
        }
    }

    if (counterEl) counterEl.textContent = `${filtered.length} jobs`;
    if (badgeEl && showAllJobsMode) badgeEl.textContent = `Total: ${publicJobs.length}`;
    if (countDisplay) countDisplay.innerHTML = info.icon + ' ' + (showAllJobsMode ? 'All' : info.label) + ' Jobs: <span id="jobCount">' + filtered.length + '</span>';
    if (detailDisplay) detailDisplay.textContent = info.detail;

    const sidebarTotal = document.getElementById('totalJobsSidebar');
    if (sidebarTotal) sidebarTotal.textContent = publicJobs.length;

    renderJobsGrid(filtered, grid);
}

function filterSubCategory(sub) {
    currentSubCategory = sub;
    renderJobsPage();
}

function renderJobsGrid(jobs, grid) {
    if (!grid) return;
    grid.innerHTML = '';
    if (jobs.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--text-light);font-size:14px;">No jobs available in this category</div>`;
        return;
    }
    const iconMap = { central: '🏛️', state: '🏜️', private: '💼' };
    jobs.forEach((job) => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <div class="job-icon">${iconMap[job.jobType] || '📌'}</div>
            <div class="job-title">${job.title || 'Untitled'}</div>
            <div class="job-meta">${job.department || ''} | ${job.post || ''}</div>
            <div class="job-meta" style="font-size:10px;opacity:0.5;">${job.eligibility || ''}</div>
        `;
        const idx = jobsData.indexOf(job);
        card.addEventListener('click', () => openDetail(idx));
        grid.appendChild(card);
    });
}

// ============================================================
// 🔍 DETAIL OVERLAY
// ============================================================
function openDetail(index) {
    const job = jobsData[index];
    if (!job) return;
    const overlay = document.getElementById('detailOverlay');
    const body = document.getElementById('detailBody');
    const typeLabels = { central: '🇮🇳 Central Govt.', state: '🏜️ Rajasthan Govt.', private: '💼 Private' };
    const iconMap = { central: '🏛️', state: '🏜️', private: '💼' };
    body.innerHTML = `
        <div class="detail-icon">${iconMap[job.jobType] || '💼'}</div>
        <h2>${job.title || 'Untitled'}</h2>
        <div class="detail-section">
            <p style="margin:4px 0;"><strong>🏢 Department:</strong> ${job.department || '-'}</p>
            <p style="margin:4px 0;"><strong>📌 Post:</strong> ${job.post || '-'}</p>
            <p style="margin:4px 0;"><strong>📂 Job Type:</strong> ${typeLabels[job.jobType] || job.jobType}</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;margin:10px 0;">
            <p><strong>🎓 Eligibility:</strong> ${job.eligibility || '-'}</p>
            <p><strong>📅 Age Limit:</strong> ${job.age || '-'}</p>
            <p><strong>⏳ Last Date:</strong> ${job.lastDate || '-'}</p>
            <p><strong>💼 Experience:</strong> ${job.experience || 'Freshers'}</p>
        </div>
        ${job.description ? `<div class="detail-desc"><p><strong>📝 Description:</strong></p><div>${job.description}</div></div>` : ''}
        <div style="margin:12px 0;">
            ${job.website ? `<p><strong>🌐 Website:</strong> <a href="${job.website}" target="_blank" style="color:var(--secondary-blue);text-decoration:underline;font-weight:600;">${job.website}</a></p>` : ''}
            ${job.applyLink ? `<p><strong>📝 Apply:</strong> <a href="${job.applyLink}" target="_blank" style="color:var(--secondary-blue);text-decoration:underline;font-weight:600;">${job.applyLink}</a></p>` : ''}
        </div>
        <div style="margin-top:16px;display:flex;flex-wrap:wrap;gap:8px;">
            <span class="detail-link secondary" onclick="closeDetail()">✕ Close</span>
            ${job.applyLink ? `<a href="${job.applyLink}" target="_blank" class="detail-link"><i class="fas fa-external-link-alt"></i> Apply Now</a>` : ''}
        </div>
    `;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetail(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('detailOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================================
// 🔔 LATEST UPDATES SCROLL
// ============================================================
function initLatestUpdates() {
    const list = document.getElementById('latestUpdatesList');
    if (!list) return;
    const doubled = [...LATEST_UPDATES, ...LATEST_UPDATES];
    list.innerHTML = doubled.map(txt => `<li>${txt}</li>`).join('');
}

// ============================================================
// 🎠 HOME SLIDES CAROUSEL
// ============================================================
let slideIndex = 0;
let slideInterval = null;
const SLIDES = [
    { title: '🚀 Welcome to Dream Josh', description: 'Your ultimate career and study platform' },
    { title: '📚 Study Materials', description: 'Get access to premium study resources' },
    { title: '🏛️ Govt. Jobs', description: 'Find the latest government job updates' }
];

function renderSlidesCarousel() {
    const container = document.getElementById('slidesCarouselContainer');
    if (!container) return;
    if (SLIDES.length === 0) { container.innerHTML = ''; return; }

    let html = `
        <div style="position:relative;overflow:hidden;border-radius:12px;background:var(--bg-color);border:1px solid var(--border-color);">
            <div id="slideTrack" style="display:flex;transition:transform 0.5s ease;">
                ${SLIDES.map((slide) => `
                    <div style="min-width:100%;padding:20px;text-align:center;background:var(--card-bg);">
                        <div style="height:160px;background:var(--secondary-blue);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:44px;">🚀</div>
                        <div style="font-size:18px;font-weight:700;color:var(--primary-blue);margin:8px 0 4px;">${slide.title}</div>
                        <div style="font-size:13px;color:var(--text-light);">${slide.description}</div>
                    </div>
                `).join('')}
            </div>
            <button onclick="changeSlide(-1)" style="position:absolute;top:50%;left:10px;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:#fff;border:none;padding:8px 14px;border-radius:50%;cursor:pointer;font-size:18px;">‹</button>
            <button onclick="changeSlide(1)" style="position:absolute;top:50%;right:10px;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:#fff;border:none;padding:8px 14px;border-radius:50%;cursor:pointer;font-size:18px;">›</button>
            <div id="slideDots" style="display:flex;justify-content:center;gap:6px;padding:10px 0;">
                ${SLIDES.map((_, idx) => `<button onclick="goToSlide(${idx})" style="width:10px;height:10px;border-radius:50%;background:${idx === 0 ? 'var(--secondary-blue)' : 'var(--border-color)'};cursor:pointer;border:none;padding:0;" class="slide-dot"></button>`).join('')}
            </div>
        </div>
    `;
    container.innerHTML = html;
    slideIndex = 0;
    updateSlidePosition();
    startSlideAutoPlay();
}

function updateSlidePosition() {
    const track = document.getElementById('slideTrack');
    if (!track) return;
    const slides = track.querySelectorAll(':scope > div');
    if (slides.length === 0) return;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    document.querySelectorAll('.slide-dot').forEach((dot, idx) => {
        dot.style.background = idx === slideIndex ? 'var(--secondary-blue)' : 'var(--border-color)';
        dot.style.transform = idx === slideIndex ? 'scale(1.2)' : 'scale(1)';
    });
}

function changeSlide(dir) { slideIndex += dir; updateSlidePosition(); }
function goToSlide(idx) { slideIndex = idx; updateSlidePosition(); }
function startSlideAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        const track = document.getElementById('slideTrack');
        if (!track) { clearInterval(slideInterval); return; }
        const slides = track.querySelectorAll(':scope > div');
        if (slides.length <= 1) return;
        slideIndex = (slideIndex + 1) % slides.length;
        updateSlidePosition();
    }, 5000);
}

// ============================================================
// 🔔 TOAST
// ============================================================
function showToast(msg, type = 'info') {
    const t = document.createElement('div');
    t.className = 'toast ' + type;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2500);
}
