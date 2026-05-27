import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Swords, LogOut, Menu, X, Landmark, Compass, Target, ShoppingBag, Volume2, ShieldCheck, Heart, Sparkles } from "lucide-react";

// Import custom sub-modules
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero";
import NossaHistoria from "./components/NossaHistoria";
import GaleriaTreinos from "./components/GaleriaTreinos";
import FuturosProdutos from "./components/FuturosProdutos";
import RedesSociais from "./components/RedesSociais";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");

  // Dynamic viewport tracking to highlight the active menu item dynamically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ["hero", "historia", "galeria", "produtos", "sociais"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion scroll progress indicator on top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden antialiased">
      
      {/* Absolute Dynamic Background Particles Particle Overlay */}
      <ParticlesBackground />

      {/* Extreme Neon Glow Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#00f3ff] origin-left z-[100] shadow-[0_0_12px_rgba(0,243,255,0.8)]"
        style={{ scaleX }}
      />

      {/* Cyberpunk Top Header Nav Area - Frosted Glass styling */}
      <header className="fixed top-0 left-0 w-full glass-header z-45 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Name */}
          <div 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >
            <span className="p-1.5 bg-zinc-950 border border-zinc-800 rounded group-hover:border-cyan-400 transition-colors">
              <Swords size={18} className="text-[#00f3ff] group-hover:scale-110 transition-transform duration-300" />
            </span>
            <span className="font-oxanium text-2xl font-black tracking-widest text-[#00f3ff] group-hover:neon-glow-text transition-all duration-300">
              INSANUS
            </span>
            <span className="text-[10px] text-zinc-500 font-bold self-end border border-zinc-900 px-1 py-0.2 rounded hidden sm:inline">V2.6</span>
          </div>

          {/* Desktop Navigation Link Items */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("hero")}
              className={`px-4 py-2 font-oxanium text-xs uppercase tracking-widest cursor-pointer transition-colors ${
                activeTab === "hero" ? "text-[#00f3ff] font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className={`px-4 py-2 font-oxanium text-xs uppercase tracking-widest cursor-pointer transition-colors ${
                activeTab === "historia" ? "text-[#00f3ff] font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              TRAJETÓRIA
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className={`px-4 py-2 font-oxanium text-xs uppercase tracking-widest cursor-pointer transition-colors ${
                activeTab === "galeria" ? "text-[#00f3ff] font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              TREINOS G-TOK
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className={`px-4 py-2 font-oxanium text-xs uppercase tracking-widest cursor-pointer transition-colors ${
                activeTab === "produtos" ? "text-[#00f3ff] font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              FUTURE DROP
            </button>
            <button
              onClick={() => scrollToSection("sociais")}
              className={`px-4 py-2 font-oxanium text-xs uppercase tracking-widest cursor-pointer transition-colors ${
                activeTab === "sociais" ? "text-[#00f3ff] font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              COMUNIDADE
            </button>
          </nav>

          {/* Slogan Indicator / CTAs on top */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection("produtos")}
              className="px-4 py-2 bg-gradient-to-r from-zinc-950 to-zinc-900 border border-[#00f3ff]/40 rounded text-[11px] font-oxanium uppercase font-extrabold tracking-widest text-[#00f3ff] hover:bg-[#00f3ff] hover:text-zinc-950 hover:border-[#00f3ff] cursor-pointer transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.15)]"
            >
              DROP LIST
            </button>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-zinc-900 rounded bg-zinc-950/80 text-zinc-400 hover:text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Interactive Mobile Menu Sidebar Navigation Drawer */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-zinc-950 border-l border-zinc-900 shadow-[2xl] z-49 p-6 transition-transform duration-300 transform ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col gap-6 pt-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-left font-oxanium text-sm uppercase tracking-widest font-black text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("historia")}
            className="text-left font-oxanium text-sm uppercase tracking-widest font-black text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            TRAJETÓRIA
          </button>
          <button
            onClick={() => scrollToSection("galeria")}
            className="text-left font-oxanium text-sm uppercase tracking-widest font-black text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            TREINOS G-TOK
          </button>
          <button
            onClick={() => scrollToSection("produtos")}
            className="text-left font-oxanium text-sm uppercase tracking-widest font-black text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            FUTURE DROP
          </button>
          <button
            onClick={() => scrollToSection("sociais")}
            className="text-left font-oxanium text-sm uppercase tracking-widest font-black text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            COMUNIDADE
          </button>

          <div className="w-full h-px bg-zinc-900 my-4" />
          
          <button
            onClick={() => scrollToSection("produtos")}
            className="w-full py-3 bg-[#00f3ff] text-zinc-950 font-oxanium text-xs uppercase font-extrabold tracking-widest text-center rounded shadow-[0_0_10px_rgba(0,243,255,0.4)]"
          >
            DROP EXCLUSIVO EM BREVE
          </button>
        </div>
      </div>

      {/* CORE HERO WRAP MOUNT */}
      <main className="relative z-10 pt-20">
        
        {/* Sections mount */}
        <Hero onExploreClick={() => scrollToSection("historia")} />
        
        <NossaHistoria />
        
        <GaleriaTreinos />
        
        <FuturosProdutos />
        
        <RedesSociais />

      </main>

      {/* Ultra Heavy Cinematic Footer Area */}
      <footer className="relative bg-[#020204] border-t border-zinc-900/90 py-16 px-4 sm:px-6 lg:px-8 z-20 text-zinc-500 text-xs text-center select-none overflow-hidden">
        
        {/* Background dark overlay effects */}
        <div className="absolute inset-0 bg-radial-gradient(circle at 50% 100%, rgba(0,243,255,0.03) 0%, transparent 70%) pointer-events-none" />

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Logo Brand Emblem repeat */}
          <div className="flex items-center gap-2 mb-6">
            <Swords className="text-cyan-400 w-5 h-5" />
            <span className="font-oxanium text-lg font-black tracking-[0.25em] text-white">
              INSANUS ⚔️
            </span>
          </div>

          {/* Slogan phrase repeat */}
          <p className="max-w-md mx-auto font-sans text-xs text-zinc-400 tracking-[0.1em] font-medium leading-relaxed uppercase mb-8">
            &ldquo;Cinco amigos. Uma mentalidade. Sem limites.&rdquo; <br />
            <span className="text-[#00f3ff] text-[10px] font-bold tracking-widest">UNIDOS PELO FERRO E PELA BRUTalidade</span>
          </p>

          {/* Lineup Credits */}
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center font-mono text-[9.5px] tracking-wider text-zinc-500 mb-10">
            <span>MEMBRO 01: THOMAS [O MONSTRO]</span>
            <span className="text-zinc-800">•</span>
            <span>MEMBRO 02: ANDERSON [O CIBORGUE]</span>
            <span className="text-zinc-800">•</span>
            <span>MEMBRO 03: CARLOS [O VIKING]</span>
            <span className="text-zinc-800">•</span>
            <span>MEMBRO 04: JHEMERSON [O ALQUIMISTA]</span>
            <span className="text-zinc-800">•</span>
            <span>MEMBRO 05: DEYVYSON [O ESPARTANO]</span>
          </div>

          <div className="w-20 h-[1px] bg-zinc-900 mb-8" />

          {/* Copyrights constraints and warning labels */}
          <div className="space-y-1 font-sans text-[10px] text-zinc-600">
            <p className="font-medium flex items-center justify-center gap-1.5 uppercase text-zinc-500">
              <ShieldCheck size={11} className="text-cyan-600" /> Site Oficial INSANUS ⚔️ — Todos os direitos guardados à irmandade. © 2026.
            </p>
            <p className="uppercase tracking-widest">
              Desenvolvido em busca do SHAPE INEXPLICÁVEL • SEM DESCULPAS
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
