import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="glass rounded-[2rem] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">This page is unavailable.</h1>
        <p className="mt-2 text-sm text-slate-400">The route you requested doesn’t exist yet.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-sky-500/90 px-4 py-3 text-sm font-medium text-white">Return home</Link>
      </div>
    </main>
  );
}
