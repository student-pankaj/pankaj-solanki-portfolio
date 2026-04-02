import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export function Resume() {
  return (
    <section id="resume" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass border-gradient-animate"
          style={{
            borderRadius: 28, padding: '60px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Background glow blobs */}
          <div style={{
            position: 'absolute', top: '-40%', right: '-10%', width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(15,240,192,0.12), transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-40%', left: '-10%', width: 280, height: 280,
            background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ 
              width: 80, height: 80, borderRadius: 20, background: 'rgba(255,255,255,0.03)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem',
              margin: '0 auto 24px', border: '1px solid rgba(255,255,255,0.08)'
            }}>
              📄
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em', color: '#f8fafc' }}>
              Want to see the full story?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.7 }}>
              Get a complete overview of my software engineering skills, professional experience, and academic background in one page.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/Pankaj_Solanki_Resume.pdf" download="Pankaj_Solanki_Resume.pdf" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                <FaDownload />
                Download Resume
              </a>
              <a href="/Pankaj_Solanki_Resume.pdf" target="_blank" rel="noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                View in Browser
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
