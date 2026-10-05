'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const certificates = [
  {
    id: '01',
    title: 'Expert Pro in Digital Marketing',
    issuer: 'CADD Centre Training Services',
    period: 'June 2025 – November 2025',
    image: '/images/cert_digital_marketing.jpg',
    description:
      'Rigorous professional specialization covering high-conversion SEO, SEM, Meta Ads Manager (Facebook & Instagram), keyword research, social media marketing (SMM), and performance metrics analysis.',
  },
  {
    id: '02',
    title: 'Bachelor of Engineering in Mechanical Engineering',
    issuer: 'University College of Engineering, Nagercoil',
    period: '2021 – 2025',
    image: '/images/cert_engineering.jpg',
    description:
      'Four-year engineering degree establishing strong analytical foundations, systematic problem-solving, workshop workflow execution, and computational programming in C and C++.',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-32 px-6 sm:px-10 md:px-14 lg:px-20 w-full bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-white/10">
          <p className="text-accent-red text-xs uppercase tracking-widest font-normal mb-3">
            Professional Qualifications
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal tracking-tight text-white">
            Certifications
          </h2>
        </div>

        {/* 2-Column Professional Certificate Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 0.15} direction="up">
              <article className="group bg-[#111111] border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:border-accent-red/50 hover:bg-[#141414]">
                <div>
                  {/* Clean Certificate Image Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 border-b border-white/10">
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-8">
                    {/* Period */}
                    <div className="text-xs text-accent-red font-normal mb-2">
                      {cert.period}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight mb-2 group-hover:text-accent-red transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-sm text-text-secondary font-normal mb-4">
                      {cert.issuer}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed font-normal">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Minimalist Note for Additional Technical Certification */}
        <div className="mt-10 p-5 rounded-xl border border-white/10 bg-[#111111] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-accent-red/10 border border-accent-red/20 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-accent-red" />
            </div>
            <div>
              <p className="text-sm font-normal text-white">
                Additional Technical Certification: <span className="text-accent-red font-normal">C and C++ Programming</span>
              </p>
              <p className="text-xs text-text-secondary font-normal mt-0.5">
                Foundation in algorithm structure, computational logic, and systematic problem solving.
              </p>
            </div>
          </div>
          <span className="text-xs text-text-muted font-normal whitespace-nowrap">
            Verified Technical Credential
          </span>
        </div>
      </div>
    </section>
  );
}
