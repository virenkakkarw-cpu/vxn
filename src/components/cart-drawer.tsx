"use client";

import { formatPrice } from "@/lib/catalog";
import { useCart } from "@/context/cart-context";

export function CartDrawer() {
  const { items, isOpen, close, remove } = useCart(); const total = items.reduce((sum, item) => sum + item.price, 0);
  const checkout = () => { if (!items.length) return; const order = items.map((item) => `• ${item.name} (${item.size}) — ${formatPrice(item.price)}`).join("\n"); window.open(`https://wa.me/?text=${encodeURIComponent(`Hello THREADLINE, I would like to order:\n${order}\n\nTotal: ${formatPrice(total)}`)}`, "_blank"); };
  return <><button aria-label="Close bag" className={`cart-overlay ${isOpen ? "open" : ""}`} onClick={close}/><aside aria-hidden={!isOpen} className={`cart-drawer ${isOpen ? "open" : ""}`}><div className="cart-title"><h2>Your bag <span>{items.length}</span></h2><button onClick={close} aria-label="Close bag">×</button></div><div className="cart-items">{items.length === 0 ? <p className="empty">Your bag is waiting for its first good thing.</p> : items.map((item) => <div className="cart-item" key={item.id}><div><strong>{item.name}</strong><small>Size {item.size}</small></div><div><strong>{formatPrice(item.price)}</strong><button onClick={() => remove(item.id)}>Remove</button></div></div>)}</div><div className="cart-footer"><div><span>Subtotal</span><strong>{formatPrice(total)}</strong></div><p>Taxes and shipping calculated at checkout.</p><button className="button full-button" onClick={checkout}>Order on WhatsApp <span>→</span></button></div></aside></>;
}
