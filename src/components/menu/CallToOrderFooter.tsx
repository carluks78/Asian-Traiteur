import { MapPin, Phone, Clock } from "lucide-react";

const HOURS = [
  { day: "Lundi",    slots: ["Fermé"],                           closed: true  },
  { day: "Mardi",    slots: ["10:00 – 14:30", "17:00 – 21:30"], closed: false },
  { day: "Mercredi", slots: ["10:00 – 14:30", "17:00 – 21:30"], closed: false },
  { day: "Jeudi",    slots: ["10:00 – 14:30", "17:00 – 21:30"], closed: false },
  { day: "Vendredi", slots: ["10:00 – 21:30"],                   closed: false },
  { day: "Samedi",   slots: ["10:00 – 21:30"],                   closed: false },
  { day: "Dimanche", slots: ["10:00 – 14:30", "17:00 – 21:30"], closed: false },
];
const DAY_INDEX: Record<number, number> = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 0: 6 };

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

export default function CallToOrderFooter() {
  const todayIdx = DAY_INDEX[new Date().getDay()];
  return (
    <footer className="bg-[#2C1005] mt-16">
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C8960C] to-transparent" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          <div>
            <p className="text-[#C8960C] tracking-widest uppercase text-[11px] font-semibold mb-2">Traiteur Asiatique</p>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3">Asian Traiteur</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">Des saveurs d'Asie préparées avec amour, chaque jour, pour votre plaisir.</p>
            <a href="https://www.facebook.com/profile.php?id=61588891238903" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-[#1877F2] hover:bg-[#1060cc] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-md">
              <FacebookIcon /> Nous suivre sur Facebook
            </a>
          </div>
          <div>
            <p className="text-[#C8960C] tracking-widest uppercase text-[11px] font-semibold mb-4">Nous trouver</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><MapPin size={15} className="text-[#C8960C]" /></div>
                <address className="text-white/70 text-sm not-italic leading-relaxed">55 rue Edouard Isambard<br />27120 Pacy-sur-Eure</address>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><Phone size={15} className="text-[#C8960C]" /></div>
                <a href="tel:0954890997" className="text-white/70 text-sm hover:text-white transition-colors">09 54 89 09 97</a>
              </div>
              <a href="tel:0954890997" className="inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#A52020] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 shadow-lg">
                <Phone size={13} /> Commander par téléphone
              </a>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={15} className="text-[#C8960C]" />
              <p className="text-[#C8960C] tracking-widest uppercase text-[11px] font-semibold">Vente à emporter</p>
            </div>
            <ul className="space-y-1">
              {HOURS.map((row, i) => {
                const isToday = i === todayIdx;
                return (
                  <li key={row.day} className={`flex items-start justify-between gap-4 rounded-lg px-2.5 py-1.5 text-sm border ${isToday ? "bg-[#C8960C]/15 border-[#C8960C]/30" : "border-transparent"}`}>
                    <div className="flex items-center gap-2 min-w-[90px]">
                      <span className={`font-medium ${isToday ? "text-[#C8960C]" : "text-white/60"}`}>{row.day}</span>
                      {isToday && <span className="text-[9px] bg-[#C8960C] text-[#2C1005] px-1.5 py-0.5 rounded-full font-bold uppercase leading-none">auj.</span>}
                    </div>
                    <div className={`text-right ${row.closed ? "text-[#8B1A1A]" : isToday ? "text-[#C8960C]" : "text-white/40"}`}>
                      {row.slots.map((slot, si) => <div key={si} className="leading-5">{slot}</div>)}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center px-4">
        <p className="text-white/20 text-xs">© 2026 Asian Traiteur — 55 rue Edouard Isambard, 27120 Pacy-sur-Eure</p>
      </div>
    </footer>
  );
}
