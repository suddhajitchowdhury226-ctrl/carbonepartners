import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, Phone, Mail, ChevronRight, Home,
  CheckCircle2, Shield, FileText, Briefcase, Landmark, BookOpen
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
    
    <div style={{ position: 'absolute', right: 140, top: '50%', transform: 'translateY(-50%)', opacity: 0.05, pointerEvents: 'none', zIndex: 2 }}>
      <FileText size={260} color="#fff" strokeWidth={0.8} />
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
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>Corporate Sec</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
          Statutory obligations handled
        </span>
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -1.5, color: '#fff', marginBottom: 22, maxWidth: 820 }}>
        Corporate Secretarial<br />
        <span style={{ color: '#c8a96e' }}>Services</span>
      </h1>
      <div style={{ width: 56, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />

      <p style={{ fontSize: 15.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.62)', maxWidth: 640, marginBottom: 44 }}>
        Carbone Partners provides an extensive range of corporate secretarial services to ensure all your statutory and administrative obligations are met accurately and on time.
      </p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <a href="#corp-contact" className="btn-red" style={{ fontSize: 12, letterSpacing: 1.5 }}>
          Enquire Now <ArrowRight size={15} />
        </a>
      </div>

      <div style={{ marginTop: 52, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.10)', display: 'flex', gap: 40, flexWrap: 'wrap' }}>
        {[
          { label: 'ASIC Compliance', sub: 'We handle the red tape' },
          { label: 'In-House Solutions', sub: 'CC Corporate Services Aust' },
          { label: 'Trust Deeds', sub: 'Setup & continuous updates' },
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
const CorpIntro = () => (
  <section style={{ background: '#fff', padding: '96px 0' }}>
    <div className="container">
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: 72, alignItems: 'center' }} className="corp-intro-grid">
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 16 }}>
              Why Use a Corporate Secretary?
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,42px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, color: '#080f1e', marginBottom: 20 }}>
              Focus on Business,<br />
              <span style={{ color: '#143c82' }}>We'll Handle ASIC.</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', marginBottom: 28, borderRadius: 2 }} />
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 20 }}>
              Running a business requires your full attention. Keeping on top of director resolutions, annual company statements, and complex ASIC requirements can drain your time and introduce compliance risks.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 20 }}>
              <strong style={{color:'#080f1e'}}>CC Corporate Services Aust Pty Ltd</strong>, our dedicated in-house compliance team, provides an extensive range of corporate secretarial services to remove these administrative burdens.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#464650', marginBottom: 0 }}>
              From initial registration of companies and business names to the drafting of board meeting minutes and managing share transfers, we ensure your corporate volume remains perfectly maintained and legally sound.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ background: '#f4f5f7', padding: '32px 24px', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(20,60,130,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Shield size={24} color="#143c82" />
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 800, color: '#080f1e', marginBottom: 10 }}>Compliance Assurance</h4>
              <p style={{ fontSize: 13, color: '#464650', lineHeight: 1.6 }}>Never miss an ASIC deadline or lodgement requirement.</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg,#143c82 0%,#0f2f68 100%)', padding: '32px 24px', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transform: 'translateY(20px)' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Briefcase size={24} color="#fff" />
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 10 }}>Expert Governance</h4>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Specialist advice on corporate governance structures.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
    <style>{`@media(max-width:900px){.corp-intro-grid{grid-template-columns:1fr !important;gap:48px !important;}}`}</style>
  </section>
);

/* ════════════════════════════════════
   SECTION 3 – SERVICES CHECKLIST
════════════════════════════════════ */
const corpServices = [
  'Ensuring complete ASIC compliance',
  'Advice on corporate governance issues',
  'Preparation and lodgement of all changes to company details',
  'Attending to your annual company statement',
  'Maintenance of your corporate volume',
  'Drafting and filing of Director Resolutions and Minutes',
  'Preparation of off-market share transfers',
  'Preparation of documentation for Board Meetings (incl. attendance if required)',
  'Registration of companies and business names',
  'Preparation of general purpose financial reports',
  'Company deregistration procedures',
  'Setting up and updating of family trust deeds'
];

const CorpChecklist = () => {
  const [hov, setHov] = useState(null);
  const leftCol = corpServices.slice(0, 6);
  const rightCol = corpServices.slice(6);
  
  return (
    <section style={{ background: '#f4f5f7', padding: '96px 0' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#143c82', display: 'block', marginBottom: 14 }}>
              Comprehensive Administration
            </span>
            <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -1, color: '#080f1e', marginBottom: 16 }}>
              Our Corporate <span style={{ color: '#143c82' }}>Services</span>
            </h2>
            <div style={{ width: 52, height: 4, background: '#c8a96e', margin: '0 auto', borderRadius: 2 }} />
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }} className="corp-services-grid">
          {[leftCol, rightCol].map((col, colIdx) => (
            <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {col.map((item, i) => {
                const idx = colIdx * 6 + i;
                const isHov = hov === idx;
                return (
                  <Reveal key={idx} delay={idx * 0.05}>
                    <div
                      onMouseEnter={() => setHov(idx)}
                      onMouseLeave={() => setHov(null)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 18,
                        padding: '24px', background: '#fff',
                        borderLeft: `4px solid ${isHov ? '#c8a96e' : '#143c82'}`,
                        boxShadow: isHov ? '0 12px 30px rgba(20,60,130,0.1)' : '0 2px 10px rgba(0,0,0,0.03)',
                        transform: isHov ? 'translateX(4px)' : 'none',
                        transition: 'all 0.3s ease', cursor: 'default',
                      }}
                    >
                      <div style={{ width: 32, height: 32, flexShrink: 0, borderRadius: '50%', background: isHov ? 'rgba(200,169,110,0.15)' : 'rgba(20,60,130,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}>
                        <CheckCircle2 size={16} color={isHov ? '#c8a96e' : '#143c82'} />
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.5, color: '#080f1e' }}>{item}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.corp-services-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
};

/* ════════════════════════════════════
   SECTION 4 – CTA BANNER
════════════════════════════════════ */
const CTABanner = () => (
  <section id="corp-contact" style={{ background: 'linear-gradient(135deg,#0c1a36 0%,#080f1e 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden', borderTop: '4px solid #c8a96e' }}>
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)`, backgroundSize: '60px 60px' }} />
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)' }}>Delegate the admin</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,46px)', fontWeight: 900, lineHeight: 1.1, color: '#fff', letterSpacing: -1, marginBottom: 18 }}>
              Have A Corporate<br />
              <span style={{ color: '#c8a96e' }}>Secretarial Enquiry?</span>
            </h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', maxWidth: 480 }}>
              Let our team handle your ASIC compliance, boardroom minutes, and company registrations so you can focus on running your business.
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
const CorporateSecretarialPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  return (
    <div>
      <PageHero onBack={onBack} />
      <CorpIntro />
      <CorpChecklist />
      <CTABanner />
    </div>
  );
};

export default CorporateSecretarialPage;
