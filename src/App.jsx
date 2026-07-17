import { motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';

// Social links configuration
const socialLinks = [
  {
    href: 'mailto:krishna@example.com',
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
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.89 1.529 2.341 1.547 2.914 1.182.092-.917.349-1.546.635-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/krishna-patel-4257582a1/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.66 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 9.341c-1.144 0-1.89-.761-1.89-1.712 0-.951.74-1.71 1.894-1.71 1.144 0 1.886.759 1.89 1.71 0 .951-.746 1.712-1.894 1.712zm1.959 11.111H3.349V9.806h3.947v10.646zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
      </svg>
    ),
  },
];

// Portfolio data
const portfolioData = {
  name: 'Krishna',
  title: 'Software Engineer & Hardware Enthusiast',
  about: 'I\'m a 19-year-old Electronics Engineering student at Rashtriya Raksha University specializing in VLSI Design, Full-Stack Web Development, and Hardware Automation. I\'m passionate about bridging the gap between software and hardware, creating elegant solutions to complex problems.',
  
  experience: [
    {
      role: 'Engineering Intern',
      company: 'Trinnovate',
      period: 'Feb 2025 - Present',
      description: 'Developing a full-stack visualization platform and automating data workflows for industrial motor diagnostics using Python and React.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Personal Projects',
      period: '2024 - Present',
      description: 'Building IoT solutions and web applications with React, Node.js, and embedded systems.',
    },
  ],

  projects: [
    {
      name: 'Krishi-Path',
      description: 'Agricultural Logistics Platform',
      details: 'Developed an IoT "Black Box" system to monitor crop health and environmental data during transit, featuring a real-time React dashboard.',
      tech: ['React', 'ESP32', 'LoRaWAN', 'Edge AI'],
      link: '#',
    },
    {
      name: 'HydroSense',
      description: 'Smart India Hackathon 2025 (Rank 9)',
      details: 'Led the development of an IoT microplastic sensor platform utilizing TinyML for advanced environmental monitoring.',
      tech: ['IoT', 'TinyML', 'Hardware'],
      link: '#',
    },
    {
      name: 'Industrial Motor Diagnostics',
      description: 'Real-time monitoring platform',
      details: 'Built a comprehensive visualization and analytics platform for motor diagnostics with data aggregation and reporting.',
      tech: ['Python', 'React', 'Data Visualization'],
      link: '#',
    },
  ],

  skills: [
    { category: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Python', 'Node.js', 'Database Design'] },
    { category: 'Hardware', items: ['ESP32', 'Verilog', 'Xilinx Vivado', 'IoT'] },
    { category: 'Tools', items: ['Git', 'UI/UX Design', 'Selenium', 'Linux'] },
  ],

  contact: {
    email: 'krishna@example.com',
    github: 'https://github.com/krishna-1528',
    linkedin: 'https://www.linkedin.com/in/krishna-patel-4257582a1/',
    website: 'https://krishna-lovat.vercel.app',
  },
};

// Component: Social Icon Link
function SocialIconLink({ href, label, icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="social-link" title={label}>
      {icon}
    </a>
  );
}

// Component: Section Heading
function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

// Component: Project Card
function ProjectCard({ name, description, details, tech, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="project-header">
        <div>
          <h3>{name}</h3>
          <p className="project-subtitle">{description}</p>
        </div>
        <span className="project-number">0{index + 1}</span>
      </div>
      <p className="project-details">{details}</p>
      <div className="tech-tags">
        {tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  );
}

// Component: Experience Item
function ExperienceItem({ role, company, period, description }) {
  return (
    <motion.article
      className="experience-item"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="experience-header">
        <div>
          <p className="experience-role">{role}</p>
          <h3>{company}</h3>
        </div>
        <span className="experience-period">{period}</span>
      </div>
      <p className="experience-description">{description}</p>
    </motion.article>
  );
}

// Component: Skill Category
function SkillCategory({ category, items }) {
  return (
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h4>{category}</h4>
      <div className="skill-list">
        {items.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </motion.div>
  );
}

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="portfolio-container">
      {/* Background elements */}
      <div className="gradient-bg gradient-1" />
      <div className="gradient-bg gradient-2" />
      <div className="dot-grid" />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Krishna
          </motion.h1>
        </div>
        <div className="nav-social">
          {socialLinks.map((link) => (
            <SocialIconLink key={link.label} {...link} />
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="hero-subtitle">Full-Stack Developer & Hardware Enthusiast</p>
            <h2 className="hero-title">
              Building elegant solutions
              <br />
              <span className="accent">at the intersection</span>
              <br />
              of software and hardware
            </h2>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {portfolioData.about}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <a href={`mailto:${portfolioData.contact.email}`} className="btn btn-secondary">
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="visual-placeholder">
            <svg viewBox="0 0 200 200" className="visual-icon">
              <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <circle cx="100" cy="60" r="8" fill="currentColor" />
              <circle cx="140" cy="100" r="8" fill="currentColor" />
              <circle cx="60" cy="100" r="8" fill="currentColor" />
              <circle cx="100" cy="140" r="8" fill="currentColor" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <SectionHeading
          eyebrow="About"
          title="Bridging Software & Hardware"
          description="I specialize in full-stack development and IoT solutions, with a focus on creating systems that matter."
        />
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-text">
            <p>
              As an Electronics Engineering student at Rashtriya Raksha University, I've developed a unique blend of expertise in hardware design and modern web development. My work spans from embedded systems and IoT platforms to full-stack web applications.
            </p>
            <p>
              I'm particularly interested in real-world applications of technology—whether that's monitoring agricultural logistics, detecting microplastics, or optimizing industrial processes. Every project is an opportunity to solve a meaningful problem.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight">
              <span className="number">19</span>
              <span className="label">Years Old</span>
            </div>
            <div className="highlight">
              <span className="number">3+</span>
              <span className="label">Major Projects</span>
            </div>
            <div className="highlight">
              <span className="number">2</span>
              <span className="label">Years Experience</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Journey"
        />
        <div className="experience-list">
          {portfolioData.experience.map((exp) => (
            <ExperienceItem key={exp.company} {...exp} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <SectionHeading
          eyebrow="Featured Work"
          title="Recent Projects"
          description="A selection of projects that showcase my skills in full-stack development and IoT systems."
        />
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & Technologies"
          description="A comprehensive overview of the technologies and tools I work with."
        />
        <div className="skills-grid">
          {portfolioData.skills.map((skillGroup) => (
            <SkillCategory key={skillGroup.category} {...skillGroup} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Let's work together</h2>
          <p>
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href={`mailto:${portfolioData.contact.email}`} className="btn btn-primary">
              Send me an email
            </a>
            <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              GitHub
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Designed & built by Krishna. Inspired by{' '}
          <a href="https://gazijarin.com" target="_blank" rel="noreferrer">
            gazijarin.com
          </a>
        </motion.p>
      </footer>
    </main>
  );
}

export default App;
