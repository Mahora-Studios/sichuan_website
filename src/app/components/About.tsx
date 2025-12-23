export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Nuestra Historia</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1717838207789-62684e75a770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc2NjQwMzk3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef preparando sushi"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-4">
              <p>
                En 2015, nuestro chef fundador Takeshi Yamamoto llegó a Madrid con un sueño: crear un puente entre la tradición culinaria japonesa y los sabores mediterráneos que tanto le fascinaron al descubrir España.
              </p>
              <p>
                Mixtura nació de esa pasión por fusionar dos mundos gastronómicos. Cada plato cuenta una historia de técnicas ancestrales japonesas reinventadas con ingredientes frescos del mercado madrileño.
              </p>
              <p>
                Hoy, casi una década después, seguimos comprometidos con la excelencia, la innovación y la autenticidad. Nuestro equipo de chefs combina años de formación en Tokio con el espíritu creativo de Madrid, ofreciendo una experiencia única que honra ambas culturas.
              </p>
              <p className="text-[#d64933]">
                "La cocina es el lenguaje universal del amor y el respeto" - Takeshi Yamamoto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
