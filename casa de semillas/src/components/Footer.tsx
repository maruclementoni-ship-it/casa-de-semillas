import { Leaf, MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { BUSINESS, whatsappLink } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-seed-950 text-seed-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-leaf-500 to-leaf-700 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-white">{BUSINESS.name}</p>
                <p className="text-xs tracking-wider uppercase text-seed-400">Dietética Natural</p>
              </div>
            </div>
            <p className="text-seed-400 leading-relaxed max-w-md text-sm">
              {BUSINESS.tagline}. Comprá hoy y disfrutá de la mejor experiencia de compra con {BUSINESS.delivery.toLowerCase()}.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={whatsappLink('Hola! Quiero hacer una consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-seed-800 hover:bg-leaf-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-seed-800 hover:bg-terracotta-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="w-10 h-10 rounded-lg bg-seed-800 hover:bg-leaf-600 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Navegación</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#inicio" className="hover:text-leaf-300 transition-colors">Inicio</a></li>
              <li><a href="#productos" className="hover:text-leaf-300 transition-colors">Productos</a></li>
              <li><a href="#beneficios" className="hover:text-leaf-300 transition-colors">Por qué elegirnos</a></li>
              <li><a href="#pedir" className="hover:text-leaf-300 transition-colors">Cómo pedir</a></li>
              <li><a href="#testimonios" className="hover:text-leaf-300 transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-leaf-300 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-leaf-400 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-leaf-400 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS.whatsappDisplay}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-leaf-400 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-seed-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-seed-400">
            {BUSINESS.name} &reg; {new Date().getFullYear()} · {BUSINESS.location}
          </p>
          <p className="text-xs text-seed-500">
            Diseñado con foco en la calidad y la frescura.
          </p>
        </div>
      </div>
    </footer>
  );
}
