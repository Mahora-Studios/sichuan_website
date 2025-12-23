export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1673950839785-c4b255074e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHN1c2hpJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2NjUwNzQ2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="mb-6 text-white">Bienvenidos a Mixtura</h1>
        <p className="max-w-2xl mx-auto mb-8 text-white">
          La auténtica fusión japonesa en el corazón de Madrid
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
