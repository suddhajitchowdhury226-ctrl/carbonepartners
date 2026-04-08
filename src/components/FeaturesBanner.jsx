import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { num: 25,  suffix: '+', label: 'Years of\nExperience',       duration: 1800 },
  { num: 500, suffix: '+', label: 'Satisfied\nClients',         duration: 2200 },
  { num: 6,   suffix: '',  label: 'Service\nPillars',           duration: 900  },
  { num: 25,  suffix: '+', label: 'Avg. Client\nRelationship',  duration: 1600 },
];

/* ── Easing: ease-out quad ── */
function easeOut(t) { return t * (2 - t); }

function CountUp({ target, suffix, duration, start }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      setCount(Math.round(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, target, duration]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

const FeaturesBanner = () => {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  /* Trigger count-up once when section enters viewport */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#080f1e',
        borderTop: '4px solid #c8a96e',
        padding: '70px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background diamond watermark */}
      <div style={{
        position: 'absolute', right: -80, top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.04, pointerEvents: 'none',
      }}>
        <svg viewBox="0 0 300 300" width="300" fill="none">
          <polygon points="150,10 290,150 150,290 10,150" fill="#fff" />
          <polygon points="150,60 240,150 150,240 60,150" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '20px 24px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.10)' : 'none',
              position: 'relative',
            }}>
              {/* Animated number */}
              <div style={{
                fontSize: 'clamp(44px, 5.5vw, 64px)',
                fontWeight: 900,
                color: '#c8a96e',
                lineHeight: 1,
                marginBottom: 14,
                letterSpacing: -2,
                fontVariantNumeric: 'tabular-nums',
              }}>
                <CountUp
                  target={stat.num}
                  suffix={stat.suffix}
                  duration={stat.duration}
                  start={started}
                />
              </div>

              {/* Label */}
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.6,
                whiteSpace: 'pre-line',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default FeaturesBanner;
