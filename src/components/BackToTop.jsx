import { useState, useEffect } from 'react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 200,
        width: 48, height: 48, borderRadius: '50%', border: 'none', cursor: 'pointer',
        background: 'linear-gradient(135deg, #0ff0c0, #3b82f6)',
        color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 24px rgba(15,240,192,0.4)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        animation: 'fadeIn 0.3s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
    >
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </button>
  );
}
