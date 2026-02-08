
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, Project } from '../data/projects';

interface SearchProps {
    isOpen: boolean;
    onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Project[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        if (!isOpen) {
            setQuery('');
            setResults([]);
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filtered = projects.filter(
            (project) =>
                project.title.toLowerCase().includes(lowerQuery) ||
                project.description.toLowerCase().includes(lowerQuery) ||
                project.tag.toLowerCase().includes(lowerQuery) ||
                project.meta.toLowerCase().includes(lowerQuery)
        );
        setResults(filtered);
    }, [query]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[60] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md flex flex-col pt-[100px] px-6"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all"
                        aria-label="Close Search"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    <div className="max-w-[800px] w-full mx-auto">
                        {/* Search Input */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="relative mb-12"
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search projects..."
                                className="w-full bg-transparent border-b-2 border-gold/30 text-3xl font-bold text-background-dark dark:text-white pb-4 focus:outline-none focus:border-gold transition-colors placeholder:text-background-dark/20 dark:placeholder:text-white/20"
                            />
                        </motion.div>

                        {/* Results */}
                        <div className="overflow-y-auto max-h-[calc(100vh-250px)] pb-12 space-y-4 custom-scrollbar">
                            {results.length > 0 ? (
                                results.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            to="/projects"
                                            onClick={onClose}
                                            className="block p-6 rounded-xl bg-surface-light dark:bg-white/5 border border-gold-subtle hover:border-gold/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all group"
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="text-xs font-medium uppercase tracking-wider text-gold mb-1 block">{project.tag}</span>
                                                    <h3 className="text-xl font-bold text-background-dark dark:text-white group-hover:text-gold transition-colors">{project.title}</h3>
                                                    <p className="text-background-dark/60 dark:text-white/60 text-sm mt-2 line-clamp-2">{project.description}</p>
                                                </div>
                                                <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">→</span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))
                            ) : query.trim() !== '' ? (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center text-background-dark/40 dark:text-white/40 text-lg mt-8"
                                >
                                    No projects found for "{query}"
                                </motion.p>
                            ) : null}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Search;
