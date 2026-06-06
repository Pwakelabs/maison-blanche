import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/book', label: 'Book' },
  { path: '/about', label: 'About' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans">
      <nav className="flex items-center justify-center gap-12 py-8 px-6">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-serif text-sm tracking-[0.15em] uppercase transition-opacity ${
              location.pathname === link.path
                ? 'opacity-100'
                : 'opacity-50 hover:opacity-80'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <main>{children}</main>
    </div>
  );
}
