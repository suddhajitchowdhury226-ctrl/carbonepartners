import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, ChevronRight, Home, Linkedin, MailIcon } from 'lucide-react';
import teamHeroBg from '../assets/team-hero.png';

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

const PageHero = ({ onBack }) => (
  <section style={{
    position: 'relative', minHeight: 400,
    backgroundImage: `url(${teamHeroBg})`,
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
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>Our Team</span>
      </div>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: -1 }}>
        Meet The <span style={{ color: '#c8a96e' }}>Team</span>
      </h1>
      <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 600, lineHeight: 1.6 }}>
        Driven by integrity, expertise, and a passion for your financial success.
      </p>
    </div>
  </section>
);

const MemberBio = ({ member, delay }) => (
  <Reveal delay={delay}>
    <div style={{ 
      display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: 40,
      background: '#fff', borderRadius: 24, padding: 40,
      boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
      border: '1px solid rgba(0,0,0,0.03)',
      marginBottom: 40,
      alignItems: 'start'
    }} className="member-bio-card">
      <div style={{ position: 'relative' }}>
        <div style={{ 
          width: '100%', aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
        }}>
          <img 
            src={member.image} 
            alt={member.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
          />
        </div>
        <div style={{ 
          position: 'absolute', bottom: -15, right: -15, 
          background: '#c8a96e', color: '#080f1e', padding: '12px 24px', 
          borderRadius: 12, fontWeight: 700, fontSize: 14,
          boxShadow: '0 4px 15px rgba(200,169,110,0.4)'
        }}>
          {member.title}
        </div>
      </div>
      <div>
        <h2 style={{ fontSize: 32, fontWeight: 900, color: '#080f1e', marginBottom: 12 }}>{member.name}</h2>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <a href={`mailto:${member.email}`} style={{ color: '#143c82', display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            <MailIcon size={16} /> {member.email}
          </a>
          <a href="#" style={{ color: '#0077b5', display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
        <div style={{ fontSize: 16, color: '#555', lineHeight: 1.8 }}>
          {member.bio.split('\n').map((para, i) => (
            <p key={i} style={{ marginBottom: 16 }}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  </Reveal>
);

const MeetTeamPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const team = [
    {
      name: "Michael Carbone",
      title: "Managing Director",
      image: "/Team/team-1.png",
      email: "m.carbone@carbonepartners.com.au",
      bio: "Michael practices in all areas of Accounting, Tax and Advisory & Wealth Management. Michael’s career in accounting started in 1994 when he began as a 21-year-old Assistant Accountant. Over the next few years, he learnt the art of accounting and tax and progressed through the ranks at small to medium sized accounting practices in Perth.\nBy 1997 he began working as a Registered Tax Agent out of his home/office and quickly expanded his business into office premises by 2002. Since then, his firm has continued to grow. Michael has been a tax specialist for over 20 years. Throughout his career, he has been dedicated to the needs of small to medium sized businesses, particularly in relation to taxation, structural advice and business planning.\nMichael has completed a Bachelor of Business from Edith Cowan University and has been awarded a Fellowship with the Institute of Public Accountants. As a Director of the firm’s subsidiary financial planning and mortgage broking company, he holds an Advanced Diploma of Financial Services (ADFP) and is an authorised representative of the SMSF Advisers Network. He also holds a Diploma of Finance and Mortgage Broking Management. Michael leads the Self-Managed Superannuation Fund (SMSF) division at Carbone Partners where he is RG146 compliant."
    },
    {
      name: "Peter Cirillo",
      title: "Senior Tax Accountant",
      image: "/Team/team-2.png",
      email: "p.cirillo@carbonepartners.com.au",
      bio: "Peter has been with Carbone Partners since 2007 and holds a Bachelor of Business and Diploma in Accounting. He has over 20 years’ experience in both private practice and commercial accounting. Peter has a wealth of experience dealing with small to medium-sized enterprises, superannuation funds and high net worth individuals.\nHe always strives for excellence and is highly-motivated and results-focused. He has a good eye for detail, is efficient in all types of work presented and analyses all situations thoroughly. Peter has become an integral part of the team as he is Michael’s right hand man and could almost say a partner in the firm.\nTo remain focused Peter enjoys keeping fit and participating in outdoor adventures with his family."
    },
    {
      name: "Jasmena Miloseski",
      title: "Senior Accountant",
      image: "/Team/team-3.png",
      email: "j.miloseski@carbonepartners.com.au",
      bio: "Jasmena joined our accounting practice back in 2008 after being a client of ours for a number of years. She holds a Bachelor of Business in Accounting and Information Systems. Jasmena is a valued member of our team as she is always happy to help any one of our team members if they have a problem or if they just need help. This helpful nature has enabled her to provide an exceptional level of assistance and expertise to all of our clients.\nJasmena has a wide range of experience in different software packages including MYOB, Xero, Cashflow Manager, and Excel. She has extensive experience in applying accounting principles and procedures to analyse financial information which in turn enables her to specialise in the preparation of monthly and quarterly Business Activity Statements, Financial Statements, and Income Tax Returns for all entities, including SMSFs and SMEs."
    },
    {
      name: "Yuliya Stepanova",
      title: "Mortgage Broker",
      image: "/Team/team-4.png",
      email: "y.stepanova@carbonepartners.com.au",
      bio: "Yuliya is a key member of our finance division. She holds a Certificate IV in Finance and Mortgage Broking as well as a Diploma of Finance and Mortgage Broking Management.\nYuliya specialises in finding the right financial solutions for our clients, whether they are first-time home buyers, investors, or businesses looking for commercial finance. Her analytical skills and dedication to client service ensure that our clients receive the most competitive and suitable loan products available in the market."
    }
  ];

  return (
    <div style={{ background: '#fdfdfd' }}>
      <PageHero onBack={onBack} />
      
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          {team.map((member, i) => (
            <MemberBio key={i} member={member} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <div style={{ background: '#080f1e', padding: '100px 0', textAlign: 'center' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          <Reveal>
            <h2 style={{ color: '#fff', fontSize: 32, fontWeight: 900, marginBottom: 24 }}>Ready to work with the <span style={{ color: '#c8a96e' }}>best?</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto 40px', fontSize: 18 }}>Our team is ready to guide you through your financial journey with expertise and integrity.</p>
            <a href="#contact" style={{ display: 'inline-block', background: '#c8a96e', color: '#080f1e', padding: '16px 40px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Get In Touch
            </a>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .member-bio-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default MeetTeamPage;
