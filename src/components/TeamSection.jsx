import React, { useState } from 'react';

const TEAM = [
  {
    name: 'Michael Carbone',
    title: 'Managing Director',
    image: '/Team/team-1.png',
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Peter Cirillo',
    title: 'Senior Tax Accountant',
    image: '/Team/team-2.png',
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Jasmena Miloseski',
    title: 'Senior Accountant',
    image: '/Team/team-3.png',
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Yuliya Stepanova',
    title: 'Mortgage Broker',
    image: '/Team/team-4.png',
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
];

const FacebookIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TeamCard = ({ member }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease',
        boxShadow: hovered
          ? '0 24px 48px rgba(20, 60, 130, 0.22)'
          : '0 4px 20px rgba(0,0,0,0.10)',
        background: '#fff',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            filter: hovered ? 'grayscale(100%)' : 'grayscale(0%)',
            transition: 'filter 0.4s ease, transform 0.4s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            display: 'block',
          }}
        />

        {/* Social icons – slide in from right on hover */}
        <div style={{
          position: 'absolute',
          right: 14,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s',
          pointerEvents: hovered ? 'auto' : 'none',
        }}>
          {[
            { href: member.facebook, icon: <FacebookIcon />, label: 'Facebook' },
            { href: member.instagram, icon: <InstagramIcon />, label: 'Instagram' },
            { href: member.linkedin, icon: <LinkedInIcon />, label: 'LinkedIn' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              onClick={e => e.stopPropagation()}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#fff',
                color: '#143c82',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                transition: 'background 0.2s, color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#143c82';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#143c82';
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Plus / X toggle button */}
        <button
          style={{
            position: 'absolute',
            bottom: 14,
            right: 14,
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: '#143c82',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            lineHeight: 1,
            fontWeight: 300,
            transition: 'transform 0.3s ease, background 0.2s',
            transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
          aria-label={hovered ? 'Close' : 'Open'}
        >
          +
        </button>
      </div>

      {/* Name / Title footer */}
      <div style={{
        background: hovered ? '#143c82' : '#fff',
        padding: '14px 18px',
        transition: 'background 0.4s ease',
      }}>
        <div style={{
          fontSize: 15,
          fontWeight: 700,
          color: hovered ? '#fff' : '#0c1a36',
          transition: 'color 0.4s ease',
          marginBottom: 3,
          fontFamily: 'Montserrat, sans-serif',
        }}>
          {member.name}
        </div>
        <div style={{
          fontSize: 12,
          fontWeight: 500,
          color: hovered ? 'rgba(255,255,255,0.75)' : '#2563eb',
          transition: 'color 0.4s ease',
          fontFamily: 'Montserrat, sans-serif',
          letterSpacing: 0.3,
        }}>
          {member.title}
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => (
  <section style={{ padding: '96px 0', background: '#fff' }} id="team">
    <div className="container">
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(20,60,130,0.08)',
          color: '#143c82',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 2.5,
          textTransform: 'uppercase',
          padding: '6px 18px',
          borderRadius: 20,
          marginBottom: 20,
          fontFamily: 'Montserrat, sans-serif',
        }}>
          Our Team
        </div>
        <h2 style={{
          fontSize: 38,
          fontWeight: 800,
          color: '#0c1a36',
          margin: 0,
          fontFamily: 'Montserrat, sans-serif',
          lineHeight: 1.2,
        }}>
          Meet The Team
        </h2>
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 28,
      }}>
        {TEAM.map(member => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        #team .container > div:last-child {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 560px) {
        #team .container > div:last-child {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

export default TeamSection;
