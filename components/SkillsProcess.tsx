'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import {
  Search,
  PenTool,
  Layers,
  Rocket,
  BarChart3,
  Briefcase,
  GraduationCap,
  Globe,
  Quote,
  ArrowRight,
} from 'lucide-react';

const skills = [
  'Search Engine Optimization (SEO)',
  'Meta Ads Manager',
  'Facebook & Instagram Campaigns',
  'High-Intent Keyword Research',
  'Social Media Marketing (SMM)',
  'WordPress CMS Management',
  'Canva Visual Design',
  'Digital Marketing Strategy',
  'Google Analytics & SEM',
  'C and C++ Programming',
];

const experienceBullets = [
  'Supervised workshop output, quality standards, and daily execution schedules.',
  'Allocated personnel across specialized workstations to maximize operational efficiency.',
  'Prepared shift demand projections, workflow charts, and capacity planning.',
  'Resolved unforeseen operational bottlenecks and time-critical challenges on the floor.',
];

const processSteps = [
  {
    num: '01',
    title: 'Audit & Discovery',
    desc: 'Comprehensive search query analysis, competitive benchmarking, and target persona mapping.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Campaign Architecture',
    desc: 'Structuring Meta Ads funnels, custom retargeting audiences, and verified tracking pixels.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Content & Creative',
    desc: 'Deploying high-converting WordPress landing experiences and compelling visual content assets.',
    icon: PenTool,
  },
  {
    num: '04',
    title: 'Execution & Optimization',
    desc: 'Launching multi-channel ad sets with disciplined budget pacing and rigorous A/B variant testing.',
    icon: Rocket,
  },
  {
    num: '05',
    title: 'Analytics & ROI',
    desc: 'Tracking Google Analytics metrics, evaluating cost-per-lead, and scaling top-performing campaigns.',
    icon: BarChart3,
  },
];

export default function SkillsProcess() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 sm:px-10 md:px-14 lg:px-20 w-full bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <p className="text-accent-red text-xs uppercase tracking-widest font-normal mb-3">
              Professional Experience &amp; Capabilities
            </p>
            <SectionHeading title="Experience &amp; Skills" className="text-3xl sm:text-4xl md:text-5xl" />
          </div>

          <p className="text-text-secondary text-sm max-w-md leading-relaxed font-normal">
            Blending operational leadership and engineering problem-solving with performance marketing strategies to deliver measurable business growth.
          </p>
        </div>

        {/* Top Grid: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Ashok Leyland Supervisory Experience */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" className="h-full">
              <div className="bg-[#111111] border border-white/10 rounded-xl p-6 sm:p-8 h-full flex flex-col justify-between transition-colors hover:border-white/20">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-red/10 border border-accent-red/20 flex items-center justify-center shrink-0">
                        <Briefcase className="w-4 h-4 text-accent-red" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight">
                          Supervisory Experience
                        </h3>
                        <p className="text-xs text-text-secondary font-normal">
                          Ashok Leyland
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-accent-red font-normal px-2.5 py-1 rounded bg-accent-red/10 border border-accent-red/20">
                      2025
                    </span>
                  </div>

                  <p className="text-xs text-text-secondary font-normal mb-5 leading-relaxed">
                    Demonstrated operational leadership, team orchestration, and process optimization within a high-tempo industrial manufacturing environment:
                  </p>

                  <ul className="space-y-3.5">
                    {experienceBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent-red font-normal leading-relaxed shrink-0">—</span>
                        <span className="text-xs sm:text-sm text-text-secondary font-normal leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-text-muted">
                  <span>Manufacturing &amp; Assembly Operations</span>
                  <span className="text-white/60 font-normal">Workflow Leadership</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Education & Languages */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" className="h-full">
              <div className="bg-[#111111] border border-white/10 rounded-xl p-6 sm:p-8 h-full flex flex-col justify-between transition-colors hover:border-white/20">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-accent-red/10 border border-accent-red/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4 text-accent-red" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight">
                        Education &amp; Background
                      </h3>
                      <p className="text-xs text-text-secondary font-normal">
                        Academic Qualifications
                      </p>
                    </div>
                  </div>

                  {/* Degree 1 */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-sm font-normal text-white">
                          B.E. in Mechanical Engineering
                        </h4>
                        <span className="text-xs text-accent-red font-normal shrink-0">
                          2021 – 2025
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary font-normal">
                        University College of Engineering, Nagercoil
                      </p>
                    </div>

                    {/* Certification */}
                    <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-sm font-normal text-white">
                          Expert Pro in Digital Marketing
                        </h4>
                        <span className="text-xs text-accent-red font-normal shrink-0">
                          2025
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary font-normal">
                        CADD Centre Training Services
                      </p>
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-3.5 h-3.5 text-accent-red" />
                      <span className="text-xs uppercase tracking-widest text-text-secondary font-normal">
                        Communication Languages
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                        <p className="text-xs font-normal text-white">Tamil</p>
                        <p className="text-[11px] text-text-muted font-normal mt-0.5">Native Speaker</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                        <p className="text-xs font-normal text-white">English</p>
                        <p className="text-[11px] text-text-muted font-normal mt-0.5">Professional Working</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-text-muted">
                  Technical foundation in problem-solving &amp; logic
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Middle Section: Skills Competency Cloud */}
        <div className="mb-8">
          <ScrollReveal direction="up">
            <div className="bg-[#111111] border border-white/10 rounded-xl p-6 sm:p-8 transition-colors hover:border-white/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight">
                    Core Marketing &amp; Technical Capabilities
                  </h3>
                  <p className="text-xs text-text-secondary font-normal mt-0.5">
                    End-to-end performance marketing stack, digital growth channels, and analytical tools.
                  </p>
                </div>
                <span className="text-xs text-text-muted font-normal">
                  10 Core Competencies
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white/85 text-xs font-normal transition-all hover:border-accent-red/50 hover:bg-accent-red/5 hover:text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bento: 5-Stage Campaign Process + Executive Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 5-Stage Campaign Workflow */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" className="h-full">
              <div className="bg-[#111111] border border-white/10 rounded-xl p-6 sm:p-8 h-full flex flex-col justify-between transition-colors hover:border-white/20">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight">
                      Campaign Execution Methodology
                    </h3>
                    <span className="text-xs text-accent-red font-normal">
                      5-Step Framework
                    </span>
                  </div>

                  <div className="space-y-5">
                    {processSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      return (
                        <div
                          key={step.num}
                          className="flex items-start gap-4 p-3 rounded-lg bg-white/[0.015] border border-white/5 transition-colors hover:border-white/15"
                        >
                          <div className="w-8 h-8 rounded-lg bg-accent-red/10 border border-accent-red/20 flex items-center justify-center shrink-0 mt-0.5">
                            <IconComponent className="w-3.5 h-3.5 text-accent-red" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-xs sm:text-sm font-normal text-white">
                                {step.title}
                              </h4>
                              <span className="text-xs text-accent-red font-normal">
                                {step.num}
                              </span>
                            </div>
                            <p className="text-xs text-text-secondary font-normal leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-text-muted">
                  Structured execution driven by measurable key performance indicators (KPIs)
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Quote & Direct Action */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Editorial Quote Card */}
            <ScrollReveal direction="right" className="flex-1">
              <div className="bg-[#111111] border border-white/10 rounded-xl p-6 sm:p-8 h-full flex flex-col justify-between transition-colors hover:border-accent-red/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/5 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  <Quote className="w-6 h-6 text-accent-red mb-5 opacity-80" />
                  <p className="text-base sm:text-lg italic leading-relaxed text-white/90 font-normal">
                    &ldquo;Data-driven marketing transforms audience curiosity into sustainable brand loyalty and measurable business revenue.&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-normal text-white">
                      Vinish Kumar
                    </p>
                    <p className="text-xs text-text-secondary font-normal mt-0.5">
                      Digital Marketing &amp; SEO Specialist
                    </p>
                  </div>
                  <span className="text-xs text-accent-red font-normal">
                    Core Philosophy
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Direct Collaboration CTA */}
            <ScrollReveal direction="right" delay={0.15}>
              <a
                href="#contact"
                className="group block bg-[#111111] border border-white/10 rounded-xl p-6 sm:p-7 transition-all hover:border-accent-red hover:bg-[#141414]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-accent-red font-normal">
                    Available for Opportunities
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent-red transition-transform group-hover:translate-x-1" />
                </div>
                <h4 className="text-base sm:text-lg font-normal text-white group-hover:text-accent-red transition-colors">
                  Initiate a Campaign Consultation
                </h4>
                <p className="text-xs text-text-secondary font-normal mt-1 leading-relaxed">
                  Open for full-time marketing roles, campaign architectures, and high-impact SEO auditing.
                </p>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
