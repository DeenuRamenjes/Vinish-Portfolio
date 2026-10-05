'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const contactDetails = [
  {
    icon: Mail,
    label: 'vinishkumar890@gmail.com',
    href: 'mailto:vinishkumar890@gmail.com',
    sublabel: 'Direct Email',
    actionText: 'Compose Email',
  },
  {
    icon: Phone,
    label: '+91 63742 68678',
    href: 'tel:+916374268678',
    sublabel: 'Phone & WhatsApp',
    actionText: 'Direct Call / Chat',
  },
  {
    icon: MapPin,
    label: '8/8-Bharathar Street, Ettamadai',
    href: '#',
    sublabel: 'Location',
    actionText: 'Tamil Nadu, India',
  },
  {
    icon: ShieldCheck,
    label: 'Digital Marketing & SEO Specialist',
    href: '#certificates',
    sublabel: 'Credentials',
    actionText: 'CADD Centre & UCE Nagercoil',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 sm:px-10 md:px-14 lg:px-20 w-full bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <p className="text-accent-red text-xs uppercase tracking-widest font-normal mb-3">
              Direct Communication &amp; Inquiries
            </p>
            <SectionHeading title="Get In Touch" className="text-3xl sm:text-4xl md:text-5xl" />
          </div>

          <p className="text-text-secondary text-sm max-w-md leading-relaxed font-normal">
            Ready to collaborate on performance marketing campaigns, organic search growth, or explore full-time career opportunities.
          </p>
        </div>

        {/* 2-Column Executive Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct CTA Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="bg-[#111111] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight mb-4">
                    Let&apos;s build measurable results together.
                  </h3>

                  <p className="text-sm text-text-secondary font-normal leading-relaxed mb-8">
                    Whether you are looking to scale your brand through Meta Ads, optimize organic visibility with targeted SEO, or hire a disciplined operations supervisor and marketer, I look forward to hearing from you.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary font-normal">
                      <CheckCircle2 className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                      <span>Available for full-time employment &amp; agency roles</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary font-normal">
                      <CheckCircle2 className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                      <span>End-to-end Meta Ads Manager &amp; Google Analytics setup</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary font-normal">
                      <CheckCircle2 className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                      <span>High-intent SEO auditing &amp; WordPress optimization</span>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href="mailto:vinishkumar890@gmail.com"
                    className="inline-flex items-center justify-between w-full p-4 rounded-lg bg-accent-red text-white text-sm font-normal tracking-wide transition-all hover:bg-accent-red-dark"
                  >
                    <span>Send Direct Email</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-text-muted font-normal">
                    <span>Response turnaround:</span>
                    <span className="text-white/80">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Cards Grid & Status Banner */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {contactDetails.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <ScrollReveal key={item.label} delay={index * 0.08} direction="up">
                    <a
                      href={item.href}
                      className="group p-5 rounded-xl border border-white/10 bg-[#111111] flex flex-col justify-between h-full transition-all duration-300 hover:border-accent-red/60 hover:bg-[#141414] block"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 rounded-lg border border-accent-red/20 bg-accent-red/10 flex items-center justify-center transition-colors group-hover:border-accent-red/40 group-hover:bg-accent-red/20">
                          <IconComponent className="w-4 h-4 text-accent-red" />
                        </div>
                        <span className="text-xs text-text-muted font-normal">
                          {item.sublabel}
                        </span>
                      </div>

                      <div>
                        <p className="text-xs sm:text-sm text-white font-normal group-hover:text-accent-red transition-colors break-words mb-1">
                          {item.label}
                        </p>
                        <span className="text-[11px] text-text-secondary font-normal flex items-center gap-1 group-hover:text-white transition-colors">
                          {item.actionText}
                          <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                        </span>
                      </div>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Clean Minimalist Availability Banner (No dots) */}
            <ScrollReveal delay={0.35} direction="up">
              <div className="p-5 rounded-xl border border-white/10 bg-[#111111] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-white font-normal">
                    Status: Open for immediate onboarding &amp; client campaigns
                  </p>
                  <p className="text-xs text-text-muted font-normal mt-0.5">
                    Available for on-site, hybrid, or remote opportunities.
                  </p>
                </div>
                <span className="text-xs text-accent-red font-normal px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 shrink-0">
                  Verified Candidate
                </span>
              </div>
            </ScrollReveal>

            {/* Footer Attribution */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-normal">
              <p>© 2025 Vinish Kumar. All rights reserved.</p>
              <p>Digital Marketing &amp; SEO Specialist / Mechanical Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
