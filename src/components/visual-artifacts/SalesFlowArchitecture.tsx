import { useState } from 'react';
import { ShieldCheck, ArrowsClockwise, Cpu, Database, Check } from '@phosphor-icons/react';

type ModuleKey = 'deals' | 'leads' | 'clients' | 'auth';

interface ModuleDetail {
  title: string;
  endpoint: string;
  roleRequired: string;
  dataRules: string;
  output: string;
}

const MODULE_DETAILS: Record<ModuleKey, ModuleDetail> = {
  deals: {
    title: 'Negociaciones & Métricas Financieras',
    endpoint: 'POST /api/deals · GET /api/deals/metrics',
    roleRequired: 'Admin, Manager, Sales (con aislamiento por vendedor)',
    dataRules: 'Transición de etapas (lead → negotiation → won/lost) con recálculo de valor estimado e integridad relacional con Client.',
    output: '201 Created / 200 OK + Métricas de ingresos agregadas'
  },
  leads: {
    title: 'Pipeline Comercial de Prospectos',
    endpoint: 'POST /api/leads · PATCH /api/leads/:id/status',
    roleRequired: 'Autenticado (Asignación por vendedor o gerente)',
    dataRules: 'Validación Zod estricta: estado enum ("new", "contacted", "qualified", "lost", "won"). Conversión a Client tras calificar.',
    output: 'Lead con historial de contacto y métrica de conversión'
  },
  clients: {
    title: 'Gestión y Propiedad de Clientes',
    endpoint: 'GET /api/clients · POST /api/clients',
    roleRequired: 'RBAC (Filtro automático por ownerId en vendedores)',
    dataRules: 'Aislamiento de clientes entre vendedores; solo administradores y gerentes poseen vista global del portafolio.',
    output: 'Listado paginado con relación a Deals y Tasks asociadas'
  },
  auth: {
    title: 'Autenticación Stateless & Perímetro',
    endpoint: 'POST /api/auth/login · GET /api/auth/me',
    roleRequired: 'Público / Token Bearer JWT',
    dataRules: 'Rate limiting anti-fuerza bruta (máx 5 intentos/15 min), bcryptjs para hash de contraseña, payload firmado con rol.',
    output: 'JWT Bearer Token (24h) + Perfil sanitizado'
  }
};

export function SalesFlowArchitecture() {
  const [selectedModule, setSelectedModule] = useState<ModuleKey>('deals');
  const current = MODULE_DETAILS[selectedModule];

  return (
    <div className="bg-[#101318] border border-white/10 rounded-lg p-4 sm:p-5 text-zinc-300 font-sans text-xs sm:text-sm">
      {/* Header del Artefacto */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/8">
        <div>
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
            Arquitectura de Dominio (Feature-First)
          </span>
          <h4 className="text-zinc-100 font-medium text-sm sm:text-base">
            Flujo de Petición & Seguridad en SalesFlow CRM API
          </h4>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Live en Render
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/8 text-zinc-300">
            Swagger OpenAPI 3.0
          </span>
        </div>
      </div>

      {/* Diagrama Arquitectónico de Capas */}
      <div className="py-4 space-y-3">
        {/* Capa 1: Seguridad Perimetral */}
        <div className="bg-zinc-900/40 border border-white/6 rounded-md p-3">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="font-mono text-[11px] text-zinc-400 uppercase flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-blue-400" />
              1. Pipeline Perimetral (Middlewares)
            </span>
            <span className="text-[11px] font-mono text-zinc-400">Helmet · CORS · RateLimit</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div className="bg-zinc-900/80 border border-white/6 px-2.5 py-1.5 rounded text-zinc-300 text-center">
              protect.js (JWT)
            </div>
            <div className="bg-zinc-900/80 border border-white/6 px-2.5 py-1.5 rounded text-zinc-300 text-center">
              authorize.js (RBAC)
            </div>
            <div className="bg-zinc-900/80 border border-white/6 px-2.5 py-1.5 rounded text-zinc-300 text-center">
              validate.js (Zod)
            </div>
            <div className="bg-zinc-900/80 border border-white/6 px-2.5 py-1.5 rounded text-zinc-300 text-center">
              pinoLogger (Latencia)
            </div>
          </div>
        </div>

        {/* Capa 2: Módulos de Dominio Desacoplados */}
        <div className="bg-zinc-900/40 border border-white/6 rounded-md p-3">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-mono text-[11px] text-zinc-400 uppercase flex items-center gap-1.5">
              <Cpu size={14} className="text-amber-400" />
              2. Capa de Dominio (Seleccionar Módulo)
            </span>
            <span className="text-[11px] font-mono text-zinc-400">src/modules/</span>
          </div>

          {/* Selector de Módulo */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {(['deals', 'leads', 'clients', 'auth'] as ModuleKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedModule(key)}
                className={`px-2.5 py-1.5 rounded font-mono text-xs text-left transition-all ${
                  selectedModule === key
                    ? 'bg-blue-950/80 text-blue-200 border border-blue-700/60 font-medium'
                    : 'bg-zinc-900/80 text-zinc-400 border border-white/6 hover:text-zinc-200'
                }`}
              >
                /{key}
              </button>
            ))}
          </div>

          {/* Ficha de Detalles del Módulo Activo */}
          <div className="bg-black/30 border border-white/6 rounded p-3 text-xs space-y-1.5 font-mono">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-zinc-300">
              <span className="font-medium text-zinc-100">{current.title}</span>
              <span className="text-blue-400 text-[11px]">{current.endpoint}</span>
            </div>
            <div className="text-zinc-400 text-[11px] font-sans">
              <strong className="text-zinc-300 font-mono">Permisos:</strong> {current.roleRequired}
            </div>
            <div className="text-zinc-400 text-[11px] font-sans">
              <strong className="text-zinc-300 font-mono">Regla de Negocio:</strong> {current.dataRules}
            </div>
          </div>
        </div>

        {/* Capa 3: Persistencia PostgreSQL */}
        <div className="bg-zinc-900/40 border border-white/6 rounded-md p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Database size={15} className="text-emerald-400 shrink-0" />
            <span className="font-mono text-xs text-zinc-300">
              3. Persistencia Relacional: Prisma 7.8 ORM + PostgreSQL 16
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
            <Check size={13} weight="bold" />
            <span>Integridad Referencial ACID</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-white/6 flex items-center justify-between text-xs text-zinc-400 font-mono">
        <span className="flex items-center gap-1.5">
          <ArrowsClockwise size={13} />
          Manejo de Errores Operacionales con AppError + Graceful Shutdown
        </span>
        <span className="hidden sm:inline text-zinc-400">Tests con Jest & Supertest</span>
      </div>
    </div>
  );
}
