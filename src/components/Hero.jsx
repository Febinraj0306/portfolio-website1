import { useEffect, useRef } from 'react';
import { Download, ArrowDown, Mail, Code2 } from 'lucide-react';
import { Github, Linkedin, Instagram, Whatsapp } from './SocialIcons';
import { SOCIAL_LINKS, SITE_CONFIG } from '../config';
import heroPng from '../assets/hero.png';
import './Hero.css';

const roles = ['Full Stack Developer', 'React Specialist', 'Node.js Engineer', 'UI/UX Enthusiast'];

export default function Hero() {
  const roleRef = useRef(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    // Typewriter effect
    let timeout;
    const type = () => {
      const current = roles[indexRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        if (charRef.current > current.length) {
          deletingRef.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        charRef.current--;
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % roles.length;
          timeout = setTimeout(type, 400);
          return;
        }
      }
      if (roleRef.current) {
        roleRef.current.textContent = current.slice(0, charRef.current);
      }
      timeout = setTimeout(type, deletingRef.current ? 50 : 80);
    };
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Animated background orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Grid overlay */}
      <div className="hero-grid" />

      {/* Floating code snippets */}
      <div className="floating-snippet snippet-1">
        <span className="snip-keyword">const</span> <span className="snip-var">dev</span> = <span className="snip-string">'passionate'</span><span className="snip-punct">;</span>
      </div>
      <div className="floating-snippet snippet-2">
        <span className="snip-func">useState</span><span className="snip-punct">(</span><span className="snip-string">'building'</span><span className="snip-punct">)</span>
      </div>
      <div className="floating-snippet snippet-3">
        <span className="snip-keyword">await</span> <span className="snip-func">ship</span><span className="snip-punct">(</span><span className="snip-var">product</span><span className="snip-punct">)</span>
      </div>

      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">Febin Raj</span>
            <span className="hero-role-line">
              <span className="hero-role-prefix">I build </span>
              <span className="hero-role-typed" ref={roleRef}>Full Stack Apps</span>
              <span className="hero-cursor">|</span>
            </span>
          </h1>

          <p className="hero-description">
            Crafting full-stack digital experiences with <strong>React</strong>,{' '}
            <strong>Node.js</strong>, and modern cloud infrastructure.
            Passionate about clean code, great UX, and scalable architectures.
          </p>

          <div className="hero-actions">
            <button
              id="hero-cta-projects"
              className="btn-primary"
              onClick={() => handleScroll('#projects')}
            >
              <Code2 size={18} />
              View My Work
            </button>
            <a
              id="hero-cta-resume"
              href="/resume.pdf"
              className="btn-secondary"
              download
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              id="hero-social-github"
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              id="hero-social-linkedin"
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              id="hero-social-instagram"
              href={SOCIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              id="hero-social-whatsapp"
              href={SOCIAL_LINKS.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="WhatsApp"
            >
              <Whatsapp size={20} />
            </a>
            <a
              id="hero-social-email"
              href={`mailto:${SITE_CONFIG.email}`}
              className="social-btn"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <div className="avatar-ring" />
            <div className="avatar-ring avatar-ring-2" />
            <div className="hero-avatar">
              <div className="avatar-initials">{SITE_CONFIG.initials}</div>
              <div className="avatar-glow" />
            </div>
            {/* Floating tech badges */}
            <div className="tech-badge tb-react">⚛ React</div>
            <div className="tech-badge tb-node">⬢ Node.js</div>
            <div className="tech-badge tb-ts">TS</div>
            <div className="tech-badge tb-db">🗄 MySQL</div>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      <button
        id="hero-scroll-down"
        className="scroll-indicator"
        onClick={() => handleScroll('#about')}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
