import { getProfile } from '../../data/translations';
import type { Language } from '../layout/Header';

export function EducationSection({ language }: { language: Language }) {
  const PROFILE = getProfile(language);
  const en = language === 'en';
  return (
    <section className="viewport-section py-8 md:py-12 border-b border-[#27272A] scroll-mt-16" id="educacion">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* Section Code Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16">
          <div className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase flex items-center gap-2">
            <span>[ 04 ]</span>
            <span className="h-px w-6 bg-[#27272A]"></span>
            <span>{en ? 'EDUCATION & TRAINING' : 'EDUCACIÓN Y FORMACIÓN'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FAFAFA] font-display uppercase tracking-tight mt-4 md:mt-0 md:text-right">
            {en ? 'EDUCATION' : 'FORMACIÓN'}
          </h2>
        </div>

        {/* Academic & Technical Table */}
        <div className="divide-y divide-[#27272A] border-y border-[#27272A] font-mono text-xs">
          {PROFILE.education.map((item) => (
            <div
              key={item.number}
              className="py-4 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center group hover:bg-[#121214] transition-colors px-2"
            >
              <div className="md:col-span-1 text-[#A1A1AA] group-hover:text-[#EF4444] transition-colors font-bold">
                {item.number}
              </div>
              <div className="md:col-span-7">
                <h3 className="text-[#FAFAFA] text-sm sm:text-base font-bold font-sans">
                  {item.title}
                </h3>
                <p className="text-[#A1A1AA] text-xs font-mono mt-0.5">
                  {item.subtitle}
                </p>
              </div>
              <div className="md:col-span-4 md:text-right text-[#A1A1AA]">
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
