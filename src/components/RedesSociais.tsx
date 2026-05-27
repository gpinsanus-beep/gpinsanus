import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Youtube, Compass, Shield, ArrowUpRight, Megaphone, Info, Trophy } from "lucide-react";

// Official handles and counts for their extreme social channels
const SOCIALS_DATA = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@gpinsanus",
    followers: "0 seguidores",
    status: "Últimas fotos e conquistas diárias",
    description: "Confira nos nossos stories a rotina brutal de treinos diários dos 5 amigos, dicas rápidas, atualizações de peso corporal e nutrição de ponta.",
    icon: Instagram,
    color: "#e1306c",
    neonAccent: "rgba(225, 48, 108, 0.4)",
    url: "#"
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@gpinsanus",
    followers: "350K seguidores",
    status: "#GymTok Viral & Shorts Pesados",
    description: "Siga o canal principal de vídeos dinâmicos de alta fúria. Levantamentos pesados, zoeiras de academia raiz, cortes de Phonk e alta motivação.",
    icon: Compass,
    color: "#00f3ff",
    neonAccent: "rgba(0, 243, 255, 0.4)",
    url: "https://www.tiktok.com/@gpinsanus?is_from_webapp=1&sender_device=pc"
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "INSANUS Muscle Co.",
    followers: "0 inscritos",
    status: "Vlogs semanais detalhados",
    description: "Assista aos nossos vlogs de treinos cinematográficos em alta definição, episódios especiais de desafios entre os amigos e receitas anabólicas comentadas.",
    icon: Youtube,
    color: "#ff3333",
    neonAccent: "rgba(255, 51, 51, 0.4)",
    url: "#"
  }
];

export default function RedesSociais() {
  const [showEmBreve, setShowEmBreve] = useState(false);

  const triggerEmBreve = () => {
    setShowEmBreve(true);
    setTimeout(() => {
      setShowEmBreve(false);
    }, 2800);
  };

  return (
    <section 
      id="sociais" 
      className="relative min-h-screen w-full bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      {/* Background neon grid lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f3ff]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff3333]/15 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] mb-4">
            <Megaphone size={14} /> CLÃ COMUNIDADE • SIGA-NOS NAS PARADAS
          </div>
          <h2 className="font-oxanium text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            NOSSAS <span className="text-stroke-neon neon-glow-text">CONEXÕES</span>
          </h2>
          <div className="w-24 h-[3px] bg-[#00f3ff] mx-auto mt-4 shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 mt-6 font-sans">
            Mantenha-se atualizado diariamente. Una-se à legião INSANUS acompanhando nossas publicações virais, 
            treinos em tempo real e conteúdo explicativo nas maiores redes sociais.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {SOCIALS_DATA.map((net) => {
            const Icon = net.icon;
            const isTikTok = net.id === "tiktok";
            
            return (
              <motion.a
                key={net.id}
                href={isTikTok ? net.url : undefined}
                target={isTikTok ? "_blank" : undefined}
                rel={isTikTok ? "noreferrer" : undefined}
                onClick={!isTikTok ? (e) => { e.preventDefault(); triggerEmBreve(); } : undefined}
                whileHover={{ y: -8, boxShadow: `0px 10px 30px ${net.neonAccent}` }}
                className="metallic-border rounded-lg border-zinc-800 p-6 flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden bg-zinc-950/40"
              >
                {/* Accent glow behind active icon on hover */}
                <div 
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full filter blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" 
                  style={{ backgroundColor: net.color }}
                />

                <div>
                  {/* Card upper HUD heading */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-cyan-400/40 transition-colors">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
                      LIVE RADAR <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    </span>
                  </div>

                  <span className="text-xs font-mono font-black" style={{ color: net.color }}>
                    {net.followers.toUpperCase()}
                  </span>
                  
                  <h3 className="font-oxanium text-2xl font-extrabold text-white uppercase tracking-tight mt-1 mb-2">
                    {net.name}
                  </h3>

                  <p className="font-mono text-xs text-zinc-300 font-bold tracking-widest mb-4 bg-zinc-900/60 inline-block px-2 py-0.5 rounded border border-zinc-900">
                    {net.handle}
                  </p>

                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                    {net.description}
                  </p>
                </div>

                {/* Card lower actions */}
                <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
                  <span className="uppercase tracking-widest text-[10px] font-bold">SEGUE NO CANAL ORIGINAL</span>
                  <div className="flex items-center gap-1 text-[#00f3ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <span className="font-bold text-[10px] tracking-wider">Acessar</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>

              </motion.a>
            );
          })}
        </div>

        {/* Global Clan Status Board footer badge */}
        <div className="max-w-4xl mx-auto mt-20 p-6 metallic-border rounded-lg border-zinc-800/80 flex flex-col md:flex-row justify-between items-center gap-6 bg-zinc-950/60">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800/80">
              <Shield className="text-cyan-400 w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-oxanium text-md font-bold text-white uppercase tracking-wider">
                CANAL DE DISCUSSÃO DIRETA • PÁGINA VERIFICADA
              </h4>
              <p className="font-sans text-xs text-zinc-400 max-w-md mt-0.5">
                Todos os canais oficiais carregam o selo metálico de originalidade INSANUS ⚔️. Cuidado com falsos perfis e golpistas suplementares.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 font-mono text-[10px] bg-cyan-950/35 border border-cyan-500/20 py-2.5 px-4 rounded text-cyan-400">
            <Info size={12} /> STATUS: DE COMUNIDADE SAUDÁVEL E HARDCORE
          </div>
        </div>

      </div>

      {/* Em Breve global notification toast overlay */}
      <AnimatePresence>
        {showEmBreve && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[150] bg-cyan-950 border border-cyan-400 text-cyan-300 font-oxanium text-sm uppercase font-extrabold tracking-widest px-8 py-3.5 rounded shadow-[0_0_30px_rgba(0,243,255,0.6)] flex items-center gap-3 backdrop-blur-md"
          >
            <Trophy size={16} className="text-cyan-400 animate-bounce" /> Em breve ⚔️
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
