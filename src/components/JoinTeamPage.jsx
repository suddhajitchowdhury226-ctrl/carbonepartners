import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, ChevronRight, Home, CheckCircle2, ArrowRight } from 'lucide-react';
import teamHeroBg from '../assets/team-hero.png';

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

const PageHero = ({ onBack }) => (
  <section style={{
    position: 'relative', minHeight: 450,
    backgroundImage: `url(${teamHeroBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex', alignItems: 'center',
    overflow: 'hidden', paddingTop: 80, paddingBottom: 60
  }}>
    {/* Dark Overlay for readability */}
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,15,30,0.92) 0%, rgba(12,26,54,0.85) 55%, rgba(15,35,71,0.25) 100%)', zIndex: 1 }} />
    
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: 'linear-gradient(180deg,#c8a96e,#b8924e)', zIndex: 2 }} />
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.5, zIndex: 2 }} />
    
    <div className="container" style={{ position: 'relative', zIndex: 3, padding: '0 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
          <Home size={12} /> Home
        </button>
        <ChevronRight size={11} color="rgba(255,255,255,0.2)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>Careers</span>
      </div>
      <h1 style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 900, color: '#fff', marginBottom: 24, letterSpacing: -2, lineHeight: 1.1 }}>
        Join Our <span style={{ color: '#c8a96e' }}>Progressive</span> Team
      </h1>
      <p style={{ fontSize: 22, color: 'rgba(255,255,255,0.6)', maxWidth: 750, lineHeight: 1.6, marginBottom: 0 }}>
        Build your future with a firm that values innovation, integrity, and personal growth.
      </p>
    </div>
  </section>
);

const PillarCard = ({ pillar, delay }) => (
  <Reveal delay={delay}>
    <div style={{ 
      background: '#fff', padding: 32, borderRadius: 20, 
      boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
      border: '1px solid rgba(0,0,0,0.03)',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
    }} className="pillar-card">
      <div style={{ 
        width: 80, height: 80, borderRadius: '50%', background: 'rgba(20,60,130,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
        border: '1px solid rgba(200,169,110,0.2)'
      }}>
        <img src={pillar.img} alt={pillar.title} style={{ width: 44, height: 44, objectFit: 'contain' }} />
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 800, color: '#080f1e', marginBottom: 16 }}>{pillar.title}</h3>
      <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, margin: 0 }}>{pillar.desc}</p>
    </div>
  </Reveal>
);

const JoinTeamPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const pillars = [
    { title: 'Accountants', img: '/Financial-image/accountants.png', desc: 'Precision-led tax advisory and compliance experts driving business growth.' },
    { title: 'Finance', img: '/Financial-image/Finance.png', desc: 'Crafting tailored lending and loan strategies for homeowners and investors.' },
    { title: 'Superannuation', img: '/Financial-image/super.png', desc: 'Specialised SMSF consultants protecting wealth for a secure retirement.' },
    { title: 'Bookkeeping', img: '/Financial-image/book.png', desc: 'Optimising day-to-day operations with seamless payroll and data management.' },
    { title: 'Wealth', img: '/Financial-image/wealth.png', desc: 'Strategic planners dedicated to long-term wealth preservation and growth.' },
    { title: 'Insurance', img: '/Financial-image/insurance.png', desc: 'Protecting assets, revenue, and people with robust risk management.' },
  ];

  return (
    <div style={{ background: '#fdfdfd' }}>
      <PageHero onBack={onBack} />
      
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 80px' }}>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: '#080f1e', marginBottom: 20 }}>6 Pillars of Financial Management</h2>
              <div style={{ width: 60, height: 4, background: '#c8a96e', margin: '0 auto 24px' }} />
              <p style={{ fontSize: 18, color: '#666', lineHeight: 1.7 }}>
                Carbone Partners is built on six foundational pillars. We are looking for talented professionals who excel in these specialisations and are eager to make an impact.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {pillars.map((pillar, i) => (
              <PillarCard key={i} pillar={pillar} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: '#080f1e', color: '#fff', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,110,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <Reveal>
              <div>
                <h2 style={{ fontSize: 42, fontWeight: 900, marginBottom: 24, lineHeight: 1.1 }}>Ready to take the <br/><span style={{ color: '#c8a96e' }}>Next Step?</span></h2>
                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 40 }}>
                  If you think you have what it takes to be the best version of yourself, then please contact our Managing Principal, Michael Carbone to have a chat.
                </p>
                
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: 40 }}>
                  <h4 style={{ fontSize: 20, fontWeight: 800, marginBottom: 24 }}>Direct Contact</h4>
                  <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(200,169,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={18} color="#c8a96e" />
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, textTransform: 'uppercase', letterSpacing: 1 }}>Call Us</p>
                      <p style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>(08) 9409 3644</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(200,169,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={18} color="#c8a96e" />
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, textTransform: 'uppercase', letterSpacing: 1 }}>Email</p>
                      <p style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>m.carbone@carbonepartners.com.au</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{ background: '#fff', padding: 40, borderRadius: 24, color: '#080f1e' }}>
                <h3 style={{ fontSize: 28, fontWeight: 900, marginBottom: 32 }}>Express Interest</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <input type="text" placeholder="Full Name" style={{ padding: '16px 20px', borderRadius: 10, border: '1px solid #eee', background: '#f8f9fa', fontSize: 15 }} />
                  <input type="email" placeholder="Email Address" style={{ padding: '16px 20px', borderRadius: 10, border: '1px solid #eee', background: '#f8f9fa', fontSize: 15 }} />
                  <select style={{ padding: '16px 20px', borderRadius: 10, border: '1px solid #eee', background: '#f8f9fa', fontSize: 15 }}>
                    <option>Select Area of Interest</option>
                    <option>Accounting & Advisory</option>
                    <option>Financial Planning / Wealth</option>
                    <option>Mortgage Broking / Finance</option>
                    <option>Bookkeeping & Admin</option>
                  </select>
                  <textarea rows="4" placeholder="Briefly tell us about yourself..." style={{ padding: '16px 20px', borderRadius: 10, border: '1px solid #eee', background: '#f8f9fa', fontSize: 15, resize: 'none' }}></textarea>
                  <button type="button" style={{ 
                    background: '#143c82', color: '#fff', border: 'none', padding: '18px', borderRadius: 10, 
                    fontSize: 16, fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10
                  }} onMouseEnter={e => e.currentTarget.style.background = '#0f2f68'} onMouseLeave={e => e.currentTarget.style.background = '#143c82'}>
                    Submit Application <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        .pillar-card:hover {
          transform: translateY(-10px);
          border-color: rgba(200,169,110,0.4);
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }
        @media (max-width: 900px) {
          .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default JoinTeamPage;
