import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CorePhilosophySection from './components/CorePhilosophySection';
import ProjectsSection from './components/ProjectsSection';
import PostmortemSection from './components/PostmortemSection';
import SkillsAndContactSection from './components/SkillsAndContactSection';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8FA] text-[#111113] dark:bg-[#0D0D10] dark:text-[#F4F4F5] transition-colors duration-200">
      <Navbar onContactClick={handleScrollToContact} />
      <main className="flex-1">
        <HeroSection theme={theme} onToggleTheme={handleToggleTheme} />
        <CorePhilosophySection />
        <ProjectsSection />
        <PostmortemSection />
        <SkillsAndContactSection />
      </main>
      <Footer />
    </div>
  );
}
