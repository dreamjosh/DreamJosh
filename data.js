// ============================================================
// 📦 LATEST UPDATES
// ============================================================
const LATEST_UPDATES = [
    '🔴 SSC CGL 2026 Notification जल्दी आ रही है',
    '🟢 RPSC RAS 2026 की तैयारी शुरू करें',
    '🔵 REET 2026 के लिए आवेदन प्रक्रिया शुरू',
    '🟠 Google India में 500+ नई भर्तियाँ',
    '🟣 UPSC 2026 का नोटिफिकेशन जारी',
    '🟡 Railway RRB NTPC की तैयारी करें',
    '🟤 SBI PO 2026 की भर्ती शुरू',
    '⚫ Rajasthan Police Constable भर्ती',
    '⚪ IBPS Clerk 2026 Notification',
    '🔶 State PSC Exams की तैयारी करें',
    '🔷 SSC CHSL 2026 Notification जल्द',
    '🔸 केंद्रीय बजट 2026 की मुख्य बातें'
];

// ============================================================
// 📄 PAGE DATA
// ============================================================
const PAGE_DATA = {
    career: {
        title: '🎯 Career',
        content: `
            <h2>🎯 Career Guidance</h2>
            <p>Explore various career options and find the right path for your future.</p>
            <p><strong>🔹 Get expert guidance:</strong> Our career counselors help you choose the right career path.</p>
            <p>नीचे दिए गए विभिन्न करियर विकल्पों में से अपने रुचि के अनुसार चुनें।</p>
        `,
        items: [
            { title: '🏛️ Government Jobs', description: 'UPSC, SSC, Banking, Railway, Defence, Police' },
            { title: '💼 Private Jobs', description: 'IT, Finance, Marketing, HR, Healthcare' },
            { title: '📚 Teaching & Education', description: 'CTET, REET, B.Ed, M.Ed career paths' },
            { title: '🏦 Banking & Finance', description: 'IBPS, SBI, RBI, SEBI, NABARD' },
            { title: '📄 SSC & Staff Selection', description: 'SSC CGL, CHSL, MTS, JE, CPO' },
            { title: '🚂 Railway Recruitment', description: 'RRB NTPC, Group D, ALP, JE' },
            { title: '🛡️ Defence Services', description: 'NDA, CDS, AFCAT, Indian Army, Navy, Air Force' },
            { title: '👮 Police & Paramilitary', description: 'State Police, CAPF, BSF, CRPF, CISF' },
            { title: '⚙️ Engineering & Technology', description: 'GATE, PSU, ISRO, DRDO, BARC' },
            { title: '🏥 Medical & Healthcare', description: 'NEET, AIIMS, Nursing, Pharmacy' },
            { title: '⚖️ Law & Judiciary', description: 'CLAT, Judicial Services, LLB, LLM' },
            { title: '💻 IT & Software', description: 'Software Engineer, Data Science, AI/ML' }
        ]
    },
    more: {
        title: '⚙️ More',
        content: `
            <h2>📚 Study & Books</h2>
            <p>All study materials and books in one place.</p>
        `,
        items: [
            { title: '📝 Complete UPSC Notes', description: 'Detailed Subject-wise notes for UPSC Prelims and Mains.' },
            { title: '📄 SSC CGL Practice Set', description: '20 Practice sets with answer keys and explanations.' },
            { title: '📑 RBI Grade B Previous Papers', description: 'Previous year papers with detailed solutions.' },
            { title: '🔁 Quick Revision Notes: Maths', description: 'Short revision notes for formula and concepts.' },
            { title: '📚 Competitive Exam Books', description: 'Best books for UPSC, SSC, Banking, Railway' },
            { title: '🏜️ Rajasthan GK', description: 'Rajasthan General Knowledge books' },
            { title: '🧠 General Knowledge', description: 'GK books for all competitive exams' },
            { title: '🔥 Motivation Books', description: 'Top motivational and self-help books' }
        ]
    },
    service: {
        title: '🛠️ Services',
        content: `
            <h2>🛠️ Services</h2>
            <p>Welcome to Dream Josh Services. Find all types of services here with direct links.</p>
        `,
        items: [
            { title: '📝 Resume Writing Service', description: 'Professional resume writing for all career levels.', link: 'https://dreamjosh.com/resume' },
            { title: '🏛️ Passport Services', description: 'Complete passport assistance and verification.', link: 'https://passport.gov.in' },
            { title: '📚 Online Tutoring', description: 'One-on-one tutoring for competitive exams.', link: 'https://dreamjosh.com/tutoring' },
            { title: '💼 Career Counseling', description: 'Expert career guidance and counseling services.', link: 'https://dreamjosh.com/counseling' },
            { title: '🪪 Aadhar Services', description: 'Aadhar card update and enrollment assistance.', link: 'https://uidai.gov.in' },
            { title: '🎯 Mock Test Series', description: 'Online mock tests for all competitive exams.', link: 'https://dreamjosh.com/tests' },
            { title: '📄 Document Verification', description: 'Document attestation and verification services.', link: 'https://dreamjosh.com/verify' },
            { title: '💻 IT Services', description: 'Web development and digital marketing services.', link: 'https://dreamjosh.com/it' },
            { title: '🎓 Scholarship Assistance', description: 'Help with scholarship applications and guidance.', link: 'https://dreamjosh.com/scholarship' },
            { title: '🏦 Banking Services', description: 'Bank account opening and financial services.', link: 'https://dreamjosh.com/banking' }
        ]
    },
    blog: {
        title: '📝 Blog',
        content: `
            <h2>📝 Blog</h2>
            <p>Read our latest blog posts on various topics.</p>
        `,
        items: [
            { title: '💻 Technology', description: 'Latest tech news and updates' },
            { title: '📊 Business', description: 'Business and finance articles' },
            { title: '❤️ Lifestyle', description: 'Lifestyle and wellness tips' },
            { title: '🎨 Design', description: 'Design trends and tutorials' },
            { title: '📚 Education', description: 'Education tips and resources' },
            { title: '📰 News', description: 'Latest news and current affairs' }
        ]
    },
    rsr: {
        title: '📜 RSR',
        content: `
            <h2>📜 उपार्जित अवकाश एवं उनकी देयता-नियम 91</h2>
            <h3>उपार्जित अवकाश</h3>
            <p>उपार्जित अवकाश एवं उनकी देयताः नियम 91(1)(क) के अनुसार राज्य कर्मचारी जो स्थायी या अस्थायी है, को एक कलेण्डर वर्ष में 30 दिन का उपार्जित अवकाश देय होगा।</p>
            <p>नियम 91(1)(ग) के अनुसार कर्मचारी अपने लेखों में 1 जनवरी 1998 से अधिकतम 300 दिनों का उपार्जित अवकाश जमा रख सकता है।</p>
            <p>नियम 91(2)(a)(i) के अनुसार प्रत्येक राज्य कर्मचारी के उपार्जित अवकाश लेखों में प्रत्येक कलैण्डर वर्ष में दो बार, 1 जनवरी को 15 तथा 1 जुलाई को 15 दिन के उपार्जित अवकाश, अग्रिम के रूप में जमा किये जायेंगे।</p>
            <h3>Privilege leave</h3>
            <p><strong>Admissibility of privilege leave —</strong></p>
            <p>(1)(a) A Government servant whether temporary or permanent shall be entitled to privilege leave of 30 days in a calendar year.</p>
            <p>(2) The maximum privilege leave that may be granted at a time to a Government servant shall be 120 days.</p>
        `,
        items: []
    },
    tools: {
        title: '🛠️ Tools',
        content: `
            <h2>🛠️ Tools</h2>
            <p>All tools will be available here soon.</p>
            <p>यहाँ सभी टूल्स जल्द उपलब्ध होंगे।</p>
        `,
        items: []
    }
};

// ============================================================
// 📦 JOBS DATA
// ============================================================
const DEFAULT_JOBS = [
    { id: 1, title: 'IAS (Indian Administrative Service)', jobType: 'central', subCat: 'Administrative',
        department: 'UPSC', post: 'IAS Officer', eligibility: 'Graduate (Any Discipline)', age: '21-32 Years',
        lastDate: '2026-06-01', experience: 'Freshers can apply',
        description: '<b>IAS</b> is the premier civil service of India.',
        website: 'https://upsc.gov.in', applyLink: 'https://upsc.gov.in/apply', visibility: 'public' },
    { id: 2, title: 'IPS (Indian Police Service)', jobType: 'central', subCat: 'Administrative', department: 'UPSC',
        post: 'IPS Officer', eligibility: 'Graduate', age: '21-32 Years', lastDate: '2026-06-01',
        experience: 'Freshers',
        description: '<b>IPS</b> maintains law and order.',
        website: 'https://upsc.gov.in', applyLink: 'https://upsc.gov.in/apply', visibility: 'public' },
    { id: 3, title: 'RBI Grade B Officer', jobType: 'central', subCat: 'Banking', department: 'RBI',
        post: 'Grade B Officer', eligibility: 'Graduate', age: '21-30 Years', lastDate: '2026-07-10',
        experience: 'Freshers',
        description: '<b>RBI Grade B</b> is the most prestigious banking exam.',
        website: 'https://rbi.org.in', applyLink: 'https://rbi.org.in/apply', visibility: 'public' },
    { id: 4, title: 'SBI PO (Probationary Officer)', jobType: 'central', subCat: 'Banking', department: 'SBI',
        post: 'PO', eligibility: 'Graduate', age: '21-30 Years', lastDate: '2026-07-15', experience: 'Freshers',
        description: '<b>SBI PO</b> is the top banking job in India.',
        website: 'https://sbi.co.in', applyLink: 'https://sbi.co.in/apply', visibility: 'public' },
    { id: 5, title: 'RRB NTPC (Non-Technical)', jobType: 'central', subCat: 'Railway', department: 'RRB',
        post: 'Various NTPC Posts', eligibility: '12th/Graduate', age: '18-33 Years', lastDate: '2026-05-30',
        experience: 'Freshers',
        description: '<b>RRB NTPC</b> covers posts like Station Master, Goods Guard, Clerk.',
        website: 'https://rrb.gov.in', applyLink: 'https://rrb.gov.in/apply', visibility: 'public' },
    { id: 6, title: 'RAS (Rajasthan Administrative Service)', jobType: 'state', subCat: 'Administrative',
        department: 'RPSC', post: 'RAS Officer', eligibility: 'Graduate', age: '21-40 Years',
        lastDate: '2026-07-20', experience: 'Freshers',
        description: '<b>RAS</b> is the state civil service of Rajasthan.',
        website: 'https://rpsc.rajasthan.gov.in', applyLink: 'https://rpsc.rajasthan.gov.in/apply',
        visibility: 'public' },
    { id: 7, title: 'Rajasthan Police Constable', jobType: 'state', subCat: 'Police',
        department: 'Rajasthan Police', post: 'Constable', eligibility: '10+2', age: '18-28 Years',
        lastDate: '2026-09-01', experience: 'Freshers',
        description: '<b>Rajasthan Police Constable</b> entry-level post.',
        website: 'https://police.rajasthan.gov.in', applyLink: 'https://police.rajasthan.gov.in/apply',
        visibility: 'public' },
    { id: 8, title: 'REET (Rajasthan Eligibility Exam)', jobType: 'state', subCat: 'Teaching',
        department: 'RBSE', post: 'Teacher', eligibility: 'Graduate + B.Ed', age: '18-40 Years',
        lastDate: '2026-08-15', experience: 'Freshers',
        description: '<b>REET</b> for Rajasthan teacher recruitment.',
        website: 'https://rajeduboard.rajasthan.gov.in', applyLink: 'https://rajeduboard.rajasthan.gov.in/apply',
        visibility: 'public' },
    { id: 9, title: 'Software Engineer – Google India', jobType: 'private', subCat: 'IT/Software',
        department: 'IT/Software', post: 'Software Engineer', eligibility: 'B.Tech/BE', age: '22-35 Years',
        lastDate: '2026-04-15', experience: '2-5 Years',
        description: '<b>Google India</b> hiring SDEs for Bangalore and Hyderabad.',
        website: 'https://careers.google.com', applyLink: 'https://careers.google.com/apply', visibility: 'public' },
    { id: 10, title: 'Finance Manager – HSBC India', jobType: 'private', subCat: 'Finance',
        department: 'Finance/Banking', post: 'Finance Manager', eligibility: 'CA/CFA/MBA', age: '25-40 Years',
        lastDate: '2026-05-10', experience: '3-7 Years',
        description: '<b>HSBC India</b> hiring Finance Managers for corporate banking.',
        website: 'https://www.hsbc.com/careers', applyLink: 'https://www.hsbc.com/careers/apply',
        visibility: 'public' },
    { id: 11, title: 'Marketing Executive – Amazon India', jobType: 'private', subCat: 'Marketing',
        department: 'Marketing/Sales', post: 'Marketing Executive', eligibility: 'MBA/BBA', age: '22-30 Years',
        lastDate: '2026-06-01', experience: '1-3 Years',
        description: '<b>Amazon India</b> hiring Marketing Executives.',
        website: 'https://amazon.jobs', applyLink: 'https://amazon.jobs/apply', visibility: 'public' }
];

const CATEGORY_INFO = {
    central: { label: '🏛️ Central Govt.', icon: '🇮🇳',
        detail: 'UPSC • SSC • Railway • Banking • Defence • Police • Post • Teaching • Medical • PSU • Technical • Court' },
    state: { label: '🏜️ Rajasthan Govt.', icon: '🏜️',
        detail: 'RPSC • RSMSSB • Police • Revenue • Education • Forest • Health • Technical • Judicial • Agriculture' },
    private: { label: '💼 Private', icon: '💼',
        detail: 'IT • Finance • Marketing • HR • Manufacturing • Healthcare • Education • Hospitality • Logistics' }
};

const SUB_CATEGORIES = {
    central: ['All', 'Administrative', 'Banking', 'Railway', 'Defence', 'Teaching', 'Medical', 'PSU', 'Police', 'Other'],
    state: ['All', 'Administrative', 'Police', 'Revenue', 'Teaching', 'Forest', 'Technical', 'Medical', 'Judicial', 'Other'],
    private: ['All', 'IT/Software', 'Finance', 'Marketing', 'HR', 'Manufacturing', 'Healthcare', 'Education', 'Hospitality', 'Other']
};

// ============================================================
// 🌐 GLOBAL STATE
// ============================================================
let jobsData = JSON.parse(JSON.stringify(DEFAULT_JOBS));
let currentCategory = 'central';
let currentSubCategory = 'all';
let showAllJobsMode = false;
const pageItemIndex = { career: 0, more: 0, service: 0, blog: 0 };
