
import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/Projectcard';
import { TextHoverEffect } from '../components/ui/text-hover-effect';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [feedbackStatus, setFeedbackStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = React.useState("");
  const [feedbackInput, setFeedbackInput] = React.useState("");

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackInput.trim()) return;

    setFeedbackStatus('submitting');

    const formData = new FormData();
    formData.append("access_key", "20a69267-0040-4122-8619-abf794f3efe7"); // Applied your Web3Forms Access Key
    formData.append("feedback", feedbackInput);
    formData.append("subject", "New Portfolio Feedback");
    formData.append("from_name", "Portfolio Visitor");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFeedbackStatus('success');
        setFeedbackMessage("Feedback sent! Thank you.");
        setFeedbackInput("");
      } else {
        setFeedbackStatus('error');
        setFeedbackMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setFeedbackStatus('error');
      setFeedbackMessage("Failed to send feedback.");
    }
  };

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
              Full Stack Developer <span className="text-gold">•</span> Machine Learning<span className="text-gold">•</span>Artificial Intelligence <span className="text-gold">•</span> Deep Learning
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-background-dark px-6 py-2 rounded-lg font-semibold transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                Resume / CV
              </a>
              <Link to="/contact">
                <button className="border border-gold text-gold px-6 py-2 rounded-lg font-semibold transition-all hover:bg-gold/10">
                  Get in touch
                </button>
              </Link>
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

      {/* TEXT HOVER EFFECT SECTION */}
      <section className="h-[18rem] flex items-center justify-center">
        <TextHoverEffect text="SEKHAR" />
      </section>

      {/* CTA SECTION */}
      <section className="relative py-[160px] text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-[600px] mx-auto px-6">
          <h2 className="text-[1.70rem] font-semibold text-background-dark dark:text-white mb-4">Where AI Meets Scalable Web Engineering</h2>
          <p className="text-lg text-background-dark/60 dark:text-white/60 mb-10">
            I'm a software engineer who loves new challenges, passionate about technology and intersection of AI and web development.
          </p>

          <form onSubmit={handleFeedbackSubmit} className="max-w-[400px] mx-auto space-y-4">
            <textarea
              value={feedbackInput}
              onChange={(e) => setFeedbackInput(e.target.value)}
              placeholder="Your feedback..."
              required
              className="w-full bg-surface-light dark:bg-[#0a0a12] border border-gold-subtle rounded-lg px-4 py-3 text-background-dark dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none shadow-sm"
              rows={3}
            />
            {feedbackMessage && (
              <div className={`text-sm font-medium ${feedbackStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {feedbackMessage}
              </div>
            )}
            <button
              type="submit"
              disabled={feedbackStatus === 'submitting'}
              className="bg-gold text-background-dark px-10 py-3 rounded-lg text-lg font-semibold transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              {feedbackStatus === 'submitting' ? 'Sending...' : 'Send Feedback'}
            </button>
          </form>
          <p className="mt-6 text-sm text-background-dark/40 dark:text-white/40"></p>
        </div>
      </section>
    </div>
  );
};

export default Home;
