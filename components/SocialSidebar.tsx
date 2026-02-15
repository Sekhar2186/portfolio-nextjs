
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';

// X (formerly Twitter) icon component
const XIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const SocialSidebar: React.FC = () => {
    const socials = [
        {
            name: 'Instagram',
            icon: <Instagram size={24} />,
            href: 'https://www.instagram.com/kurapatisomasekhar',
            color: 'text-black/60 dark:text-white/80 hover:text-foreground/80'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            href: 'https://linkedin.com/in/somasekhar6423',
            color: 'text-black/60 dark:text-white/80 hover:text-foreground/80'
        },
        {
            name: 'GitHub',
            icon: <Github size={24} />,
            href: 'https://github.com/Sekhar2186',
            color: 'text-black/60 dark:text-white/80 hover:text-foreground/80'
        }
    ];

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
            <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                className="bg-white dark:bg-black border-y border-r border-black/10 dark:border-white/10 rounded-r-2xl py-6 px-4 flex flex-col gap-8"
            >
                {socials.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className={`transition-all duration-300 ${social.color} hover:scale-110`}
                        title={social.name}
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default SocialSidebar;
