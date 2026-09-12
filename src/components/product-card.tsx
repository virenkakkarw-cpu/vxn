"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { formatPrice, type Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart(); const [size, setSize] = useState("M");
  return <article className="product-card"><div className={`product-art ${product.tone}`}>{product.tag && <span className="tag">{product.tag}</span>}<div className={`garment ${product.shape}`}/><div className="quick-add"><div className="sizes">{["S", "M", "L", "XL"].map((option) => <button className={size === option ? "selected" : ""} key={option} onClick={() => setSize(option)}>{option}</button>)}</div><button onClick={() => add(product, size)}>Add to bag →</button></div></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><strong>{formatPrice(product.price)}</strong></div></article>;
}
