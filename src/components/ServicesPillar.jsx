import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';


const SERVICES = [
  { id: 0, img: '/Financial-image/accountants.png', title: 'Accountants',   angle: -90, color: '#143c82',
    desc: 'Comprehensive accounting services to keep your business compliant and financially strong.',
    points: [
      { text: 'Accounting & Compliance', link: '#accounting-compliance' },
      { text: 'Tax Advisory', link: '#tax-advisory' },
      { text: 'Business Consulting', link: '#business-consulting' },
      { text: 'SMSF', link: '#smsf' },
      { text: 'Property Investment', link: '#property-investment' },
      { text: 'Corporate Secretarial', link: '#corporate-secretarial' }
    ] },
  { id: 1, img: '/Financial-image/Finance.png',      title: 'Finance',        angle: -30, color: '#1a4fa0',
    desc: 'Flexible finance solutions for every stage of your journey — personal, commercial, or property.',
    points: [
      { text: 'Home Loans', link: '#home-loans' },
      { text: 'Commercial Loans', link: '#commercial-loans' },
      { text: 'Vehicle & Equipment', link: '#vehicle-equipment' },
      { text: 'Personal Loans', link: '#personal-loans' }
    ] },
  { id: 2, img: '/Financial-image/super.png',        title: 'Superannuation', angle: 30,  color: '#0f2f68',
    desc: 'Expert SMSF licensed advice to build and protect your retirement wealth.',
    points: [
      { text: 'SMSF Intro', link: '#smsf-intro' },
      { text: 'SMSF Strategy', link: '#smsf-strategy' },
      { text: 'SMSF Formation', link: '#smsf-formation' },
      { text: 'SMSF Administration', link: '#smsf-admin' }
    ] },
  { id: 3, img: '/Financial-image/book.png',         title: 'Bookkeeping',    angle: 90,  color: '#143c82',
    desc: 'Accurate, timely bookkeeping and payroll services powered by MYOB, Xero & QuickBooks.',
    points: [
      { text: 'Bookkeeping', link: '#bookkeeping-srv' },
      { text: 'Payroll Management', link: '#payroll' },
      { text: 'Training & Support', link: '#training' }
    ] },
  { id: 4, img: '/Financial-image/wealth.png',       title: 'Wealth',         angle: 150, color: '#1a4fa0',
    desc: 'Tailored wealth strategies to grow, protect, and transition your personal financial future.',
    points: [
      { text: 'Wealth Planning', link: '#wealth-planning' },
      { text: 'Wealth Protection', link: '#wealth-protection' },
      { text: 'Wealth Retirement', link: '#wealth-retirement' },
      { text: 'Investment Strategy', link: '#wealth-retirement' }
    ] },
  { id: 5, img: '/Financial-image/insurance.png',    title: 'Insurance',      angle: 210, color: '#0f2f68',
    desc: 'Protect what matters most — your business, assets, income and people.',
    points: [
      { text: 'Assets & Revenue', link: '#assets-revenue' },
      { text: 'Liability Cover', link: '#liability' },
      { text: 'Personal & Workers', link: '#personal-workers' }
    ] },
];

const RADIUS = 220;
const WHEEL_SIZE = 580;
const CENTER = WHEEL_SIZE / 2;
const CIRCLE_SIZE = 112;
const toRad = (deg) => (deg * Math.PI) / 180;
const CIRCUMFERENCE = 2 * Math.PI * (CIRCLE_SIZE / 2 + 10);

/* ─── Gold arc that fills as scroll progress goes 0→1 ─── */
function ScrollArc({ cx, cy, r, progress }) {
  const circ  = 2 * Math.PI * r;
  const dash  = circ * Math.min(progress, 1);
  return (
    <g>
      {/* Track */}
      <circle cx={cx} cy={cy} r={r} fill="none"
        stroke="rgba(200,169,110,0.18)" strokeWidth="5" />
      {/* Fill */}
      <circle cx={cx} cy={cy} r={r} fill="none"
        stroke="#c8a96e" strokeWidth="5"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: 'stroke-dasharray 0.12s linear', filter: 'drop-shadow(0 0 4px rgba(200,169,110,0.7))' }}
      />
    </g>
  );
}

/* ─── Animated connector line (draws from hub outward) ─── */
function ConnectorLine({ x1, y1, x2, y2, active }) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={active ? '#c8a96e' : 'rgba(20,60,130,0.20)'}
      strokeWidth={active ? 2.8 : 1.2}
      strokeDasharray={len}
      strokeDashoffset={active ? 0 : len * 0.35}
      style={{
        transition: 'stroke 0.5s ease, stroke-width 0.4s ease, stroke-dashoffset 0.6s cubic-bezier(0.34,1.56,0.64,1)',
        strokeLinecap: 'round',
      }}
    />
  );
}

const ServicesPillar = () => {
  const [active, setActive]     = useState(0);
  const [prev,   setPrev]       = useState(null);
  const [hovered, setHovered]   = useState(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [dir, setDir]           = useState(1);   // +1 scroll fwd, -1 scroll back
  const [panelKey, setPanelKey] = useState(0);   // force re-render panel for animation
  const [sectionVisible, setSectionVisible] = useState(false);

  const wrapperRef = useRef(null);

  /* ── scroll-pin ── */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onScroll = () => {
      const rect    = wrapper.getBoundingClientRect();
      const total   = wrapper.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const raw  = Math.min(1, scrolled / total);

      const perSvc = 1 / SERVICES.length;
      const idx  = Math.min(SERVICES.length - 1, Math.floor(raw / perSvc));
      const pct  = (raw - idx * perSvc) / perSvc;

      setActive(prev => {
        if (prev !== idx) {
          setDir(idx > prev ? 1 : -1);
          setPanelKey(k => k + 1);
        }
        return idx;
      });
      setScrollPct(pct);
    };

    // IntersectionObserver for section entry animation
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setSectionVisible(true);
    }, { threshold: 0.05 });
    io.observe(wrapper);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  const activeService = SERVICES[active];
  const isLast = active === SERVICES.length - 1;

  return (
    <>
      <style>{`
        /* ── Keyframes ── */
        @keyframes spinCW      { to { transform: rotate(360deg);   } }
        @keyframes spinCCW     { to { transform: rotate(-360deg);  } }

        @keyframes pulseRing1 {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.75; }
          100% { transform: translate(-50%,-50%) scale(1.7); opacity: 0; }
        }
        @keyframes pulseRing2 {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.55; }
          100% { transform: translate(-50%,-50%) scale(1.9); opacity: 0; }
        }

        @keyframes idlePulse {
          0%,100% { box-shadow: 0 0 0 0px rgba(20,60,130,0.18), 0 4px 20px rgba(0,0,0,0.08); }
          50%     { box-shadow: 0 0 0 8px rgba(20,60,130,0.10), 0 4px 20px rgba(0,0,0,0.08); }
        }

        @keyframes hubGlow {
          0%,100% { box-shadow: 0 0 0 9px  rgba(200,169,110,0.18), 0 0 0 20px rgba(200,169,110,0.07), 0 14px 38px rgba(0,0,0,0.42); }
          50%     { box-shadow: 0 0 0 15px rgba(200,169,110,0.28), 0 0 0 28px rgba(200,169,110,0.11), 0 14px 38px rgba(0,0,0,0.42); }
        }

        /* slide-in panel */
        @keyframes panelIn_fwd {
          from { opacity:0; transform: translateX(36px) scale(0.98); }
          to   { opacity:1; transform: translateX(0)    scale(1);    }
        }
        @keyframes panelIn_back {
          from { opacity:0; transform: translateX(-36px) scale(0.98); }
          to   { opacity:1; transform: translateX(0)     scale(1);    }
        }

        /* section entry */
        @keyframes sectionFadeUp {
          from { opacity:0; transform: translateY(48px); }
          to   { opacity:1; transform: translateY(0);    }
        }

        /* bounce scroll hint */
        @keyframes bounceY {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%     { transform: translateX(-50%) translateY(7px); }
        }

        /* icon spin on hover */
        @keyframes iconSpin {
          from { transform: rotate(0deg) scale(1.15); }
          to   { transform: rotate(360deg) scale(1.15); }
        }

        /* shimmer ring sweep */
        @keyframes shimmerRing {
          0%   { stroke-dashoffset: 314; opacity:1; }
          80%  { stroke-dashoffset: 0;   opacity:0.6; }
          100% { stroke-dashoffset: 0;   opacity:0; }
        }

        /* point item fade in */
        @keyframes pointIn {
          from { opacity:0; transform: translateX(20px); }
          to   { opacity:1; transform: translateX(0); }
        }

        /* ── Circle button ── */
        .sp-circ {
          transition:
            transform   0.42s cubic-bezier(0.34,1.56,0.64,1),
            box-shadow  0.36s ease,
            background  0.32s ease,
            border-color 0.32s ease;
        }
        .sp-circ:hover {
          transform: translate(-50%,-50%) scale(1.20) !important;
        }
        .sp-circ:hover .sp-icon { animation: iconSpin 0.6s ease forwards; }

        /* ── Progress bar ── */
        .sp-progress-bar { transition: width 0.12s linear; }

        /* ── Responsive ── */
        @media (max-width:1020px) {
          .sp-grid { grid-template-columns:1fr !important; gap:36px !important; }
        }
        @media (max-width:620px) {
          .sp-wheel-inner, .sp-wheel-svg { width:360px !important; height:360px !important; }
        }
      `}</style>

      {/* ── Tall wrapper (6 × 100vh) ── */}
      <div
        ref={wrapperRef}
        id="services"
        style={{ height: `${SERVICES.length * 100}vh`, position: 'relative' }}
      >
        {/* ── Sticky viewport ── */}
        <div style={{
          position: 'sticky', top: 0,
          height: '100vh', overflow: 'hidden',
          background: '#f4f5f7',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>

          {/* ── Top multi-colour progress bar ── */}
          <div style={{ position:'absolute', top:0, left:0, right:0, height:5, background:'rgba(20,60,130,0.10)', zIndex:20 }}>
            <div className="sp-progress-bar" style={{
              height: '100%',
              width: `${((active + scrollPct) / SERVICES.length) * 100}%`,
              background: 'linear-gradient(90deg, #143c82 0%, #c8a96e 100%)',
              borderRadius: '0 3px 3px 0',
              boxShadow: '0 0 8px rgba(200,169,110,0.5)',
            }} />
          </div>

          <div className="container" style={{ padding: '0 40px' }}>

            {/* Header */}
            <div style={{ textAlign:'center', marginBottom:36 }}>
              <span className="section-label">What We Do</span>
              <h2 style={{
                fontSize:'clamp(24px,3.2vw,42px)', fontWeight:900,
                lineHeight:1.08, letterSpacing:-1.2, color:'#080f1e', marginBottom:10,
              }}>Our 6 Financial Pillars</h2>
              <div style={{ width:50, height:3, background:'#c8a96e', margin:'0 auto', borderRadius:2 }} />
            </div>

            {/* ── Body grid ── */}
            <div className="sp-grid" style={{
              display:'grid', gridTemplateColumns:'1fr 1fr',
              gap:56, alignItems:'center',
            }}>

              {/* ═══════ WHEEL ═══════ */}
              <div style={{ display:'flex', justifyContent:'center' }}>
                <div className="sp-wheel-inner" style={{
                  position:'relative', width:WHEEL_SIZE, height:WHEEL_SIZE, flexShrink:0,
                }}>

                  {/* SVG layer */}
                  <svg className="sp-wheel-svg"
                    width={WHEEL_SIZE} height={WHEEL_SIZE}
                    viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
                    style={{ position:'absolute', inset:0, pointerEvents:'none' }}
                  >
                    {/* Outer dashed CW ring */}
                    <g style={{ transformOrigin:`${CENTER}px ${CENTER}px`, animation:'spinCW 34s linear infinite' }}>
                      <circle cx={CENTER} cy={CENTER} r={CENTER-10}
                        fill="none" stroke="rgba(20,60,130,0.18)" strokeWidth="2" strokeDasharray="14 10" />
                    </g>

                    {/* Orbit track */}
                    <circle cx={CENTER} cy={CENTER} r={RADIUS}
                      fill="none" stroke="rgba(20,60,130,0.13)" strokeWidth="1.5" />

                    {/* Outer-mid gold thin ring */}
                    <circle cx={CENTER} cy={CENTER} r={RADIUS + CIRCLE_SIZE/2 + 10}
                      fill="none" stroke="rgba(200,169,110,0.15)" strokeWidth="1" strokeDasharray="5 9" />

                    {/* Inner CCW ring */}
                    <g style={{ transformOrigin:`${CENTER}px ${CENTER}px`, animation:'spinCCW 22s linear infinite' }}>
                      <circle cx={CENTER} cy={CENTER} r={100}
                        fill="none" stroke="rgba(20,60,130,0.14)" strokeWidth="1.5" strokeDasharray="6 9" />
                    </g>

                    {/* Connector lines */}
                    {SERVICES.map((s) => {
                      const rad = toRad(s.angle);
                      const x2  = CENTER + RADIUS * Math.cos(rad);
                      const y2  = CENTER + RADIUS * Math.sin(rad);
                      return (
                        <ConnectorLine key={s.id}
                          x1={CENTER} y1={CENTER} x2={x2} y2={y2}
                          active={active === s.id}
                        />
                      );
                    })}

                    {/* Mid-connector dots */}
                    {SERVICES.map((s) => {
                      const rad = toRad(s.angle);
                      const dr  = RADIUS - CIRCLE_SIZE/2 - 12;
                      const x   = CENTER + dr * Math.cos(rad);
                      const y   = CENTER + dr * Math.sin(rad);
                      const isA = active === s.id;
                      return (
                        <circle key={`d${s.id}`} cx={x} cy={y}
                          r={isA ? 5.5 : 3}
                          fill={isA ? '#c8a96e' : 'rgba(20,60,130,0.30)'}
                          style={{ transition:'all 0.5s cubic-bezier(0.34,1.56,0.64,1)' }}
                        />
                      );
                    })}

                    {/* Scroll-progress arc on active circle */}
                    {(() => {
                      const s   = SERVICES[active];
                      const rad = toRad(s.angle);
                      const cx  = CENTER + RADIUS * Math.cos(rad);
                      const cy  = CENTER + RADIUS * Math.sin(rad);
                      return <ScrollArc cx={cx} cy={cy} r={CIRCLE_SIZE/2 + 10} progress={scrollPct} />;
                    })()}

                    {/* Shimmer ring on hovered circle */}
                    {hovered !== null && hovered !== active && (() => {
                      const s   = SERVICES[hovered];
                      const rad = toRad(s.angle);
                      const cx  = CENTER + RADIUS * Math.cos(rad);
                      const cy  = CENTER + RADIUS * Math.sin(rad);
                      const r   = CIRCLE_SIZE/2 + 8;
                      const c2  = 2 * Math.PI * r;
                      return (
                        <circle cx={cx} cy={cy} r={r}
                          fill="none" stroke="rgba(20,60,130,0.55)" strokeWidth="2.5"
                          strokeDasharray={c2} strokeDashoffset={c2}
                          key={`shimmer-${hovered}`}
                          style={{ animation:'shimmerRing 0.7s ease forwards', strokeLinecap:'round' }}
                        />
                      );
                    })()}
                  </svg>

                  {/* ── Centre hub ── */}
                  <div style={{
                    position:'absolute', left:CENTER, top:CENTER,
                    transform:'translate(-50%,-50%)',
                    width:110, height:110, borderRadius:'50%',
                    background:'linear-gradient(135deg,#0f2f68 0%,#080f1e 100%)',
                    border:'3.5px solid #c8a96e',
                    display:'flex', flexDirection:'column',
                    alignItems:'center', justifyContent:'center',
                    zIndex:10,
                    animation:'hubGlow 3.2s ease-in-out infinite',
                    padding: 10,
                  }}>
                    <img
                      src="/logo1.png"
                      alt="Carbone Partners"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)',
                      }}
                    />
                  </div>

                  {/* ── Service circles ── */}
                  {SERVICES.map((s) => {
                    const rad = toRad(s.angle);
                    const cx  = CENTER + RADIUS * Math.cos(rad);
                    const cy  = CENTER + RADIUS * Math.sin(rad);
                    const isA = active  === s.id;
                    const isH = hovered === s.id;


                    return (
                      <button key={s.id}
                        className="sp-circ"
                        onClick={() => { setPrev(active); setDir(s.id > active ? 1 : -1); setPanelKey(k=>k+1); setActive(s.id); }}
                        onMouseEnter={() => setHovered(s.id)}
                        onMouseLeave={() => setHovered(null)}
                        aria-label={s.title}
                        style={{
                          position:'absolute', left:cx, top:cy,
                          transform:`translate(-50%,-50%) scale(${isA ? 1.17 : 1})`,
                          width:CIRCLE_SIZE, height:CIRCLE_SIZE, borderRadius:'50%',
                          background: isA
                            ? `linear-gradient(135deg,${s.color} 0%,#080f1e 100%)`
                            : '#fff',
                          border: isA
                            ? `3.5px solid ${s.color}`
                            : isH
                              ? '3.5px solid #143c82'
                              : '3px solid rgba(20,60,130,0.48)',
                          display:'flex', flexDirection:'column',
                          alignItems:'center', justifyContent:'center',
                          gap:7, cursor:'pointer', outline:'none', padding:0,
                          zIndex: isA ? 9 : isH ? 8 : 5,
                          boxShadow: isA
                            ? `0 0 0 9px rgba(20,60,130,0.20), 0 0 0 18px rgba(20,60,130,0.08), 0 18px 44px rgba(20,60,130,0.48)`
                            : isH
                              ? '0 0 0 7px rgba(20,60,130,0.16), 0 14px 34px rgba(20,60,130,0.30)'
                              : '0 4px 22px rgba(0,0,0,0.10)',
                          animation: !isA && !isH ? 'idlePulse 3.2s ease-in-out infinite' : 'none',
                          animationDelay:`${s.id * 0.44}s`,
                        }}
                      >
                        {/* Service image */}
                        <span className="sp-icon" style={{ display:'flex', alignItems:'center', justifyContent:'center', transition:'transform 0.3s ease' }}>
                          <img
                            src={s.img}
                            alt={s.title}
                            style={{
                              width: isA ? 46 : 40,
                              height: isA ? 46 : 40,
                              objectFit: 'contain',
                              transition: 'all 0.3s ease',
                              filter: isA ? 'brightness(0) invert(1)' : 'none',
                            }}
                          />
                        </span>

                        {/* Label — slides up slightly on hover via transform */}
                        <span style={{
                          fontSize:9.5, fontWeight:800, letterSpacing:0.7,
                          textTransform:'uppercase', textAlign:'center', lineHeight:1.25,
                          color: isA ? '#fff' : '#080f1e',
                          transition:'all 0.3s ease',
                          padding:'0 8px',
                          transform: isH && !isA ? 'translateY(-2px)' : 'none',
                        }}>{s.title}</span>

                        {/* Hover pulse rings */}
                        {isH && !isA && (
                          <>
                            <div style={{
                              position:'absolute', left:'50%', top:'50%',
                              width:CIRCLE_SIZE+14, height:CIRCLE_SIZE+14, borderRadius:'50%',
                              border:'2.5px solid rgba(20,60,130,0.40)',
                              animation:'pulseRing1 1.0s ease-out infinite',
                              pointerEvents:'none',
                            }} />
                            <div style={{
                              position:'absolute', left:'50%', top:'50%',
                              width:CIRCLE_SIZE+14, height:CIRCLE_SIZE+14, borderRadius:'50%',
                              border:'1.5px solid rgba(20,60,130,0.24)',
                              animation:'pulseRing2 1.0s ease-out 0.42s infinite',
                              pointerEvents:'none',
                            }} />
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ═══════ DETAIL PANEL ═══════ */}
              <div
                key={panelKey}
                style={{
                  animation: dir >= 0
                    ? 'panelIn_fwd  0.48s cubic-bezier(0.34,1.46,0.64,1) both'
                    : 'panelIn_back 0.48s cubic-bezier(0.34,1.46,0.64,1) both',
                }}
              >
                {/* Counter */}
                <div style={{
                  fontSize:11, fontWeight:800, letterSpacing:3.5,
                  textTransform:'uppercase', color:'#c8a96e', marginBottom:12,
                }}>
                  {String(activeService.id+1).padStart(2,'0')} / {String(SERVICES.length).padStart(2,'0')}
                </div>

                <h3 style={{
                  fontSize:'clamp(30px,3.6vw,54px)', fontWeight:900,
                  lineHeight:1.04, letterSpacing:-1, color:'#080f1e', marginBottom:14,
                }}>{activeService.title}</h3>

                {/* Animated underline */}
                <div style={{
                  width:56, height:4, background:'#c8a96e',
                  marginBottom:26, borderRadius:2,
                  animation:'panelIn_fwd 0.6s 0.1s ease both',
                }} />

                <p style={{ fontSize:15.5, lineHeight:1.90, color:'#464650', marginBottom:34 }}>
                  {activeService.desc}
                </p>

                {/* Points */}
                <ul style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:40 }}>
                  {activeService.points.map((pt, pi) => {
                    const label = typeof pt === 'string' ? pt : pt.text;
                    const href  = typeof pt === 'object' && pt.link ? pt.link : null;
                    return (
                      <li key={label} style={{
                        display:'flex', alignItems:'center', gap:14,
                        animation:'pointIn 0.45s ease both',
                        animationDelay:`${0.12 + pi * 0.07}s`,
                      }}>
                        <div style={{
                          width:32, height:32, borderRadius:'50%',
                          background:'rgba(20,60,130,0.08)',
                          border:'1.5px solid rgba(20,60,130,0.25)',
                          display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                        }}>
                          <CheckCircle2 size={15} style={{ color:'#143c82' }} />
                        </div>
                        {href ? (
                          <a href={href} style={{
                            fontSize:14.5, color:'#143c82', fontWeight:700,
                            textDecoration:'underline', textUnderlineOffset:3,
                            display:'flex', alignItems:'center', gap:6, transition:'color 0.2s',
                          }}
                            onMouseEnter={e => e.currentTarget.style.color = '#0f2f68'}
                            onMouseLeave={e => e.currentTarget.style.color = '#143c82'}
                          >
                            {label} <ArrowRight size={13} />
                          </a>
                        ) : (
                          <span style={{ fontSize:14.5, color:'#464650', fontWeight:500 }}>{label}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <a href="#contact" className="btn-red" style={{
                  fontSize:12, letterSpacing:1.8,
                  display:'inline-flex', padding:'14px 32px',
                  animation:'pointIn 0.45s 0.42s ease both',
                }}>
                  Book Free Consult <ArrowRight size={16} />
                </a>

                {/* Dot stepper */}
                <div style={{ display:'flex', gap:10, marginTop:34, alignItems:'center' }}>
                  {SERVICES.map((s) => (
                    <button key={s.id}
                      onClick={() => { setDir(s.id>active?1:-1); setPanelKey(k=>k+1); setActive(s.id); }}
                      style={{
                        width: active===s.id ? 34 : 10, height:10, borderRadius:5,
                        background: active===s.id ? '#143c82' : 'rgba(20,60,130,0.24)',
                        border:'none', cursor:'pointer',
                        transition:'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                        boxShadow: active===s.id ? '0 0 8px rgba(20,60,130,0.40)' : 'none',
                      }}
                    />
                  ))}
                </div>

                {/* Scroll progress mini text */}
                <div style={{
                  marginTop:18, fontSize:10, fontWeight:700, letterSpacing:2,
                  textTransform:'uppercase', color:'rgba(70,70,80,0.40)',
                }}>
                  {Math.round(((active + scrollPct) / SERVICES.length) * 100)}% explored
                </div>
              </div>
            </div>
          </div>

          {/* ── Scroll-down hint ── */}
          {!isLast && (
            <div style={{
              position:'absolute', bottom:20, left:'50%',
              animation:'bounceY 1.8s ease-in-out infinite',
              display:'flex', flexDirection:'column', alignItems:'center', gap:5,
              opacity:0.45,
            }}>
              <span style={{ fontSize:9, letterSpacing:2.5, textTransform:'uppercase', color:'#464650', fontWeight:700 }}>scroll</span>
              <ChevronDown size={18} color="#464650" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicesPillar;
