import { motion } from 'framer-motion';

const highlights = [
  { icon: '🎓', label: 'B.Tech CSE Graduate' },
  { icon: '☕', label: 'Java & Spring Boot Expert' },
  { icon: '🚀', label: 'Full Stack Developer' },
  { icon: '🎯', label: 'Goal: Software Engineer @ Top Tech' },
];

export function About() {
  return (
    <section id="about" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: 60 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>Who I Am</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'start' }}>
            {/* Text block */}
            <div className="glass border-gradient-animate" style={{ padding: '40px', borderRadius: 24 }}>
              <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.9, margin: '0 0 20px' }}>
                I'm a passionate <strong style={{ color: '#e2e8f0' }}>B.Tech CSE graduate</strong> dedicated to building robust, scalable software solutions. My core expertise lies in{' '}
                <strong style={{ color: '#0ff0c0' }}>Java, Spring Boot, and backend architecture</strong>, with a strong foundation in modern frontend technologies.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.9, margin: 0 }}>
                I thrive at the intersection of clean code and real-world impact — whether it's designing RESTful APIs, optimizing databases, or crafting responsive UIs. My goal is to join a world-class team where I can grow and ship products that matter.
              </p>
            </div>

            {/* Highlights grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass"
                  style={{
                    borderRadius: 16, padding: '24px 20px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'default',
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{h.icon}</div>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, lineHeight: 1.5, fontWeight: 500 }}>{h.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
