import { motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';

// Social links configuration
const socialLinks = [
  {
    href: 'mailto:krishna.patel.vlsi@gmail.com',
    label: 'Email',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 2v.3l8 5.2 8-5.2V8H4Zm16 8V10l-7.4 4.8a1 1 0 0 1-1.2 0L4 10v6h16Z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/krishna-1528',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.89 1.529 2.341 1.547 2.914 1.182.092-.917.349-1.546.635-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/krishna-patel-4257582a1/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.66 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 9.341c-1.144 0-1.89-.761-1.89-1.712 0-.951.74-1.71 1.894-1.71 1.144 0 1.886.759 1.89 1.71 0 .951-.746 1.712-1.894 1.712zm1.959 11.111H3.349V9.806h3.947v10.646zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/Kr15is28',
    label: 'Twitter',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  }
];

// Portfolio Data
const portfolioData = {
  experience: [
    {
      id: 'trinnovate',
      title: 'Engineering Intern',
      company: 'Trinnovate',
      date: 'Feb 2025 - Present',
      desc: 'Developing a full-stack visualization platform and automating data workflows for industrial motor diagnostics using Python and React.'
    }
  ],
  projects: [
    { 
      id: 'krishi', 
      title: 'Krishi-Path', 
      subtitle: 'Agricultural Logistics Platform',
      tech: ['React', 'ESP32', 'LoRaWAN', 'Edge AI'], 
      desc: 'Developed an IoT "Black Box" system to monitor crop health and environmental data during transit, featuring a real-time React dashboard.' 
    },
    { 
      id: 'hydro', 
      title: 'HydroSense', 
      subtitle: 'Smart India Hackathon 2025 (College Rank 9)',
      tech: ['IoT', 'TinyML', 'Hardware'], 
      desc: 'Led the development of an IoT microplastic sensor platform utilizing TinyML for advanced environmental monitoring.' 
    }
  ],
  skills: [
    { category: 'Web Development', items: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design'] },
    { category: 'Hardware & Scripting', items: ['Python & Selenium', 'Verilog & Xilinx Vivado'] }
  ]
};

// Component: Section Heading
function SectionHeading({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="mb-12 border-b border-slate-700/50 pb-4"
    >
      <h2 className="text-3xl font-semibold text-slate-200 tracking-tight">
        <span className="text-teal-400 mr-3">/</span>
        {title}
      </h2>
    </motion.div>
  );
}

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <main className="bg-[#0b1120] text-slate-400 font-sans min-h-screen selection:bg-teal-400/30 selection:text-teal-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0b1120]/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="flex items-center gap-10">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
            className="text-slate-200 font-semibold text-lg tracking-wide cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Krishna Patel
          </motion.div>
          
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('home')} className="hover:text-teal-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-teal-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-teal-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-teal-400 transition-colors">Software</button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="w-5 h-5 text-slate-400 hover:text-teal-400 transition-colors">
              {link.icon}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-32 pb-24 space-y-40">
        
        {/* HERO SECTION - Updated to your requested layout */}
        <section id="home" className="min-h-[75vh] flex items-center justify-start pt-10">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start max-w-3xl"
            >
              <p className="text-teal-400 font-mono mb-5 text-sm md:text-base tracking-wide">
                Full-Stack Developer & Hardware Enthusiast
              </p>
              
              {/* Minimalist Gazi-style Name at the top */}
              <h1 className="text-6xl md:text-8xl font-bold text-slate-200 tracking-tight mb-8">
                hi, <span className="text-teal-400">krishna</span> here.
              </h1>
              
              {/* Flashy text moved below the name */}
              <h2 className="text-3xl md:text-5xl font-bold text-slate-300 leading-tight mb-8">
                Building elegant solutions <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">at the intersection</span> <br className="hidden md:block"/>
                of software and hardware.
              </h2>

              <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
                Software engineer and artist. Minimal portfolio with clean typography, clear sections, and enough breathing room for you to customize it your own way.
              </p>

              <div className="flex gap-4">
                <button onClick={() => scrollToSection('about')} className="px-6 py-3 bg-teal-400/10 text-teal-400 border border-teal-400/50 rounded hover:bg-teal-400/20 transition-colors font-medium">
                  Say hi
                </button>
                <button onClick={() => scrollToSection('projects')} className="px-6 py-3 text-slate-300 border border-slate-700 rounded hover:bg-slate-800 transition-colors font-medium">
                  View work
                </button>
              </div>
            </motion.div>

            {/* Right: Subtle Swirling Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block w-72 h-72 flex-shrink-0 opacity-60"
            >
               <motion.img 
                src="/image_2c7b87.png" 
                alt="Tech Avatar"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(45,212,191,0.2)] cursor-pointer"
              />
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-32">
          <SectionHeading title="about me" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-lg leading-relaxed max-w-3xl space-y-6"
          >
            <p>
              As a 19-year-old student specializing in VLSI Design, I've developed a unique blend of expertise bridging hardware architecture and modern web development.
            </p>
            <p>
              Whether I am routing signals on an ESP32 or structuring state in React, my goal is always to build clean, efficient systems that matter.
            </p>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-32">
          <SectionHeading title="experience" />
          <div className="space-y-12">
            {portfolioData.experience.map((exp) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12"
              >
                <span className="text-sm font-mono text-slate-500 md:w-48 flex-shrink-0">{exp.date}</span>
                <div>
                  <h3 className="text-xl font-medium text-slate-200">{exp.title} <span className="text-teal-400">@ {exp.company}</span></h3>
                  <p className="mt-3 leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
          <SectionHeading title="some things i've built" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#112240] p-8 rounded-lg border border-slate-800 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-between items-center mb-6">
                  <svg className="w-10 h-10 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-200 mb-2">{project.title}</h3>
                <p className="text-sm text-teal-400 mb-4">{project.subtitle}</p>
                <p className="text-sm leading-relaxed mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-slate-500">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center pb-8 pt-20 border-t border-slate-800/50">
          <p className="text-sm font-mono text-slate-500 hover:text-teal-400 transition-colors">
            Designed & built by Krishna Patel
          </p>
        </footer>

      </div>
    </main>
  );
}

export default App;