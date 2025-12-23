import { Download, FileText, UtensilsCrossed } from "lucide-react";

export function MenuDownload() {
  // Replace this URL with your actual PDF menu link
  const menuPdfUrl = "YOUR_MENU_PDF_URL_HERE";

  const handleDownload = () => {
    window.open(menuPdfUrl, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-br from-[#2c3e50] to-[#34495e] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-white transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon decoration */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#d64933] blur-2xl opacity-50 rounded-full"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border-2 border-white/30">
                <UtensilsCrossed className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="mb-6 text-white">Nuestro Menú</h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
            Descubre nuestra exquisita selección de platos de fusión japonesa
          </p>
          <p className="text-white/70 mb-12 max-w-xl mx-auto">
            Desde sushi artesanal hasta creaciones únicas que combinan lo mejor de Japón con toques mediterráneos
          </p>

          {/* Download Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-20 h-20 text-[#d64933]" />
            </div>
            
            <h3 className="mb-4 text-gray-800">Carta Completa</h3>
            
            <p className="text-gray-600 mb-8">
              Descarga nuestro menú completo en formato PDF para explorar todos nuestros platos, precios y opciones especiales
            </p>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center gap-3 bg-[#d64933] hover:bg-[#b83a26] text-white px-10 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span className="font-semibold text-lg">Descargar Menú PDF</span>
            </button>

            {/* Additional info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-[#d64933] rounded-full"></div>
                  <span>Opciones vegetarianas</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-[#d64933] rounded-full"></div>
                  <span>Sin gluten disponible</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-[#d64933] rounded-full"></div>
                  <span>Carta de alérgenos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="mt-8 text-white/60 text-sm">
            ¿Tienes alguna alergia o preferencia alimentaria? Háznoslo saber al hacer tu reserva
          </p>
        </div>
      </div>
    </section>
  );
}
