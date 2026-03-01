import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const credentials = [
  'IPA Practice',
  'SMSF Licensed Advisor',
  'Accredited Mortgage Broker',
  'MYOB & QuickBooks Certified Advisor',
  'XERO Certified Consultant',
];

/* Decorative corner SVG */
const CornerAccent = () => (
  <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', bottom: -20, right: -20, width: 220, opacity: 0.06, pointerEvents: 'none' }}>
    <polygon points="110,10 210,110 110,210 10,110" stroke="#143c82" strokeWidth="2" fill="#143c82"/>
    <polygon points="110,40 180,110 110,180 40,110" stroke="#143c82" strokeWidth="1.5" fill="none"/>
    <polygon points="110,70 150,110 110,150 70,110" fill="#143c82"/>
  </svg>
);

const AboutSection = () => {
  return (
    <section id="about" style={{
      background: '#f4f5f7',
      padding: '100px 0',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>

          {/* LEFT – Bold heading */}
          <div style={{ position: 'relative' }}>
            <span className="section-label">About Us</span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#080f1e',
              letterSpacing: -1,
              marginBottom: 28,
            }}>
              Perth's Complete<br />
              <span style={{ color: '#c8a96e' }}>Financial</span><br />
              Management Hub
            </h2>
            <div style={{ width: 48, height: 3, background: '#c8a96e', marginBottom: 32 }} />

            {/* Stats mini grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 24, marginTop: 8,
            }}>
              {[
                { num: '15+', label: 'Years in Business' },
                { num: '500+', label: 'Satisfied Clients' },
                { num: '6', label: 'Service Pillars' },
                { num: '100%', label: 'Client Focused' },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: '#080f1e',
                  padding: '24px 20px',
                  borderLeft: '3px solid #c8a96e',
                }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: 1.2, textTransform: 'uppercase', marginTop: 6 }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <CornerAccent />
          </div>

          {/* RIGHT – Paragraph + credentials */}
          <div>
            <p style={{
              fontSize: 15.5,
              lineHeight: 1.9,
              color: '#464650',
              marginBottom: 32,
              fontWeight: 400,
            }}>
              Carbone Partners is a contemporary accounting firm based in Leederville, Perth. We offer a comprehensive range of financial services designed to simplify and strengthen your financial position — whether you're an individual, small business, or large enterprise.
            </p>
            <p style={{
              fontSize: 15.5,
              lineHeight: 1.9,
              color: '#464650',
              marginBottom: 36,
              fontWeight: 400,
            }}>
              With clients spanning over 15 years and industries including building & construction, retail, wholesale, manufacturing, and professional services — we are your long-term financial partner.
            </p>

            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#080f1e', marginBottom: 18 }}>
                Our Accreditations
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {credentials.map((c, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13.5, color: '#464650', fontWeight: 500 }}>
                    <CheckCircle2 size={16} style={{ color: '#143c82', flexShrink: 0 }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <a href="#contact" className="btn-red" style={{ marginTop: 36, fontSize: 12, display: 'inline-flex', letterSpacing: 1.5 }}>
              Get In Touch
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
