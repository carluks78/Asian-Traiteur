import { motion } from "motion/react";
import type { MenuSectionData } from "./menuData";

interface MenuSectionProps {
  section: MenuSectionData;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
}

export default function MenuSection({ section, image, imageAlt, reverse = false }: MenuSectionProps) {
  return (
    <section id={section.id} className="scroll-mt-20">
      <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 md:gap-10 lg:gap-14 items-start`}>
        <motion.div
          className="w-full lg:w-5/12 shrink-0"
          initial={{ opacity: 0, x: reverse ? 32 : -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(44,16,5,0.12)] aspect-[4/3]">
            {image
              ? <img src={image} alt={imageAlt ?? section.title} className="w-full h-full object-cover" />
              : <div className="w-full h-full bg-[#F0E8DC] flex items-center justify-center"><span className="text-5xl opacity-30">🍜</span></div>
            }
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1005]/30 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
              <span className="bg-white/90 backdrop-blur-sm text-[#8B1A1A] px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                {section.title}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 min-w-0"
          initial={{ opacity: 0, x: reverse ? -32 : 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        >
          <div className="mb-5 sm:mb-6">
            <p className="text-[#C8960C] uppercase tracking-[0.2em] text-[11px] font-semibold mb-1">À la carte</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C1005] mb-1.5">{section.title}</h2>
            {section.subtitle && <p className="text-[#9A8470] text-xs sm:text-sm">{section.subtitle}</p>}
            <div className="mt-3 h-0.5 w-12 bg-[#8B1A1A] rounded-full" />
          </div>
          <ul className="space-y-2.5 sm:space-y-3">
            {section.items.map((item, idx) => (
              <motion.li key={item.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.06 }}>
                <div className="group flex items-start gap-3 sm:gap-4 bg-white rounded-xl px-4 py-3.5 sm:py-4 border border-[#EDE6DC] hover:border-[#C8960C]/40 hover:shadow-[0_4px_20px_rgba(44,16,5,0.07)] transition-all duration-200">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8B1A1A]/30 group-hover:bg-[#8B1A1A] transition-colors shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                      <span className="text-[#2C1005] font-semibold text-sm sm:text-base leading-snug">{item.name}</span>
                      {item.badge && <span className="bg-[#8B1A1A] text-white px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase">{item.badge}</span>}
                      {item.spicy && <span className="text-[10px] text-[#C8960C] font-medium">🌶 Épicé</span>}
                    </div>
                    <p className="text-[#9A8470] text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-[#8B1A1A] font-bold text-sm sm:text-base whitespace-nowrap">{item.price}</span>
                    {item.priceNote && <p className="text-[#B8A898] text-[10px] mt-0.5 whitespace-nowrap">{item.priceNote}</p>}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
