
import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';

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
                ENTERPRISE AI TRAINING
              </span>
            </div>
            <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-background-dark dark:text-white mb-6">
              Master <span className="text-gold">AI</span> That Actually Ships
            </h1>
            <p className="text-lg md:text-xl text-background-dark/60 dark:text-white/60 leading-relaxed max-w-[600px] mb-8">
              20 years in enterprise tech. 6 years at FAANG. I don't teach theory — I teach what gets deployed to production.
            </p>
            <div className="flex items-center gap-2 mb-10 text-sm text-background-dark/50 dark:text-white/50">
              6,700+ YouTube Subscribers <span className="text-gold">•</span> 20+ Years Experience <span className="text-gold">•</span> Fortune 500 Trained
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold text-background-dark px-8 py-4 rounded-lg font-semibold transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                Explore Courses
              </button>
              <button className="border border-gold text-gold px-8 py-4 rounded-lg font-semibold transition-all hover:bg-gold/10">
                Watch Free on YouTube
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
            <CourseCard
              tag="AGENTIC AI • LLMS"
              title="Build Production AI Agents"
              description="From zero to deployed. Learn to build AI agents that actually work in enterprise environments with patterns that scale."
              meta="12 modules • 8 hours of content"
              price="$297"
              delay={0.1}
            />
            <CourseCard
              tag="CLOUD • DEVOPS"
              title="Deploy AI to Production"
              description="Ship AI to production in minutes, not weeks. Learn the infrastructure patterns that actually work at scale."
              meta="8 modules • 5 hours of content"
              price="$197"
              delay={0.2}
            />
            <CourseCard
              tag="STRATEGY • GTM"
              title="Enterprise AI Strategy"
              description="Turn your AI prototype into a product that sells. Learn positioning, pricing, and go-to-market for AI products."
              meta="6 modules • 4 hours of content"
              price="$497"
              delay={0.3}
            />
            <CourseCard
              tag="1:1 MENTORSHIP"
              title="Private Coaching"
              description="Direct access to 20 years of experience. Personalized guidance for your specific AI challenges."
              meta="4 sessions per month"
              price="$1,500/mo"
              delay={0.4}
            />
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
