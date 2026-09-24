import { useState } from 'react';
import type { Language } from '../layout/Header';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'data' | 'tooling';
  classes: string;
}

const TECH_LIST: TechItem[] = [
  { name: 'TypeScript', category: 'frontend', classes: 'text-2xl sm:text-3xl lg:text-4xl font-bold' },
  { name: 'JavaScript', category: 'frontend', classes: 'text-2xl sm:text-3xl lg:text-4xl font-semibold' },
  { name: 'Node.js', category: 'backend', classes: 'text-2xl sm:text-3xl lg:text-4xl font-semibold' },
  { name: 'PostgreSQL', category: 'data', classes: 'text-3xl sm:text-4xl lg:text-5xl font-black' },
  { name: 'Python', category: 'data', classes: 'text-2xl sm:text-3xl lg:text-4xl font-semibold' },
  { name: 'Express', category: 'backend', classes: 'text-3xl sm:text-4xl lg:text-5xl font-extrabold' },
  { name: 'React', category: 'frontend', classes: 'text-3xl sm:text-4xl lg:text-5xl font-bold' },
  { name: 'SQL', category: 'data', classes: 'text-2xl sm:text-3xl lg:text-4xl font-bold' },
  { name: 'REST APIs', category: 'backend', classes: 'text-lg sm:text-xl font-normal' },
  { name: 'Prisma', category: 'backend', classes: 'text-xl sm:text-2xl font-normal' },
  { name: 'Docker', category: 'tooling', classes: 'text-lg sm:text-xl font-normal' },
  { name: 'Git / GitHub', category: 'tooling', classes: 'text-lg sm:text-xl font-normal' },
  { name: 'Tailwind CSS', category: 'frontend', classes: 'text-base sm:text-lg font-normal' },
  { name: 'Firebase', category: 'data', classes: 'text-xl sm:text-2xl font-normal' },
  { name: 'JWT', category: 'backend', classes: 'text-lg sm:text-xl font-normal' },
  { name: 'Zod', category: 'backend', classes: 'text-lg sm:text-xl font-normal' },
];

export function StackSection({ language }: { language: Language }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const en = language === 'en';

  const categories = [
    { id: 'frontend', label: en ? '01 FRONTEND' : '01 INTERFAZ' },
    { id: 'backend', label: en ? '02 BACKEND' : '02 SERVIDOR' },
    { id: 'data', label: en ? '03 DATA & SQL' : '03 DATOS Y SQL' },
    { id: 'tooling', label: en ? '04 TOOLS' : '04 HERRAMIENTAS' },
  ];

  return (
    <section className="viewport-section py-16 border-b border-[#27272A] bg-[#0E0E10] scroll-mt-16" id="stack">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* Section Code Header & Main Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase flex items-center gap-2">
            <span>[ 03 ]</span>
            <span className="h-px w-6 bg-[#27272A]"></span>
            <span>{en ? 'STACK & TOOLS' : 'TECNOLOGÍAS Y HERRAMIENTAS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FAFAFA] font-display uppercase tracking-tight mt-4 md:mt-0 md:text-right">
            {en ? 'WHAT I USE' : 'LO QUE USO'}
          </h2>
        </div>

        {/* Grid Layout matching Stitch reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Filter list */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="border border-[#27272A] bg-[#0A0A0B]/60 p-4 sm:p-5 font-mono text-xs">
              <div className="divide-y divide-[#27272A]">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    onMouseEnter={() => setActiveCategory(cat.id)}
                    onMouseLeave={() => setActiveCategory(null)}
                    onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                    className={`py-3 flex justify-between items-center cursor-pointer transition-colors ${
                      activeCategory === cat.id ? 'text-[#EF4444] font-bold' : 'text-[#FAFAFA] hover:text-[#EF4444]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[#A1A1AA]">{String(TECH_LIST.filter((tech) => tech.category === cat.id).length).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>

              {/* Descriptive Helper Text */}
              <div className="pt-4 mt-3 border-t border-[#27272A]">
                <p className="text-[11px] font-mono text-[#71717A] leading-relaxed">
                  {en ? '— Hover over a category to highlight its technologies.' : '— Pasa el cursor por una categoría para destacar sus tecnologías.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Organic Typographic Cloud */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-wrap items-baseline gap-x-5 sm:gap-x-7 gap-y-3 sm:gap-y-4 font-sans select-none pt-2">
            {TECH_LIST.map((tech) => {
              const isMatch = !activeCategory || tech.category === activeCategory;
              return (
                <span
                  key={tech.name}
                  className={`${tech.classes} transition-all duration-200 cursor-default ${
                    isMatch
                      ? 'text-[#FAFAFA] hover:text-[#EF4444] opacity-100'
                      : 'text-[#3F3F46] opacity-30'
                  }`}
                >
                  {language === 'es' && tech.name === 'REST APIs' ? 'API REST' : tech.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
