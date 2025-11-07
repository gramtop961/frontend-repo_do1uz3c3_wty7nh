import React from 'react';

const testimonials = [
  {
    quote:
      'Deva Mastery helped me reconnect with myself after years of emotional numbness. It’s like having a spiritual guide whispering truth through every prompt.',
    author: 'Sophia R.'
  },
  {
    quote:
      'This journaling practice became my daily meditation. My mind is calmer, and I finally feel aligned.',
    author: 'Liam A.'
  },
  {
    quote:
      'Each session feels like a doorway into deeper presence. I’m more clear, loving, and intentional.',
    author: 'Maya K.'
  }
];

const Testimonials = () => {
  return (
    <section className="relative bg-[#0b0314] py-20 text-violet-50" aria-label="Testimonials">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">Experiences</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-violet-100/90">
              <p>“{t.quote}”</p>
              <footer className="mt-4 text-right text-violet-200">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
