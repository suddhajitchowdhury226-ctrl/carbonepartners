import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValuesStrip from './components/ValuesStrip';
import AboutSection from './components/AboutSection';
import ServicesPillar from './components/ServicesPillar';
import FeaturesBanner from './components/FeaturesBanner';
import Testimonials from './components/Testimonials';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import ClientsSlider from './components/ClientsSlider';
import './index.css';
import './App.css';

/* ── Global scroll-reveal hook ── */
function useScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right';
    const targets = document.querySelectorAll(selectors);
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    targets.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}


/* ── Footer ───────────────────────────────────────────── */
const Footer = () => {
  const quickLinks = ['Home', 'About Us', 'Services', 'Resources', 'Contact'];
  const services = [
    'Accountants', 'Wealth Planning', 'Superannuation',
    'Finance & Loans', 'Insurance', 'Bookkeeping',
  ];

  return (
    <footer style={{ background: '#07111e', paddingTop: 72, paddingBottom: 0 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: 48,
          paddingBottom: 56,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>

          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: 24 }}>
              <img
                src="/logo1.png"
                alt="Carbone Partners – Complete Financial Management"
                style={{
                  height: 56,
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.92,
                }}
              />
            </div>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24, fontWeight: 400 }}>
              Your complete financial management solution hub in Perth, Western Australia.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" style={{
                width: 36, height: 36, background: 'rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)', transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#143c82'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" style={{
                width: 36, height: 36, background: 'rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)', transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#143c82'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#fff', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} style={{
                    fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 400,
                    display: 'flex', alignItems: 'center', gap: 8,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#143c82'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    <span style={{ color: '#143c82', fontSize: 10 }}>›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#fff', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {services.map(svc => (
                <li key={svc}>
                  <a href="#services" style={{
                    fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 400,
                    display: 'flex', alignItems: 'center', gap: 8,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#143c82'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    <span style={{ color: '#143c82', fontSize: 10 }}>›</span>
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#fff', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Connect With Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>Phone</div>
                <a href="tel:0894093644" style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>(08) 9409 3644</a>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>Email</div>
                <a href="mailto:admin@carbonepartners.com.au" style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>admin@carbonepartners.com.au</a>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>Office</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 400, lineHeight: 1.7 }}>
                  Level 1, Suite 36/285 Vincent Street<br />Leederville WA 6007
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 0',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>
            © {new Date().getFullYear()} Carbone Partners Pty Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a key={link} href="#" style={{
                fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 500, letterSpacing: 0.5,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#143c82'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > .container > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer > .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

/* ── App ─────────────────────────────────────────────── */
function App() {
  useScrollReveal();
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <div className="reveal reveal-delay-1"><ValuesStrip /></div>
      <div className="reveal reveal-delay-1"><AboutSection /></div>
      <ServicesPillar />
      <div className="reveal"><FeaturesBanner /></div>
      <div className="reveal reveal-delay-1"><Testimonials /></div>
      <div className="reveal reveal-delay-1"><TeamSection /></div>
      <div className="reveal reveal-delay-1"><ContactSection /></div>
      <ClientsSlider />
      <Footer />
    </div>
  );
}

export default App;
