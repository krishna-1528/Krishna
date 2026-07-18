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

            {/* YOUR PHOTO HERE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:w-2/5 relative group"
            >
              <div className="relative w-64 h-64 mx-auto md:ml-auto border-2 border-[var(--green)] rounded transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-[var(--green)]/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Krishna"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="absolute top-4 left-4 md:left-auto md:-right-4 w-64 h-64 border-2 border-[var(--green)] rounded -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER - Ensure this is included at the end of your container */}
        <footer className="text-center py-6 pb-12">
          <p className="font-mono text-[13px] text-[var(--slate)] hover:text-[var(--green)] transition-colors cursor-pointer">
            Built by Krishna Patel
          </p>
        </footer>
        