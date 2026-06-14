import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface ServiceItem {
  name: string;
  price: number;
  duration: string;
  from?: boolean;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

const SERVICES: ServiceCategory[] = [
  {
    category: 'Cut & Style',
    items: [
      { name: "Women's Cut & Style", price: 95, duration: '60 min' },
      { name: "Men's Cut & Style", price: 65, duration: '45 min' },
      { name: "Children's Cut (12 & under)", price: 40, duration: '30 min' },
      { name: 'Fringe / Bang Trim', price: 25, duration: '15 min' },
      { name: 'Blowout & Style', price: 75, duration: '45 min' },
      { name: 'Special Occasion Updo', price: 120, duration: '75 min' },
      { name: 'Braids & Twist Styles', price: 85, duration: '60 min' },
    ],
  },
  {
    category: 'Color',
    items: [
      { name: 'Single Process Color', price: 150, duration: '90 min' },
      { name: 'Root Touch-Up', price: 95, duration: '60 min' },
      { name: 'Full Highlights', price: 225, duration: '150 min' },
      { name: 'Partial Highlights', price: 175, duration: '120 min' },
      { name: 'Balayage', price: 275, duration: '180 min' },
      { name: 'Ombre', price: 250, duration: '180 min' },
      { name: 'Toner / Gloss', price: 60, duration: '30 min' },
      { name: 'Color Correction', price: 300, duration: 'Consultation', from: true },
    ],
  },
  {
    category: 'Treatment',
    items: [
      { name: 'Deep Conditioning Mask', price: 55, duration: '30 min' },
      { name: 'Keratin Smoothing', price: 250, duration: '180 min' },
      { name: 'Scalp Detox Treatment', price: 70, duration: '45 min' },
      { name: 'Olaplex Repair Add-On', price: 45, duration: '20 min' },
      { name: 'Bond Building Treatment', price: 85, duration: '40 min' },
      { name: 'Hydrating Oil Treatment', price: 50, duration: '25 min' },
    ],
  },
  {
    category: 'Texturizing',
    items: [
      { name: 'Permanent Wave (Perm)', price: 200, duration: '150 min' },
      { name: 'Chemical Relaxer', price: 180, duration: '120 min' },
      { name: 'Japanese Straightening', price: 350, duration: '240 min' },
    ],
  },
  {
    category: 'Brows & Lashes',
    items: [
      { name: 'Brow Shaping & Tint', price: 35, duration: '20 min' },
      { name: 'Brow Lamination', price: 55, duration: '30 min' },
      { name: 'Lash Lift & Tint', price: 75, duration: '45 min' },
      { name: 'Lash Extensions (Classic)', price: 150, duration: '90 min' },
      { name: 'Lash Extensions (Volume)', price: 225, duration: '120 min' },
    ],
  },
  {
    category: 'Finishing Add-Ons',
    items: [
      { name: 'Flat Iron Finish', price: 30, duration: '15 min' },
      { name: 'Curling Iron Finish', price: 30, duration: '15 min' },
      { name: 'Scalp Massage (15 min)', price: 25, duration: '15 min' },
      { name: 'Beard Trim & Shape', price: 25, duration: '15 min' },
    ],
  },
];

const STYLISTS = [
  { id: 'any', name: 'No Preference' },
  { id: 'camille', name: 'Camille Renard' },
  { id: 'sophie', name: 'Sophie Laurent' },
  { id: 'emile', name: 'Emile Dube' },
  { id: 'mia', name: 'Mia Chen' },
];

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM',
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
];

export default function Book() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    stylist: 'any',
    date: '',
    time: '',
    notes: '',
  });

  const allItems = SERVICES.flatMap(s => s.items);
  const hasFromPrice = selectedServices.some(name => {
    const item = allItems.find(i => i.name === name);
    return item?.from;
  });

  const total = selectedServices.reduce((sum, name) => {
    const item = allItems.find(i => i.name === name);
    return sum + (item?.price ?? 0);
  }, 0);

  const toggleService = (name: string) => {
    setSelectedServices(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide text-charcoal mb-6">
            Thank you
          </h1>
          <p className="font-sans text-sm font-light tracking-wide opacity-60 mb-2 leading-relaxed">
            Your appointment request has been received.
          </p>
          <p className="font-sans text-sm font-light tracking-wide opacity-60 mb-8">
            We'll confirm within 24 hours.
          </p>
          <Link
            to="/"
            className="inline-block font-serif text-sm tracking-[0.2em] uppercase border border-charcoal px-8 py-3 text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-300"
          >
            Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-4 text-center">
          Book Your Appointment
        </h1>
        <p className="font-sans text-sm font-light tracking-wide opacity-50 text-center mb-16">
          Select your services, then choose a time that works for you.
        </p>

        {/* Progress Steps */}
        <div className="flex justify-center gap-4 mb-16">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs ${
                step >= s
                  ? 'bg-charcoal text-cream'
                  : 'border border-charcoal/20 text-charcoal/30'
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              {SERVICES.map((section) => (
                <div key={section.category} className="mb-10">
                  <h2 className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-6">
                    {section.category}
                  </h2>
                  <div className="space-y-3">
                    {section.items.map((item) => {
                      const isSelected = selectedServices.includes(item.name);
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => toggleService(item.name)}
                          className={`w-full flex justify-between items-center p-4 border transition-colors ${
                            isSelected
                              ? 'border-charcoal bg-charcoal/5'
                              : 'border-charcoal/10 hover:border-charcoal/30'
                          }`}
                        >
                          <div className="text-left flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                              isSelected ? 'bg-charcoal border-charcoal' : 'border-charcoal/30'
                            }`}>
                              {isSelected && (
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream"/>
                                </svg>
                              )}
                            </div>
                            <div>
                              <p className="font-sans text-sm font-light">{item.name}</p>
                              <p className="font-sans text-xs opacity-40 mt-1">{item.duration}</p>
                            </div>
                          </div>
                          <span className="font-serif text-lg font-light opacity-70">
                            {item.from ? 'From ' : ''}${item.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Selected services summary bar */}
              {selectedServices.length > 0 && (
                <div className="sticky bottom-6 bg-charcoal text-cream p-4 flex justify-between items-center z-10">
                  <div>
                    <p className="font-sans text-xs opacity-60">
                      {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} selected
                    </p>
                    <p className="font-serif text-lg">${total}{hasFromPrice ? '*' : ''}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="font-serif text-sm tracking-[0.2em] uppercase bg-cream text-charcoal px-8 py-2 hover:bg-cream/90 transition-colors duration-300"
                  >
                    Continue
                  </button>
                </div>
              )}

              {selectedServices.length === 0 && (
                <div className="pt-8 text-center">
                  <p className="font-sans text-sm opacity-40 mb-4">Select at least one service to continue</p>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Date, Time & Stylist */}
          {step === 2 && (
            <div className="space-y-12">
              <div>
                <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-4">
                  Select Stylist
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {STYLISTS.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setForm({ ...form, stylist: s.id })}
                      className={`p-4 border font-sans text-sm font-light transition-colors ${
                        form.stylist === s.id
                          ? 'border-charcoal bg-charcoal/5'
                          : 'border-charcoal/10 hover:border-charcoal/30'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-4">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-transparent border border-charcoal/10 p-4 font-sans text-sm font-light text-charcoal focus:border-charcoal/30 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-4">
                    Preferred Time
                  </label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-cream border border-charcoal/10 p-4 font-sans text-sm font-light text-charcoal focus:border-charcoal/30 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a time</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-8 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="font-sans text-sm font-light opacity-50 hover:opacity-100 transition-opacity"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={!form.date}
                  onClick={() => setStep(3)}
                  className="font-serif text-sm tracking-[0.2em] uppercase border border-charcoal px-10 py-3 text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-charcoal"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <div className="space-y-10">
              {/* Summary */}
              <div className="bg-[#F5F4F0] p-6 mb-8">
                <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-4">
                  Your Services
                </h3>
                <div className="space-y-3">
                  {selectedServices.map(name => {
                    const item = allItems.find(i => i.name === name);
                    if (!item) return null;
                    return (
                      <div key={name} className="flex justify-between items-center">
                        <div>
                          <p className="font-sans text-sm font-light">{item.name}</p>
                          <p className="font-sans text-xs opacity-40">{item.duration}</p>
                        </div>
                        <span className="font-serif text-base font-light opacity-70">
                          {item.from ? 'From ' : ''}${item.price}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-4 border-t border-charcoal/10">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-sm opacity-60">
                      Estimated Total{hasFromPrice ? '*' : ''}
                    </span>
                    <span className="font-serif text-xl">${total}{hasFromPrice ? '*' : ''}</span>
                  </div>
                  <p className="font-sans text-xs opacity-40 mt-1">
                    * Starting price only &mdash; final cost may vary{hasFromPrice ? '. ' : ''}
                    Taxes & additional fees calculated at appointment.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-charcoal/5">
                  <p className="font-sans text-sm opacity-50">
                    {form.date && new Date(form.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    {form.time && ` at ${form.time}`}
                  </p>
                  <p className="font-sans text-xs opacity-40 mt-1">
                    {form.stylist === 'any' ? 'No stylist preference' : `With ${STYLISTS.find(s => s.id === form.stylist)?.name}`}
                  </p>
                </div>
              </div>

              <div>
                <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-4">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-charcoal/20 p-2 font-sans text-sm font-light text-charcoal focus:border-charcoal/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-4">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-charcoal/20 p-2 font-sans text-sm font-light text-charcoal focus:border-charcoal/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-4">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-charcoal/20 p-2 font-sans text-sm font-light text-charcoal focus:border-charcoal/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-4">
                  Notes <span className="normal-case opacity-40">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Any special requests or things we should know?"
                  className="w-full bg-transparent border border-charcoal/10 p-3 font-sans text-sm font-light text-charcoal focus:border-charcoal/30 focus:outline-none transition-colors placeholder:opacity-30"
                />
              </div>

              <div className="pt-8 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="font-sans text-sm font-light opacity-50 hover:opacity-100 transition-opacity"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="font-serif text-sm tracking-[0.2em] uppercase bg-charcoal text-cream px-10 py-3 hover:bg-charcoal/90 transition-colors duration-300"
                >
                  Request Appointment
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
