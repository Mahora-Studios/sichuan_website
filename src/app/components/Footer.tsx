import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={logo} 
              alt="Mixtura Fusion Japones" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400">
              Auténtica fusión japonesa en el corazón de Madrid
            </p>
          </div>
          <div>
            <h4 className="mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Menú
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("reservas")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Reservas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("pedidos")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Pedidos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                TripAdvisor
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mixtura Fusion Japones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
