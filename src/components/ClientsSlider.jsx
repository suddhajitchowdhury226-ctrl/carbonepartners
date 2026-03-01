import React from 'react';

const logos = [
  { src: '/logos/client1.jpg', alt: 'IPA – Institute of Public Accountants' },
  { src: '/logos/client2.jpg', alt: 'Tax Practitioners Board Registered' },
  { src: '/logos/client3.jpg', alt: 'SMSF Advisers Network' },
  { src: '/logos/client4.jpg', alt: 'NTAA – National Tax & Accountants Association' },
  { src: '/logos/client5.jpg', alt: 'MYOB' },
  { src: '/logos/client6.jpg', alt: 'Xero' },
];

/* Triple for seamless infinite loop */
const track = [...logos, ...logos, ...logos];

const ClientsSlider = () => (
  <section style={{
    background: 'linear-gradient(180deg, #080f1e 0%, #0c1a36 100%)',
    padding: '60px 0 56px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <style>{`
      @keyframes marqueeScroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(calc(-100% / 3)); }
      }
      .cl-track {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 8px 24px;
        width: max-content;
        animation: marqueeScroll 30s linear infinite;
      }
      .cl-track:hover { animation-play-state: paused; }

      .cl-card {
        background: #fff;
        border-radius: 14px;
        padding: 18px 32px;
        min-width: 180px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, opacity 0.3s ease;
        opacity: 0.82;
        box-shadow: 0 4px 20px rgba(0,0,0,0.25);
      }
      .cl-card:hover {
        transform: translateY(-8px) scale(1.06);
        box-shadow: 0 20px 48px rgba(0,0,0,0.50), 0 0 0 2px rgba(200,169,110,0.50);
        opacity: 1;
      }
      .cl-card img {
        max-height: 58px;
        max-width: 140px;
        width: auto;
        height: auto;
        object-fit: contain;
        transition: transform 0.35s ease;
      }
      .cl-card:hover img { transform: scale(1.08); }
    `}</style>

    {/* Heading */}
    <div style={{ textAlign: 'center', marginBottom: 36 }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 16,
        fontSize: 10, fontWeight: 800, letterSpacing: 3.5,
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
      }}>
        <span style={{ width: 36, height: 1, background: 'linear-gradient(90deg, transparent, #c8a96e)', display: 'block' }} />
        Our Accreditations &amp; Partners
        <span style={{ width: 36, height: 1, background: 'linear-gradient(270deg, transparent, #c8a96e)', display: 'block' }} />
      </div>
    </div>

    {/* Marquee */}
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Left fade */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 130, zIndex: 3,
        background: 'linear-gradient(90deg, #080f1e 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      {/* Right fade */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 130, zIndex: 3,
        background: 'linear-gradient(270deg, #0c1a36 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div className="cl-track">
        {track.map((logo, i) => (
          <div key={i} className="cl-card">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSlider;
