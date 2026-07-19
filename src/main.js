// ---------- COMPREHENSIVE TRACK METADATA ----------
const TRACKS_METADATA = {
  founder: {
    name: 'Founder Challenge',
    icon: '🚀',
    tagline: 'Build scalable startups, acquire customers, and pitch for venture funding.',
    desc: 'The centerpiece arena for builders looking to build the next generation of African unicorns. This track guides you through customer discovery, MVP validation, unit economics, and formal venture pitching. Prove your traction metrics, map out target addresses, and stand out before early-stage capital partners.',
    who: [
      'Aspiring tech entrepreneurs and early-stage student founders',
      'Business developers looking to formulate structured venture models',
      'Growth marketers and product managers looking to prove traction metrics'
    ],
    outcomes: [
      'Draft an investor-ready investment deck and validate your financial models',
      'Master customer development frameworks and acquire your first 100 users',
      'Pitch directly to active early-stage venture capital firms during the virtual finals',
      'Earn equity-free treasury capital matching to scale your validated product'
    ],
    rules: [
      'Participants must submit a functional MVP or a deeply validated interactive prototype.',
      'Submissions must include proof of user acquisition (e.g. signup lists, analytics graphs, or transaction logs).',
      'All pitching materials must present clear unit economics and local regulatory clearance plans.'
    ],
    judging: [
      'Market Validation: Strength of customer problem verification (30%)',
      'Execution Capability: Prototype completeness and design system clarity (30%)',
      'Traction Metrics: Volume of active early testers and signup velocity (20%)',
      'Presentation: Clarity of product storytelling and business feasibility (20%)'
    ],
    checkoutSlug: 'dot-demo-founder-membership',
    whatsapp: 'https://chat.whatsapp.com/founder-mock-id'
  },
  wealthtech: {
    name: 'WealthTech Challenge',
    icon: '📈',
    tagline: 'Design retail savings architectures, indexes, and investment modules.',
    desc: 'WealthTech is reshaping capital accumulation across emerging markets. In this track, you will design retail financial structures, cooperative micro-savings systems, yield-bearing distribution assets, or asset fractionalization systems. You will construct interfaces and business models designed to solve liquidity gaps and democratize investments.',
    who: [
      'Finance students, quantitative analysts, and retail investment enthusiasts',
      'Fintech builders, product designers, and transaction integration developers',
      'Aspiring portfolio managers wanting to index emerging market assets'
    ],
    outcomes: [
      'Formulate structured yield-generation protocols and index allocation designs',
      'Master the regulatory sandbox frameworks of the SEC and Central Bank',
      'Design high-converting wealth portals and micro-investment interfaces',
      'Pitch strategies to top wealth managers and secure asset-allocation grants'
    ],
    rules: [
      'Solutions must present a complete fee structure and index mathematical models.',
      'UI layouts must demonstrate clear interest calculators and user-portfolio summaries.',
      'Compliance ledgers must map out customer KYC verification stages.'
    ],
    judging: [
      'Financial Modeling: Mathematical accuracy and yield logic (30%)',
      'UX Clarity: Ease of use of savings and investment onboarding (30%)',
      'Regulatory Alignment: Compliance with standard KYC and sandbox rules (20%)',
      'Security: Data confidentiality and transaction simulation models (20%)'
    ],
    checkoutSlug: 'dot-demo-wealthtech-membership',
    whatsapp: 'https://chat.whatsapp.com/wealthtech-mock-id'
  },
  gaming: {
    name: 'Gaming Championship',
    icon: '🎮',
    tagline: 'Compete in national esports, bracketed strategy systems, and guild nodes.',
    desc: 'The ultimate arena for gamers, strategists, and esports enthusiasts. DOT DEMO Gaming brings together Nigeria&apos;s finest strategy players in bracketed tournament pools. Battle for campus dominance, build your national competitor index, and establish local guild nodes inside your university chapter.',
    who: [
      'Esports competitors, tactical tournament players, and guild coordinators',
      'Strategy gamers looking to build national reputational status',
      'Community organizers looking to launch local campus gaming hubs'
    ],
    outcomes: [
      'Compete in live-streamed national bracket matches with professional casting',
      'Establish certified local campus gaming nodes and coordinate local networks',
      'Climb the national builder reputation index and unlock sponsorships',
      'Win direct payout allocations and gaming hardware packs'
    ],
    rules: [
      'Players must compete on verified accounts under official tournament coordinates.',
      'Sportsmanship bylaws are strictly enforced; toxic behaviors lead to immediate disqualification.',
      'Matches must be logged and recorded on the DOT OS gaming portal.'
    ],
    judging: [
      'Tactical performance: Victory metrics and scoreboard ratios (40%)',
      'Consistency: Performance stability throughout the brackets (30%)',
      'Community Node engagement: Number of campus members registered under your guild (30%)'
    ],
    checkoutSlug: 'dot-demo-gaming-membership',
    whatsapp: 'https://chat.whatsapp.com/gaming-mock-id'
  },
  creator: {
    name: 'Creator Championship',
    icon: '🎨',
    tagline: 'Launch high-converting newsletters, viral campaigns, and media networks.',
    desc: 'The future belongs to those who control distribution. In the Creator Championship, you will construct modern content architectures—launching growing newsletters, editing high-impact visual segments, mapping content funnels, and building a direct subscriber base that bypasses algorithmic controls.',
    who: [
      'Writers, copywriters, journalists, and visual editors looking to scale',
      'Social media managers, growth hackers, and brand strategists',
      'Digital artists looking to index and monetize their subscriber base'
    ],
    outcomes: [
      'Scale a newsletter or channel to its first 500 verified organic subscribers',
      'Master video editing, storytelling structures, and high-impact hooks',
      'Build a direct, monetizable asset network owned completely by you',
      'Pitch to digital brands and secure content creation sponsorship deals'
    ],
    rules: [
      'Creators must show a live publication channel (e.g. Substack, YouTube, TikTok).',
      'Content must be original; usage of uncredited materials is prohibited.',
      'Engagement data must be backed by verified platforms dashboard exports.'
    ],
    judging: [
      'Hook and Storytelling: Creativity and conversion of initial content hooks (35%)',
      'Growth Velocity: Volume of organic subscribers secured in milestone weeks (35%)',
      'Visual Consistency: Style, typography, and video editing hygiene (30%)'
    ],
    checkoutSlug: 'dot-demo-creator-membership',
    whatsapp: 'https://chat.whatsapp.com/creator-mock-id'
  },
  design: {
    name: 'Design Championship',
    icon: '✨',
    tagline: 'Craft world-class design systems, branding libraries, and interfaces.',
    desc: 'Design is not just how it looks; it is how it works. This championship challenges visual thinkers to construct comprehensive brand systems, design languages, user flows, and landing pages that feel premium and convert instantly. Recreate premium aesthetics like glassmorphism, vertical alignments, and sleek dark modes.',
    who: [
      'UI/UX designers, visual illustrators, and layout artists',
      'Product designers wishing to build verified structural portfolios',
      'Creative directors looking to establish consistent design guidelines'
    ],
    outcomes: [
      'Construct a complete, publishable design library and component library',
      'Design conversion-focused website interfaces and mobile application views',
      'Perform user-testing verification studies to justify design decisions',
      'Secure design fellowships and connections to global startup networks'
    ],
    rules: [
      'Submissions must present a Figma link with clean component states and auto-layouts.',
      'Design systems must establish clear typography tokens, grids, and color palettes.',
      'Must include a 3-minute Loom walkthrough explaining the UX decisions.'
    ],
    judging: [
      'Aesthetic Excellence: Visual harmony, spacing, typography, and colors (40%)',
      'UX Rationale: Direct justification of user flows and interface solutions (30%)',
      'Component Hygiene: Proper naming, clean nesting, and Figma auto-layouts (30%)'
    ],
    checkoutSlug: 'dot-demo-design-membership',
    whatsapp: 'https://chat.whatsapp.com/design-mock-id'
  },
  ai: {
    name: 'AI Innovation Challenge',
    icon: '🧠',
    tagline: 'Deploy cognitive LLM agents, vector databases, and automations.',
    desc: 'Move past basic ChatGPT prompts. In this track, you will write custom code to orchestrate LLM workflows, initialize vector databases, build custom Retrieval-Augmented Generation (RAG) layers, and deploy automated software agents that solve actual operational problems in emerging markets.',
    who: [
      'Python developers, data science students, and machine learning enthusiasts',
      'Process automation engineers and prompt managers looking to scale operations',
      'Aspiring software architects wanting to leverage cognitive databases'
    ],
    outcomes: [
      'Build and host a custom LLM agent that integrates with operational APIs',
      'Deploy localized vector indices for indexing complex unstructured datasets',
      'Design automated workflow agents that run complex multi-step tasks',
      'Claim compute grants, API credits, and technical placements'
    ],
    rules: [
      'All source code must be hosted on a public GitHub repository.',
      'Solutions must utilize API calls or custom localized neural models.',
      'Submissions must include a functional live demo or terminal walkthrough.'
    ],
    judging: [
      'Technical Complexity: Architecture choice, API hygiene, and prompt structures (40%)',
      'Utility: Actual time-savings or problem-solving capability of the agent (30%)',
      'Code Hygiene: Documentation clarity, proper error handling, and file structure (30%)'
    ],
    checkoutSlug: 'dot-demo-ai-membership',
    whatsapp: 'https://chat.whatsapp.com/ai-mock-id'
  },
  coding: {
    name: 'Coding Championship',
    icon: '💻',
    tagline: 'Deploy full-stack web applications, transaction ledgers, and secure APIs.',
    desc: 'The engine room of the modern economy. The Coding Championship challenges developers to deploy robust, high-performance web systems under strict timing limits. Integrate databases, secure API layers, optimize index performance, and deploy functional transaction gateways that scale.',
    who: [
      'Full-stack and backend software developers, frontend specialists',
      'Blockchain engineers looking to construct decentralized transaction logs',
      'Computer Science students wanting to validate their commercial readiness'
    ],
    outcomes: [
      'Deploy a fully functional, production-ready web application on modern servers',
      'Integrate payment gateways, transaction databases, and security filters',
      'Climb to the top tiers of the national developer scoreboard',
      'Secure developer placements, internships, and cloud credits'
    ],
    rules: [
      'Must submit a functional application link along with the GitHub codebase.',
      'Use of AI code generators is permitted, but you must be able to justify all code.',
      'Applications must load and resolve in under 2.5 seconds on standard connections.'
    ],
    judging: [
      'Functionality: System completeness and bug-free execution (40%)',
      'Performance: Load speeds, database indexing efficiency, and asset weights (30%)',
      'Security: Input sanitation, API authentication, and data integrity checks (30%)'
    ],
    checkoutSlug: 'dot-demo-coding-membership',
    whatsapp: 'https://chat.whatsapp.com/coding-mock-id'
  },
  music: {
    name: 'Music Championship',
    icon: '🎵',
    tagline: 'Produce original tracks, sound design libraries, and audio signatures.',
    desc: 'Audio is the emotional core of branding, gaming, and storytelling. In the Music Championship, you will produce original tracks, synthesize audio signatures, compose background libraries for interactive applications, and master the business of sonic branding and licensing.',
    who: [
      'Sound engineers, music producers, beatmakers, and audio designers',
      'Vocalists and composers looking to build digital licensing portfolios',
      'Instrumentalists interested in sync licensing and commercial scores'
    ],
    outcomes: [
      'Compose a professional sound branding library for commercial licensing',
      'Synthesize unique sonic signatures for modern corporate applications',
      'Master the dynamics of copyright registry, royalties, and digital distribution',
      'Earn studio equipment grants and placement deals with media houses'
    ],
    rules: [
      'All audio submissions must be original compositions produced by the member.',
      'Must submit high-quality WAV/MP3 files along with a track session screenshot.',
      'Tracks must not contain uncleared copyrighted samples.'
    ],
    judging: [
      'Creative Design: Originality, melody, and sonic branding relevance (40%)',
      'Technical Mix: Sound staging, equalization, and master compression level (30%)',
      'Commercial Utility: Fit of the music for gaming, apps, or advertisements (30%)'
    ],
    checkoutSlug: 'dot-demo-music-membership',
    whatsapp: 'https://chat.whatsapp.com/music-mock-id'
  },
  speaking: {
    name: 'Public Speaking Championship',
    icon: '🎤',
    tagline: 'Deliver high-impact keynotes, VC startup pitches, and product stories.',
    desc: 'The ability to communicate is the ultimate multiplier. In this track, you will master the dynamics of persuasive communication—structuring VC startup pitches, delivering inspiring keynotes, and using product storytelling to capture attention, build trust, and drive conversion.',
    who: [
      'Public speakers, debaters, product managers, and sales leads',
      'Founders wanting to refine their investor pitching capabilities',
      'Students looking to build direct corporate relations and presentation skills'
    ],
    outcomes: [
      'Deliver a compelling pitch on a live virtual stage before active investors',
      'Master key presentation structures, slide design, and voice dynamics',
      'Build a public speaker portfolio indexed in the national database',
      'Earn speaker fellowships, corporate placement links, and grants'
    ],
    rules: [
      'Speeches must be delivered live or submitted as unedited single-take videos.',
      'Presentation slides must be clean, concise, and visually supportive.',
      'Must structure pitches within strict timing limits (e.g. 3-minute or 5-minute).'
    ],
    judging: [
      'Structure: Logical build, opening hooks, and clarity of the message (35%)',
      'Delivery: Voice variation, eye contact, body language, and pacing (35%)',
      'Slide Support: Visual clarity of the presentation slides (30%)'
    ],
    checkoutSlug: 'dot-demo-speaking-membership',
    whatsapp: 'https://chat.whatsapp.com/speaking-mock-id'
  },
  chess: {
    name: 'Chess Championship',
    icon: '👑',
    tagline: 'Showcase strategic mastery in national virtual chess tournaments.',
    desc: 'Strategic thinking is the core of every great builder. The Chess Championship coordinates players across institutions in bracketed chess matches. Solve tactical patterns, advance through competitive virtual matches, and earn your place on the grand national leaderboard.',
    who: [
      'Chess players, tactical planners, and algorithmic puzzle solvers',
      'Competitors looking to secure national campus ranking titles',
      'Strategy enthusiasts who want to test their depth of calculation'
    ],
    outcomes: [
      'Compete in bracketed, timed matches against players nationwide',
      'Earn official national rank placements inside the DOT OS registry',
      'Establish certified chess clubs under your university node',
      'Claim cash rewards and premium strategic tool sets'
    ],
    rules: [
      'All games must be played on official tournament coordinates with anti-cheat tools.',
      'Players must adhere to strict timing rules (e.g. Blitz or Rapid time controls).',
      'Matches must be logged and reviewed by the tournament arbiter committee.'
    ],
    judging: [
      'Tournament Standing: Final score and placement in the brackets (60%)',
      'Tactical Accuracy: Calculated move quality analysis via chess engines (20%)',
      'Leaderboard Engagement: Active coordination and chapter participation (20%)'
    ],
    checkoutSlug: 'dot-demo-chess-membership',
    whatsapp: 'https://chat.whatsapp.com/chess-mock-id'
  }
};

// ---------- TELEMETRY LEDGER ----------
function getTelemetry() {
  let stats = localStorage.getItem('dot_telemetry');
  if (!stats) {
    stats = {
      visitors: 12540,
      registrations: 3840,
      purchases: 860,
      revenue: 25800000,
      universityStandings: [
        { name: 'University of Lagos (UNILAG)', count: 284 },
        { name: 'Obafemi Awolowo University (OAU)', count: 189 },
        { name: 'University of Ibadan (UI)', count: 172 },
        { name: 'University of Nigeria (UNN)', count: 154 }
      ]
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

// ---------- ROUTER ----------
const appViewport = document.getElementById('app-viewport');

function routeChange() {
  const hash = window.location.hash || '#/';
  document.getElementById('mobileNavOverlay').classList.remove('active');
  window.scrollTo(0, 0);

  if (hash === '#/' || hash === '#') {
    renderHome();
  } else if (hash.startsWith('#/championship/')) {
    const trackId = hash.split('#/championship/')[1];
    renderChampionship(trackId);
  } else if (hash === '#/competitions') {
    renderCompetitions();
  } else if (hash === '#/scholarship') {
    renderScholarship();
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

// ---------- MOUNT REGISTRATION DIALOG ----------
let currentSelectedTrackForModal = 'founder';

function openRegisterModal(trackId = 'founder') {
  currentSelectedTrackForModal = trackId;
  const modalHtml = `
    <div class="fixed-modal-wrap" id="regModal">
      <div class="modal-box">
        <button class="modal-close" onclick="closeRegisterModal()">&times;</button>
        <h3 class="modal-title">Complete Member Registration</h3>
        <p class="modal-subtitle">Claim your Builder Membership and enroll in the ${TRACKS_METADATA[trackId]?.name || 'Championship'}.</p>
        
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

  // Save Telemetry State
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
  t.revenue += 30000; // Updated to 30,000 NGN
  saveTelemetry(t);

  closeRegisterModal();

  const trackId = currentSelectedTrackForModal;
  const track = TRACKS_METADATA[trackId] || TRACKS_METADATA.founder;
  
  const successRedirect = encodeURIComponent(`${window.location.origin}/#/success?track=${trackId}`);
  const sellendaUrl = `https://www.sellenda.com.ng/events/${track.checkoutSlug}?redirect_success=${successRedirect}`;
  
  window.location.href = sellendaUrl;
}

// ---------- VIEW RENDERERS ----------

function renderHome() {
  appViewport.innerHTML = `
    <!-- HERO SECTION (ASSET OVERLAPPING MOCKUP) -->
    <section class="max-width-wrap hero-wrapper">
      <div class="hero-layout">
        <div class="hero-text-side">
          <div class="hero-eyebrow">
            ⚡ THE OPERATING SYSTEM FOR BUILDERS
          </div>
          <h1 class="hero-h1">
            Build the Future.<br />
            <span class="logo-accent">Own Your Path.</span>
          </h1>
          <p class="hero-sub" style="margin: 24px 0 32px 0; max-width: 680px; font-size: 16px; color: var(--text-muted);">
            Join **DOT DEMO 2026**, Nigeria&apos;s largest virtual student championship. Claim your verified Builder Passport, gain eligibility for the ₦300 Billion scholarship pool, and pitch your capacity before global venture partners.
          </p>
          <div class="hero-ctas-row" style="justify-content: flex-start; gap: 20px;">
            <button onclick="openRegisterModal('founder')" class="btn-orange">Claim Builder Membership</button>
            <a href="#/competitions" class="btn-outline">Explore $1000 Rewards</a>
          </div>
        </div>

        <div class="hero-portrait-side">
          <div class="hero-portrait-box" style="background:#151312; border: 1px solid var(--panel-border); border-radius: var(--radius-lg); position:relative;">
            <div style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center;">
              <span style="font-size:80px; animation: float 3s ease-in-out infinite;">🏆</span>
              <h4 style="font-family:var(--font-mono); font-size:11px; color:var(--text-muted); text-transform:uppercase; margin-top:20px; letter-spacing:0.1em;">
                Verified Builder Chapter
              </h4>
            </div>
            <div class="portrait-badge-overlay">
              ₦300 Billion Scholarship Pool Active
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HIGH-IMPACT STATS BANNER -->
    <section class="max-width-wrap">
      <div class="stats-banner-row">
        <div class="stat-block">
          <div class="stat-large-val">$1,000</div>
          <div class="stat-label-wrap">
            <span class="stat-num-prefix">01</span>
            <div class="stat-desc">Cash payouts awarded to the **Top 100 builders** in each of the 10 categories to seed their initial products.</div>
          </div>
        </div>
        <div class="stat-block">
          <div class="stat-large-val">₦300B</div>
          <div class="stat-label-wrap">
            <span class="stat-num-prefix">02</span>
            <div class="stat-desc">Committed scholarship pool covering entrepreneurship packs and cloud resources for **1 Million active members**.</div>
          </div>
        </div>
        <div class="stat-block">
          <div class="stat-large-val">10</div>
          <div class="stat-label-wrap">
            <span class="stat-num-prefix">03</span>
            <div class="stat-desc">Specialized championships spanning AI deployment, venture funding, wealth creation, coding, and creative arts.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE VALUE PROPOSITIONS (THE BUILDER'S DREAM) -->
    <section class="section-padding max-width-wrap">
      <div class="asymmetric-grid">
        <div>
          <span class="section-tag">Value Proposition</span>
          <h2 class="section-title">The Dream of a Builder</h2>
          <p class="section-desc">
            resumes are dead. Verified capacity is the only currency that matters. DOT DEMO is not just a competition—it is your permanent bridge from learning to earning.
          </p>
        </div>
        <div class="vertical-rule"></div>
      </div>

      <div class="prop-card-grid">
        <div class="glass-panel prop-card">
          <div class="prop-badge">Connect</div>
          <h4 class="prop-title">An Elite Chapter</h4>
          <p class="prop-text">
            Build alongside the brightest students, engineers, developers, and designers from UNILAG, OAU, UI, UNN, and across Nigeria. Form teams, exchange models, and accelerate growth.
          </p>
        </div>
        <div class="glass-panel prop-card">
          <div class="prop-badge">Passport</div>
          <h4 class="prop-title">Verified Reputation</h4>
          <p class="prop-text">
            Every course milestone you pass, design system you compile, or codebase you commit is logged directly onto your permanent digital Builder Passport inside DOT OS. VCs filter by capacity, not subjective credentials.
          </p>
        </div>
        <div class="glass-panel prop-card">
          <div class="prop-badge">Capital</div>
          <h4 class="prop-title">Direct Venture Access</h4>
          <p class="prop-text">
            Pitch directly to active early-stage venture capital firms, angel networks, and local accelerators. Stand out before institutional partners seeking technical talent.
          </p>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE CURVED CARD ARC SHOWCASE (DOMINIC INSPIRED) -->
    <section class="section-padding max-width-wrap">
      <div class="asymmetric-grid">
        <div>
          <span class="section-tag">The 10 Arenas</span>
          <h2 class="section-title">Where Do You Fit?</h2>
          <p class="section-desc">
            We have constructed specialized chambers mapped to your precise skills. Select your arena to review details, rules, outcomes, and access resources.
          </p>
        </div>
        <div class="vertical-rule"></div>
      </div>

      <!-- Curved Card Arc Carousel -->
      <div class="arc-carousel-wrapper">
        <div class="arc-card-node" onclick="window.location.hash='#/championship/founder'">
          <div class="arc-card-icon">🚀</div>
          <div class="arc-card-title">Founder</div>
        </div>
        <div class="arc-card-node" onclick="window.location.hash='#/championship/wealthtech'">
          <div class="arc-card-icon">📈</div>
          <div class="arc-card-title">WealthTech</div>
        </div>
        <div class="arc-card-node" onclick="window.location.hash='#/championship/gaming'">
          <div class="arc-card-icon">🎮</div>
          <div class="arc-card-title">Gaming</div>
        </div>
        <div class="arc-card-node" onclick="window.location.hash='#/championship/creator'">
          <div class="arc-card-icon">🎨</div>
          <div class="arc-card-title">Creator</div>
        </div>
        <div class="arc-card-node" onclick="window.location.hash='#/championship/ai'">
          <div class="arc-card-icon">🧠</div>
          <div class="arc-card-title">AI Innovation</div>
        </div>
        <div class="arc-card-node" onclick="window.location.hash='#/championship/coding'">
          <div class="arc-card-icon">💻</div>
          <div class="arc-card-title">Coding</div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 40px;">
        <a href="#/competitions" class="btn-outline">Browse All 10 Arenas</a>
      </div>
    </section>

    <!-- SINGLE STUNNING BUILDER PLAN (DELETED FREE ACCESS, SET TO 30,000 NGN) -->
    <section class="section-padding max-width-wrap" id="benefits">
      <div class="section-header" style="text-align: center; max-width: 600px; margin: 0 auto 40px;">
        <span class="section-tag">MEMBERSHIP PASS PORT</span>
        <h2 class="section-title">The Builder Membership</h2>
      </div>

      <div class="focused-pricing-wrapper">
        <div class="glass-panel pricing-panel">
          <div class="pricing-badge-hot">Ecosystem Access</div>
          <span class="section-tag" style="margin-top: 20px;">Unlock Your Journey</span>
          
          <div class="price-val">₦30,000</div>
          <div class="price-subtitle">One-time contribution</div>
          
          <ul class="pricing-feature-list">
            <li><strong>Verified Builder Passport:</strong> Permanent digital credential profile logged on the DOT OS platform.</li>
            <li><strong>Competition Registry:</strong> Direct access to enter and submit projects to any of the 10 arenas.</li>
            <li><strong>₦300,000 Scholarship Eligibility:</strong> Privilege to apply for curriculum vouchers and business resources.</li>
            <li><strong>State & Campus Nodes:</strong> Instant placement into local WhatsApp chapters with active organizers.</li>
            <li><strong>Deal-flow Indexing:</strong> Direct visibility of your profile to early-stage venture capital matching.</li>
            <li><strong>AI Templates & Legal Drafts:</strong> Access to standardized pitch books and automated business workflows.</li>
          </ul>

          <button onclick="openRegisterModal('founder')" class="btn-orange" style="width: 100%; margin-top: 20px;">
            Secure Membership & Checkout
          </button>
        </div>
      </div>
    </section>

    <!-- TIMELINE ROADMAP -->
    <section class="section-padding max-width-wrap">
      <div class="section-header" style="text-align: center; max-width: 600px; margin: 0 auto 50px;">
        <span class="section-tag">ROADMAP</span>
        <h2 class="section-title">Virtual Championship Timeline</h2>
      </div>

      <div class="timeline-flow">
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Phase 01 • Registration</span>
            <h4 class="timeline-step-title">Claim Membership</h4>
            <p class="timeline-step-desc">Pick your initial category track, input your university node coordinates, and complete checkout.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Phase 02 • Onboarding</span>
            <h4 class="timeline-step-title">Join Chapter Nodes</h4>
            <p class="timeline-step-desc">Enter your track-specific state WhatsApp communities to form builder teams and align on rules.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Phase 03 • Arena Submissions</span>
            <h4 class="timeline-step-title">Milestones & Verification</h4>
            <p class="timeline-step-desc">Complete weekly milestone tests inside the learning dashboard and validate prototype logs.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Phase 04 • Virtual Finals</span>
            <h4 class="timeline-step-title">Pitching & Payouts</h4>
            <p class="timeline-step-desc">Present pitches live to venture capital partners. Top 100 from each track secure $1000 payouts.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="section-padding max-width-wrap">
      <div class="section-header" style="text-align: center; max-width: 600px; margin: 0 auto 50px;">
        <span class="section-tag">FAQ</span>
        <h2 class="section-title">Common Questions</h2>
      </div>

      <div class="faq-box">
        <div class="glass-panel faq-card">
          <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
            <span>Who is eligible to participate?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-content" style="display:none;">
            Any university student, polytechnic student, or recent graduate across Nigeria can participate. If you have graduated within the last 24 months, you are fully welcome.
          </div>
        </div>
        <div class="glass-panel faq-card">
          <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
            <span>How does the ₦300 Billion scholarship allocation work?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-content" style="display:none;">
            The scholarship is a tuition waiver and resource package valued at ₦300,000 per builder (which includes course access, specialized AI tool configurations, template libraries, and regional chapter mentorship nodes). Your ₦30,000 membership contribution registers your profile, creates your passport, and unlocks your eligibility to apply for this scholarship. Vouchers are awarded based on quiz milestone progress inside DOT OS.
          </div>
        </div>
        <div class="glass-panel faq-card">
          <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
            <span>How is the $1,000 reward pool paid out?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-content" style="display:none;">
            The top 100 builders in each of the 10 championship categories are evaluated at the virtual finals. Each winning builder receives a $1,000 payout directly to seed their initial product development costs and build their verified portfolio logs on DOT OS.
          </div>
        </div>
      </div>
    </section>
  `;
}

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

// ---------- COMPETITIONS PAGE ($1000 REWARDS DETAILED) ----------
function renderCompetitions() {
  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap section-padding">
      
      <section class="hero-section" style="padding-top: 40px; text-align: center; max-width: 800px; margin: 0 auto 60px;">
        <span class="hero-eyebrow">💰 $10,000 REWARD POOL PER CATEGORY</span>
        <h1 class="hero-h1" style="font-size: clamp(34px, 5vw, 62px); margin: 16px 0;">
          The Championship Arenas
        </h1>
        <p class="hero-sub" style="font-size: 16px; color: var(--text-muted); line-height: 1.6;">
          DOT DEMO 2026 will award **$1,000 cash rewards directly to the top 100 builders** in each of the 10 categories, providing the initial seed capital needed to validate your venture.
        </p>
      </section>

      <!-- 10 TRACKS SHOWCASE -->
      <div class="paths-grid">
        ${Object.entries(TRACKS_METADATA).map(([id, t]) => `
          <div class="glass-panel glass-panel-hover path-card" style="min-height: 280px;">
            <div>
              <div class="path-icon">${t.icon}</div>
              <h4 class="path-name" style="font-size: 20px; font-family:var(--font-display);">${t.name}</h4>
              <p class="path-desc" style="font-size: 13px; line-height: 1.5; color: var(--text-muted);">${t.tagline}</p>
              <div style="font-size:10px; font-family:var(--font-mono); color:var(--orange); font-weight:bold; margin-top:12px;">
                🏆 $1,000 Payout Pool Active (Top 100)
              </div>
            </div>
            <a href="#/championship/${id}" class="path-btn" style="margin-top: 20px;">Review Rules & Details →</a>
          </div>
        `).join('')}
      </div>

      <!-- RULES & EVALUATION LEDGER -->
      <section class="section-padding" style="margin-top: 80px; border-top:1px solid var(--border-color);">
        <div class="asymmetric-grid">
          <div>
            <h3 style="font-family:var(--font-display); font-size: 26px; font-weight:800; margin-bottom: 20px;">
              Verification & Scoring Guidelines
            </h3>
            <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">
              Standings and points indexes are updated dynamically on the DOT OS public leaderboards.
            </p>
            <div class="bullet-list-grid">
              <div class="bullet-item">
                <span class="bullet-idx">01</span>
                <span><strong>Milestone completion:</strong> Points earned automatically upon completing structured course tests and programming assignments.</span>
              </div>
              <div class="bullet-item">
                <span class="bullet-idx">02</span>
                <span><strong>MVP validation:</strong> Feedback scores derived from local institutional checks and user usability testers.</span>
              </div>
              <div class="bullet-item">
                <span class="bullet-idx">03</span>
                <span><strong>Final Stage pitch:</strong> Live presentations evaluated by capital partners and external startup advisors.</span>
              </div>
            </div>
          </div>
          <div class="vertical-rule"></div>
        </div>
      </section>

    </div>
  `;
}

// ---------- SCHOLARSHIP PAGE (₦300B FUND DETAILED) ----------
function renderScholarship() {
  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap section-padding">
      
      <section class="hero-section" style="padding-top: 40px; text-align: center; max-width: 800px; margin: 0 auto 60px;">
        <span class="hero-eyebrow">🎓 ₦300 BILLION ACADEMY COMMITMENT</span>
        <h1 class="hero-h1" style="font-size: clamp(34px, 5vw, 62px); margin: 16px 0;">
          ₦300 Billion Scholarship Program
        </h1>
        <p class="hero-sub" style="font-size: 16px; color: var(--text-muted); line-height: 1.6;">
          Covering 100% of the entrepreneurship tuition, tools, libraries, server credits, and vector prompt packs for **1 Million active members** (₦300,000 package value per builder).
        </p>
      </section>

      <!-- MAIN SPLIT LAYOUT -->
      <div class="asymmetric-grid">
        <div class="space-y-6">
          <h3 style="font-family:var(--font-display); font-size: 24px; font-weight:800; border-bottom:1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 16px;">
            The Vouchered Learning Curriculum
          </h3>
          <p style="font-size:14px; color:var(--text-muted); line-height:1.6; margin-bottom: 24px;">
            The entrepreneurship scholarship covers complete venture ideation and tech stack modules:
          </p>

          <ul style="list-style:none; font-size:13px; color:var(--text-muted); space-y:8px;">
            <li style="margin-bottom:12px;"><strong style="color:var(--orange);">✓ Premium Course Modules:</strong> Venture modeling, growth marketing, UI design languages, prompt engineering, and legal business setups.</li>
            <li style="margin-bottom:12px;"><strong style="color:var(--orange);">✓ AI Automation Vouchers:</strong> Tool config files, automated workflow prompt scripts, and database access logs.</li>
            <li style="margin-bottom:12px;"><strong style="color:var(--orange);">✓ Regional Hub Networks:</strong> Automatic placements into state university hubs and mentor groups.</li>
          </ul>

          <div style="background:var(--orange-dim); border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); font-size:12px; color:var(--orange); line-height: 1.5; margin-top: 30px;">
            💡 <strong>Eligibility:</strong> Claiming your Builder Membership unlocks your eligibility to apply. Vouchers are unlocked based on quiz milestone progress inside DOT OS.
          </div>
        </div>
        
        <div class="vertical-rule"></div>

        <!-- Checkout Card -->
        <div class="glass-panel p-8 text-center flex flex-col justify-between" style="border-color:var(--orange-dim); min-height: 320px; padding: 40px;">
          <div class="space-y-4">
            <span style="font-size:32px;">🎓</span>
            <h4 style="font-family:var(--font-display); font-size:20px; font-weight:800;">Secure Eligibility</h4>
            <p style="font-size:12px; color:var(--text-muted); line-height:1.5;">Establish your Builder Membership in DOT DEMO 2026 to unlock access to the scholarship portal.</p>
          </div>
          <button onclick="openRegisterModal('founder')" class="btn-orange" style="width:100%; margin-top:24px;">
            Secure Membership & Apply
          </button>
        </div>
      </div>

    </div>
  `;
}

// ---------- DEDICATED TRACK DETAILS PAGE ----------
function renderChampionship(trackId) {
  const t = TRACKS_METADATA[trackId];
  if (!t) {
    renderNotFound();
    return;
  }

  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap">
      
      <!-- HERO -->
      <section class="champ-hero">
        <div class="champ-hero-grid">
          <div class="champ-hero-left">
            <span class="champ-badge-pill">Arena category</span>
            <h1 class="champ-title">${t.name}</h1>
            <p class="champ-tagline" style="font-size: 16px; margin-top:16px;">${t.tagline}</p>
          </div>
          
          <!-- Sticky Sidebar Checkout -->
          <div class="glass-panel checkout-sticky-card">
            <div class="price-sub">Championship Membership</div>
            <div class="sticky-card-price">₦30,000</div>
            <ul class="sticky-card-list">
              <li>Entry into the ${t.name} track</li>
              <li>Verified Builder Passport profile</li>
              <li>Direct WhatsApp Node coordinates</li>
              <li>Scholarship application access</li>
            </ul>
            <button onclick="openRegisterModal('${trackId}')" class="btn-orange" style="width:100%;">
              Secure Registration
            </button>
          </div>
        </div>
      </section>

      <!-- DETAIL CONTENT GRID -->
      <section class="champ-details-grid section-padding">
        <div class="champ-main-content">
          
          <div class="detail-section">
            <h3>Overview & Purpose</h3>
            <p>${t.desc}</p>
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
            <h3>Key Learning Outcomes</h3>
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
            <h3>Judging & Score weights</h3>
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

// ---------- POST-PURCHASE ONBOARDING ----------
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

// ---------- ADMIN TELEMETRY RENDERER ----------
function renderAdmin() {
  const t = getTelemetry();

  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap section-padding">
      <div class="section-header">
        <span class="section-tag">TELEMETRY</span>
        <h1 class="section-title">Admin Telemetry Console</h1>
        <p class="section-desc">Real-time statistics measuring student acquisitions, registrations, and conversions.</p>
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
          <div class="metric-lbl">Paying Members</div>
          <div class="metric-value">${t.purchases.toLocaleString()}</div>
        </div>
        <div class="glass-panel metric-panel">
          <div class="metric-lbl">Est. Revenue</div>
          <div class="metric-value">₦${t.revenue.toLocaleString()}</div>
        </div>
      </div>

      <div class="admin-data-grid">
        <div class="glass-panel table-panel">
          <h3>University Node Leaderboard</h3>
          <table class="table-admin">
            <thead>
              <tr>
                <th>Campus Node</th>
                <th style="text-align:right;">Registered Builders</th>
              </tr>
            </thead>
            <tbody>
              ${t.universityStandings.map(u => `
                <tr>
                  <td>${u.name}</td>
                  <td style="text-align:right; font-weight:700; color:var(--orange);">${u.count}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="glass-panel table-panel flex flex-col justify-between">
          <div>
            <h3>Ecosystem Conversion Efficiency</h3>
            <div style="font-size:12px; color:var(--text-muted); space-y:12px; margin-top:20px;">
              <div>Visitor to Registration rate: <strong class="text-orange-500">${((t.registrations / t.visitors) * 100).toFixed(1)}%</strong></div>
              <div style="margin-top:10px;">Registration to Member conversion: <strong class="text-orange-500">${((t.purchases / t.registrations) * 100).toFixed(1)}%</strong></div>
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
