'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: 'words' | 'characters';
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  splitBy = 'words',
  once = true,
}: AnimatedTextProps) {
  const units = splitBy === 'words' ? text.split(' ') : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: splitBy === 'words' ? 0.08 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      className={`inline-flex flex-nowrap whitespace-nowrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
    >
      {units.map((unit, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ marginRight: splitBy === 'words' ? '0.3em' : '0' }}
        >
          {unit}
        </motion.span>
      ))}
    </motion.div>
  );
}
