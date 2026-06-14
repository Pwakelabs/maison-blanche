import { Clock, MapPin, Phone } from 'lucide-react';
import salonInterior from '../assets/image.png';

export default function About() {
  return (
    <div className="py-24">
      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src={salonInterior}
          alt="Maison Blanche salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/70 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide text-charcoal">
              About
            </h1>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal mb-8">
            Our Philosophy
          </h2>
          <div className="w-16 h-px bg-charcoal opacity-20 mx-auto" />
        </div>

        <div className="space-y-8">
          <p className="font-sans text-base font-light leading-relaxed tracking-wide opacity-70 text-center">
            Camille opened Maison Blanche in 2018 after 15 years cutting hair in Vancouver. The studio has four chairs and one rule — the work comes first. No upselling. No rush. Just good haircuts.
          </p>
          <p className="font-sans text-base font-light leading-relaxed tracking-wide opacity-70 text-center">
            Book online or call us directly.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-[#F5F4F0] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Camille Renard, founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-xs tracking-[0.2em] uppercase text-charcoal opacity-50 mb-4">
                Founder
              </p>
              <h2 className="font-serif text-3xl font-light tracking-wide text-charcoal mb-6">
                Camille Renard
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-sm font-light leading-relaxed opacity-70">
                  I trained in Paris and moved to Vancouver in 2003. After working in salons across the city, I knew I wanted something different — a space that felt calm, not chaotic. Where clients could actually relax.
                </p>
                <p className="font-sans text-sm font-light leading-relaxed opacity-70">
                  At Maison Blanche, we don't chase trends. We focus on cuts that grow out beautifully and color that looks natural. Our approach is simple: listen first, then cut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <MapPin className="w-5 h-5 mx-auto mb-4 opacity-40" />
            <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-3">
              Location
            </h3>
            <p className="font-sans text-sm font-light leading-relaxed opacity-70">
              1028 Hamilton Street<br />
              Vancouver, BC V6B 2R9<br />
              <span className="opacity-50">Yaletown</span>
            </p>
          </div>

          <div>
            <Clock className="w-5 h-5 mx-auto mb-4 opacity-40" />
            <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-3">
              Hours
            </h3>
            <p className="font-sans text-sm font-light leading-relaxed opacity-70">
              Tue – Fri: 9am – 7pm<br />
              Sat: 9am – 5pm<br />
              <span className="opacity-50">Sun – Mon: Closed</span>
            </p>
          </div>

          <div>
            <Phone className="w-5 h-5 mx-auto mb-4 opacity-40" />
            <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-3">
              Contact
            </h3>
            <p className="font-sans text-sm font-light leading-relaxed opacity-70">
              604-555-0198<br />
              hello@maisonblanche.ca
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
