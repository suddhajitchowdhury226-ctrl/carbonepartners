import React, { useEffect, useRef } from 'react';
import { Phone, Mail, ChevronRight, Home, Calendar, Award, Briefcase } from 'lucide-react';
import historyMeeting from '../assets/history-meeting.png';
import historyHeroBg from '../assets/history-hero.png';

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

const PageHero = ({ onBack, title, subtitle }) => (
  <section style={{
    position: 'relative', minHeight: 400,
    backgroundImage: `url(${historyHeroBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex', alignItems: 'center',
    overflow: 'hidden', paddingTop: 90, paddingBottom: 60
  }}>
    {/* Dark Overlay for readability */}
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,15,30,0.92) 0%, rgba(12,26,54,0.85) 55%, rgba(15,35,71,0.25) 100%)', zIndex: 1 }} />
    
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: 'linear-gradient(180deg,#c8a96e,#b8924e)', zIndex: 2 }} />
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)`, backgroundSize: '60px 60px', zIndex: 2 }} />
    <div style={{ position: 'absolute', right: -60, top: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(20,60,130,0.22) 0%,transparent 70%)', pointerEvents: 'none', zIndex: 2 }} />

    <div className="container" style={{ position: 'relative', zIndex: 3, padding: '60px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s', fontFamily: 'Montserrat,sans-serif' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
          <Home size={12} /> Home
        </button>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Our Story</span>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>{title}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
          {subtitle}
        </span>
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -1.5, color: '#fff', marginBottom: 22, maxWidth: 720 }}>
        {title}
      </h1>
      <div style={{ width: 56, height: 4, background: '#c8a96e', borderRadius: 2 }} />
    </div>
  </section>
);

const CTABanner = () => (
  <section id="story-history-contact" style={{ background: 'linear-gradient(135deg,#0c1a36 0%,#080f1e 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden', borderTop: '4px solid #c8a96e' }}>
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)`, backgroundSize: '60px 60px' }} />
    <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 32px' }}>
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 36, height: 2, background: '#c8a96e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)' }}>Secure Your Future</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 900, lineHeight: 1.1, color: '#fff', letterSpacing: -1, marginBottom: 18 }}>
              Arrange Your <span style={{ color: '#c8a96e' }}>Free Meeting</span> Today
            </h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', maxWidth: 480 }}>
              Let’s discuss how we can become partners in your ongoing success story.
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

const TimelineItem = ({ year, title, desc, icon: Icon }) => (
  <div style={{ display: 'flex', gap: 24, marginBottom: 32, position: 'relative' }}>
    <div style={{ position: 'absolute', left: 23, top: 48, bottom: -32, width: 2, background: 'rgba(20,60,130,0.15)' }} />
    <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#fff', border: '3px solid #143c82', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 2 }}>
      <Icon size={20} color="#143c82" />
    </div>
    <div style={{ paddingBottom: 16 }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#c8a96e', letterSpacing: 1.5, marginBottom: 6 }}>{year}</div>
      <h3 style={{ fontSize: 18, fontWeight: 800, color: '#080f1e', marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 15, color: '#464650', lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </div>
  </div>
);

const OurHistoryPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  return (
    <div>
      <PageHero onBack={onBack} title="Our History" subtitle="The Carbone Partners Journey" />
      
      <section style={{ background: '#f8f9fa', padding: '96px 0' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 64, alignItems: 'start' }}>
              
              {/* Profile Block */}
              <div style={{ background: '#fff', padding: 40, borderRadius: 16, boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', background: '#080f1e', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #c8a96e' }}>
                  <span style={{ color: '#c8a96e', fontSize: 32, fontWeight: 800 }}>MC</span>
                </div>
                <h2 style={{ textAlign: 'center', fontSize: 24, fontWeight: 800, color: '#080f1e', marginBottom: 8 }}>Michael Carbone</h2>
                <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#143c82', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 24 }}>Director / Principal</div>
                
                <p style={{ fontSize: 14, color: '#464650', lineHeight: 1.8, marginBottom: 20 }}>
                  He is a qualified Accountant and a Fellow of the Institute of Public Accountants (FIPA). Michael also holds a Diploma in Financial Planning, Diploma in Finance & Mortgage Broking, is a Registered Tax Agent and SMSF AFSL authorised representative.
                </p>
                <p style={{ fontSize: 14, color: '#464650', lineHeight: 1.8, margin: 0 }}>
                  Michael has more than 20 years’ experience in Accounting & Compliance, Bookkeeping & Management, SMSF, Business consulting, and tax advice.
                </p>

                <div style={{ marginTop: 32, position: 'relative' }}>
                  <img 
                    src={historyMeeting} 
                    alt="Michael Carbone in a business meeting" 
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      borderRadius: 8,
                      border: '6px solid #fff',
                      boxShadow: '0 15px 45px rgba(20, 60, 130, 0.18)',
                      display: 'block'
                    }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, borderRadius: 8, border: '1px solid rgba(20,60,130,0.08)', pointerEvents: 'none' }} />
                </div>
              </div>

              {/* Timeline Block */}
              <div>
                <h2 style={{ fontSize: 32, fontWeight: 900, color: '#080f1e', marginBottom: 40 }}>Our Journey</h2>
                
                <TimelineItem 
                  year="1997" 
                  title="Humble Beginnings" 
                  desc="Michael started his accounting practice as Michael Carbone & Associates operating from his home office in Balcatta. The firm began with just Michael, aided by occasional secretarial support, serving individuals and small businesses."
                  icon={Home}
                />
                <TimelineItem 
                  year="2002" 
                  title="Growth & Relocation" 
                  desc="Integrity and personalized service drove the practice’s growth. The practice moved into office premises located in Wangara, and the business name changed to MSC Financial Management."
                  icon={Briefcase}
                />
                <TimelineItem 
                  year="2015" 
                  title="Established Reputation" 
                  desc="Most new clients were directly referred by existing ones. By 2015, the firm had grown to 8 employees managing a large and varied client base."
                  icon={Award}
                />
                <TimelineItem 
                  year="2017 & Beyond" 
                  title="Carbone Partners" 
                  desc="From October 2017, the practice changed its name to Carbone Partners, reflecting growth and a new focus while proudly continuing the principles of integrity and client service. Now based in the heart of Leederville, WA."
                  icon={Calendar}
                />
                
                <div style={{ display: 'flex', gap: 24, position: 'relative' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#c8a96e', border: '3px solid #fff', boxShadow: '0 0 0 3px rgba(200,169,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 2 }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#fff' }} />
                  </div>
                  <div style={{ paddingTop: 12 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: '#080f1e', margin: 0 }}>The Future</h3>
                  </div>
                </div>

              </div>

            </div>
          </Reveal>
        </div>
        
        <style>{`
          @media (max-width: 900px) {
            .container > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      <CTABanner />
    </div>
  );
};

export default OurHistoryPage;
