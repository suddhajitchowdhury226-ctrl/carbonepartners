import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, ChevronRight, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const SVG_X = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const NAV_ITEMS = [
  { label: 'Home', link: '#home' },
  {
    label: 'Our Story',
    link: '#about',
    dropdown: [
      { label: 'Our History', link: '#history' },
      { label: 'Mission, Vision & Philosophy', link: '#mission' },
      { label: 'Expertise & Values', link: '#expertise' },
    ]
  },
  {
    label: 'Services',
    link: '#services',
    dropdown: [
      {
        label: 'Accountants',
        link: '#accountants',
        subDropdown: [
          { label: 'Accounting & Comp.', link: '#acc-comp' },
          { label: 'Tax Advis.', link: '#tax' },
          { label: 'Biz Conslt', link: '#biz-consult' },
          { label: 'SMSF', link: '#smsf-acc' },
          { label: 'Property Inv.', link: '#prop-inv' },
          { label: 'Corp. Sec.', link: '#corp-sec' },
        ]
      },
      {
        label: 'Wealth',
        link: '#wealth',
        subDropdown: [
          { label: 'Planning', link: '#planning' },
          { label: 'Protection', link: '#protection' },
          { label: 'Retirement', link: '#retirement' },
        ]
      },
      {
        label: 'Superannuation',
        link: '#superannuation',
        subDropdown: [
          { label: 'SMSF Intro', link: '#smsf-intro' },
          { label: 'SMSF Strategy', link: '#smsf-strategy' },
          { label: 'SMSF Formation', link: '#smsf-formation' },
          { label: 'SMSF Admin', link: '#smsf-admin' },
        ]
      },
      {
        label: 'Finance',
        link: '#finance',
        subDropdown: [
          { label: 'Home Loans', link: '#home-loans' },
          { label: 'Commercial Loans', link: '#commercial-loans' },
          { label: 'Vehicle & Equipment', link: '#vehicle-equipment' },
          { label: 'Personal Loans', link: '#personal-loans' },
        ]
      },
      {
        label: 'Insurance',
        link: '#insurance',
        subDropdown: [
          { label: 'Assets & Revenue', link: '#assets-revenue' },
          { label: 'Liability', link: '#liability' },
          { label: 'Personal & Workers', link: '#personal-workers' },
        ]
      },
      {
        label: 'Bookkeeping & Mgmt',
        link: '#bookkeeping',
        subDropdown: [
          { label: 'Bookkeeping', link: '#bookkeeping-srv' },
          { label: 'Payroll Management', link: '#payroll' },
          { label: 'Training & Support', link: '#training' },
        ]
      }
    ]
  },
  {
    label: 'Team',
    link: '#team',
    dropdown: [
      { label: 'Meet the Team', link: '#meet-team' },
      { label: 'Join Our Team', link: '#join-team' },
    ]
  },
  {
    label: 'Client Resources',
    link: '#resources',
    dropdown: [
      { label: 'Newsletters', link: '#newsletters' },
      { label: 'Calculators', link: '#calculators' },
      { label: 'Useful Links', link: '#useful-links' },
    ]
  },
  { label: 'Blog', link: '#blog' },
  { label: 'Contact Us', link: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [mobileExpandedSub, setMobileExpandedSub] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: '#ffffff',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.10)' : '0 1px 6px rgba(0,0,0,0.07)',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
    }}>
      
      {/* Top Contact Bar (hidden on scroll) */}
      <div style={{
        display: scrolled ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        background: '#ffffff',
      }} className="nav-topbar">
        {/* Social Block */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 18,
          background: '#1e3a8a', padding: '10px 24px',
          color: '#ffffff',
        }}>
          <a href="#" style={{ color: '#fff', display: 'flex' }}><Facebook size={14} /></a>
          <a href="#" style={{ color: '#fff', display: 'flex' }}><Instagram size={14} /></a>
          <a href="#" style={{ color: '#fff', display: 'flex' }}><SVG_X /></a>
          <a href="#" style={{ color: '#fff', display: 'flex' }}><Linkedin size={14} /></a>
        </div>

        {/* Info Block */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 32,
          fontSize: 12, fontWeight: 600, color: '#1e3a5f', paddingRight: 8
        }}>
          <a href="mailto:admin@carbonepartners.com.au" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'inherit', textDecoration: 'none' }}>
            <Mail size={14} style={{ color: '#1e3a8a' }} />
            admin@carbonepartners.com.au
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <MapPin size={14} style={{ color: '#1e3a8a' }} />
            Level 1,Suite 36/285 Vincent Street, Leederville, WA 6007
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        padding: '0 40px',
        maxWidth: '100%',
        position: 'relative',
      }}>
        {/* Logo – left */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, zIndex: 2 }}>
          <img
            src="/logo1.png"
            alt="Carbone Partners – Complete Financial Management"
            style={{
              height: 82,
              width: 'auto',
              objectFit: 'contain',
              transition: 'opacity 0.25s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          />
        </a>

        {/* Nav Links – absolutely centered */}
        <ul className="nav-desktop-links" style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}>
          {NAV_ITEMS.map(item => (
            <li key={item.label} className="nav-item">
              <a href={item.link} className="nav-link">
                {item.label}
                {item.dropdown && <ChevronDown size={14} />}
              </a>
              {item.dropdown && (
                <ul className="nav-dropdown">
                  {item.dropdown.map(subItem => (
                    <li key={subItem.label} className="dropdown-item">
                      <a href={subItem.link} className="dropdown-link" style={subItem.subDropdown ? { paddingRight: '24px' } : {}}>
                        {subItem.label}
                        {subItem.subDropdown && <ChevronRight size={14} />}
                      </a>
                      {subItem.subDropdown && (
                        <ul className="sub-dropdown">
                          {subItem.subDropdown.map(subSubItem => (
                            <li key={subSubItem.label} className="dropdown-item">
                              <a href={subSubItem.link} className="dropdown-link" style={{ fontSize: '12px' }}>
                                {subSubItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0, zIndex: 2 }} className="nav-desktop-actions">
          <a href="tel:0894093644" style={{
            display: 'flex', alignItems: 'center', gap: 8,
            color: '#1e3a5f', fontSize: 12, fontWeight: 600, letterSpacing: 0.5, textDecoration: 'none', whiteSpace: 'nowrap',
          }}>
            <Phone size={13} style={{ color: '#2563eb' }} />
            <span className="phone-text">(08) 9409 3644</span>
          </a>
          <a href="#contact" className="btn-red" style={{ fontSize: 11, letterSpacing: 1.2, padding: '11px 22px', whiteSpace: 'nowrap' }}>
            Book Consult
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{ color: '#1e3a5f', display: 'none', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 2 }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'linear-gradient(180deg, #dbeafe 0%, #eff6ff 100%)',
          borderTop: '1px solid rgba(59,130,246,0.2)',
          padding: '20px 32px 28px',
          maxHeight: 'calc(100vh - 75px)',
          overflowY: 'auto'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 16, listStyle: 'none', padding: 0 }}>
            {NAV_ITEMS.map(item => (
              <li key={item.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a href={item.link} onClick={() => !item.dropdown && setMenuOpen(false)}
                     style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: '#1e3a5f', textDecoration: 'none' }}>
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)} style={{ background: 'none', border: 'none', color: '#1e3a5f', padding: 4, cursor: 'pointer' }}>
                      <ChevronDown size={16} style={{ transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                  )}
                </div>
                {item.dropdown && mobileExpanded === item.label && (
                   <ul style={{ paddingLeft: 16, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12, borderLeft: '1px solid rgba(59,130,246,0.3)', listStyle: 'none' }}>
                     {item.dropdown.map(subItem => (
                       <li key={subItem.label}>
                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <a href={subItem.link} onClick={() => !subItem.subDropdown && setMenuOpen(false)}
                              style={{ fontSize: 13, color: '#2563eb', textDecoration: 'none' }}>
                             {subItem.label}
                           </a>
                           {subItem.subDropdown && (
                             <button onClick={() => setMobileExpandedSub(mobileExpandedSub === subItem.label ? null : subItem.label)} style={{ background: 'none', border: 'none', color: '#1e3a5f', padding: 4, cursor: 'pointer' }}>
                               <ChevronDown size={14} style={{ transform: mobileExpandedSub === subItem.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                             </button>
                           )}
                         </div>
                         {subItem.subDropdown && mobileExpandedSub === subItem.label && (
                           <ul style={{ paddingLeft: 16, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 10, borderLeft: '1px solid rgba(59,130,246,0.2)', listStyle: 'none' }}>
                             {subItem.subDropdown.map(subSubItem => (
                               <li key={subSubItem.label}>
                                 <a href={subSubItem.link} onClick={() => setMenuOpen(false)}
                                    style={{ fontSize: 12, color: '#3b82f6', textDecoration: 'none' }}>
                                   {subSubItem.label}
                                 </a>
                               </li>
                             ))}
                           </ul>
                         )}
                       </li>
                     ))}
                   </ul>
                )}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="tel:0894093644" style={{ color: '#1e3a5f', fontSize: 13, textDecoration: 'none', fontWeight: 600 }}>
              (08) 9409 3644
            </a>
            <a href="#contact" className="btn-red" style={{ textAlign: 'center', fontSize: 12, textDecoration: 'none' }}>
              Book Free Consult
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop-links {
          display: flex;
          gap: 22px;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #213d62ff;
          transition: color 0.2s;
          padding: 24px 0;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: #2563eb;
        }
        .nav-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          border: 1px solid rgba(59,130,246,0.15);
          min-width: 220px;
          display: none;
          flex-direction: column;
          padding: 10px 0;
          box-shadow: 0 4px 20px rgba(59,130,246,0.12);
          list-style: none;
          margin: 0;
        }
        .nav-item:hover > .nav-dropdown {
          display: flex;
        }
        .dropdown-item {
          position: relative;
        }
        .dropdown-link {
          padding: 10px 20px;
          font-size: 13px;
          color: #1e3a5f;
          text-decoration: none;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .dropdown-link:hover {
          color: #2563eb;
          background: rgba(59,130,246,0.06);
        }
        .sub-dropdown {
          position: absolute;
          top: 0;
          left: 100%;
          background: #ffffff;
          border: 1px solid rgba(59,130,246,0.15);
          min-width: 220px;
          display: none;
          flex-direction: column;
          padding: 10px 0;
          box-shadow: 0 4px 20px rgba(59,130,246,0.12);
          list-style: none;
          margin: 0;
        }
        .dropdown-item:hover > .sub-dropdown {
          display: flex;
        }

        @media (max-width: 1200px) {
          .nav-desktop-links { gap: 18px; }
          .nav-link { font-size: 10px; letter-spacing: 0.6px; }
          .nav-desktop-actions .phone-text { display: none; }
        }
        
        @media (max-width: 1050px) {
          .nav-desktop-links, .nav-desktop-actions { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-topbar { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
