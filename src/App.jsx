import { motion } from 'framer-motion';
import { useState } from 'react';
import './App.css'; 

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
      subtitle: 'Smart India Hackathon 2025 (Rank 9)',
      tech: ['IoT', 'TinyML', 'Hardware'], 
      desc: 'Led the development of an IoT microplastic sensor platform utilizing TinyML for advanced environmental monitoring.' 
    }
  ],
  skills: [
    { category: 'Development & Design', items: ['Web Development', 'Design', 'Video Editing', 'React.js'] },
    { category: 'Hardware & Automation', items: ['Python', 'Selenium', 'Verilog', 'Xilinx Vivado'] }
  ]
};

// Reusable Monospace Section Heading
function SectionHeading({ title, number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-10 w-full whitespace-nowrap"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-[var(--lightest-slate)] flex items-center">
        <span className="text-[var(--green)] font-mono text-xl mr-3 font-normal">
          {number}.
        </span>
        {title}
      </h2>
      <div className="h-[1px] w-full max-w-xs bg-[var(--lightest-navy)]"></div>
    </motion.div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[var(--navy)]">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[var(--navy)]/90 backdrop-blur-sm shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]">
        <div className="flex items-center gap-10">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
            className="text-[var(--green)] font-mono font-semibold text-xl border-2 border-[var(--green)] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-[var(--green)]/10 transition-colors"
            onClick={() => scrollToSection('home')}
          >
            K
          </motion.div>
          
          <div className="hidden md:flex gap-8 text-[13px] font-mono text-[var(--light-slate)]">
            <button onClick={() => scrollToSection('about')} className="hover:text-[var(--green)] transition-colors">
              <span className="text-[var(--green)] mr-1">01.</span> About
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-[var(--green)] transition-colors">
              <span className="text-[var(--green)] mr-1">02.</span> Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-[var(--green)] transition-colors">
              <span className="text-[var(--green)] mr-1">03.</span> Work
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="w-5 h-5 text-[var(--light-slate)] hover:text-[var(--green)] hover:-translate-y-1 transition-all">
              {link.icon}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-[1000px] mx-auto px-6 sm:px-12 md:px-24 min-h-screen">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-start pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[var(--lightest-slate)] tracking-tight mb-4">
              hi, <span className="text-[var(--green)]">krishna</span> here.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-8 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--green)] to-blue-400 pb-2">
              Building elegant solutions at the intersection of software and hardware.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-[var(--slate)] text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
              Software engineer and hardware enthusiast based in Gujarat. I specialize in building exceptional digital experiences, routing signals, and structuring modern web architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="mailto:krishna.patel.vlsi@gmail.com" className="inline-block px-8 py-4 border border-[var(--green)] text-[var(--green)] bg-transparent rounded font-mono text-sm hover:bg-[var(--green)]/10 transition-colors">
              Say hi!
            </a>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 max-w-[900px]">
          <SectionHeading number="01" title="About Me" />
          
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--slate)] text-lg leading-relaxed space-y-4 md:w-3/5"
            >
              <p>
                Hello! My name is Krishna. As a fresher and Electronics Engineering student at Rashtriya Raksha University, I bring a fresh perspective to bridging hardware architecture and modern web experiences.
              </p>
              <p>
                My technical foundation spans Web Development, Design, and Video Editing, alongside extensive work in hardware automation. Whether I am routing signals on an ESP32 or structuring state in React, my goal is always to build clean, efficient systems.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
              
              <ul className="grid grid-cols-2 gap-2 mt-5 font-mono text-[13px] text-[var(--slate)]">
                {portfolioData.skills.flatMap(s => s.items).map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[var(--green)]">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:w-2/5 relative group"
            >
              <div className="relative w-64 h-64 mx-auto md:ml-auto border-2 border-[var(--green)] rounded transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-[var(--navy)]/80 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="/image_2c7b87.png" 
                  alt="Tech Avatar"
                  className="w-full h-full object-cover rounded opacity-80"
                />
              </div>
              <div className="absolute top-4 left-4 md:left-auto md:-right-4 w-64 h-64 border-2 border-[var(--green)] rounded -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 max-w-[700px]">
          <SectionHeading number="02" title="Where I've Worked" />
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <h3 className="text-xl font-medium text-[var(--lightest-slate)]">
                  {exp.title} <span className="text-[var(--green)]">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-[13px] text-[var(--light-slate)] mt-1 mb-4">{exp.date}</p>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--green)] mt-1.5">▹</span>
                  <p className="text-[var(--slate)] leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <SectionHeading number="03" title="Some Things I've Built" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--light-navy)] p-8 rounded flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 group shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <svg className="w-10 h-10 text-[var(--green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--lightest-slate)] mb-4 group-hover:text-[var(--green)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-[var(--slate)] leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>
                
                <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto font-mono text-[12px] text-[var(--light-slate)]">
                  {project.tech.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-6 pb-12">
          <p className="font-mono text-[13px] text-[var(--slate)] hover:text-[var(--green)] transition-colors cursor-pointer">
            Built by Krishna Patel
          </p>
        </footer>

      </div>
    </main>
  );
}

export default App;