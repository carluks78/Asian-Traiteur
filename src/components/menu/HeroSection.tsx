import { Phone, Star } from "lucide-react";
import { motion } from "motion/react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1775572761689-69ace23e3417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1800";

export default function HeroSection() {
  return (
    <>
      <a
        href="tel:0954890997"
        className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#6d1414] active:scale-95 text-white pl-2.5 pr-3.5 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-200"
        aria-label="Appeler Asian Traiteur"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
          <Phone size={12} />
        </span>
        <span className="hidden sm:inline tracking-wide">09 54 89 09 97</span>
        <span className="sm:hidden">Appeler</span>
      </a>

      <div className="relative overflow-hidden" style={{ height: "clamp(420px, 60vw, 600px)" }}>
        <img
          src={HERO_IMAGE}
          alt="Beau bol de ramen fumant"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: "60% center" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(28,10,3,0.97) 0%, rgba(28,10,3,0.92) 25%, rgba(28,10,3,0.72) 45%, rgba(28,10,3,0.35) 65%, rgba(28,10,3,0.08) 82%, rgba(28,10,3,0) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,10,3,0.6) 0%, transparent 35%)" }} />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8960C] via-[#D4A017] to-transparent" />

        <div className="relative h-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10 flex items-center">
          <div className="w-full max-w-[520px]">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
              <p className="text-[#C8960C] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4">
                Traiteur Asiatique • Pacy-sur-Eure
              </p>
              <h1 className="font-extrabold text-white leading-none mb-4 sm:mb-5" style={{ fontSize: "clamp(2.4rem, 7vw, 4.5rem)", textShadow: "0 2px 24px rgba(0,0,0,0.5)", letterSpacing: "-0.01em" }}>
                Asian<br />
                <span style={{ color: "#D4A017", textShadow: "0 0 40px rgba(212,160,23,0.5)" }}>Traiteur</span>
              </h1>
              <div className="flex items-center gap-1.5 mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#D4A017" stroke="none" />)}
                <span className="text-white/50 text-xs ml-2">Vente à emporter</span>
              </div>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8" style={{ maxWidth: "36ch" }}>
                Saveurs authentiques d'Asie, préparées chaque jour avec passion au cœur de Pacy-sur-Eure.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="tel:0954890997" className="inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#A52020] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 active:scale-95">
                  <Phone size={14} /> Commander
                </a>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs px-4 py-2.5 rounded-full">
                  🎁 5 bouchées achetées = 1 offerte
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30" animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-[10px] tracking-[0.2em] uppercase">Notre carte</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
