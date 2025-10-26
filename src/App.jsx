import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import ProductGrid from './components/ProductGrid';
import { X } from 'lucide-react';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]); // {id, name, price, image, qty}

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );
  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty * item.price, 0),
    [cart]
  );

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 },
      ];
    });
    setCartOpen(true);
  };

  const increment = (id) => setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const decrement = (id) =>
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(0, i.qty - 1) } : i))
        .filter((i) => i.qty > 0)
    );
  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar cartCount={cartCount} onCartToggle={() => setCartOpen(true)} />
      <main className="pt-16">
        <Hero />
        <Collections />
        <ProductGrid onAddToCart={handleAddToCart} />
      </main>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setCartOpen(false)}
            aria-hidden
          />
          <aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-zinc-950 border-l border-white/10 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-bold">Your Cart</h3>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/15"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4 space-y-4">
              {cart.length === 0 && (
                <p className="text-white/70">Your cart is empty. Add some figures!</p>
              )}
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 border border-white/10 rounded-xl p-3 bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold leading-tight">{item.name}</p>
                        <p className="text-sm text-amber-300 font-bold mt-0.5">${item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-white/60 hover:text-white"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-2">
                      <button onClick={() => decrement(item.id)} className="px-2 py-1 text-white/80">-</button>
                      <span className="min-w-[24px] text-center text-sm">{item.qty}</span>
                      <button onClick={() => increment(item.id)} className="px-2 py-1 text-white/80">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/80">Subtotal</span>
                <span className="font-bold text-amber-300">${cartTotal.toFixed(2)}</span>
              </div>
              <button
                disabled={cart.length === 0}
                className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-400 hover:to-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3"
              >
                Checkout
              </button>
              <p className="text-[11px] text-white/50 mt-2">Taxes and shipping calculated at checkout.</p>
            </div>
          </aside>
        </div>
      )}

      <footer className="bg-black border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} TheActionFigures. All rights reserved.</p>
          <div className="text-xs text-white/50">
            Built with love for anime collectors.
          </div>
        </div>
      </footer>
    </div>
  );
}
