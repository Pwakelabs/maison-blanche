import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-6">
      <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide text-charcoal">
        Maison Blanche
      </h1>
      <div className="w-20 h-px bg-charcoal opacity-20 my-8" />
      <p className="font-serif text-lg md:text-xl font-light tracking-wide text-charcoal opacity-60">
        Precision cuts. No distractions.
      </p>
      <Link
        to="/book"
        className="mt-12 font-serif text-sm tracking-[0.2em] uppercase border border-charcoal px-10 py-3 text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-300"
      >
        Book Now
      </Link>
    </div>
  );
}
