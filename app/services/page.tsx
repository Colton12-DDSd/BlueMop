import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Operational service programs from BlueMop Facility Services for controlled, multi-site commercial environments.',
  openGraph: {
    title: 'Services | BlueMop Facility Services',
    description: 'Operational service programs from BlueMop Facility Services for controlled, multi-site commercial environments.'
  }
};

const sections = [
  {
    title: 'After-Hours Reset Programs',
    body: 'Structured nightly service windows designed to restore common and priority spaces for next-day operational readiness.'
  },
  {
    title: 'Access-Controlled Coverage',
    body: 'Coverage models designed around approved credentials, escort rules, and restricted-area sequencing for secure entry workflows.'
  },
  {
    title: 'Standardized Cleaning Protocols',
    body: 'Task-level checklist architecture to normalize output quality and reduce site-to-site variation in service delivery.'
  },
  {
    title: 'Sensitive-Space Procedures',
    body: 'Purpose-built methods for NOC floors, executive zones, and controlled rooms with route constraints and handling guidance.'
  },
  {
    title: 'Reporting and Service Logs',
    body: 'Completion summaries, exception notes, and timestamped service logs to support internal review and operational follow-through.'
  },
  {
    title: 'Multi-Site Continuity',
    body: 'Unified operating model across distributed properties to keep quality benchmarks and shift transitions stable.'
  }
];

export default function ServicesPage() {
  return (
    <div className="section-shell space-y-8">
      <section>
        <h1 className="text-4xl font-semibold text-slate-900">Services</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          BlueMop services are intentionally standardized and operationally clear, with practical controls for access, consistency, and daily handoff quality.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="panel p-6">
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{section.body}</p>
          </article>
        ))}
      </section>

      <section className="panel p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Operational Workflow</h2>
        <div className="mt-6 grid gap-3 text-sm md:grid-cols-5">
          {['Request', 'Schedule', 'Access', 'Service', 'Report'].map((step, index) => (
            <div key={step} className="relative rounded-lg border border-slate-300 bg-white p-4 text-center text-slate-800">
              <p className="text-xs uppercase tracking-widest text-slate-500">Step {index + 1}</p>
              <p className="mt-1 font-medium">{step}</p>
              {index < 4 ? <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-slate-300 md:block" /> : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
