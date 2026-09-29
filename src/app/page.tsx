"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const GOOGLE_FONTS = [
  { label: "Inter (Sans)", value: "'Inter', sans-serif" },
  { label: "Playfair Display (Serif)", value: "'Playfair Display', serif" },
  { label: "Space Mono (Mono)", value: "'Space Mono', monospace" },
  { label: "Bebas Neue (Display)", value: "'Bebas Neue', sans-serif" },
  { label: "Cormorant Garamond", value: "'Cormorant Garamond', serif" },
  { label: "DM Serif Display", value: "'DM Serif Display', serif" },
];

const TESTIMONIALS = [
  { name: "Ritu Jain, Ahmedabad", text: "VIXN offers premium fashion without the premium price tag. It's one of my favourite Indian brands.", stars: 5 },
  { name: "Sandeep Khanna, Pune", text: "I've been wearing VIXN for over five years, and it's consistently delivered on quality, comfort, and style.", stars: 5 },
  { name: "Ananya Gupta, Hyderabad", text: "From everyday essentials to smart casuals, VIXN always has something that fits my style perfectly.", stars: 5 },
  { name: "Rohit Sharma, Delhi", text: "I've been shopping from VIXN for years. The quality never disappoints, and the fit is always perfect.", stars: 5 },
];

export default function Home() {
  const [tIdx, setTIdx] = useState(0);
  const testimonialsPerPage = 4;

  const [editMode, setEditMode] = useState(false);
  const [editLine1, setEditLine1] = useState("I want my style to");
  const [editLine2, setEditLine2] = useState("reflect my personality");
  const [editLine3, setEditLine3] = useState("before anything else");
  const [editFont, setEditFont] = useState(GOOGLE_FONTS[0].value);
  const [editSpacing, setEditSpacing] = useState(-2);
  const [editBadge, setEditBadge] = useState("The Fold\u00b7er");
  const [editPhoto, setEditPhoto] = useState("/images/zara-reference-hero-crop.jpg");
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setEditPhoto(URL.createObjectURL(file));
  };

  return (
    <main className="vixn-page">

      {/* ── HERO: Zara split layout with VIXN logo overlay ── */}
      <section className="vixn-hero">
        <div className="vixn-hero-inner">
          <div className="vixn-hero-left">
            <Image src="/images/street-editorial-hero.jpg" alt="VIXN editorial" fill priority sizes="50vw" className="vixn-hero-img" />
          </div>
          <div className="vixn-hero-right">
            <Image src="/images/editorial-fashion-1.jpg" alt="VIXN close-up" fill priority sizes="50vw" className="vixn-hero-img" />
            <div className="vixn-logo-overlay" aria-label="VIXN">VIXN</div>
          </div>
        </div>
        <div className="vixn-hero-bottom">
          <span className="vixn-view-label">VIEW</span>
          <span className="vixn-view-num active">1</span>
          <span className="vixn-view-num">2</span>
        </div>
        <Link href="#editorial" className="vixn-hero-arrow" aria-label="Scroll">→</Link>
      </section>

      {/* ── EDITORIAL: fully editable section ── */}
      <section id="editorial" className="editorial-section">
        <button className={`edit-toggle-btn${editMode ? " active" : ""}`} onClick={() => setEditMode(!editMode)}>
          {editMode ? "✕ Close Editor" : "✏ Edit Section"}
        </button>

        {editMode && (
          <div className="edit-panel">
            <div className="edit-panel-header">Editorial Section Editor</div>
            <div className="edit-panel-grid">
              <label>Badge Text<input type="text" value={editBadge} onChange={(e) => setEditBadge(e.target.value)} /></label>
              <label>Line 1<input type="text" value={editLine1} onChange={(e) => setEditLine1(e.target.value)} /></label>
              <label>Line 2<input type="text" value={editLine2} onChange={(e) => setEditLine2(e.target.value)} /></label>
              <label>Line 3<input type="text" value={editLine3} onChange={(e) => setEditLine3(e.target.value)} /></label>
              <label>Font Family
                <select value={editFont} onChange={(e) => setEditFont(e.target.value)}>
                  {GOOGLE_FONTS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
              </label>
              <label>Letter Spacing: {editSpacing}px
                <input type="range" min={-8} max={20} value={editSpacing} onChange={(e) => setEditSpacing(Number(e.target.value))} />
              </label>
              <label>Replace Photo
                <button className="photo-upload-btn" onClick={() => photoInputRef.current?.click()}>Choose Image</button>
                <input ref={photoInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handlePhotoChange} />
              </label>
            </div>
          </div>
        )}

        <div className="editorial-canvas">
          <div className="editorial-badge">{editBadge}</div>
          <div className="editorial-photo-frame">
            {editPhoto.startsWith("blob:") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={editPhoto} alt="Editorial" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <Image src={editPhoto} alt="VIXN editorial" fill sizes="(max-width:768px) 100vw, 700px" className="editorial-img" />
            )}
          </div>
          <div className="editorial-headline" style={{ fontFamily: editFont, letterSpacing: `${editSpacing}px` }}>
            <span className="eh-row">{editLine1}</span>
            <span className="eh-row">{editLine2}</span>
            <span className="eh-row">{editLine3}</span>
          </div>
          <div className="editorial-pill-wrap"><div className="editorial-pill" /></div>
        </div>
      </section>

      {/* ── SHOP CTA STRIP ── */}
      <section className="shop-cta-strip">
        <div className="shop-cta-inner">
          <Link href="/shop" className="shop-cta-link">NEW ARRIVALS</Link>
          <span className="cta-divider">·</span>
          <Link href="/collections" className="shop-cta-link">WOMEN</Link>
          <span className="cta-divider">·</span>
          <Link href="/collections" className="shop-cta-link">MEN</Link>
          <span className="cta-divider">·</span>
          <Link href="/collections" className="shop-cta-link">ACCESSORIES</Link>
        </div>
      </section>

      {/* ── CUSTOMER TESTIMONIALS ── */}
      <section className="testimonials-section">
        <h2 className="testimonials-heading">CUSTOMER TESTIMONIALS</h2>
        <div className="testimonials-track">
          <button className="testimonial-arrow left" onClick={() => setTIdx((p) => Math.max(0, p - 1))} disabled={tIdx === 0}>&#8249;</button>
          <div className="testimonials-cards">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`testimonial-card${i >= tIdx && i < tIdx + testimonialsPerPage ? " visible" : " hidden"}`}>
                <div className="testimonial-quote-mark">&#8220;</div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            ))}
          </div>
          <button className="testimonial-arrow right" onClick={() => setTIdx((p) => Math.min(TESTIMONIALS.length - testimonialsPerPage, p + 1))} disabled={tIdx >= TESTIMONIALS.length - testimonialsPerPage}>&#8250;</button>
        </div>
      </section>

    </main>
  );
}
