
import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';

const Projects: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark pt-[140px] pb-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[3rem] font-bold text-background-dark dark:text-white mb-4"
          >
            All Courses & Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-background-dark/60 dark:text-white/60 text-lg max-w-[600px] mx-auto"
          >
            Practical, enterprise-grade training designed to get you from prototype to production.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <CourseCard
              tag="AGENTIC AI • LLMS"
              title="Build Production AI Agents"
              description="From zero to deployed. Learn to build AI agents that actually work in enterprise environments."
              meta="12 modules • 8 hours of content"
              price="$297"
              delay={0.1}
            />
            <CourseCard
              tag="CLOUD • DEVOPS"
              title="Deploy AI to Production"
              description="Ship AI to production in minutes, not weeks. Infrastructure patterns that work."
              meta="8 modules • 5 hours of content"
              price="$197"
              delay={0.2}
            />
            <CourseCard
              tag="STRATEGY • GTM"
              title="Enterprise AI Strategy"
              description="Turn your AI prototype into a product that sells. Learn positioning and pricing."
              meta="6 modules • 4 hours of content"
              price="$497"
              delay={0.3}
            />
            <CourseCard
              tag="DEVELOPMENT"
              title="Next.js for AI Apps"
              description="Master high-performance React frameworks for building AI-first user interfaces."
              meta="10 modules • 6 hours"
              price="$249"
              delay={0.4}
            />
            <CourseCard
              tag="DATA"
              title="Vector DB Masterclass"
              description="Architecture patterns for RAG, scaling Pincone, Weaviate and Postgres Vector."
              meta="5 modules • 3 hours"
              price="$149"
              delay={0.5}
            />
            <CourseCard
              tag="SECURITY"
              title="Enterprise AI Security"
              description="Mitigating prompt injection and ensuring data privacy in the enterprise."
              meta="4 modules • 2.5 hours"
              price="$199"
              delay={0.6}
            />
        </div>
      </div>
    </div>
  );
};

export default Projects;
