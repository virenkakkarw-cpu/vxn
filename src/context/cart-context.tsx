"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";

type BagItem = Product & { size: string; id: string };
type Cart = { items: BagItem[]; isOpen: boolean; add: (product: Product, size: string) => void; remove: (id: string) => void; open: () => void; close: () => void };
const CartContext = createContext<Cart | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(() => ({
    items, isOpen,
    add: (product: Product, size: string) => { setItems((current) => [...current, { ...product, size, id: `${product.slug}-${Date.now()}` }]); setIsOpen(true); },
    remove: (id: string) => setItems((current) => current.filter((item) => item.id !== id)),
    open: () => setIsOpen(true), close: () => setIsOpen(false),
  }), [items, isOpen]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() { const cart = useContext(CartContext); if (!cart) throw new Error("useCart must be used inside CartProvider"); return cart; }
