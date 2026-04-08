import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Home, Clock, ChevronRight } from 'lucide-react';
import servicesHeroBg from '../assets/services-hero.png';

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
    backgroundImage: `url(${servicesHeroBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex', alignItems: 'center',
    overflow: 'hidden', paddingTop: 90, paddingBottom: 60
  }}>
    {/* Dark Overlay for readability */}
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,15,30,0.92) 0%, rgba(12,26,54,0.85) 55%, rgba(15,35,71,0.25) 100%)', zIndex: 1 }} />
    
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: 'linear-gradient(180deg,#c8a96e,#b8924e)', zIndex: 2 }} />
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)`, backgroundSize: '60px 60px', zIndex: 2 }} />
    <div style={{ position: 'absolute', right: -60, top: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(20,60,130,0.22) 0%,transparent 70%)', pointerEvents: 'none', zIndex: 2 }} />

    <div className="container" style={{ position: 'relative', zIndex: 3, padding: '60px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
          <Home size={12} /> Home
        </button>
        <ChevronRight size={11} color="rgba(255,255,255,0.3)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c8a96e' }}>Contact Us</span>
      </div>

      <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, lineHeight: 1, letterSpacing: -2, color: '#fff', marginBottom: 24 }}>
        Let's Connect <br/> & <span style={{ color: '#c8a96e' }}>Collaborate.</span>
      </h1>
      <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.6)', maxWidth: 650, lineHeight: 1.6, marginBottom: 0 }}>
        Partner with a firm that values your success as much as you do. Reach out to our expert team today!
      </p>
    </div>
  </section>
);

const OfficeCard = ({ title, address, phone, email, icon: Icon, delay }) => (
  <Reveal delay={delay}>
    <div style={{ 
      background: '#fff', padding: 40, borderRadius: 20, 
      boxShadow: '0 10px 40px rgba(0,0,0,0.05)', height: '100%',
      border: '1px solid rgba(0,0,0,0.03)',
      transition: 'transform 0.3s ease'
    }} className="office-card">
      <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(20,60,130,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
        <Icon size={24} color="#143c82" />
      </div>
      <h3 style={{ fontSize: 24, fontWeight: 800, color: '#080f1e', marginBottom: 20 }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <MapPin size={18} color="#c8a96e" style={{ marginTop: 3, flexShrink: 0 }} />
          <p style={{ fontSize: 15, color: '#666', margin: 0, lineHeight: 1.5 }}>{address}</p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Phone size={18} color="#c8a96e" style={{ flexShrink: 0 }} />
          <a href={`tel:${phone}`} style={{ fontSize: 15, color: '#1e3a5f', fontWeight: 600, textDecoration: 'none' }}>{phone}</a>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Mail size={18} color="#c8a96e" style={{ flexShrink: 0 }} />
          <a href={`mailto:${email}`} style={{ fontSize: 15, color: '#1e3a5f', fontWeight: 600, textDecoration: 'none' }}>{email}</a>
        </div>
      </div>
    </div>
  </Reveal>
);

const ContactPage = ({ onBack }) => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We'll get back to you shortly!");
  };

  return (
    <div style={{ background: '#fdfdfd' }}>
      <PageHero onBack={onBack} />
      
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'start' }}>
            
            {/* Contact Form Column */}
            <Reveal>
              <div style={{ background: '#fff', padding: 50, borderRadius: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.04)' }}>
                <h2 style={{ fontSize: 32, fontWeight: 900, color: '#080f1e', marginBottom: 12 }}>Send a Message</h2>
                <p style={{ color: '#666', marginBottom: 40, fontSize: 16 }}>Use the form below to reach out, and we'll respond within 24 hours.</p>
                
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#143c82', marginBottom: 8 }}>Name</label>
                    <input type="text" required style={{ width: '100%', padding: '14px 18px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.1)', background: '#f8f9fa', fontSize: 15 }} placeholder="Your Name" />
                  </div>
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#143c82', marginBottom: 8 }}>Email</label>
                    <input type="email" required style={{ width: '100%', padding: '14px 18px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.1)', background: '#f8f9fa', fontSize: 15 }} placeholder="name@email.com" />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#143c82', marginBottom: 8 }}>Subject</label>
                    <input type="text" required style={{ width: '100%', padding: '14px 18px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.1)', background: '#f8f9fa', fontSize: 15 }} placeholder="How can we help?" />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#143c82', marginBottom: 8 }}>Message</label>
                    <textarea rows="5" required style={{ width: '100%', padding: '14px 18px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.1)', background: '#f8f9fa', fontSize: 15, resize: 'none' }} placeholder="Type your message here..."></textarea>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <button type="submit" style={{ width: '100%', background: '#143c82', color: '#fff', padding: '18px', borderRadius: 10, fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'all 0.3s' }} onMouseEnter={e => e.currentTarget.style.background = '#0f2f68'} onMouseLeave={e => e.currentTarget.style.background = '#143c82'}>
                      Send Message <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>

            {/* Information Column */}
            <div>
              <Reveal delay={0.1}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                  <OfficeCard 
                    title="Leederville (Head Office)"
                    address="Level 1, Suite 36/285 Vincent Street, Leederville, WA 6007"
                    phone="(08) 9409 3644"
                    email="admin@carbonepartners.com.au"
                    icon={Home}
                    delay={0.2}
                  />
                  <OfficeCard 
                    title="Wangara Office"
                    address="Suite 1/61 Buckingham Drive, Wangara, WA 6065"
                    phone="(08) 9409 3644"
                    email="admin@carbonepartners.com.au"
                    icon={MapPin}
                    delay={0.3}
                  />
                  
                  <Reveal delay={0.4}>
                    <div style={{ background: '#f8f9fa', padding: 32, borderRadius: 20, border: '1px dashed rgba(0,0,0,0.1)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                        <Clock size={20} color="#c8a96e" />
                        <h4 style={{ fontSize: 18, fontWeight: 800, color: '#080f1e', margin: 0 }}>Opening Hours</h4>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontSize: 14, color: '#666' }}>Monday - Friday</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#143c82' }}>9:00 AM - 5:00 PM</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 14, color: '#666' }}>Saturday - Sunday</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#c8a96e' }}>By Appointment</span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Abstract Diagram Section */}
      <section style={{ background: '#080f1e', padding: '100px 0', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)' }} />
        <div className="container" style={{ padding: '0 32px' }}>
          <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 900, marginBottom: 24 }}>Partnering for your <span style={{ color: '#c8a96e' }}>Success.</span></h2>
              <div style={{ width: 60, height: 4, background: '#c8a96e', margin: '0 auto 40px' }} />
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, lineHeight: 1.8 }}>
                At Carbone Partners, we believe in end-to-end solutions. From your first meeting to your long-term success, our team is with you every step of the way.
              </p>
            </Reveal>
          </div>
          
          {/* Decorative Diagram */}
          <div style={{ marginTop: 80, display: 'flex', justifyContent: 'center', position: 'relative' }}>
             <div style={{ 
               width: '100%', maxWidth: 900, height: 2, 
               background: 'linear-gradient(90deg, transparent, #c8a96e 50%, transparent)',
               position: 'relative'
             }}>
               {[
                 { label: 'Enquiry', pos: '0%' },
                 { label: 'Discovery', pos: '33%' },
                 { label: 'Implementation', pos: '66%' },
                 { label: 'Success', pos: '100%' }
               ].map((step, i) => (
                 <div key={i} style={{ position: 'absolute', left: step.pos, transform: 'translateX(-50%)', top: -10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                   <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#080f1e', border: '4px solid #c8a96e', marginBottom: 16 }}></div>
                   <span style={{ color: '#fff', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2 }}>{step.label}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <style>{`
        .office-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          border-color: rgba(200,169,110,0.2);
        }
        @media (max-width: 900px) {
          .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
