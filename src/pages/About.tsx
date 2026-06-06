export default function About() {
  return (
    <div className="max-w-lg mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-20 text-center">
        About
      </h1>

      <div className="flex flex-col gap-8">
        <p className="font-sans text-sm font-light leading-relaxed tracking-wide opacity-80">
          Camille opened Maison Blanche in 2018 after 15 years cutting hair in Vancouver. The studio has four chairs and one rule — the work comes first. No upselling. No rush. Just good haircuts.
        </p>
        <p className="font-sans text-sm font-light leading-relaxed tracking-wide opacity-80">
          Book online or call us directly.
        </p>
      </div>
    </div>
  );
}
