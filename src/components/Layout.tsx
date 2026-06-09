import { Link, useLocation } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/book', label: 'Book' },
  { path: '/about', label: 'About' },
];

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export default function Layout({ children, hideFooter = false }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans">
      <nav className={`flex items-center justify-center gap-12 py-8 px-6 ${isHome ? 'absolute top-0 left-0 right-0 z-20' : ''}`}>
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

      {!hideFooter && !isHome && (
        <footer className="bg-[#1a1a1a] text-cream py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="font-serif text-lg font-light tracking-wide">Maison Blanche</p>
              <div className="flex items-center gap-8">
                <a
                  href="tel:604-555-0198"
                  className="font-sans text-xs font-light opacity-50 hover:opacity-100 transition-opacity"
                >
                  604-555-0198
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-50 hover:opacity-100 transition-opacity"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            <p className="text-center font-sans text-xs font-light opacity-30 mt-6">
              © 2024 Maison Blanche. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
