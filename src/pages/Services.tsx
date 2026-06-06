const SERVICES = [
  {
    category: 'Cut & Style',
    items: [
      { name: 'Women’s Cut & Style', price: '$95' },
      { name: 'Men’s Cut & Style', price: '$65' },
      { name: 'Fringe Trim', price: '$30' },
      { name: 'Blowout', price: '$75' },
    ],
  },
  {
    category: 'Color',
    items: [
      { name: 'Single Process', price: '$150' },
      { name: 'Full Highlights', price: '$225' },
      { name: 'Partial Highlights', price: '$175' },
      { name: 'Balayage', price: '$275' },
      { name: 'Toner', price: '$60' },
      { name: 'Color Correction', price: 'From $300' },
    ],
  },
  {
    category: 'Treatment',
    items: [
      { name: 'Deep Conditioning', price: '$55' },
      { name: 'Keratin Smoothing', price: '$250' },
      { name: 'Scalp Treatment', price: '$70' },
      { name: 'Olaplex Add-On', price: '$40' },
    ],
  },
];

export default function Services() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-20 text-center">
        Services
      </h1>

      {SERVICES.map((section) => (
        <div key={section.category} className="mb-16 last:mb-0">
          <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-charcoal opacity-50 mb-8">
            {section.category}
          </h2>

          <div>
            {section.items.map((item, i) => (
              <div key={item.name}>
                <div className="flex justify-between items-baseline py-4">
                  <span className="font-sans text-sm font-light tracking-wide">
                    {item.name}
                  </span>
                  <span className="font-sans text-sm font-light tracking-wide opacity-60">
                    {item.price}
                  </span>
                </div>
                {i < section.items.length - 1 && (
                  <div className="h-px bg-charcoal opacity-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
