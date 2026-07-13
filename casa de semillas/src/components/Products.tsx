import { Nut, Wheat, Leaf, Cookie, Flame, Package } from 'lucide-react';
import { whatsappLink } from '../lib/constants';
import frutosSecos from './frutos secos.jpg';
import semillas from './semillas.jpeg';
import cereales from './cereales y arinas.jpeg';
import legumbres from './legumbres.jpeg';
import especias from './especias.jpeg';
import reposteria from './image_dbe655b7.png';

const CATEGORIES = [
  {
    icon: Nut,
    title: 'Frutos Secos',
    description: 'Almendras, nueces, castañas de cajú, avellanas, maní y más. Calidad premium para el día a día o tu emprendimiento.',
    image: frutos secos,
    items: ['Almendras', 'Nueces', 'Castañas de cajú', 'Avellanas', 'Maní', 'Mix de frutos'],
  },
  {
    icon: Leaf,
    title: 'Semillas',
    description: 'Chía, lino, girasol, sésamo y amapola. Súper alimentos para enriquecer tus comidas.',
    image: semillas,
    items: ['Chía', 'Lino', 'Girasol', 'Sésamo', 'Amapola', 'Calabaza'],
  },
  {
    icon: Wheat,
    title: 'Cereales y Harinas',
    description: 'Avena, granola, harinas integrales y sin TACC. La base de una alimentación saludable.',
    image: cereales y arinas,
    items: ['Avena', 'Granola', 'Harina integral', 'Harina de coco', 'Quinoa', 'Cebada'],
  },
  {
    icon: Package,
    title: 'Legumbres',
    description: 'Lentejas, garbanzos, porotos y arvejas. Proteína vegetal de primera calidad.',
    image: legumbres,
    items: ['Lentejas', 'Garbanzos', 'Porotos', 'Arvejas', 'Soja', 'Lentejas rojas'],
  },
  {
    icon: Flame,
    title: 'Especias',
    description: 'Condimentos naturales y mezclas para realzar el sabor de tus platos favoritos.',
    image: especias,
    items: ['Pimentón', 'Cúrcuma', 'Comino', 'Orégano', 'Pimienta', 'Mezclas'],
  },
  {
    icon: Cookie,
    title: 'Repostería',
    description: 'Productos para repostería, regionales e importados. Todo lo que necesitás para tus recetas.',
    image: image_dbe655b7,
    items: ['Cacao', 'Vainilla', 'Frutas disecadas', 'Chips de chocolate', 'Coco rallado', 'Miel'],
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-leaf-50 text-leaf-700 text-sm font-semibold tracking-wide mb-4">
            Nuestros Productos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-seed-900 mb-4">
            Explorá nuestros deliciosos productos frescos
          </h2>
          <p className="text-lg text-seed-600 leading-relaxed">
            Frutos secos, semillas, cereales, harinas, legumbres, especias, productos de repostería y mucho más...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, i) => (
            <article
              key={cat.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-seed-100"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-seed-900/60 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <cat.icon className="w-6 h-6 text-leaf-600" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-seed-900 mb-2">{cat.title}</h3>
                <p className="text-seed-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {cat.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-md bg-seed-50 text-seed-700 text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={whatsappLink(`Hola! Me interesaría conocer más sobre sus productos de ${cat.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-leaf-600 font-semibold text-sm hover:text-leaf-700 transition-colors"
                >
                  Consultar precios
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
