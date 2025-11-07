import React from 'react';

const AboutVision = () => {
  return (
    <section className="relative bg-black py-20 text-violet-50" aria-label="About the Vision">
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto h-16 w-16 animate-pulse rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 blur-[2px]" />
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">About the Vision</h2>
        <p className="mx-auto mt-4 max-w-3xl text-violet-100/90">
          Created by a collective of seekers and visionaries, Deva Mastery unites ancient spiritual teachings with modern technology to help you embody consciousness in your everyday life. Our mission is to awaken the potential of the human being — through awareness, reflection, and love.
        </p>
      </div>
    </section>
  );
};

export default AboutVision;
