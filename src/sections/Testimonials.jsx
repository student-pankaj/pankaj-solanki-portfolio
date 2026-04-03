import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Akash Pandey',
    role: 'Founder & CEO',
    company: 'KodNest',
    content: 'Pankaj has a remarkable ability to grasp complex Full Stack concepts and apply them effectively. His commitment to building robust, enterprise-grade applications is truly commendable.',
    image: 'https://i.pravatar.cc/150?u=akash',
  },
  {
    name: 'Lata B Angadi',
    role: 'Software Engineer',
    company: 'Mavenir',
    content: 'A dedicated and technically sound developer. Pankaj’s work on the employee management tool at KodNest showcased his deep understanding of Spring Boot and MySQL optimizations.',
    image: 'https://i.pravatar.cc/150?u=lata',
  },
  {
    name: 'Akash G',
    role: 'System Engineer',
    company: 'Tavant',
    content: 'His problem-solving skills and attention to detail during our Java Full Stack training were top-notch. He consistently delivered high-quality results ahead of schedule.',
    image: 'https://i.pravatar.cc/150?u=akashg',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        zIndex: -1
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: 60, textAlign: 'center' }}>
            <p className="section-label" style={{ marginBottom: 12 }}>Testimonials</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
              What People <span className="gradient-text">Say</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 32
          }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass"
                style={{
                  padding: '40px',
                  borderRadius: 32,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  border: '1px solid rgba(255,255,255,0.06)'
                }}
              >
                <FaQuoteLeft style={{
                  fontSize: '2rem',
                  color: 'rgba(59, 130, 246, 0.3)',
                  position: 'absolute',
                  top: 24,
                  right: 24
                }} />

                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: '#94a3b8',
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 2
                }}>
                  "{t.content}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: '50%',
                    overflow: 'hidden', border: '2px solid rgba(59, 130, 246, 0.3)'
                  }}>
                    <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#f1f5f9' }}>{t.name}</h4>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>{t.role} • {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
