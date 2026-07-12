import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('id, name, role, content, rating')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setTestimonials(data);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-leaf-50 text-leaf-700 text-sm font-semibold tracking-wide mb-4">
            Testimonios
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-seed-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-seed-600 leading-relaxed">
            La satisfacción de quienes confían en nosotros es nuestra mejor carta de presentación.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-10 h-10 border-4 border-seed-200 border-t-leaf-600 rounded-full animate-spin" />
          </div>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-seed-500">No hay testimonios disponibles.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="relative p-8 bg-gradient-to-br from-seed-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-seed-100"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-seed-200" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < t.rating ? 'fill-terracotta-400 text-terracotta-400' : 'text-seed-200'}`}
                    />
                  ))}
                </div>
                <p className="text-seed-700 leading-relaxed mb-6 text-base">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-seed-900">{t.name}</p>
                    {t.role && <p className="text-sm text-seed-500">{t.role}</p>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
