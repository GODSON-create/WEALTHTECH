// ---------- MOCK TELEMETRY & TRACK DATA ----------
const TRACKS_METADATA = {
  founder: {
    name: 'Founder Challenge',
    icon: '🚀',
    tagline: 'Pitch your venture, prove traction, and unlock direct treasury funding.',
    desc: 'The centerpiece championship for builders looking to launch scalable startups. Prove your customer acquisition metrics, validate your MVP, and compete for capital matching.',
    who: ['Aspiring entrepreneurs', 'Early stage student founders', 'Business development leads', 'Product thinkers'],
    outcomes: ['Develop investor-ready decks', 'Master unit economics and customer validation', 'Pitch directly to early-stage VCs', 'Earn capital grants'],
    checkoutSlug: 'dot-demo-founder-membership',
    whatsapp: 'https://chat.whatsapp.com/founder-mock-id'
  },
  wealthtech: {
    name: 'WealthTech Challenge',
    icon: '📈',
    tagline: 'Show your investment strategies, trading algorithms, and financial analysis skills.',
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
    tagline: 'Design world-class landing pages, application interfaces, and assets.',
    desc: 'Solve interface challenges, develop brand design books, and design mobile frames that feel modern and premium.',
    who: ['UI/UX designers', 'Visual illustrators', 'Product designers', 'Creative artists'],
    outcomes: ['Design responsive interface prototypes', 'Perform direct usability studies', 'Build stellar visual portfolios', 'Secure design fellowships'],
    checkoutSlug: 'dot-demo-design-membership',
    whatsapp: 'https://chat.whatsapp.com/design-mock-id'
  },
  ai: {
    name: 'AI Innovation Challenge',
    icon: '🧠',
    tagline: 'Deploy neural models, custom LLM agents, and automation architectures.',
    desc: 'Deploy custom neural agents, integrate LLM prompt engines, and construct workflow automations that solve local business problems.',
    who: ['Python developers', 'Data science majors', 'Automation engineers', 'Prompt developers'],
    outcomes: ['Deploy custom LLM orchestrators', 'Construct API database workflows', 'Deploy functional neural agents', 'Earn compute grants'],
    checkoutSlug: 'dot-demo-ai-membership',
    whatsapp: 'https://chat.whatsapp.com/ai-mock-id'
  },
  coding: {
    name: 'Coding Championship',
    icon: '💻',
    tagline: 'Write smart contracts, web applications, and backend integration pipelines.',
    desc: 'Construct clean web apps, code scalable transaction ledgers, and deploy robust APIs under strict timing limits.',
    who: ['Software engineers', 'Web developers', 'Blockchain developers', 'Systems programmers'],
    outcomes: ['Build full-stack web architectures', 'Write verified smart contracts', 'Integrate payment databases', 'Secure tech placements'],
    checkoutSlug: 'dot-demo-coding-membership',
    whatsapp: 'https://chat.whatsapp.com/coding-mock-id'
  },
  music: {
    name: 'Music Championship',
    icon: '🎵',
    tagline: 'Create original tracks, beats, and audio branding for modern apps.',
    desc: 'Produce original audio clips, track beats, and sonic signatures designed to branding modern platforms.',
    who: ['Audio engineers', 'Music producers', 'Sound designers', 'Vocalists'],
    outcomes: ['Create digital branding audios', 'Synthesize original beats', 'Learn commercial sound syncs', 'Earn production setups'],
    checkoutSlug: 'dot-demo-music-membership',
    whatsapp: 'https://chat.whatsapp.com/music-mock-id'
  },
  speaking: {
    name: 'Public Speaking Championship',
    icon: '🎤',
    tagline: 'Deliver compelling product storytelling and keynotes to live audiences.',
    desc: 'Present product stories, pitch founders solutions, and deliver keynotes that inspire and convert audiences.',
    who: ['Public speakers', 'Sales developers', 'Product managers', 'Storytellers'],
    outcomes: ['Deliver live stage pitches', 'Write persuasive product scripts', 'Master public communications', 'Win speaker fellowships'],
    checkoutSlug: 'dot-demo-speaking-membership',
    whatsapp: 'https://chat.whatsapp.com/speaking-mock-id'
  },
  chess: {
    name: 'Chess Championship',
    icon: '👑',
    tagline: 'Prove strategic intelligence in national bracketed chess matches.',
    desc: 'Show strategic depth in virtual bracketed matches. Solve complex tactical chess patterns and advance to the grand arena.',
    who: ['Chess players', 'Puzzle solvers', 'Strategic planners'],
    outcomes: ['Compete in chess brackets', 'Analyze game coordinates', 'Earn ranking titles', 'Claim Grandmaster cash rewards'],
    checkoutSlug: 'dot-demo-chess-membership',
    whatsapp: 'https://chat.whatsapp.com/chess-mock-id'
  }
};

// ---------- LOCAL STORAGE SYSTEM ----------
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

// Increment visitors count on page load
(function() {
  const t = getTelemetry();
  t.visitors += 1;
  saveTelemetry(t);
})();

// ---------- ROUTER ROUTING ----------
const appViewport = document.getElementById('app-viewport');

function routeChange() {
  const hash = window.location.hash || '#/';
  
  // Close mobile menus on route change
  document.getElementById('mobileNavOverlay').classList.remove('active');
  
  if (hash === '#/' || hash === '#') {
    renderHome();
  } else if (hash.startsWith('#/championship/')) {
    const trackId = hash.split('#/championship/')[1];
    renderChampionship(trackId);
  } else if (hash === '#/championships') {
    renderChampionshipsDirectory();
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

// ---------- MOUNT MODAL FORM ----------
let currentSelectedTrackForModal = 'founder';

function openRegisterModal(trackId = 'founder') {
  currentSelectedTrackForModal = trackId;
  const modalHtml = `
    <div class="fixed-modal-wrap" id="regModal">
      <div class="modal-box glass-panel border border-orange-500/20">
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
              <label>University / School *</label>
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
            💡 Membership fee of ₦10,000 unlocks full DOT OS benefits, scholarship eligibility, and WhatsApp community routing.
          </div>

          <button type="submit" class="btn-orange" style="width:100%; margin-top:16px;">
            Secure Membership & Checkout
          </button>
        </form>
      </div>
    </div>
  `;
  
  // Append to body if not already there
  let div = document.getElementById('modal-mount');
  if (!div) {
    div = document.createElement('div');
    div.id = 'modal-mount';
    document.body.appendChild(div);
  }
  div.innerHTML = modalHtml;
  
  // Bind submission event
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

  // Telemetry updates
  const t = getTelemetry();
  t.registrations += 1;
  
  // Track university statistics
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

  // Close the modal
  closeRegisterModal();

  // Redirect to Sellenda dynamically
  const trackId = currentSelectedTrackForModal;
  const track = TRACKS_METADATA[trackId] || TRACKS_METADATA.founder;
  
  // Success redirect back to websitesuccess page with selected track URL parameter
  const successRedirect = encodeURIComponent(`${window.location.origin}/#/success?track=${trackId}`);
  const sellendaUrl = `https://www.sellenda.com.ng/events/${track.checkoutSlug}?redirect_success=${successRedirect}`;
  
  // Load in Sellenda external page
  window.location.href = sellendaUrl;
}

// ---------- VIEW RENDERERS ----------

function renderHome() {
  appViewport.innerHTML = `
    <div class="space-y-section">
      <!-- SECTION 1: HERO -->
      <section class="hero-section max-width-wrap">
        <div class="ticker-banner">
          📢 ₦300 BILLION SCHOLARSHIP FUND COMMITMENT • APPLY SUBJECT TO ELIGIBILITY
        </div>
        <h1 class="hero-title">
          Build the Future. <br />
          <span class="logo-accent">Starting Today.</span>
        </h1>
        <p class="hero-sub">
          Join <strong>DOT DEMO 2026</strong>, Nigeria&apos;s largest virtual student championship. Gain eligibility to apply for our ₦300,000 entrepreneurship learning scholarship, unlock your verified Builder Passport, and connect with global capital partners.
        </p>
        <div class="hero-ctas-row">
          <button onclick="openRegisterModal('founder')" class="btn-orange">Join DOT DEMO</button>
          <a href="#/championships" class="btn-outline">Explore Championships</a>
        </div>
        
        <!-- Live connections visual node graph -->
        <div class="glass-panel max-width-wrap" style="height:260px; border-color:var(--orange-dim); display:flex; flex-direction:column; justify-content:center; align-items:center; overflow:hidden; position:relative;">
          <div style="font-size:24px; animation: float 3s ease-in-out infinite;">🔗</div>
          <h4 style="font-family:var(--font-mono); font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.12em; margin-top:12px;">
            VIRTUAL BUILDER NODE NETWORK: ACTIVE
          </h4>
          <div style="font-size:10px; font-family:var(--font-mono); color:var(--orange); font-weight:bold; margin-top:8px;">
            10 Championship Tracks • Nigeria-wide Chapters Online
          </div>
        </div>
      </section>

      <!-- SECTION 2: WHAT IS DOT DEMO -->
      <section class="section-padding max-width-wrap">
        <div class="section-header">
          <span class="section-tag">National Scale</span>
          <h2 class="section-title">Whatever your track, prove yourself.</h2>
          <p class="section-desc">DOT DEMO 2026 is a virtual championship and academy engineered to discover and launch student builders.</p>
        </div>

        <div class="benefits-grid">
          <div class="glass-panel benefit-item">
            <div class="benefit-emoji">🚀</div>
            <h4 class="benefit-title">Launch Startups</h4>
            <p class="benefit-desc">Build verified MVPs, form teams, and pitch to active VC partners.</p>
          </div>
          <div class="glass-panel benefit-item">
            <div class="benefit-emoji">⚙️</div>
            <h4 class="benefit-title">Develop Capabilities</h4>
            <p class="benefit-desc">Unlock modern AI frameworks, codebase sandboxes, and development tracks.</p>
          </div>
          <div class="glass-panel benefit-item">
            <div class="benefit-emoji">🏆</div>
            <h4 class="benefit-title">National Rewards</h4>
            <p class="benefit-desc">Climb university leaderboards and claim national recognition.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 3: MEMBERSHIP BENEFITS -->
      <section class="section-padding max-width-wrap" id="benefits">
        <div class="overview-grid">
          <div class="overview-left">
            <span class="section-tag">Ecosystem Passport</span>
            <h3 class="section-title">The DOT Builder Membership</h3>
            <p class="section-desc" style="font-size:14px; line-height:1.6;">
              Every participant enters DOT DEMO through an official Builder Membership. Membership is the key that unlocks access to the championships and the lifelong learning network:
            </p>
            <ul style="list-style:none; font-size:13px; color:var(--text-muted); space-y:8px; margin:20px 0;">
              <li style="margin-bottom:8px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Full access to the entrepreneurship curriculum & library</li>
              <li style="margin-bottom:8px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Verified Builder Passport inside DOT OS</li>
              <li style="margin-bottom:8px;"><span style="color:var(--orange); font-weight:bold;">✓</span> State and campus-level group community access</li>
              <li style="margin-bottom:8px;"><span style="color:var(--orange); font-weight:bold;">✓</span> Eligibility to apply for the ₦300,000 scholarship</li>
            </ul>
            <a href="#/scholarship" class="btn-outline" style="font-size:12px; padding:10px 20px;">Review Scholarship Criteria</a>
          </div>
          <div class="glass-panel overview-right-card text-center">
            <div class="price-sub">Lifetime Value</div>
            <div class="sticky-card-price">₦10,000</div>
            <p style="font-size:12px; color:var(--text-muted); margin:12px 0 24px;">One-time membership contribution. Grants eligibility to enroll and participate in all 10 championship tracks.</p>
            <button onclick="openRegisterModal('founder')" class="btn-orange" style="width:100%;">Join As Member</button>
          </div>
        </div>
      </section>

      <!-- SECTION 4: BUILDER PATHS (10 CARDS) -->
      <section class="section-padding max-width-wrap" id="championships">
        <div class="section-header">
          <span class="section-tag">CHAMPIONSHIP DIRECTORY</span>
          <h2 class="section-title">10 Specialized Arenas</h2>
          <p class="section-desc">Choose the championship matching your skillset. Click on any track card to view details.</p>
        </div>

        <div class="paths-grid">
          ${Object.entries(TRACKS_METADATA).map(([id, t]) => `
            <div class="glass-panel glass-panel-hover path-card">
              <div>
                <div class="path-icon">${t.icon}</div>
                <h4 class="path-name">${t.name}</h4>
                <p class="path-desc">${t.tagline}</p>
              </div>
              <a href="#/championship/${id}" class="path-btn">View Track Details →</a>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- SECTION 5: HOW IT WORKS -->
      <section class="section-padding max-width-wrap">
        <div class="section-header">
          <span class="section-tag">THE FUNNEL</span>
          <h2 class="section-title">How It Works</h2>
        </div>

        <div class="timeline-flow">
          <div class="timeline-step">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-step-num">Step 01</span>
              <h4 class="timeline-step-title">Discover and Register</h4>
              <p class="timeline-step-desc">Select your track and input your campus details in the membership form.</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-step-num">Step 02</span>
              <h4 class="timeline-step-title">Membership Checkout</h4>
              <p class="timeline-step-desc">Secure your registration via the Sellenda gateway to unlock OS access.</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-step-num">Step 03</span>
              <h4 class="timeline-step-title">WhatsApp Onboarding</h4>
              <p class="timeline-step-desc">Get placed in your track-specific state community and meet fellow builders.</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-step-num">Step 04</span>
              <h4 class="timeline-step-title">Enter DOT OS</h4>
              <p class="timeline-step-desc">Create your permanent Builder Passport profile and begin learning.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 6: FAQ -->
      <section class="section-padding max-width-wrap" id="faq">
        <div class="section-header">
          <span class="section-tag">FAQ</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>

        <div class="faq-box">
          <div class="glass-panel faq-card">
            <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
              <span>Who can join DOT DEMO?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-content" style="display:none;">
              Any university student, polytechnic student, or recent graduate in Nigeria can register for any track.
            </div>
          </div>
          
          <div class="glass-panel faq-card">
            <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
              <span>How do memberships work?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-content" style="display:none;">
              Your Builder Membership contribution of ₦10,000 unlocks complete access to the learning curriculum, verified credentials, and local chapters, and validates your competition eligibility.
            </div>
          </div>

          <div class="glass-panel faq-card">
            <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
              <span>How do scholarship applications work?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-content" style="display:none;">
              Once registered as a member, you can apply for the ₦300,000 scholarship program. Allocation is subject to eligibility assessments and performance evaluation during the initial learning phases.
            </div>
          </div>

          <div class="glass-panel faq-card">
            <button class="faq-trigger" onclick="toggleFaqAccordion(this)">
              <span>Is participation virtual?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-content" style="display:none;">
              Yes, all championship phases, learning courses, and submission evaluations are carried out virtually.
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

// Accordion helper
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

function renderChampionship(trackId) {
  const t = TRACKS_METADATA[trackId];
  if (!t) {
    renderNotFound();
    return;
  }

  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap">
      
      <!-- HERO AREA -->
      <section class="champ-hero">
        <div class="champ-hero-grid">
          <div class="champ-hero-left">
            <span class="champ-badge-pill">2026 TRACK</span>
            <h1 class="champ-title">${t.name}</h1>
            <p class="champ-tagline">${t.tagline}</p>
          </div>
          
          <!-- Sticky Checkout Column -->
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

function renderChampionshipsDirectory() {
  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap section-padding">
      <div class="section-header">
        <span class="section-tag">COMPETITIONS</span>
        <h1 class="section-title">Championship Arenas</h1>
        <p class="section-desc">Select the track that aligns with your tech, business, design, or creative goals.</p>
      </div>

      <div class="paths-grid">
        ${Object.entries(TRACKS_METADATA).map(([id, t]) => `
          <div class="glass-panel glass-panel-hover path-card">
            <div>
              <div class="path-icon">${t.icon}</div>
              <h4 class="path-name">${t.name}</h4>
              <p class="path-desc">${t.tagline}</p>
            </div>
            <a href="#/championship/${id}" class="path-btn">View Track Details →</a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderScholarship() {
  appViewport.innerHTML = `
    <div class="space-y-section max-width-wrap section-padding">
      <div class="section-header">
        <span class="section-tag">ACADEMY STATUS</span>
        <h1 class="section-title">₦300 Billion Scholarship Program</h1>
        <p class="section-desc">Designed to support the education of 1 Million entrepreneurship scholars.</p>
      </div>

      <div class="scholarship-grid">
        <div class="glass-panel p-8 space-y-6">
          <h3 style="font-family:var(--font-display); font-size:22px; font-weight:800; border-bottom:1px solid var(--border-color); padding-bottom:10px;">
            Eligibility & Application Rules
          </h3>
          <p style="font-size:14px; color:var(--text-muted); line-height:1.6;">
            The ₦300,000 scholarship covers complete business development learning modules, tools, and startup sandbox access. It is <strong>not</strong> a direct cash payout. 
          </p>
          
          <h4 style="font-size:14px; font-weight:700;">Selection Criteria:</h4>
          <ul style="list-style:none; font-size:13px; color:var(--text-muted); space-y:8px;">
            <li style="margin-bottom:8px;"><span style="color:var(--orange); font-weight:bold;">1.</span> Valid Builder Membership registration in DOT DEMO 2026.</li>
            <li style="margin-bottom:8px;"><span style="color:var(--orange); font-weight:bold;">2.</span> Consistent milestone completion inside the DOT OS learning portal.</li>
            <li style="margin-bottom:8px;"><span style="color:var(--orange); font-weight:bold;">3.</span> Engagement and attendance at university hub check-ins.</li>
          </ul>

          <div style="background:var(--orange-dim); border:1px solid var(--border-color); padding:16px; rounded:var(--radius-md); font-size:12px; color:var(--orange); border-radius:8px;">
            ⚠️ Please note: Securing a membership grants eligibility to apply, but does not guarantee scholarship approval. Selection is performance-evaluated.
          </div>
        </div>

        <div class="glass-panel p-8 text-center flex flex-col justify-between" style="border-color:var(--orange-dim);">
          <div class="space-y-4">
            <span style="font-size:32px;">🎓</span>
            <h4 style="font-size:18px; font-weight:800;">Secure Eligibility</h4>
            <p style="font-size:12px; color:var(--text-muted); line-height:1.5;">To apply for the scholarship allocation, establish your Builder Membership in DOT DEMO first.</p>
          </div>
          <button onclick="openRegisterModal('founder')" class="btn-orange" style="width:100%; margin-top:24px;">
            Claim Builder Membership
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderSuccess() {
  // Grab selected track from URL parameter
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
          
          <a href="${track.whatsapp}" target="_blank" rel="noopener" class="step-card-item hover:scale-102 transition-all block">
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
        <!-- University Standings -->
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

        <!-- Conversion metrics helper -->
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

// ---------- NAVIGATION & MENU LISTENERS ----------
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
  
  // Close menu when mobile links are clicked
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  });

  // Light/Dark Theme Switcher logic
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');

  // Load initial theme state
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
