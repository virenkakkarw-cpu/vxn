"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="vixn-footer">

      {/* ── Social row ── */}
      <div className="footer-social-row">
        <p className="footer-social-label">Our Social Networks</p>
        <div className="footer-social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Quick actions bar ── */}
      <div className="footer-actions-bar">
        <div className="footer-action-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <div>
            <strong>My Account</strong>
            <span>Sign-in to your account</span>
          </div>
        </div>
        <div className="footer-action-divider" />
        <div className="footer-action-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div>
            <strong>Store Locator</strong>
            <span>Find your nearest store</span>
          </div>
        </div>
        <div className="footer-action-divider" />
        <div className="footer-action-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          <div>
            <strong>Start a Chat</strong>
            <span>For general enquiries</span>
          </div>
        </div>
      </div>

      {/* ── Four column link grid ── */}
      <div className="footer-links-grid">
        <div className="footer-links-col">
          <span className="footer-col-heading">Help</span>
          <Link href="/faq">Frequently Asked Questions</Link>
          <Link href="/track">Track Order</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/returns">Easy Returns</Link>
        </div>
        <div className="footer-links-col">
          <span className="footer-col-heading">Shopping With Us</span>
          <Link href="/gift-cards">eGift Cards</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/shipping">Shipping Policy</Link>
          <Link href="/refunds">Returns &amp; Refunds</Link>
        </div>
        <div className="footer-links-col">
          <span className="footer-col-heading">Departments</span>
          <Link href="/collections/men">Men</Link>
          <Link href="/collections/women">Women</Link>
          <Link href="/collections/boys">Boys</Link>
          <Link href="/collections/accessories">Accessories</Link>
          <Link href="/collections/clearance">Clearance</Link>
        </div>
        <div className="footer-links-col">
          <span className="footer-col-heading">More From VIXN</span>
          <Link href="/about" className="footer-accent-link">The Company</Link>
          <Link href="/careers" className="footer-accent-link">Careers</Link>
          <Link href="/franchise" className="footer-accent-link">Franchise Enquiry</Link>
        </div>
      </div>

      {/* ── Newsletter ── */}
      <div className="footer-newsletter-strip">
        <p className="footer-newsletter-label">Stay in the loop — new drops, exclusive offers.</p>
        <form
          className="footer-newsletter-form"
          onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
        >
          <input type="email" placeholder="Enter your email" required aria-label="Email for newsletter" />
          <button type="submit">Subscribe</button>
        </form>
        {subscribed && <p className="footer-subscribed-msg">You are on the list. ✓</p>}
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom-bar">
        <p>© 2026 VIXN Ltd. All rights reserved.</p>
        <div className="footer-bottom-divider-pill" />
        <p className="footer-powered">Powered By <span>Cart Potato</span></p>
      </div>

    </footer>
  );
}
