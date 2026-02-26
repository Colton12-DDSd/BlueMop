import Link from 'next/link';
import { BrandKit } from '@/components/brand-kit';
import { partnerCompanies } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-mist">
      <div className="section-shell space-y-8 py-12">
        <div className="panel p-6">
          <h3 className="text-lg font-semibold text-slate-900">Partner Links</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            {partnerCompanies.map((partner) => (
              <li key={partner.name}>
                <Link className="hover:text-slate-900" href={partner.href}>
                  {partner.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <BrandKit />

        <div className="text-sm text-slate-600">
          <p>“BlueMop Facility Services is a fictional entity for design and storytelling purposes.”</p>
        </div>
      </div>
    </footer>
  );
}
