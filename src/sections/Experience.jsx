import { motion } from 'framer-motion';

const bullets = [
  'Developed and maintained backend logic for enterprise applications using Java and Spring Boot.',
  'Designed and implemented RESTful APIs consumed by React.js frontends.',
  'Managed relational databases (MySQL, PostgreSQL) — wrote optimized queries and handled migrations.',
  'Collaborated in Agile sprints, participated in code reviews, and reduced bug backlog by ~40%.',
  'Integrated third-party services and Java libraries to extend application functionality.',
];

export function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: 60 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>My Journey</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Timeline item */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
            {/* Timeline line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 6, flexShrink: 0 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'linear-gradient(135deg, #0ff0c0, #3b82f6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', boxShadow: '0 0 25px rgba(15,240,192,0.35)',
              }}>
                💼
              </div>
              <div style={{ width: 2, flex: 1, background: 'linear-gradient(to bottom, #0ff0c030, transparent)', marginTop: 12, minHeight: 40 }} />
            </div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass border-gradient-animate"
              style={{ borderRadius: 24, padding: '36px 40px', flex: 1 }}
            >
              {/* Header */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 6px', color: '#f1f5f9' }}>
                    Software Development Intern
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{
                      fontSize: '1rem', fontWeight: 700,
                      background: 'linear-gradient(135deg, #0ff0c0, #3b82f6)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>
                      Kodnest Technologies
                    </span>
                    <span style={{ color: '#475569', fontSize: '0.8rem' }}>· Bengaluru, India</span>
                  </div>
                </div>
                <span style={{
                  fontSize: '0.78rem', fontWeight: 600, padding: '6px 16px', borderRadius: 9999,
                  background: 'rgba(15,240,192,0.08)', border: '1px solid rgba(15,240,192,0.2)',
                  color: '#0ff0c0', whiteSpace: 'nowrap',
                }}>
                  Recent · Internship
                </span>
              </div>

              {/* Bullets */}
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
                  >
                    <span style={{
                      minWidth: 6, height: 6, borderRadius: '50%',
                      background: '#0ff0c0', marginTop: 8,
                      boxShadow: '0 0 8px #0ff0c0',
                    }} />
                    <span style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.7 }}>{b}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Skills used */}
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginRight: 12 }}>
                  Skills Used:
                </span>
                {['Java', 'Spring Boot', 'MySQL', 'Git', 'REST APIs', 'Agile'].map(s => (
                  <span key={s} style={{
                    fontSize: '0.75rem', padding: '3px 10px', borderRadius: 9999, marginRight: 6,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                    color: '#64748b',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
