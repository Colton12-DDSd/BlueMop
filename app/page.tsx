import Link from 'next/link';
import type { Metadata } from 'next';
import { partnerCompanies, positioning, tagline } from '@/data/site';

export const metadata: Metadata = {
  title: 'Home',
  description: 'BlueMop Facility Services delivers standardized commercial facilities support for corporate teams.',
  openGraph: {
    title: 'Home | BlueMop Facility Services',
    description: 'BlueMop Facility Services delivers standardized commercial facilities support for corporate teams.'
  }
};

const serviceCards = [
  {
    title: 'After-Hours Reset',
    text: 'Nightly operational resets aligned to occupancy windows and next-day readiness requirements.'
  },
  {
    title: 'Access-Controlled Cleaning',
    text: 'Credential-aware service routines for restricted zones, ensuring approved entry and traceability.'
  },
  {
    title: 'Standardized Checklists',
    text: 'Repeatable procedures and site-specific scope control for consistent outcomes across locations.'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell py-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-600">{tagline}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
          Facility operations that run cleanly, quietly, and consistently.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700">{positioning}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-md bg-slateBlue px-5 py-3 text-sm font-medium text-white hover:opacity-90">
            Request Coverage Review
          </Link>
          <Link href="/services" className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100">
            Explore Service Programs
          </Link>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {serviceCards.map((card) => (
            <article key={card.title} className="panel p-6">
              <h2 className="text-xl font-semibold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="panel p-8">
          <h2 className="text-2xl font-semibold text-slate-900">How it works</h2>
          <div className="mt-5 grid gap-4 text-sm text-slate-700 md:grid-cols-3">
            <div>
              <p className="font-medium text-slate-900">1. Intake</p>
              <p className="mt-2">We align on site profile, coverage windows, and restricted-area constraints.</p>
            </div>
            <div>
              <p className="font-medium text-slate-900">2. Coverage</p>
              <p className="mt-2">Teams execute checklist-based service routines aligned to your defined standards.</p>
            </div>
            <div>
              <p className="font-medium text-slate-900">3. Reporting</p>
              <p className="mt-2">Completion logs and variance notes are delivered in a clean, operationally useful format.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <h2 className="text-2xl font-semibold text-slate-900">Partner testimonials</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <blockquote className="panel p-6 text-sm text-slate-700">
            <p>“BlueMop introduced consistency into every night cycle. Our handoff quality improved immediately.”</p>
            <footer className="mt-4 font-medium text-slate-900">Alyse K., Workplace Operations Director · {partnerCompanies[0].name}</footer>
          </blockquote>
          <blockquote className="panel p-6 text-sm text-slate-700">
            <p>“The checklist structure reduced ambiguity and gave our teams predictable readiness each morning.”</p>
            <footer className="mt-4 font-medium text-slate-900">Marcus T., Program Manager · {partnerCompanies[1].name}</footer>
          </blockquote>
          <blockquote className="panel p-6 text-sm text-slate-700">
            <p>“Their access-aware procedures worked well around sensitive spaces and kept operations uninterrupted.”</p>
            <footer className="mt-4 font-medium text-slate-900">Rina P., Facilities Lead · {partnerCompanies[3].name}</footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
