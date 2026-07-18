import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './App.css'; 

// All your data, components, and functions stay here as they were
const socialLinks = [
  { href: 'mailto:krishna.patel.vlsi@gmail.com', label: 'Email' },
  { href: 'https://github.com/krishna-1528', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/krishna-patel-4257582a1/', label: 'LinkedIn' },
  { href: 'https://x.com/Kr15is28', label: 'Twitter' }
];

const portfolioData = {
  experience: [
    { id: 'trinnovate', title: 'Engineering Intern', company: 'Trinnovate', date: 'Feb 2025 - Present', desc: 'Developing a full-stack visualization platform and automating data workflows for industrial motor diagnostics using Python and React.' }
  ],
  projects: [
    { id: 'krishi', title: 'Krishi-Path', tech: ['React', 'ESP32', 'LoRaWAN', 'Edge AI'], desc: 'Developed an IoT "Black Box" system to monitor crop health and environmental data during transit.' },
    { id: 'hydro', title: 'HydroSense', tech: ['IoT', 'TinyML', 'Hardware'], desc: 'Led the development of an IoT microplastic sensor platform utilizing TinyML for advanced environmental monitoring.' }
  ],
  skills: [
    { category: 'Development', items: ['Web Development', 'Design', 'Video Editing', 'React.js'] },
    { category: 'Hardware', items: ['Python', 'Selenium', 'Verilog', 'Xilinx Vivado'] }
  ]
};

function TypewriterHeading() {
  const fullText = "hi, krishna here.";
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) { setText(fullText.slice(0, i + 1)); i++; }
      else { clearInterval(typingInterval); }
    }, 120);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[var(--lightest-slate)] tracking-tight mb-8">
      {text.slice(0, 4)}<span className="text-[var(--green)]">{text.slice(4, 11)}</span>{text.slice(11)}
      <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.9 }} className="inline-block w-[4px] md:w-[6px] h-[0.9em] bg-white ml-1 align-baseline" />
    </h1>
  );
}

function SectionHeading({ title, number }) {
  return (
    <div className="flex items-center gap-4 mb-10 w-full whitespace-nowrap">
      <h2 className="text-2xl md:text-3xl font-semibold text-[var(--lightest-slate)] flex items-center">
        <span className="text-[var(--green)] font-mono text-xl mr-3 font-normal">{number}.</span>
        {title}
      </h2>
      <div className="h-[1px] w-full max-w-xs bg-[var(--lightest-navy)]"></div>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[var(--navy)]">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-12 md:px-24 min-h-screen">
        
        {/* HERO */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-start pt-20">
          <TypewriterHeading />
          <div className="text-[var(--slate)] text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            <p className="mb-4 text-[var(--light-slate)]">Undergrad at <strong className="text-[var(--white)] font-bold">Rashtriya Raksha University</strong>.</p>
            <p>I turn coffee into code, bridge hardware with full-stack apps, and convince silicon to do my bidding.</p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 max-w-[900px]">
          <SectionHeading number="01" title="About Me" />
          <div className="flex flex-col md:flex-row gap-12">
            <div className="text-[var(--slate)] text-lg leading-relaxed space-y-4 md:w-3/5">
              <p>Hello! My name is Krishna. I bring a fresh perspective to bridging hardware architecture and modern web experiences.</p>
              <ul className="grid grid-cols-2 gap-2 mt-5 font-mono text-[13px]">
                {portfolioData.skills.flatMap(s => s.items).map((skill, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-[var(--green)]">▹</span> {skill}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-2/5 relative group">
              <div className="relative w-64 h-64 mx-auto md:ml-auto border-2 border-[var(--green)] rounded">
                <img src="/profile.jpg" alt="Krishna" className="w-full h-full object-cover rounded" />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-6 pb-12">
          <p className="font-mono text-[13px] text-[var(--slate)]">Built by Krishna Patel</p>
        </footer>

      </div>
    </main>
  );
}

export default App;