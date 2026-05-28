import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CheckCircle, Code, Layers, Info } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen pt-[160px] pb-[120px] flex items-center justify-center">
        <div className="text-center max-w-[500px] px-6">
          <Info className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-background-dark dark:text-white mb-4">Project Not Found</h2>
          <p className="text-background-dark/60 dark:text-white/60 mb-8">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-gold text-background-dark px-6 py-3 rounded-lg font-semibold transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Split technology stack by comma
  const techStack = project.meta.split(',').map((tech) => tech.trim());

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pt-[140px] pb-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-background-dark/60 dark:text-white/60 hover:text-gold dark:hover:text-gold transition-colors font-medium text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <header className="mb-12 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 text-gold rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              {project.tag}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-background-dark dark:text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-background-dark/70 dark:text-white/70 max-w-[800px] leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 items-start mt-8">
          {/* Main details column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* About / Long Description */}
            {project.detailedDescription && (
              <section className="bg-surface-light dark:bg-white/5 border border-gold-subtle rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-background-dark dark:text-white mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-gold" />
                  About the Project
                </h2>
                <div className="w-[40px] h-[2px] bg-gold mb-6" />
                <p className="text-background-dark/80 dark:text-white/80 text-[1.05rem] leading-relaxed whitespace-pre-line">
                  {project.detailedDescription}
                </p>
              </section>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <section className="bg-surface-light dark:bg-white/5 border border-gold-subtle rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-background-dark dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  Key Features
                </h2>
                <div className="w-[40px] h-[2px] bg-gold mb-6" />
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-gold" />
                      <span className="text-background-dark/80 dark:text-white/80 text-base leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </motion.div>

          {/* Sidebar column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Quick Actions (Demo & Github) */}
            <div className="bg-surface-light dark:bg-white/5 border border-gold-subtle rounded-2xl p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-[40px] rounded-full pointer-events-none" />
              <h3 className="text-xl font-bold text-background-dark dark:text-white mb-6">
                Project Links
              </h3>

              <div className="flex flex-col gap-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gold text-background-dark py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gold/20 text-background-dark/40 dark:text-white/40 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-not-allowed text-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo Offline
                  </button>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-gold text-gold py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:bg-gold/10 text-center cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repository
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full border border-gold/20 text-gold/30 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-not-allowed text-center"
                  >
                    <Github className="w-4 h-4" />
                    Private Repo
                  </button>
                )}
              </div>
            </div>

            {/* Tech Stack Meta */}
            <div className="bg-surface-light dark:bg-white/5 border border-gold-subtle rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-background-dark dark:text-white mb-4 flex items-center gap-2">
                <Code className="w-4 h-4 text-gold" />
                Technologies
              </h3>
              <div className="w-[30px] h-[2px] bg-gold mb-6" />
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-background-light dark:bg-white/10 border border-background-dark/10 dark:border-white/10 rounded-lg text-sm text-background-dark/70 dark:text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Project Info */}
            <div className="bg-surface-light dark:bg-white/5 border border-gold-subtle rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-background-dark dark:text-white mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-gold" />
                Details
              </h3>
              <div className="w-[30px] h-[2px] bg-gold mb-6" />
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-background-dark/10 dark:border-white/10">
                  <span className="text-background-dark/50 dark:text-white/50">Status</span>
                  <span className="font-semibold text-gold">{project.status}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-background-dark/10 dark:border-white/10">
                  <span className="text-background-dark/50 dark:text-white/50">Category</span>
                  <span className="font-semibold text-background-dark dark:text-white text-right max-w-[150px] truncate">{project.tag.split('•')[0].trim()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
