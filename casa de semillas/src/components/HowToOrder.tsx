import { MessageCircle, ClipboardList, Truck, CheckCircle2 } from 'lucide-react';
import { whatsappLink } from '../lib/constants';

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Contactanos',
    description: 'Escribinos por WhatsApp o dejános un mensaje en el formulario de contacto. Te respondemos al instante.',
  },
  {
    icon: ClipboardList,
    title: 'Armá tu pedido',
    description: 'Elegí los productos que quieras de nuestra lista. Te asesoramos y te pasamos los precios al momento.',
  },
  {
    icon: CheckCircle2,
    title: 'Confirmá la compra',
    description: 'Coordinamos el pago y los detalles de la entrega. Aceptamos múltiples medios de pago.',
  },
  {
    icon: Truck,
    title: 'Recibí en casa',
    description: 'Te llevamos el pedido a domicilio sin costo en CABA y alrededores. ¡Rápido y eficiente!',
  },
];

export default function HowToOrder() {
  return (
    <section id="pedir" className="py-24 bg-seed-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-leaf-300 text-sm font-semibold tracking-wide mb-4">
            Cómo pedir
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Comprá en 4 simples pasos
          </h2>
          <p className="text-lg text-seed-200 leading-relaxed">
            Disfrutá de la mejor experiencia de compra, fácil y sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center shadow-lg mb-5">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-terracotta-500 text-white text-sm font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-seed-300 text-sm leading-relaxed">{step.description}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+3rem)] right-[-50%] h-0.5 bg-gradient-to-r from-leaf-500/40 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={whatsappLink('Hola! Quiero hacer un pedido.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-leaf-500 text-white font-semibold text-base shadow-xl hover:bg-leaf-600 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Empezar mi pedido
          </a>
        </div>
      </div>
    </section>
  );
}
