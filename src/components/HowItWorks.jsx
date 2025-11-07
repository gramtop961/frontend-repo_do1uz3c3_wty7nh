import React from 'react';
import { PenLine, Eye, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: PenLine,
    title: 'Write from Presence',
    text: 'Receive intuitive prompts designed to unlock your truth.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Eye,
    title: 'Reflect Deeply',
    text: 'Observe emotions, patterns, and synchronicities with awareness.',
    image:
      'https://images.unsplash.com/photo-1528747045269-390fe33c19d4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Transform Consciously',
    text: 'Turn your reflections into expansion, clarity, and action.',
    image:
      'https://images.unsplash.com/photo-1476370648495-3533f64427a2?q=80&w=1200&auto=format&fit=crop',
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-black py-24 text-violet-50" aria-label="How Guided Journaling Works">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">How Guided Journaling Works</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-violet-100/90">It’s not just journaling — it’s remembering who you truly are.</p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, text, image }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={image} alt={title} className="h-36 w-full object-cover opacity-80" loading="lazy" />
              <div className="p-6">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 blur-xl transition group-hover:scale-125" />
                <Icon className="h-7 w-7 text-violet-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-violet-100/90">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
