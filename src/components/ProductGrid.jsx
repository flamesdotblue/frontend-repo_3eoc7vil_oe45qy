import { useMemo } from 'react';

const products = [
  {
    id: 'dbz-goku-ssj',
    name: 'Goku Super Saiyan Figure',
    price: 39.99,
    image:
      'https://images.unsplash.com/photo-1583939003579-730e438a10b2?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    series: 'Dragon Ball',
    character: 'Goku',
  },
  {
    id: 'pokemon-pikachu',
    name: 'Pikachu Collectible Figure',
    price: 24.99,
    image:
      'https://images.unsplash.com/photo-1549216964-5f250e0f0a4a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    series: 'Pokémon',
    character: 'Pikachu',
  },
  {
    id: 'ds-tanjiro',
    name: 'Tanjiro Kamado Figure',
    price: 49.99,
    image:
      'https://images.unsplash.com/photo-1610450949065-1f4c5fa4ac0f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    series: 'Demon Slayer',
    character: 'Tanjiro',
  },
  {
    id: 'naruto-uzumaki',
    name: 'Naruto Uzumaki Figure',
    price: 44.99,
    image:
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    series: 'Naruto',
    character: 'Naruto',
  },
  {
    id: 'dbz-vegeta',
    name: 'Vegeta Saiyan Prince',
    price: 42.99,
    image:
      'https://images.unsplash.com/photo-1618835962148-cf6b51e9c58f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    series: 'Dragon Ball',
    character: 'Vegeta',
  },
  {
    id: 'pokemon-charizard',
    name: 'Charizard Fire Burst',
    price: 59.99,
    image:
      'https://images.unsplash.com/photo-1645116782236-3df6a660ac92?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    series: 'Pokémon',
    character: 'Charizard',
  },
];

export default function ProductGrid({ onAddToCart }) {
  const bySeries = useMemo(() => {
    const groups = {};
    for (const p of products) {
      if (!groups[p.series]) groups[p.series] = [];
      groups[p.series].push(p);
    }
    return groups;
  }, []);

  return (
    <section id="products" className="relative py-16 sm:py-24 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Popular Figures</h2>
          <p className="text-sm text-white/70">High-quality, officially licensed, collector-approved.</p>
        </div>

        {Object.keys(bySeries).map((series) => (
          <div key={series} className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white/90">{series}</h3>
              <a href="#" className="text-sm text-amber-300 hover:text-amber-200">See all</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bySeries[series].map((p) => (
                <article
                  key={p.id}
                  className="group overflow-hidden rounded-2xl bg-zinc-900 border border-white/10"
                >
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white tracking-tight">{p.name}</h4>
                      <span className="text-amber-300 font-bold">${p.price.toFixed(2)}</span>
                    </div>
                    <p className="mt-1 text-xs text-white/60">{p.character} • {p.series}</p>
                    <button
                      onClick={() => onAddToCart(p)}
                      className="mt-4 w-full rounded-xl bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-400 hover:to-indigo-400 text-white font-semibold py-2.5 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
