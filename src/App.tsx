import { useEffect, useState } from 'react';
import { Header, type Language, type Theme } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { TickerMarquee } from './components/home/TickerMarquee';
import { AboutSection } from './components/home/AboutSection';
import { ProjectsSection } from './components/home/ProjectsSection';
import { StackSection } from './components/home/StackSection';
import { EducationSection } from './components/home/EducationSection';
import { Footer } from './components/layout/Footer';
import { ProjectModal } from './components/home/ProjectModal';
import type { ProjectItem } from './data/projects';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es');
  const [theme, setTheme] = useState<Theme>(() => localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark');

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.title = language === 'en'
      ? 'Esteban Mercado Rachath — Junior Software Developer'
      : 'Esteban Mercado Rachath — Desarrollador de Software Junior';
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', language === 'en'
      ? 'Junior Software Developer portfolio by Esteban Mercado Rachath. Web applications, REST APIs, databases, and algorithms.'
      : 'Portafolio de Esteban Mercado Rachath, Desarrollador de Software Junior. Aplicaciones web, API REST, bases de datos y algoritmos.');
  }, [language]);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <div className="site-root min-h-screen font-sans antialiased selection:bg-[#EF4444] selection:text-[#FFFFFF] overflow-x-hidden">
      {/* Fixed Top Header */}
      <Header language={language} onLanguageChange={setLanguage} theme={theme} onThemeChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      {/* Main Content Sections */}
      <main className="pt-16">
        {/* [ 00 ] Hero Section */}
        <Hero language={language} />

        {/* Continuous Ticker Marquee */}
        <TickerMarquee language={language} />

        {/* [ 01 ] Sobre Mí */}
        <AboutSection language={language} />

        {/* [ 02 ] Proyectos */}
        <ProjectsSection language={language} onOpenModal={setActiveModalProject} />

        {/* [ 03 ] Stack & Herramientas */}
        <StackSection language={language} />

        {/* [ 04 ] Formación & Certificaciones */}
        <EducationSection language={language} />

        {/* [ 05 ] Contacto & Footer */}
        <Footer language={language} />
      </main>

      {/* Engineering Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        language={language}
      />
    </div>
  );
}
