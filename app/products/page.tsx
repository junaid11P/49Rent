import { ArrowRight, BadgeCheck, Box, Camera, MapPin, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';

const cameras = [
  {
    id: 1,
    name: 'Coming soon',
    price: '₹49/hr',
    deposit: '₹5,000',
    badge: 'Pending upload',
    description: 'Camera details will appear here once the admin uploads the product information.',
  },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Products</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Premium gear for every kind of shoot</h1>
        </div>
        <Link href="/book" className="inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-5 py-3 text-sm font-medium text-white">
          Book Now <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {cameras.map((camera) => (
          <article key={camera.id} className="glass rounded-[2rem] p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-sky-200">{camera.badge}</span>
              <div className="flex items-center gap-1 text-amber-300"><Star className="h-4 w-4" /> —</div>
            </div>
            <div className="aspect-[4/3] rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-6">
              <div className="flex h-full items-center justify-center">
                <Camera className="h-20 w-20 text-slate-300" />
              </div>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white">{camera.name}</h2>
            <p className="mt-3 text-sm text-slate-400">{camera.description}</p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between"><span className="flex items-center gap-2"><Box className="h-4 w-4" /> Rental rate</span><span className="font-medium text-white">{camera.price}</span></div>
              <div className="flex items-center justify-between"><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Security deposit</span><span className="font-medium text-white">{camera.deposit}</span></div>
              <div className="flex items-center justify-between"><span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Pickup available</span><span className="font-medium text-white">Today</span></div>
            </div>
            <Link href="/book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-slate-950">Reserve this item <ArrowRight className="h-4 w-4" /></Link>
          </article>
        ))}
      </div>
    </main>
  );
}
