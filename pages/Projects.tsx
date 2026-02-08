
import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import { projects } from '../data/projects';

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
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-background-dark/60 dark:text-white/60 text-lg max-w-[600px] mx-auto"
          >
            These projects reflect what I’ve learned by building, experimenting, and solving real problems.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
    </div>
  );
};

export default Projects;
