import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <ul style={{
          display: 'flex',
          gap: 32,
          alignItems: 'center',
          '@media(max-width:900px)': { display: 'none' },
        }} className="nav-desktop-links">
          {['Home', 'About', 'Services', 'Resources', 'Contact'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 1.2,
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
                transition: 'color 0.2s',
                padding: '4px 0',
                borderBottom: '2px solid transparent',
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
              >{link}</a>
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
            (08) 9409 3644
          </a>
          <a href="#contact" className="btn-red" style={{ fontSize: 11, letterSpacing: 1.2, padding: '11px 22px' }}>
            Book Free Consult
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{ color: '#fff', display: 'none' }}
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
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {['Home', 'About', 'Services', 'Resources', 'Contact'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="tel:0894093644" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
              (08) 9409 3644
            </a>
            <a href="#contact" className="btn-red" style={{ textAlign: 'center', fontSize: 12 }}>
              Book Free Consult
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-links, .nav-desktop-actions { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
