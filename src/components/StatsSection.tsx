import { useState, useEffect } from 'react';

export default function StatsSection() {
  const [clientes, setClientes] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [amenazas, setAmenazas] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation

    const animateStats = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Simular conteo
      setClientes(Math.floor(progress * 2370));
      setUptime(Number((progress * 83.23).toFixed(2)));
      setAmenazas(Math.floor(progress * 40202));

      if (progress < 1) {
        requestAnimationFrame(animateStats);
      } else {
        // Ensure exact target values are set
        setClientes(2370);
        setUptime(83.23);
        setAmenazas(40202);
      }
    };

    const animFrame = requestAnimationFrame(animateStats);

    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section id="metricas" className="py-20 bg-bg-dark border-b border-steel/10 relative overflow-hidden">
      {/* Visual cybernetic accent lines */}
      <div className="absolute top-0 left-0 w-32 h-[1px] bg-brand-cyan/20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-[1px] bg-brand-red/20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Stat 1 */}
        <div className="text-center sm:text-left border-l border-brand-red/20 pl-6 group relative" id="metric-clientes">
          <div className="absolute -left-[1px] top-0 h-4 w-[2px] bg-brand-red"></div>
          <div className="font-orbitron font-extrabold text-brand-red text-4xl sm:text-5xl mb-2 tracking-wider group-hover:scale-105 transition-transform duration-300">
            {clientes.toLocaleString('es-ES')}
          </div>
          <div className="font-mono text-stone-400 text-xs tracking-widest uppercase">
            Clientes Corporativos
          </div>
        </div>

        {/* Stat 2 */}
        <div className="text-center sm:text-left border-l border-brand-red/20 pl-6 group relative" id="metric-uptime">
          <div className="absolute -left-[1px] top-0 h-4 w-[2px] bg-brand-red"></div>
          <div className="font-orbitron font-extrabold text-brand-red text-4xl sm:text-5xl mb-2 tracking-wider group-hover:scale-105 transition-transform duration-300">
            {uptime.toFixed(2)}%
          </div>
          <div className="font-mono text-stone-400 text-xs tracking-widest uppercase">
            Uptime Operativo
          </div>
        </div>

        {/* Stat 3 */}
        <div className="text-center sm:text-left border-l border-brand-red/20 pl-6 group relative" id="metric-amenazas">
          <div className="absolute -left-[1px] top-0 h-4 w-[2px] bg-brand-red"></div>
          <div className="font-orbitron font-extrabold text-brand-red text-4xl sm:text-5xl mb-2 tracking-wider group-hover:scale-105 transition-transform duration-300">
            {amenazas.toLocaleString('es-ES')}
          </div>
          <div className="font-mono text-stone-400 text-xs tracking-widest uppercase">
            Amenazas Neutralizadas
          </div>
        </div>

        {/* Stat 4 */}
        <div className="text-center sm:text-left border-l border-brand-red/20 pl-6 group relative" id="metric-tiempo">
          <div className="absolute -left-[1px] top-0 h-4 w-[2px] bg-brand-red"></div>
          <div className="font-orbitron font-extrabold text-brand-red text-4xl sm:text-5xl mb-2 tracking-wider group-hover:scale-105 transition-transform duration-300">
            &lt; 0.3s
          </div>
          <div className="font-mono text-stone-400 text-xs tracking-widest uppercase">
            Tiempo de Respuesta
          </div>
        </div>

      </div>
    </section>
  );
}
