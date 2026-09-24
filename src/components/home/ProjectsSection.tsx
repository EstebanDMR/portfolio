import type { ProjectItem } from '../../data/projects';
import { getProjects } from '../../data/translations';
import type { Language } from '../layout/Header';

interface ProjectsSectionProps {
  language: Language;
  onOpenModal: (project: ProjectItem) => void;
}

export function ProjectsSection({ language, onOpenModal }: ProjectsSectionProps) {
  const PROJECTS = getProjects(language);
  const en = language === 'en';
  const p1 = PROJECTS.find((p) => p.id === 'route-optimizer') || PROJECTS[0];
  const p2 = PROJECTS.find((p) => p.id === 'salesflow-crm-api') || PROJECTS[1];
  const p3 = PROJECTS.find((p) => p.id === 'base-electoral') || PROJECTS[2];

  return (
    <section className="projects-section border-b border-[#27272A] scroll-mt-16" id="proyectos">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* Section Header Bar */}
        <div className="projects-heading flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#27272A]">
          <div>
            <div className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase mb-2">
              {en ? '[ 02 ] — CASE STUDIES' : '[ 02 ] — CASOS DE ESTUDIO'}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FAFAFA] font-display uppercase tracking-tight">
              {en ? 'PROJECTS' : 'PROYECTOS'}
            </h2>
            <p className="text-sm font-mono text-[#A1A1AA] mt-1">
              {en ? 'Personal projects and technical decisions' : 'Proyectos personales y decisiones técnicas'}
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-baseline gap-2 font-mono">
            <span className="text-4xl sm:text-5xl font-black text-[#EF4444] leading-none font-display">03</span>
            <span className="text-lg sm:text-xl text-[#71717A] leading-none">/ 03</span>
          </div>
        </div>

        {/* LISTA DE PROYECTOS */}
        <div className="project-list">
          
          {/* ================= PROJECT 01: RouteOptimizer ================= */}
          <article className="project-panel grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Details */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <span className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase mb-2">
                {p1.projectNumber}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-2">
                {p1.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm font-bold text-[#EF4444] uppercase tracking-wider mb-6">
                {p1.categoryTag}
              </p>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8">
                {p1.description}
              </p>

              {/* Metadata Table */}
              <div className="border-t border-[#27272A] divide-y divide-[#27272A] text-xs font-mono mb-8">
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'FOCUS' : 'ENFOQUE'}</span>
                  <span className="col-span-9 text-[#D4D4D8]">{p1.role}</span>
                </div>
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'TECH' : 'TECNOLOGÍAS'}</span>
                  <span className="col-span-9 text-[#D4D4D8]">{p1.tech}</span>
                </div>
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'YEAR' : 'AÑO'}</span>
                  <span className="col-span-9 text-[#D4D4D8]">{p1.year}</span>
                </div>
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'STATUS' : 'ESTADO'}</span>
                  <span className="col-span-9 text-[#F87171] font-medium">{p1.status}</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-8 text-xs font-mono font-bold tracking-wider">
                <button 
                  type="button"
                  onClick={() => onOpenModal(p1)}
                  className="text-[#EF4444] hover:text-[#FAFAFA] transition-colors duration-150 flex items-center gap-1.5 cursor-pointer"
                >
                  {en ? 'VIEW CASE STUDY' : 'VER CASO DE ESTUDIO'} <span className="text-sm">→</span>
                </button>
                <a 
                  className="text-[#F87171] hover:text-[#FAFAFA] transition-colors duration-150 flex items-center gap-1.5" 
                  href={p1.repoUrl} 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  {en ? 'CODE REPO' : 'REPOSITORIO'} <span className="text-sm">↗</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="md:col-span-6">
              <div 
                onClick={() => onOpenModal(p1)}
                className="relative group rounded bg-[#121214] border border-[#27272A] overflow-hidden aspect-[16/10] flex items-center justify-center cursor-pointer"
              >
                <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0E0E10] font-mono text-xs">
                  {/* Top bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#27272A] text-[10px] text-[#A1A1AA]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                      <span className="ml-2 text-[#FAFAFA] font-semibold">GraphTopology.engine</span>
                    </div>
                    <span className="text-[#EF4444]">DIJKSTRA + A*</span>
                  </div>

                  {/* Central SVG Canvas */}
                  <div className="relative flex-1 my-2 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full max-h-56 opacity-85" fill="none" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                      <line stroke="#27272A" strokeDasharray="3 3" x1="0" x2="400" y1="50" y2="50"></line>
                      <line stroke="#27272A" strokeDasharray="3 3" x1="0" x2="400" y1="100" y2="100"></line>
                      <line stroke="#27272A" strokeDasharray="3 3" x1="0" x2="400" y1="150" y2="150"></line>
                      {/* Shortest Path (Sky blue) */}
                      <path d="M 60 100 L 130 50 L 220 70 L 290 140 L 350 100" stroke="#38bdf8" strokeWidth="2.5"></path>
                      {/* Alternative examined path (Vermillion dashed) */}
                      <path d="M 60 100 L 140 150 L 220 70" stroke="#EF4444" strokeDasharray="4 2" strokeWidth="1.5"></path>
                      <circle cx="60" cy="100" fill="#38bdf8" r="8"></circle>
                      <circle cx="130" cy="50" fill="#38bdf8" r="7"></circle>
                      <circle cx="140" cy="150" fill="#EF4444" r="6"></circle>
                      <circle cx="220" cy="70" fill="#38bdf8" r="7"></circle>
                      <circle cx="290" cy="140" fill="#38bdf8" r="7"></circle>
                      <circle cx="350" cy="100" fill="#F87171" r="9"></circle>
                    </svg>
                    <div className="absolute bottom-2 left-2 text-[10px] bg-black/70 px-2 py-1 border border-[#EF4444]/40 text-[#EF4444] rounded">
                      {en ? 'Optimal route · step-by-step view' : 'Ruta óptima · vista paso a paso'}
                    </div>
                  </div>

                  {/* Simulated Bottom Toolbar */}
                  <div className="pt-2 border-t border-[#27272A] flex justify-between text-[10px] text-[#A1A1AA]">
                    <span>{en ? 'Dijkstra + Priority Queue (Min-Heap)' : 'Dijkstra + cola de prioridad (montículo mín.)'}</span>
                    <span className="text-[#F87171]">{en ? 'Algorithms · Visualization' : 'Algoritmos · Visualización'}</span>
                  </div>
                </div>

                {/* Hover Overlay Badge */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                  <span className="bg-[#0A0A0B]/90 border border-[#EF4444]/40 text-[#FAFAFA] px-4 py-2 text-xs font-mono tracking-widest uppercase">
                    {en ? 'VIEW CASE STUDY' : 'VER CASO DE ESTUDIO'} →
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* ================= PROJECT 02: SalesFlow CRM API ================= */}
          <article className="project-panel grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Details */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <span className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase mb-2">
                {p2.projectNumber}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-2">
                {p2.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm font-bold text-[#EF4444] uppercase tracking-wider mb-6">
                {p2.categoryTag}
              </p>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8">
                {p2.description}
              </p>

              {/* Metadata Table */}
              <div className="border-t border-[#27272A] divide-y divide-[#27272A] text-xs font-mono mb-8">
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'FOCUS' : 'ENFOQUE'}</span>
                  <span className="col-span-9 text-[#D4D4D8]">{p2.role}</span>
                </div>
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'TECH' : 'TECNOLOGÍAS'}</span>
                  <span className="col-span-9 text-[#D4D4D8]">{p2.tech}</span>
                </div>
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'YEAR' : 'AÑO'}</span>
                  <span className="col-span-9 text-[#D4D4D8]">{p2.year}</span>
                </div>
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'STATUS' : 'ESTADO'}</span>
                  <span className="col-span-9 text-[#F87171] font-medium">{p2.status}</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono font-bold tracking-wider">
                <button 
                  type="button"
                  onClick={() => onOpenModal(p2)}
                  className="text-[#EF4444] hover:text-[#FAFAFA] transition-colors duration-150 flex items-center gap-1.5 cursor-pointer"
                >
                  {en ? 'VIEW CASE STUDY' : 'VER CASO DE ESTUDIO'} <span className="text-sm">→</span>
                </button>
                <a
                  className="text-[#F87171] hover:text-[#FAFAFA] transition-colors duration-150 flex items-center gap-1.5"
                  href={p2.repoUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {en ? 'CODE REPO' : 'REPOSITORIO'} <span className="text-sm">↗</span>
                </a>
                {p2.docsUrl && <a
                  className="text-[#F87171] hover:text-[#FAFAFA] transition-colors duration-150 flex items-center gap-1.5" 
                  href={p2.docsUrl}
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  {en ? 'DOCS & SWAGGER' : 'DOCUMENTACIÓN Y SWAGGER'} <span className="text-sm">↗</span>
                </a>}
              </div>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="md:col-span-6">
              <div 
                onClick={() => onOpenModal(p2)}
                className="relative group rounded bg-[#121214] border border-[#27272A] overflow-hidden aspect-[5/4] sm:aspect-[16/10] flex items-center justify-center cursor-pointer"
              >
                <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0E0E10] font-mono text-xs">
                  {/* Simulated Top Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#27272A] text-[10px]">
                    <span className="text-[#A1A1AA] font-mono">{en ? 'SALESFLOW // REST API' : 'SALESFLOW // API REST'}</span>
                    <span className="px-2 py-0.5 bg-[#27181A] text-[#F87171] border border-[#441C24] rounded">JWT + RBAC</span>
                  </div>

                  {/* API Schema Tree Graphic */}
                  <div className="my-2 space-y-2 font-mono text-[11px]">
                    <div className="flex items-center justify-between bg-[#121214] p-2 border border-[#27272A] rounded">
                      <span className="text-purple-400 font-bold">POST</span>
                      <span className="text-[#D4D4D8]">/api/auth/login</span>
                      <span className="text-[#F87171]">JWT</span>
                    </div>
                    <div className="flex items-center justify-between bg-[#121214] p-2 border border-[#27272A] rounded">
                      <span className="text-blue-400 font-bold">GET</span>
                      <span className="text-[#D4D4D8]">/api/deals/stats</span>
                      <span className="text-[#F87171]">RBAC</span>
                    </div>
                    <div className="p-2.5 bg-[#121214] border border-[#27272A] text-[10px] text-[#A1A1AA] rounded font-mono leading-relaxed">
                      <span className="text-[#EF4444]">{en ? 'REQUEST → ZOD VALIDATION' : 'SOLICITUD → VALIDACIÓN ZOD'}</span><br />
                      {en ? 'JWT AUTHENTICATION → ROLE CHECK' : 'AUTENTICACIÓN JWT → PERMISOS'}<br />
                      {en ? 'DOMAIN MODULE → PRISMA' : 'MÓDULO DE NEGOCIO → PRISMA'}<br />
                      <span className="text-[#EF4444]">POSTGRESQL</span>
                    </div>
                  </div>

                  {/* Footer Metas */}
                  <div className="pt-2 border-t border-[#27272A] flex justify-between text-[10px] text-[#A1A1AA]">
                    <span>{en ? 'Prisma Migrations · Dockerized' : 'Migraciones Prisma · Contenedores Docker'}</span>
                    <span>{en ? 'Role-Based Access Control' : 'Control de acceso por roles'}</span>
                  </div>
                </div>

                {/* Hover Overlay Badge */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                  <span className="bg-[#0A0A0B]/90 border border-[#EF4444]/40 text-[#FAFAFA] px-4 py-2 text-xs font-mono tracking-widest uppercase">
                    {en ? 'VIEW CASE STUDY' : 'VER CASO DE ESTUDIO'} →
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* ================= PROJECT 03: Base Electoral ================= */}
          <article className="project-panel grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Details */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <span className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase mb-2">
                {p3.projectNumber}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-2">
                {p3.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm font-bold text-[#EF4444] uppercase tracking-wider mb-6">
                {p3.categoryTag}
              </p>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8">
                {p3.description}
              </p>

              {/* Metadata Table */}
              <div className="border-t border-[#27272A] divide-y divide-[#27272A] text-xs font-mono mb-8">
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'FOCUS' : 'ENFOQUE'}</span>
                  <span className="col-span-9 text-[#D4D4D8]">{p3.role}</span>
                </div>
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'TECH' : 'TECNOLOGÍAS'}</span>
                  <span className="col-span-9 text-[#D4D4D8]">{p3.tech}</span>
                </div>
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'YEAR' : 'AÑO'}</span>
                  <span className="col-span-9 text-[#D4D4D8]">{p3.year}</span>
                </div>
                <div className="py-3 grid grid-cols-12">
                  <span className="col-span-3 text-[#A1A1AA] uppercase tracking-wider">{en ? 'STATUS' : 'ESTADO'}</span>
                  <span className="col-span-9 text-[#F87171] font-medium">{p3.status}</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono font-bold tracking-wider">
                <button 
                  type="button"
                  onClick={() => onOpenModal(p3)}
                  className="text-[#EF4444] hover:text-[#FAFAFA] transition-colors duration-150 flex items-center gap-1.5 cursor-pointer"
                >
                  {en ? 'VIEW CASE STUDY' : 'VER CASO DE ESTUDIO'} <span className="text-sm">→</span>
                </button>
                <a
                  className="text-[#F87171] hover:text-[#FAFAFA] transition-colors duration-150 flex items-center gap-1.5"
                  href={p3.repoUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {en ? 'CODE REPO' : 'REPOSITORIO'} <span className="text-sm">↗</span>
                </a>
                {p3.liveUrl && <a
                  className="text-[#F87171] hover:text-[#FAFAFA] transition-colors duration-150 flex items-center gap-1.5" 
                  href={p3.liveUrl}
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  DEMO <span className="text-sm">↗</span>
                </a>}
              </div>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="md:col-span-6">
              <div 
                onClick={() => onOpenModal(p3)}
                className="relative group rounded bg-[#121214] border border-[#27272A] overflow-hidden aspect-[16/10] flex items-center justify-center cursor-pointer"
              >
                <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0E0E10] font-mono text-xs">
                  {/* Simulated Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#27272A] text-[10px]">
                    <span className="text-[#A1A1AA]">BASE_ELECTORAL</span>
                      <span className="text-[#F87171] flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F87171] animate-pulse"></span> REACT + FIREBASE
                    </span>
                  </div>

                  {/* Feature summary inside the existing visual frame */}
                  <div className="space-y-3 my-2">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-[#121214] p-2 border border-[#27272A] rounded">
                        <span className="text-[9px] text-[#A1A1AA] block">{en ? 'ACCESS' : 'ACCESO'}</span>
                        <span className="text-sm font-bold text-[#FAFAFA]">Firebase Auth</span>
                      </div>
                      <div className="bg-[#121214] p-2 border border-[#27272A] rounded">
                        <span className="text-[9px] text-[#A1A1AA] block">{en ? 'PAGINATION' : 'PAGINACIÓN'}</span>
                        <span className="text-sm font-bold text-[#EF4444]">{en ? 'Cursor' : 'Cursor'}</span>
                      </div>
                      <div className="bg-[#121214] p-2 border border-[#27272A] rounded">
                        <span className="text-[9px] text-[#A1A1AA] block">{en ? 'EXPORT' : 'EXPORTACIÓN'}</span>
                        <span className="text-sm font-bold text-[#F87171]">XLSX</span>
                      </div>
                    </div>

                    {/* Data flow graphic */}
                    <div className="bg-[#121214] p-2.5 border border-[#27272A] rounded space-y-1.5">
                      <div className="flex justify-between text-[10px] text-[#A1A1AA]">
                        <span>{en ? 'DATA FLOW' : 'FLUJO DE DATOS'}</span>
                        <span>{en ? 'REACT → DATA LAYER → FIREBASE' : 'REACT → CAPA DE DATOS → FIREBASE'}</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#27272A] rounded-full overflow-hidden" />
                    </div>
                  </div>

                  {/* Footer Metas */}
                  <div className="pt-2 border-t border-[#27272A] flex justify-between text-[10px] text-[#A1A1AA]">
                    <span>{en ? 'Search · Pagination · Export' : 'Búsqueda · Paginación · Exportación'}</span>
                    <span>{en ? 'User roles' : 'Roles de usuario'}</span>
                  </div>
                </div>

                {/* Hover Overlay Badge */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                  <span className="bg-[#0A0A0B]/90 border border-[#EF4444]/40 text-[#FAFAFA] px-4 py-2 text-xs font-mono tracking-widest uppercase">
                    {en ? 'VIEW CASE STUDY' : 'VER CASO DE ESTUDIO'} →
                  </span>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
