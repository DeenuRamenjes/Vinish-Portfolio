import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Certificates from '@/components/Certificates';
import SkillsProcess from '@/components/SkillsProcess';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <div className="w-full h-px bg-border-card" />
      <Certificates />
      <div className="w-full h-px bg-border-card" />
      <SkillsProcess />
      <div className="w-full h-px bg-border-card" />
      <Contact />
    </main>
  );
}
