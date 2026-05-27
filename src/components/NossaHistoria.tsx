import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, ShieldAlert, Award, Flame, Zap, Trophy, Brain } from "lucide-react";

// Mocking data for the 5 friends to represent the team roster
const TEAM_FRIENDS = [
  {
    id: "thomas",
    name: "Thomas",
    nickname: "O Monstro",
    role: "Líder & Mentalidade",
    quote: "A mente desiste mil vezes antes que o músculo falhe. Domine a sua mente e o resto obedecerá.",
    stats: {
      benchPress: "160 kg",
      deadlift: "240 kg",
      squat: "210 kg",
    },
    bio: "Fundador do círculo INSANUS. Conhecido pelo seu foco inabalável e por empurrar todos do grupo além dos limites absolutos. Não admite treinos fofos no templo.",
    specialty: "Força Absoluta",
    color: "#00f3ff",
    icon: Flame
  },
  {
    id: "anderson",
    name: "Anderson",
    nickname: "O Ciborgue",
    role: "Estética & Precisão",
    quote: "Cada repetição é esculpida. Musculação é engenharia molecular onde o ferro é a ferramenta.",
    stats: {
      benchPress: "135 kg",
      deadlift: "190 kg",
      squat: "175 kg",
    },
    bio: "O estrategista do grupo quando o assunto é simetria e definição. Segue a planilha à risca e monitora o progresso milímetro por milímetro em busca da armadura de ferro.",
    specialty: "Condicionamento Extremo",
    color: "#0088cc",
    icon: Zap
  },
  {
    id: "carlos",
    name: "Carlos",
    nickname: "O Viking",
    role: "Força Bruta & Volume",
    quote: "Se a barra não envergar, você ainda está brincando de treinar. Sangue nas anilhas é o nosso idioma.",
    stats: {
      benchPress: "185 kg",
      deadlift: "270 kg",
      squat: "240 kg",
    },
    bio: "O motor de força do grupo. Destruidor nato de recordes de força nas três grandes cargas. Suporta cargas brutais sob os gritos de fúria e incentivo dos irmãos.",
    specialty: "Powerlifting Híbrido",
    color: "#ff3333",
    icon: ShieldAlert
  },
  {
    id: "jhemerson",
    name: "Jhemerson",
    nickname: "O Alquimista",
    role: "Nutrição & Biomecânica",
    quote: "Treinar sem se alimentar corretamente é apenas cansar o músculo. O segredo da evolução é a constância química.",
    stats: {
      benchPress: "120 kg",
      deadlift: "180 kg",
      squat: "160 kg",
    },
    bio: "O cérebro técnico por trás da nutrição, suplementação e ângulos corretos dos exercícios para hipertrofia sem lesões. Garante que todos mantenham o combustível premium em dia.",
    specialty: "Hipertrofia Sistemática",
    color: "#a855f7",
    icon: Brain
  },
  {
    id: "deyvyson",
    name: "Deyvyson",
    nickname: "O Espartano",
    role: "Volume & Resiliência",
    quote: "A dor é passageira, o shape é eterno. Se as pernas estão tremendo, comece outra série.",
    stats: {
      benchPress: "130 kg",
      deadlift: "210 kg",
      squat: "190 kg",
    },
    bio: "O guerreiro silencioso. Conhecido pelos treinos de alto volume e descansos curtíssimos. Sua resiliência cardiovascular e muscular intimida até os mais experientes.",
    specialty: "Volume Intenso",
    color: "#eab308",
    icon: Trophy
  }
];

export default function NossaHistoria() {
  const [activeFriend, setActiveFriend] = useState<string | null>(null);

  return (
    <section 
      id="historia" 
      className="relative min-h-screen w-full bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5 overflow-hidden"
    >
      {/* Background visual artifacts */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-cyan-700/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-blue-900/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] mb-4">
            <Users size={14} /> METODOLOGIA SQUAD INDESTRUTÍVEL
          </div>
          <h2 className="font-oxanium text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            NOSSA <span className="text-stroke-neon neon-glow-text">TRAJETÓRIA</span>
          </h2>
          <div className="w-24 h-[3px] bg-[#00f3ff] mx-auto mt-4 shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 mt-6 font-sans">
            A INSANUS não surgiu de modismo ou vaidade. Nasceu nas profundezas de uma academia raiz, 
            onde cinco amigos cansados da mediocridade decidiram fazer um pacto inquebrável: 
            evoluírem juntos até o topo físico e mental, segurando o peso e cobrando um ao outro diariamente sem desculpas.
          </p>
        </div>

        {/* Timeline Summary Box */}
        <div className="metallic-border border-l-4 border-l-cyan-400 p-6 md:p-8 rounded-lg mb-16 shadow-[0_4px_30px_rgba(0,0,0,0.5)] max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-lg shrink-0">
              <Award className="text-cyan-400 w-12 h-12" />
            </div>
            <div>
              <h3 className="font-oxanium text-lg font-bold text-white uppercase tracking-wider mb-2">
                O Pacto das Almas de Ferro
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Começamos dividindo lanches pós-treino, dividindo halteres amassados e empurrando uns aos outros na marreta. 
                Hoje, somos mais do que parceiros de treino: somos um clã de mentalidade inquebrável. 
                Nossa história é contada em calos, anilhas estouradas e evolução diária. A única regra permitida é: <span className="text-cyan-300 font-semibold uppercase">Supera teu ontem ou morra tentando.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Friends grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM_FRIENDS.map((friend) => {
            const Icon = friend.icon;
            const isSelected = activeFriend === friend.id;

            return (
              <motion.div
                key={friend.id}
                layout
                whileHover={{ y: -6 }}
                className={`relative flex flex-col justify-between metallic-border rounded-lg p-5 cursor-pointer overflow-hidden transition-all duration-300 ${
                  isSelected ? "border-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.2)] bg-gradient-to-b from-zinc-950 to-zinc-900" : "border-zinc-800/80 hover:border-cyan-500/50"
                }`}
                onClick={() => setActiveFriend(isSelected ? null : friend.id)}
              >
                {/* Visual accent vertical bar */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[3px]" 
                  style={{ backgroundColor: friend.color }} 
                />

                {/* Card Header & Specialty Indicator */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">MEMBRO DO CLÃ</span>
                    <Icon className="w-5 h-5" style={{ color: friend.color }} />
                  </div>

                  <h4 className="font-oxanium text-xl font-extrabold text-white leading-none mb-1">
                    {friend.name}
                  </h4>
                  <p className="font-mono text-xs font-bold tracking-wide uppercase mb-3" style={{ color: friend.color }}>
                    &quot;{friend.nickname}&quot;
                  </p>

                  <p className="font-sans text-[10px] font-semibold text-zinc-400 tracking-wider uppercase mb-4 bg-zinc-900/60 inline-block px-2 py-0.5 rounded border border-zinc-800/80">
                    {friend.role}
                  </p>

                  <p className="font-sans text-xs text-zinc-400 line-clamp-3 mb-4 italic">
                    &quot;{friend.quote}&quot;
                  </p>
                </div>

                {/* Strength Stats Highlight (Quick Look) */}
                <div className="mt-4 pt-4 border-t border-zinc-900/65">
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">CARGAS EXTREMAS</span>
                  <div className="grid grid-cols-3 gap-1 text-center">
                    <div className="bg-zinc-950/40 py-1 px-1.5 rounded border border-zinc-900">
                      <span className="text-[8px] font-mono text-zinc-500 block">SUP</span>
                      <span className="text-[10px] font-oxanium font-bold text-white">{friend.stats.benchPress}</span>
                    </div>
                    <div className="bg-zinc-950/40 py-1 px-1.5 rounded border border-zinc-900">
                      <span className="text-[8px] font-mono text-zinc-500 block">TERR</span>
                      <span className="text-[10px] font-oxanium font-bold text-white">{friend.stats.deadlift}</span>
                    </div>
                    <div className="bg-zinc-950/40 py-1 px-1.5 rounded border border-zinc-900">
                      <span className="text-[8px] font-mono text-zinc-500 block">AGA</span>
                      <span className="text-[10px] font-oxanium font-bold text-white">{friend.stats.squat}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 text-[10px] font-mono text-cyan-400 hover:text-cyan-300 uppercase tracking-widest text-center cursor-pointer transition-colors block font-bold">
                    {isSelected ? "CONCLUIR [-]" : "VER PERFIL REAL [+]"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed profile drawer animation */}
        <div className="max-w-4xl mx-auto mt-10">
          <AnimatePresence mode="wait">
            {activeFriend && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="metallic-border border border-cyan-500/45 rounded-lg p-6 md:p-8 bg-zinc-950/95 relative shadow-[0_0_30px_rgba(0,243,255,0.1)]"
              >
                {/* Decorative background visual */}
                <div className="absolute top-0 right-0 p-4 font-mono text-cyan-950 text-5xl font-extrabold select-none pointer-events-none tracking-wider">
                  INSNS
                </div>

                {TEAM_FRIENDS.filter((f) => f.id === activeFriend).map((friend) => (
                  <div key={friend.id} className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-0.5 bg-cyan-900/40 border border-cyan-500/30 text-cyan-400 text-[9px] font-mono font-bold rounded uppercase">
                          ATLETA DE ELITE DO CLÃ
                        </span>
                        <span className="text-zinc-500 text-xs font-mono">• Ativo na musculação</span>
                      </div>
                      
                      <h3 className="font-oxanium text-3xl font-black text-white mb-1 uppercase tracking-tight">
                        {friend.name}
                      </h3>
                      <p className="font-mono text-sm uppercase font-bold tracking-widest mb-4" style={{ color: friend.color }}>
                        {friend.nickname} — {friend.role}
                      </p>

                      <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                        {friend.bio}
                      </p>

                      <div className="bg-zinc-900/40 p-4 rounded-lg border border-zinc-800/80 mb-6">
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">Filosofia Ativa</span>
                        <p className="text-cyan-200 italic font-sans text-sm">&quot;{friend.quote}&quot;</p>
                      </div>

                      {/* Powerlifting heavy metrics */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 text-center">
                          <span className="text-xs text-zinc-400 block font-mono">SUPINO MÁXIMO</span>
                          <span className="text-2xl font-oxanium font-extrabold text-white" style={{ color: friend.color }}>{friend.stats.benchPress}</span>
                        </div>
                        <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 text-center">
                          <span className="text-xs text-zinc-400 block font-mono">LEVANTAMENTO DE TERRA</span>
                          <span className="text-2xl font-oxanium font-extrabold text-white" style={{ color: friend.color }}>{friend.stats.deadlift}</span>
                        </div>
                        <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 text-center">
                          <span className="text-xs text-zinc-400 block font-mono">AGACHAMENTO TRAS</span>
                          <span className="text-2xl font-oxanium font-extrabold text-white" style={{ color: friend.color }}>{friend.stats.squat}</span>
                        </div>
                      </div>
                    </div>

                    {/* Meta info box */}
                    <div className="w-full md:w-64 metallic-border border-zinc-800 rounded-lg p-5 flex flex-col justify-between shrink-0">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">FICHA TÉCNICA</span>
                        <div className="space-y-2 text-xs font-mono">
                          <div className="flex justify-between border-b border-zinc-900 pb-1">
                            <span className="text-zinc-500">ESPECIALIDADE</span>
                            <span className="text-white text-right font-medium">{friend.specialty}</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-900 pb-1">
                            <span className="text-zinc-500">DISCIPLINA INDX</span>
                            <span className="text-cyan-400">99.8%</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-900 pb-1">
                            <span className="text-zinc-500">GRUPO SANGUÍNEO</span>
                            <span className="text-white">FERRO (Fe+)</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <span className="text-[9px] font-mono tracking-widest text-[#ff3333] uppercase block mb-2">STATUS DE SEGURANÇA</span>
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900/50 p-2.5 rounded border border-zinc-900">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                          TOTALMENTE DISCIPLINADO
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
