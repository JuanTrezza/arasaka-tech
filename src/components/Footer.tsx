import { Terminal, Globe, Network, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="empresa-footer" className="bg-bg-dark border-t border-steel/20 py-20 relative z-10">
      
      {/* Decorative cyber line */}
      <div className="absolute top-0 right-10 w-24 h-[1px] bg-brand-cyan/30"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 text-stone-300">
        
        {/* Main Logo & Mission info */}
        <div className="lg:col-span-4 space-y-6" id="footer-logo-panel">
          <div className="font-orbitron font-black text-3xl tracking-widest text-[#CC5555] glitch-text">
            ARASAKA
          </div>
          <p className="font-barlow text-sm font-light text-stone-400 tracking-wide leading-relaxed max-w-xs">
            La seguridad no es un derecho, es un privilegio que garantizamos para aquellos que valoran el orden y la prosperidad.
          </p>

          {/* Social icons styled as Terminal nodes */}
          <div className="flex gap-4" id="footer-socials">
            <a 
              href="#contacto" 
              className="w-10 h-10 bg-surf-dark flex items-center justify-center hover:bg-brand-red hover:text-white transition-all clip-btn border border-steel/20"
              title="Terminal de contacto"
            >
              <Terminal size={14} />
            </a>
            <a 
              href="#soluciones" 
              className="w-10 h-10 bg-surf-dark flex items-center justify-center hover:bg-brand-red hover:text-white transition-all clip-btn border border-steel/20"
              title="Red de dominio"
            >
              <Globe size={14} />
            </a>
            <a 
              href="#servicios" 
              className="w-10 h-10 bg-surf-dark flex items-center justify-center hover:bg-brand-red hover:text-white transition-all clip-btn border border-steel/20"
              title="Servidores de integración"
            >
              <Network size={14} />
            </a>
          </div>
        </div>

        {/* Corporate Menu */}
        <div className="lg:col-span-2" id="footer-menu-corp">
          <h4 className="font-rajdhani font-bold text-lg text-white mb-6 uppercase tracking-wider">
            CORPORATIVO
          </h4>
          <nav className="flex flex-col gap-3 font-mono text-xs tracking-wide">
            <a href="#empresa" className="text-stone-400 hover:text-brand-red transition-colors">
              Nuestra Historia
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-stone-400 hover:text-brand-red transition-colors">
              Inversores
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-stone-400 hover:text-brand-red transition-colors">
              Carreras
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-stone-400 hover:text-brand-red transition-colors">
              Prensa
            </a>
          </nav>
        </div>

        {/* Support Menu */}
        <div className="lg:col-span-2" id="footer-menu-support">
          <h4 className="font-rajdhani font-bold text-lg text-white mb-6 uppercase tracking-wider">
            SOPORTE
          </h4>
          <nav className="flex flex-col gap-3 font-mono text-xs tracking-wide">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-stone-400 hover:text-brand-red transition-colors">
              Documentación
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-stone-400 hover:text-brand-red transition-colors">
              Portal de Cliente
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-stone-400 hover:text-brand-red transition-colors">
              Estatus de Red
            </a>
            <a href="#contacto" className="text-stone-400 hover:text-brand-red transition-colors">
              Contacto
            </a>
          </nav>
        </div>

        {/* Key Locations */}
        <div className="lg:col-span-4 space-y-6" id="footer-locations">
          <h4 className="font-rajdhani font-bold text-lg text-white mb-6 uppercase tracking-wider">
            UBICACIONES_CLAVE
          </h4>
          <div className="space-y-4 font-mono text-[11px] text-stone-400 leading-normal">
            
            <div className="border-l-2 border-brand-red/60 pl-4 py-0.5">
              <div className="text-white font-bold tracking-wide">ARASAKA TOWER NIGHT CITY</div>
              <div className="text-stone-500">77 Corpo Plaza, Night City, NC 00010</div>
            </div>

            <div className="border-l-2 border-brand-cyan/60 pl-4 py-0.5">
              <div className="text-white font-bold tracking-wide">TOKYO HEADQUARTERS</div>
              <div className="text-stone-500">2-1-1 Nihonbashi-Muromachi, Chuo City, Tokyo</div>
            </div>

          </div>
        </div>

      </div>

      {/* Sub-footer metadata row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-steel/15 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-500 font-mono text-[10px]">
        <div id="footer-copyright-terms">
          © {currentYear} ARASAKA CORP. TODOS LOS DERECHOS RESERVADOS. <span className="text-brand-gold font-bold">確保済み</span>
        </div>
        <div className="flex flex-wrap gap-6" id="footer-legal-links">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-red transition-colors">
            PROTOCOLOS_PRIVACIDAD
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-red transition-colors">
            AVISO_LEGAL
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-red transition-colors">
            POLÍTICA_RESTRICCIÓN
          </a>
        </div>
      </div>

    </footer>
  );
}
