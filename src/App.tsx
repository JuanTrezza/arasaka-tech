import { useState, useRef } from 'react';
import { ChevronRight, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import Navbar from './components/Navbar';
import SolutionsGrid from './components/SolutionsGrid';
import StatsSection from './components/StatsSection';
import IntegrationTiers from './components/IntegrationTiers';
import HistorySection from './components/HistorySection';
import SecureTerminal from './components/SecureTerminal';
import Footer from './components/Footer';

export default function App() {
  const [preFilledMessage, setPreFilledMessage] = useState('');
  const [activeClientInfo, setActiveClientInfo] = useState<string | null>(null);

  const contactTerminalRef = useRef<HTMLDivElement>(null);

  const scrollToTerminal = () => {
    const section = document.getElementById('contacto');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTier = (tierName: string) => {
    setPreFilledMessage(`PRE-SELECCIÓN DE PROTOCOLO: ${tierName}`);
    scrollToTerminal();
  };

  const clientCompanies = [
    { name: 'MILITECH', desc: 'Socio de defensa táctica y contratista militar preferente.' },
    { name: 'TRAUMA TEAM', desc: 'Integración biomédica de respuesta rápida y soporte sináptico premium.' },
    { name: 'KANG TAO', desc: 'Compañía aliada en el de desarrollo de armamento inteligente de última generación.' },
    { name: 'ZETATECH', desc: 'Proveedor clave de hardware computacional y sistemas robóticos avanzados.' },
    { name: 'BIOTECHNICA', desc: 'Consultoría especializada en optimizaciones cibernéticas y neuronales moleculares.' }
  ];

  return (
    <div className="relative min-h-screen selection:bg-brand-red selection:text-white font-barlow text-stone-300 antialiased overflow-x-hidden bg-bg-dark" id="app-root-container">
      {/* Absolute Scanline Overlay for cyberpunk visual filter */}
      <div className="scanline-overlay"></div>

      {/* Corporate floating header */}
      <Navbar onOpenTerminalForm={scrollToTerminal} />

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden" id="hero-corporate-banner">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {/* Symmetrical dark backdrop and fog masking */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/70 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark/40 z-10"></div>
          <img 
            className="w-full h-full object-cover grayscale opacity-30 contrast-125 select-none pointer-events-none"
            alt="Cyberpunk megacorporation master tower piercing heavy skies" 
            referrerPolicy="no-referrer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhVVPwZQcKYbOzjpmUilXEwoWA-QadNs03GFSB6SHid07wgI1E9nVYLRPy5QbZWvi1WU_8o1AttWEEVreX2ZxIj4GGGpW9VXPNDHWQesY9T_ik8PbCEGAtzSKAKmXsfWDvxBQq0yMIfYw_bhaZnJPliZyHJuQw3PAqXkfm1Ej7i0q5-b4Ue_o-w736xviRMCgg9X1nXQUPyNe8RwKu8Sqort59fxog_bXeLwdETovGzrp-t2m_30hzM5QPEvwkNR3pkevwmxHBporb"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full mt-10">
          
          {/* Top category label */}
          <div 
            className="inline-block bg-[#CC0000]/10 border-l-2 border-brand-red px-4 py-1.5 mb-8 clip-hero-label animate-pulse"
            id="hero-badge-tag"
          >
            <span className="font-mono text-brand-cyan tracking-widest text-xs sm:text-sm font-semibold">
              // SOLUCIONES ENTERPRISE ARASAKA_V8
            </span>
          </div>

          {/* Epic Main Headline in uppercase */}
          <h1 className="font-orbitron font-black text-4xl sm:text-6xl md:text-8xl leading-[0.95] mb-6 tracking-tight" id="hero-main-title">
            <span className="text-white block">PROTEGEMOS LO QUE OTROS</span>
            <span className="text-brand-red block drop-shadow-[0_0_15px_rgba(204,0,0,0.5)] uppercase tracking-wide">
              NO PUEDEN IMAGINAR
            </span>
          </h1>

          {/* Subtitles */}
          <p className="font-rajdhani text-stone-400 text-xl sm:text-2xl font-semibold max-w-2xl mb-12 border-l-2 border-brand-red/60 pl-6 leading-relaxed" id="hero-tagline">
            Infraestructura de Grado Militar. Seguridad Neural Avanzada. 
            Dominio Absoluto del Espacio de Datos Corporativo.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={scrollToTerminal}
              className="bg-brand-red hover:bg-[#ff1a1a] text-white font-rajdhani font-bold px-10 py-4 text-lg clip-btn transition-all duration-200 flex items-center gap-3 cursor-pointer shadow-[0_4px_15px_rgba(204,0,0,0.3)] hover:shadow-[0_0_20px_rgba(204,0,0,0.6)]"
              id="hero-btn-demo"
            >
              <span>SOLICITAR_DEMO</span>
              <ArrowRight size={18} />
            </button>
            <a 
              href="#soluciones"
              className="border border-brand-cyan/50 hover:bg-brand-cyan/15 text-brand-cyan font-rajdhani font-bold px-10 py-4 text-lg clip-btn transition-all duration-200 text-center"
              id="hero-btn-discover"
            >
              VER_SOLUCIONES
            </a>
          </div>

        </div>

        {/* HUD bottom indicators */}
        <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 font-mono text-[9px] text-stone-500 border-t border-steel/10 pt-4" id="hero-hud-metadata">
          <div className="flex flex-wrap gap-x-12 gap-y-2">
            <div>COORD: 34.0522° N, 118.2437° W</div>
            <div>ENCRYPT: RSA_4096_AES_256</div>
            <div>STATUS: SECURED_ZONE_荒坂</div>
          </div>
          <div>ARASAKA CORP. © {new Date().getFullYear()}</div>
        </div>
      </header>

      {/* Cyber Ticker Banner */}
      <section className="bg-brand-red py-3.5 overflow-hidden border-y border-[#ff1a1a]/30 relative z-30 select-none cursor-default" id="ticker-belt">
        <div className="ticker-wrap flex items-center">
          <div className="ticker-slow font-mono font-bold text-white text-sm tracking-[0.1em] whitespace-nowrap">
            ARASAKA TECH // SEGURIDAD ENTERPRISE // 荒坂テクノロジー // PROTECCIÓN NEURAL ACTIVA // AMENAZA NIVEL 0 // ARASAKA TECH // SEGURIDAD ENTERPRISE // 荒坂テクノロジー // PROTECCIÓN NEURAL ACTIVA // AMENAZA NIVEL 0 // &nbsp;
            ARASAKA TECH // SEGURIDAD ENTERPRISE // 荒坂テクノロジー // PROTECCIÓN NEURAL ACTIVA // AMENAZA NIVEL 0 // ARASAKA TECH // SEGURIDAD ENTERPRISE // 荒坂テクノロジー // PROTECCIÓN NEURAL ACTIVA // AMENAZA NIVEL 0 // &nbsp;
          </div>
        </div>
      </section>

      {/* Clients Logotypes Section */}
      <section className="py-20 bg-surf-dark/30 border-b border-steel/10 relative" id="clients-logos-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="font-mono text-[10px] text-stone-600 mb-8 uppercase tracking-[0.2em]">
            // ENTIDADES E INFRAESTRUCTURAS ASOCIADAS CON AUTORIZACIÓN ARASAKA
          </div>

          <div className="flex flex-wrap justify-between items-center gap-10 md:gap-14 opacity-40 hover:opacity-100 transition-opacity duration-300">
            {clientCompanies.map((comp) => (
              <button
                key={comp.name}
                onClick={() => setActiveClientInfo(activeClientInfo === comp.name ? null : comp.name)}
                className={`font-orbitron font-bold text-2xl sm:text-3xl tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  activeClientInfo === comp.name ? 'text-brand-cyan scale-110 opacity-100 font-black' : 'text-stone-400 hover:text-white'
                }`}
                title={`Click para inspeccionar perfil corporativo de ${comp.name}`}
                id={`btn-client-logo-${comp.name}`}
              >
                {comp.name}
              </button>
            ))}
          </div>

          {/* Interactive Client Corporation Details Card */}
          {activeClientInfo && (
            <div className="mt-8 max-w-xl mx-auto bg-black p-4 border border-brand-cyan/30 clip-angular text-left relative animate-pulse" id="client-info-drawer">
              <div className="font-mono text-[10px] text-brand-cyan mb-1 flex items-center justify-between">
                <span>// INTEL_ANALYSIS // COOPERATIVE_NODE_INFO</span>
                <button onClick={() => setActiveClientInfo(null)} className="text-stone-500 hover:text-brand-red text-xs">CERRAR</button>
              </div>
              <h4 className="font-rajdhani font-black text-[#ffffff] text-lg uppercase mb-1 tracking-wider">
                {activeClientInfo}
              </h4>
              <p className="font-barlow text-sm font-light text-stone-300 leading-relaxed">
                {clientCompanies.find(c => c.name === activeClientInfo)?.desc}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Solutions / Pillars of Power */}
      <SolutionsGrid />

      {/* Global Numerical Analytics (Dynamic counters) */}
      <StatsSection />

      {/* Integration Tiers levels (Level 1, 2, 3) */}
      <IntegrationTiers onSelectTier={handleSelectTier} />

      {/* Ancient/Legacy Power of the corporate behemoth (History Section) */}
      <HistorySection />

      {/* Encrypted Contact Command Console (Terminal Section) */}
      <div ref={contactTerminalRef}>
        <SecureTerminal 
          preFilledMessage={preFilledMessage} 
          onClearPreFilledMessage={() => setPreFilledMessage('')} 
        />
      </div>

      {/* Elegant authoritative corporate footer */}
      <Footer />
    </div>
  );
}
