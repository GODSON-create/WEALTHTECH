import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client if env credentials are present
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.warn("Failed to initialize Supabase client:", err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTicker();
  initMobileMenu();
  initBentoMap();
  initFAQ();
  initScrollReveal();
  initFormHandler();
  initCardParallax();
});

/* ---------- TICKER ENGINE ---------- */
function initTicker() {
  const tickerItems = [
    'DOT WEALTHTECH · COHORT 1',
    '1,000 SCHOLARSHIP SEATS — 100% FUNDED',
    '9,000 FOUNDER SEATS — 90% SCHOLARSHIP',
    '₦300,000,000 COMMITTED BY DOT',
    'BUILD INCOME. BUILD WEALTH. BUILD THE FUTURE.',
    'FOUNDER SEATS CLOSING SOON'
  ];

  const track = document.getElementById('tickerTrack');
  if (!track) return;

  let html = '';
  // Repeat items 4 times to ensure seamless infinite looping on wider displays
  for (let r = 0; r < 4; r++) {
    tickerItems.forEach(item => {
      html += `<span>${item}</span>`;
    });
  }
  track.innerHTML = html;
}

/* ---------- MOBILE NAVIGATION OVERLAY ---------- */
function initMobileMenu() {
  const navToggle = document.getElementById('navToggle');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!navToggle || !mobileMenuOverlay || !mobileMenuClose) return;

  const openMenu = () => {
    mobileMenuOverlay.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  };

  const closeMenu = () => {
    mobileMenuOverlay.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  navToggle.addEventListener('click', openMenu);
  mobileMenuClose.addEventListener('click', closeMenu);
  
  // Close menu when clicking backdrop/overlay outer area
  mobileMenuOverlay.addEventListener('click', (e) => {
    if (e.target === mobileMenuOverlay) closeMenu();
  });

  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ---------- DYNAMIC BENTO DOTMAP GENERATOR ---------- */
function initBentoMap() {
  const dotmap = document.getElementById('dotmap');
  if (!dotmap) return;

  const totalCells = 14 * 8; // 14 columns by 8 rows grid
  const onSet = new Set();
  
  // Select 28 random active dots
  while (onSet.size < 28) {
    onSet.add(Math.floor(Math.random() * totalCells));
  }

  dotmap.innerHTML = '';
  for (let i = 0; i < totalCells; i++) {
    const dot = document.createElement('span');
    if (onSet.has(i)) {
      dot.classList.add('on');
      // Stagger animation timing slightly for a organic pulsing aesthetic
      dot.style.animationDelay = `${(i % 5) * 0.3}s`;
    }
    dotmap.appendChild(dot);
  }
}

/* ---------- DYNAMIC FAQ ACCORDION ---------- */
function initFAQ() {
  const faqs = [
    [
      'What is DOT WealthTech?', 
      'DOT WealthTech Cohort 1 is a founder-focused program that teaches university students modern wealth management and WealthTech skills, alongside a founder community, mentorship, and pathways to further opportunities within the DOT ecosystem.'
    ],
    [
      'Who can apply?', 
      'Any ambitious university student — whether you already have a business idea, are actively building, or are still exploring what to build.'
    ],
    [
      'What does the scholarship cover?', 
      'The first 1,000 selected students receive a 100% scholarship (₦0 to pay). The next 9,000 Founder Seats carry a 90% scholarship, bringing the cost down from ₦300,000 to ₦30,000.'
    ],
    [
      'Do I need an existing business to join?', 
      'No. The program is designed for aspiring founders, current builders, and anyone exploring WealthTech as a path into entrepreneurship.'
    ],
    [
      'Is income guaranteed?', 
      'No program can guarantee income. DOT WealthTech gives you the training, pathway, and community to work toward building income and, eventually, a venture — the outcome depends on your own effort.'
    ],
    [
      'How do I secure a Founder Seat?', 
      'Register for the live launch webinar, then apply for a Founder Seat once applications open at the end of the session.'
    ]
  ];

  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  faqList.innerHTML = '';

  faqs.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <button class="faq-q" id="faq-q-${index}" aria-expanded="false" aria-controls="faq-a-${index}">
        <span>${faq[0]}</span>
        <span class="plus" aria-hidden="true">+</span>
      </button>
      <div class="faq-a" id="faq-a-${index}" aria-labelledby="faq-q-${index}">
        <p>${faq[1]}</p>
      </div>
    `;
    faqList.appendChild(item);
  });

  faqList.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;

    const item = btn.parentElement;
    const ans = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');

    // Close all other FAQs
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      }
    });

    // Toggle selected FAQ
    if (isOpen) {
      item.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      ans.style.maxHeight = null;
    } else {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      ans.style.maxHeight = `${ans.scrollHeight}px`;
    }
  });
}

/* ---------- INTERSECTION OBSERVER FOR SCROLL REVEALS ---------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

/* ---------- 3D CARD PARALLAX EFFECT ---------- */
function initCardParallax() {
  const cardStack = document.getElementById('cardStack');
  const frontCard = document.getElementById('fcardFront');
  const backCard = document.getElementById('fcardBack');

  if (!cardStack || !frontCard || !backCard) return;

  cardStack.addEventListener('mousemove', (e) => {
    const rect = cardStack.getBoundingClientRect();
    // Normalize coordinates relative to card stack center: range [-1, 1]
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    // Apply smooth 3D perspective transforms
    frontCard.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(20px) rotateZ(-3deg)`;
    backCard.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(-20px) rotateZ(4deg)`;
  });

  cardStack.addEventListener('mouseleave', () => {
    // Reset transforms smoothly when mouse leaves
    frontCard.style.transform = '';
    backCard.style.transform = '';
  });
}

/* ---------- CONFIGURABLE FORM ENDPOINT ENGINE ---------- */
function initFormHandler() {
  const regForm = document.getElementById('regForm');
  const formSuccessCard = document.getElementById('formSuccessCard');
  const resetFormBtn = document.getElementById('resetFormBtn');
  const submitBtn = document.getElementById('submitBtn');
  const spinner = submitBtn.querySelector('.btn-spinner');
  const btnText = submitBtn.querySelector('.btn-text');

  // Configurator controls
  const configRadios = document.getElementsByName('endpointType');
  const configInputWrap = document.getElementById('configInputWrap');
  const configInputLabel = document.getElementById('configInputLabel');
  const configEndpointValue = document.getElementById('configEndpointValue');

  if (!regForm || !formSuccessCard || !submitBtn) return;

  // Toggle backend configurator inputs
  const handleConfigChange = () => {
    let selectedType = 'success';
    for (const radio of configRadios) {
      if (radio.checked) selectedType = radio.value;
    }

    if (selectedType === 'success') {
      configInputWrap.classList.add('hidden');
      configEndpointValue.value = '';
    } else if (selectedType === 'supabase') {
      configInputWrap.classList.remove('hidden');
      configInputLabel.textContent = 'Supabase Status:';
      if (supabaseUrl && supabaseAnonKey) {
        configEndpointValue.value = 'Environment Variables Connected';
        configEndpointValue.disabled = true;
      } else {
        configEndpointValue.value = '';
        configEndpointValue.placeholder = 'Please set variables in .env';
        configEndpointValue.disabled = true;
      }
    } else {
      configInputWrap.classList.remove('hidden');
      configEndpointValue.disabled = false;
      if (selectedType === 'formspree') {
        configInputLabel.textContent = 'Formspree Form ID:';
        configEndpointValue.placeholder = 'e.g. xgeypoze';
      } else {
        configInputLabel.textContent = 'Selar Checkout URL:';
        configEndpointValue.placeholder = 'e.g. https://selar.co/xxx';
      }
    }
  };

  configRadios.forEach(radio => radio.addEventListener('change', handleConfigChange));

  // Form submission logic
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable button & show spinner
    submitBtn.disabled = true;
    spinner.classList.remove('hidden');
    btnText.textContent = 'Processing Application...';

    // Extract Form Data
    const formData = new FormData(regForm);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Determine target endpoint configuration
    let endpointType = 'success';
    for (const radio of configRadios) {
      if (radio.checked) endpointType = radio.value;
    }
    const endpointVal = configEndpointValue.value.trim();

    try {
      if (endpointType === 'formspree') {
        if (!endpointVal) {
          throw new Error('Please enter a valid Formspree Form ID in the configurator above.');
        }
        const url = `https://formspree.io/f/${endpointVal}`;
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(formObject),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          showSuccess();
        } else {
          const resData = await response.json();
          throw new Error(resData.error || 'Server rejected the submission.');
        }
      } else if (endpointType === 'selar') {
        if (!endpointVal) {
          throw new Error('Please enter a valid Selar Checkout URL in the configurator above.');
        }
        
        // Mocking API call to a webhook/backend, then redirecting to the payment page
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        // Redirect to Selar link, passing email/name to pre-fill if supported by processor
        const checkoutUrl = new URL(endpointVal);
        checkoutUrl.searchParams.append('email', formObject.email);
        checkoutUrl.searchParams.append('name', formObject.fname);
        
        window.location.href = checkoutUrl.toString();
      } else if (endpointType === 'supabase') {
        if (!supabase) {
          throw new Error('Supabase client not initialized. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your env.');
        }

        // Insert parameters into registrations table
        const { error } = await supabase
          .from('registrations')
          .insert([
            {
              full_name: formObject.fname,
              email: formObject.email,
              phone: formObject.phone,
              whatsapp: formObject.whatsapp,
              university: formObject.uni,
              level: formObject.level,
              is_founder: formObject.founder,
              challenge: formObject.challenge,
              why: formObject.why
            }
          ]);

        if (error) {
          throw new Error(error.message);
        }

        showSuccess();
      } else {
        // Visual Demo success flow
        await new Promise(resolve => setTimeout(resolve, 1500));
        showSuccess();
      }
    } catch (err) {
      alert(`Submission Error: ${err.message}`);
      resetButton();
    }
  });

  const showSuccess = () => {
    regForm.classList.add('hidden');
    formSuccessCard.classList.remove('hidden');
  };

  const resetButton = () => {
    submitBtn.disabled = false;
    spinner.classList.add('hidden');
    btnText.textContent = 'Apply for a Founder Seat';
  };

  resetFormBtn.addEventListener('click', () => {
    regForm.reset();
    formSuccessCard.classList.add('hidden');
    regForm.classList.remove('hidden');
    resetButton();
  });
}
