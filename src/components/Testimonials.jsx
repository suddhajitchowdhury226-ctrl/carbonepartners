import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const INTERVAL = 4000; // ms per slide

const testimonials = [
  {
    quote: "Carbone Partners transformed our business finances. Their holistic approach to accounting, tax, and wealth planning has given us clarity and confidence we never had before.",
    name: "Michael R.",
    company: "Building & Construction, Perth",
  },
  {
    quote: "The SMSF guidance from the team was exceptional. They structured everything professionally and made the entire process seamless. I highly recommend their superannuation services.",
    name: "Sarah T.",
    company: "Retail Business Owner, WA",
  },
  {
    quote: "We've been with Carbone Partners for over 12 years. Their expertise across accounting, finance, and insurance gives us peace of mind as we continue to grow our business.",
    name: "David K.",
    company: "Manufacturing & Distribution, Perth",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);    // 0–100 for progress bar
  const [paused,   setPaused]   = useState(false);
  const intervalRef = useRef(null);
  const progRef     = useRef(null);
  const startRef    = useRef(null);

  const goTo = (idx) => {
    setActive((idx + testimonials.length) % testimonials.length);
    setProgress(0);
    startRef.current = performance.now();
  };

  /* ── Auto-advance + progress bar ── */
  useEffect(() => {
    startRef.current = performance.now();

    const tick = (now) => {
      if (!paused) {
        const elapsed = (now - startRef.current) % INTERVAL;
        setProgress((elapsed / INTERVAL) * 100);
      }
      progRef.current = requestAnimationFrame(tick);
    };
    progRef.current = requestAnimationFrame(tick);

    intervalRef.current = setInterval(() => {
      if (!paused) {
        setActive(a => (a + 1) % testimonials.length);
        startRef.current = performance.now();
        setProgress(0);
      }
    }, INTERVAL);

    return () => {
      clearInterval(intervalRef.current);
      cancelAnimationFrame(progRef.current);
    };
  }, [paused]);

  return (
    <section id="testimonials" style={{
      background: '#080f1e',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background decorative polygon */}
      <div style={{
        position: 'absolute', left: -120, bottom: -80,
        opacity: 0.04, pointerEvents: 'none',
      }}>
        <svg viewBox="0 0 400 400" width="400" fill="none">
          <polygon points="200,20 380,200 200,380 20,200" fill="#143c82"/>
        </svg>
      </div>
      <div style={{
        position: 'absolute', right: -80, top: -60,
        opacity: 0.04, pointerEvents: 'none',
      }}>
        <svg viewBox="0 0 300 300" width="300" fill="none">
          <polygon points="150,10 290,150 150,290 10,150" fill="#fff"/>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label-white">Testimonials</span>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 900, color: '#fff',
            letterSpacing: -1, lineHeight: 1.1,
          }}>What Our Clients Say</h2>
          <div style={{ width: 48, height: 3, background: '#c8a96e', margin: '20px auto 0' }} />
        </div>

        {/* Quote Cards */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { setPaused(false); startRef.current = performance.now(); }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}>
          {testimonials.map((t, i) => (
            <div key={i}
              onClick={() => goTo(i)}
              style={{
                background: active === i ? '#143c82' : '#0c1a36',
                padding: '40px 36px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderTop: `3px solid ${active === i ? '#c8a96e' : 'rgba(200,169,110,0.3)'}`,
                transform: active === i ? 'translateY(-6px)' : 'none',
                boxShadow: active === i ? '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,169,110,0.2)' : 'none',
              }}>
              <Quote size={32} style={{
                color: active === i ? '#c8a96e' : 'rgba(200,169,110,0.45)',
                marginBottom: 24,
                transition: 'color 0.3s ease',
              }} />
              <p style={{
                fontSize: 14,
                lineHeight: 1.85,
                color: active === i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.62)',
                marginBottom: 32,
                fontStyle: 'italic',
                fontWeight: 400,
                transition: 'color 0.3s ease',
              }}>"{t.quote}"</p>
              <div style={{
                width: 32, height: 2,
                background: active === i ? '#c8a96e' : 'rgba(200,169,110,0.3)',
                marginBottom: 16,
                transition: 'background 0.3s ease',
              }} />
              <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{t.name}</div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase', color: active === i ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)' }}>{t.company}</div>
            </div>
          ))}
        </div>

        {/* Controls row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 40 }}>

          {/* Prev */}
          <button onClick={() => goTo(active - 1)} style={{
            width: 38, height: 38, borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.25s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,169,110,0.25)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
          ><ChevronLeft size={16} /></button>

          {/* Dots + progress bar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} style={{
                  width: active === i ? 28 : 10, height: 10, borderRadius: 5,
                  background: active === i ? '#c8a96e' : 'rgba(255,255,255,0.15)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                }} />
              ))}
            </div>
            {/* Progress bar */}
            <div style={{ width: 120, height: 2, background: 'rgba(255,255,255,0.10)', borderRadius: 2 }}>
              <div style={{
                height: '100%', borderRadius: 2,
                background: '#c8a96e',
                width: `${progress}%`,
                transition: 'width 0.1s linear',
                boxShadow: '0 0 6px rgba(200,169,110,0.6)',
              }} />
            </div>
          </div>

          {/* Next */}
          <button onClick={() => goTo(active + 1)} style={{
            width: 38, height: 38, borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.25s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,169,110,0.25)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
          ><ChevronRight size={16} /></button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #testimonials .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
