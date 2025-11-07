import React from 'react';

const EssenceSection = () => {
  return (
    <section className="relative w-full bg-[#0b0314] py-20 text-violet-50" aria-label="Essence of Deva Mastery">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">The Essence of Deva Mastery</h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-violet-100/90">
          Deva Mastery is more than a journaling tool — it’s a bridge between spirituality and self-awareness. Every entry becomes a dialogue with your soul, guided by deep prompts inspired by ancient wisdom, Human Design, and the laws of energy.
        </p>
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center">
          <div className="h-40 w-40 animate-pulse rounded-full bg-gradient-to-tr from-violet-500/40 via-fuchsia-400/30 to-amber-300/30 blur-xl" />
          <div className="-ml-8 h-28 w-28 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-gradient-to-tr from-fuchsia-500/40 via-violet-400/30 to-amber-200/30 blur-xl" />
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
