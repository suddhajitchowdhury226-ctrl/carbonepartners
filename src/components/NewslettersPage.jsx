import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, ChevronRight, Home, FileText, Download, Eye } from 'lucide-react';
import servicesHeroBg from '../assets/services-hero.png';
import newsletterImage from '../assets/newsletter-detail.png';

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
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
          <Home size={12} /> Home
        </button>
        <ChevronRight size={11} color="rgba(255,255,255,0.2)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>{title}</span>
      </div>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: -1 }}>
        {title}
      </h1>
      <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 600, lineHeight: 1.6 }}>
        {subtitle}
      </p>
    </div>
  </section>
);

const NewsletterCard = ({ title, date, pdfLink, delay }) => (
  <Reveal delay={delay}>
    <div style={{ 
      background: '#fff', borderRadius: 12, padding: '24px', 
      boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
      border: '1px solid rgba(0,0,0,0.03)',
      display: 'flex', alignItems: 'center', gap: 20,
      transition: 'all 0.3s ease'
    }} className="newsletter-card">
      <div style={{ width: 50, height: 50, borderRadius: 10, background: 'rgba(20,60,130,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <FileText size={24} color="#143c82" />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#080f1e', marginBottom: 4 }}>{title}</h3>
        <p style={{ fontSize: 13, color: '#666', margin: 0 }}>{date}</p>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <a href={pdfLink} target="_blank" rel="noopener noreferrer" style={{ padding: '8px 12px', borderRadius: 6, background: 'rgba(200,169,110,0.1)', color: '#c8a96e', fontSize: 12, fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,169,110,0.2)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(200,169,110,0.1)'}>
          <Eye size={14} /> View
        </a>
        <a href={pdfLink} download style={{ padding: '8px 12px', borderRadius: 6, background: '#143c82', color: '#fff', fontSize: 12, fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#0f2f68'} onMouseLeave={e => e.currentTarget.style.background = '#143c82'}>
          <Download size={14} /> Download
        </a>
      </div>
    </div>
  </Reveal>
);

const NewslettersPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const newsletters = [
    { title: "Newsletter August 2020", date: "August 2020", link: "https://www.carbonepartners.com.au/wp-content/uploads/2020/08/CARBONE-August-2020.pdf" },
    { title: "Newsletter June 2020", date: "June 2020", link: "https://www.carbonepartners.com.au/wp-content/uploads/2020/06/CARBONE-June-2020.pdf" },
    { title: "Newsletter May 2020", date: "May 2020", link: "https://www.carbonepartners.com.au/wp-content/uploads/2020/05/CARBONE-May-2020.pdf" },
    { title: "Newsletter April 2020", date: "April 2020", link: "https://www.carbonepartners.com.au/wp-content/uploads/2020/04/CARBONE-April-2020.pdf" },
    { title: "Newsletter February 2020", date: "February 2020", link: "https://www.carbonepartners.com.au/wp-content/uploads/2020/02/7-Carbone-Partners-February-2019-1.pdf" },
    { title: "Newsletter December 2019", date: "December 2019", link: "https://www.carbonepartners.com.au/wp-content/uploads/2020/02/CARBONE-December-2019.pdf" },
    { title: "Newsletter November 2019", date: "November 2019", link: "https://www.carbonepartners.com.au/wp-content/uploads/2020/02/CARBONE-November-2019.pdf" },
    { title: "Newsletter October 2019", date: "October 2019", link: "https://www.carbonepartners.com.au/wp-content/uploads/2020/02/CARBONE-October-2019.pdf" },
    { title: "Newsletter September 2019", date: "September 2019", link: "https://www.carbonepartners.com.au/wp-content/uploads/2020/02/CARBONE-September-2019.pdf" },
    { title: "Newsletter August 2019", date: "August 2019", link: "https://www.carbonepartners.com.au/wp-content/uploads/2020/02/CARBONE-August-2019.pdf" },
  ];

  return (
    <div style={{ background: '#fdfdfd', minHeight: '100vh' }}>
      <PageHero 
        onBack={onBack} 
        title="Newsletters" 
        subtitle="Stay updated with the latest financial insights and firm news." 
      />
      
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(300px, 350px)', gap: 60, alignItems: 'start' }} className="newsletters-layout-grid">
            
            {/* Left Column: Newsletters Grid */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr)', gap: 24 }}>
                {newsletters.map((news, i) => (
                  <NewsletterCard 
                    key={i}
                    title={news.title}
                    date={news.date}
                    pdfLink={news.link}
                    delay={i * 0.05}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Image & Subscribe */}
            <Reveal delay={0.4}>
              <div style={{ position: 'sticky', top: 120 }}>
                <div style={{ 
                  borderRadius: 24, overflow: 'hidden', 
                  boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                  aspectRatio: '4/3', width: '100%', maxWidth: 350, margin: '0 auto 40px auto',
                  border: '1px solid rgba(0,0,0,0.03)', background: '#eee'
                }}>
                  <img 
                    src={newsletterImage} 
                    alt="Newsletter graphics" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                
                <div style={{ textAlign: 'center', padding: 40, background: '#f8f9fa', borderRadius: 20, border: '1px solid rgba(0,0,0,0.04)' }}>
                  <h2 style={{ fontSize: 24, fontWeight: 800, color: '#080f1e', marginBottom: 12 }}>Want to subscribe?</h2>
                  <p style={{ color: '#666', marginBottom: 24, fontSize: 14 }}>Get our latest newsletters delivered straight to your inbox.</p>
                  <a href="#contact" style={{ display: 'inline-block', background: '#c8a96e', color: '#080f1e', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                    Join Our Mailing List
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <style>{`
        .newsletter-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08) !important;
          border-color: rgba(200,169,110,0.3) !important;
        }
        @media (max-width: 900px) {
          .newsletters-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .newsletter-card { flex-direction: column; align-items: flex-start; text-align: left; }
          .newsletter-card div:last-child { width: 100%; justify-content: space-between; margin-top: 10px; }
        }
      `}</style>
    </div>
  );
};

export default NewslettersPage;
