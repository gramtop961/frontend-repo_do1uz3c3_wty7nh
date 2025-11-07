import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-36">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-amber-200 bg-clip-text text-transparent">Awaken the power within</span>
          <br className="hidden sm:block" />
          through the art of guided journaling.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-violet-100/90 sm:text-lg">
          Discover a sacred space designed to help you reconnect with your inner self, release emotional blocks, and align with your higher purpose.
        </p>
        <div className="mt-10">
          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-800/40 transition hover:scale-[1.02] hover:shadow-violet-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
          >
            🔮 Start Your Journaling Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
