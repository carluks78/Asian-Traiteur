import HeroSection from "./components/menu/HeroSection";
import CategoryNav from "./components/menu/CategoryNav";
import MenuSection from "./components/menu/MenuSection";
import CallToOrderFooter from "./components/menu/CallToOrderFooter";
import { MENU_SECTIONS } from "./components/menu/menuData";

const SECTION_IMAGES: Record<string, string> = {
  nems:            "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/aed0ce7e9_generated_3cf6002f.png",
  vapeurs:         "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/191198e86_generated_3545eb79.png",
  fritures:        "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/082bd348d_generated_ad0e7d15.png",
  "plats-poulet":  "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/fd072bfb4_generated_362cd436.png",
  "plats-boeuf":   "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/5ad625e89_generated_74d4a5b6.png",
  "plats-porc":    "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/8f9931047_generated_adccae27.png",
  "fruits-de-mer": "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/cd525d5ed_generated_dc96fad2.png",
  accompagnements: "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/f9bfb193e_generated_19f83a35.png",
  "sushi-maki":    "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/e07febe09_generated_13d700f3.png",
  rouleaux:        "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/179466d7e_generated_578227aa.png",
  desserts:        "https://media.base44.com/images/public/6a2c6a61c3b251082bef02bf/85532006e_generated_c2af24a1.png",
};

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F0" }}>
      <HeroSection />
      <CategoryNav />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="py-8 sm:py-12 text-center">
          <p className="text-[#9A8470] text-xs sm:text-sm tracking-[0.2em] uppercase">
            Vente à emporter — Pacy-sur-Eure
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="h-px w-16 sm:w-24 bg-[#E6DCCF]" />
            <span className="text-[#C8960C] text-base">✦</span>
            <div className="h-px w-16 sm:w-24 bg-[#E6DCCF]" />
          </div>
        </div>
        <div className="space-y-16 sm:space-y-20 md:space-y-28 pb-16 sm:pb-20 md:pb-28">
          {MENU_SECTIONS.map((section, i) => (
            <MenuSection
              key={section.id}
              section={section}
              image={SECTION_IMAGES[section.id]}
              imageAlt={`Photo de ${section.title}`}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </main>
      <CallToOrderFooter />
    </div>
  );
}
