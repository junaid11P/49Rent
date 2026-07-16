import Link from 'next/link';
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="glass w-full max-w-md rounded-[2rem] p-8">
        <div className="mb-6 flex items-center gap-2 text-sky-300">
          <LockKeyhole className="h-5 w-5" /> <span className="font-semibold tracking-[0.25em]">ADMIN</span>
        </div>
        <h1 className="text-3xl font-semibold text-white">Admin access</h1>
        <p className="mt-2 text-sm text-slate-400">Secure control for orders, products, and payments.</p>
        <form className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="Email" />
          <input className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="Password" type="password" />
          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-500/90 px-4 py-3 text-sm font-medium text-white">Authenticate <ArrowRight className="h-4 w-4" /></button>
        </form>
        <div className="mt-6 flex items-center gap-2 text-sm text-slate-400"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Protected with Supabase auth-ready flow</div>
        <Link href="/login" className="mt-6 block text-sm text-sky-300 hover:text-sky-200">Customer login</Link>
      </div>
    </main>
  );
}
