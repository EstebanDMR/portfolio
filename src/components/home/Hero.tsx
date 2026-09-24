import { useEffect, useState } from 'react';
import { getProfile } from '../../data/translations';
import type { Language } from '../layout/Header';

export function Hero({ language }: { language: Language }) {
  const [localTime, setLocalTime] = useState('00:00:00');

  useEffect(() => {
    const updateClock = () => setLocalTime(new Intl.DateTimeFormat(language === 'es' ? 'es-CO' : 'en-GB', {
      timeZone: 'America/Bogota', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit',
    }).format(new Date()));
    updateClock();
    const interval = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(interval);
  }, [language]);

  const en = language === 'en';
  const profile = getProfile(language);
  return (
    <section className="hero-shell relative w-full flex flex-col md:flex-row overflow-hidden" id="hero">
      <div className="hero-canvas flex-1 min-w-0 flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
        <div className="hero-dots absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 font-mono text-[10px] sm:text-xs tracking-widest uppercase flex items-center gap-3 hero-meta">
          <span className="hero-index">[ 00 ]</span>
          <span className="h-px w-6 hero-rule" />
          <span>{en ? 'SOFTWARE DEVELOPMENT & DATA SYSTEMS' : 'DESARROLLO DE SOFTWARE Y SISTEMAS DE DATOS'}</span>
        </div>

        <div className="relative z-10 my-auto py-12 md:py-10 lg:py-12">
          <h1 className="hero-title text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase font-display leading-[0.92] select-none">
            {profile.firstName}<br />
            {profile.lastName}<br />
            <span className="hero-title-accent inline-block bg-[#EF4444] text-[#0A0A0B] px-3 sm:px-4 mt-2">DEV</span>
          </h1>
        </div>

        <p className="relative z-10 text-xs sm:text-sm font-mono hero-statement max-w-2xl leading-relaxed">
          {profile.statement}
        </p>
      </div>

      <aside className="hero-sidebar w-full md:w-60 lg:w-72 xl:w-80 shrink-0 border-t md:border-t-0 md:border-l flex flex-col">
        <div className="hero-specs divide-y text-xs font-mono">
          <div className="hero-spec px-5 py-4 lg:px-6"><span className="hero-spec-label block tracking-wider uppercase text-[10px] mb-1">{en ? 'ROLE' : 'ROL'}</span><p className="font-bold uppercase tracking-wider">{profile.role}</p></div>
          <div className="hero-spec px-5 py-4 lg:px-6"><span className="hero-spec-label block tracking-wider uppercase text-[10px] mb-1">{en ? 'LOCATION' : 'UBICACIÓN'}</span><p className="font-bold uppercase tracking-wider">{profile.location}</p></div>
          <div className="hero-spec px-5 py-4 lg:px-6"><span className="hero-spec-label block tracking-wider uppercase text-[10px] mb-1">{en ? 'STACK' : 'TECNOLOGÍAS'}</span><p className="font-bold uppercase tracking-wider leading-relaxed">NODE · TYPESCRIPT · PYTHON · SQL · POSTGRESQL · REACT</p></div>
          <div className="hero-spec px-5 py-4 lg:px-6"><span className="hero-spec-label block tracking-wider uppercase text-[10px] mb-1">{en ? 'LOCAL TIME' : 'HORA LOCAL'}</span><p className="font-bold text-base font-mono tabular-nums">{localTime}</p></div>
        </div>
        <a href="#contacto" className="hero-availability bg-[#EF4444] text-[#0A0A0B] p-5 sm:p-6 lg:p-8 flex-1 flex items-center gap-3 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#DC2626] transition-colors">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0A0A0B] shrink-0" aria-hidden="true" />
          <span>{profile.status}</span>
        </a>
      </aside>
    </section>
  );
}
