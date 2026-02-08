
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* HERO */}
      <section className="pt-[140px] pb-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[3rem] font-bold text-background-dark dark:text-white"
        >
          About Surya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-background-dark/60 dark:text-white/60 text-xl mt-4"
        >
          20 years building enterprise technology
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-16 items-start">
          {/* LEFT IMAGE PLACEHOLDER */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[3/4] bg-surface-light dark:bg-white/5 border-2 border-dashed border-gold/30 rounded-2xl flex items-center justify-center text-background-dark/30 dark:text-white/30 text-sm shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(212,175,55,0.1)' }}
          >
            About Photo
          </motion.div>

          {/* RIGHT BIO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-[2rem] font-semibold text-background-dark dark:text-white mb-6">I Build AI That Ships</h2>
            <div className="space-y-6 text-background-dark/70 dark:text-white/70 text-[1.125rem] leading-relaxed">
              <p>
                After 20 years in enterprise tech — including 6 years at FAANG and leadership roles at top consulting and enterprise software companies — I've seen what separates AI projects that make it to production from those that don't.
              </p>
              <p>
                I created AI with Surya to share the patterns that actually work. No fluff. No toy demos. Just battle-tested approaches that get deployed to real enterprise environments.
              </p>
            </div>

            {/* CREDIBILITY BADGES */}
            <div className="flex flex-wrap gap-4 mt-10">
              {['FAANG Experience', 'Big 4 Consulting', 'Enterprise Software'].map((badge) => (
                <div
                  key={badge}
                  className="bg-gold/10 border border-gold/30 text-gold px-4 py-2 rounded-md text-[0.75rem] font-medium uppercase tracking-wider"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
