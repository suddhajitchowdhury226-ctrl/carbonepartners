import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, Phone, Mail, ChevronRight, Home,
  CheckCircle2, Shield, TrendingUp, Users, Settings,
  PieChart, Landmark, HeartHandshake, Briefcase, Calculator
} from 'lucide-react';
import servicesHeroBg from '../assets/services-hero.png';

/* ─── Scroll Reveal ─── */
function Reveal({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }
    }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: 0, transform: 'translateY(40px)',
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ════════════════════════════════════
   SECTION 1 – HERO
════════════════════════════════════ */
const PageHero = ({ onBack }) => (
  <section style={{
    position: 'relative', minHeight: 500,
    backgroundImage: `url(${servicesHeroBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex', alignItems: 'center',
    overflow: 'hidden', paddingTop: 90,
  }}>
    {/* Dark Overlay for readability */}
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,15,30,0.92) 0%, rgba(12,26,54,0.85) 55%, rgba(15,35,71,0.25) 100%)', zIndex: 1 }} />
    
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: 'linear-gradient(180deg,#c8a96e,#b8924e)', zIndex: 2 }} />
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)`, backgroundSize: '60px 60px', zIndex: 2 }} />
    
    <div style={{ position: 'absolute', right: -60, top: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(20,60,130,0.22) 0%,transparent 70%)', pointerEvents: 'none', zIndex: 2 }} />
    
    <div style={{ position: 'absolute', right: 140, top: '50%', transform: 'translateY(-50%)', opacity: 0.03, pointerEvents: 'none', zIndex: 2 }}>
      <Landmark size={260} color="#fff" strokeWidth={0.8} />
    </div>

    <div className="container" style={{ position: 'relative', zIndex: 3, padding: '60px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s', fontFamily: 'Montserrat,sans-serif' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
          <Home size={12} /> Home
        </button>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Services</span>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>SMSF</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
          Self-Managed Superannuation Funds
        </span>
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -1.5, color: '#fff', marginBottom: 22, maxWidth: 820 }}>
        Take Control of<br />
        <span style={{ color: '#c8a96e' }}>Your Retirement</span>
      </h1>
      <div style={{ width: 56, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />

      <p style={{ fontSize: 15.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.62)', maxWidth: 640, marginBottom: 44 }}>
        SMSFs represent one of the biggest areas of investment for retirement in Australia. Our dedicated, experienced team of specialists will guide you through the complexity of self-managed superannuation.
      </p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <a href="#smsf-contact" className="btn-red" style={{ fontSize: 12, letterSpacing: 1.5 }}>
          Speak to an SMSF Specialist <ArrowRight size={15} />
        </a>
      </div>

      <div style={{ marginTop: 52, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.10)', display: 'flex', gap: 40, flexWrap: 'wrap' }}>
        {[
          { label: 'Establishment', sub: 'Formation & Rollovers' },
          { label: 'Compliance', sub: 'ATO, APRA & ASIC' },
          { label: 'Strategy', sub: 'Tax minimisation & property' },
        ].map(({ label, sub }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>{label}</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.28)', lineHeight: 1.5 }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════
   SECTION 2 – INTRO
════════════════════════════════════ */
const SMSFIntro = () => (
  <section style={{ background: '#fff', padding: '96px 0' }}>
    <div className="container">
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="smsf-intro-grid">
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 16 }}>
              What is an SMSF?
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,42px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, color: '#080f1e', marginBottom: 20 }}>
              Retain Control of<br />
              <span style={{ color: '#143c82' }}>Your Superannuation.</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 20 }}>
              An SMSF is a trust structure that provides members with an income for retirement. The self-managed aspect means <strong style={{color:'#080f1e'}}>members make the investment decisions that decide their future income.</strong>
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 20 }}>
              If you wish to take responsibility for your own finances and don’t want to entrust all your investments to an external retail or industry fund, an SMSF could be right for you.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 0 }}>
              Many clients use SMSFs to hold direct property, shares and other investments that would otherwise be unavailable. However, <strong style={{color:'#080f1e'}}>without appropriate supervision, compliance risks can be catastrophic.</strong> That's where we come in.
            </p>
          </div>

          <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <img src="/Financial-image/super.png" alt="Superannuation" style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.02)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #080f1e 0%, transparent 80%)', opacity: 0.8 }}></div>
            <div style={{ position: 'absolute', bottom: 30, left: 30, right: 30 }}>
              <div style={{ color: '#c8a96e', fontSize: 14, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>Authorized Advisors</div>
              <div style={{ color: '#fff', fontSize: 13, lineHeight: 1.6, opacity: 0.8 }}>
                Juve Holdings Pty Ltd T/As Carbone Partners Accountants is a Corporate Authorised Representative No. 1244042 of SMSF Advisors Network Pty Ltd.
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
    <style>{`@media(max-width:900px){.smsf-intro-grid{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
  </section>
);

/* ════════════════════════════════════
   SECTION 3 – SMSF BENEFITS GRID
════════════════════════════════════ */
const benefits = [
  { Icon: Settings,   title: 'Flexibility & Control', desc: 'Run a mixture of accumulation and pension accounts. Trustees have complete control over fund decisions.' },
  { Icon: PieChart,   title: 'Investment Choice',     desc: 'Unrivaled access to direct shares, commercial property, managed funds, and term deposits.' },
  { Icon: Calculator, title: 'Taxation Strategies',   desc: 'Pay only 15% tax in Accumulation Phase and enjoy tax-free earnings in Pension Phase.' },
  { Icon: TrendingUp, title: 'Fund Costs',            desc: 'For larger balances, fixed-fee SMSF administration is often cheaper than percentage-based retail funds.' },
  { Icon: Briefcase,  title: 'Unique Investments',   desc: 'Unlock sophisticated strategies like Limited Recourse Borrowing Arrangements (gearing/borrowing in super).' },
  { Icon: Shield,     title: 'Creditor Protection',   desc: 'Assets inside an SMSF are normally protected from creditors, even in the event of bankruptcy.' },
  { Icon: Users,      title: 'Consolidate Assets',    desc: 'Pool super balances with up to four members (e.g., family) to increase investment power and reduce overall fees.' },
  { Icon: HeartHandshake,title: 'Family Legacy',       desc: 'Structured estate planning to legally pass wealth to future generations in a tax-effective environment.' },
];

const BenefitsGrid = () => {
  const [hov, setHov] = useState(null);
  return (
    <section id="smsf-benefits" style={{ background: '#080f1e', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -100, top: '50%', transform: 'translateY(-50%)', width: 500, height: 500, background: 'radial-gradient(circle,rgba(20,60,130,0.22) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: 14 }}>
              Why Run Your Own Fund?
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -1, color: '#fff', marginBottom: 16 }}>
              The Power of an <span style={{ color: '#c8a96e' }}>SMSF</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto 20px', borderRadius: 2 }} />
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="smsf-benefits-grid">
          {benefits.map(({ Icon, title, desc }, i) => {
            const isHov = hov === i;
            return (
              <Reveal key={title} delay={i * 0.05}>
                <div onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} style={{ background: isHov ? 'rgba(20,60,130,0.30)' : 'rgba(255,255,255,0.04)', padding: '36px 24px', border: `1px solid ${isHov ? 'rgba(20,60,130,0.55)' : 'rgba(255,255,255,0.07)'}`, borderTop: `3px solid ${isHov ? '#c8a96e' : '#143c82'}`, transform: isHov ? 'translateY(-5px)' : 'none', transition: 'all 0.3s ease', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'default' }}>
                  <div style={{ width: 44, height: 44, marginBottom: 20, flexShrink: 0, background: isHov ? 'rgba(200,169,110,0.18)' : 'rgba(20,60,130,0.28)', border: `1.5px solid ${isHov ? 'rgba(200,169,110,0.55)' : 'rgba(20,60,130,0.40)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', borderRadius: '50%' }}>
                    <Icon size={18} color={isHov ? '#c8a96e' : '#5a8ad4'} />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: isHov ? '#c8a96e' : '#fff', marginBottom: 12, letterSpacing: -0.3, transition: 'color 0.3s' }}>{title}</h3>
                  <p style={{ fontSize: 12.5, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', flexGrow: 1 }}>{desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:1100px){.smsf-benefits-grid{grid-template-columns:repeat(3,1fr) !important;}}
        @media(max-width:800px){.smsf-benefits-grid{grid-template-columns:repeat(2,1fr) !important;}}
        @media(max-width:560px){.smsf-benefits-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════
   SECTION 4 – COMPLIANCE & FORMATION
════════════════════════════════════ */
const formationItems = [
  'Establishment of Self-Managed Superannuation Funds',
  'Assistance with rollovers from existing super funds',
  'Administration and management of your fund',
  'Advice on borrowing with your fund (LRBA)',
  'Property Acquisitions with Self-Managed Superannuation'
];

const complianceItems = [
  'Advice on compliance and taxation (ATO, APRA, ASIC)',
  'Superannuation audits and annual reporting obligations',
  'Preparation of Annual Financial Statements and ITRs',
  'Evaluation of existing Super procedures and policies',
  'SMSF Trust Deed reviews & Estate Planning',
  'Binding Death Benefit Nominations',
  'Fund Insurance Policies & Allocated Pensions',
  'Retirement Planning & Generational Wealth Transfer'
];

const ComplianceFormation = () => (
  <section style={{ background: '#f4f5f7', padding: '96px 0' }}>
    <div className="container">
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 14 }}>
            End-to-End Service
          </span>
          <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -1, color: '#080f1e', marginBottom: 16 }}>
            Formation & <span style={{ color: '#143c82' }}>Compliance</span>
          </h2>
          <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto', borderRadius: 2 }} />
        </div>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: 32 }} className="smsf-compliance-grid">
        
        {/* Formation Panel */}
        <Reveal delay={0.1}>
          <div style={{ background: '#fff', padding: '40px 32px', borderTop: '4px solid #c8a96e', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', height: '100%' }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#080f1e', marginBottom: 8 }}>Formation</h3>
            <p style={{ fontSize: 14, color: '#464650', marginBottom: 24, lineHeight: 1.7 }}>
              Our comprehensive support services include everything you need to create a successful SMSF.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, margin: 0, padding: 0, listStyle: 'none' }}>
              {formationItems.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(20,60,130,0.08)', border: '1px solid rgba(20,60,130,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <CheckCircle2 size={12} color="#143c82" />
                  </div>
                  <span style={{ fontSize: 14, color: '#464650', fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Compliance Panel */}
        <Reveal delay={0.2}>
          <div style={{ background: 'linear-gradient(135deg,#080f1e 0%,#0c1a36 100%)', padding: '40px 32px', borderTop: '4px solid #143c82', boxShadow: '0 4px 24px rgba(20,60,130,0.15)', height: '100%' }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Administration & Compliance</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 24, lineHeight: 1.7 }}>
              We navigate the complex compliance requirements to ensure your fund is run legally and safely.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, margin: 0, padding: 0, listStyle: 'none' }}>
              {complianceItems.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(200,169,110,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <ChevronRight size={14} color="#c8a96e" />
                  </div>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

      </div>
    </div>
    <style>{`@media(max-width:900px){.smsf-compliance-grid{grid-template-columns:1fr !important;}}`}</style>
  </section>
);

/* ════════════════════════════════════
   SECTION 5 – CTA BANNER
════════════════════════════════════ */
const CTABanner = () => (
  <section id="smsf-contact" style={{ background: 'linear-gradient(135deg,#0c1a36 0%,#080f1e 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden', borderTop: '4px solid #c8a96e' }}>
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)`, backgroundSize: '60px 60px' }} />
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)' }}>Secure Your Retirement</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,46px)', fontWeight: 900, lineHeight: 1.1, color: '#fff', letterSpacing: -1, marginBottom: 18 }}>
              Speak To An<br />
              <span style={{ color: '#c8a96e' }}>SMSF Specialist</span>
            </h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', maxWidth: 480 }}>
              Discover if a Self-Managed Superannuation Fund is the right strategy for you. Book an obligation-free consultation with our accredited SMSF advisors.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 240 }}>
            <a href="tel:0894093644" style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#143c82', padding: '18px 28px', transition: 'background 0.25s ease', fontFamily: 'Montserrat,sans-serif', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.background = '#0f2f68'} onMouseLeave={e => e.currentTarget.style.background = '#143c82'}>
              <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Phone size={16} color="#c8a96e" /></div>
              <div><div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 2 }}>Call Us Now</div><div style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: -0.3 }}>(08) 9409 3644</div></div>
            </a>
            <a href="mailto:admin@carbonepartners.com.au" style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'transparent', padding: '18px 28px', border: '1px solid rgba(255,255,255,0.15)', transition: 'all 0.25s ease', fontFamily: 'Montserrat,sans-serif', textDecoration: 'none' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.30)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}>
              <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Mail size={16} color="rgba(255,255,255,0.55)" /></div>
              <div><div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Send Enquiry</div><div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>admin@carbonepartners.com.au</div></div>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════ */
const SMSFPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  return (
    <div>
      <PageHero onBack={onBack} />
      <SMSFIntro />
      <BenefitsGrid />
      <ComplianceFormation />
      <CTABanner />
    </div>
  );
};

export default SMSFPage;
