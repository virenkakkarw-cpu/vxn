"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart-context";

const links = [{ href: "/shop", label: "Shop" }, { href: "/collections", label: "Collections" }, { href: "/journal", label: "Journal" }, { href: "/story", label: "Our story" }];

export function SiteHeader() {
  const pathname = usePathname(); const { items, open } = useCart();
  return <><div className="announcement">Free shipping across India on orders over ₹2,500 <span>•</span> Limited first drop now live</div><header className="site-header"><Link className="brand" href="/">THREADLINE<span>®</span></Link><nav>{links.map((link) => <Link key={link.href} className={pathname === link.href ? "active" : ""} href={link.href}>{link.label}</Link>)}</nav><div className="header-actions"><Link className="editor-link" href="/admin">Editor</Link><button className="bag-button" onClick={open}>Bag <b>{items.length}</b></button></div></header></>;
}
