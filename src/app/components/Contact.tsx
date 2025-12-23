import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4">Contacto</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Estamos aquí para atenderte
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#d64933] p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Dirección</h4>
                  <p className="text-gray-600">
                    Plaza del Sol 35, Local 9<br />
                    28938 Móstoles, Madrid, España
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#d64933] p-3 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Teléfono</h4>
                  <a href="tel:+34912345678" className="text-gray-600 hover:text-[#d64933] transition-colors">
                    +34 912 345 678
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#d64933] p-3 rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Email</h4>
                  <a href="mailto:info@mixtura-madrid.com" className="text-gray-600 hover:text-[#d64933] transition-colors">
                    info@mixtura-madrid.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#d64933] p-3 rounded-full flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Horario</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Lunes - Domingo: 12:00 - 17:00, 20:00 - 00:00</p>
                  </div>
                </div>
              </div>
              <Button 
                className="w-full bg-[#d64933] hover:bg-[#c03d28] mt-6"
                onClick={() => window.open("mailto:info@mixtura-madrid.com")}
              >
                Enviar un Email
              </Button>
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.3285359842787!2d-3.8666834!3d40.3217567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418f4e1e5a5a5a5%3A0x5b7e5c8f8a0c8e0d!2sPlaza%20del%20Sol%2C%2035%2C%2028938%20M%C3%B3stoles%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Mixtura"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}