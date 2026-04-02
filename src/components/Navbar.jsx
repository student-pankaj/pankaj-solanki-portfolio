import { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Active section detection
      const sections = links.map(l => document.getElementById(l.toLowerCase())).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= sections[i].offsetTop - 200) {
          setActive(links[i].toLowerCase());
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(5,5,16,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        padding: scrolled ? '14px 0' : '24px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span style={{
            fontSize: '1.5rem', fontWeight: 900,
            background: 'linear-gradient(135deg, #0ff0c0, #3b82f6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>PS.</span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => {
            const isActive = active === l.toLowerCase();
            return (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.875rem', fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#0ff0c0' : '#94a3b8',
                  transition: 'color 0.2s',
                  position: 'relative', padding: '4px 0',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {l}
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: -4, left: 0, right: 0,
                    height: 2, background: 'linear-gradient(90deg, #0ff0c0, #3b82f6)',
                    borderRadius: 2,
                  }} />
                )}
              </button>
            );
          })}
          <button className="btn-primary" onClick={() => scrollTo('contact')} style={{ fontSize: '0.8rem', padding: '8px 20px' }}>
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(v => !v)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }} className="mobile-menu-btn">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass" style={{ position: 'absolute', top: '100%', left: 0, right: 0, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e2e8f0', textAlign: 'left', padding: '8px 0', fontFamily: 'Inter, sans-serif' }}>
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
