import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaBriefcase } from 'react-icons/fa';

const roles = ['Java Full Stack Developer', 'Spring Boot Specialist', 'Backend Engineer', 'UI/UX Enthusiast'];

const stats = [
  { value: '10+', label: 'REST APIs Built' },
  { value: '6×', label: 'HackerRank Stars' },
  { value: '40%', label: 'Bug Backlog Reduced' },
];

function TypeWriter({ words }) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(i => i + 1), 60);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(i => i - 1), 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span>
      <span style={{ color: '#0ff0c0' }}>{display}</span>
      <span className="cursor" style={{ color: '#0ff0c0', marginLeft: 1 }}>|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '100px 24px 60px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div className="orb" style={{
        position: 'absolute', top: '15%', left: '10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(15,240,192,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div className="orb-2" style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 60,
          alignItems: 'center'
        }}>
          {/* Left Column: Text & Stats */}
          <div style={{ textAlign: 'left' }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24,
                background: 'rgba(15,240,192,0.08)', border: '1px solid rgba(15,240,192,0.25)',
                borderRadius: 9999, padding: '6px 16px',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0ff0c0', display: 'inline-block', boxShadow: '0 0 8px #0ff0c0' }} />
              <span style={{ fontSize: '0.8rem', color: '#0ff0c0', fontWeight: 500 }}>Available for new opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
            >
              Hi, I'm <br />
              <span className="gradient-text">Pankaj Solanki</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#94a3b8', marginBottom: 32, minHeight: '1.5em', fontWeight: 300 }}
            >
              <TypeWriter words={roles} />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: 16, justifyContent: 'flex-start', flexWrap: 'wrap', marginBottom: 48 }}
            >
              <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <a href="/Pankaj_Solanki_Resume.pdf" className="btn-outline" download="Pankaj_Solanki_Resume.pdf">
                Download Resume
              </a>
              <button className="btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ display: 'flex', gap: 16, justifyContent: 'flex-start', flexWrap: 'wrap' }}
            >
              {stats.map((s) => (
                <div key={s.label} className="glass stat-card" style={{
                  borderRadius: 12, padding: '12px 20px', minWidth: 110, textAlign: 'left',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#e2e8f0' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: 2, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Photo Redesign */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}
          >
            {/* Concentric Decorative Rings */}
            {[
              { size: '105%', border: '1px dashed rgba(15,240,192,0.15)', duration: 25 },
              { size: '120%', border: '1px solid rgba(15,240,192,0.05)', duration: 35 },
              { size: '140%', border: '1px dashed rgba(139,92,246,0.1)', duration: 45 },
            ].map((ring, idx) => (
              <motion.div
                key={idx}
                animate={{ rotate: 360 }}
                transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  width: ring.size,
                  height: ring.size,
                  borderRadius: '50%',
                  border: ring.border,
                  pointerEvents: 'none',
                }}
              />
            ))}

            {/* Main Circular Photo Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 'min(360px, 75vw)',
                height: 'min(360px, 75vw)',
                borderRadius: '50%',
                padding: 12,
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(15,240,192,0.2), rgba(139,92,246,0.2))',
                boxShadow: '0 0 40px rgba(15,240,192,0.1)',
                zIndex: 2,
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#0a0a1a',
                border: '4px solid #050510',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
              }}>
                <img
                  src="/pankaj.jpg"
                  alt="Pankaj Solanki"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Badge 1: HackerRank */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="glass badge-certified"
                style={{
                  position: 'absolute', top: '10%', right: '-10%',
                  padding: '12px 18px', borderRadius: 16,
                  display: 'flex', alignItems: 'center', gap: 12,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  zIndex: 10,
                }}
              >
                <div style={{ 
                  width: 36, height: 36, borderRadius: 10, background: 'rgba(255,193,7,0.1)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffc107' 
                }}>
                  <FaTrophy size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0' }}>6× Certified</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 500 }}>HackerRank</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Experience */}
              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="glass badge-experience"
                style={{
                  position: 'absolute', bottom: '15%', left: '-10%',
                  padding: '12px 18px', borderRadius: 16,
                  display: 'flex', alignItems: 'center', gap: 12,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  zIndex: 10,
                }}
              >
                <div style={{ 
                  width: 36, height: 36, borderRadius: 10, background: 'rgba(15,240,192,0.1)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ff0c0' 
                }}>
                  <FaBriefcase size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0' }}>10 Months</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 500 }}>Industry Experience</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <span style={{ fontSize: '0.7rem', color: '#475569', letterSpacing: '0.1em' }}>SCROLL</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #0ff0c0, transparent)' }} />
        </motion.div>
      </div>
    </section>
  );
}
