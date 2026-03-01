import React from 'react';
import { BookOpen, TrendingUp, Landmark, Home, Shield, Calculator, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    color: '#143c82',
    title: 'Accountants',
    desc: 'Accounting & Compliance, Tax Advisory, Business Consulting',
    pills: ['Compliance', 'Tax Advisory', 'Consulting'],
  },
  {
    icon: TrendingUp,
    color: '#080f1e',
    title: 'Wealth',
    desc: 'Wealth Planning, Protection & Retirement Strategies',
    pills: ['Planning', 'Protection', 'Retirement'],
  },
  {
    icon: Landmark,
    color: '#143c82',
    title: 'Superannuation',
    desc: 'SMSF Introduction, Strategy, Formation & Administration',
    pills: ['SMSF', 'Strategy', 'Formation'],
  },
  {
    icon: Home,
    color: '#080f1e',
    title: 'Finance',
    desc: 'Home, Commercial, Vehicle, Equipment & Personal Loans',
    pills: ['Home Loans', 'Commercial', 'Vehicle & Equip'],
  },
  {
    icon: Shield,
    color: '#143c82',
    title: 'Insurance',
    desc: 'Assets & Revenue, Liability, Personal & Workers Cover',
    pills: ['Assets', 'Liability', 'Personal'],
  },
  {
    icon: Calculator,
    color: '#080f1e',
    title: 'Bookkeeping & Management',
    desc: 'Bookkeeping, Payroll, MYOB/Xero Training & Support',
    pills: ['Bookkeeping', 'Payroll', 'Training'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" style={{
      background: '#fff',
      padding: '100px 0',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 64px' }}>
          <span className="section-label">What We Do</span>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 46px)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#080f1e',
            letterSpacing: -1,
            marginBottom: 20,
          }}>Our 6 Financial Pillars</h2>
          <div style={{ width: 48, height: 3, background: '#143c82', margin: '0 auto 24px' }} />
          <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8 }}>
            Offering clients a holistic approach to all their financial solutions under one management hub.
          </p>
        </div>

        {/* 3×2 Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
          background: '#e8e9ec',
        }}>
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} style={{
                background: '#fff',
                padding: '44px 36px',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#080f1e';
                e.currentTarget.querySelectorAll('[data-title]').forEach(el => el.style.color = '#fff');
                e.currentTarget.querySelectorAll('[data-desc]').forEach(el => el.style.color = 'rgba(255,255,255,0.6)');
                e.currentTarget.querySelectorAll('[data-icon-wrap]').forEach(el => el.style.background = '#143c82');
                e.currentTarget.querySelectorAll('[data-icon]').forEach(el => el.style.color = '#fff');
                e.currentTarget.querySelectorAll('[data-link]').forEach(el => el.style.color = '#143c82');
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.querySelectorAll('[data-title]').forEach(el => el.style.color = '#080f1e');
                e.currentTarget.querySelectorAll('[data-desc]').forEach(el => el.style.color = '#6b7280');
                e.currentTarget.querySelectorAll('[data-icon-wrap]').forEach(el => el.style.background = '#f4f5f7');
                e.currentTarget.querySelectorAll('[data-icon]').forEach(el => el.style.color = svc.color);
                e.currentTarget.querySelectorAll('[data-link]').forEach(el => el.style.color = '#143c82');
              }}
              >
                {/* Icon */}
                <div data-icon-wrap style={{
                  width: 56, height: 56,
                  background: '#f4f5f7',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24,
                  transition: 'background 0.3s ease',
                }}>
                  <Icon data-icon size={26} style={{ color: svc.color, transition: 'color 0.3s ease' }} />
                </div>

                <h3 data-title style={{
                  fontSize: 18, fontWeight: 800, color: '#080f1e',
                  marginBottom: 12, letterSpacing: -0.3,
                  transition: 'color 0.3s ease',
                }}>{svc.title}</h3>

                <p data-desc style={{
                  fontSize: 13.5, color: '#6b7280', lineHeight: 1.7,
                  marginBottom: 24, fontWeight: 400,
                  transition: 'color 0.3s ease',
                }}>{svc.desc}</p>

                <a data-link href="#contact" className="learn-more" style={{ fontSize: 11, letterSpacing: 1.5 }}>
                  Learn More <ArrowRight size={13} />
                </a>

                {/* Corner number */}
                <div style={{
                  position: 'absolute', top: 20, right: 24,
                  fontSize: 11, fontWeight: 700, letterSpacing: 2,
                  color: 'rgba(0,0,0,0.06)', fontFamily: 'Montserrat',
                }}>0{i + 1}</div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services > .container > div:last-child { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          #services > .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
