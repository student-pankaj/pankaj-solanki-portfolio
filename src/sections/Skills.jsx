import { motion } from 'framer-motion';
import { FaJava, FaJs, FaReact, FaHtml5, FaCss3, FaDatabase, FaGitAlt } from 'react-icons/fa';

const coreSkills = [
  { name: 'Java', icon: <FaJava />, color: '#f89820', pct: 90 },
  { name: 'Spring Boot', icon: '🍃', color: '#6db33f', pct: 85 },
  { name: 'React.js', icon: <FaReact />, color: '#61dafb', pct: 75 },
  { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', pct: 80 },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26', pct: 90 },
  { name: 'CSS3', icon: <FaCss3 />, color: '#264de4', pct: 80 },
  { name: 'PostgreSQL', icon: <FaDatabase />, color: '#336791', pct: 75 },
  { name: 'Git', icon: <FaGitAlt />, color: '#f1502f', pct: 88 },
];

const tags = [
  'Hibernate', 'REST API', 'Microservices', 'Docker', 'AWS',
  'Maven', 'Jenkins', 'MySQL', 'Oracle DB', 'JUnit', 'Agile / Scrum',
];

function SkillBar({ name, pct, color, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{ marginBottom: 20 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.2rem', color }}>{typeof icon === 'string' ? icon : icon}</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0' }}>{name}</span>
        </div>
        <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>{pct}%</span>
      </div>
      <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 99, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.07, ease: 'easeOut' }}
          style={{
            height: '100%', borderRadius: 99,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 10px ${color}66`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: 60 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>What I Work With</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
            {/* Skill bars */}
            <div className="glass" style={{ borderRadius: 24, padding: '36px 32px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0ff0c0', marginBottom: 28, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Core Technologies
              </h3>
              {coreSkills.map((s, i) => (
                <SkillBar key={s.name} {...s} index={i} />
              ))}
            </div>

            {/* Also Familiar with */}
            <div>
              <div className="glass" style={{ borderRadius: 24, padding: '36px 32px', marginBottom: 24 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0ff0c0', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Also Familiar With
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="tag-pill"
                      style={{
                        fontSize: '0.8rem', fontWeight: 500,
                        padding: '6px 14px', borderRadius: 9999,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#94a3b8', cursor: 'default',
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Quick fact card */}
              <div className="glass border-gradient-animate" style={{ borderRadius: 24, padding: '28px 32px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 12 }}>⚡</div>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0, lineHeight: 1.7 }}>
                  Constantly learning — currently exploring <strong style={{ color: '#e2e8f0' }}>System Design</strong>, <strong style={{ color: '#e2e8f0' }}>AWS Solutions Architecture</strong>, and advanced <strong style={{ color: '#0ff0c0' }}>Spring Cloud</strong> patterns.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
