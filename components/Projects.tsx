'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    id: '01',
    name: 'VELOCE BIKES',
    type: 'E-COMMERCE WEBSITE',
    image: '/images/project_veloce.jpg',
  },
  {
    id: '02',
    name: 'WOODCRAFT',
    type: 'FURNITURE WEBSITE',
    image: '/images/project_woodcraft.jpg',
  },
  {
    id: '03',
    name: 'URBANIC',
    type: 'FASHION MAGAZINE',
    image: '/images/project_urbanic.jpg',
  },
];

export default function Projects() {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-10 md:px-14 lg:px-20 w-full">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <SectionHeading title="Selected Projects" />
          <motion.a
            href="#"
            className="hidden md:flex items-center gap-2 text-text-secondary text-sm font-display uppercase tracking-wider hover:text-white transition-colors group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Project Cards */}
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15} direction="up">
              <motion.div
                className="group flex flex-col cursor-pointer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Container */}
                <div className="relative aspect-[16/11] bg-bg-card border border-border-card rounded-lg overflow-hidden mb-5 group-hover:border-accent-red/60 transition-colors duration-300 shadow-xl">
                  {/* Subtle top bar for browser look */}
                  <div className="px-3 py-2 bg-black/40 border-b border-border-card/50 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <div className="relative w-full h-[calc(100%-25px)] overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                {/* Card Footer with Number & Meta */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-accent-red tracking-tight">
                      {project.id}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white group-hover:text-accent-red transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-text-muted text-[11px] uppercase tracking-wider font-display font-medium">
                        {project.type}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="w-8 h-8 rounded-full border border-border-card flex items-center justify-center group-hover:border-accent-red group-hover:bg-accent-red transition-all"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-text-secondary group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
