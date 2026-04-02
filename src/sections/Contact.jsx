import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const contactCards = [
  {
    icon: <FaEnvelope size={22} />,
    label: 'Email',
    value: 'dev.pankajsolanki@gmail.com',
    href: 'mailto:dev.pankajsolanki@gmail.com',
    accent: '#0ff0c0',
  },
  {
    icon: <FaLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/PankajSolanki',
    href: 'https://linkedin.com/in/PankajSolanki',
    accent: '#3b82f6',
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    value: 'github.com/PankajSolanki',
    href: 'https://github.com/PankajSolanki',
    accent: '#8b5cf6',
  },
  {
    icon: <FaMapMarkerAlt size={22} />,
    label: 'Location',
    value: 'Bengaluru, Karnataka, India',
    href: null,
    accent: '#f97316',
  },
];

export function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Debug check for environmental variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS: One or more environment variables (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY) are missing in .env");
      setStatus('error');
      return;
    }

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        formRef.current, 
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      
      console.log('EmailJS Success:', result.text);
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS Error Details:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background orb */}
      <div style={{
        position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(15,240,192,0.06), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: 60, textAlign: 'center' }}>
            <p className="section-label" style={{ marginBottom: 12 }}>Let's Talk</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p style={{ color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              I'm actively looking for new opportunities. Drop me a message and I'll get back to you as soon as possible!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'stretch' }}>

            {/* Left — contact info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {contactCards.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass group"
                  style={{ borderRadius: 16, padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: c.accent + '15', color: c.accent,
                    border: `1px solid ${c.accent}30`,
                    transition: 'all 0.3s ease',
                  }}>
                    {c.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                      {c.label}
                    </div>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                        style={{ fontSize: '0.95rem', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = c.accent}
                        onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.95rem', color: '#94a3b8' }}>{c.value}</span>
                    )}
                  </div>
                  {c.label === 'Email' && (
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(c.value);
                        const btn = document.getElementById('copy-toast');
                        if (btn) {
                          btn.style.opacity = '1';
                          setTimeout(() => btn.style.opacity = '0', 2000);
                        }
                      }}
                      style={{ 
                        background: 'none', border: 'none', cursor: 'pointer', color: '#475569',
                        padding: 8, borderRadius: 8, transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                      onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                      title="Copy Email"
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    </button>
                  )}
                  {c.label === 'Email' && (
                    <div id="copy-toast" style={{
                      position: 'absolute', top: -10, right: 28, background: '#0ff0c0', color: '#000',
                      fontSize: '0.65rem', fontWeight: 700, padding: '4px 8px', borderRadius: 4,
                      opacity: 0, transition: 'opacity 0.3s', pointerEvents: 'none'
                    }}>
                      COPIED!
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Availability Status Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass border-gradient-animate"
                style={{ borderRadius: 20, padding: '24px 28px', marginTop: 0, textAlign: 'left', flex: 1 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ 
                    width: 10, height: 10, borderRadius: '50%', background: '#10b981', 
                    boxShadow: '0 0 12px #10b981', display: 'inline-block' 
                  }} />
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0' }}>Currently Available</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                  I'm currently open to new opportunities and exciting projects. 
                  Whether you need a full-time engineer or a freelance consultant, let's talk!
                </p>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass"
              style={{ borderRadius: 24, padding: '40px 36px', height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 28px', color: '#e2e8f0' }}>Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'Your Name', name: 'from_name', type: 'text', placeholder: 'Pankaj Solanki' },
                  { label: 'Your Email', name: 'reply_to', type: 'email', placeholder: 'hello@example.com' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type} name={f.name} required placeholder={f.placeholder}
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12,
                        padding: '12px 16px', color: '#e2e8f0', fontSize: '0.9rem',
                        outline: 'none', transition: 'border-color 0.2s', fontFamily: 'Inter, sans-serif',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = '#0ff0c050'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Message
                  </label>
                  <textarea
                    name="message" required rows={5} placeholder="Tell me about your project or opportunity..."
                    style={{
                      width: '100%', background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12,
                      padding: '12px 16px', color: '#e2e8f0', fontSize: '0.9rem',
                      outline: 'none', resize: 'none', transition: 'border-color 0.2s',
                      fontFamily: 'Inter, sans-serif', boxSizing: 'border-box',
                    }}
                    onFocus={e => e.target.style.borderColor = '#0ff0c050'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>

                <button
                  type="submit" disabled={status === 'sending'}
                  className="btn-primary"
                  style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>

                {status === 'success' && (
                  <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 10, padding: '12px 16px', color: '#10b981', fontSize: '0.85rem' }}>
                    ✅ Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '12px 16px', color: '#ef4444', fontSize: '0.85rem' }}>
                    ❌ Something went wrong. Please try again or email me directly.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
