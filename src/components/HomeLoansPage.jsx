import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, ChevronRight, Home, CheckCircle2 } from 'lucide-react';
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

const PageHero = ({ onBack, title, subtitle }) => (
  <section style={{
    position: 'relative', minHeight: 400,
    backgroundImage: `url(${servicesHeroBg})`,
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
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Finance</span>
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
        {title.split(' ').map((word, i) => i === 0 ? <React.Fragment key={i}>{word} <br/></React.Fragment> : <span key={i} style={{ color: '#c8a96e' }}>{word} </span>)}
      </h1>
      <div style={{ width: 56, height: 4, background: '#c8a96e', borderRadius: 2 }} />
    </div>
  </section>
);

const ContentSection = ({ content }) => (
  <section style={{ background: '#fff', padding: '96px 0' }}>
    <div className="container" style={{ maxWidth: 840, padding: '0 32px' }}>
      <Reveal>
        <div style={{ fontSize: 16, lineHeight: 1.9, color: '#464650' }}>
          {content}
        </div>
      </Reveal>
    </div>
  </section>
);

const CTABanner = () => (
  <section id="finance-contact" style={{ background: 'linear-gradient(135deg,#0c1a36 0%,#080f1e 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden', borderTop: '4px solid #c8a96e' }}>
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
              Let’s discuss how we can help you build and protect your retirement wealth securely.
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

const HomeLoansPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  return (
    <div>
      <PageHero onBack={onBack} title="Home Loans" subtitle="Find the Right Loan" />
      <ContentSection content={
        <>
          <p style={{ marginBottom: 20, fontSize: 17, color: '#080f1e', fontWeight: 500 }}>
            Once we have a good understanding of your current and future financial situation, we can begin explaining the wide range of loan options available from a host of different lenders.
          </p>
          <p style={{ marginBottom: 20 }}>
            We should be able to outline the various loan products, as well as explaining the loan process from application to close including the documents required through the process. In addition, we will go through all associated costs, disbursements, and fees of the loan application and give you a written schedule.
          </p>
          <p style={{ marginBottom: 40 }}>
            You can expect us to negotiate with lenders to find the best deal, while communicating with you throughout the loan process in a timely manner. Through the application process, we will follow up with the lender for you from application through to approval. Even once your loan is settled, we are your resource for questions, concerns and ongoing review.
          </p>
          
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#143c82', marginBottom: 12 }}>What can we assist you with?</h2>
          <div style={{ width: 40, height: 3, background: '#c8a96e', marginBottom: 20, borderRadius: 2 }} />
          <p style={{ marginBottom: 24, fontWeight: 500 }}>Regardless of your situation, we can help you achieve your desired outcome. Our areas of speciality include:</p>
          
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {[
              'Refinancing',
              'Investment Loans',
              'First Home Buyer Loans',
              'Owner Occupied Loans',
              'Lo Doc / Non-Conforming Loans',
              'Bridging loans',
              'Construction loans',
              'Debt Consolidation',
              'And much more!'
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#f8f9fa', padding: '16px 20px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.04)' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(20,60,130,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle2 size={14} color="#143c82" />
                </div>
                <span style={{ fontSize: 14.5, color: '#464650' }}>{item}</span>
              </li>
            ))}
          </ul>
        </>
      } />
      <CTABanner />
    </div>
  );
};

export default HomeLoansPage;
