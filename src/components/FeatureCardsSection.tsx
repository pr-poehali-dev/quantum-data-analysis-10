import { motion } from "framer-motion"
import { ChevronRight, Plus } from "lucide-react"

const featureCards = [
  {
    title: "Сделай ставку",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-8">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="text-zinc-500 text-xs uppercase tracking-wider">Ставка</div>
          <div className="text-5xl font-bold text-yellow-400">100 ₽</div>
          <div className="flex gap-2 mt-2">
            {[10, 50, 100, 500].map((v) => (
              <div key={v} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-400">{v}</div>
            ))}
          </div>
          <div className="w-full h-px bg-zinc-800 mt-2" />
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Авто-вывод при ×2.00
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Следи за ростом",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-8">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="text-zinc-500 text-xs uppercase tracking-wider">Коэффициент</div>
          <div className="text-6xl font-bold text-white tabular-nums">×3.47</div>
          <svg viewBox="0 0 200 60" className="w-full opacity-60" fill="none">
            <polyline points="0,55 30,50 60,42 90,30 120,20 150,10 180,5 200,3" stroke="#eab308" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <polygon points="0,60 0,55 30,50 60,42 90,30 120,20 150,10 180,5 200,3 200,60" fill="url(#grad)" opacity="0.3"/>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-green-400 text-sm font-medium">+247 ₽ прибыль</div>
        </div>
      </div>
    ),
  },
  {
    title: "Успей вывести",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-8">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="text-zinc-500 text-xs uppercase tracking-wider">До краша</div>
          <div className="relative w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="40" stroke="#27272a" strokeWidth="8" fill="none"/>
              <circle cx="50" cy="50" r="40" stroke="#eab308" strokeWidth="8" fill="none" strokeDasharray="180 251" strokeLinecap="round"/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">72%</div>
          </div>
          <button className="w-full py-2.5 bg-yellow-400 text-zinc-900 font-bold rounded-lg text-sm">
            💰 Забрать сейчас
          </button>
        </div>
      </div>
    ),
  },
]

export function FeatureCardsSection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-md"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              Три шага до выигрыша
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-zinc-400 leading-relaxed">
                Crash — самая простая и захватывающая игра: поставь, наблюдай за ростом коэффициента и выведи деньги
                до того, как всё обнулится.{" "}
                <a href="#" className="text-white inline-flex items-center gap-1 hover:underline">
                  Попробовать демо <ChevronRight className="w-4 h-4" />
                </a>
              </p>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group overflow-hidden relative flex flex-col justify-end"
                style={{
                  aspectRatio: "336 / 360",
                  borderRadius: "30px",
                  height: "360px",
                  isolation: "isolate",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full flex"
                  style={{
                    maskImage: "linear-gradient(#000 70%, transparent 90%)",
                    WebkitMaskImage: "linear-gradient(#000 70%, transparent 90%)",
                  }}
                >
                  {card.illustration}
                </div>
                <div
                  className="relative z-10 flex items-center justify-between w-full"
                  style={{ padding: "0 24px 40px", gap: "16px" }}
                >
                  <h3 className="text-white font-medium text-lg leading-tight">{card.title}</h3>
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-zinc-500 group-hover:text-zinc-300 transition-colors flex-shrink-0">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}