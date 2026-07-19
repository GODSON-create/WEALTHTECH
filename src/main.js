// ---------- COMPREHENSIVE CHAMPIONSHIPS DATA ----------
const TRACKS_METADATA = {
  founder: {
    name: 'Founder Challenge',
    icon: '💼',
    tagline: 'Launch scalable startups, acquire customers, and pitch for venture funding.',
    desc: 'The centerpiece arena for builders looking to build the next generation of African unicorns. This track guides you through customer discovery, MVP validation, unit economics, and formal venture pitching. Prove your traction metrics, map out target addresses, and stand out before early-stage capital partners.',
    prizes: '🏆 $1,000 Reward Pool (Top 100 Payouts) + Direct Equity-free Grants',
    timeline: 'Phase 1: June 15 (MVP) | Phase 2: July 10 (Traction) | Phase 3: Aug 1 (Final Pitches)',
    who: ['Aspiring tech entrepreneurs and early-stage student founders', 'Business developers looking to formulate structured venture models'],
    outcomes: ['Draft an investor-ready investment deck', 'Master customer development frameworks', 'Pitch directly to active early-stage venture capital firms'],
    rules: ['Must submit a functional MVP or validated interactive prototype.', 'Submissions must include user metrics (e.g. signup lists or analytics logs).'],
    judging: ['Market Validation (30%)', 'Execution Capability (30%)', 'Traction Metrics (20%)', 'Presentation Clarity (20%)'],
    checkoutSlug: 'dot-demo-founder-membership',
    whatsapp: 'https://chat.whatsapp.com/founder-mock-id'
  },
  wealthtech: {
    name: 'WealthTech Challenge',
    icon: '📈',
    tagline: 'Design retail savings architectures, indexes, and investment modules.',
    desc: 'WealthTech is reshaping capital accumulation across emerging markets. In this track, you will design retail financial structures, cooperative micro-savings systems, yield-bearing distribution assets, or asset fractionalization systems. You will construct interfaces and business models designed to solve liquidity gaps and democratize investments.',
    prizes: '🏆 $1,000 Reward Pool (Top 100 Payouts) + SEC Sandbox Placements',
    timeline: 'Phase 1: June 18 (Math Models) | Phase 2: July 12 (KYC Flow) | Phase 3: Aug 3 (Final Deck)',
    who: ['Finance students and quantitative analysts', 'Fintech builders and product designers'],
    outcomes: ['Formulate structured savings smart contracts', 'Design micro-investment transaction interfaces'],
    rules: ['Solutions must present clean fee structures and mathematics indices.', 'UI models must demonstrate interest rate calculators.'],
    judging: ['Financial Modeling (30%)', 'UX Clarity (30%)', 'Regulatory Compliance (20%)', 'Security Simulation (20%)'],
    checkoutSlug: 'dot-demo-wealthtech-membership',
    whatsapp: 'https://chat.whatsapp.com/wealthtech-mock-id'
  },
  gaming: {
    name: 'Gaming Championship',
    icon: '🎮',
    tagline: 'Compete in national esports, bracketed strategy systems, and guild nodes.',
    desc: 'The ultimate arena for gamers, strategists, and esports enthusiasts. DOT DEMO Gaming brings together Nigeria&apos;s finest strategy players in bracketed tournament pools. Battle for campus dominance, build your national competitor index, and establish local guild nodes inside your university chapter.',
    prizes: '🏆 $1,000 Reward Pool (Top 100 Payouts) + Pro Gaming Hardware Packs',
    timeline: 'Phase 1: June 20 (Local Brackets) | Phase 2: July 15 (State Finals) | Phase 3: Aug 5 (National streams)',
    who: ['Esports competitors and tactical players', 'Strategy coordinators'],
    outcomes: ['Compete in live-streamed matches', 'Establish local campus guilds'],
    rules: ['Match coordinates must be played on verified accounts.', 'Tournament sportsmanship rules are strictly enforced.'],
    judging: ['Match Victories (40%)', 'Consistency (30%)', 'Guild node count (30%)'],
    checkoutSlug: 'dot-demo-gaming-membership',
    whatsapp: 'https://chat.whatsapp.com/gaming-mock-id'
  },
  creator: {
    name: 'Creator Championship',
    icon: '🎬',
    tagline: 'Launch high-converting newsletters, viral campaigns, and media networks.',
    desc: 'The future belongs to those who control distribution. In the Creator Championship, you will construct modern content architectures—launching growing newsletters, editing high-impact visual segments, mapping content funnels, and building a direct subscriber base that bypasses algorithmic controls.',
    prizes: '🏆 $1,000 Reward Pool (Top 100 Payouts) + Brand Content Placements',
    timeline: 'Phase 1: June 22 (Channel launch) | Phase 2: July 18 (Analytics log) | Phase 3: Aug 8 (Sponsors deck)',
    who: ['Writers, copywriters, and video editors', 'Social media growth managers'],
    outcomes: ['Scale a newsletter to 500 organic signups', 'Master high-impact hooks and scripts'],
    rules: ['Must show live subscription metrics.', 'Content must be original and self-produced.'],
    judging: ['Hook Strategy (35%)', 'Growth Velocity (35%)', 'Editing Quality (30%)'],
    checkoutSlug: 'dot-demo-creator-membership',
    whatsapp: 'https://chat.whatsapp.com/creator-mock-id'
  },
  design: {
    name: 'Design Championship',
    icon: '🎨',
    tagline: 'Craft world-class design systems, branding libraries, and interfaces.',
    desc: 'Design is not just how it looks; it is how it works. This championship challenges visual thinkers to construct comprehensive brand systems, design languages, user flows, and landing pages that feel premium and convert instantly. Recreate premium aesthetics like glassmorphism, vertical alignments, and sleek dark modes.',
    prizes: '🏆 $1,000 Reward Pool (Top 100 Payouts) + Design Studio Fellowships',
    timeline: 'Phase 1: June 25 (UI Kit) | Phase 2: July 20 (User Study) | Phase 3: Aug 10 (Interactive Frames)',
    who: ['UI/UX designers and layout artists', 'Visual designers wishing to build verified portfolios'],
    outcomes: ['Construct complete Figma component libraries', 'Perform Usability Testing validation indices'],
    rules: ['Submissions must show clean auto-layouts on Figma.', 'Must submit a 3-minute Loom explaining flow choices.'],
    judging: ['Aesthetics & Grids (40%)', 'UX Rationale (30%)', 'Component Hygiene (30%)'],
    checkoutSlug: 'dot-demo-design-membership',
    whatsapp: 'https://chat.whatsapp.com/design-mock-id'
  },
  ai: {
    name: 'AI Innovation Challenge',
    icon: '🤖',
    tagline: 'Deploy cognitive LLM agents, vector databases, and automations.',
    desc: 'Move past basic ChatGPT prompts. In this track, you will write custom code to orchestrate LLM workflows, initialize vector databases, build custom Retrieval-Augmented Generation (RAG) layers, and deploy automated software agents that solve actual operational problems in emerging markets.',
    prizes: '🏆 $1,000 Reward Pool (Top 100 Payouts) + $5,000 API Credits',
    timeline: 'Phase 1: June 28 (Agent draft) | Phase 2: July 22 (Vector Index) | Phase 3: Aug 12 (Hosted demo)',
    who: ['Python backend engineers and ML majors', 'Process automation developers'],
    outcomes: ['Deploy custom active agents and RAG loops', 'Earn compute tokens and hardware placements'],
    rules: ['All code repositories must be public on GitHub.', 'Agent demo must be functional and testable.'],
    judging: ['Technical Complexity (40%)', 'Operational Utility (30%)', 'Code Hygiene (30%)'],
    checkoutSlug: 'dot-demo-ai-membership',
    whatsapp: 'https://chat.whatsapp.com/ai-mock-id'
  },
  coding: {
    name: 'Coding Championship',
    icon: '💻',
    tagline: 'Deploy full-stack web applications, transaction ledgers, and secure APIs.',
    desc: 'The engine room of the modern economy. The Coding Championship challenges developers to deploy robust, high-performance web systems under strict timing limits. Integrate databases, secure API layers, optimize index performance, and deploy functional transaction gateways that scale.',
    prizes: '🏆 $1,000 Reward Pool (Top 100 Payouts) + Cloud server credits',
    timeline: 'Phase 1: June 30 (API index) | Phase 2: July 25 (Database link) | Phase 3: Aug 15 (Vercel deploy)',
    who: ['Full-stack coders and software developers', 'CS majors wanting to prove job readiness'],
    outcomes: ['Deploy secure live transaction routes', 'Build database structures optimized for load speed'],
    rules: ['Must submit a hosted application URL with repository code.', 'Webpage must resolve under 2.5s on mobile configurations.'],
    judging: ['Functionality (40%)', 'System Speed (30%)', 'Data Security (30%)'],
    checkoutSlug: 'dot-demo-coding-membership',
    whatsapp: 'https://chat.whatsapp.com/coding-mock-id'
  },
  music: {
    name: 'Music Championship',
    icon: '🎵',
    tagline: 'Produce original tracks, sound design libraries, and audio signatures.',
    desc: 'Audio is the emotional core of branding, gaming, and storytelling. In the Music Championship, you will produce original tracks, synthesize audio signatures, compose background libraries for interactive applications, and master the business of sonic branding and licensing.',
    prizes: '🏆 $1,000 Reward Pool (Top 100 Payouts) + Audio Equipment Grants',
    timeline: 'Phase 1: July 2 (Composition script) | Phase 2: July 28 (Session Mix) | Phase 3: Aug 18 (Master track)',
    who: ['Audio producers and beatmakers', 'Sound designers wishing to master licensing'],
    outcomes: ['Compose sound guides for apps and games', 'Master digital copyright registries'],
    rules: ['Tracks must not contain uncleared copyright samples.', 'Must present session screenshots to prove authorship.'],
    judging: ['Melodic Design (40%)', 'Acoustic Mix (30%)', 'Commercial Fit (30%)'],
    checkoutSlug: 'dot-demo-music-membership',
    whatsapp: 'https://chat.whatsapp.com/music-mock-id'
  },
  speaking: {
    name: 'Public Speaking Championship',
    icon: '🎤',
    tagline: 'Deliver high-impact keynotes, VC startup pitches, and product stories.',
    desc: 'The ability to communicate is the ultimate multiplier. In this track, you will master the dynamics of persuasive communication—structuring VC startup pitches, delivering inspiring keynotes, and using product storytelling to capture attention, build trust, and drive conversion.',
    prizes: '🏆 $1,000 Reward Pool (Top 100 Payouts) + Speaker Fellowships',
    timeline: 'Phase 1: July 5 (Script draft) | Phase 2: July 30 (Video pitch) | Phase 3: Aug 20 (Live virtual stage)',
    who: ['Debaters and keynote speakers', 'Founders wanting to pitch investor decks'],
    outcomes: ['Structure clean, high-converting product stories', 'Master voice pacing and stage presence'],
    rules: ['Pitches must be delivered live or in single-take video files.', 'Slides must be clean, minimal, and visually supportive.'],
    judging: ['Message Structure (35%)', 'Vocal Delivery (35%)', 'Slide support (30%)'],
    checkoutSlug: 'dot-demo-speaking-membership',
    whatsapp: 'https://chat.whatsapp.com/speaking-mock-id'
  },
  chess: {
    name: 'Chess Championship',
    icon: '♟',
    tagline: 'Showcase strategic mastery in national virtual chess tournaments.',
    desc: 'Strategic thinking is the core of every great builder. The Chess Championship coordinates players across institutions in bracketed chess matches. Solve tactical patterns, advance through competitive virtual matches, and earn your place on the grand national leaderboard.',
    prizes: '🏆 $1,000 Reward Pool (Top 100 Payouts) + Grandmaster sets',
    timeline: 'Phase 1: July 8 (Puzzle index) | Phase 2: Aug 1 (Virtual Brackets) | Phase 3: Aug 25 (Live Arena)',
    who: ['Chess players and algorithmic planners', 'Strategy game enthusiasts'],
    outcomes: ['Climb official institutional chess leaderboard listings', 'Earn ranking credentials logged in your Builder Passport'],
    rules: ['Matches played on monitored anti-cheat servers.', 'Blitz/Rapid time limits are strictly monitored.'],
    judging: ['Bracket Wins (60%)', 'Engine Move Accuracy (20%)', 'Chapter engagement (20%)'],
    checkoutSlug: 'dot-demo-chess-membership',
    whatsapp: 'https://chat.whatsapp.com/chess-mock-id'
  }
};

// ---------- TELEMETRY INDEX ----------
function getTelemetry() {
  let stats = localStorage.getItem('dot_telemetry');
  if (!stats) {
    stats = {
      visitors: 18450,
      registrations: 4230,
      purchases: 1120,
      partnersApplied: 48,
      revenue: 33600000,
      universityStandings: [
        { name: 'University of Lagos (UNILAG)', count: 345 },
        { name: 'Obafemi Awolowo University (OAU)', count: 268 },
        { name: 'University of Ibadan (UI)', count: 214 },
        { name: 'University of Nigeria (UNN)', count: 182 }
      ],
      partnerApplications: []
    };
    localStorage.setItem('dot_telemetry', JSON.stringify(stats));
  } else {
    stats = JSON.parse(stats);
  }
  return stats;
}

function saveTelemetry(stats) {
  localStorage.setItem('dot_telemetry', JSON.stringify(stats));
}

// Track page loading
(function() {
  const t = getTelemetry();
  t.visitors += 1;
  saveTelemetry(t);
})();

// ---------- ROUTER ----------
const appViewport = document.getElementById('app-viewport');

function routeChange() {
  const hash = window.location.hash || '#/';
  document.getElementById('mobileNavOverlay').classList.remove('active');
  window.scrollTo(0, 0);

  if (hash === '#/' || hash === '#') {
    renderGateway();
  } else if (hash === '#/student') {
    renderStudentPage();
  } else if (hash === '#/community') {
    renderCommunityPage();
  } else if (hash.startsWith('#/championship/')) {
    const trackId = hash.split('#/championship/')[1];
    renderChampionship(trackId);
  } else if (hash.startsWith('#/success')) {
    renderSuccess();
  } else if (hash === '#/admin') {
    renderAdmin();
  } else {
    renderNotFound();
  }
}

window.addEventListener('hashchange', routeChange);
window.addEventListener('DOMContentLoaded', routeChange);

// ---------- DIALOG POPUPS ----------
let currentSelectedTrackForModal = 'founder';

function openRegisterModal(trackId = 'founder') {
  currentSelectedTrackForModal = trackId;
  const modalHtml = `
    <div class="fixed-modal-wrap" id="regModal">
      <div class="modal-box">
        <button class="modal-close" onclick="closeRegisterModal()">&times;</button>
        <h3 class="modal-title">Complete Member Registration</h3>
        <p class="modal-subtitle">Secure your Builder Membership and register for the ${TRACKS_METADATA[trackId]?.name || 'Championship'}.</p>
        
        <form class="modal-form" id="modalRegForm">
          <div class="form-row">
            <div class="input-grp">
              <label>Full Name *</label>
              <input type="text" id="regName" placeholder="e.g. John Doe" required />
            </div>
            <div class="input-grp">
              <label>Email Address *</label>
              <input type="email" id="regEmail" placeholder="e.g. john@gmail.com" required />
            </div>
          </div>
          
          <div class="form-row">
            <div class="input-grp">
              <label>Phone Number *</label>
              <input type="tel" id="regPhone" placeholder="e.g. +234..." required />
            </div>
            <div class="input-grp">
              <label>WhatsApp Number</label>
              <input type="tel" id="regWhatsapp" placeholder="Same as phone if empty" />
            </div>
          </div>

          <div class="form-row">
            <div class="input-grp">
              <label>University Node *</label>
              <input type="text" id="regUni" placeholder="e.g. UNILAG" required />
            </div>
            <div class="input-grp">
              <label>Department</label>
              <input type="text" id="regDept" placeholder="e.g. Computer Science" />
            </div>
          </div>

          <div class="form-row">
            <div class="input-grp">
              <label>Level</label>
              <select id="regLevel">
                <option>100 Level</option>
                <option>200 Level</option>
                <option>300 Level</option>
                <option>400 Level</option>
                <option>500 Level</option>
                <option>Postgraduate</option>
              </select>
            </div>
            <div class="input-grp">
              <label>Referral Code (Optional)</label>
              <input type="text" id="regReferral" placeholder="e.g. AMB-LAG-102" />
            </div>
          </div>

          <div class="form-summary-alert">
            💡 One-time ₦30,000 Builder Membership contribution secures eligibility for all championships, WhatsApp networks, and scholarship assessments.
          </div>

          <button type="submit" class="btn-orange" style="width:100%; margin-top:16px;">
            Secure Membership & Checkout
          </button>
        </form>
      </div>
    </div>
  `;
  
  let div = document.getElementById('modal-mount');
  if (!div) {
    div = document.createElement('div');
    div.id = 'modal-mount';
    document.body.appendChild(div);
  }
  div.innerHTML = modalHtml;
  document.getElementById('modalRegForm').addEventListener('submit', handleFormSubmit);
}

window.openRegisterModal = openRegisterModal;

function closeRegisterModal() {
  const modal = document.getElementById('regModal');
  if (modal) modal.remove();
}

window.closeRegisterModal = closeRegisterModal;

function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const phone = document.getElementById('regPhone').value;
  const uni = document.getElementById('regUni').value;

  if (!name || !email || !phone || !uni) return;

  const t = getTelemetry();
  t.registrations += 1;
  
  const uniName = uni.trim().toUpperCase();
  const existingUni = t.universityStandings.find(u => u.name.toUpperCase().includes(uniName) || uniName.includes(u.name.toUpperCase()));
  if (existingUni) {
    existingUni.count += 1;
  } else {
    t.universityStandings.push({ name: uni, count: 1 });
  }
  
  t.purchases += 1;
  t.revenue += 30000;
  saveTelemetry(t);

  closeRegisterModal();

  const trackId = currentSelectedTrackForModal;
  const track = TRACKS_METADATA[trackId] || TRACKS_METADATA.founder;
  
  const successRedirect = encodeURIComponent(`${window.location.origin}/#/success?track=${trackId}`);
  const sellendaUrl = `https://www.sellenda.com.ng/events/${track.checkoutSlug}?redirect_success=${successRedirect}`;
  
  window.location.href = sellendaUrl;
}

// ---------- PARTNER APPLICATION DIALOG ----------
function openPartnerModal() {
  const modalHtml = `
    <div class="fixed-modal-wrap" id="partnerModal">
      <div class="modal-box">
        <button class="modal-close" onclick="closePartnerModal()">&times;</button>
        <h3 class="modal-title">Apply as Growth Partner</h3>
        <p class="modal-subtitle">Collaborate with DOT DEMO to unlock national capabilities for your students.</p>
        
        <form class="modal-form" id="partnerApplyForm">
          <div class="form-row">
            <div class="input-grp">
              <label>Community Name *</label>
              <input type="text" id="partCommName" placeholder="e.g. UNILAG Coding Hub" required />
            </div>
            <div class="input-grp">
              <label>Leader Full Name *</label>
              <input type="text" id="partLeaderName" placeholder="e.g. Jane Smith" required />
            </div>
          </div>

          <div class="form-row">
            <div class="input-grp">
              <label>Contact Email *</label>
              <input type="email" id="partEmail" placeholder="e.g. leader@community.org" required />
            </div>
            <div class="input-grp">
              <label>Contact Phone / WhatsApp *</label>
              <input type="tel" id="partPhone" placeholder="e.g. +234..." required />
            </div>
          </div>

          <div class="form-row">
            <div class="input-grp">
              <label>Approx. Member Count *</label>
              <select id="partSize">
                <option>&lt; 100 members</option>
                <option>100 - 500 members</option>
                <option>500 - 2,000 members</option>
                <option>2,000+ members</option>
              </select>
            </div>
            <div class="input-grp">
              <label>Partnership Model *</label>
              <select id="partModel">
                <option>Campus Partner (Campus Promotion)</option>
                <option>Community Partner (Branded Guild)</option>
                <option>Media Partner (Story Sharing)</option>
                <option>Strategic Partner (Collaborative programs)</option>
              </select>
            </div>
          </div>

          <div class="form-summary-alert">
            💡 Approved partners receive a dedicated referral link, a community metrics dashboard, co-branded campaign assets, and invitations to ecosystem events.
          </div>

          <button type="submit" class="btn-orange" style="width:100%; margin-top:16px;">
            Submit Partner Application
          </button>
        </form>
      </div>
    </div>
  `;

  let div = document.getElementById('modal-mount');
  if (!div) {
    div = document.createElement('div');
    div.id = 'modal-mount';
    document.body.appendChild(div);
  }
  div.innerHTML = modalHtml;
  document.getElementById('partnerApplyForm').addEventListener('submit', handlePartnerSubmit);
}

window.openPartnerModal = openPartnerModal;

function closePartnerModal() {
  const modal = document.getElementById('partnerModal');
  if (modal) modal.remove();
}

window.closePartnerModal = closePartnerModal;

function handlePartnerSubmit(e) {
  e.preventDefault();
  const cName = document.getElementById('partCommName').value;
  const lName = document.getElementById('partLeaderName').value;
  const email = document.getElementById('partEmail').value;
  const model = document.getElementById('partModel').value;

  if (!cName || !lName || !email) return;

  const t = getTelemetry();
  t.partnersApplied += 1;
  t.partnerApplications.push({ cName, lName, email, model, date: new Date().toLocaleDateString() });
  saveTelemetry(t);

  closePartnerModal();

  // Show a success message
  alert(`Thank you, ${lName}! Your application for "${cName}" has been successfully logged. Our partnership team will contact you within 24 hours with your dashboard credentials.`);
}

// ---------- VIEW RENDERERS ----------

// 1. Gateway page introducing both pathways
function renderGateway() {
  appViewport.innerHTML = `
    <section class="white-hero-card max-width-wrap">
      <div class="hero-layout" style="grid-template-cols: 1.1fr 0.9fr;">
        <div class="hero-text-side">
          <div class="hero-eyebrow">⚡ DOT DEMO 2026 GATEWAY</div>
          <h1 class="hero-h1">The Operating System for Builders.</h1>
          <p class="hero-sub" style="font-size: 16px; margin: 20px 0 32px;">
            Learn world-class skills, join national competition pools, build verified portfolios, and connect with global opportunities. Choose your entry pathway to get started.
          </p>
          
          <div style="display:grid; grid-template-cols:1fr 1fr; gap:20px;">
            <a href="#/student" class="glass-panel" style="padding:30px; border:1px solid rgba(0,0,0,0.08); display:flex; flex-direction:column; justify-content:space-between; height:180px; transition:var(--transition);">
              <span style="font-size:28px;">🎓</span>
              <div>
                <h4 style="font-family:var(--font-display); font-size:18px; font-weight:800; color:#1A1A1A;">I&apos;m a Student</h4>
                <p style="font-size:11px; color:#6A6E7B; margin-top:4px;">Learn, compete, build your passport, and claim rewards.</p>
              </div>
            </a>
            
            <a href="#/community" class="glass-panel" style="padding:30px; border:1px solid rgba(0,0,0,0.08); display:flex; flex-direction:column; justify-content:space-between; height:180px; transition:var(--transition);">
              <span style="font-size:28px;">👥</span>
              <div>
                <h4 style="font-family:var(--font-display); font-size:18px; font-weight:800; color:#1A1A1A;">I Lead a Community</h4>
                <p style="font-size:11px; color:#6A6E7B; margin-top:4px;">Access toolkits, track members, and unlock partnerships.</p>
              </div>
            </a>
          </div>
        </div>

        <div class="hero-portrait-side">
          <div class="hero-portrait-box" style="background:#FAF9F6; display:flex; flex-direction:column; justify-content:center; align-items:center;">
            <span style="font-size:80px; animation: float 3s ease-in-out infinite;">🔗</span>
            <h4 style="font-family:var(--font-mono); font-size:11px; color:#6A6E7B; text-transform:uppercase; margin-top:16px;">
              National Node Index
            </h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Scrollable Marquee Ticker -->
    <div class="marquee-ticker-wrap">
      <div class="marquee-content">
        <div class="marquee-text-block">
          <span>COMPETE</span> <span class="marquee-divider">+</span>
          <span>LEARN</span> <span class="marquee-divider">+</span>
          <span>CONNECT</span> <span class="marquee-divider">+</span>
          <span>BUILD</span> <span class="marquee-divider">+</span>
        </div>
        <div class="marquee-text-block">
          <span>COMPETE</span> <span class="marquee-divider">+</span>
          <span>LEARN</span> <span class="marquee-divider">+</span>
          <span>CONNECT</span> <span class="marquee-divider">+</span>
          <span>BUILD</span> <span class="marquee-divider">+</span>
        </div>
      </div>
    </div>
  `;
}

// 2. Student Experience page
function renderStudentPage() {
  appViewport.innerHTML = `
    <!-- HERO -->
    <section class="white-hero-card max-width-wrap">
      <div class="hero-layout">
        <div class="hero-text-side">
          <div class="hero-eyebrow">🎓 STUDENT PATHWAY</div>
          <h1 class="hero-h1">Whatever You Want to Become, Start Here.</h1>
          <p class="hero-sub" style="font-size:16px; margin: 20px 0 32px;">
            Join Nigeria&apos;s largest virtual builder championship. Compete. Learn. Meet builders. Earn recognition. Build your future.
          </p>
          <div class="hero-ctas-row" style="justify-content: flex-start; gap: 16px;">
            <button onclick="openRegisterModal('founder')" class="btn-orange">✅ Join DOT DEMO</button>
            <a href="#/student#championships" class="btn-outline">Explore Championships</a>
          </div>
        </div>

        <div class="hero-portrait-side">
          <div class="hero-portrait-box" style="background:#FAF9F6; display:flex; flex-direction:column; justify-content:center; align-items:center;">
            <span style="font-size:72px; animation: float 3s ease-in-out infinite;">🚀</span>
            <span style="font-family:var(--font-mono); font-size:11px; color:#6A6E7B; margin-top:20px;">
              ACTIVE CHAMPIONSHIPS: 10
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 1: CHOOSE YOUR BUILDER PATH -->
    <section class="section-padding max-width-wrap" id="championships">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 60px;">
        <span class="section-tag">Paths</span>
        <h2 class="section-title">Choose Your Builder Path</h2>
        <p class="section-desc">Select a category card below to view details and register.</p>
      </div>

      <div class="paths-grid">
        ${Object.entries(TRACKS_METADATA).map(([id, t]) => `
          <div class="glass-panel glass-panel-hover path-card" onclick="window.location.hash='#/championship/${id}'" style="cursor:pointer;">
            <div>
              <div class="path-icon">${t.icon}</div>
              <h4 class="path-name" style="font-family:var(--font-display);">${t.name}</h4>
              <p class="path-desc">${t.tagline}</p>
            </div>
            <a href="#/championship/${id}" class="path-btn">View Arena details →</a>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- SECTION 2: WHY JOIN? (OUTCOMES) -->
    <section class="section-padding max-width-wrap">
      <div class="asymmetric-grid">
        <div>
          <span class="section-tag">Outcomes</span>
          <h2 class="section-title">Why Join DOT DEMO?</h2>
          <p class="section-desc">After joining DOT DEMO you can:</p>
          
          <ul style="list-style:none; font-size:14px; color:var(--text-muted); space-y:8px; margin-top:24px;">
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Build a verified Builder Passport.</li>
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Join a national builder network.</li>
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Learn practical entrepreneurship.</li>
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Showcase your skills and connect with mentors.</li>
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Compete nationally and access future ecosystem programs.</li>
          </ul>
        </div>
        <div class="vertical-rule"></div>
      </div>
    </section>

    <!-- SECTION 3: MEMBERSHIP BENEFITS (30,000 NGN) -->
    <section class="section-padding max-width-wrap" id="benefits">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 40px;">
        <span class="section-tag">Value Stack</span>
        <h2 class="section-title">The Builder Membership</h2>
      </div>

      <div class="focused-pricing-wrapper">
        <div class="glass-panel pricing-panel">
          <div class="pricing-badge-hot">Active Access</div>
          <span class="section-tag" style="margin-top:20px;">Membership perks</span>
          
          <div class="price-val">₦30,000</div>
          <div class="price-subtitle">One-time contribution</div>
          
          <ul class="pricing-feature-list">
            <li><strong>Access to DOT OS:</strong> Full license to use the OS workspace dashboard.</li>
            <li><strong>Entrepreneurship Learning:</strong> Unlock access to the course registries.</li>
            <li><strong>Competition Eligibility:</strong> Submit coordinates to any of the 10 arenas.</li>
            <li><strong>Builder Passport:</strong> Index your verified digital portfolio credentials.</li>
            <li><strong>Resources & Events:</strong> Direct invitations to virtual masterclasses.</li>
          </ul>

          <button onclick="openRegisterModal('founder')" class="btn-orange" style="width:100%; margin-top:20px;">
            Become a Builder Member
          </button>
        </div>
      </div>
    </section>

    <!-- SECTION 5: HOW IT WORKS TIMELINE -->
    <section class="section-padding max-width-wrap">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 50px;">
        <span class="section-tag">Funnel</span>
        <h2 class="section-title">How It Works</h2>
      </div>

      <div class="timeline-flow">
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 01</span>
            <h4 class="timeline-step-title">Join DOT DEMO & Activate Membership</h4>
            <p class="timeline-step-desc">Establish your verified registration node under the ₦30,000 NGN plan.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 02</span>
            <h4 class="timeline-step-title">Create Builder Passport & Choose Championships</h4>
            <p class="timeline-step-desc">Complete your dashboard profile and map your chosen competitive arenas.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 03</span>
            <h4 class="timeline-step-title">Join Your Community & Learn</h4>
            <p class="timeline-step-desc">Onboard into state WhatsApp nodes and begin courses.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 04</span>
            <h4 class="timeline-step-title">Compete & Continue Inside DOT OS</h4>
            <p class="timeline-step-desc">Submit files, climb leaderboards, and build your long-term career logs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: LEARNING JOURNEY -->
    <section class="section-padding max-width-wrap">
      <div class="asymmetric-grid">
        <div>
          <span class="section-tag">Continuous Academy</span>
          <h2 class="section-title">The Learning Journey</h2>
          <p class="section-desc">Members continue growing inside the ecosystem long after the brackets close. Core topics include:</p>
          
          <div class="paths-grid" style="margin-top:30px; grid-template-cols: repeat(auto-fit, minmax(200px, 1fr));">
            <div class="glass-panel" style="padding:20px; text-align:center;">
              <span style="font-size:24px;">💼</span>
              <h5 style="margin-top:10px; font-weight:800;">Entrepreneurship</h5>
            </div>
            <div class="glass-panel" style="padding:20px; text-align:center;">
              <span style="font-size:24px;">👑</span>
              <h5 style="margin-top:10px; font-weight:800;">Leadership</h5>
            </div>
            <div class="glass-panel" style="padding:20px; text-align:center;">
              <span style="font-size:24px;">📈</span>
              <h5 style="margin-top:10px; font-weight:800;">Wealth Management</h5>
            </div>
            <div class="glass-panel" style="padding:20px; text-align:center;">
              <span style="font-size:24px;">🤖</span>
              <h5 style="margin-top:10px; font-weight:800;">AI Tools</h5>
            </div>
          </div>
        </div>
        <div class="vertical-rule"></div>
      </div>
    </section>

    <!-- SECTION 7: STUDENT DASHBOARD PREVIEW -->
    <section class="section-padding max-width-wrap">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 50px;">
        <span class="section-tag">Workspace Preview</span>
        <h2 class="section-title">Your Student Dashboard</h2>
        <p class="section-desc">Visualize what happens after you secure your passport.</p>
      </div>

      <div class="glass-panel dashboard-preview-card">
        <div class="dash-header">
          <div class="dash-logo">DOT<span>OS</span></div>
          <div class="dash-user-badge">Builder Level: 1</div>
        </div>
        
        <div class="dash-grid">
          <div class="dash-box">
            <h5>Registered Arenas</h5>
            <div class="dash-score">01</div>
            <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">Founder Challenge: Active</p>
          </div>
          <div class="dash-box">
            <h5>Certificates</h5>
            <div class="dash-score">0</div>
            <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">Vouchers unlocked: 0</p>
          </div>
          <div class="dash-box">
            <h5>Chapters & Chapters</h5>
            <div class="dash-score">1</div>
            <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">WhatsApp State Node: Connected</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 8: COMMUNITY MAP -->
    <section class="section-padding max-width-wrap">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 50px;">
        <span class="section-tag">Ecosystem Network</span>
        <h2 class="section-title">The Community Map</h2>
        <p class="section-desc">Belong to a nationwide network mapped directly to your campus.</p>
      </div>

      <div class="community-map-grid">
        <div class="glass-panel map-node">
          <div class="map-node-title">Nigeria</div>
          <div class="map-node-desc">National registry</div>
        </div>
        <div class="map-arrow">→</div>
        <div class="glass-panel map-node">
          <div class="map-node-title">36 States</div>
          <div class="map-node-desc">Regional nodes</div>
        </div>
        <div class="map-arrow">→</div>
        <div class="glass-panel map-node">
          <div class="map-node-title">Universities</div>
          <div class="map-node-desc">Hub chapters</div>
        </div>
        <div class="map-arrow">→</div>
        <div class="glass-panel map-node">
          <div class="map-node-title">Builder Teams</div>
          <div class="map-node-desc">Your cohort</div>
        </div>
      </div>
    </section>

    <!-- SECTION 9: SUCCESS STORIES -->
    <section class="section-padding max-width-wrap">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 50px;">
        <span class="section-tag">Archive</span>
        <h2 class="section-title">Success Stories</h2>
        <p class="section-desc">Reserved for future student participant and team logs.</p>
      </div>
      <div class="glass-panel text-center" style="padding:40px; color:var(--text-muted); font-size:13px;">
        📖 Cohort 1 achievements are being indexed. Your story will display here.
      </div>
    </section>

    <!-- SECTION 10: FAQ -->
    <section class="section-padding max-width-wrap" id="faq">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 50px;">
        <span class="section-tag">FAQ</span>
        <h2 class="section-title">Student FAQs</h2>
      </div>

      <div class="faq-box">
        <div class="glass-panel faq-card">
          <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
            <span>Can I register for more than one championship?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-content" style="display:none;">
            Yes! Your Builder Membership contribution of ₦30,000 NGN permits you to submit entries to any of the 10 categories.
          </div>
        </div>
        <div class="glass-panel faq-card">
          <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
            <span>How do I access my WhatsApp community node?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-content" style="display:none;">
            Upon securing payment checkout, Vercel will redirect your page to the success node containing your track's active WhatsApp invite link.
          </div>
        </div>
      </div>
    </section>
  `;
}

// 3. Community Experience page
function renderCommunityPage() {
  appViewport.innerHTML = `
    <!-- HERO -->
    <section class="white-hero-card max-width-wrap">
      <div class="hero-layout">
        <div class="hero-text-side">
          <div class="hero-eyebrow">👥 COMMUNITY PATHWAY</div>
          <h1 class="hero-h1">Help Your Students Access National Opportunities.</h1>
          <p class="hero-sub" style="font-size:16px; margin: 20px 0 32px;">
            Partner with DOT DEMO to give your members access to national competitions, structured learning, and the DOT OS ecosystem.
          </p>
          <div class="hero-ctas-row" style="justify-content: flex-start;">
            <button onclick="openPartnerModal()" class="btn-orange">🤝 Apply as Partner</button>
          </div>
        </div>

        <div class="hero-portrait-side">
          <div class="hero-portrait-box" style="background:#FAF9F6; display:flex; flex-direction:column; justify-content:center; align-items:center;">
            <span style="font-size:72px; animation: float 3s ease-in-out infinite;">👥</span>
            <span style="font-family:var(--font-mono); font-size:11px; color:#6A6E7B; margin-top:20px;">
              Growth Partners: 40+
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY PARTNER? -->
    <section class="section-padding max-width-wrap">
      <div class="asymmetric-grid">
        <div>
          <span class="section-tag">Benefits</span>
          <h2 class="section-title">Why Partner?</h2>
          <p class="section-desc">Give your members leverage and national exposure:</p>
          
          <ul style="list-style:none; font-size:14px; color:var(--text-muted); space-y:8px; margin-top:24px;">
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> National exposure for your community node.</li>
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Continuous structured skill development assets.</li>
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Structured competitions and entrepreneurship learning programs.</li>
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Community recognition and access to future ecosystem grants.</li>
          </ul>
        </div>
        <div class="vertical-rule"></div>
      </div>
    </section>

    <!-- WHO CAN PARTNER? -->
    <section class="section-padding max-width-wrap">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 50px;">
        <span class="section-tag">Hubs</span>
        <h2 class="section-title">Who Can Partner?</h2>
      </div>

      <div class="paths-grid" style="grid-template-cols: repeat(auto-fit, minmax(200px, 1fr));">
        <div class="glass-panel" style="padding:24px; text-align:center;">
          <span style="font-size:32px;">🏫</span>
          <h5 style="margin-top:12px; font-weight:800;">University Union</h5>
        </div>
        <div class="glass-panel" style="padding:24px; text-align:center;">
          <span style="font-size:32px;">💻</span>
          <h5 style="margin-top:12px; font-weight:800;">Dev Club</h5>
        </div>
        <div class="glass-panel" style="padding:24px; text-align:center;">
          <span style="font-size:32px;">🎮</span>
          <h5 style="margin-top:12px; font-weight:800;">Gaming Club</h5>
        </div>
        <div class="glass-panel" style="padding:24px; text-align:center;">
          <span style="font-size:32px;">💡</span>
          <h5 style="margin-top:12px; font-weight:800;">Innovation Hub</h5>
        </div>
        <div class="glass-panel" style="padding:24px; text-align:center;">
          <span style="font-size:32px;">🎭</span>
          <h5 style="margin-top:12px; font-weight:800;">Creative Group</h5>
        </div>
      </div>
    </section>

    <!-- PARTNERSHIP MODELS -->
    <section class="section-padding max-width-wrap">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 50px;">
        <span class="section-tag">Models</span>
        <h2 class="section-title">Partnership Models</h2>
      </div>

      <div class="partner-models-grid">
        <div class="glass-panel partner-model-card">
          <h4>Campus Partner</h4>
          <p>Promote DOT DEMO on campus, handle flyers distribution, and drive student registration nodes.</p>
        </div>
        <div class="glass-panel partner-model-card">
          <h4>Community Partner</h4>
          <p>Bring your complete active member base into championship brackets under co-branded guilds.</p>
        </div>
        <div class="glass-panel partner-model-card">
          <h4>Media Partner</h4>
          <p>Share stories, broadcast highlights, and publish competitor statistics.</p>
        </div>
        <div class="glass-panel partner-model-card">
          <h4>Strategic Partner</h4>
          <p>Collaborate on program curriculum nodes and ecosystem development initiatives.</p>
        </div>
      </div>
    </section>

    <!-- PARTNER BENEFITS -->
    <section class="section-padding max-width-wrap">
      <div class="asymmetric-grid">
        <div>
          <span class="section-tag">Ecosystem Value</span>
          <h2 class="section-title">Partner Benefits</h2>
          <p class="section-desc">We support our partners with tools to manage and track outcomes:</p>
          
          <ul style="list-style:none; font-size:14px; color:var(--text-muted); space-y:8px; margin-top:24px;">
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Dedicated referral links and tracking codes.</li>
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Community metrics dashboard for registration telemetry.</li>
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Co-branded marketing campaign templates and kit assets.</li>
            <li style="margin-bottom:12px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Invitations to VIP ecosystem partner events.</li>
          </ul>
        </div>
        <div class="vertical-rule"></div>
      </div>
    </section>

    <!-- PARTNER JOURNEY -->
    <section class="section-padding max-width-wrap">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 50px;">
        <span class="section-tag">Timeline</span>
        <h2 class="section-title">The Partner Journey</h2>
      </div>

      <div class="timeline-flow">
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 01</span>
            <h4 class="timeline-step-title">Apply & Review</h4>
            <p class="timeline-step-desc">Submit your community details for validation and model matching.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 02</span>
            <h4 class="timeline-step-title"> toolkit Delivery</h4>
            <p class="timeline-step-desc">Receive co-branded assets, referral links, and dashboard codes.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 03</span>
            <h4 class="timeline-step-title">Invite & Track Progress</h4>
            <p class="timeline-step-desc">Monitor student registrations and progress rankings inside your custom dashboard.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- COMMUNITY DASHBOARD PREVIEW -->
    <section class="section-padding max-width-wrap">
      <div class="section-header" style="text-align:center; max-width:600px; margin:0 auto 50px;">
        <span class="section-tag">Telemetry Preview</span>
        <h2 class="section-title">Community Partner Dashboard</h2>
        <p class="section-desc">How partners track their campus metrics.</p>
      </div>

      <div class="glass-panel dashboard-preview-card">
        <div class="dash-header">
          <div class="dash-logo">DOT<span>PARTNERS</span></div>
          <div class="dash-user-badge">Status: Approved</div>
        </div>
        
        <div class="dash-grid">
          <div class="dash-box">
            <h5>Referred Builders</h5>
            <div class="dash-score">45</div>
          </div>
          <div class="dash-box">
            <h5>Active Competitors</h5>
            <div class="dash-score">28</div>
          </div>
          <div class="dash-box">
            <h5>Ecosystem Rank</h5>
            <div class="dash-score">#12</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 4. Track Details page
function renderChampionship(trackId) {
  const t = TRACKS_METADATA[trackId];
  if (!t) {
    renderNotFound();
    return;
  }

  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap">
      
      <section class="champ-hero">
        <div class="champ-hero-grid">
          <div class="champ-hero-left">
            <span class="champ-badge-pill">Arena track</span>
            <h1 class="champ-title">${t.name}</h1>
            <p class="champ-tagline" style="font-size: 16px; margin-top:16px;">${t.tagline}</p>
          </div>
          
          <div class="glass-panel checkout-sticky-card">
            <div class="price-sub">Championship Membership</div>
            <div class="sticky-card-price">₦30,000</div>
            <ul class="sticky-card-list">
              <li>Entry to ${t.name}</li>
              <li>Verified Builder Passport profile</li>
              <li>Access to WhatsApp Chapters</li>
            </ul>
            <button onclick="openRegisterModal('${trackId}')" class="btn-orange" style="width:100%;">
              Secure Registration
            </button>
          </div>
        </div>
      </section>

      <section class="champ-details-grid section-padding">
        <div class="champ-main-content">
          <div class="detail-section">
            <h3>Overview</h3>
            <p>${t.desc}</p>
          </div>

          <div class="detail-section">
            <h3>Prizes & Rewards</h3>
            <p>${t.prizes}</p>
          </div>

          <div class="detail-section">
            <h3>Championship Timeline</h3>
            <p>${t.timeline}</p>
          </div>

          <div class="detail-section">
            <h3>Who Should Join</h3>
            <div class="bullet-list-grid">
              ${t.who.map((w, idx) => `
                <div class="bullet-item">
                  <span class="bullet-idx">0${idx+1}</span>
                  <span>${w}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="detail-section">
            <h3>Learning Outcomes</h3>
            <div class="bullet-list-grid">
              ${t.outcomes.map((o, idx) => `
                <div class="bullet-item">
                  <span class="bullet-idx">✓</span>
                  <span>${o}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="detail-section">
            <h3>Competition Rules</h3>
            <div class="bullet-list-grid">
              ${t.rules.map((r, idx) => `
                <div class="bullet-item">
                  <span class="bullet-idx">Rule 0${idx+1}</span>
                  <span>${r}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="detail-section">
            <h3>Judging Criteria</h3>
            <div class="bullet-list-grid">
              ${t.judging.map((j, idx) => `
                <div class="bullet-item">
                  <span class="bullet-idx">✓</span>
                  <span>${j}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  `;
}

// 5. Post-Purchase Success page
function renderSuccess() {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const trackId = urlParams.get('track') || 'founder';
  const track = TRACKS_METADATA[trackId] || TRACKS_METADATA.founder;

  appViewport.innerHTML = `
    <div class="max-width-wrap">
      <div class="glass-panel success-card-container">
        <div class="success-icon">🎉</div>
        <h1 class="success-title">Welcome, Builder!</h1>
        <p class="success-desc">
          Your Builder Membership payment for the <strong>${track.name}</strong> track was secured successfully. Let&apos;s get you onboarded immediately.
        </p>

        <div class="success-steps">
          <h4>Required Action Steps</h4>
          
          <a href="${track.whatsapp}" target="_blank" rel="noopener" class="step-card-item block" style="transition:var(--transition-fast);">
            <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
              <div style="display:flex; gap:12px; align-items:center;">
                <span class="step-card-num">Step 1</span>
                <span class="step-card-text">Join ${track.name} WhatsApp Community</span>
              </div>
              <span style="color:var(--orange); font-weight:bold;">Join Node →</span>
            </div>
          </a>

          <div class="step-card-item">
            <span class="step-card-num">Step 2</span>
            <span class="step-card-text">Create Builder Passport inside DOT OS</span>
          </div>

          <div class="step-card-item">
            <span class="step-card-num">Step 3</span>
            <span class="step-card-text">Access your Scholarship Application portal</span>
          </div>
        </div>

        <a href="#/" class="btn-outline" style="width:100%;">Return to Home</a>
      </div>
    </div>
  `;
}

// 6. Admin Telemetry Console
function renderAdmin() {
  const t = getTelemetry();

  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap section-padding">
      <div class="section-header">
        <span class="section-tag">TELEMETRY</span>
        <h1 class="section-title">Admin Telemetry Console</h1>
        <p class="section-desc">Real-time statistics measuring student acquisitions, registrations, and partner submissions.</p>
      </div>

      <div class="admin-metrics-row">
        <div class="glass-panel metric-panel">
          <div class="metric-lbl">Total Visitors</div>
          <div class="metric-value">${t.visitors.toLocaleString()}</div>
        </div>
        <div class="glass-panel metric-panel">
          <div class="metric-lbl">Registrations</div>
          <div class="metric-value">${t.registrations.toLocaleString()}</div>
        </div>
        <div class="glass-panel metric-panel">
          <div class="metric-lbl">Growth Partners</div>
          <div class="metric-value">${t.partnersApplied.toLocaleString()}</div>
        </div>
        <div class="glass-panel metric-panel">
          <div class="metric-lbl">Est. Revenue</div>
          <div class="metric-value">₦${t.revenue.toLocaleString()}</div>
        </div>
      </div>

      <div class="admin-data-grid">
        <div class="glass-panel table-panel">
          <h3>Growth Partner Applications</h3>
          <table class="table-admin">
            <thead>
              <tr>
                <th>Community</th>
                <th>Leader</th>
                <th>Model</th>
                <th style="text-align:right;">Date</th>
              </tr>
            </thead>
            <tbody>
              ${t.partnerApplications.length === 0 ? `
                <tr><td colspan="4" style="text-align:center; color:var(--text-muted);">No applications logged yet.</td></tr>
              ` : t.partnerApplications.map(p => `
                <tr>
                  <td>${p.cName}</td>
                  <td>${p.lName}</td>
                  <td>${p.model}</td>
                  <td style="text-align:right; color:var(--orange);">${p.date}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="glass-panel table-panel flex flex-col justify-between">
          <div>
            <h3>Ecosystem Conversion Efficiency</h3>
            <div style="font-size:12px; color:var(--text-muted); space-y:12px; margin-top:20px;">
              <div>Visitor to Registration: <strong class="text-orange-500">${((t.registrations / t.visitors) * 100).toFixed(1)}%</strong></div>
              <div style="margin-top:10px;">Registration to Member: <strong class="text-orange-500">${((t.purchases / t.registrations) * 100).toFixed(1)}%</strong></div>
            </div>
          </div>
          <button onclick="resetMockTelemetry()" class="btn-outline" style="font-size:10px; padding:6px 12px; align-self:flex-start; margin-top:24px;">
            Reset Simulation Stats
          </button>
        </div>
      </div>
    </div>
  `;
}

function resetMockTelemetry() {
  localStorage.removeItem('dot_telemetry');
  window.location.reload();
}
window.resetMockTelemetry = resetMockTelemetry;

function renderNotFound() {
  appViewport.innerHTML = `
    <div class="text-center section-padding max-width-wrap space-y-4">
      <span style="font-size:40px;">🛸</span>
      <h1 class="hero-title">404 - Node Not Found</h1>
      <p class="hero-sub">The specified hash coordinate could not be mapped within the DOT DEMO ecosystem.</p>
      <a href="#/" class="btn-orange">Return to Home</a>
    </div>
  `;
}

// ---------- ACCORDION ACCORDION ----------
function toggleFaqAccordion(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  if (content.style.display === 'none') {
    content.style.display = 'block';
    icon.textContent = '−';
  } else {
    content.style.display = 'none';
    icon.textContent = '+';
  }
}
window.toggleFaqAccordion = toggleFaqAccordion;

// ---------- THEME TOGGLE & NAVIGATION ----------
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.getElementById('mobileHamburger');
  const overlay = document.getElementById('mobileNavOverlay');
  const closeBtn = document.getElementById('mobileMenuCloseBtn');
  
  const toggleMobileMenu = () => {
    const isAct = overlay.classList.toggle('active');
    ham.setAttribute('aria-expanded', isAct ? 'true' : 'false');
  };

  if (ham) ham.addEventListener('click', toggleMobileMenu);
  if (closeBtn) closeBtn.addEventListener('click', toggleMobileMenu);
  
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  });

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');

  const savedTheme = localStorage.getItem('dot_demo_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {
    document.documentElement.classList.remove('light-theme');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }

  const toggleTheme = () => {
    const isLight = document.body.classList.toggle('light-theme');
    document.documentElement.classList.toggle('light-theme', isLight);
    
    if (isLight) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('dot_demo_theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('dot_demo_theme', 'dark');
    }
  };

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);
});
