import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

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
      background: scrolled ? 'rgba(8,15,30,0.98)' : '#080f1e',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 75,
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/logo1.png"
            alt="Carbone Partners – Complete Financial Management"
            style={{
              height: 52,
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)',
              transition: 'opacity 0.25s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          />
        </a>

        {/* Nav Links – desktop */}
        <ul className="nav-desktop-links">
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="nav-desktop-actions">
          <a href="tel:0894093644" style={{
            display: 'flex', alignItems: 'center', gap: 8,
            color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 600, letterSpacing: 0.5,
          }}>
            <Phone size={13} style={{ color: '#143c82' }} />
            <span className="phone-text">(08) 9409 3644</span>
          </a>
          <a href="#contact" className="btn-red" style={{ fontSize: 11, letterSpacing: 1.2, padding: '11px 22px' }}>
            Book Consult
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{ color: '#fff', display: 'none', background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#080f1e',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 32px 28px',
          maxHeight: 'calc(100vh - 75px)',
          overflowY: 'auto'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 16, listStyle: 'none', padding: 0 }}>
            {NAV_ITEMS.map(item => (
              <li key={item.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a href={item.link} onClick={() => !item.dropdown && setMenuOpen(false)}
                     style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)} style={{ background: 'none', border: 'none', color: '#fff', padding: 4, cursor: 'pointer' }}>
                      <ChevronDown size={16} style={{ transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                  )}
                </div>
                {item.dropdown && mobileExpanded === item.label && (
                   <ul style={{ paddingLeft: 16, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12, borderLeft: '1px solid rgba(255,255,255,0.1)', listStyle: 'none' }}>
                     {item.dropdown.map(subItem => (
                       <li key={subItem.label}>
                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <a href={subItem.link} onClick={() => !subItem.subDropdown && setMenuOpen(false)}
                              style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                             {subItem.label}
                           </a>
                           {subItem.subDropdown && (
                             <button onClick={() => setMobileExpandedSub(mobileExpandedSub === subItem.label ? null : subItem.label)} style={{ background: 'none', border: 'none', color: '#fff', padding: 4, cursor: 'pointer' }}>
                               <ChevronDown size={14} style={{ transform: mobileExpandedSub === subItem.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                             </button>
                           )}
                         </div>
                         {subItem.subDropdown && mobileExpandedSub === subItem.label && (
                           <ul style={{ paddingLeft: 16, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 10, borderLeft: '1px solid rgba(255,255,255,0.1)', listStyle: 'none' }}>
                             {subItem.subDropdown.map(subSubItem => (
                               <li key={subSubItem.label}>
                                 <a href={subSubItem.link} onClick={() => setMenuOpen(false)}
                                    style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
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
            <a href="tel:0894093644" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, textDecoration: 'none' }}>
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
          gap: 20px;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          transition: color 0.2s;
          padding: 24px 0;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link:hover {
          color: #fff;
        }
        .nav-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: #080f1e;
          border: 1px solid rgba(255,255,255,0.06);
          min-width: 220px;
          display: none;
          flex-direction: column;
          padding: 10px 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
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
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .dropdown-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        .sub-dropdown {
          position: absolute;
          top: 0;
          left: 100%;
          background: #080f1e;
          border: 1px solid rgba(255,255,255,0.06);
          min-width: 220px;
          display: none;
          flex-direction: column;
          padding: 10px 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          list-style: none;
          margin: 0;
        }
        .dropdown-item:hover > .sub-dropdown {
          display: flex;
        }

        @media (max-width: 1200px) {
          .nav-desktop-links { gap: 14px; }
          .nav-link { font-size: 10px; letter-spacing: 0.8px; }
          .nav-desktop-actions .phone-text { display: none; }
        }
        
        @media (max-width: 1050px) {
          .nav-desktop-links, .nav-desktop-actions { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
