import { Phone, UtensilsCrossed } from "lucide-react";

export function Orders() {
  return (
    <section id="pedidos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4">Pedidos</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Disfruta de Mixtura en la comodidad de tu hogar
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d64933] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3>Pedidos por Teléfono</h3>
              </div>
              <p className="mb-4">
                Llámanos directamente y prepararemos tu pedido
              </p>
              <a 
                href="tel:+34912345678"
                className="text-[#d64933] hover:underline block mb-2"
              >
                +34 912 345 678
              </a>
              <p className="text-sm text-gray-600">
                Lunes a Domingo: 12:00 - 17:00, 20:00 - 00:00
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d64933] p-3 rounded-full">
                  <UtensilsCrossed className="w-6 h-6 text-white" />
                </div>
                <h3>Plataformas de Delivery</h3>
              </div>
              <p className="mb-4">
                Encuéntranos en tus aplicaciones favoritas
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#d64933] rounded-full"></span>
                  <span>Uber Eats</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#d64933] rounded-full"></span>
                  <span>Just Eat</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#d64933] rounded-full"></span>
                  <span>Glovo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h4 className="mb-4">Información de Pedidos</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Pedido mínimo: 25€</li>
              <li>• Zona de reparto: 5km desde el restaurante</li>
              <li>• Tiempo estimado de entrega: 45-60 minutos</li>
              <li>• Todos nuestros platos se preparan en el momento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}