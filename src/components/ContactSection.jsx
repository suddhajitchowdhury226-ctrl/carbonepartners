import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const topics = [
  'Select a Service',
  'Accounting & Tax',
  'Wealth Planning',
  'Superannuation / SMSF',
  'Finance & Loans',
  'Insurance',
  'Bookkeeping & Payroll',
  'General Enquiry',
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', topic: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', email: '', topic: '', message: '' });
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.15)',
    color: '#fff',
    padding: '13px 16px',
    fontSize: 13.5,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    outline: 'none',
    transition: 'border 0.2s ease',
    appearance: 'none',
    WebkitAppearance: 'none',
  };

  return (
    <section id="contact" style={{
      background: '#080f1e',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Geometric accent – top right */}
      <div style={{
        position: 'absolute', right: -60, top: -60,
        opacity: 0.06, pointerEvents: 'none',
      }}>
        <svg viewBox="0 0 360 360" width="360" fill="none">
          <polygon points="180,10 350,180 180,350 10,180" fill="#143c82"/>
          <polygon points="180,60 300,180 180,300 60,180" stroke="#143c82" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: 80,
          alignItems: 'start',
        }}>

          {/* LEFT – heading + info */}
          <div>
            <span className="section-label-white">Contact Us</span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 900, color: '#fff',
              lineHeight: 1.1, letterSpacing: -1,
              marginBottom: 24,
            }}>
              Let's Manage Your<br />
              <span style={{ color: '#c8a96e' }}>Success</span> Together
            </h2>
            <div style={{ width: 48, height: 3, background: '#c8a96e', marginBottom: 28 }} />
            <p style={{
              fontSize: 14.5, lineHeight: 1.85,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: 44,
            }}>
              Ready to take control of your financial future? Book a free consultation and discover how Carbone Partners can tailor a complete financial strategy for you.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { Icon: Phone, label: 'Phone', value: '(08) 9409 3644', href: 'tel:0894093644' },
                { Icon: Mail, label: 'Email', value: 'admin@carbonepartners.com.au', href: 'mailto:admin@carbonepartners.com.au' },
                { Icon: MapPin, label: 'Address', value: 'Level 1, Suite 36/285 Vincent Street\nLeederville WA 6007', href: null },
              ].map(({ Icon, label, value, href }, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 42, height: 42, background: '#143c82', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={17} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontSize: 13.5, color: '#fff', fontWeight: 500, whiteSpace: 'pre-line' }}>{value}</a>
                    ) : (
                      <div style={{ fontSize: 13.5, color: '#fff', fontWeight: 500, whiteSpace: 'pre-line' }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Contact form */}
          <div style={{
            background: '#0c1a36',
            padding: '48px 40px',
            borderTop: '3px solid #c8a96e',
          }}>
            {sent ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 0',
                color: '#fff',
              }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                  We'll be in touch within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Full Name *</label>
                    <input
                      type="text" name="name" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your Name"
                      style={{ ...inputStyle }}
                      onFocus={e => e.target.style.borderColor = '#143c82'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Phone *</label>
                    <input
                      type="tel" name="phone" required
                      value={form.phone} onChange={handleChange}
                      placeholder="Your Phone"
                      style={{ ...inputStyle }}
                      onFocus={e => e.target.style.borderColor = '#143c82'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Email Address *</label>
                  <input
                    type="email" name="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    style={{ ...inputStyle }}
                    onFocus={e => e.target.style.borderColor = '#143c82'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Topic</label>
                  <select
                    name="topic"
                    value={form.topic} onChange={handleChange}
                    style={{ ...inputStyle, color: form.topic ? '#fff' : 'rgba(255,255,255,0.4)' }}
                    onFocus={e => e.target.style.borderColor = '#143c82'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                  >
                    {topics.map((t, i) => (
                      <option key={i} value={i === 0 ? '' : t}
                        style={{ background: '#0c1a36', color: '#fff' }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Message</label>
                  <textarea
                    name="message"
                    value={form.message} onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                    onFocus={e => e.target.style.borderColor = '#143c82'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                  />
                </div>

                <button type="submit" className="btn-red" style={{ width: '100%', justifyContent: 'center', fontSize: 12, letterSpacing: 1.5, padding: '15px 24px' }}>
                  Send Message
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #contact form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
