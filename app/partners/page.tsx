import Link from 'next/link';
import type { Metadata } from 'next';
import { partnerCompanies } from '@/data/site';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Service Network Partners aligned with BlueMop Facility Services operating standards.',
  openGraph: {
    title: 'Partners | BlueMop Facility Services',
    description: 'Service Network Partners aligned with BlueMop Facility Services operating standards.'
  }
};

export default function PartnersPage() {
  return (
    <div className="section-shell">
      <h1 className="text-4xl font-semibold text-slate-900">Service Network Partners</h1>
      <p className="mt-4 max-w-3xl text-slate-700">Our partner network supports operational continuity across adjacent facility and infrastructure domains.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {partnerCompanies.map((partner) => (
          <article key={partner.name} className="panel p-6">
            <h2 className="text-xl font-semibold text-slate-900">{partner.name}</h2>
            <p className="mt-2 text-sm text-slate-700">“{partner.tagline}”</p>
            <Link href={partner.href} className="mt-4 inline-block text-sm font-medium text-slateBlue hover:underline">
              Visit partner profile
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
