import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "THREADLINE — Everyday uniforms", description: "A considered apparel storefront for modern everyday uniforms." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><CartProvider><SiteHeader/>{children}<CartDrawer/><footer><span className="brand">THREADLINE<span>®</span></span><div><a href="/shop">Shop</a><a href="/story">About</a><a href="#">Instagram</a></div><p>© 2026 Threadline Studio. Made with intention.</p></footer></CartProvider></body></html>; }
