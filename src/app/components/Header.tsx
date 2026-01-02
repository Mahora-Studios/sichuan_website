import logo from "../../assets/logo.png";
export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img 
            src={logo} 
            alt="Mixtura Fusion Japones" 
            className="h-12 md:h-16 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("menu")}
              className="hover:text-[#d64933] transition-colors"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection("reservas")}
              className="hover:text-[#d64933] transition-colors"
            >
              Reservas
            </button>
            <button
              onClick={() => scrollToSection("pedidos")}
              className="hover:text-[#d64933] transition-colors"
            >
              Pedidos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="hover:text-[#d64933] transition-colors"
            >
              Contacto
            </button>
          </nav>
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
