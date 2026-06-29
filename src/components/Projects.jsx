import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Github } from './SocialIcons';
import { PROJECTS_DATA, SOCIAL_LINKS } from '../config';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(PROJECTS_DATA.map((p) => p.category))];

  const filteredProjects = PROJECTS_DATA.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A selection of my recent work focusing on scalable architecture,
            intuitive design, and impactful solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="project-filters reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card glass-card reveal ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="GitHub Repo">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-more reveal">
          <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noopener noreferrer" className="btn-secondary view-all-btn">
            View All on GitHub <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
