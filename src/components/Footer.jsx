import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 24px',
      background: 'rgba(0,0,0,0.4)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        {/* Logo */}
        <span style={{
          fontSize: '1.8rem', fontWeight: 900,
          background: 'linear-gradient(135deg, #0ff0c0, #3b82f6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          Pankaj.
        </span>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(l => (
            <button key={l} onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#475569', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { href: 'https://github.com/PankajSolanki', icon: <FaGithub size={20} />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/PankajSolanki', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
            { href: 'mailto:pankaj@example.com', icon: <FaEnvelope size={20} />, label: 'Email' },
          ].map(s => (
            <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={s.label}
              style={{
                width: 44, height: 44, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                color: '#475569', textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#0ff0c0'; e.currentTarget.style.borderColor = 'rgba(15,240,192,0.3)'; e.currentTarget.style.background = 'rgba(15,240,192,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.04)' }} />

        {/* Copyright */}
        <p style={{ fontSize: '0.8rem', color: '#334155', margin: 0, textAlign: 'center' }}>
          Designed &amp; Built by{' '}
          <span style={{ color: '#475569', fontWeight: 600 }}>Pankaj Solanki</span>
          {' '}· © {year} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
