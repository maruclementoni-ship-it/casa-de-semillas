export const BUSINESS = {
  name: 'Casa de Semillas',
  tagline: 'Distribuidor por mayor y menor de productos de dietética, almacén y repostería, regionales e importados',
  location: 'Buenos Aires, Argentina',
  whatsapp: '5491161510852',
  whatsappDisplay: '+54 9 11 6151-0852',
  email: 'casadesemillas@gmail.com',
  instagram: 'https://www.instagram.com/casadesemillas',
  instagramDisplay: '@casadesemillas',
  delivery: 'Envío gratis a domicilio en CABA y alrededores',
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
