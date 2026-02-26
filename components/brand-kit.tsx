export function BrandKit() {
  return (
    <section className="panel p-6">
      <h3 className="text-lg font-semibold text-slate-900">Brand Kit</h3>
      <div className="mt-4 grid gap-4 text-sm text-slate-700 md:grid-cols-3">
        <div>
          <p className="font-medium text-slate-900">Logo Usage</p>
          <p className="mt-1">Use the icon + wordmark lockup on clean white or light neutral backgrounds with generous padding.</p>
        </div>
        <div>
          <p className="font-medium text-slate-900">Black/White Colors</p>
          <p className="mt-1">Primary text: near-black slate. Surfaces: white. Dividers and UI accents: light gray borders.</p>
        </div>
        <div>
          <p className="font-medium text-slate-900">Typography Guidance</p>
          <p className="mt-1">Prefer system sans-serif typography, medium-to-bold section headers, and concise operational copy.</p>
        </div>
      </div>
    </section>
  );
}
