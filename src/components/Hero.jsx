import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    image: '/hero1.jpg',
    label: 'Financial Excellence',
    heading: <>Complete Financial<br /><span style={{ color: '#c8a96e' }}>Management</span><br />Solution Hub</>,
    sub: 'Carbone Partners delivers a holistic approach to accounting, wealth, superannuation, finance, insurance, and bookkeeping — all under one expert team in Perth.',
  },
  {
    image: '/hero2.jpg',
    label: 'Perth, Western Australia',
    heading: <>Your Strategic<br /><span style={{ color: '#143c82' }}>Financial Partner</span><br />in Perth</>,
    sub: 'Serving Perth businesses and families across building & construction, retail, manufacturing, and professional services for over 15 years.',
  },
  {
    image: '/hero3.jpg',
    label: 'Expert Advice',
    heading: <>Managing Your<br /><span style={{ color: '#143c82' }}>Success</span><br />Every Step of the Way</>,
    sub: 'Our multi-disciplined team of accredited advisors offers personalised, one-on-one guidance to help you achieve lasting wealth and financial security.',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  /* Auto-advance every 5 seconds */
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      paddingTop: 75,
      display: 'flex',
      alignItems: 'center',
    }}>

      {/* ── Background image layer ── */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${s.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: i === current ? (animating ? 0 : 1) : 0,
          transition: 'opacity 0.8s ease',
          zIndex: 0,
        }} />
      ))}

      {/* ── Dark overlay gradient ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(90deg, rgba(8,15,30,0.92) 0%, rgba(8,15,30,0.75) 55%, rgba(8,15,30,0.35) 100%)',
      }} />

      {/* ── Gold left accent bar ── */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: 5,
        background: 'linear-gradient(180deg, #c8a96e 0%, #b8924e 100%)',
        zIndex: 3,
      }} />

      {/* ── Grid texture ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* ── Content ── */}
      <div className="container" style={{
        position: 'relative', zIndex: 4,
        width: '100%',
        padding: '80px 32px',
        maxWidth: 740,
      }}>

        {/* Location label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28,
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(10px)' : 'translateY(0)',
          transition: 'all 0.5s ease 0.1s',
        }}>
          <div style={{ width: 32, height: 2, background: '#c8a96e' }} />
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 3,
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)',
          }}>{slide.label}</span>
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: 'clamp(38px, 5.5vw, 68px)',
          fontWeight: 900,
          lineHeight: 1.05,
          color: '#fff',
          marginBottom: 24,
          letterSpacing: -1,
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(20px)' : 'translateY(0)',
          transition: 'all 0.6s ease 0.15s',
        }}>
          {slide.heading}
        </h1>

        {/* Sub text */}
        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: 'rgba(255,255,255,0.65)',
          maxWidth: 520,
          marginBottom: 40,
          fontWeight: 400,
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(20px)' : 'translateY(0)',
          transition: 'all 0.6s ease 0.2s',
        }}>
          {slide.sub}
        </p>

        {/* CTA buttons */}
        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap',
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(20px)' : 'translateY(0)',
          transition: 'all 0.6s ease 0.25s',
        }}>
          <a href="#contact" className="btn-red" style={{ fontSize: 12, letterSpacing: 1.5 }}>
            Book Free Consult
            <ArrowRight size={15} />
          </a>
          <a href="#services" className="btn-outline-white" style={{ fontSize: 12, letterSpacing: 1.5 }}>
            Our Services
            <ChevronRight size={15} />
          </a>
        </div>

        {/* Credentials strip */}
        <div style={{
          marginTop: 52,
          paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex',
          gap: 28,
          flexWrap: 'wrap',
          opacity: animating ? 0 : 1,
          transition: 'opacity 0.6s ease 0.3s',
        }}>
          {['IPA Practice', 'SMSF Licensed', 'XERO Certified', 'MYOB Partner'].map(tag => (
            <div key={tag} style={{
              fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
            }}>{tag}</div>
          ))}
        </div>
      </div>

      {/* ── Slide counter + nav arrows ── */}
      <div style={{
        position: 'absolute', right: 48, bottom: 48, zIndex: 5,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 20,
      }}>
        {/* Slide number */}
        <div style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: 13, fontWeight: 700, letterSpacing: 2,
        }}>
          <span style={{ fontSize: 28, fontWeight: 900, color: '#fff' }}>
            0{current + 1}
          </span>
          {' '}/{' '}0{slides.length}
        </div>

        {/* Arrows */}
        <div style={{ display: 'flex', gap: 10 }}>
          {[
            { icon: <ChevronLeft size={18} />, onClick: prev, label: 'Previous' },
            { icon: <ChevronRight size={18} />, onClick: next, label: 'Next' },
          ].map(({ icon, onClick, label }) => (
            <button key={label} onClick={onClick} aria-label={label} style={{
              width: 44, height: 44,
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#143c82'; e.currentTarget.style.borderColor = '#143c82'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            >{icon}</button>
          ))}
        </div>
      </div>

      {/* ── Dot indicators – bottom centre ── */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: 10, zIndex: 5,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} style={{
            width: i === current ? 32 : 10, height: 10,
            background: i === current ? '#143c82' : 'rgba(255,255,255,0.3)',
            border: 'none', cursor: 'pointer',
            transition: 'all 0.4s ease',
          }} />
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
        background: 'rgba(255,255,255,0.1)', zIndex: 5,
      }}>
        <div style={{
          height: '100%', background: '#143c82',
          width: `${((current + 1) / slides.length) * 100}%`,
          transition: 'width 0.6s ease',
        }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          #home .container { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
