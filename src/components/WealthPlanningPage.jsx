import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, Mail, ChevronRight, Home, CheckCircle2, Target, Shield, BarChart2, Briefcase, Award, Zap, Building2, BookOpen, Map, Users, Settings, LineChart, PieChart } from 'lucide-react';
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

    <div style={{ position: 'absolute', right: 140, top: '50%', transform: 'translateY(-50%)', opacity: 0.05, pointerEvents: 'none' }}>
      <PieChart size={260} color="#fff" strokeWidth={0.8} />
    </div>

    <div className="container" style={{ position: 'relative', zIndex: 2, padding: '60px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s', fontFamily: 'Montserrat,sans-serif' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
          <Home size={12} /> Home
        </button>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Wealth</span>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>Planning</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
          Secure Your Future
        </span>
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -1.5, color: '#fff', marginBottom: 22, maxWidth: 720 }}>
        Strategic<br />
        <span style={{ color: '#c8a96e' }}>Wealth</span> Planning
      </h1>
      <div style={{ width: 56, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />

      <p style={{ fontSize: 15.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.62)', maxWidth: 600, marginBottom: 44 }}>
        The need for quality financial advice has never been greater. We strive to provide integrated financial solutions, proactive advice, and service in all facets of wealth planning.
      </p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <a href="#bc-contact" className="btn-red" style={{ fontSize: 12, letterSpacing: 1.5 }}>
          Arrange a Free Meeting <ArrowRight size={15} />
        </a>
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════
   SECTION 2 – INTRO
════════════════════════════════════ */
const IntroSection = () => (
  <section style={{ background: '#fff', padding: '96px 0' }}>
    <div className="container">
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 72, alignItems: 'center' }} className="bc-intro-grid">
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 16 }}>
              Tailored Strategies
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,42px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, color: '#080f1e', marginBottom: 20 }}>
              Build & Protect Your<br />
              <span style={{ color: '#143c82' }}>Financial Future.</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 20 }}>
              Financial decisions can be stressful and many avoid making them in fear of making a mistake. However, making the right choices early on can set you up for retirement and help you achieve financial freedom. With evolving financial markets and regulatory regimes, there are more investment alternatives than ever.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 20 }}>
              Wealth planning involves formulating a <strong style={{ color: '#080f1e' }}>strategy tailored specifically to your financial needs</strong> and resources, taking into account your age, lifestyle, investment experience, risk profile, and investment time horizon.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 36 }}>
              Our detailed knowledge of the taxation laws also ensures your finances are structured in the most tax-effective and secure manner. Our aim is to assist you to secure and build your financial future.
            </p>
          </div>

          <div style={{ background: 'linear-gradient(135deg,#080f1e 0%,#0c1a36 100%)', padding: '52px 44px', borderTop: '4px solid #c8a96e' }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 24 }}>The Wealth Planning Process</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: 0, padding: 0, listStyle: 'none' }}>
              {[
                'Initial Meeting & Goal Direction',
                'Fact Finding (Information Gathering)',
                'Preparation of Financial Plan (Statement of Advice)',
                'Meeting to Discuss the Financial Plan',
                'Plan Implementation',
                'Periodic Reviews & Adjustments'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(200,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={13} color="#c8a96e" />
                  </div>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
    <style>{`@media(max-width:900px){.bc-intro-grid{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
  </section>
);

/* ════════════════════════════════════
   SECTION 3 – CAPABILITIES GRID
════════════════════════════════════ */
const capabilities = [
  { Icon: Target, color: '#143c82', title: 'Strategic Roadmap', desc: 'A detailed Statement of Advice to define your path toward retirement and financial freedom.' },
  { Icon: Map, color: '#0f2f68', title: 'Goal Setting', desc: 'Working with you to clarify your lifestyle goals, risk tolerance, and investment time horizons.' },
  { Icon: Shield, color: '#1a4fa0', title: 'Tax Effective', desc: 'Our detailed knowledge of taxation laws ensures your finances are structured securely and efficiently.' },
  { Icon: Users, color: '#143c82', title: 'Estate Planning', desc: 'Addressing personal, family, and estate goals to achieve the optimum retirement plan.' },
  { Icon: Zap, color: '#0f2f68', title: 'Proactive Adjustments', desc: 'No "set and forget" strategies. We adjust original recommendations to accommodate changes in your life.' },
  { Icon: BarChart2, color: '#1a4fa0', title: 'Periodic Reviews', desc: 'Regular review of your investment performance, current trends, and shifts in regulatory laws.' },
];

const CapabilitiesGrid = () => {
  const [hov, setHov] = useState(null);
  return (
    <section id="bc-services" style={{ background: '#f4f5f7', padding: '96px 0' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 14 }}>
              Our Wealth Core Services
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -1, color: '#080f1e', marginBottom: 16 }}>
              Tools for Long-Term <span style={{ color: '#143c82' }}>Growth</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto 20px', borderRadius: 2 }} />
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="ta-services-grid">
          {capabilities.map(({ Icon, color, title, desc }, i) => {
            const isHov = hov === i;
            return (
              <Reveal key={title} delay={i * 0.05}>
                <div onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} style={{ background: isHov ? `linear-gradient(135deg,${color} 0%,#080f1e 100%)` : '#fff', padding: '36px 32px', borderTop: `4px solid ${isHov ? '#c8a96e' : color}`, boxShadow: isHov ? `0 20px 52px rgba(20,60,130,0.30)` : '0 2px 16px rgba(0,0,0,0.05)', transform: isHov ? 'translateY(-6px)' : 'none', transition: 'all 0.35s cubic-bezier(0.34,1.46,0.64,1)', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'default' }}>
                  <div style={{ width: 50, height: 50, marginBottom: 22, flexShrink: 0, background: isHov ? 'rgba(255,255,255,0.12)' : 'rgba(20,60,130,0.08)', border: `1.5px solid ${isHov ? 'rgba(255,255,255,0.25)' : 'rgba(20,60,130,0.20)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
                    <Icon size={20} color={isHov ? '#c8a96e' : color} />
                  </div>
                  <h3 style={{ fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3, color: isHov ? '#fff' : '#080f1e', marginBottom: 12, lineHeight: 1.3, transition: 'color 0.3s' }}>{title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: isHov ? 'rgba(255,255,255,0.68)' : '#464650', transition: 'color 0.3s', flexGrow: 1 }}>{desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════
   SECTION 4 – CTA BANNER
════════════════════════════════════ */
const CTABanner = () => (
  <section id="bc-contact" style={{ background: 'linear-gradient(135deg,#0c1a36 0%,#080f1e 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden', borderTop: '4px solid #c8a96e' }}>
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)`, backgroundSize: '60px 60px' }} />
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)' }}>For All Stages of Life</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,46px)', fontWeight: 900, lineHeight: 1.1, color: '#fff', letterSpacing: -1, marginBottom: 18 }}>
              Ready to Define Your<br />
              <span style={{ color: '#c8a96e' }}>Financial Strategy?</span>
            </h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', maxWidth: 480 }}>
              Wealth Planning is not only for wealthy pre-retirees. We will actively partner with you to help you achieve your financial goals, no matter what stage you are at.
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
const WealthPlanningPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  return (
    <div>
      <PageHero onBack={onBack} />
      <IntroSection />
      <CapabilitiesGrid />
      <CTABanner />
    </div>
  );
};

export default WealthPlanningPage;
