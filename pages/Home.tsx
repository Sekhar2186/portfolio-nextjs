
import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] pt-[120px] flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          {/* CONTENT CENTERED OR LEFT ALIGNED */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[800px]"
          >
            <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/50 rounded-full mb-8">
              <span className="text-[0.75rem] font-medium tracking-widest text-gold uppercase">
                HI, I'M SEKHAR KURAPATI
              </span>
            </div>
            <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-background-dark dark:text-white mb-6">
              A <span className="text-gold">Full Stack </span> Web Developer
            </h1>
            <p className="text-lg md:text-xl text-background-dark/60 dark:text-white/60 leading-relaxed max-w-[600px] mb-8">
              I build interactive web using React, Next.js, and TypeScript, backed by Node.js I enjoy working with Tailwind CSS and experimenting with AI and automation tools.
            </p>
            <div className="flex items-center gap-2 mb-10 text-sm text-background-dark/50 dark:text-white/50">
              6,700+ YouTube Subscribers <span className="text-gold">•</span> 20+ Years Experience <span className="text-gold">•</span> Fortune 500 Trained
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold text-background-dark px-6 py-2 rounded-lg font-semibold transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                Resume / CV
              </button>
              <button className="border border-gold text-gold px-6 py-2 rounded-lg font-semibold transition-all hover:bg-gold/10">
                Get in touch
              </button>
            </div>
          </motion.div>
        </div>

        {/* Subtle Background Decoration (Replaces the large photo) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[60%] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2.5rem] font-semibold text-background-dark dark:text-white">Projects</h2>
            <div className="w-[60px] h-[3px] bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {projects.slice(0, 4).map((project) => (
              <CourseCard
                key={project.id}
                tag={project.tag}
                title={project.title}
                description={project.description}
                meta={project.meta}
                price={project.price}
                delay={project.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-[160px] text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-[600px] mx-auto px-6">
          <h2 className="text-[2.5rem] font-semibold text-background-dark dark:text-white mb-4">Ready to Build AI That Ships?</h2>
          <p className="text-lg text-background-dark/60 dark:text-white/60 mb-10">
            Join 6,700+ practitioners learning enterprise AI patterns that actually work in production.
          </p>
          <button className="bg-gold text-background-dark px-12 py-5 rounded-lg text-lg font-semibold transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]">
            Get Started Today
          </button>
          <p className="mt-6 text-sm text-background-dark/40 dark:text-white/40">30-day money back guarantee</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
