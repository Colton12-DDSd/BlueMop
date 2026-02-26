import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Policy',
  description: 'Placeholder security policy for BlueMop Facility Services Trust Center.',
  openGraph: {
    title: 'Security Policy | BlueMop Facility Services',
    description: 'Placeholder security policy for BlueMop Facility Services Trust Center.'
  }
};

export default function SecurityPolicyPage() {
  return (
    <div className="section-shell">
      <div className="panel p-8">
        <h1 className="text-3xl font-semibold text-slate-900">Security Policy (Placeholder)</h1>
        <p className="mt-4 text-sm leading-6 text-slate-700">
          This placeholder page represents future security policy details regarding site access controls, credential governance, and restricted-area handling.
        </p>
      </div>
    </div>
  );
}
