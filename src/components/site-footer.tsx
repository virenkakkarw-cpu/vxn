"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="zara-editorial-footer">
      <div className="footer-top-row">
        <div className="footer-brand-col">
          <span className="footer-brand-title">THREADLINE<span>®</span></span>
          <p>Everyday uniforms and bespoke wardrobe architecture. Built for the in-between.</p>
        </div>

        <div className="footer-links-col">
          <span className="footer-col-heading">HOMEPAGE</span>
          <Link href="/#what-we-are">What We Are</Link>
          <Link href="/#what-we-do">What We Do</Link>
          <Link href="/#our-vision">Our Vision</Link>
          <Link href="/#all-our-services">All Services</Link>
        </div>

        <div className="footer-links-col">
          <span className="footer-col-heading">STUDIO & STORE</span>
          <Link href="/shop">Store Catalogue</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/journal">Journal Notes</Link>
          <Link href="/story">Studio Story</Link>
        </div>

        <div className="footer-newsletter-col">
          <span className="footer-col-heading">UPDATED OCCASIONALLY</span>
          <p>Subscribe for rare field notes and private studio releases.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
            className="footer-email-form"
          >
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              required
              aria-label="Email for updates"
            />
            <button type="submit" aria-label="Submit newsletter subscription">→</button>
          </form>
          {subscribed && <p className="newsletter-confirm">Thank you. You are on the private dispatch list.</p>}
        </div>
      </div>

      <div className="footer-bottom-row">
        <p>© 2026 THREADLINE STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="footer-legal-links">
          <Link href="/story#care">CARE & REPAIR</Link>
          <Link href="/story#why">MANIFESTO</Link>
          <Link href="/admin">STUDIO CMS</Link>
        </div>
      </div>
    </footer>
  );
}
