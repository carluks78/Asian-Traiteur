import { useState, useEffect } from "react";
import { MENU_SECTIONS } from "./menuData";

export default function CategoryNav() {
  const [active, setActive] = useState<string>(MENU_SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { for (const e of entries) { if (e.isIntersecting) setActive(e.target.id); } },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    MENU_SECTIONS.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-30 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#E6DCCF] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="overflow-x-auto scrollbar-none py-2.5 sm:py-3">
          <ul className="flex gap-1 sm:gap-1.5 min-w-max">
            {MENU_SECTIONS.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => handleClick(section.id)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap border ${
                      isActive
                        ? "bg-[#8B1A1A] text-white border-[#8B1A1A] shadow-md"
                        : "bg-white text-[#7A6550] border-[#E6DCCF] hover:border-[#8B1A1A]/40 hover:text-[#8B1A1A] hover:bg-[#FDF5F0]"
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
