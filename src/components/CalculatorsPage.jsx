import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, ChevronRight, Home, Calculator, ExternalLink, ArrowRight, ShieldCheck, Award, Briefcase, Bookmark, Star } from 'lucide-react';
import servicesHeroBg from '../assets/services-hero.png';
import calculatorDetail from '../assets/calculator-detail.jpg';

/* ─── Scroll Reveal ─── */
function Reveal({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: 0, transform: 'translateY(30px)',
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

const PageHero = ({ onBack, title, subtitle }) => (
  <section style={{
    position: 'relative', minHeight: 350,
    backgroundImage: `url(${servicesHeroBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex', alignItems: 'center',
    overflow: 'hidden', paddingTop: 80, paddingBottom: 40
  }}>
    {/* Dark Overlay for readability */}
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,15,30,0.92) 0%, rgba(12,26,54,0.85) 55%, rgba(15,35,71,0.25) 100%)', zIndex: 1 }} />
    
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: 'linear-gradient(180deg,#c8a96e,#b8924e)', zIndex: 2 }} />
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)`, backgroundSize: '50px 50px', zIndex: 2 }} />
    
    <div className="container" style={{ position: 'relative', zIndex: 3, padding: '0 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
          <Home size={12} /> Home
        </button>
        <ChevronRight size={11} color="rgba(255,255,255,0.2)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>{title}</span>
      </div>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: -1 }}>
        Financial <span style={{ color: '#c8a96e' }}>Calculators</span>
      </h1>
      <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 600, lineHeight: 1.6 }}>
        {subtitle}
      </p>
    </div>
  </section>
);

const CalculatorsPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: '#fdfdfd', minHeight: '100vh' }}>
      <PageHero 
        onBack={onBack} 
        title="Calculators" 
        subtitle="Powerful tools to help you plan your loans, savings, and investments effectively." 
      />
      
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
            <Reveal>
              <div style={{ position: 'relative', maxWidth: 450, margin: '0 auto' }}>
                <div style={{ 
                  borderRadius: 24, overflow: 'hidden', 
                  boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                  aspectRatio: '4/3', background: '#eee'
                }}>
                  <img 
                    src={calculatorDetail} 
                    alt="Accountant using calculator" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                {/* Floating Stat/Accent */}
                <div style={{ 
                  position: 'absolute', bottom: -20, right: -20, 
                  background: '#c8a96e', color: '#080f1e', padding: '24px 32px', 
                  borderRadius: 20, boxShadow: '0 15px 35px rgba(200,169,110,0.3)',
                  zIndex: 2
                }}>
                  <div style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4 }}>Accuracy First</div>
                  <div style={{ fontSize: 24, fontWeight: 900 }}>Precision Tools</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{ padding: '40px', background: '#fff', borderRadius: 28, boxShadow: '0 20px 60px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(20,60,130,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
                  <Calculator size={32} color="#143c82" />
                </div>
                <h2 style={{ fontSize: 36, fontWeight: 900, color: '#080f1e', marginBottom: 20, lineHeight: 1.1 }}>Access Your <br /><span style={{ color: '#c8a96e' }}>Financial Portal</span></h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#666', marginBottom: 32 }}>
                  Accuracy and transparency are key to financial success. Model different scenarios and understand the long-term impact of your financial decisions before you commit.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                  {[
                    { label: 'Loan Repayments', icon: <Briefcase size={16} /> },
                    { label: 'Investment Growth', icon: <Award size={16} /> },
                    { label: 'Budget Planning', icon: <Star size={16} /> },
                    { label: 'Tax Estimations', icon: <ShieldCheck size={16} /> }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#444', fontWeight: 600, fontSize: 15 }}>
                      <div style={{ color: '#c8a96e' }}>{item.icon}</div>
                      {item.label}
                    </div>
                  ))}
                </div>

                <a 
                  href="https://www.visionabacus.net/w/CalcSome" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                    background: '#143c82', color: '#fff', padding: '20px 32px', borderRadius: 12,
                    fontSize: 16, fontWeight: 800, textDecoration: 'none', transition: 'all 0.3s',
                    boxShadow: '0 10px 25px rgba(20,60,130,0.2)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#0f2f68'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#143c82'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Launch Calculators <ExternalLink size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partner Logos Strip */}
      <section style={{ padding: '60px 0', borderTop: '1px solid rgba(0,0,0,0.05)', background: '#fff' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#c8a96e' }}>Professional Accreditations & Partners</span>
            </div>
            <div style={{ 
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center', 
              alignItems: 'center', gap: '20px 48px', opacity: 0.8
            }}>
              {[
                { name: 'NTAA', sub: 'National Tax' },
                { name: 'IPA', sub: 'Accounting Inst.' },
                { name: 'Xero', sub: 'Platinum Partner' },
                { name: 'MYOB', sub: 'Professional' },
                { name: 'TPB', sub: 'Reg. Tax Agent' },
                { name: 'SMSF', sub: 'Advisers Network' }
              ].map((logo, i) => (
                <div key={i} style={{ textAlign: 'center', minWidth: 120 }}>
                  <div style={{ 
                    fontSize: 18, fontWeight: 900, color: '#080f1e', 
                    letterSpacing: -0.5, marginBottom: 2, fontFamily: 'Montserrat, sans-serif'
                  }}>
                    {logo.name}
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#c8a96e' }}>
                    {logo.sub}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div style={{ background: '#080f1e', padding: '80px 0', textAlign: 'center', borderTop: '4px solid #c8a96e' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          <Reveal>
            <h2 style={{ color: '#fff', fontSize: 32, fontWeight: 900, marginBottom: 12, lineHeight: 1.1 }}>Need professional <span style={{ color: '#c8a96e' }}>advice?</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 17, maxWidth: 600, margin: '0 auto 40px' }}>Calculators are a great start, but talking to an expert ensures you're on the right path for your specific situation.</p>
            <a href="#contact" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: 12, 
              background: '#c8a96e', color: '#080f1e', padding: '16px 40px', 
              borderRadius: 8, fontWeight: 800, textDecoration: 'none', transition: 'all 0.3s' 
            }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Book a Consultation <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default CalculatorsPage;
