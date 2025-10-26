const collections = [
  {
    title: 'Dragon Ball',
    image:
      'https://images.unsplash.com/photo-1620497518298-7f6b4bfbcb9d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '#products',
    accent: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Pokémon',
    image:
      'https://images.unsplash.com/photo-1603346133929-24265de0f3b9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    href: '#products',
    accent: 'from-yellow-400 to-rose-400',
  },
  {
    title: 'Demon Slayer',
    image:
      'https://images.unsplash.com/photo-1623003703990-89bb8a5dd314?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    href: '#products',
    accent: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Naruto',
    image:
      'https://images.unsplash.com/photo-1606214172832-8cc6ad0579a4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    href: '#products',
    accent: 'from-amber-500 to-orange-500',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative py-16 sm:py-24 bg-gradient-to-b from-black via-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Collections</h2>
          <a href="#products" className="text-sm font-semibold text-amber-300 hover:text-amber-200">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collections.map((col) => (
            <a
              key={col.title}
              href={col.href}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              <img
                src={col.image}
                alt={`${col.title} collection cover`}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold tracking-tight">{col.title}</h3>
                  <p className="text-xs text-white/70">Shop now</p>
                </div>
                <div className={`h-8 w-8 rounded-full bg-gradient-to-tr ${col.accent} ring-2 ring-white/20`} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
