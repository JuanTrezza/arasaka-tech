import { useEffect, useState } from 'react';

export default function HistorySection() {
  const [iceLoad, setIceLoad] = useState(0);
  const [firewallLoad, setFirewallLoad] = useState(0);

  useEffect(() => {
    // Settle loads nicely after mount
    const timer = setTimeout(() => {
      setIceLoad(95);
      setFirewallLoad(88);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="empresa" className="py-24 bg-bg-dark border-b border-steel/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Block with corner decor and image */}
        <div className="relative group" id="history-visual-wrapper">
          <div className="hud-bracket absolute -inset-4 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="overflow-hidden border border-steel/40 relative">
            <img 
              className="relative z-10 w-full aspect-video object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700"
              alt="Arasaka Corporation high-security brutalist campus" 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN1uGUEKtebIlGCFSKSGu_Z5Gyp8wB7q3XehNTgLM5h4USZPQVGIWTduLfnEGz3HYR00_nqUfqxvDivZv3h8XmX-lo0miy1VcA58YpEGsQiDdYKlYRcqwm9McNaSWpXaVohP97CmmP9R9nTxCqQhzZPaE7qo-jH5hjy6_glGTi0n8gbu7YPG7L6xzB0d80BukOwVrvlTLsRDcLbsQnAsHwYgvO0OB5wpBG2ps-SHlPD5zNb82BsMxJgAaB4rorB2fEHufX5wO5yep7"
            />
          </div>

          <div 
            className="absolute -bottom-6 -right-6 bg-brand-red text-white font-orbitron font-black text-2xl sm:text-3xl px-8 py-5 z-20 shadow-[0_4px_20px_rgba(204,0,0,0.4)] tracking-wider"
            id="history-badge-est"
          >
            EST. 1915
          </div>
        </div>

        {/* Informative Block */}
        <div className="space-y-6" id="history-content-wrapper">
          <span className="font-mono text-brand-cyan tracking-[0.2em] text-xs font-bold block uppercase">
            ARASAKA_CORP_HISTORY
          </span>
          <h2 className="font-rajdhani font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            UNA LEYENDA DE PODER
          </h2>
          
          <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed font-light">
            <p className="border-l border-brand-red/40 pl-6 py-1">
              Fundada en Tokio, Arasaka ha pasado de ser una empresa de logística a ser el líder indiscutible en seguridad global, banca y manufactura de alta tecnología.
            </p>
            <p className="text-stone-400">
              Bajo la dirección del visionario Saburo Arasaka, la compañía se ha convertido en la columna vertebral del orden mundial, proporcionando la estabilidad necesaria para que la civilización moderna florezca en un entorno cada vez más hostil.
            </p>

            {/* Performance Indicators Grid */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="flex justify-between text-white font-rajdhani font-bold text-base mb-2">
                  <span>ICE v8.2</span>
                  <span className="text-brand-red">{iceLoad}%</span>
                </div>
                <div className="h-1.5 bg-surf-high w-full border border-steel/20 relative">
                  <div 
                    className="h-full bg-brand-red transition-all duration-1000 ease-out shadow-[0_0_10px_#CC0000]"
                    style={{ width: `${iceLoad}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-white font-rajdhani font-bold text-base mb-2">
                  <span>NEURAL_FIREWALL</span>
                  <span className="text-brand-cyan">{firewallLoad}%</span>
                </div>
                <div className="h-1.5 bg-surf-high w-full border border-steel/20 relative">
                  <div 
                    className="h-full bg-brand-cyan transition-all duration-1000 ease-out shadow-[0_0_10px_#00F0FF]"
                    style={{ width: `${firewallLoad}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
