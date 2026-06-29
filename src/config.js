/**
 * Centralized site configuration
 * All personal info, social links, and branding in one place.
 */

export const SITE_CONFIG = {
  name: 'Febin Raj',
  initials: 'FR',
  title: 'Full Stack Developer',
  email: 'febinraj321@gmail.com',
  phone: '+918220413870',
  location: 'Kerala, India',
};

export const SOCIAL_LINKS = {
  github: {
    url: 'https://github.com/Febinraj0306',
    label: 'GitHub',
  },
  linkedin: {
    url: 'https://linkedin.com/in/febin-raj03',
    label: 'LinkedIn',
  },
  instagram: {
    url: 'https://instagram.com/_febinnnn_._',
    label: 'Instagram',
  },
  whatsapp: {
    url: 'https://wa.me/918220413870',
    label: 'WhatsApp',
  },
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Developer Portfolio Website',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    description: 'A premium, high-performance developer portfolio featuring a custom WebGL fluid simulation background (Three.js), responsive glassmorphism design, and EmailJS integration.',
    tech: ['React', 'Three.js', 'Vite', 'CSS Modules', 'EmailJS'],
    github: 'https://github.com/Febinraj0306/portfolio-website1',
    live: 'https://github.com/Febinraj0306/portfolio-website1', // Fallback to repo since it is self-hosted
    featured: true,
  },
  {
    id: 2,
    title: 'MERN E-Commerce Backend API',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'A scalable RESTful API built for a modern e-commerce platform. Features JWT authentication, Stripe payment gateway integration, automated inventory tracking, and full database migrations.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Stripe API'],
    github: 'https://github.com/Febinraj0306', // User-specific fallback profile
    live: 'https://github.com/Febinraj0306',
    featured: false,
  },
  {
    id: 3,
    title: 'AI-Powered Task Manager',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    description: 'A productivity application that integrates OpenAI to automatically categorize, schedule, and estimate durations for complex developer tasks based on user descriptions.',
    tech: ['React', 'Node.js', 'OpenAI API', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/Febinraj0306',
    live: 'https://github.com/Febinraj0306',
    featured: true,
  },
];

