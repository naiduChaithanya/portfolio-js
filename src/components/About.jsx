import { useIntersectionObserver } from '../hooks';
import { personalInfo } from '../data/portfolio';
import profileImage from '../data/profileImage';

const AMBER = '#d4a017';
const CARD_BG = 'rgba(26,29,39,0.5)';
const CARD_BORDER = 'rgba(212,160,23,0.15)';
const MUTED = 'rgba(228,220,204,0.6)';

const highlights = [
  { icon: '⚡', title: 'Performance First',   desc: 'Laser-focused on eliminating bottlenecks through lazy loading, memoization, and code splitting.' },
  { icon: '🏗️', title: 'Scalable Architecture', desc: 'Enterprise-grade Redux patterns powering complex multi-step banking workflows.' },
  { icon: '🔐', title: 'Secure Integration',  desc: 'JWT-authenticated RESTful APIs with regulatory-compliant validation layers.' },
  { icon: '🚀', title: 'Full-Stack Reach',    desc: 'Beyond React — building with Node.js, MongoDB and Socket.io for real-time, end-to-end applications.' },
];

const stats = [
  { value: '4+',  label: 'Years Exp.' },
  { value: '15%', label: 'Load Improvement' },
  { value: '2',   label: 'Modules Delivered' },
  { value: '2',   label: 'Certifications' },
];

export default function About() {
  const { ref, isVisible } = useIntersectionObserver(0.05);

  return (
    <section
      id="about"
      ref={ref}
      style={{ paddingTop: 100, paddingBottom: 80, position: 'relative' }}
    >
      {/* subtle bg glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(212,160,23,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', position: 'relative' }}>

        {/* Section label */}
        <div className={`section-reveal ${isVisible ? 'visible' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 56 }}>
          <span style={{ fontFamily: '"JetBrains Mono"', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: AMBER }}>01 / About</span>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, rgba(212,160,23,0.4), transparent)` }} />
        </div>

        {/* Hero row: photo + intro + stats */}
        <div
          className={`section-reveal ${isVisible ? 'visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 48, alignItems: 'center', marginBottom: 64, transitionDelay: '0.08s' }}
        >
          {/* Photo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: 160, height: 160, borderRadius: '50%', overflow: 'hidden',
                border: `4px solid ${AMBER}`,
                boxShadow: `0 0 40px rgba(212,160,23,0.25), 0 0 80px rgba(212,160,23,0.08)`,
              }}>
                <img src={profileImage} alt="Chaithanya Naidu" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 8, right: 8, width: 16, height: 16, borderRadius: '50%', background: '#4ade80', border: '2px solid #0f1117' }} />
            </div>
            <span style={{ fontSize: 11, fontFamily: '"JetBrains Mono"', color: 'rgba(74,222,128,0.8)', letterSpacing: '0.1em' }}>● Available</span>
          </div>

          {/* Intro text */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ width: 32, height: 1, background: AMBER, display: 'inline-block' }} />
              <span style={{ fontFamily: '"JetBrains Mono"', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: AMBER }}>ReactJs Developer</span>
            </div>
            <h1 style={{ fontFamily: '"Playfair Display"', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
              <span style={{ color: '#fff' }}>Chaithanya </span>
              <span style={{ color: AMBER }}>Naidu</span>
              <br />
              <span style={{ color: '#fff' }}>Polimera</span>
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: MUTED, maxWidth: 480, marginBottom: 24 }}>
              {personalInfo.summary}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['React.js', 'TypeScript', 'Redux', 'Finacle', 'Node.js'].map((tag) => (
                <span key={tag} style={{ padding: '4px 12px', fontSize: 12, fontFamily: '"JetBrains Mono"', border: '1px solid rgba(212,160,23,0.3)', color: AMBER, background: 'rgba(212,160,23,0.05)' }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{ border: '1px solid rgba(212,160,23,0.2)', background: 'rgba(26,29,39,0.7)', padding: '24px 28px', position: 'relative', minWidth: 180 }}>
            <span style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 20, borderTop: `2px solid ${AMBER}`, borderLeft: `2px solid ${AMBER}` }} />
            <span style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderBottom: `2px solid ${AMBER}`, borderRight: `2px solid ${AMBER}` }} />
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center', marginBottom: 20 }}>
                <div style={{ fontFamily: '"Playfair Display"', fontSize: 32, fontWeight: 700, color: AMBER }}>{s.value}</div>
                <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(228,220,204,0.4)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className={`section-reveal ${isVisible ? 'visible' : ''}`} style={{ marginBottom: 32, transitionDelay: '0.14s' }}>
          <h2 style={{ fontFamily: '"Playfair Display"', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700 }}>
            <span style={{ color: '#fff' }}>Crafting </span>
            <span style={{ color: AMBER }}>Interfaces </span>
            <span style={{ color: '#fff' }}>that Perform.</span>
          </h2>
          <div style={{ display: 'flex', gap: 24, marginTop: 12 }}>
            {[['Location', personalInfo.location], ['Experience', '4 Years'], ['Domain', 'Enterprise Banking']].map(([k, v]) => (
              <div key={k} style={{ fontSize: 13, display: 'flex', gap: 8 }}>
                <span style={{ fontFamily: '"JetBrains Mono"', color: AMBER }}>{k}</span>
                <span style={{ color: MUTED }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        <div
          className={`section-reveal ${isVisible ? 'visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, transitionDelay: '0.18s' }}
        >
          {highlights.map((card) => (
            <div
              key={card.title}
              className="card-hover"
              style={{ padding: 20, border: `1px solid ${CARD_BORDER}`, background: CARD_BG }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{card.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{card.title}</div>
              <div style={{ fontSize: 12, lineHeight: 1.6, color: 'rgba(228,220,204,0.5)' }}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
