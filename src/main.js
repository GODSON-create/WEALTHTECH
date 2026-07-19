// ---------- DYNAMIC METADATA ----------
const TRACKS_METADATA = {
  founder: {
    name: 'Founder Challenge',
    icon: '🚀',
    tagline: 'Pitch your venture, prove traction, and unlock direct funding.',
    desc: 'The centerpiece championship for builders looking to launch scalable startups. Prove your customer acquisition metrics, validate your MVP, and compete for capital matching.',
    who: ['Aspiring entrepreneurs', 'Early stage student founders', 'Business development leads', 'Product thinkers'],
    outcomes: ['Develop investor-ready decks', 'Master unit economics and customer validation', 'Pitch directly to early-stage VCs', 'Earn capital grants'],
    checkoutSlug: 'dot-demo-founder-membership',
    whatsapp: 'https://chat.whatsapp.com/founder-mock-id'
  },
  wealthtech: {
    name: 'WealthTech Challenge',
    icon: '📈',
    tagline: 'Show your investment strategies and financial analysis skills.',
    desc: 'Design digital saving pools, micro-saving modules, and retail asset distribution platforms. Test your solutions in modern regulatory sandboxes.',
    who: ['Finance students', 'Algorithmic traders', 'Aspiring asset managers', 'Fintech builders'],
    outcomes: ['Design saving pool smart algorithms', 'Formulate structured investment decks', 'Understand regulatory sandboxes', 'Map retail investment funnels'],
    checkoutSlug: 'dot-demo-wealthtech-membership',
    whatsapp: 'https://chat.whatsapp.com/wealthtech-mock-id'
  },
  gaming: {
    name: 'Gaming Championship',
    icon: '🎮',
    tagline: 'Compete nationally in strategy and esports tournaments to claim rewards.',
    desc: 'Battle against the best tactical gamers in bracketed strategy tournaments. Build your profile as a national champion.',
    who: ['Esports players', 'Strategy game enthusiasts', 'Chess masters', 'Tactical thinkers'],
    outcomes: ['Compete in national streams', 'Form institutional gaming nodes', 'Earn reputation points', 'Claim cash prizes'],
    checkoutSlug: 'dot-demo-gaming-membership',
    whatsapp: 'https://chat.whatsapp.com/gaming-mock-id'
  },
  creator: {
    name: 'Creator Championship',
    icon: '🎨',
    tagline: 'Build viral visual content, newsletters, and digital media assets.',
    desc: 'Design high-converting newsletters, record viral media campaigns, and launch digital distribution channels to build direct audience networks.',
    who: ['Video editors', 'Writers/Journalists', 'Social media managers', 'Creative designers'],
    outcomes: ['Grow direct subscriber bases', 'Design conversion content frameworks', 'Master multi-platform analytics', 'Connect with brands'],
    checkoutSlug: 'dot-demo-creator-membership',
    whatsapp: 'https://chat.whatsapp.com/creator-mock-id'
  },
  design: {
    name: 'Design Championship',
    icon: '✨',
    tagline: 'Design world-class landing pages and application interfaces.',
    desc: 'Solve interface challenges, develop brand design books, and design mobile frames that feel modern and premium.',
    who: ['UI/UX designers', 'Visual illustrators', 'Product designers', 'Creative artists'],
    outcomes: ['Design responsive interface prototypes', 'Perform direct usability studies', 'Build stellar visual portfolios', 'Secure design fellowships'],
    checkoutSlug: 'dot-demo-design-membership',
    whatsapp: 'https://chat.whatsapp.com/design-mock-id'
  },
  ai: {
    name: 'AI Innovation Challenge',
    icon: '🧠',
    tagline: 'Deploy neural models and custom workflow automations.',
    desc: 'Deploy custom neural agents, integrate LLM prompt engines, and construct workflow automations that solve local business problems.',
    who: ['Python developers', 'Data science majors', 'Automation engineers', 'Prompt developers'],
    outcomes: ['Deploy custom LLM orchestrators', 'Construct API database workflows', 'Deploy functional neural agents', 'Earn compute grants'],
    checkoutSlug: 'dot-demo-ai-membership',
    whatsapp: 'https://chat.whatsapp.com/ai-mock-id'
  },
  coding: {
    name: 'Coding Championship',
    icon: '💻',
    tagline: 'Write smart contracts and scalable backend databases.',
    desc: 'Construct clean web apps, code scalable transaction ledgers, and deploy robust APIs under strict timing limits.',
    who: ['Software engineers', 'Web developers', 'Blockchain developers', 'Systems programmers'],
    outcomes: ['Build full-stack web architectures', 'Write verified smart contracts', 'Integrate payment databases', 'Secure tech placements'],
    checkoutSlug: 'dot-demo-coding-membership',
    whatsapp: 'https://chat.whatsapp.com/coding-mock-id'
  },
  music: {
    name: 'Music Championship',
    icon: '🎵',
    tagline: 'Create beats and sound design branding for modern products.',
    desc: 'Produce original audio clips, track beats, and sonic signatures designed to branding modern platforms.',
    who: ['Audio engineers', 'Music producers', 'Sound designers', 'Vocalists'],
    outcomes: ['Create digital branding audios', 'Synthesize original beats', 'Learn commercial sound syncs', 'Earn production setups'],
    checkoutSlug: 'dot-demo-music-membership',
    whatsapp: 'https://chat.whatsapp.com/music-mock-id'
  },
  speaking: {
    name: 'Public Speaking Championship',
    icon: '🎤',
    tagline: 'Deliver compelling product storytelling and keynotes.',
    desc: 'Present product stories, pitch founders solutions, and deliver keynotes that inspire and convert audiences.',
    who: ['Public speakers', 'Sales developers', 'Product managers', 'Storytellers'],
    outcomes: ['Deliver live stage pitches', 'Write persuasive product scripts', 'Master public communications', 'Win speaker fellowships'],
    checkoutSlug: 'dot-demo-speaking-membership',
    whatsapp: 'https://chat.whatsapp.com/speaking-mock-id'
  },
  chess: {
    name: 'Chess Championship',
    icon: '👑',
    tagline: 'Prove strategic intelligence in bracketed chess tournaments.',
    desc: 'Show strategic depth in virtual bracketed matches. Solve complex tactical chess patterns and advance to the grand arena.',
    who: ['Chess players', 'Puzzle solvers', 'Strategic planners'],
    outcomes: ['Compete in chess brackets', 'Analyze game coordinates', 'Earn ranking titles', 'Claim Grandmaster cash rewards'],
    checkoutSlug: 'dot-demo-chess-membership',
    whatsapp: 'https://chat.whatsapp.com/chess-mock-id'
  }
};

// ---------- TELEMETRY UTILS ----------
function getTelemetry() {
  let stats = localStorage.getItem('dot_telemetry');
  if (!stats) {
    stats = {
      visitors: 8520,
      registrations: 2480,
      purchases: 320,
      revenue: 9600000,
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

// Track page loads
(function() {
  const t = getTelemetry();
  t.visitors += 1;
  saveTelemetry(t);
})();

// ---------- ROUTER ----------
const appViewport = document.getElementById('app-viewport');

function routeChange() {
  const hash = window.location.hash || '#/';
  
  // Close mobile navigation overlay
  document.getElementById('mobileNavOverlay').classList.remove('active');
  
  // Scroll to top on navigation
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

// ---------- REGISTRATION MODAL ----------
let currentSelectedTrackForModal = 'founder';

function openRegisterModal(trackId = 'founder') {
  currentSelectedTrackForModal = trackId;
  const modalHtml = `
    <div class="fixed-modal-wrap" id="regModal">
      <div class="modal-box">
        <button class="modal-close" onclick="closeRegisterModal()">&times;</button>
        <h3 class="modal-title">Secure Builder Membership</h3>
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
            💡 One-time ₦10,000 Builder Membership contribution secures eligibility for all championships, WhatsApp networks, and scholarship assessments.
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
  t.revenue += 10000;
  saveTelemetry(t);

  closeRegisterModal();

  // Redirect dynamically to Sellenda with track parameter prefilled
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
            ⚡ DOT DEMO 2026 • APPLICATIONS OPEN
          </div>
          <h1 class="hero-h1">
            Prove Yourself.<br />
            <span class="logo-accent">Build the Future.</span>
          </h1>
          <p class="hero-sub" style="margin: 0 0 24px 0;">
            Whatever you want to become, DOT DEMO is Nigeria&apos;s largest virtual student arena to build projects, validate capacity, and secure ₦300,000 entrepreneurship scholarships.
          </p>
          <div class="hero-ctas-row" style="justify-content: flex-start; margin: 0;">
            <button onclick="openRegisterModal('founder')" class="btn-orange">Claim Builder Membership</button>
            <a href="#/competitions" class="btn-outline">Explore Rewards ($1000)</a>
          </div>
        </div>

        <div class="hero-portrait-side">
          <div class="hero-portrait-box">
            <!-- Simulated premium builder avatar image placeholder -->
            <div style="width:100%; height:100%; bg-color:#151210; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#1C1917; position:relative;">
              <span style="font-size:72px; animation: float 3s ease-in-out infinite;">🏆</span>
              <span style="font-family:var(--font-mono); font-size:10px; color:var(--text-muted); text-transform:uppercase; margin-top:16px;">
                Nigeria Builder Node
              </span>
            </div>
            <div class="portrait-badge-overlay">
              ₦300 Billion Scholarship Fund Eligible
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
            <div class="stat-desc">Top 100 builders from each of the 10 tracks receive direct payouts.</div>
          </div>
        </div>
        <div class="stat-block">
          <div class="stat-large-val">₦300B</div>
          <div class="stat-label-wrap">
            <span class="stat-num-prefix">02</span>
            <div class="stat-desc">Total committed scholarship pool covering entrepreneurship packs for 1M members.</div>
          </div>
        </div>
        <div class="stat-block">
          <div class="stat-large-val">10</div>
          <div class="stat-label-wrap">
            <span class="stat-num-prefix">03</span>
            <div class="stat-desc">Specialized championship categories spanning tech, finance, chess, and creative arts.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE CURVED CARD ARC SHOWCASE (DOMINIC INSPIRED) -->
    <section class="section-padding max-width-wrap">
      <div class="asymmetric-grid">
        <div>
          <span class="section-tag">Let&apos;s Build Exceptional Things</span>
          <h2 class="hero-h1" style="font-size: clamp(28px, 4vw, 42px); line-height: 1.1; margin-top:12px;">
            10 Arenas. One Ecosystem.
          </h2>
          <p class="hero-sub" style="max-width: 580px; margin: 16px 0 0 0; font-size: 14px;">
            We have constructed specialized paths for founders, developers, traders, creatives, and strategists. Hover over each card to preview your arena.
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
          <div class="arc-card-title">AI Agent</div>
        </div>
        <div class="arc-card-node" onclick="window.location.hash='#/championship/coding'">
          <div class="arc-card-icon">💻</div>
          <div class="arc-card-title">Coding</div>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 40px;">
        <a href="#/competitions" class="btn-outline">Browse All 10 Tracks</a>
      </div>
    </section>

    <!-- PLAN / MEMBERSHIP STYLING (Glowing orange Highlight) -->
    <section class="section-padding max-width-wrap" id="benefits">
      <div class="section-header">
        <span class="section-tag">MEMBERSHIP ACCESS</span>
        <h2 class="section-title" style="font-family:var(--font-display); font-size: 32px;">Choose Your Entry Path</h2>
      </div>

      <div class="pricing-deck-row">
        <!-- Basic Plan -->
        <div class="glass-panel pricing-panel">
          <div class="space-y-4">
            <span class="section-tag">Access Node</span>
            <h4 style="font-family:var(--font-display); font-size: 24px; font-weight:800;">Visitor</h4>
            <p class="text-muted" style="font-size: 13px;">Read-only observer of the national standings and broadcast streams.</p>
          </div>
          <div style="margin: 24px 0;">
            <div style="font-size: 36px; font-weight: 800; font-family:var(--font-display);">Free</div>
          </div>
          <button class="btn-outline" style="width:100%; cursor:not-allowed;" disabled>No Registry Needed</button>
        </div>

        <!-- Highlighted Orange Plan -->
        <div class="glass-panel pricing-panel highlighted-panel">
          <div class="space-y-4">
            <span class="section-tag" style="color:white; border-color:white;">Recommended</span>
            <h4 style="font-family:var(--font-display); font-size: 24px; font-weight:800;">Builder Member</h4>
            <p style="font-size: 13px; opacity:0.85;">Full entry to the championships, ₦300,000 scholarship assessment, verified passport, and WhatsApp nodes.</p>
          </div>
          <div style="margin: 24px 0;">
            <div style="font-size: 36px; font-weight: 800; font-family:var(--font-display);">₦10,000</div>
            <div style="font-size: 10px; font-family: var(--font-mono); text-transform:uppercase; opacity:0.7;">One-time contribution</div>
          </div>
          <button onclick="openRegisterModal('founder')" class="btn-orange" style="width:100%;">Join DOT DEMO</button>
        </div>

        <!-- Corporate Enterprise Plan -->
        <div class="glass-panel pricing-panel">
          <div class="space-y-4">
            <span class="section-tag">Capital Partner</span>
            <h4 style="font-family:var(--font-display); font-size: 24px; font-weight:800;">VC Ecosystem</h4>
            <p class="text-muted" style="font-size: 13px;">Access deal flow indexing, track builders portfolios, and sponsor specific university nodes.</p>
          </div>
          <div style="margin: 24px 0;">
            <div style="font-size: 36px; font-weight: 800; font-family:var(--font-display);">Custom</div>
          </div>
          <a href="mailto:partners@dot.platform" class="btn-outline" style="width:100%;">Contact Partners</a>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS TIMELINE -->
    <section class="section-padding max-width-wrap" id="timeline">
      <div class="section-header">
        <span class="section-tag">JOURNEY</span>
        <h2 class="section-title" style="font-family:var(--font-display); font-size: 32px;">How It Works</h2>
      </div>

      <div class="timeline-flow">
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 01</span>
            <h4 class="timeline-step-title">Choose and Register</h4>
            <p class="timeline-step-desc">Pick your category and submit details via the secure registration modal.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 02</span>
            <h4 class="timeline-step-title">Membership Checkout</h4>
            <p class="timeline-step-desc">Complete checkout on Sellenda to secure your eligibility.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 03</span>
            <h4 class="timeline-step-title">WhatsApp Community Onboarding</h4>
            <p class="timeline-step-desc">Join your track-specific WhatsApp community node automatically.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-step-num">Step 04</span>
            <h4 class="timeline-step-title">Enter DOT OS Dashboard</h4>
            <p class="timeline-step-desc">Log projects on your Builder Passport, apply for scholarships, and submit coordinates.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="section-padding max-width-wrap" id="faq">
      <div class="section-header">
        <span class="section-tag">ANSWERS</span>
        <h2 class="section-title" style="font-family:var(--font-display); font-size: 32px;">Frequently Asked Questions</h2>
      </div>

      <div class="faq-box">
        <div class="glass-panel faq-card">
          <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
            <span>Who is eligible to participate?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-content" style="display:none;">
            Any university student, polytechnic student, or recent graduate across Nigeria can participate.
          </div>
        </div>
        <div class="glass-panel faq-card">
          <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
            <span>Is the membership contribution refundable?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-content" style="display:none;">
            The ₦10,000 contribution secures your lifelong access to DOT OS resources and chapters and is non-refundable.
          </div>
        </div>
        <div class="glass-panel faq-card">
          <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
            <span>How are winners selected for the $1,000 payout?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-content" style="display:none;">
            The top 100 builders in each category are evaluated based on their milestone scores, MVP validations, and presentation delivery at the virtual finals.
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

// ---------- COMPETITIONS PAGE ($1000 PRIZES) ----------
function renderCompetitions() {
  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap section-padding">
      
      <!-- HEADER PANEL -->
      <section class="hero-section" style="padding-top: 40px;">
        <span class="hero-eyebrow">💰 $10,000 TOTAL REWARDS PER ARENA</span>
        <h1 class="hero-h1" style="font-size: clamp(34px, 5vw, 62px); margin: 12px 0 20px;">
          The Championship Arenas
        </h1>
        <p class="hero-sub" style="max-width: 680px;">
          DOT DEMO 2026 will award **$1,000 rewards to the top 100 builders** in each of the 10 categories (representing $10 per builder to seed their initial ecosystem transaction logs).
        </p>
      </section>

      <!-- 10 TRACKS SHOWCASE -->
      <div class="paths-grid">
        ${Object.entries(TRACKS_METADATA).map(([id, t]) => `
          <div class="glass-panel glass-panel-hover path-card" style="min-height: 260px;">
            <div>
              <div class="path-icon">${t.icon}</div>
              <h4 class="path-name" style="font-size: 20px;">${t.name}</h4>
              <p class="path-desc" style="font-size: 13px; line-height: 1.5;">${t.tagline}</p>
              <div style="font-size:10px; font-family:var(--font-mono); color:var(--orange); font-weight:bold; margin-top:8px;">
                🏆 $1,000 Reward Pool (Top 100 Payouts)
              </div>
            </div>
            <a href="#/championship/${id}" class="path-btn" style="margin-top: 20px;">Review Rules & Outcomes →</a>
          </div>
        `).join('')}
      </div>

      <!-- RULES & EVALUATION DETAILS -->
      <section class="section-padding" style="margin-top: 80px; border-top:1px solid var(--border-color);">
        <div class="asymmetric-grid">
          <div>
            <h3 style="font-family:var(--font-display); font-size: 24px; font-weight:800; margin-bottom: 20px;">
              Evaluation & Judging Ledger
            </h3>
            <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
              To keep standings transparent and verifiable, all builder evaluations are logged inside the DOT OS public leaderboard node.
            </p>
            <div class="bullet-list-grid">
              <div class="bullet-item">
                <span class="bullet-idx">01</span>
                <span><strong>Milestone completion:</strong> Points accumulated through course quizzes and coding sandbox validation.</span>
              </div>
              <div class="bullet-item">
                <span class="bullet-idx">02</span>
                <span><strong>MVP validation:</strong> Feedback points gathered from local campus checks and beta testers.</span>
              </div>
              <div class="bullet-item">
                <span class="bullet-idx">03</span>
                <span><strong>Final Stage pitch:</strong> Virtual presentations assessed by VC capital partners.</span>
              </div>
            </div>
          </div>
          <div class="vertical-rule"></div>
        </div>
      </section>

    </div>
  `;
}

// ---------- SCHOLARSHIP PAGE (₦300B FUND) ----------
function renderScholarship() {
  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap section-padding">
      
      <!-- HEADER PANEL -->
      <section class="hero-section" style="padding-top: 40px;">
        <span class="hero-eyebrow">🎓 ₦300 BILLION ACADEMY PIPELINE</span>
        <h1 class="hero-h1" style="font-size: clamp(34px, 5vw, 62px); margin: 12px 0 20px;">
          ₦300 Billion Scholarship Fund
        </h1>
        <p class="hero-sub" style="max-width: 680px;">
          Covering entrepreneurship, AI tool configurations, templates, and verified passport indexing for **1 Million members** (₦300,000 value package per builder).
        </p>
      </section>

      <!-- MAIN SPLIT LAYOUT -->
      <div class="asymmetric-grid">
        <div class="space-y-6">
          <h3 style="font-family:var(--font-display); font-size: 22px; font-weight:800; border-bottom:1px solid var(--border-color); padding-bottom: 12px;">
            Scholarship Selection & Eligibility
          </h3>
          <p style="font-size:14px; color:var(--text-muted); line-height:1.6;">
            The entrepreneurship scholarship package unlocks direct access to premium, structured curriculum nodes designed by industry operators. Rather than a cash payment, we supply the actual tools, assets, and mentorship nodes:
          </p>

          <ul style="list-style:none; font-size:13px; color:var(--text-muted); space-y:8px;">
            <li style="margin-bottom:10px;"><strong style="color:var(--orange);">✓ Course Library:</strong> Venture ideation, tech stacks, growth hacking, and legal setups.</li>
            <li style="margin-bottom:10px;"><strong style="color:var(--orange);">✓ AI Prompt Builder:</strong> Automated TAM calculations, model drafting tools, and pitch proposals.</li>
            <li style="margin-bottom:10px;"><strong style="color:var(--orange);">✓ Hub Connections:</strong> Automatic matching with local state chapters and mentor pools.</li>
          </ul>

          <div style="background:var(--orange-dim); border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); font-size:12px; color:var(--orange); line-height: 1.5;">
            💡 <strong>Eligibility:</strong> Claiming your Builder Membership unlocks your eligibility to apply. Allocation is performance-evaluated throughout the program.
          </div>
        </div>
        
        <div class="vertical-rule"></div>

        <!-- Dynamic checkout anchor -->
        <div class="glass-panel p-8 text-center flex flex-col justify-between" style="border-color:var(--orange-dim); min-height: 300px;">
          <div class="space-y-4">
            <span style="font-size:32px;">🎓</span>
            <h4 style="font-family:var(--font-display); font-size:18px; font-weight:800;">Verify Eligibility</h4>
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

// ---------- CHAMPIONSHIP DETAIL PAGE ----------
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
            <span class="champ-badge-pill">2026 TRACK</span>
            <h1 class="champ-title">${t.name}</h1>
            <p class="champ-tagline">${t.tagline}</p>
          </div>
          
          <!-- Sidebar Checkout -->
          <div class="glass-panel checkout-sticky-card">
            <div class="price-sub">Championship Membership</div>
            <div class="sticky-card-price">₦10,000</div>
            <ul class="sticky-card-list">
              <li>Access to ${t.name} track submissions</li>
              <li>WhatsApp Community node credentials</li>
              <li>Builder Passport on DOT OS</li>
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
            <h3>Overview</h3>
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
            <h3>Judging Criteria</h3>
            <p>Submissions will be evaluated by an international panel of industry specialists based on product readiness, code hygiene, execution metrics, and market feasibility.</p>
          </div>

        </div>
      </section>
      
    </div>
  `;
}

// ---------- POST-PURCHASE SUCCESS ----------
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

// ---------- NAVIGATION & THEME LISTENERS ----------
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

  // Load saved theme
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
