import { useEffect, useState } from "react";

import header01 from "../../assets/hero/hero_01.jpeg";
import header02 from "../../assets/hero/hero_02.jpeg";
import header03 from "../../assets/hero/hero_03.jpeg";
import header04 from "../../assets/hero/hero_04.jpeg";
import header06 from "../../assets/hero/hero_06.jpeg";

const heroImages = [header01, header02, header03, header04, header06];
const CAROUSEL_INTERVAL_MS = 6000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: index === activeIndex ? 1 : 0
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="mb-6 text-white">Bienvenidos a Sichuan</h1>
        <p className="max-w-2xl mx-auto mb-8 text-white">
          La auténtica fusión chino-japonesa en el corazón de Madrid
        </p>
        <button
          onClick={() => {
            const element = document.getElementById("reservas");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-[#d64933] text-white px-8 py-3 rounded-full hover:bg-[#c03d28] transition-colors"
        >
          Reservar Mesa
        </button>
      </div>
    </section>
  );
}