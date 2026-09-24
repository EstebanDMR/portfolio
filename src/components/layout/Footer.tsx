import { useEffect, useState } from 'react';
import { PROFILE } from '../../data/profile';
import type { Language } from './Header';

export function Footer({ language }: { language: Language }) {
  const en = language === 'en';
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState<string>('12:00:00 UTC-5');

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Bogota',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const timeString = new Intl.DateTimeFormat(en ? 'en-GB' : 'es-CO', options).format(new Date());
      setLocalTime(`${timeString} UTC-5`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [en]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="contact-section bg-[#080809] scroll-mt-16" id="contacto">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* Section Code Header */}
        <div className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase flex items-center gap-2">
          <span>[ 05 ]</span>
          <span className="h-px w-6 bg-[#27272A]"></span>
          <span>{en ? 'CONTACT' : 'CONTACTO'}</span>
        </div>

        {/* Title: HABLE[MOS] scaled proportionally with Space Grotesk */}
        <div className="select-none overflow-clip">
          <div className="inline-flex items-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none font-display">
            <span className="text-[#FAFAFA]">{en ? 'LET’S' : 'HABLE'}</span>
            <span className="bg-[#EF4444] text-[#FFFFFF] px-2 sm:px-3 ml-1">{en ? 'TALK' : 'MOS'}</span>
          </div>
        </div>

        {/* Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-xs font-mono">
          {/* Column 1: Escribime */}
          <div>
            <span className="text-[#A1A1AA] block uppercase tracking-wider mb-2">{en ? 'EMAIL ME' : 'ESCRÍBEME'}</span>
            <div className="flex items-center gap-2">
              <a 
                className="text-sm text-[#FAFAFA] hover:text-[#EF4444] transition-colors duration-200 font-medium" 
                href={`mailto:${PROFILE.contact.email}`}
              >
                {PROFILE.contact.email}
              </a>
            </div>
            <button 
              type="button"
              onClick={handleCopyEmail}
              className="mt-2 text-[11px] text-[#A1A1AA] hover:text-[#FAFAFA] flex items-center gap-1 cursor-pointer transition-colors"
            >
              {copied ? (
                <span className="text-emerald-400 font-bold">{en ? '[ Email copied! ]' : '[ ¡Correo copiado! ]'}</span>
              ) : (
                <span>{en ? '[ Copy address ]' : '[ Copiar dirección ]'}</span>
              )}
            </button>
          </div>

          {/* Column 2: Redes */}
          <div>
            <span className="text-[#A1A1AA] block uppercase tracking-wider mb-2">{en ? 'SOCIAL' : 'REDES'}</span>
            <div className="space-y-2">
              <div>
                <a 
                  className="text-[#FAFAFA] hover:text-[#EF4444] transition-colors duration-150 inline-flex items-center gap-1 font-medium" 
                  href={PROFILE.contact.linkedinUrl} 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  LinkedIn <span className="text-[10px]">↗</span>
                </a>
              </div>
              <div>
                <a 
                  className="text-[#FAFAFA] hover:text-[#EF4444] transition-colors duration-150 inline-flex items-center gap-1 font-medium" 
                  href={PROFILE.contact.githubUrl} 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  GitHub <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Estado */}
          <div>
            <span className="text-[#A1A1AA] block uppercase tracking-wider mb-2">{en ? 'STATUS' : 'ESTADO'}</span>
            <p className="text-[#FAFAFA] font-medium">
              {en ? 'Available — Barranquilla / Remote' : 'Disponible — Barranquilla / Remoto'}
            </p>
            <p className="text-[#A1A1AA] mt-1">
              {en ? 'Local time' : 'Hora local'}: <span className="text-[#EF4444] font-bold">{localTime}</span>
            </p>
          </div>
        </div>

        {/* Signature and return link */}
        <div className="border-t border-[#27272A] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#A1A1AA] gap-4">
          <div>
            © 2026 <span className="font-bold tracking-widest">ESTEBAN<span className="text-[#EF4444]">DMR</span></span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#71717A]">{en ? 'BARRANQUILLA / REMOTE' : 'BARRANQUILLA / REMOTO'}</span>
            <a className="hover:text-[#FAFAFA] text-[#EF4444] transition-colors font-bold" href="#hero">
              ↑ {en ? 'BACK TO TOP' : 'SUBIR'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
