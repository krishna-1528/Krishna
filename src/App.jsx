import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './App.css'; 

const socialLinks = [
  { href: 'mailto:krishna.patel.vlsi@gmail.com', label: 'Email', icon: '✉️' },
  { href: 'https://github.com/krishna-1528', label: 'GitHub', icon: '💻' },
  { href: 'https://www.linkedin.com/in/krishna-patel-4257582a1/', label: 'LinkedIn', icon: '🔗' },
  { href: 'https://x.com/Kr15is28', label: 'Twitter', icon: '𝕏' }
];

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
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[var(--lightest-slate)] mb-8">
      {text.slice(0, 4)}<span className="text-[var(--green)]">{text.slice(4, 11)}</span>{text.slice(11)}
      <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.9 }} className="inline-block w-[6px] h-[0.9em] bg-white ml-2 align-baseline" />
    </h1>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[var(--navy)]">
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-12 py-5 bg-[var(--navy)]/90 backdrop-blur-sm">
        <div className="text-[var(--green)] font-mono text-xl border-2 border-[var(--green)] rounded-full w-10 h-10 flex items-center justify-center">K</div>
        <div className="hidden md:flex gap-8 font-mono text-[13px] text-[var(--light-slate)]">
          <span>01. About</span> <span>02. Experience</span> <span>03. Work</span>
        </div>
      </nav>

      {/* SIDE SOCIALS */}
      <div className="fixed bottom-0 left-12 hidden md:flex flex-col gap-6 text-[var(--light-slate)]">
        {socialLinks.map(link => <a key={link.label} href={link.href} className="hover:text-[var(--green)]">{link.icon}</a>)}
        <div className="w-[1px] h-24 bg-[var(--light-slate)] mx-auto"></div>
      </div>

      <div className="max-w-[1000px] mx-auto px-12 md:px-24">
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <TypewriterHeading />
          <p className="text-lg text-[var(--slate)] max-w-2xl">Undergrad at <strong>Rashtriya Raksha University</strong>. I bridge hardware and software, turning coffee into code.</p>
        </section>

        <section id="about" className="py-24">
          <h2 className="text-3xl text-[var(--lightest-slate)] mb-10 font-bold">01. About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="text-[var(--slate)] text-lg space-y-4 md:w-3/5">
              <p>Hello! My name is Krishna. I bring a fresh perspective to bridging hardware architecture and modern web experiences.</p>
            </div>
            <div className="relative w-64 h-64 border-2 border-[var(--green)] rounded p-1">
              <img src="/profile.jpg" alt="Krishna" className="w-full h-full object-cover rounded" />
            </div>
          </div>
        </section>

        <footer className="text-center py-12 font-mono text-[13px] text-[var(--slate)]">
          Built by Krishna Patel
        </footer>
      </div>
    </main>
  );
}

export default App;