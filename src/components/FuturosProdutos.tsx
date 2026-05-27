import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Bell, Eye, Flame, Check, Sparkles, Box, Trophy } from "lucide-react";

// References to the generated product assets
const TSHIRT_IMG = "/src/assets/images/oversized_tshirt_1779915349938.png";
const SHAKER_IMG = "/src/assets/images/gym_accessories_1779915368493.png";

// Hardcore Future Products dataset
const FUTURE_PRODUCTS = [
  {
    id: "p1",
    name: "Camiseta Oversized INSANUS • V1 'Cyber Spartan'",
    price: "R$ 139,90",
    category: "VESTUÁRIO HARDCORE",
    desc: "Algodão 100% premium pesado de 260g/m² com toque escovado. Corte ultra oversized, estampa com o escudo Spartan texturizado e costuras reforçadas em aço.",
    status: "PRÉ-VENDA",
    image: TSHIRT_IMG,
    badge: "DROP LIMITADO",
    accent: "#00f3ff"
  },
  {
    id: "p2",
    name: "Coqueteleira Blindada Matte & Wrist Straps Coleção 'Iron Clã'",
    price: "R$ 99,90",
    category: "ACESSÓRIOS TÁTICOS",
    desc: "Coqueteleira militar em aço escovado revestido de preto fosco com bico antivazamento e travas magnéticas, acompanhada de straps de alta contenção para terra pesado.",
    status: "PRÉ-VENDA",
    image: SHAKER_IMG,
    badge: "MAIS ENCOMENDADO",
    accent: "#0088cc"
  }
];

export default function FuturosProdutos() {
  const [showEmBreve, setShowEmBreve] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof FUTURE_PRODUCTS[0] | null>(null);

  const triggerEmBreve = (e?: FormEvent) => {
    if (e) e.preventDefault();
    setShowEmBreve(true);
    setTimeout(() => {
      setShowEmBreve(false);
    }, 2800);
  };

  return (
    <section 
      id="produtos" 
      className="relative min-h-screen w-full bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] mb-4">
            <ShoppingBag size={14} /> ARSENAL EXCLUSIVO • FUTUROS LANÇAMENTOS
          </div>
          <h2 className="font-oxanium text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            PRODUTOS <span className="text-stroke-neon neon-glow-text">INSANUS</span>
          </h2>
          <div className="w-24 h-[3px] bg-[#00f3ff] mx-auto mt-4 shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 mt-6 font-sans">
            Prepare-se para o primeiro drop da nossa coleção premium de vestuário e acessórios hardcore fitness. 
            Desenvolvido por nós para resistir a treinos de extrema brutalidade no ferro. Inscreva-se para obter exclusividade de lote.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
          {FUTURE_PRODUCTS.map((prod) => (
            <motion.div
              key={prod.id}
              whileHover={{ y: -8 }}
              className="relative flex flex-col justify-between metallic-border rounded-lg border-zinc-800/80 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.7)] group overflow-hidden"
            >
              {/* Product Status Badge */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 items-start">
                <span className="px-3 py-1 bg-zinc-950/90 border border-semibold text-white border-cyan-400/50 rounded text-[10px] font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(0,243,255,0.15)]">
                  {prod.status}
                </span>
                <span className="px-2.5 py-0.5 bg-[#ff3333]/15 text-[#ff3333] border border-[#ff3333]/30 rounded text-[9px] font-mono font-black tracking-wider uppercase">
                  {prod.badge}
                </span>
              </div>

              {/* Product preview and image hover zoom */}
              <div className="relative w-full h-[280px] rounded-md overflow-hidden bg-zinc-950/40 border border-zinc-900 flex items-center justify-center mb-6">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none filter brightness-95"
                />
                
                {/* Floating look trigger */}
                <button 
                  onClick={() => setSelectedProduct(prod)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-zinc-950/90 border border-zinc-800 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 cursor-pointer hover:bg-[#00f3ff] hover:text-zinc-950"
                >
                  <Eye size={15} />
                </button>
              </div>

              {/* Meta metrics and details card info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500">{prod.category}</span>
                    <span className="text-cyan-400 font-oxanium text-sm font-extrabold tracking-wider">{prod.price}</span>
                  </div>

                  <h3 className="font-oxanium text-xl font-bold text-white uppercase tracking-tight leading-tight mb-2 group-hover:text-[#00f3ff] transition-colors">
                    {prod.name}
                  </h3>

                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>

                {/* Notify early priority button */}
                <button
                  onClick={() => triggerEmBreve()}
                  className="w-full py-3.5 border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 rounded bg-zinc-950/50 hover:bg-zinc-900/30 text-white font-oxanium text-[11px] tracking-[0.2em] font-extrabold cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <Bell size={13} className="text-cyan-400 animate-pulse" /> NOTIFIQUE-ME DO DROP PRIORITÁRIO
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global interactive priority slot registration form */}
        <div className="max-w-3xl mx-auto mt-20 p-8 metallic-border rounded-lg border-zinc-800 text-center relative overflow-hidden bg-zinc-950/70">
          <div className="absolute top-0 right-0 p-2 font-mono text-[9px] text-zinc-700">ARM-09X</div>
          
          <Sparkles className="text-cyan-400 w-8 h-8 mx-auto mb-4 animate-bounce" />
          <h3 className="font-oxanium text-lg md:text-2xl font-black text-white uppercase tracking-wider mb-2">
            QUER FAZER PARTE DO SUPREMO DROP DE ELITE?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto mb-6">
            O lote inicial exclusivo INSANUS será extremamente escasso (apenas 50 unidades de cada peça). 
            Deixe seu contato para acessar a reserva antecipada 24h antes do público externo.
          </p>

          <form onSubmit={triggerEmBreve} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="Digite seu e-mail de acesso"
              className="flex-1 bg-zinc-950/90 border border-zinc-800 rounded-md py-3 px-4 text-xs text-white focus:outline-none focus:border-cyan-400 placeholder-zinc-600 font-mono"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#00f3ff] text-zinc-950 font-oxanium text-xs uppercase font-extrabold tracking-widest rounded-md hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] cursor-pointer transition-all"
            >
              GARANTIR REQUISITO
            </button>
          </form>
        </div>

        {/* Interstitial Modal overlays */}
        <AnimatePresence>
          {/* Product Zoom Modal Overview */}
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-2xl metallic-border rounded-lg border-zinc-700/80 p-6 md:p-8 bg-zinc-950 relative"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-zinc-500 tracking-wider">VISUALIZADOR DE PRODUTO V1.0</span>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="text-zinc-400 hover:text-white font-mono text-xs cursor-pointer"
                  >
                    SAIR DA VISUALIZAÇÃO [X]
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="w-full h-[280px] bg-zinc-900/40 rounded border border-zinc-800/80 overflow-hidden">
                    <img 
                      src={selectedProduct.image} 
                      alt="" 
                      className="w-full h-full object-cover filter brightness-95" 
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#00f3ff] uppercase mb-1 block">
                      {selectedProduct.category}
                    </span>
                    <h3 className="font-oxanium text-2xl font-black text-white uppercase leading-none mb-2">
                      {selectedProduct.name}
                    </h3>
                    
                    <p className="font-oxanium text-cyan-400 text-lg font-bold mb-4">
                      {selectedProduct.price}
                    </p>

                    <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                      {selectedProduct.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-[9.5px] font-mono text-zinc-500 tracking-wider uppercase block">Especificações de Linha</span>
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-400">
                        <div className="bg-zinc-900/60 p-2 rounded border border-zinc-900">
                          PROJETO: <span className="text-white">HARDCORE</span>
                        </div>
                        <div className="bg-zinc-900/60 p-2 rounded border border-zinc-900">
                          MATÉRIA: <span className="text-white">ULTRA-RESISTENTE</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        setSelectedProduct(null);
                        triggerEmBreve(e);
                      }}
                      className="w-full py-3 bg-[#00f3ff] text-zinc-950 font-oxanium text-xs uppercase font-extrabold tracking-widest rounded hover:bg-white cursor-pointer transition-all"
                    >
                      SOLICITAR ACESSO ANTECIPADO
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Epic custom toast for Em breve */}
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

      </div>
    </section>
  );
}
