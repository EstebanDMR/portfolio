import type { Language } from '../layout/Header';

export function TickerMarquee({ language }: { language: Language }) {
  const items = language === 'es'
    ? ['DESARROLLO DE SOFTWARE', 'BACKEND · FRONTEND', 'BASES DE DATOS · ALGORITMOS', 'API REST · TYPESCRIPT · PYTHON · SQL', 'BARRANQUILLA / REMOTO', 'DISPONIBLE PARA TRABAJAR']
    : ['SOFTWARE DEVELOPMENT', 'BACKEND · FRONTEND', 'DATABASES · ALGORITHMS', 'REST APIS · TYPESCRIPT · PYTHON · SQL', 'BARRANQUILLA / REMOTE', 'OPEN TO WORK'];
  const sequence = items.map((item) => <span className="ticker-item" key={item}>{item}<span className="ticker-separator" aria-hidden="true">✱</span></span>);

  return (
    <div className="ticker-shell border-b overflow-hidden text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase select-none" aria-label={items.join(' · ')}>
      <div className="ticker-track" aria-hidden="true">
        <div className="ticker-group">{sequence}</div>
        <div className="ticker-group">{sequence}</div>
      </div>
    </div>
  );
}
