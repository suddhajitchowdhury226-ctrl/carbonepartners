import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, Phone, Mail, ChevronRight,
  CheckCircle2, FileText, Shield, TrendingUp,
  Users, BarChart2, Clock, Award, Building2,
  Calculator, BookOpen, Star, Home,
} from 'lucide-react';
import servicesHeroBg from '../assets/services-hero.png';

/* ─── Animated Stat Counter ─── */
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
        const duration = 1800;
        const step = () => {
          start += 16;
          const progress = Math.min(start / duration, 1);
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

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

/* ─── Section wrapper with scroll reveal ─── */
function SectionReveal({ children, style = {}, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(44px)',
        transition: 'opacity 0.75s ease, transform 0.75s ease',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ════════════════════════════════════════
   SECTION 1 — PAGE HERO
════════════════════════════════════════ */
const PageHero = ({ onBack }) => (
  <section style={{
    position: 'relative',
    backgroundImage: `url(${servicesHeroBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: 480,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: 90,
  }}>
    {/* Dark Overlay for readability */}
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,15,30,0.92) 0%, rgba(12,26,54,0.85) 60%, rgba(20,34,72,0.25) 100%)', zIndex: 1 }} />
    
    {/* Gold left accent bar */}
    <div style={{
      position: 'absolute', left: 0, top: 0, bottom: 0, width: 5,
      background: 'linear-gradient(180deg, #c8a96e 0%, #b8924e 100%)',
      zIndex: 2,
    }} />

    {/* Grid texture overlay */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      zIndex: 2,
    }} />

    {/* Decorative shape right */}
    <div style={{
      position: 'absolute', right: -80, top: -80, width: 500, height: 500,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(20,60,130,0.20) 0%, transparent 70%)',
      pointerEvents: 'none',
      zIndex: 2,
    }} />
    <div style={{
      position: 'absolute', right: 60, bottom: -120, width: 360, height: 360,
      border: '1.5px solid rgba(200,169,110,0.12)',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 2,
    }} />
    <div style={{
      position: 'absolute', right: 100, bottom: -80, width: 280, height: 280,
      border: '1px solid rgba(20,60,130,0.18)',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 2,
    }} />

    <div className="container" style={{ position: 'relative', zIndex: 3, padding: '60px 32px' }}>

      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
        <button onClick={onBack} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 6,
          fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
          transition: 'color 0.2s',
          fontFamily: 'Montserrat, sans-serif',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
        >
          <Home size={12} /> Home
        </button>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Services</span>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>Accounting & Compliance</span>
      </div>

      {/* Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
          Accountants · Perth, WA
        </span>
      </div>

      {/* Heading */}
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 64px)',
        fontWeight: 900, lineHeight: 1.05, letterSpacing: -1.5,
        color: '#fff', marginBottom: 22, maxWidth: 740,
      }}>
        Accounting &<br />
        <span style={{ color: '#c8a96e' }}>Compliance</span> Services
      </h1>

      {/* Divider */}
      <div style={{ width: 56, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />

      {/* Subtext */}
      <p style={{
        fontSize: 15.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.62)',
        maxWidth: 600, marginBottom: 44, fontWeight: 400,
      }}>
        Accounting is at the core of what we do. At Carbone Partners, expert accounting naturally comes hand in hand with being your trusted business advisor — providing clarity, direction, and the strategic guidance your business needs to thrive.
      </p>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <a href="#ac-contact" className="btn-red" style={{ fontSize: 12, letterSpacing: 1.5 }}>
          Book Free Consultation <ArrowRight size={15} />
        </a>
        <a href="#ac-expertise" className="btn-outline-white" style={{ fontSize: 12, letterSpacing: 1.5 }}>
          Explore Services <ChevronRight size={15} />
        </a>
      </div>

      {/* Credential strip */}
      <div style={{
        marginTop: 52, paddingTop: 28,
        borderTop: '1px solid rgba(255,255,255,0.10)',
        display: 'flex', gap: 40, flexWrap: 'wrap',
      }}>
        {[
          { label: 'IPA Accredited', sub: 'Institute of Public Accountants' },
          { label: 'SMSF Licensed', sub: 'Superannuation Fund Advisors' },
          { label: 'Xero Certified', sub: 'Cloud Accounting Experts' },
          { label: 'MYOB Partner', sub: 'Authorised Implementation' },
        ].map(({ label, sub }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>{label}</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.28)', lineHeight: 1.5, letterSpacing: 0.3 }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .ac-hero-container { padding: 40px 20px !important; }
      }
    `}</style>
  </section>
);

/* ════════════════════════════════════════
   SECTION 2 — INTRO + STATS
════════════════════════════════════════ */
const IntroSection = () => (
  <section style={{ background: '#fff', padding: '96px 0' }}>
    <div className="container">
      <SectionReveal>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr',
          gap: 72, alignItems: 'center',
        }} className="ac-intro-grid">

          {/* Left – text */}
          <div>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 2.5,
              textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 16,
            }}>
              Who We Are
            </span>
            <h2 style={{
              fontSize: 'clamp(24px, 3.2vw, 42px)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: -1, color: '#080f1e', marginBottom: 20,
            }}>
              Your Accountant <em style={{ fontStyle: 'normal', color: '#143c82' }}>and</em><br />Business Advisor
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 20 }}>
              As accountants, accounting is still at the core of what we do. At Carbone Partners, this naturally comes hand in hand with being your business advisor. As your accountant and advisor it is important to plan where you are going in order to provide a clear direction to everyone in your business and the best chance of achieving your goals.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 32 }}>
              In order to be successful in achieving your business goals and protecting your wealth, we provide <strong style={{ color: '#080f1e' }}>insightful, unbiased advice</strong>, strategic solutions, and thoughtful service that goes beyond the numbers.
            </p>
            <a href="#ac-contact" className="btn-red" style={{ fontSize: 12, letterSpacing: 1.5 }}>
              Speak to an Advisor <ArrowRight size={15} />
            </a>
          </div>

          {/* Right – stat counters */}
          <div style={{
            background: 'linear-gradient(135deg, #080f1e 0%, #0c1a36 100%)',
            padding: '52px 44px',
            borderTop: '4px solid #c8a96e',
            display: 'flex', flexDirection: 'column', gap: 0,
          }}>
            {[
              { target: 25, suffix: '+', label: 'Years of Experience', sub: 'Serving Perth businesses since the late 1990s' },
              { target: 500, suffix: '+', label: 'Clients Served', sub: 'Across diverse industries in Western Australia' },
              { target: 100, suffix: '%', label: 'Compliance Rate', sub: 'ATO & ASIC lodgement accuracy, every time' },
            ].map(({ target, suffix, label, sub }, i) => (
              <div key={label} style={{
                padding: '28px 0',
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{
                  fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 900,
                  lineHeight: 1, color: '#c8a96e', marginBottom: 6, letterSpacing: -1,
                }}>
                  <Counter target={target} suffix={suffix} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 0.3, marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.42)', lineHeight: 1.6 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .ac-intro-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      }
    `}</style>
  </section>
);

/* ════════════════════════════════════════
   SECTION 3 — AREAS OF EXPERTISE CARDS
════════════════════════════════════════ */
const expertiseAreas = [
  {
    Icon: BarChart2, title: 'Financial & Management',
    desc: 'Detailed financial reporting and management accounts that drive informed decision-making and business strategy.',
    color: '#143c82',
  },
  {
    Icon: Calculator, title: 'Taxation & GST Advisory',
    desc: 'Expert tax planning, BAS preparation, GST advisory and strategic tax minimisation for businesses and individuals.',
    color: '#0f2f68',
  },
  {
    Icon: Shield, title: 'Asset Protection',
    desc: 'Structuring strategies to shield your personal and business assets from risk, litigation, and unforeseen circumstances.',
    color: '#1a4fa0',
  },
  {
    Icon: BookOpen, title: 'Estate Planning',
    desc: 'Thoughtful estate and succession strategies ensuring your wealth is transferred according to your wishes, tax-efficiently.',
    color: '#143c82',
  },
  {
    Icon: Users, title: 'Succession Planning',
    desc: 'Structured plans to transition your business seamlessly to the next generation or new ownership with minimal disruption.',
    color: '#0f2f68',
  },
  {
    Icon: TrendingUp, title: 'Capital Gains Tax Planning',
    desc: 'Proactive CGT planning to minimise liability on asset sales, business disposals, and investment portfolio changes.',
    color: '#1a4fa0',
  },
];

const ExpertiseGrid = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="ac-expertise" style={{ background: '#f4f5f7', padding: '96px 0' }}>
      <div className="container">
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 14 }}>
              Principal Areas
            </span>
            <h2 style={{
              fontSize: 'clamp(24px, 3.2vw, 40px)', fontWeight: 900,
              lineHeight: 1.08, letterSpacing: -1, color: '#080f1e', marginBottom: 16,
            }}>
              Our Areas of <span style={{ color: '#143c82' }}>Expertise</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto 20px', borderRadius: 2 }} />
            <p style={{ fontSize: 14.5, color: '#464650', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}>
              We bring specialist depth across every dimension of accounting and financial advisory — so you have one expert team for everything.
            </p>
          </div>
        </SectionReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="ac-expertise-grid">
          {expertiseAreas.map(({ Icon, title, desc, color }, i) => {
            const isHov = hoveredIdx === i;
            return (
              <SectionReveal key={title} style={{ transitionDelay: `${i * 0.06}s` }}>
                <div
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    background: isHov ? `linear-gradient(135deg, ${color} 0%, #080f1e 100%)` : '#fff',
                    padding: '40px 36px',
                    borderTop: `4px solid ${isHov ? '#c8a96e' : color}`,
                    boxShadow: isHov
                      ? `0 20px 52px rgba(20,60,130,0.30), 0 4px 16px rgba(0,0,0,0.10)`
                      : '0 2px 16px rgba(0,0,0,0.06)',
                    transform: isHov ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.35s cubic-bezier(0.34,1.46,0.64,1)',
                    cursor: 'default',
                    height: '100%',
                    display: 'flex', flexDirection: 'column',
                  }}
                >
                  <div style={{
                    width: 52, height: 52,
                    background: isHov ? 'rgba(255,255,255,0.12)' : `rgba(20,60,130,0.08)`,
                    border: `1.5px solid ${isHov ? 'rgba(255,255,255,0.25)' : `rgba(20,60,130,0.20)`}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24, flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}>
                    <Icon size={22} color={isHov ? '#c8a96e' : color} />
                  </div>

                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: 2,
                    textTransform: 'uppercase',
                    color: isHov ? 'rgba(200,169,110,0.85)' : color,
                    marginBottom: 10, transition: 'color 0.3s',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <h3 style={{
                    fontSize: 17, fontWeight: 800, letterSpacing: -0.3,
                    color: isHov ? '#fff' : '#080f1e', marginBottom: 14,
                    lineHeight: 1.3, transition: 'color 0.3s',
                  }}>
                    {title}
                  </h3>

                  <p style={{
                    fontSize: 13.5, lineHeight: 1.8,
                    color: isHov ? 'rgba(255,255,255,0.68)' : '#464650',
                    transition: 'color 0.3s', flexGrow: 1,
                  }}>
                    {desc}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .ac-expertise-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .ac-expertise-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════════
   SECTION 4 — CONSULTING SERVICES
════════════════════════════════════════ */
const consultingItems = [
  { Icon: Building2, text: 'Acquiring your business — due diligence & structuring advice' },
  { Icon: TrendingUp, text: 'Improving your business profits through operational reviews' },
  { Icon: FileText, text: 'Strategic and business planning for long-term growth' },
  { Icon: CheckCircle2, text: 'Reviewing and improving your business processes' },
  { Icon: BarChart2, text: 'Feasibility studies for new markets and products' },
  { Icon: Star, text: 'Raising funds through business investment syndication' },
  { Icon: Award, text: 'The process of selling your business at optimal value' },
  { Icon: Calculator, text: 'Determining the market value of your business' },
];

const ConsultingServices = () => (
  <section style={{ background: '#080f1e', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
    {/* Decorative element */}
    <div style={{
      position: 'absolute', left: -100, top: '50%', transform: 'translateY(-50%)',
      width: 400, height: 400,
      background: 'radial-gradient(circle, rgba(20,60,130,0.25) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />

    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr',
        gap: 72, alignItems: 'center',
      }} className="ac-consult-grid">

        {/* Left header */}
        <SectionReveal>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: 16 }}>
            Specialist Consulting
          </span>
          <h2 style={{
            fontSize: 'clamp(24px, 3.2vw, 42px)', fontWeight: 900,
            lineHeight: 1.1, letterSpacing: -1, color: '#fff', marginBottom: 20,
          }}>
            Peak Business<br />
            <span style={{ color: '#c8a96e' }}>Performance</span>
          </h2>
          <div style={{ width: 52, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(255,255,255,0.58)', marginBottom: 36 }}>
            Our accountants can help you achieve your peak business performance through specialist consulting — covering every stage of the business lifecycle, from acquisition to exit.
          </p>
          <a href="#ac-contact" className="btn-red" style={{ fontSize: 12, letterSpacing: 1.5 }}>
            Book a Consultation <ArrowRight size={15} />
          </a>
        </SectionReveal>

        {/* Right – items */}
        <SectionReveal style={{ transitionDelay: '0.15s' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,
          }} className="ac-consult-items">
            {consultingItems.map(({ Icon, text }, i) => (
              <div key={i} style={{
                display: 'flex', gap: 14, alignItems: 'flex-start',
                padding: '20px 22px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'background 0.25s ease, border-color 0.25s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(20,60,130,0.18)'; e.currentTarget.style.borderColor = 'rgba(20,60,130,0.40)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                <div style={{
                  width: 34, height: 34, background: 'rgba(20,60,130,0.30)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={15} color="#c8a96e" />
                </div>
                <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.68)', lineHeight: 1.65, fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .ac-consult-grid  { grid-template-columns: 1fr !important; gap: 40px !important; }
        .ac-consult-items { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

/* ════════════════════════════════════════
   SECTION 5 — COMPLIANCE ROLES
════════════════════════════════════════ */
const complianceRoles = [
  { label: 'Financial Statement Preparation', icon: FileText },
  { label: 'Business Activity Statement (BAS) Preparation & Lodgement', icon: CheckCircle2 },
  { label: 'Instalment Activity Statement (IAS) Preparation & Lodgement', icon: Clock },
  { label: 'Income Tax Return Preparation & Lodgement', icon: Calculator },
  { label: 'Fringe Benefits Tax (FBT) Return Preparation & Lodgement', icon: Award },
  { label: 'ASIC Lodgements — Corporate Secretarial Compliance', icon: Building2 },
];

const ComplianceRoles = () => {
  const [hov, setHov] = useState(null);
  return (
    <section style={{ background: '#fff', padding: '96px 0' }}>
      <div className="container">
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 14 }}>
              ATO & ASIC Compliance
            </span>
            <h2 style={{
              fontSize: 'clamp(24px, 3.2vw, 40px)', fontWeight: 900,
              lineHeight: 1.08, letterSpacing: -1, color: '#080f1e', marginBottom: 16,
            }}>
              Compliance Roles We <span style={{ color: '#143c82' }}>Perform</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto 20px', borderRadius: 2 }} />
            <p style={{ fontSize: 14.5, color: '#464650', maxWidth: 500, margin: '0 auto', lineHeight: 1.8 }}>
              Every lodgement, every deadline, every compliance obligation — handled with precision and care, so nothing falls through the cracks.
            </p>
          </div>
        </SectionReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20,
        }} className="ac-compliance-grid">
          {complianceRoles.map(({ label, icon: Icon }, i) => {
            const isHov = hov === i;
            return (
              <SectionReveal key={label} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div
                  onMouseEnter={() => setHov(i)}
                  onMouseLeave={() => setHov(null)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 20,
                    padding: '28px 32px',
                    background: isHov ? 'linear-gradient(135deg, #080f1e 0%, #0c1a36 100%)' : '#f4f5f7',
                    borderLeft: `4px solid ${isHov ? '#c8a96e' : '#143c82'}`,
                    transition: 'all 0.3s ease',
                    transform: isHov ? 'translateX(4px)' : 'translateX(0)',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, flexShrink: 0,
                    background: isHov ? 'rgba(255,255,255,0.10)' : 'rgba(20,60,130,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s',
                  }}>
                    <Icon size={18} color={isHov ? '#c8a96e' : '#143c82'} />
                  </div>
                  <span style={{
                    fontSize: 13.5, fontWeight: 600, lineHeight: 1.55,
                    color: isHov ? '#fff' : '#080f1e',
                    transition: 'color 0.3s',
                  }}>{label}</span>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .ac-compliance-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════════
   SECTION 6 — PROCESS TIMELINE
════════════════════════════════════════ */
const processSteps = [
  {
    num: '01', title: 'Assess',
    desc: 'We conduct a thorough review of your current financial position, business structure, and compliance obligations.',
    color: '#143c82',
  },
  {
    num: '02', title: 'Plan',
    desc: 'We design a tailored accounting and advisory strategy aligned with your business goals and wealth creation targets.',
    color: '#0f2f68',
  },
  {
    num: '03', title: 'Implement',
    desc: 'Our expert team executes the plan — handling all lodgements, filings, and advisory actions on your behalf.',
    color: '#1a4fa0',
  },
  {
    num: '04', title: 'Review',
    desc: 'We continuously monitor, measure and refine the strategy, keeping your business optimal year after year.',
    color: '#143c82',
  },
];

const ProcessTimeline = () => (
  <section style={{ background: '#f4f5f7', padding: '96px 0' }}>
    <div className="container">
      <SectionReveal>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 14 }}>
            How We Work
          </span>
          <h2 style={{
            fontSize: 'clamp(24px, 3.2vw, 40px)', fontWeight: 900,
            lineHeight: 1.08, letterSpacing: -1, color: '#080f1e', marginBottom: 16,
          }}>
            The Carbone Partners <span style={{ color: '#143c82' }}>Process</span>
          </h2>
          <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto', borderRadius: 2 }} />
        </div>
      </SectionReveal>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 2, position: 'relative',
      }} className="ac-process-grid">

        {/* Horizontal connector */}
        <div style={{
          position: 'absolute', top: 52, left: '12.5%', right: '12.5%', height: 2,
          background: 'linear-gradient(90deg, #143c82 0%, #c8a96e 100%)',
          zIndex: 0, opacity: 0.35,
        }} className="ac-process-line" />

        {processSteps.map(({ num, title, desc, color }, i) => (
          <SectionReveal key={num} style={{ transitionDelay: `${i * 0.10}s` }}>
            <div style={{
              background: '#fff',
              padding: '44px 28px 36px',
              position: 'relative', zIndex: 1,
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
              borderBottom: `4px solid ${color}`,
              height: '100%',
            }}>
              {/* Step circle */}
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: `linear-gradient(135deg, ${color} 0%, #080f1e 100%)`,
                border: '3px solid #c8a96e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24, flexShrink: 0,
                boxShadow: `0 6px 24px rgba(20,60,130,0.35)`,
              }}>
                <span style={{ fontSize: 13, fontWeight: 900, color: '#c8a96e', letterSpacing: 1 }}>{num}</span>
              </div>

              <h3 style={{
                fontSize: 18, fontWeight: 800, color: '#080f1e',
                marginBottom: 14, letterSpacing: -0.3,
              }}>{title}</h3>

              <p style={{ fontSize: 13, lineHeight: 1.75, color: '#464650' }}>{desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .ac-process-grid { grid-template-columns: repeat(2,1fr) !important; }
        .ac-process-line { display: none !important; }
      }
      @media (max-width: 560px) {
        .ac-process-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

/* ════════════════════════════════════════
   SECTION 7 — WHY CHOOSE US
════════════════════════════════════════ */
const whyChoose = [
  {
    Icon: Users, title: 'One Expert Team',
    desc: 'Accounting, finance, insurance and wealth management under one roof — no referrals, no gaps.',
  },
  {
    Icon: Shield, title: 'Holistic Approach',
    desc: 'We look beyond the numbers to align your business accounting with your personal wealth goals.',
  },
  {
    Icon: Award, title: 'Licensed Advisors',
    desc: 'IPA accredited, SMSF licensed, Xero certified — our qualifications back every piece of advice.',
  },
  {
    Icon: Home, title: 'Perth Based & Local',
    desc: 'A local Perth firm that truly understands WA business conditions, industries, and regulations.',
  },
];

const WhyChooseUs = () => {
  const [hov, setHov] = useState(null);
  return (
    <section style={{ background: '#080f1e', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: -100, top: -100, width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(20,60,130,0.20) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: 14 }}>
              The Carbone Difference
            </span>
            <h2 style={{
              fontSize: 'clamp(24px, 3.2vw, 40px)', fontWeight: 900,
              lineHeight: 1.08, letterSpacing: -1, color: '#fff', marginBottom: 16,
            }}>
              Why Choose <span style={{ color: '#c8a96e' }}>Carbone Partners</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto', borderRadius: 2 }} />
          </div>
        </SectionReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
        }} className="ac-why-grid">
          {whyChoose.map(({ Icon, title, desc }, i) => {
            const isHov = hov === i;
            return (
              <SectionReveal key={title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div
                  onMouseEnter={() => setHov(i)}
                  onMouseLeave={() => setHov(null)}
                  style={{
                    padding: '40px 28px',
                    background: isHov ? 'rgba(20,60,130,0.30)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isHov ? 'rgba(20,60,130,0.60)' : 'rgba(255,255,255,0.08)'}`,
                    borderTop: `3px solid ${isHov ? '#c8a96e' : '#143c82'}`,
                    transition: 'all 0.3s ease',
                    transform: isHov ? 'translateY(-5px)' : 'translateY(0)',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    width: 56, height: 56,
                    background: isHov ? 'rgba(200,169,110,0.20)' : 'rgba(20,60,130,0.30)',
                    border: `1.5px solid ${isHov ? 'rgba(200,169,110,0.60)' : 'rgba(20,60,130,0.40)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24, transition: 'all 0.3s ease',
                  }}>
                    <Icon size={22} color={isHov ? '#c8a96e' : '#5a8ad4'} />
                  </div>
                  <h3 style={{
                    fontSize: 16, fontWeight: 800, color: isHov ? '#c8a96e' : '#fff',
                    marginBottom: 14, letterSpacing: -0.3, transition: 'color 0.3s',
                  }}>{title}</h3>
                  <p style={{
                    fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)',
                    transition: 'color 0.3s',
                  }}>{desc}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .ac-why-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .ac-why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════════
   SECTION 8 — CTA BANNER
════════════════════════════════════════ */
const CTABanner = () => (
  <section id="ac-contact" style={{
    background: 'linear-gradient(135deg, #0c1a36 0%, #080f1e 100%)',
    padding: '80px 0',
    position: 'relative', overflow: 'hidden',
    borderTop: '4px solid #c8a96e',
  }}>
    {/* Grid texture */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
    }} />

    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <SectionReveal>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 48, flexWrap: 'wrap',
        }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)' }}>
                Free Consultation
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.5vw, 46px)', fontWeight: 900,
              lineHeight: 1.1, color: '#fff', letterSpacing: -1, marginBottom: 18,
            }}>
              Arrange Your<br />
              <span style={{ color: '#c8a96e' }}>Free Meeting</span> Today
            </h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', maxWidth: 480 }}>
              At Carbone Partners, we bring together accounting, business consulting, finance, insurance and wealth management within one team — to meet your complete financial needs.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 240 }}>
            <a href="tel:0894093644" style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: '#143c82', padding: '18px 28px',
              transition: 'background 0.25s ease',
              fontFamily: 'Montserrat, sans-serif',
              textDecoration: 'none',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#0f2f68'}
              onMouseLeave={e => e.currentTarget.style.background = '#143c82'}
            >
              <div style={{
                width: 36, height: 36, background: 'rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
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
              fontFamily: 'Montserrat, sans-serif',
              textDecoration: 'none',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.30)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >
              <div style={{
                width: 36, height: 36, background: 'rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Mail size={16} color="rgba(255,255,255,0.55)" />
              </div>
              <div>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Send Enquiry</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)', letterSpacing: 0.2 }}>admin@carbonepartners.com.au</div>
              </div>
            </a>

            <div style={{
              padding: '14px 28px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)', marginBottom: 4 }}>Office</div>
              <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.60)', lineHeight: 1.65 }}>
                Level 1, Suite 36/285 Vincent Street<br />Leederville, WA 6007
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

/* ════════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════════ */
const AccountingCompliancePage = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <PageHero onBack={onBack} />
      <IntroSection />
      <ExpertiseGrid />
      <ConsultingServices />
      <ComplianceRoles />
      <ProcessTimeline />
      <WhyChooseUs />
      <CTABanner />
    </div>
  );
};

export default AccountingCompliancePage;
