// ============================================================
// Nicole Brener Portfolio — editorial butter-yellow redesign
// ============================================================

const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "butter",
  "heroHeadline": "Nicole Brener",
  "heroEyebrow": "Brand & Marketing Strategist · AI Consultant",
  "missionHeadline": "Strategy, Story,\nResults.",
  "ctaHeadline": "Let's make\nsomething ",
  "ctaCursive": "brilliant",
  "marqueeText": "Available for Work",
  "showGridSection": true
} /*EDITMODE-END*/;

const PALETTES = {
  butter: {
    bg: '#F6E89A', panel: '#FBF6E1', panel2: '#F5EFD8',
    yellow: '#F1D85A', yellowSoft: '#F5E37A',
    sage: '#CDE0B5', sageDark: '#A7C68F',
    grid: '#D7E8C7',
    coral: '#E76F4F'
  },
  rose: {
    bg: '#F4D6C5', panel: '#FBF1E8', panel2: '#F5E4D7',
    yellow: '#F2B79A', yellowSoft: '#F5C8B0',
    sage: '#E8C2B5', sageDark: '#D29D8B',
    grid: '#F0D5C7',
    coral: '#9C3E2A'
  },
  sage: {
    bg: '#CFDDC1', panel: '#F4F1DD', panel2: '#E8E5CC',
    yellow: '#E6D58A', yellowSoft: '#EFE0A2',
    sage: '#B6CFA1', sageDark: '#8FB077',
    grid: '#D0E0BD',
    coral: '#C95B3D'
  },
  ink: {
    bg: '#E8E2CC', panel: '#1F1E1B', panel2: '#2A2925',
    yellow: '#F1D85A', yellowSoft: '#F5E37A',
    sage: '#A7C68F', sageDark: '#7DA269',
    grid: '#2A2925',
    coral: '#F1D85A'
  }
};

/* Bridge JSX-referenced assets to bundler resources (top-level so all components can use it) */
function R(id, fallback) {
  if (typeof window !== 'undefined' && window.__resources && window.__resources[id]) {
    return window.__resources[id];
  }
  return fallback;
}

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

function PortfolioApp() {
  const [t, setTweak] = useTweaks(TWEAKS_DEFAULTS);

  // apply palette as CSS variables on root
  React.useEffect(() => {
    const p = PALETTES[t.palette] || PALETTES.butter;
    const r = document.documentElement;
    r.style.setProperty('--bg', p.bg);
    r.style.setProperty('--panel', p.panel);
    r.style.setProperty('--panel-2', p.panel2);
    r.style.setProperty('--yellow', p.yellow);
    r.style.setProperty('--yellow-soft', p.yellowSoft);
    r.style.setProperty('--sage', p.sage);
    r.style.setProperty('--sage-dark', p.sageDark);
    r.style.setProperty('--grid', p.grid);
    r.style.setProperty('--coral', p.coral);
    if (t.palette === 'ink') {
      r.style.setProperty('--ink', '#FBF6E1');
      r.style.setProperty('--ink-2', '#E8E2CC');
      r.style.setProperty('--muted', '#9c988a');
      r.style.setProperty('--rule', 'rgba(251,246,225,0.16)');
    } else {
      r.style.setProperty('--ink', '#1A1A1A');
      r.style.setProperty('--ink-2', '#3a382f');
      r.style.setProperty('--muted', '#7a766a');
      r.style.setProperty('--rule', 'rgba(26,26,26,0.14)');
    }
  }, [t.palette]);

  return (
    <div className="page-frame" data-screen-label="01 Portfolio">
      <TopNav />
      <Hero t={t} />
      <EmpoweringSection t={t} />
      <LogoBand />
      <MissionSection t={t} />
      <Marquee text={t.marqueeText} />
      <ServicesWindow />
      <Projects />
      <Experience />
      <Stats />
      <ContactCTA t={t} />
      <Footer />
      <PortfolioTweaks t={t} setTweak={setTweak} />
    </div>);

}

// ─────────────────────────────────────────────────────────────
// TOP NAV
// ─────────────────────────────────────────────────────────────

function TopNav() {
  return (
    <div className="topnav">
      <div className="topnav-left">
        <div className="star-badge">N</div>
        <div className="topnav-meta">PORTFOLIO</div>
      </div>
      <nav className="topnav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" className="topnav-cta">
        <span className="dot"></span>
        Let's talk
      </a>
    </div>);

}

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────

function Hero({ t }) {
  // Split headline into 2 lines for the cursive treatment
  const parts = (t.heroHeadline || 'Nicole Brener').trim().split(/\s+/);
  const first = parts[0];
  const second = parts.slice(1).join(' ');

  return (
    <section className="hero hero-solid hero-split-layout" data-screen-label="Hero">
      <div className="hero-corner">N</div>
      <div className="hero-corner-r">{t.heroEyebrow}</div>

      <div className="hero-split">
        <div className="hero-portrait">
          <img src={R('nicolePortrait', 'assets/nicole-portrait.jpeg')} alt="Nicole Brener" />
        </div>
        <div className="hero-name">
          <h1 className="hero-title hero-title-split">
            {first}
            {second && <span className="second">{second}</span>}
          </h1>
        </div>
      </div>

      <div className="hero-pill left">Strategy that scales</div>
      <div className="hero-pill right">Stories that stick</div>
    </section>);

}

// ─────────────────────────────────────────────────────────────
// EMPOWERING (intro pitch)
// ─────────────────────────────────────────────────────────────

function EmpoweringSection({ t }) {
  return (
    <section className="panel-section" id="about" data-screen-label="About">
      <div className="side-label">Brand · Story · Strategy</div>

      <div className="empowering-row">
        <h2 className="empowering-h">
          Empowering <span className="chip">ideas,</span><br />
          elevating brands.
        </h2>
      </div>

      <div className="empowering-body">
        <p>
          I'm a Brand &amp; Marketing Strategist with <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>8+ years</strong> leading
          campaigns that combine storytelling, data, and cultural relevance across B2B and B2C brands.
          Every brand has a unique spark, and I'm here to help yours shine brighter.
        </p>
        <p>
          From sponsorship activations to content-led campaigns, I bring a strategic, hands-on
          mindset — working closely with creative, content, and media teams to turn ideas into
          real-world results with a story that inspires and connects.
        </p>
      </div>

      <div className="empowering-cta">
        <a href="#experience" className="btn-pill-sage">Learn More</a>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────
// LOGO BAND ("as featured in")
// ─────────────────────────────────────────────────────────────

function LogoBand() {
  // adapted to Nicole's real clients/employers, rendered as serif wordmarks
  const logos = [
  { name: 'Mastercard', style: { letterSpacing: '0.04em', fontWeight: 600, fontFamily: 'var(--sans)' } },
  { name: 'American Express', style: { fontStyle: 'italic' } },
  { name: 'Havas', style: { fontWeight: 600, textTransform: 'uppercase', fontSize: 18, letterSpacing: '0.18em', fontFamily: 'var(--sans)' } },
  { name: 'RATIONAL', style: { fontFamily: 'var(--sans)', fontWeight: 700, letterSpacing: '0.04em', fontSize: 17 } },
  { name: 'Ana María Lajusticia', style: { fontStyle: 'italic', fontSize: 18 } },
  { name: 'Joolz', style: { fontStyle: 'italic', fontSize: 20 } }];


  return (
    <section className="logo-band" data-screen-label="As Seen In">
      {logos.map((l, i) =>
      <span key={i} className="logo" style={l.style}>{l.name}</span>
      )}
    </section>);

}

// ─────────────────────────────────────────────────────────────
// MISSION (image left, title + body right)
// ─────────────────────────────────────────────────────────────

function MissionSection({ t }) {
  return (
    <section className="mission" data-screen-label="Mission">
      <div className="mission-text">
        <span className="pill-tag">My Approach</span>
        <h2 className="mission-h">
          {(t.missionHeadline || 'Strategy, Story, Results.').split('\n').map((l, i, arr) =>
          <React.Fragment key={i}>{l}{i < arr.length - 1 && <br />}</React.Fragment>
          )}
        </h2>
        <p className="mission-meta">B2B &amp; B2C · LATAM, EMEA · Madrid based.</p>
        <p className="mission-body">
          My mission is to ignite creativity, inspire action, and transform brands into powerful
          voices that resonate. I believe every story has the potential to spark change — and I'm
          dedicated to helping brands find theirs, working as a partner to craft narratives that
          not only engage, but move audiences into lasting growth.
        </p>

        <div className="mission-side-strip" style={{ display: 'none' }}>
          <div><span>What I Offer</span></div>
          <div><span>Why It Works</span></div>
          <div><span>Let's Talk</span></div>
        </div>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────
// MARQUEE
// ─────────────────────────────────────────────────────────────

function Marquee({ text }) {
  const phrase = text || 'Available for Work';
  const items = ['Now Booking', phrase, 'Projects', phrase].filter((s) => s && s.trim());
  // duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((s, i) =>
        <span key={i}>
            <span className="dot"></span>
            {s}
          </span>
        )}
      </div>
    </div>);

}

// ─────────────────────────────────────────────────────────────
// SERVICES (browser window mockup)
// ─────────────────────────────────────────────────────────────

function ServicesWindow() {
  const services = [
  {
    num: '01',
    name: 'Brand Strategy',
    desc: 'Long-term positioning, storytelling and cultural insights that build meaningful emotional connections — aligned with business goals across every touchpoint.'
  },
  {
    num: '02',
    name: 'Cross-Functional Leadership',
    desc: 'Matrix collaboration with creative, content, media and product teams to deliver seamless, insight-driven campaigns end-to-end.'
  },
  {
    num: '03',
    name: 'Campaigns & Activations',
    desc: '360° campaigns and brand activations — from large-scale sponsorships to digital-first launches — with creative consistency and local cultural relevance.'
  },
  {
    num: '04',
    name: 'Editorial Voice & Narrative',
    desc: 'Brand narratives and content strategies that are emotionally resonant and performance-oriented — always-on messaging meets campaign storytelling.'
  }];


  return (
    <section className="grid-section" id="services" data-screen-label="Services">
      <div className="browser-window">
        <div className="browser-bar">
          <div className="lights">
            <span></span><span></span><span></span>
          </div>
          <div className="url">How Can I Be of Service?</div>
          <div style={{ width: 50 }}></div>
        </div>
        <div className="browser-body">
          {services.map((s, i) =>
          <div key={i} className="service-row">
              <div className="service-num">{s.num}</div>
              <div>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
              <a href="#contact" className="btn-pill-sage">Learn More</a>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section className="projects" id="projects" data-screen-label="Projects">
      <div className="projects-head">
        <div>
          <span className="pill-tag">Selected Work</span>
          <h2 className="section-h" style={{ marginTop: 22, marginBottom: 0 }}>
            Brands I've <em style={{ fontFamily: 'var(--cursive)', fontWeight: 700, color: 'var(--coral)' }}>helped grow.</em>
          </h2>
        </div>
        <p className="projects-intro">
          Four case studies across CRM, brand relaunches, global sponsorships and loyalty —
          the kind of work where strategy meets the spreadsheet.
        </p>
      </div>

      <ProjectAML />
      <ProjectJoolz />
      <ProjectCopa />
      <ProjectAmex />
    </section>);

}

// ─── Project 1: Ana María Lajusticia ───────────────────────

function ProjectAML() {
  return (
    <article className="project">
      <div className="star-stick" style={{ top: 30, right: 80 }}>+4,280%</div>
      <div className="project-grid">
        <div className="project-copy">
          <div className="project-num">01</div>
          <span className="project-tag">Ana María Lajusticia · Brand &amp; CRM · 2024</span>
          <h3 className="project-title">
            Full brand <em>relaunch</em><br />&amp; CRM integration
          </h3>
          <p className="project-body">
            Worked alongside the brand's Marketing Manager to translate a full relaunch strategy into execution:
            rebranding, new product launches, tone of voice, social content and database segmentation. On the CRM side,
            built automated flows for every stage of the funnel — welcome, abandoned cart, post-purchase, cross-sell,
            repurchase and behavioral interest.
          </p>

          <div className="metrics-row four">
            <div className="metric">
              <div className="metric-num">+60%</div>
              <div className="metric-label">Revenue lift</div>
            </div>
            <div className="metric">
              <div className="metric-num">+38%</div>
              <div className="metric-label">New customers</div>
            </div>
            <div className="metric">
              <div className="metric-num">87%</div>
              <div className="metric-label">Revenue from new clients</div>
            </div>
            <div className="metric">
              <div className="metric-num">13%</div>
              <div className="metric-label">Recurring customers</div>
            </div>
          </div>

          <div className="pill-row">
            <span className="project-pill">Brand Strategy</span>
            <span className="project-pill">CRM &amp; Automation</span>
            <span className="project-pill">Social Media</span>
            <span className="project-pill">Email Marketing</span>
            <span className="project-pill">Product Launch</span>
          </div>
        </div>

        <div className="project-media media-aml">
          <div className="frame">
            <div className="frame-label">Before</div>
            <img src={R('amlBefore', 'assets/aml-aml-feed-before-rebranding.jpg')} alt="AML feed before" />
          </div>
          <div className="frame">
            <div className="frame-label" style={{ color: 'var(--coral)' }}>After</div>
            <img src={R('amlAfter', 'assets/aml-aml-feed-after-rebranding.jpg')} alt="AML feed after" />
          </div>
        </div>
      </div>
    </article>);

}

// ─── Project 2: Joolz ──────────────────────────────────────

function ProjectJoolz() {
  return (
    <article className="project alt project-stacked">
      <div className="project-copy project-copy-wide">
        <div className="amex-head">
          <div>
            <div className="project-num">02</div>
            <span className="project-tag">Joolz · Brand &amp; Packaging · 2025</span>
            <h3 className="project-title">
              Full brand relaunch &amp; <em>packaging</em> production
            </h3>
          </div>
          <p className="project-body" style={{ maxWidth: 460 }}>
            Led the complete rebranding of Joolz, an Argentine artisanal ice cream brand expanding
            into the sugar-free and keto segment. Oversaw the full process from brand strategy and
            positioning to visual identity, tone of voice, and end-to-end packaging production
            across the entire product range.
          </p>
        </div>

        <div className="joolz-meta">
          <div className="pill-row">
            <span className="project-pill">Brand Strategy</span>
            <span className="project-pill">Visual Identity</span>
            <span className="project-pill">Packaging</span>
            <span className="project-pill">Positioning</span>
            <span className="project-pill">Go-to-Market</span>
          </div>

          <div className="joolz-deliverables">
            <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>Deliverables</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, fontSize: 12.5, color: 'var(--ink-2)' }}>
              <div>· Brand narrative &amp; positioning</div>
              <div>· Logo &amp; visual identity system</div>
              <div>· Full packaging range</div>
              <div>· Tone of voice &amp; creative guidelines</div>
              <div>· OOH campaign concepts</div>
            </div>
          </div>
        </div>
      </div>

      <div className="joolz-media">
        <div className="joolz-logos">
          <div className="frame contain dark-pad">
            <div className="frame-label">Before</div>
            <img src={R('joolzBefore', 'assets/joolz-joolz-logo-antes-rosa.jpg')} alt="Joolz logo before" style={{ height: 180 }} />
          </div>
          <div className="frame contain dark-pad">
            <div className="frame-label" style={{ color: 'var(--coral)' }}>After</div>
            <img src={R('joolzAfter', 'assets/joolz-joolz-logo-despues-marron.jpg')} alt="Joolz logo after" style={{ height: 180 }} />
          </div>
        </div>
        <div className="frame">
          <div className="frame-label">Packaging range</div>
          <img src={R('joolzPackaging', 'assets/joolz-joolz-packaging-range.png')} alt="Joolz packaging" style={{ width: '100%', height: 420, objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <div className="joolz-extra">
          <div className="frame">
            <div className="frame-label">Colour system</div>
            <img src={R('joolzColours', 'assets/joolz-joolz-logo-colour-system.png')} alt="Joolz colour system" style={{ width: '100%', height: 280, objectFit: 'cover' }} />
          </div>
          <div className="frame">
            <div className="frame-label">OOH campaign</div>
            <img src={R('joolzOoh', 'assets/joolz-joolz-ooh-campaign.png')} alt="Joolz OOH" style={{ width: '100%', height: 280, objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </article>);

}

// ─── Project 3: Copa América × Mastercard ──────────────────

function ProjectCopa() {
  return (
    <article className="project dark">
      <div className="star-stick" style={{ top: 30, right: 80, background: 'var(--yellow)', color: 'var(--ink)' }}>+30% GDV</div>
      <div className="project-grid">
        <div className="project-copy">
          <div className="project-num">03</div>
          <span className="project-tag">Mastercard × Galicia · Copa América · 2024</span>
          <h3 className="project-title">
            Copa América <em>2024</em> 360° campaign
          </h3>
          <p className="project-body">
            Led the end-to-end strategy and execution as Project Manager. From concept development
            to rollout: landing page, automated email flows, paid media planning, and performance
            optimization based on real-time data.
          </p>

          <div className="metrics-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="metric">
              <div className="metric-num">+23%</div>
              <div className="metric-label">Engagement</div>
            </div>
            <div className="metric">
              <div className="metric-num">+25%</div>
              <div className="metric-label">Transaction volume</div>
            </div>
            <div className="metric">
              <div className="metric-num">+30%</div>
              <div className="metric-label">GDV</div>
            </div>
          </div>

          <div className="pill-row">
            <span className="project-pill">360 Campaign</span>
            <span className="project-pill">Project Management</span>
            <span className="project-pill">Paid Media</span>
            <span className="project-pill">CRM</span>
          </div>
        </div>

        <div className="project-media media-copa">
          <div className="frame" style={{ gridColumn: '1 / -1' }}>
            <div className="frame-label">Hero creative</div>
            <img src={R('copaHero', 'assets/copa-copa-america-tenes-la-mejor-hinchada.png')} alt="Copa América hero" style={{ height: 'auto', maxHeight: 380, objectFit: 'contain', background: '#fff' }} />
          </div>
          <div className="frame" style={{ gridColumn: '1 / -1' }}>
            <div className="frame-label">Instagram story</div>
            <img src={R('copaStory', 'assets/copa-copa-america-instagram-story.png')} alt="Copa story" style={{ height: 320, objectFit: 'contain', background: '#fff' }} />
          </div>
        </div>
      </div>
    </article>);

}

// ─── Project 4: American Express Membership Rewards ────────

function ProjectAmex() {
  return (
    <article className="project project-stacked">
      <div className="project-copy project-copy-wide">
        <div className="amex-head">
          <div>
            <div className="project-num">04</div>
            <span className="project-tag">American Express · Loyalty · 2020 – 2022</span>
            <h3 className="project-title">
              Membership Rewards <em>program</em>
            </h3>
          </div>
          <p className="project-body" style={{ maxWidth: 460 }}>
            Led the full marketing strategy — paid media, CRM automation, influencer partnerships,
            and sponsorship activations including Movistar Arena. Focused on driving point redemptions
            and reactivating inactive cardholders through behavioral segmentation and cross-channel campaigns.
          </p>
        </div>

        <div className="metrics-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="metric">
            <div className="metric-num">+60%</div>
            <div className="metric-label">Web visits</div>
          </div>
          <div className="metric">
            <div className="metric-num">+30%</div>
            <div className="metric-label">Open rate</div>
          </div>
          <div className="metric">
            <div className="metric-num">+15%</div>
            <div className="metric-label">CTR</div>
          </div>
          <div className="metric">
            <div className="metric-num">+35%</div>
            <div className="metric-label">Redemptions</div>
          </div>
        </div>

        <div className="pill-row">
          <span className="project-pill">Paid Media</span>
          <span className="project-pill">CRM &amp; Automation</span>
          <span className="project-pill">Influencers</span>
          <span className="project-pill">Sponsorships</span>
          <span className="project-pill">Retargeting</span>
        </div>
      </div>

      <div className="amex-media">
        <div className="frame">
          <div className="frame-label">Paid social</div>
          <img src={R('amexSocial', 'assets/amex-american-express-puntos-para-alentar-con-sorpresa.jpg')} alt="AMEX paid social" style={{ height: 420, objectFit: 'cover' }} />
        </div>
        <div className="frame contain">
          <div className="frame-label">Mobile creative</div>
          <img src={R('amexMobile', 'assets/amex-american-express-paid-social-mobile.png')} alt="AMEX mobile" style={{ height: 420, objectFit: 'contain', background: 'var(--panel)' }} />
        </div>
      </div>
    </article>);

}

// ─────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────

function Experience() {
  const exps = [
  {
    period: '2025 — Now',
    location: 'Madrid, Spain',
    company: 'Havas Market España',
    role: 'Brand & Growth Marketing Manager',
    desc: 'Strategic lead for 6 accounts across beauty, supplements, aesthetics, hospitality, and FMCG. Drove +25% revenue, +31% engagement, +24% conversions and −19% CPA through 360° campaigns and CRM automation. 60% pitch conversion rate.'
  },
  {
    period: '2022 — 2024',
    location: 'LATAM',
    company: 'Mastercard',
    role: 'Marketing Manager',
    desc: 'Full 360° brand and commercial campaigns for major banking and fintech partners across LATAM. Increased fintech conversions by +25% and card usage by +40% through test & learn frameworks and audience analysis.'
  },
  {
    period: '2020 — 2022',
    location: 'Buenos Aires, AR',
    company: 'American Express',
    role: 'Marketing & Brand Manager',
    desc: 'Full-funnel multi-channel brand campaigns across paid social, eCommerce, sponsorships and loyalty. +15% GDV growth in 3 months, +57% web traffic, +43.5% redemptions. High-visibility activations (Movistar Arena, ATP Tennis).'
  },
  {
    period: '2020 — 2025',
    location: 'Remote',
    company: 'Freelance Projects',
    role: 'Brand Strategist & Project Lead',
    desc: 'Brand relaunches and go-to-market for JOOLZ, SMASH CLUB (premium padel + gastronomy) and Belmo — narrative definition, creative guidelines, content strategy and paid digital.'
  },
  {
    period: '2018 — 2020',
    location: 'Buenos Aires, AR',
    company: 'RATIONAL AG',
    role: 'Digital Paid Media Coordinator',
    desc: 'Paid social and email marketing across LATAM. +25% B2B lead acquisition, 63% open rate, 17% CTR through localized messaging.'
  }];


  return (
    <section className="experience" id="experience" data-screen-label="Experience">
      <span className="section-eyebrow">Experience</span>
      <h2 className="section-h">Where I've <em style={{ fontFamily: 'var(--cursive)', fontWeight: 700, color: 'var(--coral)' }}>worked.</em></h2>
      <div className="exp-grid">
        {exps.map((e, i) =>
        <div key={i} className="exp-row">
            <div>
              <div className="exp-period">{e.period}</div>
              <div className="exp-location">{e.location}</div>
            </div>
            <div>
              <div className="exp-company">{e.company}</div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-desc">{e.desc}</div>
            </div>
            <div className="exp-arrow">↗</div>
          </div>
        )}
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────────────────────

function Stats() {
  const stats = [
  { num: '8+', label: 'Years leading brand & growth marketing' },
  { num: '+60%', label: 'Revenue growth driven for Ana María Lajusticia' },
  { num: '+35%', label: 'Redemptions at American Express Membership Rewards program' },
  { num: 'B2B + B2C', label: 'Across LATAM and EMEA markets' }];


  return (
    <section className="stats" data-screen-label="Stats">
      {stats.map((s, i) =>
      <div key={i} className="stat">
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      )}
    </section>);

}

// ─────────────────────────────────────────────────────────────
// CONTACT CTA
// ─────────────────────────────────────────────────────────────

function ContactCTA({ t }) {
  const head = (t.ctaHeadline || "Let's make\nsomething ").split('\n');
  return (
    <section className="contact" id="contact" data-screen-label="Contact">
      <div className="contact-eyebrow">— Get in touch —</div>
      <h2 className="contact-h">
        {head.map((l, i, arr) =>
        <React.Fragment key={i}>
            {l}
            {i === arr.length - 1 && <span className="cursive">{t.ctaCursive || 'brilliant'}</span>}
            {i < arr.length - 1 && <br />}
          </React.Fragment>
        )}
      </h2>
      <div className="contact-links">
        <a href="mailto:contact@nicolebrenerdigital.com" className="contact-link">
          <span>✉</span> contact@nicolebrenerdigital.com
        </a>
        <a href="https://www.linkedin.com/in/nicolebrener" target="_blank" rel="noopener" className="contact-link alt">
          <span>in</span> /nicolebrener
        </a>
        <a href="https://www.tiktok.com/@nicolebrener" target="_blank" rel="noopener" className="contact-link alt">
          <span className="ico-tiktok" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.55a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84z" />
            </svg>
          </span> @nicolebrener
        </a>
        <a href="https://www.instagram.com/nicolebrener_digital" target="_blank" rel="noopener" className="contact-link alt">
          <span className="ico-tiktok" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </span> @nicolebrener_digital
        </a>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <div>© 2026 Nicole Brener </div>
      <div className="footer-cursive">Stay curious.</div>
      <div>NB / Portfolio </div>
    </footer>);

}

// ─────────────────────────────────────────────────────────────
// TWEAKS PANEL
// ─────────────────────────────────────────────────────────────

function PortfolioTweaks({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Palette">
        <TweakSelect
          label="Color scheme"
          value={t.palette}
          onChange={(v) => setTweak('palette', v)}
          options={['butter', 'rose', 'sage', 'ink']} />
        
      </TweakSection>

      <TweakSection label="Hero">
        <TweakText
          label="Headline (cursive)"
          value={t.heroHeadline}
          onChange={(v) => setTweak('heroHeadline', v)} />
        
        <TweakText
          label="Eyebrow"
          value={t.heroEyebrow}
          onChange={(v) => setTweak('heroEyebrow', v)} />
        
        <TweakColor
          label="Background"
          value={t.heroBg}
          onChange={(v) => setTweak('heroBg', v)}
          options={['#C75B3D', '#1B5F6D', '#6B3A4A', '#3F5A3A', '#1A1A1A', '#D97E3F']} />
        
      </TweakSection>

      <TweakSection label="Sections">
        <TweakText
          label="Mission headline"
          value={t.missionHeadline}
          onChange={(v) => setTweak('missionHeadline', v)} />
        
        <TweakText
          label="Marquee phrase"
          value={t.marqueeText}
          onChange={(v) => setTweak('marqueeText', v)} />
        
      </TweakSection>

      <TweakSection label="Contact">
        <TweakText
          label="Contact headline"
          value={t.ctaHeadline}
          onChange={(v) => setTweak('ctaHeadline', v)} />
        
        <TweakText
          label="Cursive word"
          value={t.ctaCursive}
          onChange={(v) => setTweak('ctaCursive', v)} />
        
      </TweakSection>
    </TweaksPanel>);

}

// ─────────────────────────────────────────────────────────────
// MOUNT
// ─────────────────────────────────────────────────────────────

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PortfolioApp />);