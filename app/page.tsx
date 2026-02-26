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
    text: 'Nightly coverage windows restore high-traffic areas and shared workspaces before occupancy resumes.'
  },
  {
    title: 'Access-Controlled Cleaning',
    text: 'Credential-aware procedures are aligned to approved routes, escorts, and controlled entry requirements.'
  },
  {
    title: 'Standardized Checklists',
    text: 'Site checklists define task scope, quality thresholds, and handoff points for consistent service output.'
  }
];

const siteTypes = [
  { name: 'Offices', icon: '▦' },
  { name: 'Controlled Rooms', icon: '◫' },
  { name: 'Executive Floors', icon: '▤' },
  { name: 'Multi-Tenant Buildings', icon: '▧' }
];

const serviceLogRows = [
  ['22:04', 'North Tower L2', 'Checklist A-12', 'Completed'],
  ['22:37', 'Executive Corridor', 'Touchpoint reset', 'Completed'],
  ['23:09', 'NOC Perimeter', 'Restricted sweep', 'Completed'],
  ['23:42', 'Dock & Receiving', 'Spill response', 'Closed'],
  ['00:11', 'South Lobby', 'Glass + floor pass', 'Completed']
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell py-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-600">{tagline}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
          Facilities coverage built for consistency across every shift.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700">{positioning}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-md bg-accentBlue px-5 py-3 text-sm font-medium text-white hover:opacity-90">
            Request Coverage
          </Link>
          <Link href="/contact" className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100">
            Get a Service Quote
          </Link>
          <Link href="/contact" className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100">
            Add a Site
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
          <h2 className="text-2xl font-semibold text-slate-900">Site Types</h2>
          <div className="mt-5 grid gap-4 text-sm text-slate-700 md:grid-cols-4">
            {siteTypes.map((site) => (
              <div key={site.name} className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xl text-accentBlue" aria-hidden="true">
                  {site.icon}
                </p>
                <p className="mt-2 font-medium text-slate-900">{site.name}</p>
              </div>
            ))}
          </div>
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
              <p className="mt-2">Teams execute checklist-based routines tied to floor plans and occupancy cutoffs.</p>
            </div>
            <div>
              <p className="font-medium text-slate-900">3. Service Logs</p>
              <p className="mt-2">Timestamped service logs capture completion status, variances, and shift close notes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="panel p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Service Log Preview</h2>
          <p className="mt-2 text-sm text-slate-600">Example overnight report card for one active coverage window.</p>
          <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
            <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <p>Time</p>
              <p>Zone</p>
              <p>Task</p>
              <p>Status</p>
            </div>
            {serviceLogRows.map((row) => (
              <div key={row.join('-')} className="grid grid-cols-4 border-t border-slate-200 px-4 py-3 text-sm text-slate-700">
                <p className="font-mono text-xs text-slate-600">{row[0]}</p>
                <p>{row[1]}</p>
                <p>{row[2]}</p>
                <p className="font-medium text-accentBlue">{row[3]}</p>
              </div>
            ))}
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
