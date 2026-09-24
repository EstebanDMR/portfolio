import { Moon, Sun } from '@phosphor-icons/react';

export type Language = 'es' | 'en';
export type Theme = 'dark' | 'light';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  theme: Theme;
  onThemeChange: () => void;
}

export function Header({ language, onLanguageChange, theme, onThemeChange }: HeaderProps) {
  const links = language === 'es'
    ? [['SOBRE MÍ', 'sobre-mi'], ['PROYECTOS', 'proyectos'], ['TECNOLOGÍAS', 'stack'], ['FORMACIÓN', 'educacion'], ['CONTACTO', 'contacto']]
    : [['ABOUT', 'sobre-mi'], ['PROJECTS', 'proyectos'], ['STACK', 'stack'], ['EDUCATION', 'educacion'], ['CONTACT', 'contacto']];

  return (
    <header className="site-header fixed top-0 left-0 w-full z-50 border-b">
      <div className="w-full px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-4 text-xs font-mono tracking-wider">
        <a className="brand-mark flex items-center gap-2 transition-colors duration-200 shrink-0" href="#hero" aria-label={language === 'es' ? 'Volver al inicio' : 'Back to top'}>
          <span className="inline-block w-2 h-2 bg-[#EF4444]" aria-hidden="true" />
          <span className="font-bold tracking-widest">ESTEBAN<span className="text-[#EF4444]">DMR</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-4 lg:gap-6" aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}>
          {links.map(([label, id]) => (
            <a className="nav-link transition-colors duration-150" href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button type="button" className="theme-toggle p-1.5 transition-colors cursor-pointer" onClick={onThemeChange}
            aria-label={language === 'es' ? `Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}` : `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'light'}>
            {theme === 'dark' ? <Moon size={17} weight="regular" /> : <Sun size={17} weight="regular" />}
          </button>
          <div className="language-switch flex items-center text-xs border select-none" role="group" aria-label={language === 'es' ? 'Idioma' : 'Language'}>
            <button type="button" className={`px-2.5 py-1.5 cursor-pointer ${language === 'es' ? 'is-active' : ''}`} onClick={() => onLanguageChange('es')} aria-pressed={language === 'es'}>ES</button>
            <button type="button" className={`px-2.5 py-1.5 cursor-pointer ${language === 'en' ? 'is-active' : ''}`} onClick={() => onLanguageChange('en')} aria-pressed={language === 'en'}>EN</button>
          </div>
          <a className="cv-link border border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-[#0A0A0B] px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors" href="/cv-esteban-mercado.pdf" download="CV-Esteban-Mercado.pdf" aria-label={language === 'es' ? 'Descargar currículum' : 'Download résumé'}>CV ↓</a>
        </div>
      </div>
    </header>
  );
}
