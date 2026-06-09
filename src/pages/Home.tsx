import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const STYLISTS = [
  {
    name: 'Camille Renard',
    role: 'Founder & Senior Stylist',
    specialty: 'Precision cuts, balayage',
    years: 18,
    image: 'https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Sophie Laurent',
    role: 'Senior Colorist',
    specialty: 'Color correction, balayage',
    years: 12,
    image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Emile Dube',
    role: 'Stylist',
    specialty: 'Men\'s cuts, textured styles',
    years: 8,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Mia Chen',
    role: 'Stylist',
    specialty: 'Fringe styling, blowouts',
    years: 5,
    image: 'https://images.pexels.com/photos/3756524/pexels-photo-3756524.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const TESTIMONIALS = [
  {
    text: 'Camille has been cutting my hair for six years. I\'ve never trusted anyone else with my hair the way I trust her.',
    author: '— Sarah T.',
  },
  {
    text: 'The space is beautiful but what keeps me coming back is the consistency. Every cut is perfect.',
    author: '— Michael R.',
  },
  {
    text: 'Finally found a salon that understands fine hair. Sophie is a miracle worker.',
    author: '— Amanda K.',
  },
];

const GALLERY_IMAGES = [
  'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3993290/pexels-photo-3993290.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const HOURS = [
  { day: 'Tuesday – Friday', hours: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 5:00 PM' },
  { day: 'Sunday – Monday', hours: 'Closed' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1813298/pexels-photo-1813298.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-cream/85" />

        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide text-charcoal fade-in-up">
            Maison Blanche
          </h1>
          <div className="w-20 h-px bg-charcoal opacity-20 my-8 fade-in-up fade-in-delay-1" />
          <p className="font-serif text-lg md:text-xl font-light tracking-wide text-charcoal opacity-70 fade-in-up fade-in-delay-2">
            Precision cuts. No distractions.
          </p>
          <Link
            to="/book"
            className="inline-block mt-12 font-serif text-sm tracking-[0.2em] uppercase border border-charcoal px-10 py-3 text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-300 fade-in-up fade-in-delay-3"
          >
            Book Now
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-up fade-in-delay-3">
          <div className="w-px h-12 bg-charcoal opacity-30" />
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal mb-8 fade-in-up">
          Four chairs. One rule.
        </h2>
        <p className="font-sans text-base font-light leading-relaxed tracking-wide opacity-70 max-w-xl mx-auto fade-in-up fade-in-delay-1">
          Camille opened Maison Blanche in 2018 after 15 years cutting hair in Vancouver. No upselling. No rush. Just good haircuts.
        </p>
      </section>

      {/* Meet The Stylists */}
      <section className="bg-[#F5F4F0] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal text-center mb-16">
            Meet The Stylists
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STYLISTS.map((stylist) => (
              <div key={stylist.name} className="text-center">
                <div className="aspect-[3/4] mb-6 overflow-hidden">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-xl font-light tracking-wide text-charcoal mb-1">
                  {stylist.name}
                </h3>
                <p className="font-sans text-xs tracking-[0.1em] uppercase opacity-50 mb-2">
                  {stylist.role}
                </p>
                <p className="font-sans text-sm font-light opacity-70 mb-1">
                  {stylist.specialty}
                </p>
                <p className="font-sans text-xs opacity-40">
                  {stylist.years} years
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-lg font-light italic leading-relaxed text-charcoal opacity-80 mb-4">
                "{t.text}"
              </p>
              <p className="font-sans text-xs tracking-[0.15em] uppercase opacity-50">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal text-center mb-16">
            Our Work
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Hair styling work ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-2xl font-light tracking-wide text-charcoal mb-8">
              Location
            </h2>
            <p className="font-sans text-sm font-light leading-relaxed opacity-70 mb-4">
              1028 Hamilton Street<br />
              Vancouver, BC V6B 2R9<br />
              Yaletown, near Stadium Skytrain
            </p>
            <p className="font-sans text-sm font-light opacity-50">
              Street parking available
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-light tracking-wide text-charcoal mb-8">
              Hours
            </h2>
            <div className="space-y-3">
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between font-sans text-sm font-light"
                >
                  <span className="opacity-70">{h.day}</span>
                  <span className="opacity-50">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-charcoal/10 text-center">
          <p className="font-sans text-sm font-light opacity-50 mb-4">
            Book online or call us directly
          </p>
          <p className="font-serif text-xl tracking-wide text-charcoal">
            604-555-0198
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-cream py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="font-serif text-xl font-light tracking-wide mb-4">Maison Blanche</h3>
              <p className="font-sans text-xs font-light opacity-50 leading-relaxed">
                1028 Hamilton Street<br />
                Vancouver, BC V6B 2R9
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xs tracking-[0.2em] uppercase mb-4 opacity-50">Hours</h3>
              <p className="font-sans text-xs font-light opacity-50 leading-relaxed">
                Tue–Fri: 9am–7pm<br />
                Sat: 9am–5pm<br />
                Sun–Mon: Closed
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xs tracking-[0.2em] uppercase mb-4 opacity-50">Contact</h3>
              <p className="font-sans text-xs font-light opacity-50 leading-relaxed">
                604-555-0198<br />
                hello@maisonblanche.ca
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 border-t border-cream/10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          <p className="text-center font-sans text-xs font-light opacity-30 mt-8">
            © 2024 Maison Blanche. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
