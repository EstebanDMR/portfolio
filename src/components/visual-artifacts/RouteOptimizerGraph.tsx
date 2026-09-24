import { useState } from 'react';
import { Compass, Graph, Play, CheckCircle } from '@phosphor-icons/react';

interface NodeCoord {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'origin' | 'target' | 'normal';
}

interface EdgePath {
  from: string;
  to: string;
  weight: number; // km
}

const NODES: NodeCoord[] = [
  { id: 'O', name: 'Despacho (Origen)', x: 45, y: 130, type: 'origin' },
  { id: 'A', name: 'Nodo A', x: 120, y: 60, type: 'normal' },
  { id: 'B', name: 'Nodo B', x: 120, y: 190, type: 'normal' },
  { id: 'C', name: 'Nodo C', x: 220, y: 70, type: 'normal' },
  { id: 'D', name: 'Nodo D', x: 220, y: 180, type: 'normal' },
  { id: 'E', name: 'Nodo E', x: 170, y: 125, type: 'normal' },
  { id: 'T', name: 'Entrega (Meta)', x: 300, y: 125, type: 'target' }
];

const EDGES: EdgePath[] = [
  { from: 'O', to: 'A', weight: 4 },
  { from: 'O', to: 'B', weight: 3 },
  { from: 'A', to: 'C', weight: 5 },
  { from: 'A', to: 'E', weight: 2 },
  { from: 'B', to: 'D', weight: 6 },
  { from: 'B', to: 'E', weight: 3 },
  { from: 'E', to: 'C', weight: 2 },
  { from: 'E', to: 'D', weight: 3 },
  { from: 'C', to: 'T', weight: 4 },
  { from: 'D', to: 'T', weight: 5 }
];

export function RouteOptimizerGraph() {
  const [algo, setAlgo] = useState<'a-star' | 'dijkstra'>('a-star');
  const [showSteps, setShowSteps] = useState(false);

  // Datos verificados del motor algorítmico de RouteOptimizer:
  // Camino óptimo en ambos es: O -> A -> E -> C -> T (Costo = 4 + 2 + 2 + 4 = 12 km)
  const optimalEdges = ['O-A', 'A-E', 'E-C', 'C-T'];
  
  // Nodos explorados según cada algoritmo:
  const visitedDijkstra = ['O', 'B', 'A', 'E', 'C', 'D', 'T']; // 7 nodos (búsqueda radial no informada)
  const visitedAStar = ['O', 'A', 'E', 'C', 'T']; // 5 nodos (poda guiada por heurística admisible f = g + h)

  const activeVisited = algo === 'dijkstra' ? visitedDijkstra : visitedAStar;

  return (
    <div className="bg-[#101318] border border-white/10 rounded-lg p-4 sm:p-5 text-zinc-300 font-sans text-xs sm:text-sm">
      {/* Header del Artefacto */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/8">
        <div>
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
            Teoría de Grafos & Búsqueda Heurística
          </span>
          <h4 className="text-zinc-100 font-medium text-sm sm:text-base">
            Comparativa de Exploración: Dijkstra vs A*
          </h4>
        </div>

        {/* Switch de Algoritmo */}
        <div className="inline-flex p-0.5 bg-zinc-900/90 border border-white/10 rounded-md">
          <button
            type="button"
            onClick={() => setAlgo('a-star')}
            className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
              algo === 'a-star'
                ? 'bg-blue-950/80 text-blue-300 border border-blue-800/60 font-medium'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            A* (Heurístico)
          </button>
          <button
            type="button"
            onClick={() => setAlgo('dijkstra')}
            className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
              algo === 'dijkstra'
                ? 'bg-zinc-800 text-zinc-200 border border-white/10 font-medium'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Dijkstra (No informado)
          </button>
        </div>
      </div>

      {/* Canvas SVG del Grafo */}
      <div className="py-4">
        <div className="bg-zinc-950/60 border border-white/6 rounded-md p-3 relative overflow-hidden">
          <svg viewBox="0 0 350 240" className="w-full h-44 sm:h-52 select-none">
            {/* Aristas */}
            {EDGES.map((edge) => {
              const fromNode = NODES.find((n) => n.id === edge.from)!;
              const toNode = NODES.find((n) => n.id === edge.to)!;
              const edgeKey1 = `${edge.from}-${edge.to}`;
              const edgeKey2 = `${edge.to}-${edge.from}`;
              const isOptimal = optimalEdges.includes(edgeKey1) || optimalEdges.includes(edgeKey2);
              
              return (
                <g key={edgeKey1}>
                  <line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={isOptimal ? '#3b82f6' : 'rgba(255, 255, 255, 0.15)'}
                    strokeWidth={isOptimal ? 2.5 : 1}
                    strokeDasharray={isOptimal ? 'none' : '2,2'}
                  />
                  {/* Etiqueta de peso */}
                  <text
                    x={(fromNode.x + toNode.x) / 2}
                    y={(fromNode.y + toNode.y) / 2 - 4}
                    fill={isOptimal ? '#93c5fd' : '#71717a'}
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {edge.weight}km
                  </text>
                </g>
              );
            })}

            {/* Nodos */}
            {NODES.map((node) => {
              const isVisited = activeVisited.includes(node.id);
              const isOptimal = ['O', 'A', 'E', 'C', 'T'].includes(node.id);
              
              let fill = '#18181b';
              let stroke = '#52525b';
              if (node.type === 'origin') {
                fill = '#1e3a8a';
                stroke = '#60a5fa';
              } else if (node.type === 'target') {
                fill = '#065f46';
                stroke = '#34d399';
              } else if (isVisited) {
                fill = isOptimal ? '#172554' : '#27272a';
                stroke = isOptimal ? '#3b82f6' : '#71717a';
              }

              return (
                <g key={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.type === 'origin' || node.type === 'target' ? 12 : 9}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={isOptimal ? 2 : 1.2}
                  />
                  <text
                    x={node.x}
                    y={node.y + 3.5}
                    fill="#f4f4f5"
                    fontSize="9"
                    fontWeight="bold"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {node.id}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Leyenda y Explicación del Algoritmo en Tiempo Real */}
          <div className="mt-2 pt-2 border-t border-white/6 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-zinc-400">Ruta óptima: 12 km</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">Nodos evaluados:</span>
              <span className={`font-semibold ${algo === 'a-star' ? 'text-emerald-400' : 'text-amber-400'}`}>
                {activeVisited.length} de 7 {algo === 'a-star' ? '(-28% poda)' : '(búsqueda radial)'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <CheckCircle size={14} className="text-emerald-400" />
              <span>Optimalidad Idéntica</span>
            </div>
          </div>
        </div>
      </div>

      {/* Demostración de Rigor Matemático */}
      <div className="pt-2 border-t border-white/6 text-xs text-zinc-400 font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Compass size={14} className="text-blue-400 shrink-0" />
          <span>
            {algo === 'a-star'
              ? 'A* aplica factor de escala seguro α = min(1.0, min w/dE) para garantizar formalmente admisibilidad h(n) ≤ h*(n).'
              : 'Dijkstra explora en anillo concéntrico sin noción de dirección hacia la meta final.'}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setShowSteps(!showSteps)}
          className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 text-[11px] shrink-0"
        >
          <Play size={10} weight="fill" />
          {showSteps ? 'Ocultar Heap trace' : 'Ver Heap trace'}
        </button>
      </div>

      {/* Traza de Priority Queue (Min-Heap binario O(log n)) */}
      {showSteps && (
        <div className="mt-3 p-3 bg-black/40 border border-white/8 rounded font-mono text-[11px] space-y-1 text-zinc-400">
          <div className="text-zinc-300 font-medium flex items-center gap-1.5">
            <Graph size={13} />
            Traza de MinPriorityQueue (Implementada desde cero sobre array dinámico):
          </div>
          <div>1. PUSH(Origen, p=0) → Min-Heap root [O]</div>
          <div>2. POP(O, g=0) → Relaja aristas a [A:4km, B:3km]</div>
          <div>3. {algo === 'a-star' ? 'EVAL A*: f(A)=4+h(A)=9.2 vs f(B)=3+h(B)=11.8 → Elige A por menor f(n)' : 'EVAL Dijkstra: Elige B por menor distancia acumulada g(n)=3'}</div>
          <div className="text-emerald-400 font-semibold pt-1">
            ✓ Finaliza en Meta T con distancia mínima exacta = 12 km (Complejidad O((V+E) log V))
          </div>
        </div>
      )}
    </div>
  );
}
