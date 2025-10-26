import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Gradient overlays should not block interaction with 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 h-full flex items-center">
        <div className="text-white space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300 ring-1 ring-white/20">
            New drops weekly
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            TheActionFigures
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-indigo-400">
              Anime Figures & Collectibles
            </span>
          </h1>
          <p className="max-w-2xl text-white/80 text-base sm:text-lg">
            Discover officially licensed figures from Dragon Ball, Pokémon, Demon Slayer, Naruto and more. Curated picks, limited editions, and the thrill of the hunt—delivered fast.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#collections" className="inline-flex items-center rounded-full bg-rose-500 hover:bg-rose-400 text-white font-semibold px-5 py-3 transition-colors">
              Shop Collections
            </a>
            <a href="#products" className="inline-flex items-center rounded-full border border-white/20 hover:border-white/40 text-white font-semibold px-5 py-3 transition-colors">
              Browse Figures
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
