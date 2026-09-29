"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";

type Props = { isOpen: boolean; onClose: () => void };

export function FoldableMegaMenu({ isOpen, onClose }: Props) {
  const { items, open: openCart } = useCart();
  const overlayRef = useRef<HTMLDivElement>(null);

  /* Escape to close */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* All site pages — these are real separate routes, not anchors */
  const pages = [
    { label: "HOME", href: "/" },
    { label: "SHOP", href: "/shop" },
    { label: "COLLECTIONS", href: "/collections" },
    { label: "JOURNAL", href: "/journal" },
    { label: "OUR STORY", href: "/story" },
  ];

  const shopCategories = [
    "THE NEW",
    "ESSENTIALS",
    "OVERSHIRTS",
    "TROUSERS",
    "TEES",
    "ACCESSORIES",
  ];

  const collections = [
    "EVERYDAY FORMS",
    "OFF CLOCK",
    "WORK UNIFORM",
    "CAPSULE EDIT",
  ];

  return (
    <div
      ref={overlayRef}
      className={`mega-overlay${isOpen ? " open" : ""}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div className="mega-inner">
        {/* ─── TOP BAR ─── */}
        <div className="mega-top">
          {/* Close X inside blue-bordered box (Zara style) */}
          <button className="mega-close" onClick={onClose} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
              <line x1="2" y1="2" x2="18" y2="18" />
              <line x1="18" y1="2" x2="2" y2="18" />
            </svg>
          </button>

          {/* Brand */}
          <Link href="/" onClick={onClose} className="mega-brand">
            THREADLINE
          </Link>

          {/* Right actions (mirrored from top bar) */}
          <div className="mega-actions">
            <span className="mega-action">SEARCH</span>
            <button
              className="mega-action"
              onClick={() => { onClose(); openCart(); }}
            >
              BAG&nbsp;&nbsp;[&nbsp;{items.length}&nbsp;]
            </button>
            <Link href="/story" onClick={onClose} className="mega-action">LOG IN</Link>
            <Link href="/story#care" onClick={onClose} className="mega-action">HELP</Link>
          </div>
        </div>

        {/* ─── BODY: multi-column nav ─── */}
        <div className="mega-body">
          {/* Col 1 — Main pages (big, bold, like Zara WOMAN / MAN / KIDS) */}
          <nav className="mega-col mega-pages">
            <ul>
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} onClick={onClose}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 2 — Numbered index */}
          <div className="mega-col mega-index">
            <div className="index-row">
              <span className="idx-num">|01|</span>
              <span className="idx-label">NEW IN</span>
            </div>
            <div className="index-row pink">
              <span className="idx-num">|02|</span>
              <span className="idx-label">SPECIAL PRICES</span>
            </div>
            <div className="index-row">
              <span className="idx-num">|03|</span>
              <span className="idx-label">SELECTED FOR YOU</span>
            </div>
            <div className="index-row">
              <span className="idx-num">|04|</span>
              <span className="idx-label">COLLECTION</span>
            </div>
          </div>

          {/* Col 3 — Shop sub-links */}
          <div className="mega-col mega-sub">
            {shopCategories.map((c) => (
              <Link key={c} href="/shop" onClick={onClose}>{c}</Link>
            ))}
          </div>

          {/* Col 4 — Collections sub-links */}
          <div className="mega-col mega-sub">
            {collections.map((c) => (
              <Link key={c} href="/collections" onClick={onClose}>{c}</Link>
            ))}
          </div>
        </div>

        {/* ─── BOTTOM PILL ─── */}
        <div className="mega-bottom">
          <div className="pill" />
        </div>
      </div>
    </div>
  );
}
