import { Activity, DollarSign, Package, Users } from 'lucide-react';

const cards = [
  { title: 'Revenue', value: '₹1.2M', icon: DollarSign },
  { title: 'Orders', value: '248', icon: Package },
  { title: 'Customers', value: '89', icon: Users },
  { title: 'Active rentals', value: '14', icon: Activity },
];

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Admin dashboard</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Operations at a glance</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="glass rounded-[1.5rem] p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">{card.title}</p>
                <div className="rounded-full bg-sky-400/10 p-2 text-sky-300"><Icon className="h-4 w-4" /></div>
              </div>
              <p className="mt-6 text-3xl font-semibold text-white">{card.value}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-[2rem] p-6">
          <h2 className="text-xl font-semibold text-white">Recent activity</h2>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            {['Payment verified for order #1042', 'New document submitted', 'Delivery marked as in progress'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4">{item}</div>
            ))}
          </div>
        </div>
        <div className="glass rounded-[2rem] p-6">
          <h2 className="text-xl font-semibold text-white">Pending approvals</h2>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            {['3 payments pending', '2 document reviews', '1 delivery update'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
