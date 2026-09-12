"use client";

import { useEffect, useState } from "react";
import { products } from "@/lib/catalog";

const key = "threadline-admin-draft";
export default function AdminPage() {
  const [title, setTitle] = useState("Built for the in-between."); const [description, setDescription] = useState("Considered essentials with an easy silhouette, made for the hours that don't fit in a calendar."); const [status, setStatus] = useState("Changes stay in this browser until a hosted CMS is connected.");
  useEffect(() => { const draft = localStorage.getItem(key); if (draft) { const saved = JSON.parse(draft) as { title: string; description: string }; setTitle(saved.title); setDescription(saved.description); } }, []);
  const save = () => { localStorage.setItem(key, JSON.stringify({ title, description })); setStatus("Saved locally in this browser."); };
  return <main className="admin-page"><aside><p className="eyebrow">Store manager</p><h1>Edit your<br/><em>storefront.</em></h1><p>This is a React admin interface. Connect its forms to Supabase after you choose the database account and team access rules.</p></aside><section><div className="admin-heading"><div><p className="eyebrow">Homepage</p><h2>Content editor</h2></div><span>{status}</span></div><div className="form-panel"><label>Homepage headline<input value={title} onChange={(event) => setTitle(event.target.value)}/></label><label>Homepage description<textarea rows={4} value={description} onChange={(event) => setDescription(event.target.value)}/></label><label>Hero image <input value="/images/hero-editorial.png" readOnly/></label><button className="button" onClick={save}>Save draft <span>→</span></button></div><div className="admin-heading products-heading"><div><p className="eyebrow">Catalogue</p><h2>Current products</h2></div><span>{products.length} products</span></div><div className="admin-products">{products.map((product) => <div key={product.slug}><strong>{product.name}</strong><span>{product.detail}</span><b>₹{product.price.toLocaleString("en-IN")}</b></div>)}</div></section></main>;
}
