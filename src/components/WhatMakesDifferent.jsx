import React from 'react';

const WhatMakesDifferent = () => {
  return (
    <section className="relative bg-black py-24 text-violet-50" aria-label="What Makes Deva Mastery Different">
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">What Makes Deva Mastery Different</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-violet-100/90">
          While most journaling tools focus on productivity, Deva Mastery focuses on presence. Every session is guided to help you dive into the subtle layers of your consciousness — your emotions, beliefs, and energy — translating spiritual wisdom into real transformation.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop"
              alt="Ordinary journaling"
              className="h-40 w-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">Ordinary Journaling</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-violet-100/90">
                <li>Unstructured writing with minimal guidance</li>
                <li>Focus on tasks and productivity</li>
                <li>Inconsistent reflection and integration</li>
              </ul>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-700/20 via-fuchsia-600/20 to-amber-500/20">
            <img
              src="https://images.unsplash.com/photo-1540206276207-3af25c08abc4?q=80&w=1200&auto=format&fit=crop"
              alt="Deva Mastery experience"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">Deva Mastery Experience</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-violet-100/90">
                <li>Guided prompts rooted in ancient wisdom</li>
                <li>Presence-centered reflection and awareness</li>
                <li>Transformations supported by insights and practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
