import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { closeMobileMenu, setActiveSection } from "../store";

const navLinks = [
  { id: 'about',          label: 'About' },
  { id: 'skills',         label: 'Skills' },
  { id: 'experience',     label: 'Experience' },
  { id: 'projects',       label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact',        label: 'Contact' },
];

export default function Navbar() {
    const dispatch = useAppDispatch();
    const activeSection = useAppSelector((s) => s.ui.activeSection);
    const mobileMenuOpen = useAppSelector((s) => s.ui.mobileMenuOpen);
    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navLinks.map((l) => document.getElementById(l.id));
            const current = [...sections].reverse().find((el) => el && el.getBoundingClientRect().top <= 120);
            if(current) dispatch(setActiveSection(current.id));
        };
        window.addEventListener('scroll', onScroll, {passive:true});
        return () => window.removeEventListener('scroll', onScroll)
    }, [dispatch]);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
        dispatch(closeMobileMenu())
    };

    return(
       <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.5s ease',
        background: scrolled ? 'rgba(15,17,23,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,160,23,0.15)' : 'none',
        padding: scrolled ? '10px 0' : '16px 0',
      }}
    >
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Profile pic */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          aria-label="Back to top"
        >
          <div style={{
            width: 42, height: 42, borderRadius: '50%', overflow: 'hidden',
            border: '2px solid #d4a017',
            boxShadow: '0 0 12px rgba(212,160,23,0.35)',
            transition: 'transform 0.3s ease',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={profileImage} alt="Chaithanya" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: 32, alignItems: 'center' }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link${activeSection === link.id ? ' active' : ''}`}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 14, fontWeight: 500, letterSpacing: '0.05em',
                color: activeSection === link.id ? '#f0c040' : 'rgba(156,163,175,1)',
                transition: 'color 0.2s',
                padding: '2px 0',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Hire Me */}
        <a
          href="mailto:chaitanyanaidu1311@gmail.com"
          className="hidden md:inline-flex"
          style={{
            padding: '8px 18px', border: '1px solid #d4a017', color: '#d4a017',
            fontSize: 14, fontWeight: 500, letterSpacing: '0.05em', textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#d4a017'; e.currentTarget.style.color = '#0a0a0a'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d4a017'; }}
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => dispatch(toggleMobileMenu())}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 6 }}
          aria-label="Menu"
        >
          <span style={{ display: 'block', height: 2, width: 24, background: '#fff', transition: 'all 0.3s', transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <span style={{ display: 'block', height: 2, width: 24, background: '#fff', transition: 'all 0.3s', opacity: mobileMenuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', height: 2, width: 24, background: '#fff', transition: 'all 0.3s', transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{ background: 'rgba(15,17,23,0.98)', borderBottom: '1px solid rgba(212,160,23,0.2)', padding: '24px' }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none',
                cursor: 'pointer', fontSize: 18, fontWeight: 500, marginBottom: 16,
                color: activeSection === link.id ? '#d4a017' : 'rgba(209,213,219,1)',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
    )
}