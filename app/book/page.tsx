"use client";

import { useState } from 'react';
import { ArrowRight, Camera, CircleCheck, MapPin, ReceiptText, UploadCloud } from 'lucide-react';

const durations = ['4 Hours', '8 Hours', '24 Hours'];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [delivery, setDelivery] = useState<'pickup' | 'delivery'>('pickup');
  const [selectedDuration, setSelectedDuration] = useState('24 Hours');

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Booking flow</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Reserve your camera in minutes</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass rounded-[2rem] p-6">
          <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 p-4">
            <div>
              <p className="text-sm text-slate-400">Selected camera</p>
              <p className="text-lg font-semibold text-white">Item will appear after admin upload</p>
            </div>
            <div className="rounded-full bg-sky-400/10 p-3 text-sky-300"><Camera className="h-5 w-5" /></div>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Base rate</span>
                <span className="font-medium text-white">₹49/hour</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Security deposit</span>
                <span className="font-medium text-white">Pending admin setup</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Delivery charge</span>
                <span className="font-medium text-white">{delivery === 'delivery' ? '₹120' : '₹0'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-[2rem] p-6">
          <div className="mb-6 flex items-center gap-3 text-sm text-slate-400">
            <div className="rounded-full bg-sky-500/15 px-3 py-1 text-sky-200">Step {step} / 5</div>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-white">Choose pickup or delivery</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button onClick={() => setDelivery('pickup')} className={`rounded-2xl border p-4 text-left ${delivery === 'pickup' ? 'border-sky-400/40 bg-sky-400/10' : 'border-white/10 bg-white/6'}`}>
                  <p className="font-medium text-white">Pickup</p>
                  <p className="mt-1 text-sm text-slate-400">Collect from our studio at your convenience.</p>
                </button>
                <button onClick={() => setDelivery('delivery')} className={`rounded-2xl border p-4 text-left ${delivery === 'delivery' ? 'border-sky-400/40 bg-sky-400/10' : 'border-white/10 bg-white/6'}`}>
                  <p className="font-medium text-white">Home Delivery</p>
                  <p className="mt-1 text-sm text-slate-400">We deliver within your city at an added fee.</p>
                </button>
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setStep(2)} className="inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-4 py-3 text-sm font-medium text-white">Continue <ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold text-white">Select rental duration</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {durations.map((duration) => (
                  <button key={duration} onClick={() => setSelectedDuration(duration)} className={`rounded-2xl border px-4 py-3 text-left ${selectedDuration === duration ? 'border-sky-400/40 bg-sky-400/10 text-white' : 'border-white/10 bg-white/6 text-slate-300'}`}>
                    {duration}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => setStep(1)} className="rounded-full border border-white/10 px-4 py-3 text-sm text-slate-300">Back</button>
                <button onClick={() => setStep(3)} className="inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-4 py-3 text-sm font-medium text-white">Continue <ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold text-white">Customer details</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="Full Name" />
                <input className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="Phone" />
                <input className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="Email" />
                <input className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="Address" />
                <input className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="Landmark" />
                <input className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none" placeholder="Pincode" />
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => setStep(2)} className="rounded-full border border-white/10 px-4 py-3 text-sm text-slate-300">Back</button>
                <button onClick={() => setStep(4)} className="inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-4 py-3 text-sm font-medium text-white">Continue <ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-semibold text-white">Upload documents</h2>
              <div className="mt-6 rounded-[1.5rem] border border-dashed border-sky-400/30 bg-sky-400/8 p-8 text-center">
                <UploadCloud className="mx-auto h-10 w-10 text-sky-300" />
                <p className="mt-3 text-sm text-slate-300">Upload govt ID, selfie, and address proof</p>
                <button className="mt-4 rounded-full bg-white/10 px-4 py-3 text-sm text-white">Select files</button>
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => setStep(3)} className="rounded-full border border-white/10 px-4 py-3 text-sm text-slate-300">Back</button>
                <button onClick={() => setStep(5)} className="inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-4 py-3 text-sm font-medium text-white">Continue <ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-2xl font-semibold text-white">Payment</h2>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400"><span>UPI ID</span><span className="font-medium text-white">49rent@upi</span></div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/70 p-6 text-center text-sm text-slate-300">
                  <ReceiptText className="mx-auto h-8 w-8 text-sky-300" />
                  <p className="mt-3">Scan the QR or use the UPI ID to pay ₹1,299</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-emerald-300"><CircleCheck className="h-4 w-4" /> Payment submitted after you upload your screenshot.</div>
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => setStep(4)} className="rounded-full border border-white/10 px-4 py-3 text-sm text-slate-300">Back</button>
                <button className="rounded-full bg-emerald-500/90 px-4 py-3 text-sm font-medium text-white">Submit booking</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
