
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* HERO */}
      <section className="pt-[120px] pb-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[3rem] font-bold text-background-dark dark:text-white"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-background-dark/60 dark:text-white/60 text-xl mt-2"
        >
          I build innovative, real-world solutions by relentlessly exploring and mastering cutting-edge technologies.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto pt-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-start">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[3/4] bg-surface-light dark:bg-white/5 border border-gold/10 rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(212,175,55,0.1)' }}
          >
            <img
              src="/assets/sekhar.png"
              alt="Sekhar Kurapati"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT BIO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-[2rem] font-semibold text-background-dark dark:text-white mb-4">I Build AI That Ships</h2>
            <div className="space-y-6 text-background-dark/70 dark:text-white/70 text-[1.125rem] leading-relaxed">
              <p>
                From interactive front-end experiences to backend systems and machine learning models, I enjoy exploring how ideas turn into working software. I care about clean design, thoughtful interactions, and code that’s easy to understand and scale.
              </p>
              <p>
                My interests include full-stack web development, machine learning, and building interactive applications with a strong focus on usability and user experience. I believe effective software should combine reliable functionality with simplicity and intuitive design.
              </p>
              <p>
                I enjoy learning new technologies, experimenting with ideas, and continuously strengthening my skills through hands-on, project-based work.
              </p>

            </div>

            {/* CREDIBILITY BADGES */}
            <div className="flex flex-wrap gap-4 mt-10">
              {['Artificial Intelligence', 'Data Science', 'Full-Stack Developer'].map((badge) => (
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
