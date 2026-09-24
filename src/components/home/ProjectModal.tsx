import { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle, Warning, Lightbulb } from '@phosphor-icons/react';
import type { ProjectItem } from '../../data/projects';
import type { Language } from '../layout/Header';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  language: Language;
}

export function ProjectModal({ project, onClose, language }: ProjectModalProps) {
  const en = language === 'en';
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#121214] border border-[#27272A] rounded shadow-2xl overflow-y-auto p-5 sm:p-8 text-[#D4D4D8] font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de Cierre */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#A1A1AA] hover:text-[#FAFAFA] rounded hover:bg-white/6 transition-colors cursor-pointer"
          aria-label={en ? 'Close case study' : 'Cerrar caso de estudio'}
        >
          <X size={20} />
        </button>

        {/* Encabezado del Caso de Estudio */}
        <div className="space-y-2 border-b border-[#27272A] pb-6 pr-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#EF4444] font-bold tracking-widest uppercase">
            <span>{project.projectNumber}</span>
            <span>·</span>
            <span>{project.categoryTag}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#FAFAFA] tracking-tight font-display">
            {project.title}
          </h3>

          <p className="text-xs font-mono text-[#A1A1AA]">
            {project.role} · {project.year}
          </p>

          <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed pt-1 font-light">
            {project.description}
          </p>
        </div>

        {/* Enlaces de Verificación */}
        <div className="py-4 border-b border-[#27272A] flex flex-wrap items-center gap-3 font-mono text-xs font-bold">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0E0E10] border border-[#27272A] text-[#FAFAFA] hover:border-[#EF4444] hover:text-[#EF4444] transition-colors"
          >
            <span>{en ? 'CODE ON GITHUB' : 'CÓDIGO EN GITHUB'}</span>
            <ArrowUpRight size={13} />
          </a>
          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0E0E10] border border-[#27272A] text-[#FAFAFA] hover:border-[#EF4444] hover:text-[#EF4444] transition-colors"
            >
              <span>{en ? 'SWAGGER DOCS (OPENAPI)' : 'DOCUMENTACIÓN SWAGGER (OPENAPI)'}</span>
              <ArrowUpRight size={13} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0E0E10] border border-[#27272A] text-[#FAFAFA] hover:border-[#EF4444] hover:text-[#EF4444] transition-colors"
            >
              <span>{en ? 'LIVE DEMO' : 'DEMOSTRACIÓN PUBLICADA'}</span>
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>

        {/* Cuerpo Narrativo del Caso de Estudio */}
        <div className="py-6 space-y-8 text-sm leading-relaxed">
          {/* 1. Origen y Contexto */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA] font-bold">
              {en ? '// 01. CONTEXT & ORIGIN' : '// 01. CONTEXTO Y ORIGEN'}
            </h4>
            <p className="text-[#D4D4D8]">
              {project.caseStudy.context}
            </p>
          </div>

          {/* 2. El Cuello de Botella o Problema Real */}
          <div className="space-y-2 p-4 rounded bg-[#1c1214] border border-[#EF4444]/30">
            <div className="flex items-center gap-2 text-[#EF4444] font-mono text-xs uppercase tracking-wider font-bold">
              <Warning size={16} />
              <span>{en ? '02. The Technical Bottleneck' : '02. El problema técnico'}</span>
            </div>
            <p className="text-[#F87171] text-xs sm:text-sm font-mono">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* 3. Decisiones Técnicas Clave */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA] font-bold">
              {en ? '// 03. TECHNICAL DECISIONS & ARCHITECTURE' : '// 03. DECISIONES TÉCNICAS Y ARQUITECTURA'}
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {project.caseStudy.technicalDecisions.map((dec, i) => (
                <div key={i} className="p-3.5 rounded bg-[#0E0E10] border border-[#27272A] space-y-1">
                  <div className="text-[#FAFAFA] font-medium font-mono text-xs flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#EF4444] shrink-0" />
                    <span>{dec.title}</span>
                  </div>
                  <p className="text-[#A1A1AA] text-xs pl-5 font-sans leading-relaxed">
                    {dec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Trade-offs Operativos */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA] font-bold">
              {en ? '// 04. TECHNICAL CHOICES' : '// 04. DECISIONES Y ALTERNATIVAS'}
            </h4>
            <ul className="space-y-2 pl-4 list-disc marker:text-[#EF4444] text-[#A1A1AA] text-xs font-mono">
              {project.caseStudy.tradeoffs.map((tradeoff, i) => (
                <li key={i}>{tradeoff}</li>
              ))}
            </ul>
          </div>

          {/* 5. Aprendizajes Concretos */}
          <div className="space-y-2 p-4 rounded bg-[#0E0E10] border border-[#27272A]">
            <div className="flex items-center gap-2 text-[#FAFAFA] font-mono text-xs uppercase tracking-wider font-bold">
              <Lightbulb size={16} className="text-[#EF4444]" />
              <span>{en ? '05. What I learned' : '05. Lo que aprendí'}</span>
            </div>
            <ul className="space-y-1.5 pl-4 list-disc marker:text-[#EF4444] text-[#D4D4D8] text-xs">
              {project.caseStudy.learnings.map((learning, i) => (
                <li key={i}>{learning}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer del Modal */}
        <div className="pt-4 border-t border-[#27272A] flex items-center justify-between font-mono text-xs text-[#A1A1AA]">
          <span className="truncate max-w-[70%]">{en ? 'Tech' : 'Tecnologías'}: {project.tech}</span>
          <button
            type="button"
            onClick={onClose}
            className="text-[#EF4444] hover:text-[#FAFAFA] transition-colors font-bold cursor-pointer"
          >
            [{en ? 'CLOSE ESC' : 'CERRAR ESC'}]
          </button>
        </div>
      </div>
    </div>
  );
}
