import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, Phone, Mail, ChevronRight, Home,
  CheckCircle2, FileText, Shield, TrendingUp,
  Globe, Calculator, BookOpen, Star,
  Users, Award, BarChart2, Clock, Zap, Lock,
} from 'lucide-react';
import servicesHeroBg from '../assets/services-hero.png';

/* ─── Animated Counter ─── */
function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = () => {
          start += 16;
          const progress = Math.min(start / 1800, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(ease * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

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
    
    {/* Gold accent bar */}
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: 'linear-gradient(180deg,#c8a96e,#b8924e)', zIndex: 2 }} />

    {/* Grid texture */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)`,
      backgroundSize: '60px 60px',
      zIndex: 2,
    }} />

    {/* Decorative circles */}
    <div style={{ position: 'absolute', right: -60, top: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(20,60,130,0.22) 0%,transparent 70%)', pointerEvents: 'none', zIndex: 2 }} />
    <div style={{ position: 'absolute', right: 80, bottom: -100, width: 320, height: 320, border: '1.5px solid rgba(200,169,110,0.13)', borderRadius: '50%', pointerEvents: 'none', zIndex: 2 }} />
    <div style={{ position: 'absolute', right: 120, bottom: -60, width: 220, height: 220, border: '1px solid rgba(20,60,130,0.18)', borderRadius: '50%', pointerEvents: 'none', zIndex: 2 }} />

    {/* Tax icon watermark */}
    <div style={{ position: 'absolute', right: 140, top: '50%', transform: 'translateY(-50%)', opacity: 0.05, pointerEvents: 'none', zIndex: 2 }}>
      <Calculator size={260} color="#fff" strokeWidth={0.8} />
    </div>

    <div className="container" style={{ position: 'relative', zIndex: 3, padding: '60px 32px' }}>

      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
        <button onClick={onBack} style={{
          background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s', fontFamily: 'Montserrat,sans-serif',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
        >
          <Home size={12} /> Home
        </button>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Services</span>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>Tax Advisory</span>
      </div>

      {/* Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
          Tax Specialists · Perth, WA
        </span>
      </div>

      {/* Heading */}
      <h1 style={{
        fontSize: 'clamp(32px,5vw,64px)', fontWeight: 900, lineHeight: 1.05,
        letterSpacing: -1.5, color: '#fff', marginBottom: 22, maxWidth: 720,
      }}>
        Strategic<br />
        <span style={{ color: '#c8a96e' }}>Tax Advisory</span> Services
      </h1>
      <div style={{ width: 56, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />

      <p style={{
        fontSize: 15.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.62)',
        maxWidth: 600, marginBottom: 44, fontWeight: 400,
      }}>
        Australian tax law is complex and constantly changing. At Carbone Partners, our qualified tax advisors deliver practical, leading-edge tax advice across a broad spectrum of issues — ensuring compliance while maximising legitimate tax minimisation opportunities.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <a href="#ta-contact" className="btn-red" style={{ fontSize: 12, letterSpacing: 1.5 }}>
          Book Free Tax Review <ArrowRight size={15} />
        </a>
        <a href="#ta-services" className="btn-outline-white" style={{ fontSize: 12, letterSpacing: 1.5 }}>
          Our Tax Services <ChevronRight size={15} />
        </a>
      </div>

      {/* Credentials */}
      <div style={{ marginTop: 52, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.10)', display: 'flex', gap: 40, flexWrap: 'wrap' }}>
        {[
          { label: 'IPA Accredited', sub: 'Institute of Public Accountants' },
          { label: 'Tax Practitioners Board', sub: 'Registered tax agents' },
          { label: 'Year-Round Service', sub: 'Not just tax time — always on' },
          { label: 'International Tax', sub: 'AU & global tax structures' },
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
   SECTION 2 – INTRO + STATS
════════════════════════════════════ */
const IntroSection = () => (
  <section style={{ background: '#fff', padding: '96px 0' }}>
    <div className="container">
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 72, alignItems: 'center' }} className="ta-intro-grid">

          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 16 }}>
              Tax Management Matters
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,42px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, color: '#080f1e', marginBottom: 20 }}>
              The Right Tax Advice<br />
              <span style={{ color: '#143c82' }}>Changes Everything</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 20 }}>
              Australian Tax Law is complex and constantly changing. Understanding both the Australian and International taxation systems can be overwhelming — challenging for both individuals and businesses alike.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 20 }}>
              Whether you have a specific business issue or are working on a large transaction, <strong style={{ color: '#080f1e' }}>the effective management of your tax position is critical.</strong> Getting the right advice upfront can make a significant difference to the end result.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 36 }}>
              We view taxation planning as an <strong style={{ color: '#080f1e' }}>essential component of your financial affairs</strong> and offer all year-round taxation services that assist you to manage your business and personal affairs — ensuring tax compliance and minimisation.
            </p>
            <a href="#ta-contact" className="btn-red" style={{ fontSize: 12, letterSpacing: 1.5 }}>
              Speak to a Tax Advisor <ArrowRight size={15} />
            </a>
          </div>

          {/* Stats panel */}
          <div style={{
            background: 'linear-gradient(135deg,#080f1e 0%,#0c1a36 100%)',
            padding: '52px 44px', borderTop: '4px solid #c8a96e',
          }}>
            {[
              { target: 25, suffix: '+', label: 'Years Tax Experience', sub: 'Advising Perth businesses since the late 1990s' },
              { target: 98, suffix: '%', label: 'ATO Compliance Rate', sub: 'Zero audit penalties across our client portfolio' },
              { target: 40, suffix: '+', label: 'Tax Strategies', sub: 'Proven minimisation strategies for every entity type' },
            ].map(({ target, suffix, label, sub }, i) => (
              <div key={label} style={{ padding: '28px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontSize: 'clamp(36px,4.5vw,52px)', fontWeight: 900, lineHeight: 1, color: '#c8a96e', marginBottom: 6, letterSpacing: -1 }}>
                  <Counter target={target} suffix={suffix} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 0.3, marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.42)', lineHeight: 1.6 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
    <style>{`@media(max-width:900px){.ta-intro-grid{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
  </section>
);

/* ════════════════════════════════════
   SECTION 3 – TAX SERVICES GRID
════════════════════════════════════ */
const taxServices = [
  { Icon: Globe,        color: '#143c82', title: 'International Tax',         desc: 'Cross-border tax structures, transfer pricing, foreign income and repatriation strategies for global operations and expatriates.' },
  { Icon: BarChart2,    color: '#0f2f68', title: 'Corporate Tax Planning',    desc: 'Structuring and tax planning for companies of all sizes, including group consolidations and corporate reorganisations.' },
  { Icon: Calculator,   color: '#1a4fa0', title: 'GST & Indirect Tax',        desc: 'GST compliance, BAS lodgement, complex GST transactions, margin scheme and property development tax advice.' },
  { Icon: Shield,       color: '#143c82', title: 'Capital Gains Tax (CGT)',   desc: 'CGT planning for asset sales, business disposals, small business CGT concessions and property investments.' },
  { Icon: FileText,     color: '#0f2f68', title: 'Income Tax Returns',        desc: 'Individual, partnership, company, trust and SMSF income tax returns prepared accurately and lodged on time.' },
  { Icon: TrendingUp,   color: '#1a4fa0', title: 'Tax Minimisation Strategy', desc: 'Legal, proactive strategies to reduce your tax burden through deductions, offsets, depreciation and entity structuring.' },
  { Icon: BookOpen,     color: '#143c82', title: 'Fringe Benefits Tax (FBT)', desc: 'FBT planning, return preparation and lodgement, salary packaging advice and motor vehicle benefit analysis.' },
  { Icon: Lock,         color: '#0f2f68', title: 'ATO Audit Support',         desc: 'Representation and support during ATO audits, reviews and disputes — protecting your rights and minimising risk.' },
  { Icon: Zap,          color: '#1a4fa0', title: 'Tax Restructuring',         desc: 'Business restructuring advice to achieve better tax outcomes while maintaining asset protection and commercial objectives.' },
];

const TaxServicesGrid = () => {
  const [hov, setHov] = useState(null);
  return (
    <section id="ta-services" style={{ background: '#f4f5f7', padding: '96px 0' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 14 }}>
              Full-Spectrum Tax Services
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -1, color: '#080f1e', marginBottom: 16 }}>
              Practical, Leading-Edge <span style={{ color: '#143c82' }}>Tax Advice</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto 20px', borderRadius: 2 }} />
            <p style={{ fontSize: 14.5, color: '#464650', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}>
              Our tax consultants provide advice across a broad spectrum of issues and transactions — for individuals, businesses and complex group structures.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="ta-services-grid">
          {taxServices.map(({ Icon, color, title, desc }, i) => {
            const isHov = hov === i;
            return (
              <Reveal key={title} delay={i * 0.05}>
                <div
                  onMouseEnter={() => setHov(i)}
                  onMouseLeave={() => setHov(null)}
                  style={{
                    background: isHov ? `linear-gradient(135deg,${color} 0%,#080f1e 100%)` : '#fff',
                    padding: '36px 32px',
                    borderTop: `4px solid ${isHov ? '#c8a96e' : color}`,
                    boxShadow: isHov ? `0 20px 52px rgba(20,60,130,0.30)` : '0 2px 16px rgba(0,0,0,0.05)',
                    transform: isHov ? 'translateY(-6px)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.34,1.46,0.64,1)',
                    height: '100%', display: 'flex', flexDirection: 'column', cursor: 'default',
                  }}
                >
                  <div style={{
                    width: 50, height: 50, marginBottom: 22, flexShrink: 0,
                    background: isHov ? 'rgba(255,255,255,0.12)' : 'rgba(20,60,130,0.08)',
                    border: `1.5px solid ${isHov ? 'rgba(255,255,255,0.25)' : 'rgba(20,60,130,0.20)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}>
                    <Icon size={20} color={isHov ? '#c8a96e' : color} />
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: isHov ? 'rgba(200,169,110,0.85)' : color, marginBottom: 10 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3, color: isHov ? '#fff' : '#080f1e', marginBottom: 12, lineHeight: 1.3, transition: 'color 0.3s' }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: isHov ? 'rgba(255,255,255,0.68)' : '#464650', transition: 'color 0.3s', flexGrow: 1 }}>
                    {desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.ta-services-grid{grid-template-columns:repeat(2,1fr) !important;}}
        @media(max-width:640px){.ta-services-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════
   SECTION 4 – WHO WE HELP (dark)
════════════════════════════════════ */
const whoWeHelp = [
  { Icon: Users,     title: 'Individuals & Families',    desc: 'Personal income tax returns, investment property tax, salary packaging, estate planning and wealth transition strategies.' },
  { Icon: BarChart2, title: 'Small & Medium Businesses', desc: 'Business structuring, tax compliance, BAS, FBT, payroll tax and year-round proactive tax minimisation for SMEs.' },
  { Icon: Globe,     title: 'International Clients',     desc: 'Australian tax issues for foreign investors, expats and non-residents — including double tax agreement advice.' },
  { Icon: Award,     title: 'Trusts & SMSF Entities',   desc: 'Trust distribution planning, SMSF tax compliance, contribution strategies and pension phase tax planning.' },
  { Icon: TrendingUp,title: 'Investors & Property',      desc: 'Negative gearing, CGT planning, depreciation schedules, land tax and property investment structuring.' },
  { Icon: Shield,    title: 'High-Net-Worth Clients',    desc: 'Sophisticated tax structuring, asset protection, private group tax compliance and complex transaction advisory.' },
];

const WhoWeHelp = () => {
  const [hov, setHov] = useState(null);
  return (
    <section style={{ background: '#080f1e', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -100, top: '50%', transform: 'translateY(-50%)', width: 500, height: 500, background: 'radial-gradient(circle,rgba(20,60,130,0.22) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: 14 }}>
              Who We Serve
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -1, color: '#fff', marginBottom: 16 }}>
              Tax Advice For <span style={{ color: '#c8a96e' }}>Every Situation</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto', borderRadius: 2 }} />
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="ta-who-grid">
          {whoWeHelp.map(({ Icon, title, desc }, i) => {
            const isHov = hov === i;
            return (
              <Reveal key={title} delay={i * 0.07}>
                <div
                  onMouseEnter={() => setHov(i)}
                  onMouseLeave={() => setHov(null)}
                  style={{
                    padding: '36px 28px',
                    background: isHov ? 'rgba(20,60,130,0.30)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isHov ? 'rgba(20,60,130,0.55)' : 'rgba(255,255,255,0.07)'}`,
                    borderTop: `3px solid ${isHov ? '#c8a96e' : '#143c82'}`,
                    transform: isHov ? 'translateY(-5px)' : 'none',
                    transition: 'all 0.3s ease', cursor: 'default',
                    height: '100%', display: 'flex', flexDirection: 'column',
                  }}
                >
                  <div style={{
                    width: 52, height: 52, flexShrink: 0, marginBottom: 22,
                    background: isHov ? 'rgba(200,169,110,0.18)' : 'rgba(20,60,130,0.28)',
                    border: `1.5px solid ${isHov ? 'rgba(200,169,110,0.55)' : 'rgba(20,60,130,0.40)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}>
                    <Icon size={20} color={isHov ? '#c8a96e' : '#5a8ad4'} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: isHov ? '#c8a96e' : '#fff', marginBottom: 12, letterSpacing: -0.3, transition: 'color 0.3s' }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', flexGrow: 1 }}>{desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.ta-who-grid{grid-template-columns:repeat(2,1fr) !important;}}
        @media(max-width:560px){.ta-who-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════
   SECTION 5 – COMPLIANCE CHECKLIST
════════════════════════════════════ */
const checklistItems = [
  { Icon: CheckCircle2, text: 'Individual Income Tax Return (ITR) preparation & lodgement' },
  { Icon: CheckCircle2, text: 'Company, trust & partnership income tax return lodgement' },
  { Icon: CheckCircle2, text: 'Business Activity Statement (BAS) – monthly or quarterly' },
  { Icon: CheckCircle2, text: 'Instalment Activity Statements (IAS) preparation' },
  { Icon: CheckCircle2, text: 'Fringe Benefits Tax (FBT) return preparation & lodgement' },
  { Icon: CheckCircle2, text: 'Payroll tax registration, returns and advice' },
  { Icon: CheckCircle2, text: 'PAYG withholding obligations and annual reconciliation' },
  { Icon: CheckCircle2, text: 'ATO correspondence, review & audit management' },
];

const ComplianceChecklist = () => {
  const [hov, setHov] = useState(null);
  return (
    <section style={{ background: '#fff', padding: '96px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 72, alignItems: 'start' }} className="ta-check-grid">

          <Reveal>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 16 }}>
              Tax Compliance
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, color: '#080f1e', marginBottom: 20 }}>
              Every Obligation,<br />
              <span style={{ color: '#143c82' }}>Handled with Precision</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />
            <p style={{ fontSize: 14.5, lineHeight: 1.9, color: '#464650', marginBottom: 32 }}>
              We handle every tax obligation on your behalf — from individual returns to complex multi-entity groups — so you never miss a deadline or face an unexpected ATO penalty.
            </p>
            <div style={{
              background: 'linear-gradient(135deg,#080f1e 0%,#0c1a36 100%)',
              padding: '28px 32px', borderLeft: '4px solid #c8a96e',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e', marginBottom: 12 }}>Year-Round, Not Just Tax Time</div>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.62)' }}>
                Unlike many accountants who only see you in July, Carbone Partners provides proactive, ongoing tax advice throughout the entire year — ensuring your tax position is always optimised.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 3 }}>
              {checklistItems.map(({ Icon, text }, i) => {
                const isHov = hov === i;
                return (
                  <div key={i}
                    onMouseEnter={() => setHov(i)}
                    onMouseLeave={() => setHov(null)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 18,
                      padding: '20px 24px',
                      background: isHov ? 'linear-gradient(135deg,#080f1e 0%,#0c1a36 100%)' : '#f4f5f7',
                      borderLeft: `4px solid ${isHov ? '#c8a96e' : '#143c82'}`,
                      transform: isHov ? 'translateX(4px)' : 'none',
                      transition: 'all 0.3s ease', cursor: 'default',
                    }}
                  >
                    <div style={{
                      width: 38, height: 38, flexShrink: 0,
                      background: isHov ? 'rgba(255,255,255,0.10)' : 'rgba(20,60,130,0.10)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'background 0.3s',
                    }}>
                      <Icon size={17} color={isHov ? '#c8a96e' : '#143c82'} />
                    </div>
                    <span style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.5, color: isHov ? '#fff' : '#080f1e', transition: 'color 0.3s' }}>
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media(max-width:900px){.ta-check-grid{grid-template-columns:1fr !important;gap:48px !important;}}`}</style>
    </section>
  );
};

/* ════════════════════════════════════
   SECTION 6 – OUR APPROACH TIMELINE
════════════════════════════════════ */
const approachSteps = [
  { num: '01', title: 'Understand',  color: '#143c82', desc: 'We begin by fully understanding your financial position, entity structure, and current tax obligations across all relevant taxes.' },
  { num: '02', title: 'Strategise', color: '#0f2f68', desc: 'Our tax specialists design a tailored strategy to minimise your tax exposure legally and align with your short and long-term goals.' },
  { num: '03', title: 'Implement',  color: '#1a4fa0', desc: 'We action the strategy — handling all lodgements, elections, elections and restructuring steps with precision and within deadlines.' },
  { num: '04', title: 'Monitor',    color: '#143c82', desc: 'Tax law changes constantly. We continuously monitor ATO updates, new rulings and legislative changes to keep your position optimal.' },
];

const ApproachTimeline = () => (
  <section style={{ background: '#f4f5f7', padding: '96px 0' }}>
    <div className="container">
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 14 }}>
            Our Methodology
          </span>
          <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -1, color: '#080f1e', marginBottom: 16 }}>
            The Carbone <span style={{ color: '#143c82' }}>Tax Approach</span>
          </h2>
          <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto', borderRadius: 2 }} />
        </div>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, position: 'relative' }} className="ta-timeline-grid">
        <div style={{ position: 'absolute', top: 52, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(90deg,#143c82 0%,#c8a96e 100%)', opacity: 0.35, zIndex: 0 }} className="ta-timeline-line" />
        {approachSteps.map(({ num, title, desc, color }, i) => (
          <Reveal key={num} delay={i * 0.10}>
            <div style={{
              background: '#fff', padding: '44px 28px 36px', position: 'relative', zIndex: 1,
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)', borderBottom: `4px solid ${color}`, height: '100%',
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: `linear-gradient(135deg,${color} 0%,#080f1e 100%)`,
                border: '3px solid #c8a96e', marginBottom: 24, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 6px 24px rgba(20,60,130,0.35)`,
              }}>
                <span style={{ fontSize: 13, fontWeight: 900, color: '#c8a96e', letterSpacing: 1 }}>{num}</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#080f1e', marginBottom: 14, letterSpacing: -0.3 }}>{title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: '#464650' }}>{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
    <style>{`
      @media(max-width:900px){.ta-timeline-grid{grid-template-columns:repeat(2,1fr) !important;}.ta-timeline-line{display:none !important;}}
      @media(max-width:560px){.ta-timeline-grid{grid-template-columns:1fr !important;}}
    `}</style>
  </section>
);

/* ════════════════════════════════════
   SECTION 7 – WHY CARBONE TAX
════════════════════════════════════ */
const whyCarbone = [
  { Icon: Clock,     title: 'Year-Round Advisors',    desc: 'We are your tax partner all year, not just at 30 June — proactively managing your position every quarter.' },
  { Icon: Globe,     title: 'International Expertise', desc: 'We advise on both Australian and international tax — for expats, foreign investors and global businesses.' },
  { Icon: Zap,       title: 'Practical Advice',        desc: 'Leading-edge, commercially practical tax advice that works in the real world — not just technically correct.' },
  { Icon: Star,      title: 'Holistic Integration',    desc: 'Tax advice integrated with accounting, wealth, SMSF and finance for a truly complete financial outcome.' },
];

const WhyCarbone = () => {
  const [hov, setHov] = useState(null);
  return (
    <section style={{ background: '#080f1e', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: -100, top: '50%', transform: 'translateY(-50%)', width: 500, height: 500, background: 'radial-gradient(circle,rgba(20,60,130,0.22) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: 14 }}>
              The Carbone Difference
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -1, color: '#fff', marginBottom: 16 }}>
              Why Choose <span style={{ color: '#c8a96e' }}>Carbone Tax Advisory</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto', borderRadius: 2 }} />
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="ta-why-grid">
          {whyCarbone.map(({ Icon, title, desc }, i) => {
            const isHov = hov === i;
            return (
              <Reveal key={title} delay={i * 0.08}>
                <div
                  onMouseEnter={() => setHov(i)}
                  onMouseLeave={() => setHov(null)}
                  style={{
                    padding: '40px 28px',
                    background: isHov ? 'rgba(20,60,130,0.30)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isHov ? 'rgba(20,60,130,0.60)' : 'rgba(255,255,255,0.08)'}`,
                    borderTop: `3px solid ${isHov ? '#c8a96e' : '#143c82'}`,
                    transform: isHov ? 'translateY(-5px)' : 'none',
                    transition: 'all 0.3s ease', textAlign: 'center',
                    height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    width: 56, height: 56, marginBottom: 24,
                    background: isHov ? 'rgba(200,169,110,0.20)' : 'rgba(20,60,130,0.30)',
                    border: `1.5px solid ${isHov ? 'rgba(200,169,110,0.60)' : 'rgba(20,60,130,0.40)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}>
                    <Icon size={22} color={isHov ? '#c8a96e' : '#5a8ad4'} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: isHov ? '#c8a96e' : '#fff', marginBottom: 14, letterSpacing: -0.3, transition: 'color 0.3s' }}>{title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.ta-why-grid{grid-template-columns:repeat(2,1fr) !important;}}
        @media(max-width:560px){.ta-why-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════
   SECTION 8 – CTA BANNER
════════════════════════════════════ */
const CTABanner = () => (
  <section id="ta-contact" style={{
    background: 'linear-gradient(135deg,#0c1a36 0%,#080f1e 100%)',
    padding: '80px 0', position: 'relative', overflow: 'hidden',
    borderTop: '4px solid #c8a96e',
  }}>
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)`,
      backgroundSize: '60px 60px',
    }} />
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)' }}>Free Tax Consultation</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,46px)', fontWeight: 900, lineHeight: 1.1, color: '#fff', letterSpacing: -1, marginBottom: 18 }}>
              Arrange Your Free<br />
              <span style={{ color: '#c8a96e' }}>Tax Review</span> Today
            </h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', maxWidth: 480 }}>
              Getting the right tax advice upfront can make a significant difference to the end result. Book a free meeting with our qualified tax advisors and discover how much you could be saving.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 240 }}>
            <a href="tel:0894093644" style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: '#143c82', padding: '18px 28px',
              transition: 'background 0.25s ease',
              fontFamily: 'Montserrat,sans-serif', textDecoration: 'none',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#0f2f68'}
              onMouseLeave={e => e.currentTarget.style.background = '#143c82'}
            >
              <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={16} color="#c8a96e" />
              </div>
              <div>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 2 }}>Call Us Now</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: -0.3 }}>(08) 9409 3644</div>
              </div>
            </a>

            <a href="mailto:admin@carbonepartners.com.au" style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: 'transparent', padding: '18px 28px',
              border: '1px solid rgba(255,255,255,0.15)',
              transition: 'all 0.25s ease',
              fontFamily: 'Montserrat,sans-serif', textDecoration: 'none',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.30)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >
              <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={16} color="rgba(255,255,255,0.55)" />
              </div>
              <div>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Send Enquiry</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>admin@carbonepartners.com.au</div>
              </div>
            </a>

            <div style={{ padding: '14px 28px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)', marginBottom: 4 }}>Office</div>
              <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.60)', lineHeight: 1.65 }}>
                Level 1, Suite 36/285 Vincent Street<br />Leederville, WA 6007
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════ */
const TaxAdvisoryPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  return (
    <div>
      <PageHero onBack={onBack} />
      <IntroSection />
      <TaxServicesGrid />
      <WhoWeHelp />
      <ComplianceChecklist />
      <ApproachTimeline />
      <WhyCarbone />
      <CTABanner />
    </div>
  );
};

export default TaxAdvisoryPage;
