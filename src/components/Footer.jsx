import { ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS, SITE_CONFIG } from '../config';

import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <span className="logo-name">Stack</span>
              <span className="logo-role">flow</span>
              <span className="logo-dot">.</span>
              <span className="">Co</span>
            </a>
            <p className="footer-slogan">
              Building the next generation of web applications.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>

            </div>

            <div className="footer-col">
              <h4>Social</h4>
              <ul>
                {Object.values(SOCIAL_LINKS).map(link => (
                  <li key={link.label}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
