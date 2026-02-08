
import React from 'react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  tag: string;
  title: string;
  description: string;
  meta: string;
  price: string;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ tag, title, description, meta, price, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
      className="group bg-surface-light dark:bg-white/5 border border-gold-subtle rounded-2xl p-8 transition-all hover:border-gold/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col h-full"
    >
      <span className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-gold">
        {tag}
      </span>
      <h3 className="text-2xl font-semibold text-background-dark dark:text-white mt-3 mb-3 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-background-dark/60 dark:text-white/60 text-base leading-relaxed mb-6">
        {description}
      </p>
      <div className="mt-auto">
        <div className="text-sm text-background-dark/40 dark:text-white/40 mb-4">
          {meta}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gold">
            {price}
          </span>
          <button className="text-gold font-medium hover:underline flex items-center gap-1 group/link">
            Enroll Now <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
