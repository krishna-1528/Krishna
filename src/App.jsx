import { motion } from 'framer-motion';
import './App.css';

const socialLinks = [
  {
    href: 'mailto:hello@example.com',
    label: 'Email',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 2v.3l8 5.2 8-5.2V8H4Zm16 8V10l-7.4 4.8a1 1 0 0 1-1.2 0L4 10v6h16Z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/krishna-1528',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.68c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.93.84.09-.66.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.34.1-2.79 0 0 .84-.27 2.76 1.02a9.6 9.6 0 0 1 5.03 0c1.92-1.29 2.76-1.02 2.76-1.02.55 1.45.2 2.53.1 2.79.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/krishna-patel-4257582a1/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 6.5A1.94 1.94 0 1 1 3.06 6.5a1.94 1.94 0 0 1 3.88 0ZM3.5 21h4.88V8.98H3.5V21ZM9.86 8.98H14.5v1.64h.07c.65-1.19 2.23-2.45 4.59-2.45 4.91 0 5.83 3.23 5.83 7.44V21H20.1v-4.44c0-1.06-.02-2.43-1.48-2.43-1.48 0-1.71 1.15-1.71 2.35V21h-4.88V8.98Z" />
      </svg>
    ),
  },
  {
    href: 'https://medium.com',
    label: 'Writing',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5 7.9 12 4 17.5h3.1l2.5-4.3 2.5 4.3h3.1L11.3 12l4-5.5h-3.1l-2.3 4.1-2.4-4.1H4Z" />
      </svg>
    ),
  },
];

const aboutHighlights = ['Software', 'Hardware', 'Art', 'Experiments'];

const experienceRows = [
  {
    role: 'Software Engineer',
    org: 'Google',
    period: '2025 - Present',
    note: 'Building ML systems and product-facing tooling at scale.',
  },
  {
    role: 'Designer / Builder',
    org: 'Independent',
    period: '2023 - 2025',
    note: 'Shaping calm interfaces, prototypes, and visual systems.',
  },
  {
    role: 'Creative Technologist',
    org: 'Personal Work',
    period: 'Ongoing',
    note: 'Mixing code, design, and playful interaction in small projects.',
  },
];

const softwareProjects = [
  {
    name: 'Portfolio V2',
    summary: 'A clean React and Vite portfolio with a minimal, editorial feel.',
    stack: 'React, Vite, CSS',
  },
  {
    name: 'Interaction Lab',
    summary: 'Small interface experiments focused on motion and usability.',
    stack: 'Framer Motion, UI',
  },
  {
    name: 'Content System',
    summary: 'A reusable personal content structure for case studies and notes.',
    stack: 'Design System, CMS',
  },
];

const hardwareProjects = [
  {
    name: 'Custom PC Build',
    summary: 'A white-themed build inspired by clean industrial hardware design.',
  },
  {
    name: 'LED Bracelet',
    summary: 'A wearable audio-reactive light experiment for live events.',
  },
  {
    name: 'Retro Cyberdeck',
    summary: 'A compact handheld project mixing nostalgia and practical hardware.',
  },
];

const artPieces = ['fishy', 'dali', 'japan', 'space', '11th grade', 'cordyceps'];

function SocialIconLink({ href, label, icon }) {
  return (
    <a className="social-link" href={href} aria-label={label} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
}

function DottedPortrait() {
  return (
    <svg className="portrait-matrix" viewBox="0 0 320 420" aria-hidden="true">
      <defs>
        <clipPath id="portraitShape">
          <path d="M170 48c-32 0-58 25-58 57 0 21 10 38 25 49-22 15-35 42-35 77v71h141v-71c0-35-13-62-35-77 15-11 25-28 25-49 0-32-26-57-58-57Z" />
        </clipPath>
        <pattern id="dotPattern" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.15" fill="rgba(84, 243, 222, 0.72)" />
        </pattern>
        <radialGradient id="portraitGlow" cx="50%" cy="32%" r="58%">
          <stop offset="0%" stopColor="rgba(84, 243, 222, 0.42)" />
          <stop offset="44%" stopColor="rgba(84, 243, 222, 0.16)" />
          <stop offset="100%" stopColor="rgba(84, 243, 222, 0)" />
        </radialGradient>
      </defs>

      <rect width="320" height="420" fill="transparent" />
      <g clipPath="url(#portraitShape)">
        <rect width="320" height="420" fill="url(#dotPattern)" />
        <ellipse cx="161" cy="148" rx="80" ry="90" fill="url(#portraitGlow)" />
        <circle cx="148" cy="132" r="10" fill="rgba(84, 243, 222, 0.9)" />
        <circle cx="174" cy="120" r="6" fill="rgba(84, 243, 222, 0.84)" />
        <circle cx="164" cy="156" r="7" fill="rgba(84, 243, 222, 0.66)" />
      </g>
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <main className="portfolio-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <div className="dot-grid" />

      <header className="topbar">
        <div className="brand-space" aria-hidden="true" />
        <div className="social-links" aria-label="Social links">
          {socialLinks.map((link) => (
            <SocialIconLink key={link.label} {...link} />
          ))}
        </div>
      </header>

      <section className="hero" id="home">
        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <DottedPortrait />
        </motion.div>

        <div className="hero-copy">
          <p className="eyebrow">Software engineer and artist</p>
          <h1>hi, krishna here.</h1>
          <p className="hero-text">
            Minimal portfolio inspired by the calm hierarchy of Gazi Jarin&apos;s site: clean typography, clear sections,
            and enough breathing room for you to customize it your own way.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#about">Say hi</a>
            <a className="button button-secondary" href="#software">View work</a>
          </div>

          <div className="hero-meta-row">
            {aboutHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-grid about-grid" id="about">
        <SectionHeading
          eyebrow="About me"
          title="A concise introduction"
          description="A short bio block with the same calm structure as the reference, ready for your own copy later."
        />

        <div className="about-panel">
          <div className="about-copy">
            <p>
              I build software, design interfaces, and like making small systems feel polished. The goal here is to keep
              the page minimal, readable, and easy to adapt.
            </p>
            <p>
              You can replace the copy, images, and project content later without changing the overall structure.
            </p>
          </div>
          <div className="about-portrait">
            <DottedPortrait />
          </div>
        </div>
      </section>

      <section className="content-grid" id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="A clear working history"
          description="Short, scannable lines keep the page close to the reference while still leaving room for your own story."
        />

        <div className="experience-list">
          {experienceRows.map((row) => (
            <article className="experience-row" key={row.role}>
              <div>
                <p className="experience-role">{row.role}</p>
                <h3>{row.org}</h3>
              </div>
              <p className="experience-note">{row.note}</p>
              <span>{row.period}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid" id="software">
        <SectionHeading
          eyebrow="Software"
          title="Selected software work"
          description="A compact project list that mirrors the reference site&apos;s informational style without being overly crowded."
        />

        <div className="card-list">
          {softwareProjects.map((project, index) => (
            <motion.article
              className="info-card"
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="card-index">0{index + 1}</div>
              <div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
              <span>{project.stack}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="content-grid" id="hardware">
        <SectionHeading
          eyebrow="Hardware"
          title="Small hardware builds"
          description="Keep these as placeholders for now, then swap in your own projects when you’re ready."
        />

        <div className="tile-grid">
          {hardwareProjects.map((project) => (
            <article className="tile-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid" id="art">
        <SectionHeading
          eyebrow="Art"
          title="Visual notes and experiments"
          description="A simple gallery strip inspired by the art section on the reference site."
        />

        <div className="art-grid">
          {artPieces.map((piece) => (
            <div className="art-tile" key={piece}>
              <span>{piece}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Simple contact details at the end of the page.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:hello@example.com">hello@example.com</a>
          <a href="https://example.com" target="_blank" rel="noreferrer">example.com</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">github.com/example</a>
        </div>
      </section>
    </main>
  );
}

export default App;
