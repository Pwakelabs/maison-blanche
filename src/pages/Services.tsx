import { Link } from 'react-router-dom';

const SERVICES = [
  {
    category: 'Cut & Style',
    items: [
      { name: "Women's Cut & Style", price: '$95', duration: '60 min', description: 'Consultation, precision cut, and blowout' },
      { name: "Men's Cut & Style", price: '$65', duration: '45 min', description: 'Classic or modern cuts, includes finish' },
      { name: 'Fringe Trim', price: '$30', duration: '15 min', description: 'Existing clients, fringe maintenance' },
      { name: 'Blowout', price: '$75', duration: '45 min', description: 'Wash and professional blowdry' },
      { name: 'Children\'s Cut', price: '$45', duration: '30 min', description: 'Ages 12 and under' },
    ],
  },
  {
    category: 'Color',
    items: [
      { name: 'Single Process', price: '$150', duration: '90 min', description: 'Full coverage or root touch-up' },
      { name: 'Full Highlights', price: '$225', duration: '150 min', description: 'Lightening throughout' },
      { name: 'Partial Highlights', price: '$175', duration: '120 min', description: 'Face-framing or top section' },
      { name: 'Balayage', price: '$275', duration: '180 min', description: 'Hand-painted, natural dimension' },
      { name: 'Toner', price: '$60', duration: '30 min', description: 'Gloss or toner refresh' },
      { name: 'Color Correction', price: 'From $300', duration: 'Consultation', description: 'Complex color work, quote required' },
    ],
  },
  {
    category: 'Treatment',
    items: [
      { name: 'Deep Conditioning', price: '$55', duration: '30 min', description: 'Intensive moisture treatment' },
      { name: 'Keratin Smoothing', price: '$250', duration: '180 min', description: 'Frizz control, up to 3 months' },
      { name: 'Scalp Treatment', price: '$70', duration: '45 min', description: 'Exfoliation and massage' },
      { name: 'Bond Building', price: '$45', duration: '15 min', description: 'Add-on to any color service' },
    ],
  },
];

export default function Services() {
  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-4 text-center">
          Services
        </h1>
        <p className="font-sans text-sm font-light tracking-wide opacity-50 text-center mb-16">
          Prices starting at. Duration varies by hair length and density.
        </p>

        {SERVICES.map((section) => (
          <div key={section.category} className="mb-16 last:mb-0">
            <h2 className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-40 mb-8">
              {section.category}
            </h2>

            <div>
              {section.items.map((item, i) => (
                <div key={item.name}>
                  <div className="py-5 flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                        <span className="font-sans text-base font-light tracking-wide">
                          {item.name}
                        </span>
                        <span className="md:hidden font-serif text-lg font-light opacity-60">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-sans text-xs font-light opacity-40 mt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden md:flex items-baseline gap-4 flex-shrink-0">
                      <span className="font-sans text-xs opacity-40">{item.duration}</span>
                      <span className="font-serif text-xl font-light opacity-70">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  {i < section.items.length - 1 && (
                    <div className="h-px bg-charcoal opacity-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-12 mt-12 border-t border-charcoal/10 text-center">
          <p className="font-sans text-sm font-light opacity-50 mb-6">
            Not sure what you need? Book a complimentary consultation.
          </p>
          <Link
            to="/book"
            className="inline-block font-serif text-sm tracking-[0.2em] uppercase border border-charcoal px-10 py-3 text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
