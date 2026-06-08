import React, { useState, useEffect, useRef } from 'react';
import { Send, Terminal, Loader2, CheckCircle2 } from 'lucide-react';

interface SecureTerminalProps {
  preFilledMessage: string;
  onClearPreFilledMessage: () => void;
}

interface ConsoleLog {
  id: string;
  text: string;
  type: 'info' | 'warn' | 'success' | 'alert';
}

export default function SecureTerminal({ preFilledMessage, onClearPreFilledMessage }: SecureTerminalProps) {
  const [formData, setFormData] = useState({
    username: '',
    department: '',
    email: '',
    message: ''
  });

  const [logs, setLogs] = useState<ConsoleLog[]>([
    { id: '1', text: 'SECURE_SHELL_INIT: READY', type: 'info' },
    { id: '2', text: 'CONECTADO AL SATÉLITE ARASAKA_V8_NC', type: 'success' },
    { id: '3', text: 'CANAL ENCRIPTADO RESISTENTE A INTERFERENCIA CUÁNTICA', type: 'info' }
  ]);

  const [isEncrypting, setIsEncrypting] = useState(false);
  const [encryptionProgress, setEncryptionProgress] = useState(0);
  const [isDispatched, setIsDispatched] = useState(false);
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  // Autofill message if prefilled message arrives
  useEffect(() => {
    if (preFilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: `${preFilledMessage}. Requiero iniciar los protocolos de auditoría de seguridad.`
      }));
      addLog(`PRE-FILL DETECTADO: Cargando datos de nivel de integración selecccionado.`, 'warn');
      onClearPreFilledMessage();
    }
  }, [preFilledMessage]);

  // Scroll terminal logs to bottom when logs update
  useEffect(() => {
    if (consoleBottomRef.current) {
      consoleBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const addLog = (text: string, type: 'info' | 'warn' | 'success' | 'alert' = 'info') => {
    const timestamp = new Date().toLocaleTimeString('es-ES');
    setLogs((prev) => [
      ...prev,
      { id: Date.now().toString() + Math.random().toString(), text: `[${timestamp}] ${text}`, type }
    ]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Dynamic keyboard logs
    if (Math.random() > 0.4) {
      const fieldLabels: Record<string, string> = {
        username: 'BIOMETRICO_ID',
        department: 'CORP_DEPT',
        email: 'CANAL_COMM',
        message: 'MENSAJE_CIFRADO'
      };
      addLog(`ENTRADA DETECTADA EN ${fieldLabels[name] || name}: Generando hash temporal...`, 'info');
    }
  };

  const handleInputFocus = (fieldName: string) => {
    addLog(`FOCO ACTIVO: Terminal monitoreando canal de entrada [${fieldName.toUpperCase()}]`, 'info');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEncrypting || isDispatched) return;

    setIsEncrypting(true);
    setEncryptionProgress(0);
    addLog('INICIANDO CONEXIÓN DEL TÚNEL CUÁNTICO...', 'alert');

    // Steps logging simulation
    setTimeout(() => addLog('GENERANDO PAR DE LLAVES DIFIFIE-HELLMAN DE 4096 BITS...', 'info'), 300);
    setTimeout(() => addLog('CÁLCULO DE CURVAS ELÍPTICAS INICIADO (ECC SECP256K1)...', 'info'), 700);
    setTimeout(() => addLog('PAQUETE DE ENTRADA FRAGMENTADO EN CHUNKS DE 128-BIT...', 'warn'), 1100);
    setTimeout(() => addLog('INYECTANDO SEÑUELOS CONTRA ATAQUES MAN-IN-THE-MIDDLE...', 'success'), 1400);

    // Progress counter animation
    const interval = setInterval(() => {
      setEncryptionProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 5;
      });
    }, 90);

    setTimeout(() => {
      setIsEncrypting(false);
      setIsDispatched(true);
      addLog('¡PAQUETE ENCRIPTADO Y TRANSMITIDO CON ÉXITO!', 'success');
      addLog('ESTADO: PAQUETE_ENTREGADO_荒坂-A-NIVEL-MÁSTER', 'success');
      
      // Auto reset success message after 6 seconds
      setTimeout(() => {
        setIsDispatched(false);
        setFormData({ username: '', department: '', email: '', message: '' });
        addLog('TERMINAL LIMPIO: Listo para nueva transmisión de requerimientos.', 'info');
      }, 6000);

    }, 2200);
  };

  return (
    <section id="contacto" className="py-24 bg-surf-dark/40 border-b border-steel/10 relative">
      <div className="max-w-4xl mx-auto px-6" id="secure-terminal-container">
        
        {/* Terminal Box Shell */}
        <div className="bg-black border-2 border-brand-red p-6 sm:p-8 clip-angular relative" id="terminal-main-shell">
          
          {/* Top Header */}
          <div className="flex items-center justify-between mb-8 border-b border-brand-red/30 pb-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red shadow-[0_0_8px_#CC0000]"></span>
              </span>
              <span className="font-mono text-brand-red text-sm font-bold tracking-widest uppercase">
                SECURE_TERMINAL_V.4.2 -- ENCRYPTED_CHANNEL
              </span>
            </div>
            <Terminal size={18} className="text-brand-red hidden sm:block animate-pulse" />
          </div>

          <form className="space-y-8" onSubmit={handleSubmit} id="secure-envelope-form">
            
            {/* Input Name */}
            <div className="group relative">
              <label className="block font-mono text-stone-500 text-xs mb-1 uppercase tracking-wider">
                Nombre Completo
              </label>
              <input 
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                onFocus={() => handleInputFocus('username')}
                className="w-full bg-transparent border-b border-steel/50 focus:border-brand-red focus:ring-0 text-white font-barlow text-lg tracking-wide py-2 outline-none transition-all placeholder-stone-700 font-light"
                placeholder="ID_USUARIO" 
                required
                disabled={isEncrypting || isDispatched}
                type="text"
                id="input-biometric-name"
              />
            </div>

            {/* Sub-grid (Corp & Email) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="group relative">
                <label className="block font-mono text-stone-500 text-xs mb-1 uppercase tracking-wider">
                  Cargo / Corporación
                </label>
                <input 
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('department')}
                  className="w-full bg-transparent border-b border-steel/50 focus:border-brand-red focus:ring-0 text-white font-barlow text-lg tracking-wide py-2 outline-none transition-all placeholder-stone-700 font-light"
                  placeholder="DEPT_OPERACIONES"
                  required
                  disabled={isEncrypting || isDispatched}
                  type="text"
                  id="input-biometric-dept"
                />
              </div>

              <div className="group relative">
                <label className="block font-mono text-stone-500 text-xs mb-1 uppercase tracking-wider">
                  Canal de Comunicación (Email)
                </label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('email')}
                  className="w-full bg-transparent border-b border-steel/50 focus:border-brand-red focus:ring-0 text-white font-barlow text-lg tracking-wide py-2 outline-none transition-all placeholder-stone-700 font-light"
                  placeholder="MAIL@CORP.ARK"
                  required
                  disabled={isEncrypting || isDispatched}
                  type="email"
                  id="input-biometric-email"
                />
              </div>

            </div>

            {/* Message Area */}
            <div className="group relative">
              <label className="block font-mono text-stone-500 text-xs mb-1 uppercase tracking-wider">
                Mensaje Encriptado
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleInputFocus('message')}
                className="w-full bg-transparent border-b border-steel/50 focus:border-brand-red focus:ring-0 text-white font-barlow text-lg tracking-wide py-2 outline-none transition-all min-h-[120px] placeholder-stone-700 font-light resize-none"
                placeholder="DESCRIBA_REQUERIMIENTO_DE_SEGURIDAD..." 
                required
                disabled={isEncrypting || isDispatched}
                id="input-cyber-message"
              ></textarea>
            </div>

            {/* LIVE CONSOLE LOG INTEGRATED DISPLAY */}
            <div className="bg-[#050508] border border-steel/45 rounded-sm p-4 font-mono text-[11px] leading-relaxed max-h-[140px] overflow-y-auto mt-4 cursor-default">
              <div className="flex items-center gap-2 text-stone-500 border-b border-steel/20 pb-1.5 mb-2">
                <Terminal size={12} className="text-brand-cyan" />
                <span className="uppercase tracking-widest text-[9px]">DIAGNÓSTICO_CONSOLA_TRANSFECTION</span>
              </div>
              <div className="space-y-1">
                {logs.map((log) => (
                  <div key={log.id} className="flex gap-2 items-start">
                    <span className="text-stone-600 shrink-0">&gt;</span>
                    <span className={
                      log.type === 'success' ? 'text-brand-cyan' :
                      log.type === 'warn' ? 'text-brand-gold' :
                      log.type === 'alert' ? 'text-brand-red font-bold' : 'text-stone-400'
                    }>
                      {log.text}
                    </span>
                  </div>
                ))}
                <div ref={consoleBottomRef} />
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 border-t border-steel/10">
              <div className="font-mono text-[10px] text-brand-red tracking-wider self-start sm:self-center" id="waiting-status-label">
                &gt; ESPERANDO_INPUT_DATO<span className="cursor-blink">_</span>
              </div>

              {isEncrypting ? (
                <button 
                  type="button"
                  disabled
                  className="bg-brand-red/30 text-white font-rajdhani font-bold px-12 py-4 text-xl clip-btn flex items-center gap-3 w-full sm:w-auto justify-center"
                  id="btn-submitting"
                >
                  <Loader2 className="animate-spin text-brand-cyan" size={20} />
                  <span>ENC_PROGRESS {encryptionProgress}%</span>
                </button>
              ) : isDispatched ? (
                <button 
                  type="button"
                  disabled
                  className="bg-brand-cyan text-black font-rajdhani font-bold px-12 py-4 text-xl clip-btn flex items-center gap-3 w-full sm:w-auto justify-center"
                  id="btn-submitting-success"
                >
                  <CheckCircle2 size={20} className="text-black" />
                  <span>PAQUETE_ENTREGADO</span>
                </button>
              ) : (
                <button 
                  type="submit"
                  className="bg-brand-red hover:bg-[#ff1a1a] text-white font-rajdhani font-bold px-12 py-4 text-xl clip-btn transition-all uppercase tracking-wider cursor-pointer flex items-center gap-2 justify-center w-full sm:w-auto hover:shadow-[0_0_15px_rgba(204,0,0,0.4)]"
                  id="submit-secured-packet-btn"
                >
                  <span>ENVIAR_PAQUETE</span>
                  <Send size={16} />
                </button>
              )}
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}
