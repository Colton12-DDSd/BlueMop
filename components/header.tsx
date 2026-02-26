import Link from 'next/link';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/partners', label: 'Partners' },
  { href: '/trust', label: 'Trust Center' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Logo />
        <nav className="flex items-center gap-5 text-sm text-slate-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
