import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin, Instagram, Whatsapp } from './SocialIcons';

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
                <li><a href="https://github.com/Febinraj0303" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/febin-raj034" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://instagram.com/_febinnnn_._" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://wa.me/918220413870" target="_blank" rel="noreferrer">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Febin Raj. All rights reserved.
          </p>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
