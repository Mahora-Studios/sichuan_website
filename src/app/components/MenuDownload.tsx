import { useState } from "react";

import menu00 from "../../assets/menu/menu_00.jpg";
import menu01 from "../../assets/menu/menu_01.png";
import menu02 from "../../assets/menu/menu_02.jpg";
import menu03 from "../../assets/menu/menu_03.jpg";
import menu04 from "../../assets/menu/menu_04.jpg";
import menu05 from "../../assets/menu/menu_05.jpg";
import menu06 from "../../assets/menu/menu_06.jpg";
import menu07 from "../../assets/menu/menu_07.jpg";
import menu08 from "../../assets/menu/menu_08.jpg";
import menu09 from "../../assets/menu/menu_09.jpg";
import menu10 from "../../assets/menu/menu_10.jpg";
import menu11 from "../../assets/menu/menu_11.jpg";
import menu12 from "../../assets/menu/menu_12.jpg";
import menu13 from "../../assets/menu/menu_13.jpg";
import menu14 from "../../assets/menu/menu_14.jpg";
import menu15 from "../../assets/menu/menu_15.jpg";

const menuImages = [
  menu00,
  menu01,
  menu02,
  menu03,
  menu04,
  menu05,
  menu06,
  menu07,
  menu08,
  menu09,
  menu10,
  menu11,
  menu12,
  menu13,
  menu14,
  menu15
];

export function MenuDownload() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="menu" className="py-24 bg-gradient-to-br from-[#f7f1e3] via-[#f1e5d3] to-[#ead9c1]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-4 text-[#3d2b1f]">Nuestro Menu</h2>
          <p className="text-[#5b4634] mb-12 max-w-2xl mx-auto">
            Explora cada pagina y haz clic para verla en grande.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(image)}
                className="group relative overflow-hidden rounded-2xl shadow-xl border border-white/50 bg-white/60 backdrop-blur transition-transform duration-300 hover:-translate-y-2"
                aria-label={`Abrir pagina ${index + 1} del menu`}
              >
                <img
                  src={image}
                  alt={`Pagina ${index + 1} del menu`}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 text-white text-sm tracking-wide"
              aria-label="Cerrar vista ampliada"
            >
              Cerrar
            </button>
            <img
              src={activeImage}
              alt="Menu ampliado"
              className="w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}