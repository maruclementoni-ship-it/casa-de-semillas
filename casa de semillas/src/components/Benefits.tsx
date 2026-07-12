import { Truck, BadgePercent, Leaf, Clock, Package, Heart } from 'lucide-react';

const BENEFITS = [
  {
    icon: Truck,
    title: 'Envío gratis a domicilio',
    description: 'Llevamos tu pedido sin costo en Ciudad de Buenos Aires y alrededores, de forma rápida y eficiente.',
  },
  {
    icon: BadgePercent,
    title: 'Precios competitivos',
    description: 'Comprá por mayor y menor con los mejores precios del mercado. Calidad y ahorro en cada pedido.',
  },
  {
    icon: Leaf,
    title: 'Productos siempre frescos',
    description: 'Cuidamos cada producto para que llegue a tu mesa con la máxima frescura y calidad.',
  },
  {
    icon: Package,
    title: 'Variedad incomparable',
    description: 'Frutos secos, semillas, cereales, legumbres, especias, repostería, regionales e importados.',
  },
  {
    icon: Clock,
    title: 'Atención rápida',
    description: 'Te respondemos por WhatsApp en minutos. Hacé tu pedido y coordinamos la entrega.',
  },
  {
    icon: Heart,
    title: 'Armá tu propio mix',
    description: 'Personalizá tu mix de frutos secos a medida. Elegí los ingredientes que más te gusten.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-gradient-to-b from-seed-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-semibold tracking-wide mb-4">
            Por qué elegirnos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-seed-900 mb-4">
            Calidad que se une a la comodidad
          </h2>
          <p className="text-lg text-seed-600 leading-relaxed">
            Ofrecemos un servicio de ventas por mayor y por menor pensado para tu bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-seed-100 hover:border-leaf-200"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-leaf-500 to-leaf-700 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                <b.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-seed-900 mb-2">{b.title}</h3>
              <p className="text-seed-600 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
