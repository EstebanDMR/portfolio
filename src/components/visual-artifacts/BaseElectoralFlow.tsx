import { useState } from 'react';
import { ArrowRight, CheckCircle, WarningCircle, Lightning, Database } from '@phosphor-icons/react';

export function BaseElectoralFlow() {
  const [mode, setMode] = useState<'v1' | 'v2'>('v2');

  return (
    <div className="bg-[#101318] border border-white/10 rounded-lg p-4 sm:p-5 text-zinc-300 font-sans text-xs sm:text-sm">
      {/* Header del Artefacto */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/8">
        <div>
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
            Flujo de Datos & Acceso NoSQL
          </span>
          <h4 className="text-zinc-100 font-medium text-sm sm:text-base">
            Refactorización de Arquitectura en Base Electoral
          </h4>
        </div>

        {/* Switch v1 vs v2 */}
        <div className="inline-flex p-0.5 bg-zinc-900/90 border border-white/10 rounded-md">
          <button
            type="button"
            onClick={() => setMode('v1')}
            className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
              mode === 'v1'
                ? 'bg-red-950/70 text-red-300 border border-red-800/60 font-medium'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            v1: Carga en Cliente
          </button>
          <button
            type="button"
            onClick={() => setMode('v2')}
            className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
              mode === 'v2'
                ? 'bg-blue-950/70 text-blue-300 border border-blue-800/60 font-medium'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            v2: Consultas en Servidor
          </button>
        </div>
      </div>

      {/* Visualización del Pipeline */}
      <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Paso 1: Origen Firebase */}
        <div className="bg-zinc-900/60 border border-white/6 rounded-md p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-zinc-400">
              <Database size={16} className="text-zinc-400" />
              <span className="font-mono text-[11px] uppercase">Firebase Realtime DB</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              {mode === 'v1'
                ? 'Petición masiva sin límites. Descarga toda la colección de nodos en una sola promesa al montar.'
                : 'Consulta por cursor deslizante indexada por nombre_normalizado.'}
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/6 font-mono text-[11px] text-zinc-400">
            {mode === 'v1' ? 'GET /votantes.json' : 'limitToFirst(25) + startAt(cursor)'}
          </div>
        </div>

        {/* Paso 2: Transferencia / Red */}
        <div className="bg-zinc-900/60 border border-white/6 rounded-md p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-zinc-400">
              <Lightning size={16} className={mode === 'v1' ? 'text-amber-400' : 'text-blue-400'} />
              <span className="font-mono text-[11px] uppercase">Tránsito & Red</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              {mode === 'v1'
                ? 'Carga pesada de red. Se transfieren miles de registros innecesarios que el usuario aún no ve.'
                : 'Carga ultraligera. Solo transita el paquete de 25 registros que cabe en pantalla.'}
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/6 flex items-center justify-between font-mono text-[11px]">
            <span className="text-zinc-400">Latencia inicial (TTV):</span>
            <span className={`font-semibold ${mode === 'v1' ? 'text-red-400' : 'text-blue-300'}`}>
              {mode === 'v1' ? '> 4.0 segundos' : '< 0.5 segundos'}
            </span>
          </div>
        </div>

        {/* Paso 3: React & Main Thread */}
        <div className="bg-zinc-900/60 border border-white/6 rounded-md p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-zinc-400">
              {mode === 'v1' ? (
                <WarningCircle size={16} className="text-red-400" />
              ) : (
                <CheckCircle size={16} className="text-emerald-400" />
              )}
              <span className="font-mono text-[11px] uppercase">Navegador (Main Thread)</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              {mode === 'v1'
                ? 'Congelamiento perceptible al buscar o ordenar. React satura la memoria filtrando 1,000+ objetos.'
                : 'Fluidez constante a 60 fps. Búsqueda con debounce y memoria del navegador en rango mínimo.'}
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/6 font-mono text-[11px] text-zinc-400">
            {mode === 'v1' ? 'Filtro en cliente (arr.filter)' : 'DAL desacoplada + Cursor deduplicado'}
          </div>
        </div>
      </div>

      {/* Footer con Hallazgo Clave */}
      <div className="mt-1 pt-3 border-t border-white/6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-400 font-mono">
        <div className="flex items-center gap-2">
          <ArrowRight size={14} className="text-zinc-400 shrink-0" />
          <span>
            {mode === 'v1'
              ? 'Problema real detectado: El cuello de botella no era Firebase, sino delegar el procesamiento masivo al cliente.'
              : 'Solución aplicada: Delegación de cómputo a Firebase + capa DAL (Data Access Layer) desacoplada de la UI.'}
          </span>
        </div>
        <span className="text-zinc-400 shrink-0">Registros reales de prueba: 1,000+</span>
      </div>
    </div>
  );
}
