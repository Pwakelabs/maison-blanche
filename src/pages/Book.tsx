import { useState } from 'react';
import { Link } from 'react-router-dom';

const SERVICE_OPTIONS = [
  "Women's Cut & Style",
  "Men's Cut & Style",
  'Fringe Trim',
  'Blowout',
  'Single Process',
  'Full Highlights',
  'Partial Highlights',
  'Balayage',
  'Toner',
  'Color Correction',
  'Deep Conditioning',
  'Keratin Smoothing',
  'Scalp Treatment',
  'Olaplex Add-On',
];

export default function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-3xl font-light tracking-wide text-charcoal mb-6">
          Thank you
        </h1>
        <p className="font-sans text-sm font-light tracking-wide opacity-60 mb-8">
          We'll be in touch shortly to confirm your appointment.
        </p>
        <Link
          to="/"
          className="font-serif text-sm tracking-[0.2em] uppercase border border-charcoal px-8 py-3 text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-300"
        >
          Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-20 text-center">
        Book
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div>
          <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-3">
            Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border-b border-charcoal opacity-20 focus:opacity-60 focus:outline-none py-2 font-sans text-sm font-light tracking-wide text-charcoal transition-opacity"
          />
        </div>

        <div>
          <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-3">
            Phone
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-transparent border-b border-charcoal opacity-20 focus:opacity-60 focus:outline-none py-2 font-sans text-sm font-light tracking-wide text-charcoal transition-opacity"
          />
        </div>

        <div>
          <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-3">
            Service
          </label>
          <select
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full bg-transparent border-b border-charcoal opacity-20 focus:opacity-60 focus:outline-none py-2 font-sans text-sm font-light tracking-wide text-charcoal transition-opacity appearance-none cursor-pointer"
          >
            <option value="" disabled></option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s} className="bg-cream text-charcoal">
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-serif text-sm tracking-[0.15em] uppercase text-charcoal opacity-50 mb-3">
            Preferred Date
          </label>
          <input
            type="date"
            required
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full bg-transparent border-b border-charcoal opacity-20 focus:opacity-60 focus:outline-none py-2 font-sans text-sm font-light tracking-wide text-charcoal transition-opacity"
          />
        </div>

        <button
          type="submit"
          className="mt-6 font-serif text-sm tracking-[0.2em] uppercase border border-charcoal px-8 py-3 text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-300 self-center"
        >
          Request Appointment
        </button>
      </form>
    </div>
  );
}
