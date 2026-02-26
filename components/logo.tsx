import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="BlueMop Facility Services Home">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 bg-white">
        <svg viewBox="0 0 32 32" className="h-5 w-5 text-slateBlue" fill="none" aria-hidden="true">
          <rect x="5" y="6" width="22" height="4" rx="2" fill="currentColor" />
          <rect x="8" y="13" width="16" height="4" rx="2" fill="currentColor" opacity="0.75" />
          <path d="M12 21h8v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" fill="currentColor" opacity="0.55" />
        </svg>
      </span>
      <span className="text-sm font-semibold tracking-wide text-slate-900">BlueMop Facility Services</span>
    </Link>
  );
}
