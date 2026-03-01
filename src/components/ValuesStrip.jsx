import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const values = [
  {
    label: '01',
    title: 'Personal',
    desc: 'Every client receives a dedicated, tailored one-on-one approach — because your financial goals are unique to you.',
  },
  {
    label: '02',
    title: 'Expert',
    desc: 'Our multi-disciplined team spans accounting, wealth, finance, superannuation, insurance, and bookkeeping under one roof.',
  },
  {
    label: '03',
    title: 'Long-Term',
    desc: 'We act as strategic business partners focused on sustainable wealth creation and financial success over the long term.',
  },
];

const ValuesStrip = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: '#0c1a36', borderTop: '4px solid #c8a96e' }}>
      <style>{`
        @keyframes shimmerBar {
          0%   { width: 36px; }
          50%  { width: 64px; }
          100% { width: 36px; }
        }
        .vs-card {
          transition: background 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
        }
        .vs-card:hover {
          background: rgba(20,60,130,0.18) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(200,169,110,0.18);
          cursor: default;
        }
        .vs-read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #c8a96e;
          font-size: 11px;
          letter-spacing: 1.8px;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          transition: gap 0.3s ease, color 0.3s ease;
        }
        .vs-read-more:hover {
          gap: 12px !important;
          color: #fff !important;
        }
        @media (max-width: 768px) {
          .vs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="vs-grid container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}>
        {values.map((v, i) => {
          const isH = hovered === i;
          return (
            <div
              key={i}
              className="vs-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '52px 40px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                position: 'relative',
                borderTop: `3px solid ${isH ? '#c8a96e' : 'transparent'}`,
              }}
            >
              {/* Subtle left glow on hover */}
              {isH && (
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: 3,
                  background: 'linear-gradient(180deg, #c8a96e, transparent)',
                  borderRadius: '0 0 0 0',
                }} />
              )}

              {/* Number */}
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: 3,
                textTransform: 'uppercase',
                color: isH ? '#fff' : '#c8a96e',
                marginBottom: 18,
                transition: 'color 0.3s ease',
              }}>{v.label}</div>

              {/* Title */}
              <h3 style={{
                fontSize: 26, fontWeight: 800,
                color: '#fff', marginBottom: 16,
                letterSpacing: -0.5,
                transition: 'transform 0.3s ease',
                transform: isH ? 'translateX(4px)' : 'none',
              }}>{v.title}</h3>

              {/* Gold underline — animates width on hover */}
              <div style={{
                height: 3, background: '#c8a96e', marginBottom: 20,
                borderRadius: 2,
                width: isH ? 64 : 36,
                transition: 'width 0.4s cubic-bezier(0.34,1.56,0.64,1)',
              }} />

              {/* Body */}
              <p style={{
                fontSize: 13.5, lineHeight: 1.8,
                color: isH ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.58)',
                fontWeight: 400, marginBottom: 28,
                transition: 'color 0.3s ease',
              }}>{v.desc}</p>

              <a href="#about" className="vs-read-more">
                Read More <ArrowRight size={13} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValuesStrip;
