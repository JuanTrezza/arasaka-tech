import { useState } from 'react';
import { ShieldCheck, Check, Info, X } from 'lucide-react';
import { TIER_LEVELS } from '../data';
import { LevelItem } from '../types';

interface IntegrationTiersProps {
  onSelectTier: (tierName: string) => void;
}

export default function IntegrationTiers({ onSelectTier }: IntegrationTiersProps) {
  const [selectedInfoTier, setSelectedInfoTier] = useState<LevelItem | null>(null);

  const handleActionClick = (level: LevelItem) => {
    setSelectedInfoTier(level);
  };

  const handleConfirmTier = () => {
    if (selectedInfoTier) {
      onSelectTier(selectedInfoTier.name);
      setSelectedInfoTier(null);
    }
  };

  return (
    <section id="servicios" className="py-24 bg-surf-dark/20 border-b border-steel/20 relative">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 h-full w-[1px] bg-steel/5 pointer-events-none"></div>
      <div className="absolute top-0 left-3/4 h-full w-[1px] bg-steel/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="font-rajdhani font-black text-4xl sm:text-5xl text-center text-white uppercase tracking-tight mb-4" id="integracion-header">
          NIVELES DE INTEGRACIÓN
        </h2>
        <p className="font-mono text-stone-500 text-xs text-center uppercase tracking-[0.2em] mb-16">
          // SELECCIONE EL PROTOCOLO DE INTEGRACIÓN CORPORATIVO ADECUADO
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {TIER_LEVELS.map((level) => (
            <div
              key={level.id}
              className={`flex flex-col p-10 bg-surf-dark relative transition-all duration-300 ${
                level.recommended
                  ? 'border-2 border-brand-red scale-105 shadow-[0_0_30px_rgba(204,0,0,0.15)] z-10 clip-angular bg-surf-high/85'
                  : 'border border-steel/20 scale-100 clip-angular focus-within:border-brand-cyan hover:border-steel/50'
              }`}
              id={`tier-card-${level.id}`}
            >
              {level.recommended && (
                <div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red px-6 py-1 font-mono text-white text-[10px] tracking-widest font-bold uppercase"
                  id="tier-badge-recommended"
                >
                  RECOMENDADO
                </div>
              )}

              <span className={`font-mono text-[11px] mb-2 block tracking-widest ${level.recommended ? 'text-brand-red font-bold' : 'text-stone-500'}`}>
                {level.levelCode}
              </span>

              <h3 className="font-rajdhani font-extrabold text-3xl text-white mb-8 tracking-tight uppercase">
                {level.name}
              </h3>

              <div className="border-t border-steel/20 my-2 pt-4"></div>

              <ul className="space-y-4 mb-12 flex-grow" id={`features-list-${level.id}`}>
                {level.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-stone-300 font-barlow text-base tracking-wide">
                    <Check size={18} className="text-brand-red shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleActionClick(level)}
                className={`w-full py-4 font-rajdhani font-bold text-lg tracking-wider transition-all duration-200 clip-btn cursor-pointer ${
                  level.recommended
                    ? 'bg-brand-red hover:bg-[#ff1a1a] text-white shadow-md'
                    : 'border border-brand-red/40 text-brand-red hover:bg-brand-red hover:text-white'
                }`}
                id={`btn-action-${level.id}`}
              >
                {level.actionLabel}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Confirmation Dialog */}
      {selectedInfoTier && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedInfoTier(null)}
          id="tier-dialog-overlay"
        >
          <div 
            className="w-full max-w-lg bg-surf-dark border border-brand-cyan p-6 sm:p-8 relative clip-angular"
            onClick={(e) => e.stopPropagation()}
            id="tier-dialog-content"
          >
            {/* HUD Corner Decor */}
            <div className="hud-bracket absolute inset-0"></div>

            <div className="flex justify-between items-start border-b border-steel/40 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-cyan animate-pulse" size={24} />
                <h3 className="font-orbitron font-black text-xl text-white tracking-widest">
                  CONFIRMACIÓN_PROTOCOLO
                </h3>
              </div>
              <button 
                onClick={() => setSelectedInfoTier(null)}
                className="text-stone-400 hover:text-brand-cyan p-1 cursor-pointer"
                id="close-tier-dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 font-barlow text-stone-300 text-base">
              <p>
                Está a punto de pre-seleccionar la integración de nivel militar <span className="text-brand-cyan font-bold">{selectedInfoTier.name}</span> ({selectedInfoTier.levelCode}).
              </p>
              
              <div className="bg-[#080810] p-4 text-xs font-mono border border-steel/30 text-stone-400 space-y-2">
                <div className="text-brand-cyan">// PARÁMETROS SELECCIONADOS:</div>
                {selectedInfoTier.features.map((f, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-brand-red">•</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <p className="text-stone-400 text-xs italic">
                Para completar la autorización y firmar el contrato de seguridad neural de Arasaka, se transferirá este paquete hacia la consola de encriptación segura. ¿Desea cargar los datos automáticamente en el terminal de contacto?
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 font-mono text-xs">
              <button 
                onClick={() => setSelectedInfoTier(null)}
                className="border border-steel/40 hover:bg-stone-900 text-stone-400 py-2.5 px-5 cursor-pointer clip-btn"
                id="btn-cancel-tier"
              >
                CANCELAR
              </button>
              <button 
                onClick={handleConfirmTier}
                className="bg-brand-cyan hover:bg-[#33f3ff] text-black font-bold py-2.5 px-6 cursor-pointer clip-btn"
                id="btn-confirm-tier animate-pulse"
              >
                CARGAR_EN_TERMINAL
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
