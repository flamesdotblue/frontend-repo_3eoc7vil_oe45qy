import { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

export default function Navbar({ cartCount = 0, onCartToggle }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Series', href: '#collections' },
    { label: 'Characters', href: '#products' },
    { label: 'Categories', href: '#collections' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-white/90 hover:text-white"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={24} />
            </button>
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-gradient-to-tr from-rose-500 via-amber-400 to-indigo-500" />
              <span className="font-extrabold tracking-tight text-white text-lg">TheActionFigures</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <Search size={16} className="text-white/60" />
              <input
                type="text"
                placeholder="Search figures, series..."
                className="ml-2 bg-transparent text-sm outline-none text-white placeholder-white/50 w-56"
              />
            </div>
            <button
              onClick={onCartToggle}
              className="relative rounded-full p-2 text-white hover:bg-white/10 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 min-w-[20px] text-[10px] px-1.5 rounded-full bg-rose-500 text-white font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80">
          <div className="absolute right-4 top-4">
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full bg-white/10 text-white"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <div className="mt-20 px-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-lg font-semibold text-white/90"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-6 flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
              <Search size={18} className="text-white/60" />
              <input
                type="text"
                placeholder="Search figures, series..."
                className="bg-transparent text-sm outline-none text-white placeholder-white/50 w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
