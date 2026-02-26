import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact BlueMop Facility Services for commercial coverage planning.',
  openGraph: {
    title: 'Contact | BlueMop Facility Services',
    description: 'Contact BlueMop Facility Services for commercial coverage planning.'
  }
};

export default function ContactPage() {
  return (
    <div className="section-shell">
      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h1 className="text-4xl font-semibold text-slate-900">Contact</h1>
          <p className="mt-4 text-slate-700">
            Share your site profile and service goals. We&apos;ll return a recommended coverage model tailored to your operating windows.
          </p>
          <p className="mt-6 text-sm text-slate-700">
            Direct contact: <a className="font-medium text-slateBlue hover:underline" href="mailto:contact@bluemop.example">contact@bluemop.example</a>
          </p>
        </section>

        <section className="panel p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-slate-800">Name</label>
              <input id="name" type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-800">Email</label>
              <input id="email" type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium text-slate-800">Company</label>
              <input id="company" type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="location" className="text-sm font-medium text-slate-800">Site Location</label>
              <input id="location" type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-slate-800">Message</label>
              <textarea id="message" rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <button type="button" className="rounded-md bg-slateBlue px-4 py-2 text-sm font-medium text-white">Submit Request (UI only)</button>
          </form>
        </section>
      </div>
    </div>
  );
}
