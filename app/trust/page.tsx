import Link from 'next/link';
import type { Metadata } from 'next';
import { BrandKit } from '@/components/brand-kit';

export const metadata: Metadata = {
  title: 'Trust Center',
  description: 'Security, compliance, and reliability posture for BlueMop Facility Services.',
  openGraph: {
    title: 'Trust Center | BlueMop Facility Services',
    description: 'Security, compliance, and reliability posture for BlueMop Facility Services.'
  }
};

const trustSections = [
  {
    title: 'Security',
    copy: 'Site access controls, credential handling discipline, and restricted-area sequencing define our service execution model.'
  },
  {
    title: 'Compliance',
    copy: 'Checklist alignment, periodic reviews, and documentation posture support structured internal audit readiness.'
  },
  {
    title: 'Reliability',
    copy: 'Coverage windows, staffing continuity, and handoff controls are designed to keep service steady across shifts.'
  },
  {
    title: 'Data Handling',
    copy: 'Service logs capture completion status and operational notes with basic retention guidance for routine reporting needs.'
  },
  {
    title: 'Responsible Use',
    copy: 'Code-of-conduct expectations and safety posture are communicated as baseline operating requirements for all teams.'
  }
];

export default function TrustCenterPage() {
  return (
    <div className="section-shell space-y-8">
      <section>
        <h1 className="text-4xl font-semibold text-slate-900">Trust Center</h1>
        <p className="mt-4 max-w-3xl text-slate-700">Operational trust is built with process clarity, service controls, and transparent reporting standards.</p>
      </section>

      <section className="panel p-6">
        <p className="text-sm uppercase tracking-wider text-slate-500">Uptime</p>
        <p className="mt-1 text-4xl font-semibold text-slate-900">99.99%</p>
        <p className="mt-1 text-sm text-slate-600">Reported quarterly</p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {trustSections.map((section) => (
          <article key={section.title} className="panel p-6">
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 text-sm text-slate-700">{section.copy}</p>
          </article>
        ))}
      </section>

      <section className="panel p-6">
        <h2 className="text-xl font-semibold text-slate-900">Service Standards</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Controlled entry is verified before restricted-zone tasks begin.</li>
          <li>Checklist completion is tracked before coverage closeout.</li>
          <li>Variance notes are recorded for unusual or blocked conditions.</li>
        </ul>
      </section>

      <section className="panel p-6">
        <h2 className="text-xl font-semibold text-slate-900">Policies</h2>
        <div className="mt-3 flex gap-4 text-sm font-medium text-slateBlue">
          <Link href="/trust/security" className="hover:underline">
            Security Policy
          </Link>
          <Link href="/trust/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </section>

      <BrandKit />
    </div>
  );
}
