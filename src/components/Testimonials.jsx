import React from 'react';

const testimonials = [
  {
    quote:
      'Deva Mastery helped me reconnect with myself after years of emotional numbness. It’s like having a spiritual guide whispering truth through every prompt.',
    author: 'Sophia R.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    quote:
      'This journaling practice became my daily meditation. My mind is calmer, and I finally feel aligned.',
    author: 'Liam A.',
    avatar: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=400&auto=format&fit=crop',
  },
  {
    quote:
      'Each session feels like a doorway into deeper presence. I’m more clear, loving, and intentional.',
    author: 'Maya K.',
    avatar: 'https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=400&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-[#0b0314] py-24 text-violet-50" aria-label="Testimonials">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">Experiences</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-violet-100/90">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.author} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                <figcaption className="font-medium text-white">{t.author}</figcaption>
              </div>
              <blockquote className="mt-3 text-violet-100/90">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
