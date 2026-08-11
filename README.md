# 🌌 Premium Developer Portfolio — Stackflow.Co

A premium, interactive, and high-performance developer portfolio built with **React**, **Three.js (WebGL)**, and **Vite**. Features responsive glassmorphism designs, smooth animations, lazy-loaded interactive fluid simulation background, and email messaging integration.

🚀 **Live Demo**: [portfolio-website1-brown-one.vercel.app](https://portfolio-website-git-aae1c3-febinrajfebinraj282-1876s-projects.vercel.app/)

---

## 🎨 Key Features

- **🌀 Interactive WebGL Fluid simulation** — An immersive interactive fluid physics simulation powered by Three.js that responds dynamically to mouse cursor trails and touch gestures (lazy-loaded for instant initial page paint).
- **📱 Responsive Glassmorphic UI** — Fully responsive components (Navbar, Hero, About, Skills, Projects, Contact, Footer) built with modern vanilla CSS, styled with custom dark-mode properties, smooth shadows, and interactive hover effects.
- **🛡️ Custom Error Boundaries** — Graceful degradation ensures that even if WebGL is unsupported or encounters graphics memory errors on older mobile devices, the site degrades cleanly and remains fully functional.
- **✉️ Validated Email Contact Form** — Fully integrated with EmailJS, complete with client-side regex email validation, character length constraints, and inline feedback status banners (success/failure) replacing legacy browser alerts.
- **⚙️ Centralized Configuration** — Highly maintainable single-source-of-truth structure (`src/config.js`) for personal bio details, project lists, navigation endpoints, and social links.
- **⚡ Optimized Performance** — Scroll reveal animations automatically unobserve HTML elements once they enter viewport to prevent frame drops; below-the-fold assets are deferred to maximize Lighthouse speed scores.

---

## 🛠️ Technology Stack

| Layer | Technologies | Description |
|---|---|---|
| **Core Framework** | React 19, HTML5, CSS3 | Client-side reactive interface design |
| **Build & Tooling** | Vite 8, ESLint | Ultrafast hot module replacement (HMR) and code linting |
| **Graphics Engine** | Three.js | Navier-Stokes WebGL GPU-based background solver |
| **Form Service** | EmailJS Browser | Direct-from-client secure email delivery |
| **Metrics** | Vercel Speed Insights | Real-time performance profiling |
| **Icons** | Lucide React | Clean, scalable vector brand icons |

---

## 📂 Project Structure

```bash
├── public/
│   ├── favicon.svg          # Custom browser brand icon
│   └── icons.svg            # SVG assets
├── src/
│   ├── assets/              # Avatar images and static image resources
│   ├── components/          # Modular React components:
│   │   ├── ErrorBoundary    # Catches rendering errors gracefully
│   │   ├── Navbar           # Header navigation with mobile hamburger & click-outside close
│   │   ├── Hero             # Dynamic typewriter greeting and avatar
│   │   ├── About            # Developer timeline & location stats
│   │   ├── Skills           # Tech stack interactive category filters
│   │   ├── Projects         # Selected showcase grid with image hovers
│   │   ├── Contact          # Message submission form with inline errors
│   │   ├── Footer           # Navigation copy & top-scroll link
│   │   └── LiquidEther      # 1,100+ line Three.js WebGL simulation canvas
│   ├── config.js            # Centralized portfolio content values (EDIT THIS)
│   ├── App.jsx              # App layout, lazy loading, and reveal triggers
│   ├── index.css            # Custom CSS system variables and utility styles
│   └── main.jsx             # React mount entrypoint
├── .env.example             # Template for secure environment variables
├── package.json             # NPM package scripts & dependency configurations
└── vite.config.js           # Vite development and production plugin options
```

---

## 🚀 Local Development Setup

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, and follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Febinraj0306/portfolio-website1.git
cd portfolio-website1
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory (based on `.env.example` or the template below) and add your [EmailJS Credentials](https://www.emailjs.com/):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start Dev Server
```bash
npm run dev
```
Open your browser and navigate to the local address (typically `http://localhost:5173`).

---

## 🏗️ Building for Production

To optimize assets, bundle dependencies, and generate static files ready for deployment to platforms like Vercel, Netlify, or GitHub Pages:

```bash
npm run build
```

The output files will be created in the `/dist` directory. You can preview the production bundle locally with:
```bash
npm run preview
```

---

## 📝 Customization Guide

You can customize this portfolio with your own details without diving deep into the codebase by modifying [**`src/config.js`**](file:///c:/Users/FEBIN%20RAJ/OneDrive/Documents/portfolio-website1/src/config.js):

- **`SITE_CONFIG`**: Update your name, initials, job title, email, phone number, and location.
- **`SOCIAL_LINKS`**: Update links to your GitHub, LinkedIn, Instagram, and WhatsApp profiles.
- **`PROJECTS_DATA`**: Customize the title, category, unsplash preview image, text description, tech stack tags, and deployment/repository URLs.

---

## 📄 License

This project is licensed under the MIT License. Feel free to use it to showcase your work!
