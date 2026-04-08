import React, { useEffect, useRef } from 'react';
import { Phone, Mail, ChevronRight, Home, Target, Eye, Compass } from 'lucide-react';
import missionGears from '../assets/mission-gears.png';
import missionHeroBg from '../assets/mission-hero.png';

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
    backgroundImage: `url(${missionHeroBg})`,
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
        {title.split(', ').map((word, i) => i === 0 ? <React.Fragment key={i}>{word}, <br /></React.Fragment> : <span key={i} style={{ color: '#c8a96e' }}>{word} </span>)}
      </h1>
      <div style={{ width: 56, height: 4, background: '#c8a96e', borderRadius: 2 }} />
    </div>
  </section>
);

const CTABanner = () => (
  <section id="mission-contact" style={{ background: 'linear-gradient(135deg,#0c1a36 0%,#080f1e 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden', borderTop: '4px solid #c8a96e' }}>
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
              Let’s discuss how our approach can help you manage your success.
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

const StatementBlock = ({ title, content, extraContent, icon: Icon, delay }) => (
  <Reveal delay={delay}>
    <div className="mvp-card mvp-block" style={{
      background: '#fff', borderRadius: 16, padding: '40px',
      boxShadow: '0 12px 30px rgba(0,0,0,0.04)',
      position: 'relative', overflow: 'hidden',
      border: '1px solid rgba(0,0,0,0.03)',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 4, background: 'linear-gradient(180deg, #143c82, #c8a96e)' }} />
      <div className="mvp-block-inner" style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(20,60,130,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon size={28} color="#143c82" />
        </div>
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: '#080f1e', marginBottom: 16, letterSpacing: -0.5 }}>Our {title}</h2>
          <p style={{ fontSize: 16, color: '#464650', lineHeight: 1.8, margin: 0 }}>
            {content}
          </p>
          {extraContent && (
            <p style={{ fontSize: 16, color: '#464650', lineHeight: 1.8, marginTop: 16, marginBottom: 0 }}>
              {extraContent}
            </p>
          )}
        </div>
      </div>
    </div>
  </Reveal>
);

const MissionVisionPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  return (
    <div>
      <PageHero onBack={onBack} title="Mission, Vision & Philosophy" subtitle="Managing Your Success" />

      <section style={{ background: '#f8f9fa', padding: '100px 0' }}>
        <div className="container" style={{ padding: '0 40px' }}>

          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <Reveal>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: '#080f1e', letterSpacing: -1, marginBottom: 16 }}>
                “Managing Your Success”
              </h2>
              <div style={{ width: 60, height: 4, background: '#c8a96e', margin: '0 auto', borderRadius: 2 }} />
            </Reveal>
          </div>

          <div className="mvp-grid-wrapper" style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 64, alignItems: 'start' }}>
            <div className="mvp-main-col">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <StatementBlock
                  title="Mission"
                  icon={Target}
                  delay={0.1}
                  content="To be a leading contemporary accounting firm with a holistic approach delivering end-to-end, innovative solutions that provide superior value to our clients."
                />
                <StatementBlock
                  title="Vision"
                  icon={Eye}
                  delay={0.2}
                  content="To help provide the client with a forward thinking and planning approach via our personalized and professional service, we like to think of ourselves as your business partner."
                  extraContent="We get involved in your business and work with you on a regular and consistent basis to tackle and optimize the outcomes and challenges that business and personal situations may face."
                />
                <StatementBlock
                  title="Philosophy"
                  icon={Compass}
                  delay={0.3}
                  content={<span>With our well-planned guidelines and strategy, is to <strong><em>Manage Your Success!</em></strong>, by helping our clients to achieve financial freedom with balanced growth and optimised performances.</span>}
                  extraContent="Our diversity ensures expertise for all requirements and if we can manage your business, then your success is our success."
                />
              </div>
            </div>

            <div className="mvp-side-col">
              <Reveal delay={0.5}>
                <div style={{ position: 'sticky', top: 120 }}>
                  <div style={{ position: 'relative', padding: 12, background: '#fff', borderRadius: 24, boxShadow: '0 20px 50px rgba(20,60,130,0.06)', border: '1px solid rgba(0,0,0,0.03)' }}>
                    <img
                      src={missionGears}
                      alt="Mission Vision Philosophy gears illustration"
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }}
                    />
                    <div style={{ position: 'absolute', inset: 8, border: '1px solid rgba(200,169,110,0.1)', borderRadius: 18, pointerEvents: 'none' }} />
                  </div>

                  <div style={{ marginTop: 24, padding: '0 16px' }}>
                    <div style={{ width: 40, height: 2, background: '#c8a96e', marginBottom: 12 }} />
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#143c82', textTransform: 'uppercase', letterSpacing: 1.5, margin: 0 }}>
                      Integrated Strategy
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <style>{`
          .mvp-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
          }
          @media (max-width: 768px) {
            .mvp-block-inner {
              flex-direction: column;
              gap: 20px !important;
            }
          }
          @media (max-width: 1100px) {
            .mvp-grid-wrapper { grid-template-columns: 1fr !important; gap: 48px !important; }
            .mvp-side-col { order: -1; max-width: 320px; margin: 0 auto; }
            .mvp-side-col .Reveal { display: block; }
            .mvp-side-col > div { position: static !important; }
          }
        `}</style>
      </section>

      <CTABanner />
    </div>
  );
};

export default MissionVisionPage;
