import { useState, useEffect } from 'react';
import { Activity, Cpu, ShieldCheck, X, HardDrive, Network, Terminal } from 'lucide-react';
import { DiagnosticsNode } from '../types';
import { INITIAL_NODES } from '../data';

interface NavbarProps {
  onOpenTerminalForm: () => void;
}

export default function Navbar({ onOpenTerminalForm }: NavbarProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [nodes, setNodes] = useState<DiagnosticsNode[]>(INITIAL_NODES);
  const [threatLevel, setThreatLevel] = useState<number>(31);
  const [systemAlert, setSystemAlert] = useState<string | null>(null);

  // Periodically simulate minor load fluctuations to look authentic
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          const loadChange = Math.floor(Math.random() * 9) - 4; // -4 to +4
          const newLoad = Math.max(10, Math.min(100, node.load + loadChange));
          return {
            ...node,
            load: newLoad,
            status: newLoad > 90 ? '危険' : node.status,
            statusType: newLoad > 90 ? 'error' : 'success',
          };
        })
      );
      // Fluctuating threat level
      setThreatLevel((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(15, Math.min(65, prev + change));
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav id="arasaka-main-nav" className="fixed top-0 w-full z-50 bg-bg-dark/85 backdrop-blur-xl border-b border-steel/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#" className="group flex items-center gap-2" id="nav-logo-link">
              <span className="font-orbitron font-black text-2xl tracking-widest text-[#CC5555] group-hover:text-brand-red transition-all glitch-text">
                ARASAKA
              </span>
              <span className="text-stone-400 font-rajdhani text-lg font-bold border-l border-steel/50 pl-3 hidden sm:inline">
                荒坂
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-wider" id="nav-links-container">
            <a href="#soluciones" className="text-stone-300 hover:text-brand-red transition-all cursor-pointer hover:-translate-y-0.5">
              SOLUCIONES
            </a>
            <a href="#servicios" className="text-stone-300 hover:text-brand-red transition-all cursor-pointer hover:-translate-y-0.5">
              SERVICIOS
            </a>
            <a href="#empresa" className="text-stone-300 hover:text-brand-red transition-all cursor-pointer hover:-translate-y-0.5">
              EMPRESA
            </a>
            <a href="#contacto" className="text-stone-300 hover:text-brand-red transition-all cursor-pointer hover:-translate-y-0.5">
              CONTACTO
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Systems Status Monitor Button */}
            <button 
              onClick={() => setIsPanelOpen(true)}
              className="flex items-center gap-2 font-mono text-[10px] text-brand-cyan hover:brightness-125 transition-all text-left group bg-brand-cyan/5 px-3 py-1.5 border border-brand-cyan/20 cursor-pointer"
              title="Click para ver diagnósticos de redes"
              id="btn-systems-monitor"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan shadow-[0_0_8px_#00F0FF]"></span>
              </span>
              <span className="hidden sm:inline tracking-wider group-hover:underline">SISTEMAS_ONLINE</span>
            </button>

            {/* Request Demo trigger */}
            <button 
              onClick={onOpenTerminalForm}
              className="bg-brand-red hover:bg-[#ff1a1a] text-white font-mono text-xs px-5 py-2.5 transition-all clip-btn hover:shadow-[0_0_15px_rgba(204,0,0,0.4)] cursor-pointer"
              id="btn-nav-demo"
            >
              SOLICITAR_DEMO
            </button>
          </div>
        </div>
      </nav>

      {/* Systems Status Sliding Panel */}
      {isPanelOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end transition-opacity duration-300"
          onClick={() => setIsPanelOpen(false)}
          id="diagnostics-overlay"
        >
          <div 
            className="w-full max-w-md bg-surf-dark border-l border-brand-cyan/40 p-6 flex flex-col h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            id="diagnostics-drawer"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-steel/40 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Activity className="text-brand-cyan animate-pulse" size={20} />
                <h3 className="font-orbitron font-bold text-lg text-white tracking-wider">DIAGNÓSTICOS_RED</h3>
              </div>
              <button 
                onClick={() => setIsPanelOpen(false)}
                className="text-stone-400 hover:text-brand-red p-1 cursor-pointer"
                id="btn-close-diagnostics"
              >
                <X size={20} />
              </button>
            </div>

            {/* Threat Level */}
            <div className="bg-brand-red/5 border border-brand-red/30 p-4 mb-6 clip-angular">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-stone-400">NIVEL_DE_AMENAZA_RED</span>
                <span className="text-sm font-mono font-bold text-brand-red">{threatLevel}% (AMENAZA MODERADA)</span>
              </div>
              <div className="w-full bg-stone-900 h-2 border border-steel/30">
                <div 
                  className="bg-brand-red h-full transition-all duration-1000 shadow-[0_0_10px_#CC0000]"
                  style={{ width: `${threatLevel}%` }}
                ></div>
              </div>
              <div className="mt-2 text-[11px] font-mono text-stone-500">
                // Escaneo activo de Subred de Night City y servidores satélite orbitales.
              </div>
            </div>

            {/* Nodes Info */}
            <div className="flex-grow space-y-4">
              <h4 className="font-mono text-xs text-brand-cyan tracking-wider">// NODOS LOCALES Y REMOTOS</h4>
              {nodes.map((node) => (
                <div key={node.id} className="bg-bg-dark border border-steel/30 p-3 flex flex-col relative">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-mono text-xs text-white tracking-widest">{node.nodeName}</span>
                    <span className={`font-mono text-[9px] px-1.5 py-0.5 border ${
                      node.statusType === 'error' 
                        ? 'text-brand-red border-brand-red/40 bg-brand-red/5' 
                        : 'text-brand-cyan border-brand-cyan/40 bg-brand-cyan/5'
                    }`}>
                      {node.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-stone-500 mb-1.5">
                    <span>Región: {node.region}</span>
                    <span>Carga: {node.load}%</span>
                  </div>
                  <div className="w-full bg-stone-900 h-1">
                    <div 
                      className={`h-full transition-all duration-700 ${
                        node.load > 85 ? 'bg-brand-red' : 'bg-brand-cyan'
                      }`}
                      style={{ width: `${node.load}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer with actions */}
            <div className="mt-6 border-t border-steel/40 pt-4 flex flex-col gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[10px] text-stone-400">
                <Cpu size={12} className="text-brand-cyan" />
                <span>MEMORIA_SISTEMA: 84.1 TB / 128 TB</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-stone-400">
                <Network size={12} className="text-brand-cyan" />
                <span>NÚCLEOS QUANTUM: 128/128 ACTIVO</span>
              </div>
              <button 
                onClick={() => {
                  setIsPanelOpen(false);
                  onOpenTerminalForm();
                }}
                className="w-full bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 py-2.5 font-bold tracking-widest cursor-pointer clip-btn"
                id="btn-diagnostics-report"
              >
                INFORMAR_ANOMALÍA
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
