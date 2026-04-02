import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Sales Savvy',
    subtitle: 'CRM & Sales Dashboard',
    description:
      'A comprehensive CRM platform for managing leads, tracking sales pipelines, and visualizing performance metrics. Features real-time dashboards, predictive analytics, and automated reporting.',
    techs: ['Spring Boot', 'React', 'PostgreSQL', 'REST API', 'Chart.js'],
    github: '#',
    demo: '#',
    gradient: 'from-teal-500/20 to-blue-600/20',
    accent: '#0ff0c0',
    icon: '📊',
  },
  {
    title: 'BajarHub',
    subtitle: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product discovery, cart management, payment integration, and a role-based admin panel for inventory and order management.',
    techs: ['Spring Boot', 'React', 'MySQL', 'JWT Auth', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    gradient: 'from-purple-500/20 to-pink-600/20',
    accent: '#8b5cf6',
    icon: '🛒',
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Personal Brand',
    description:
      'This very portfolio — built with React and Tailwind CSS, featuring smooth animations via Framer Motion, dark glassmorphism design, and a live EmailJS contact form.',
    techs: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    github: '#',
    demo: '#',
    gradient: 'from-orange-500/20 to-red-600/20',
    accent: '#f97316',
    icon: '🌐',
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: 60 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>What I've Built</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass project-card"
                style={{ borderRadius: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                {/* Header banner */}
                <div style={{
                  height: 160, position: 'relative', overflow: 'hidden',
                  background: `radial-gradient(circle at 30% 50%, ${p.accent}22, transparent 60%), radial-gradient(circle at 70% 50%, ${p.accent}11, transparent 60%)`,
                  borderBottom: `1px solid ${p.accent}22`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: '4rem', opacity: 0.8,
                    filter: 'drop-shadow(0 0 20px ' + p.accent + '66)',
                  }}>
                    {p.icon}
                  </div>
                  {/* Corner accent */}
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    width: 8, height: 8, borderRadius: '50%',
                    background: p.accent, boxShadow: `0 0 12px ${p.accent}`,
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: 6 }}>
                    <span style={{ fontSize: '0.7rem', color: p.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      {p.subtitle}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 12px', color: '#f1f5f9' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.75, flex: 1, marginBottom: 20 }}>{p.description}</p>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                    {p.techs.map(t => (
                      <span key={t} style={{
                        fontSize: '0.72rem', fontWeight: 600, padding: '4px 10px', borderRadius: 9999,
                        background: p.accent + '15', border: `1px solid ${p.accent}40`, color: p.accent,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: 12 }}>
                    <a href={p.github} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: '0.8rem', fontWeight: 600, padding: '8px 16px', borderRadius: 9999,
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#94a3b8', textDecoration: 'none', transition: 'all 0.2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    >
                      <FaGithub /> View Code
                    </a>
                    <a href={p.demo} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: '0.8rem', fontWeight: 600, padding: '8px 16px', borderRadius: 9999,
                      background: p.accent + '20', border: `1px solid ${p.accent}50`,
                      color: p.accent, textDecoration: 'none', transition: 'all 0.2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = p.accent + '35'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = p.accent + '20'; }}
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
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
