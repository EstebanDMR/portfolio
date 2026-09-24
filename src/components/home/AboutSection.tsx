import { getProfile } from '../../data/translations';
import type { Language } from '../layout/Header';

export function AboutSection({ language }: { language: Language }) {
  const PROFILE = getProfile(language);
  const en = language === 'en';
  return (
    <section className="about-section border-b border-[#27272A] scroll-mt-16" id="sobre-mi">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* Section Code Header */}
        <div className="font-mono text-xs text-[#A1A1AA] mb-8 tracking-widest uppercase flex items-center gap-2">
          <span>[ 01 ]</span>
          <span className="h-px w-6 bg-[#27272A]"></span>
          <span>{en ? 'ABOUT ME' : 'SOBRE MÍ'}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Technical ASCII / Photo Frame (5 cols) */}
          <div className="md:col-span-5 w-full max-w-[33rem] mx-auto">
            <div className="relative bg-[#121214] border border-[#27272A] p-4 group">
              {/* Frame Header Metas */}
              <div className="flex justify-between items-center text-[10px] font-mono text-[#A1A1AA] pb-3 border-b border-[#27272A] mb-4">
                <span>ESTEBAN_M.JPG</span>
                <span>©2026 // {en ? 'PROFILE' : 'PERFIL'}</span>
              </div>

              {/* Stylized Developer Matrix Frame */}
              <div className="about-portrait w-full bg-[#0E0E10] border border-[#27272A] flex flex-col items-center justify-center p-6 relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Stylized Monospace Visual Element */}
                <div className="font-mono text-[11px] leading-tight text-[#EF4444]/80 font-light select-none mb-4">
                  ░░░░░░░░░░░░░░░░░░░░░<br/>
                  ░░░░░░█████████░░░░░░<br/>
                  ░░░░█████████████░░░░<br/>
                  ░░░████░░░░░░░████░░░<br/>
                  ░░░██░░░░░░░░░░░██░░░<br/>
                  ░░░███████████████░░░<br/>
                  ░░░██░░░░░░░░░░░██░░░<br/>
                  ░░░██░░░░░░░░░░░██░░░<br/>
                  ░░░░█████████████░░░░<br/>
                  ░░░░░░█████████░░░░░░<br/>
                  ░░░░░░░░░░░░░░░░░░░░░
                </div>

                <div className="relative z-10">
                  <span className="inline-block px-2 py-0.5 bg-[#EF4444] text-[#FFFFFF] font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                    {en ? 'SOFTWARE DEVELOPMENT' : 'DESARROLLO DE SOFTWARE'}
                  </span>
                  <h3 className="text-[#FAFAFA] font-bold font-mono text-sm">{PROFILE.name}</h3>
                  <p className="text-xs text-[#A1A1AA] font-mono mt-1">{en ? 'Systems Engineering · Software Development' : 'Ingeniería de Sistemas · Desarrollo de Software'}</p>
                </div>

                {/* Footer stamp inside frame */}
                <div className="absolute bottom-2 left-3 right-3 flex justify-between text-[9px] font-mono text-[#71717A]">
                  <span>{en ? 'FIELD: SOFTWARE DEVELOPMENT' : 'ÁREA: DESARROLLO DE SOFTWARE'}</span>
                  <span>{en ? 'STAGE: FINAL YEAR' : 'ETAPA: FINAL'}</span>
                </div>
              </div>

              {/* Extra Frame Sub-badge */}
              <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-[#A1A1AA]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#EF4444]"></span>
                  <span>BARRANQUILLA, COLOMBIA</span>
                </div>
                <span>SYS_ING</span>
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Now Doing (7 cols) */}
          <div className="md:col-span-7">
            {/* Large Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] tracking-tight leading-tight mb-8">
              {en ? 'I build software' : 'Construyo software'} <br />
              <span className="text-[#71717A]">{en ? 'by understanding how it works.' : 'entendiendo cómo funciona.'}</span>
            </h2>

            {/* Currently Block // AHORA MISMO */}
            <div className="bg-[#121214] border-l-2 border-[#EF4444] p-5 mb-8 font-mono text-xs">
              <span className="text-[#A1A1AA] font-bold tracking-widest block mb-3">{en ? '// RIGHT NOW' : '// AHORA MISMO'}</span>
              <ul className="space-y-2 text-[#D4D4D8]">
                {PROFILE.nowDoing.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#EF4444]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Descriptive Body Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              <p>
                {PROFILE.about.paragraph1}
              </p>
              <p>
                {PROFILE.about.paragraph2}
              </p>
            </div>

            {/* Micro Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#27272A] text-xs font-mono">
              {PROFILE.microSkills.map((skill) => (
                <div key={skill.number} className="p-3 bg-[#121214] border border-[#27272A]">
                  <span className="text-[#71717A] block mb-1">{skill.number} / {skill.label}</span>
                  <span className="text-[#FAFAFA] font-medium">{skill.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
