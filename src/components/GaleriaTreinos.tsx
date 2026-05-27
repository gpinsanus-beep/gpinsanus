import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Heart, MessageCircle, Share2, Volume2, VolumeX, Send, Music, Target, Trophy, Flame } from "lucide-react";

// Mock GymTok videos data
const GYMTOK_POSTS = [
  {
    id: "v1",
    author: "@thomas_monstro",
    caption: "🔥 METENDO MARRETA no agachamento pesado! Carga final: 210KG para 6 repetições limpas. Sem choro, sem desculpas. A dor que você sente hoje se tornará sua armadura amanhã! #insanus #shape #legday #heavyweight #maromba",
    likes: 12540,
    comments: [
      { id: "c1", user: "@igor_fitness", text: "Trincou o chão do templo! Brutal demais!" },
      { id: "c2", user: "@maromba_raiz", text: "Isso que é treino de verdade! Só aço puro." },
      { id: "c3", user: "@anabol_expert", text: "Carga com execução absurda. Parabéns." }
    ],
    shares: 421,
    audioName: "INSANUS Brutal Phonk - Volume 1",
    accentColor: "#00f3ff",
    themeIndicator: "Foco & Intensidade"
  },
  {
    id: "v2",
    author: "@anderson_ciborgue",
    caption: "⚡ Simetria molecular e contração impecável no treino de peitorais superiores. 135KG controlando a excêntrica. Musculação é engrenagem biológica! #insanus #bodybuilding #chestday #fitness #cyberpunk",
    likes: 8940,
    comments: [
      { id: "c4", user: "@jhemerson_alquimista", text: "Fibração muscular impecável. O planejamento funciona." },
      { id: "c5", user: "@estetica_anibal", text: "Simetria de ciborgue mesmo, absurdo esse shape!" }
    ],
    shares: 289,
    audioName: "Cyberpunk Gym Rage - Electro Mix",
    accentColor: "#0088cc",
    themeIndicator: "Precisão Genética"
  },
  {
    id: "v3",
    author: "@carlos_viking",
    caption: "⚔️ Levantamento Terra de 270KG! A barra envergou, mas a alma não! Quando o clã grita, o peso se torna leve. Isso é irmandade INSANUS! #deadlift #viking #forçabruta #oldschool #barbell",
    likes: 18450,
    comments: [
      { id: "c6", user: "@deyvyson_espartano", text: "A barra quase quebra ao meio! Loucura total." },
      { id: "c7", user: "@gym_titan", text: "O homem moveu montanhas hoje!" }
    ],
    shares: 1102,
    audioName: "Hardcore Nordic Metal Beats",
    accentColor: "#ff3333",
    themeIndicator: "Força Sangrenta"
  }
];

export default function GaleriaTreinos() {
  const [posts, setPosts] = useState(GYMTOK_POSTS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [showShareNotification, setShowShareNotification] = useState(false);

  const currentPost = posts[activeIndex];

  // Dynamic comment submission inside local state
  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const updatedPosts = posts.map((post, idx) => {
      if (idx === activeIndex) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: `custom_${Date.now()}`,
              user: "@visitante_insano",
              text: commentInput.trim(),
            },
          ],
        };
      }
      return post;
    });

    setPosts(updatedPosts);
    setCommentInput("");
  };

  const handleToggleLike = (id: string) => {
    const isAlreadyLiked = likedPosts[id];
    setLikedPosts({
      ...likedPosts,
      [id]: !isAlreadyLiked,
    });

    const updatedPosts = posts.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          likes: isAlreadyLiked ? p.likes - 1 : p.likes + 1,
        };
      }
      return p;
    });
    setPosts(updatedPosts);
  };

  const handleShareClick = () => {
    setShowShareNotification(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setShowShareNotification(false);
    }, 2500);
  };

  return (
    <section 
      id="galeria" 
      className="relative min-h-screen w-full bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden"
    >
      {/* Background cyberpunk matrix decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] mb-4">
            <Target size={14} /> GYMTOK DE ELITE • FEED OFICIAL
          </div>
          <h2 className="font-oxanium text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            INSANUS <span className="text-stroke-neon neon-glow-text">TREINOS</span>
          </h2>
          <div className="w-24 h-[3px] bg-[#00f3ff] mx-auto mt-4 shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 mt-6 font-sans">
            Assista aos registros brutais do nosso dia a dia no templo de ferro. Vídeos de alta intensidade, 
            estética pesada e fúria sonora. Veja no smartphone interativo abaixo ou selecione um clã-post.
          </p>
        </div>

        {/* Swipe or Navigation Grid */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {posts.map((post, index) => (
            <button
              key={post.id}
              onClick={() => {
                setActiveIndex(index);
                setIsPlaying(true);
              }}
              className={`px-4 py-2 border rounded font-oxanium text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "bg-[#00f3ff] border-[#00f3ff] text-zinc-950 font-bold shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                  : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              POST DE {post.author.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Smartphone Simulator & Side Comments Workspace */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Column 1: The Interactive Smartphone Screen Area */}
          <div className="lg:col-span-5 flex justify-center">
            
            {/* Phone physical boundaries */}
            <div className="w-[310px] h-[580px] bg-zinc-950 rounded-[40px] p-2.5 border-[5px] border-zinc-800 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(0,243,255,0.15)] ring-1 ring-cyan-500/25">
              
              {/* Phone Camera Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-zinc-800 rounded-b-2xl z-40 flex justify-center items-center">
                <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full border border-zinc-800" />
              </div>

              {/* Simulated video playback viewport container */}
              <div className="absolute inset-0 z-10 overflow-hidden bg-zinc-950">
                
                {/* Visual looping atmospheric canvas (We draw highly animated hardcore cyberpunk elements simulating video) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none px-4">
                  
                  {/* Rotating Gym Weight / Abstract Halo inside the phone */}
                  <motion.div 
                    animate={isPlaying ? { rotate: 360 } : {}}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border-[6px] border-dashed rounded-full flex items-center justify-center opacity-15"
                    style={{ borderColor: currentPost.accentColor }}
                  >
                    <div className="w-32 h-32 rounded-full border border-double flex items-center justify-center" style={{ borderColor: currentPost.accentColor }}>
                      <Flame size={40} className="text-zinc-600 animate-pulse" />
                    </div>
                  </motion.div>

                  {/* Scrolling workout metrics on video screen */}
                  <div className="absolute inset-x-0 top-1/3 flex flex-col items-center justify-center text-center">
                    <motion.span 
                      animate={isPlaying ? { scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="font-oxanium text-3xl font-black text-white tracking-widest uppercase italic bg-zinc-950/80 px-4 py-1.5 border border-zinc-800/80 rounded"
                    >
                      {currentPost.themeIndicator}
                    </motion.span>
                    <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-[0.25em] mt-3">
                      CLÃ MUTANTES DE ELITE
                    </span>
                  </div>

                  {/* Video Smoke effect loop */}
                  <div className="absolute bottom-16 inset-x-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                </div>

                {/* Ambient glow according to current author */}
                <div 
                  className="absolute inset-0 bg-radial-gradient(circle, transparent 40%, rgba(3,3,5,0.95)) pointer-events-none z-10"
                />

                {/* Animated progress bar at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-zinc-900 z-30">
                  <motion.div 
                    className="h-full bg-cyan-400 shadow-[0_0_10px_#00f3ff]"
                    animate={{ width: isPlaying ? ["0%", "100%"] : "45%" }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Overly interactive TikTok hud */}
                <div className="absolute inset-x-0 bottom-4 px-3 text-white z-20 flex justify-between items-end">
                  
                  {/* Left Side: Author name, Caption and Sound */}
                  <div className="max-w-[190px] text-left">
                    <p className="font-sans text-xs font-black tracking-wide flex items-center gap-1.5">
                      {currentPost.author} 
                      <span className="px-1 py-0.5 bg-cyan-500 text-[8px] font-mono font-bold leading-none rounded">SEGUIDO</span>
                    </p>
                    <p className="font-sans text-[10px] text-zinc-300 line-clamp-3 mt-1.5 leading-snug">
                      {currentPost.caption}
                    </p>
                    
                    {/* Scrolling sound name */}
                    <div className="flex items-center gap-1.5 mt-3 text-[9px] text-zinc-400 font-mono overflow-hidden">
                      <Music size={10} className="text-cyan-400 shrink-0" />
                      <span className="animate-pulse truncate">{currentPost.audioName}</span>
                    </div>
                  </div>

                  {/* Right Side: Action Columns */}
                  <div className="flex flex-col gap-4 items-center shrink-0">
                    
                    {/* Sound Mute Toggle */}
                    <button 
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-9 h-9 rounded-full bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-center text-white cursor-pointer hover:bg-zinc-800 transition-colors"
                    >
                      {isMuted ? <VolumeX size={14} className="text-[#ff3333]" /> : <Volume2 size={14} className="text-cyan-400 animate-pulse" />}
                    </button>

                    {/* Heart button */}
                    <button 
                      onClick={() => handleToggleLike(currentPost.id)}
                      className="flex flex-col items-center cursor-pointer group"
                    >
                      <div className={`w-9 h-9 rounded-full bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-center transition-all ${
                        likedPosts[currentPost.id] ? "bg-[#ff3333]/20 border-[#ff3333]" : "group-hover:bg-[#ff3333]/10"
                      }`}>
                        <Heart 
                          size={15} 
                          className={likedPosts[currentPost.id] ? "text-[#ff3333] fill-[#ff3333]" : "text-white"} 
                        />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-300 mt-1">{currentPost.likes}</span>
                    </button>

                    {/* Shares button */}
                    <button 
                      onClick={handleShareClick}
                      className="flex flex-col items-center cursor-pointer group"
                    >
                      <div className="w-9 h-9 rounded-full bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
                        <Share2 size={14} className="text-white" />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-300 mt-1">{currentPost.shares}</span>
                    </button>

                  </div>

                </div>

                {/* Central Play/Pause Tap target overlaid */}
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer z-15"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <AnimatePresence>
                    {!isPlaying && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="p-5 rounded-full bg-black/60 border border-cyan-400 backdrop-blur-sm shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                      >
                        <Play size={24} className="text-[#00f3ff] fill-[#00f3ff]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </div>

          </div>

          {/* Column 2: The Side Custom Interactive Comments & Reaction Hub */}
          <div className="lg:col-span-7">
            <div className="metallic-border rounded-lg p-6 border-zinc-800 flex flex-col h-[520px] justify-between relative shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
              
              {/* Header reaction box */}
              <div>
                <span className="text-[9px] font-mono text-cyan-400 tracking-[0.2em] uppercase block mb-1">Console de Interação</span>
                <h3 className="font-oxanium text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <MessageCircle size={18} className="text-cyan-400" /> REAÇÕES DO CLÃ ({currentPost.comments.length})
                </h3>
                <div className="w-full h-px bg-zinc-900 mb-4" />
              </div>

              {/* Animated Comments Feed */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-6 transition-all duration-300">
                {currentPost.comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-3 bg-zinc-950/60 border border-zinc-900 rounded-lg flex flex-col"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-[11px] font-bold text-cyan-400">{comment.user}</span>
                      <span className="text-[9px] font-mono text-zinc-600 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">MEMBRO DO CLÃ</span>
                    </div>
                    <p className="font-sans text-xs text-zinc-300 leading-snug">{comment.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Submit visitor comment */}
              <form onSubmit={handleAddComment} className="mt-auto border-t border-zinc-900 pt-4">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">Comente no GymTok da INSANUS</span>
                <div className="relative">
                  <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Envie sua motivação ou elogio (ex: 'Shape inexplicável!'...)"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md py-3 pl-4 pr-12 text-xs text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,243,255,0.15)] font-sans"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1.5 h-8 w-8 bg-[#00f3ff] rounded flex items-center justify-center text-zinc-950 font-bold hover:bg-white hover:scale-105 transition-all cursor-pointer"
                  >
                    <Send size={12} />
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

        {/* Floating Share Copied Notification pop-up overlay */}
        <AnimatePresence>
          {showShareNotification && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-[#00f3ff] text-zinc-950 font-oxanium text-xs uppercase font-extrabold tracking-widest px-6 py-3 rounded-full shadow-[0_0_20px_rgba(0,243,255,0.6)] flex items-center gap-2"
            >
              <Trophy size={14} /> LINK COPIADO! COMPARTILHE A DEMÔNIA DA INSANIDADE!
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
