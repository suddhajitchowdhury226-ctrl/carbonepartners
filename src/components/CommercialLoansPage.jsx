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

const CommercialLoansPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  return (
    <div>
      <PageHero onBack={onBack} title="Commercial Loans" subtitle="Growing Your Enterprise" />
      <ContentSection content={
        <>
          <p style={{ marginBottom: 32, fontSize: 17, color: '#080f1e', fontWeight: 500 }}>
            We are experts in the commercial sector and deal with traditional banks, specialty lenders and private lenders on our platform to assist you with:
          </p>
          
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 44 }}>
            {[
              { title: 'Commercial Property Investment Loans', desc: 'Purchasing a commercial property.' },
              { title: 'Property Development Loans', desc: 'Subdivision and Development.' },
              { title: 'Self-managed Super Fund Loans', desc: 'Using an LRBA to buy or refinance a commercial property.' },
              { title: 'Business Loans', desc: 'Managing your cashflow is vital to keeping your business healthy and growing, by utilising a business loan for working capital, to buy inventory, equipment, or business premises.' }
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(20,60,130,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <CheckCircle2 size={14} color="#143c82" />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#080f1e', marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#464650', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          
          <div style={{ background: '#f8f9fa', padding: '40px', borderRadius: 12, borderLeft: '4px solid #c8a96e' }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#080f1e', marginBottom: 20 }}>We can look after your Commercial Loan needs nationwide. Why use us? It’s simple…</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'We have a dedicated team to help our customers find the right solution.',
                'We have access to one of the largest commercial Lender panels which provides us with competitive rates and products for their customers.',
                'We will act as the customer advocate when speaking to Lenders to help problem solve and tailor a solution that suits your needs.',
                'We have access to non-bank funds that may suit difficult or complex scenarios.',
                'Regardless of your situation, we can help you achieve your desired outcome.'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(200,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>
                    <CheckCircle2 size={12} color="#c8a96e" />
                  </div>
                  <span style={{ fontSize: 15, color: '#464650' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      } />
      <CTABanner />
    </div>
  );
};

export default CommercialLoansPage;
