import { motion } from "motion/react";
import { Swords, ChevronDown } from "lucide-react";

// Reference paths to the generated images
const LOGO_IMG_PATH = "https://i.postimg.cc/VvgZzV7d/Chat-GPT-Image-27-de-mai-de-2026-18-46-56.png";
const BG_IMG_PATH = "/src/assets/images/cyberpunk_gym_1779915328481.png";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 select-none"
    >
      {/* Heavy Heavy Background Image Wrap with Cyberpunk Darkness, Smoke, and Custom Vignettes */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-2] scale-105 filter brightness-45 contrast-125 saturate-75 transform transition-all duration-1000"
        style={{ backgroundImage: `url(${BG_IMG_PATH})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent z-[-1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-[-1]" />
      <div className="absolute inset-0 smoky-overlay z-[-1]" />

      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30 z-[-1] pointer-events-none" />

      {/* Futuristic Scanline Effect */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-400/25 opacity-20 pointer-events-none animate-scanline z-0" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 pt-16">
        
        {/* Animated Brand Halo Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-2 relative flex items-center gap-2 px-3 py-1 bg-zinc-900/85 border border-cyan-500/30 rounded-full shadow-[0_0_15px_rgba(0,243,255,0.15)] backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] tracking-[0.25em] font-mono text-cyan-300 font-semibold uppercase flex items-center gap-1.5">
            <Swords size={11} className="text-cyan-400" /> GRUPO ELITE • INSANUS
          </span>
        </motion.div>

        {/* Pulsing Cinematic Titan Shield Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="relative w-80 h-80 md:w-[440px] md:h-[440px] flex items-center justify-center cursor-pointer group"
        >
          {/* Animated smoke drifting effect behind the logo */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#050505] via-cyan-950/20 to-transparent filter blur-3xl opacity-60 animate-smoke-pack pointer-events-none z-0" />

          {/* Glowing neon ring simulating a circular electric border with intensity */}
          <div className="absolute inset-8 rounded-full border-2 border-cyan-500/25 animate-pulse shadow-[0_0_40px_rgba(0,243,255,0.3)] pointer-events-none z-0" />
          <div className="absolute inset-2 rounded-full border border-dashed border-cyan-400/10 animate-[spin_60s_linear_infinite] pointer-events-none z-0" />

          {/* Animated Neon Lightning bolts/sparks surrounding the logo image */}
          {/* Top-Right Spark */}
          <svg className="absolute -top-10 -right-10 w-24 h-24 text-cyan-400 opacity-0 pointer-events-none z-20 animate-lightning-bolt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          {/* Bottom-Left Spark */}
          <svg className="absolute -bottom-10 -left-10 w-24 h-24 text-cyan-300 opacity-0 pointer-events-none z-20 animate-lightning-bolt-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>

          {/* Outer Ring Ambient Pulses */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/15 filter blur-3xl group-hover:bg-cyan-500/25 transition-all duration-700 animate-pulse-glow" />
          
          <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-full">
            {/* Reflective metallic shine overlay traveling across the logo */}
            <div className="metallic-shine-overlay" />
            
            <motion.img
              src={LOGO_IMG_PATH}
              alt="INSANUS Logo"
              referrerPolicy="no-referrer"
              className="w-[90%] h-[90%] object-contain filter drop-shadow-[0_0_35px_rgba(0,243,255,0.6)] group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 animate-electric-pulse"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </div>
        </motion.div>

        {/* Aggressive Typographic Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 space-y-4"
        >
          <h1 className="font-oxanium font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tighter text-white uppercase leading-none">
            CINCO AMIGOS.<br />
            <span className="text-stroke-neon font-black tracking-widest neon-glow-text uppercase">
              UMA MENTALIDADE.
            </span><br />
            <span className="text-[#00f3ff] font-extrabold leading-tight">SEM LIMITES.</span>
          </h1>

          <p className="max-w-lg mx-auto font-sans text-xs sm:text-sm text-zinc-400 tracking-widest uppercase font-semibold">
            ESTABILIZADOS NA DOR. UNIDOS PELA DISCIPLINA. <br className="hidden sm:inline" />
            A FORÇA COMUM EM BUSCA DO SHAPE INSANO.
          </p>
        </motion.div>

        {/* Core CTA Pulsing Neon Glowing Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10"
        >
          <button 
            id="btn-explore"
            onClick={onExploreClick}
            className="relative px-8 py-4 bg-zinc-950 border-2 border-[#00f3ff] rounded-md font-oxanium text-sm uppercase tracking-[0.2em] font-extrabold text-white cursor-pointer overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_35px_rgba(0,243,255,0.7)] group hover:text-zinc-950"
          >
            {/* Sliding neon wave background on hover */}
            <span className="absolute inset-0 w-0 bg-[#00f3ff] transition-all duration-300 ease-out group-hover:w-full z-0" />
            <span className="relative z-10 flex items-center justify-center gap-3">
              CONHEÇA A INSANUS <Swords size={16} />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Floating Arrow */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 text-cyan-400/60 z-10 cursor-pointer hidden md:flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors"
        onClick={onExploreClick}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] font-semibold">ROLE PARA O FRONT</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
