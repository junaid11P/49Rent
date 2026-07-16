'use client';

import { ArrowRight, ShieldCheck, Sparkles, Clock3, Camera, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Ava', quote: 'The booking felt effortless and the gear arrived perfectly packed.' },
  { name: 'Noah', quote: 'The rental experience felt incredibly premium from start to finish.' },
  { name: 'Mina', quote: 'Fast, beautiful, and reliable. It felt like Apple-level service.' },
];

const pricingPoints = [
  'Single transparent rate of ₹49 per hour',
  'No confusing tier selection for customers',
  'Admin-managed inventory and details appear automatically',
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <nav className="glass sticky top-4 z-50 mb-8 flex items-center justify-between rounded-full px-4 py-3 text-sm sm:px-6">
          <div className="flex items-center gap-2 font-semibold tracking-[0.3em] text-sky-300">
            <Camera className="h-5 w-5" /> 49RENT
          </div>
          <div className="hidden items-center gap-6 text-slate-300 md:flex">
            <Link href="#pricing" className="transition hover:text-white">Pricing</Link>
            <Link href="#how-it-works" className="transition hover:text-white">How It Works</Link>
            <Link href="#accessories" className="transition hover:text-white">Accessories</Link>
            <Link href="#faq" className="transition hover:text-white">FAQ</Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="rounded-full border border-white/10 px-3 py-2 text-slate-300 transition hover:text-white">Login</Link>
          </div>
        </nav>

        <div className="hero-mesh relative flex flex-1 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-2xl shadow-sky-950/30 sm:p-10 lg:p-14">
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_60%)]" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm text-sky-200">
                <Sparkles className="h-4 w-4" /> Premium camera rentals, delivered with style
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                Rent DJI Action Camera
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-300 sm:text-xl">
                Capture your adventures without buying expensive cameras. Fast pickup, premium support, and cinematic gear ready in minutes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02]">
                  Book a Camera <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#pricing" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/12">
                  See Pricing <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Verified rentals</div>
                <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-400" /> 24/7 support</div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-400/30 via-transparent to-violet-500/30 blur-3xl" />
              <div className="glass relative overflow-hidden rounded-[2rem] p-6">
                <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
                  <span>Featured camera</span>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-300">In stock</span>
                </div>
                <div className="relative aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-slate-950 p-8">
                  <div className="absolute left-6 top-6 h-20 w-20 rounded-full border border-sky-400/30" />
                  <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full border border-white/10" />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sky-400/20 to-transparent" />
                  <div className="relative flex h-full items-center justify-center">
                    <div className="h-36 w-28 rounded-[1.5rem] border border-white/20 bg-gradient-to-b from-slate-100 to-slate-400 shadow-2xl" />
                  </div>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Starting from</p>
                    <p className="text-3xl font-semibold text-white">₹49/hour</p>
                  </div>
                  <button className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100">Book now</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {['Choose your camera', 'Book in minutes', 'Pick up or get delivery'].map((step, index) => (
            <div key={step} className="glass rounded-3xl p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/15 text-sm font-semibold text-sky-200">0{index + 1}</div>
              <h3 className="text-xl font-semibold text-white">{step}</h3>
              <p className="mt-2 text-sm text-slate-400">A smooth, premium booking experience from selection to delivery.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="glass rounded-[2rem] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Pricing</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">One simple rate, made effortless</h2>
              <p className="mt-3 text-sm text-slate-400">Every camera is rented at a clear hourly rate of ₹49, with a secure deposit and premium support ready when the admin adds inventory.</p>
            </div>
            <div className="rounded-[1.5rem] border border-sky-400/20 bg-sky-400/10 p-6 text-center">
              <p className="text-sm text-slate-300">Starting from</p>
              <p className="mt-2 text-4xl font-semibold text-white">₹49/hr</p>
              <Link href="/book" className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-medium text-slate-950">Reserve now</Link>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pricingPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-slate-300">{point}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="accessories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="glass rounded-[2rem] p-8 sm:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Accessories</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything needed to shoot immediately</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400">Tripods, mounts, batteries, and waterproof cases included for a complete creative setup.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {['Tripod', 'Extra battery', 'Waterproof case'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-slate-300">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Reviews</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Trusted by modern creators</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="glass rounded-3xl p-6">
              <p className="text-slate-200">“{review.quote}”</p>
              <p className="mt-4 font-medium text-white">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 49Rent. Premium camera rentals reimagined.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="#pricing" className="transition hover:text-white">Pricing</Link>
          <Link href="/products" className="transition hover:text-white">Products</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
          <Link href="/admin/login" className="transition hover:text-white">Admin Login</Link>
        </div>
      </footer>
    </main>
  );
}
