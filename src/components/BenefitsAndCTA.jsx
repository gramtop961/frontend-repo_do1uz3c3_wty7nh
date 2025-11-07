import React from 'react';
import { Moon, Flame, Leaf, Zap, Sparkle, Mail } from 'lucide-react';

const benefits = [
  { icon: Moon, text: 'Connect with your higher self' },
  { icon: Flame, text: 'Release emotional and energetic blocks' },
  { icon: Leaf, text: 'Find peace and clarity through mindful writing' },
  { icon: Zap, text: 'Track your spiritual growth over time' },
  { icon: Sparkle, text: 'Access personalized reflections and wellness practices' },
];

const BenefitsAndCTA = () => {
  return (
    <section className="relative bg-[#0b0314] py-20 text-violet-50" aria-label="Benefits and Final Call">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">Key Benefits</h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mt-1 rounded-full bg-violet-600/20 p-2">
                <Icon className="h-5 w-5 text-violet-200" />
              </div>
              <p className="text-violet-100/90">{text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-violet-700/20 via-fuchsia-600/20 to-amber-500/20 p-8 text-center backdrop-blur">
          <p className="text-xl font-medium text-white">
            “The answers you seek are already within you.”
          </p>
          <p className="mt-1 text-violet-100/80">All you need is space to listen.</p>

          {/* Email capture */}
          <form id="signup" className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email to begin"
              className="flex-1 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white placeholder-violet-200/60 outline-none focus:border-fuchsia-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-800/40 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
            >
              <Mail className="h-4 w-4" /> Begin Now
            </button>
          </form>

          <p className="mt-4 text-xs text-violet-200/60">We’ll notify you with early access and reflective prompts.</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsAndCTA;
