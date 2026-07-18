import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './App.css';

// --- COMPONENTS ---

function TypewriterHeading() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "hi, krishna here.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl font-bold text-white mb-8">
      {displayText.slice(0, 4)}<span className="text-green-500">{displayText.slice(4, 11)}</span>{displayText.slice(11)}
      <motion.span 
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ repeat: Infinity, duration: 0.9 }} 
        className="inline-block w-[6px] h-[0.9em] bg-white ml-2 align-baseline" 
      />
    </h1>
  );
}

// --- MAIN APP COMPONENT ---

function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-300">
      <div className="max-w-[1000px] mx-auto px-12 py-20">
        
        <TypewriterHeading />

        {/* PROFILE IMAGE SECTION */}
        <section id="about" className="py-10">
          <div className="relative w-64 h-64 mx-auto md:ml-auto">
            <img 
              src="/profile.jpeg" 
              alt="Krishna"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

      </div>
    </main>
  );
}

// THIS IS THE CRITICAL LINE FOR THE BUILD TO SUCCEED
export default App;