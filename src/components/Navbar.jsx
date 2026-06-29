import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../config';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active nav section
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when clicking outside
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar-links') && !e.target.closest('.mobile-toggle')) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen, closeMenu]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <nav className="navbar-inner container">
        <a href="#home" className="navbar-logo" onClick={e => handleNavClick(e, '#home')}>
          <span className="logo-name">Stack</span>
          <span className="logo-role">flow</span>
          <span className="logo-dot">.</span>
          <span className="">Co</span>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              id="nav-cta"
              className="btn-primary nav-cta-btn"
              onClick={e => handleNavClick(e, '#contact')}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          id="navbar-mobile-toggle"
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}
