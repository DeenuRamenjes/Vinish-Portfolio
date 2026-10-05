'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import AnimatedText from './AnimatedText';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] md:min-h-screen flex flex-col justify-between pt-20 sm:pt-20 pb-6 md:pb-8 overflow-x-clip overflow-y-visible">
      {/* Full-width edge-to-edge PORTFOLIO backdrop - Exactly as requested, Bebas Neue, ZERO side gap, ZERO top cut-off */}
      <motion.div
        className="absolute top-4 sm:top-5 md:top-6 lg:top-7 xl:top-8 left-1/2 -translate-x-1/2 w-screen flex justify-center pointer-events-none select-none z-0 overflow-visible"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
      >
        <h1
          className="w-screen text-center uppercase leading-[0.88] tracking-normal text-accent-red select-none text-[27.5vw] sm:text-[27vw] md:text-[26.8vw] lg:text-[26.5vw] xl:text-[26.2vw] whitespace-nowrap origin-top scale-x-[1.04] sm:scale-x-[1.05] md:scale-x-[1.06] scale-y-[2.1] sm:scale-y-[2.25] md:scale-y-[2.4] lg:scale-y-[2.5]"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.15) 72%, rgba(0,0,0,0) 86%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.15) 72%, rgba(0,0,0,0) 86%)',
          }}
        >
          PORTFOLIO
        </h1>
      </motion.div>

      {/* Portrait Image - positioned in center, overlapping PORTFOLIO backdrop */}
      <motion.div
        className="absolute top-10 sm:top-12 md:top-14 bottom-0 left-1/2 -translate-x-1/2 md:left-[47%] md:-translate-x-1/2 z-10 flex items-end justify-center pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
      >
        <div className="relative h-full flex items-end">
          <img
            src="/images/portrait_clean.jpg"
            alt="Vinish Kumar"
            className="h-full w-auto max-w-none object-contain object-bottom select-none"
            style={{
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            }}
          />
          {/* Subtle mobile readability scrim - hidden on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent md:hidden pointer-events-none" />
        </div>
      </motion.div>

      {/* Foreground Content - Distributed cleanly to left and right */}
      <div className="relative z-20 w-full px-5 sm:px-10 md:px-14 lg:px-20 mt-auto pb-2 md:pb-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 md:gap-8">
          {/* Left Content Column - neatly bounded on the left */}
          <div className="w-full md:w-auto md:max-w-[440px] lg:max-w-[500px]">
            <div className="relative mb-3 sm:mb-5">
              <motion.p
                className="font-script text-accent-red text-2xl sm:text-4xl md:text-5xl mb-[-4px] sm:mb-[-6px] relative z-10 select-none"
                initial={{ opacity: 0, x: -30, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -2 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                Hello, I&apos;m
              </motion.p>

              <div className="flex flex-col select-none">
                <AnimatedText
                  text="VINISH"
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-display uppercase leading-[0.88] tracking-tight text-white"
                  delay={0.9}
                  splitBy="characters"
                />
                <AnimatedText
                  text="KUMAR"
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-display uppercase leading-[0.88] tracking-tight text-white"
                  delay={1.1}
                  splitBy="characters"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <p className="text-accent-red font-display font-normal text-sm sm:text-base md:text-lg uppercase tracking-wider mb-2 sm:mb-3">
                Digital Marketing Specialist
              </p>
              <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-body font-normal">
                Enthusiastic Digital Marketing graduate skilled in SEO, SEM, social media management, content marketing, Google Analytics, and digital advertising. Passionate about creating engaging online campaigns and analyzing performance metrics to drive measurable results.
              </p>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-2 text-text-secondary py-1 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <span className="uppercase tracking-widest font-mono text-[10px] sm:text-xs font-normal text-text-secondary">
                Ettamadai, Tamil Nadu / Available for Hire
              </span>
            </motion.div>
          </div>

          {/* Right Stats Column - 3-col grid on mobile, vertical stack on desktop */}
          <div className="w-full md:w-auto grid grid-cols-3 gap-2 sm:gap-4 md:flex md:flex-col justify-between md:justify-end items-start md:items-end md:gap-9 pt-4 md:pt-0 border-t border-white/10 md:border-t-0 pb-2">
            {[
              { number: 8, suffix: '+', label: 'Core Marketing\n& SEO Skills' },
              { number: 2025, suffix: '', label: 'Graduate &\nCertified Pro' },
              { number: 100, suffix: '%', label: 'Campaign Focus\n& ROI Driven' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-1 sm:gap-2 md:gap-3.5"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.15 }}
              >
                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-accent-red tracking-tight"
                />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-text-secondary font-display whitespace-pre-line leading-tight text-left">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
