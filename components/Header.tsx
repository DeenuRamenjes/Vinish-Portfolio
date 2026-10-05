'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-10 md:px-14 lg:px-20 py-3.5 sm:py-5 flex items-center justify-between backdrop-blur-md bg-bg-primary/60 border-b border-white/5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="text-accent-red text-xs sm:text-sm font-display font-normal uppercase tracking-wider whitespace-nowrap">
          Digital Marketing
        </span>
        <span className="hidden xs:inline text-text-muted text-xs sm:text-sm">/</span>
        <span className="hidden xs:inline text-white text-xs sm:text-sm font-display font-normal uppercase tracking-wider whitespace-nowrap">
          SEO Specialist
        </span>
      </div>
      <motion.a
        href="#contact"
        className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group shrink-0"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-white text-xs sm:text-sm font-display font-normal uppercase tracking-wider group-hover:text-accent-red transition-colors whitespace-nowrap">
          Available for Hire
        </span>
        <motion.div
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.3 }}
        >
          <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-red" />
        </motion.div>
      </motion.a>
    </motion.header>
  );
}
