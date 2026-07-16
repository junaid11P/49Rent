import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Let’s build your next shoot</h1>
          <p className="mt-4 text-sm text-slate-400">Need help choosing gear or arranging delivery? We are here to guide you.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky-300" /> +91 98765 43210</div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-sky-300" /> hello@49rent.com</div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-sky-300" /> Bangalore, India</div>
          </div>
        </div>
        <div className="glass rounded-[2rem] p-8">
          <form className="space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="Name" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="Email" />
            <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="How can we help?" />
            <button className="rounded-full bg-sky-500/90 px-4 py-3 text-sm font-medium text-white">Send message</button>
          </form>
        </div>
      </div>
    </main>
  );
}
