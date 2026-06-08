import { useState } from 'react';
import * as Icons from 'lucide-react';
import { SolutionItem } from '../types';
import { SOLUTIONS } from '../data';

// Helper to resolve icon dynamic string name to Lucide Icon
function SolutionIcon({ name, className }: { name: string; className?: string }) {
  // @ts-ignore
  const IconComponent = Icons[name];
  if (!IconComponent) return <Icons.Activity className={className} />;
  return <IconComponent className={className} />;
}

export default function SolutionsGrid() {
  const [activeBlueprint, setActiveBlueprint] = useState<SolutionItem | null>(null);

  return (
    <section id="soluciones" className="py-24 bg-surf-dark/50 border-b border-steel/20 relative">
      {/* Background wireframe grids strictly for aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#13131b_1px,transparent_1px),linear-gradient(to_bottom,#13131b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="font-mono text-brand-red text-xs font-bold tracking-[0.3em] mb-2 block uppercase">
              // NUESTROS_PILARES
            </span>
            <h2 className="font-rajdhani font-extrabold text-4xl sm:text-5xl text-white uppercase tracking-tight">
              SOLUCIONES DE DOMINIO
            </h2>
          </div>
          <div className="font-mono text-stone-500 text-xs tracking-wider border-l border-steel/40 pl-4">
            DOC_ID: AS_TECH_SOL_2024
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveBlueprint(item)}
              className="group bg-surf-dark/80 p-8 border border-steel/30 relative clip-angular transition-all duration-300 hover:bg-surf-high hover:border-brand-red hover:-translate-y-1 cursor-pointer shadow-lg"
              id={`solution-card-${item.id}`}
            >
              {/* Corner brackets shown on hover */}
              <div className="hud-bracket absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Angle cutting decor */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none border-t border-r border-[#690005]/20 group-hover:border-brand-cyan/30"></div>

              <div className="text-brand-red group-hover:text-brand-cyan transition-colors duration-300 mb-6" id={`icon-wrapper-${item.id}`}>
                <SolutionIcon name={item.iconName} className="w-12 h-12" />
              </div>

              <h3 className="font-rajdhani font-bold text-2xl text-white mb-4 uppercase tracking-wide group-hover:text-brand-cyan transition-colors">
                {item.title}
              </h3>

              <p className="font-barlow text-stone-300 text-base font-light tracking-wide leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-stone-500 group-hover:text-brand-cyan transition-colors">
                <span>INSPECCIONAR_ESQUEMA</span>
                <Icons.ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cybernetic Blueprint Modal */}
      {activeBlueprint && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveBlueprint(null)}
          id="blueprint-modal-overlay"
        >
          <div 
            className="w-full max-w-xl bg-surf-dark border-2 border-brand-red p-6 sm:p-8 relative clip-angular"
            onClick={(e) => e.stopPropagation()}
            id="blueprint-modal-content"
          >
            {/* HUD Bracket overlay */}
            <div className="hud-bracket absolute inset-0"></div>

            <div className="flex justify-between items-start border-b border-steel/40 pb-4 mb-6">
              <div>
                <span className="font-mono text-brand-red text-[10px] tracking-widest uppercase block">// ARCHIVO_MÁSTER_ARASAKA</span>
                <h3 className="font-orbitron font-black text-2xl text-white tracking-widest uppercase mt-1">
                  {activeBlueprint.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveBlueprint(null)}
                className="text-stone-400 hover:text-brand-red p-1 cursor-pointer"
                id="close-blueprint-modal"
              >
                <Icons.X size={20} />
              </button>
            </div>

            <div className="space-y-4 font-barlow text-stone-300 text-base leading-relaxed">
              <p className="text-white font-semibold italic">
                &quot;{activeBlueprint.description}&quot;
              </p>
              
              <div className="border-t border-steel/20 pt-4 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-stone-500">
                  <span>PROTOCOLO_ID:</span>
                  <span className="text-brand-cyan">ARK-{activeBlueprint.id.toUpperCase()}-204</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>NIVEL_DE_AUTORIZACIÓN:</span>
                  <span className="text-brand-gold font-bold">CLEARANCE_EJECUTIVO_N4</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>LATENCIA_SINAPTICA:</span>
                  <span className="text-brand-cyan">&lt; 0.001ms</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>DISPONIBILIDAD:</span>
                  <span className="text-white">COBERTURA SATELITAL GLOBAL</span>
                </div>
              </div>

              <div className="mt-6 bg-[#080810] p-4 text-[11px] font-mono border border-steel/40 text-stone-400 leading-normal max-h-40 overflow-y-auto">
                <div className="text-brand-cyan mb-1">&gt; INICIANDO INYECCIÓN DE DIAGNÓSTICO...</div>
                <div>[INFO] Conexión establecida con central satelital en órbita síncrona.</div>
                <div>[OK] Escudos moleculares de nodo local estables.</div>
                <div>[STATUS] Canales de seguridad de fibra súper-conductora blindados.</div>
                <div className="text-[#CC5555] mt-1">[ALERTA] Requiere confirmación de llave criptográfica biométrica para operaciones directas.</div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setActiveBlueprint(null)}
                className="bg-brand-red hover:bg-[#ff1a1a] text-white font-mono text-xs px-6 py-2.5 cursor-pointer clip-btn"
                id="btn-close-blueprint"
              >
                CERRAR_EXPEDIENTE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
