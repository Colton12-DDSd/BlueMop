import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Placeholder privacy policy for BlueMop Facility Services Trust Center.',
  openGraph: {
    title: 'Privacy Policy | BlueMop Facility Services',
    description: 'Placeholder privacy policy for BlueMop Facility Services Trust Center.'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="section-shell">
      <div className="panel p-8">
        <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy (Placeholder)</h1>
        <p className="mt-4 text-sm leading-6 text-slate-700">
          This placeholder page represents future privacy details related to service logs, retention expectations, and communication handling.
        </p>
      </div>
    </div>
  );
}
