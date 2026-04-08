import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, ChevronRight, Home, ExternalLink, Globe, Shield, BookOpen, Search, Briefcase, Command } from 'lucide-react';
import servicesHeroBg from '../assets/services-hero.png';
import usefulLinksImage from '../assets/useful-links-detail.jpg';

/* ─── Scroll Reveal ─── */
function Reveal({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: 0, transform: 'translateY(30px)',
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

const PageHero = ({ onBack, title, subtitle }) => (
  <section style={{
    position: 'relative', minHeight: 350,
    backgroundImage: `url(${servicesHeroBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex', alignItems: 'center',
    overflow: 'hidden', paddingTop: 80, paddingBottom: 40
  }}>
    {/* Dark Overlay for readability */}
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,15,30,0.92) 0%, rgba(12,26,54,0.85) 55%, rgba(15,35,71,0.25) 100%)', zIndex: 1 }} />
    
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: 'linear-gradient(180deg,#c8a96e,#b8924e)', zIndex: 2 }} />
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)`, backgroundSize: '50px 50px', zIndex: 2 }} />
    
    <div className="container" style={{ position: 'relative', zIndex: 3, padding: '0 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
          <Home size={12} /> Home
        </button>
        <ChevronRight size={11} color="rgba(255,255,255,0.2)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>{title}</span>
      </div>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: -1 }}>
        Useful <span style={{ color: '#c8a96e' }}>Links</span>
      </h1>
      <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 600, lineHeight: 1.6 }}>
        {subtitle}
      </p>
    </div>
  </section>
);

const LinkItem = ({ label, url }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ 
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
      padding: '16px 20px', background: '#fff', border: '1px solid rgba(0,0,0,0.06)', 
      borderRadius: 10, textDecoration: 'none', transition: 'all 0.2s' 
    }}
    className="link-item"
  >
    <span style={{ fontSize: 15, fontWeight: 600, color: '#1e3a5f' }}>{label}</span>
    <ExternalLink size={14} color="#c8a96e" />
  </a>
);

const AccordionItem = ({ title, icon, children, isOpen, onClick }) => (
  <div style={{ marginBottom: 16, background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'all 0.3s' }}>
    <button 
      onClick={onClick}
      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: isOpen ? 'rgba(20,60,130,0.02)' : 'transparent', border: 'none', cursor: 'pointer', transition: 'background 0.3s' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: isOpen ? '#143c82' : 'rgba(20,60,130,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
          {React.cloneElement(icon, { color: isOpen ? '#fff' : '#143c82' })}
        </div>
        <span style={{ fontSize: 18, fontWeight: 800, color: '#080f1e' }}>{title}</span>
      </div>
      <ChevronRight size={20} color="#c8a96e" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
    </button>
    <div style={{ maxHeight: isOpen ? 1000 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease-in-out' }}>
      <div style={{ padding: '0 24px 24px 76px', display: 'grid', gap: 12 }}>
        {children}
      </div>
    </div>
  </div>
);

const UsefulLinksPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openSection, setOpenSection] = useState('software');

  const businessLinks = [
    { label: "Business.gov.au", url: "https://www.business.gov.au/" },
  ];

  const softwareLinks = [
    { label: "Microsoft", url: "https://www.microsoft.com/en-au" },
    { label: "Xero", url: "https://www.xero.com/au/" },
    { label: "MYOB", url: "https://www.myob.com/au" },
    { label: "Quickbooks", url: "https://quickbooks.intuit.com/" },
    { label: "Cashflow Manager", url: "https://www.cashflow-manager.com.au/" },
  ];

  const govLinks = [
    { label: "ATO - Australian Tax Office", url: "https://www.ato.gov.au/" },
    { label: "ASIC", url: "https://asic.gov.au/" },
    { label: "ABN Lookup", url: "https://abr.business.gov.au/" },
    { label: "AFSA", url: "https://www.afsa.gov.au/" },
    { label: "Fair Work Commission", url: "https://www.fwc.gov.au/" },
    { label: "Department of Finance-WA", url: "https://www.finance.wa.gov.au/cms/index.aspx" },
    { label: "Money Smart", url: "https://www.moneysmart.gov.au/" },
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div style={{ background: '#fdfdfd', minHeight: '100vh' }}>
      <PageHero 
        onBack={onBack} 
        title="Useful Links" 
        subtitle="A curated directory of software and government resources to support your business operations." 
      />
      
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: 60, alignItems: 'start' }} className="links-layout-grid">
            
            <Reveal>
              <div>
                <AccordionItem 
                  title="Business & Succession Planning" 
                  icon={<Briefcase size={20} />} 
                  isOpen={openSection === 'business'}
                  onClick={() => toggleSection('business')}
                >
                  {businessLinks.map((link, i) => <LinkItem key={i} label={link.label} url={link.url} />)}
                </AccordionItem>

                <AccordionItem 
                  title="Business Software" 
                  icon={<Command size={20} />} 
                  isOpen={openSection === 'software'}
                  onClick={() => toggleSection('software')}
                >
                  {softwareLinks.map((link, i) => <LinkItem key={i} label={link.label} url={link.url} />)}
                </AccordionItem>

                <AccordionItem 
                  title="Government Authorities" 
                  icon={<Shield size={20} />} 
                  isOpen={openSection === 'gov'}
                  onClick={() => toggleSection('gov')}
                >
                  {govLinks.map((link, i) => <LinkItem key={i} label={link.label} url={link.url} />)}
                </AccordionItem>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{ position: 'relative', maxWidth: 450, margin: '0 auto' }}>
                <div style={{ 
                  borderRadius: 24, overflow: 'hidden', 
                  boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                  aspectRatio: '4/3', background: '#eee'
                }}>
                  <img 
                    src={usefulLinksImage} 
                    alt="Chain link concept" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                {/* Floating Decoration */}
                <div style={{ 
                  position: 'absolute', bottom: -20, left: -20, 
                  background: '#c8a96e', color: '#080f1e', padding: '24px 32px', 
                  borderRadius: 20, boxShadow: '0 15px 35px rgba(200,169,110,0.3)',
                  zIndex: 2
                }}>
                  <div style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4 }}>Strong Connections</div>
                  <div style={{ fontSize: 24, fontWeight: 900 }}>Trusted Resources</div>
                </div>
              </div>
            </Reveal>

          </div>

          <Reveal delay={0.4}>
            <div style={{ marginTop: 80, padding: 40, background: '#143c82', borderRadius: 24, color: '#fff', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: -30, bottom: -30, opacity: 0.1 }}>
                <Globe size={200} />
              </div>
              <div style={{ position: 'relative', zIndex: 2, maxWidth: 650 }}>
                <h3 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Need more specific resources?</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.8, marginBottom: 0 }}>
                  Our team stays across the latest regulatory changes and software updates. If you're looking for a specific form or specialized tool not listed here, don't hesitate to contact us.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Partner Logos Strip */}
      <section style={{ padding: '60px 0', borderTop: '1px solid rgba(0,0,0,0.05)', background: '#fff' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#c8a96e' }}>Professional Accreditations & Partners</span>
            </div>
            <div style={{ 
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center', 
              alignItems: 'center', gap: '20px 48px', opacity: 0.8
            }}>
              {[
                { name: 'NTAA', sub: 'National Tax' },
                { name: 'IPA', sub: 'Accounting Inst.' },
                { name: 'Xero', sub: 'Platinum Partner' },
                { name: 'MYOB', sub: 'Professional' },
                { name: 'TPB', sub: 'Reg. Tax Agent' },
                { name: 'SMSF', sub: 'Advisers Network' }
              ].map((logo, i) => (
                <div key={i} style={{ textAlign: 'center', minWidth: 120 }}>
                  <div style={{ 
                    fontSize: 18, fontWeight: 900, color: '#080f1e', 
                    letterSpacing: -0.5, marginBottom: 2, fontFamily: 'Montserrat, sans-serif'
                  }}>
                    {logo.name}
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#c8a96e' }}>
                    {logo.sub}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .link-item:hover {
          transform: translateX(8px);
          border-color: #c8a96e !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        @media (max-width: 900px) {
          .links-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default UsefulLinksPage;
