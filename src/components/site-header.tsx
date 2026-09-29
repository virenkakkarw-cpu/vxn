"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { FoldableMegaMenu } from "./foldable-mega-menu";

export function SiteHeader() {
  const { items, open } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        {/* Top-Left: Hamburger trigger inside a thin-bordered box */}
        <button
          className="menu-trigger"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <span className="menu-line" />
          <span className="menu-line" />
        </button>

        {/* Right-side actions — exactly like the Zara screenshot */}
        <div className="header-actions">
          <button className="header-action search-action" onClick={() => setIsMenuOpen(true)}>
            SEARCH
          </button>
          <button className="header-action bag-action" onClick={open}>
            BAG&nbsp;&nbsp;[&nbsp;{items.length}&nbsp;]
          </button>
          <Link className="header-action" href="/story">LOG IN</Link>
          <Link className="header-action" href="/story#care">HELP</Link>
        </div>
      </header>

      <FoldableMegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
