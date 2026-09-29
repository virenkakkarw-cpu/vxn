"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState("Bespoke Atelier");

  const services = [
    {
      num: "01",
      title: "Bespoke Atelier & Made-to-Measure",
      tagline: "One-of-one silhouettes cut precisely to your frame and postural proportions.",
      details:
        "Every bespoke piece begins with an in-depth fitting session. We draft unique paper patterns specifically for your proportions, allowing custom selections from our curated archive of brushed cottons, heavyweight twills, and unbleached linens.",
      deliverables: ["Custom master pattern drafting", "Two dedicated fitting sessions", "Hand-finished buttonholes & bound seams"],
    },
    {
      num: "02",
      title: "Capsule Uniform Architecture",
      tagline: "A strategic wardrobe foundation: 8 to 12 pieces engineered for effortless daily rotation.",
      details:
        "A holistic service designed to eliminate decision fatigue. We analyze your weekly rhythms, work environments, and aesthetic sensibilities to curate a harmonious collection of tonal foundational garments yielding over 40 distinct outfit configurations.",
      deliverables: ["Wardrobe gap analysis", "10-piece interchangeable palette", "Printed lookbook & styling guide"],
    },
    {
      num: "03",
      title: "Textile Sourcing & Custom Fabric Weaving",
      tagline: "Direct partnership with ethical artisan mills and specialized Indian looms.",
      details:
        "We source certified organic raw cotton, hand-spun khadi weaves, and regenerative plant-dyed textiles directly from heritage weaving collectives. Available for private label commissions and bespoke volume requirements.",
      deliverables: ["Ethical mill certification", "Custom GSM specification (180–420 GSM)", "Natural botanical dye options"],
    },
    {
      num: "04",
      title: "Archival Restoration & Garment Reconditioning",
      tagline: "Extending the lifespan of treasured garments through meticulous craft.",
      details:
        "Good clothes are meant to age gracefully. We offer sashiko-inspired reinforcement, invisible mending, collar replacements, natural over-dyeing, and structural re-tailoring so your favourite garments stay in rotation indefinitely.",
      deliverables: ["Structural seam & lining repair", "Hand-darned textile re-weaving", "Eco-friendly tone refresh"],
    },
    {
      num: "05",
      title: "Private Studio Consultations & Fit Trials",
      tagline: "Intimate one-on-one appointments to experience hand-feel, drape, and proportions.",
      details:
        "Step into our studio for an uninterrupted tactile trial. Experience how various fabric weights fall on the body, test drop-shoulder proportions, and receive unbiased guidance from our master cutters.",
      deliverables: ["60-minute private studio access", "Fabric swatch ring to keep", "Complimentary refreshment & tailoring assessment"],
    },
  ];

  const handleServiceInquiry = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    const text = encodeURIComponent(
      `Hello THREADLINE Studio, I would like to inquire about your service: "${serviceTitle}".`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <main className="zara-editorial-page">
      {/* ========================================================
          HERO SECTION: REPLICATING IMAGE 2
          - Centered portrait fashion editorial
          - "The Fold·er" watermark
          - Giant bold statement typography overlapping the canvas and photo
          - Inverted / dual-tone effect: black on white margins, white on photo
          - Bottom pill indicator & smooth scroll arrow
         ======================================================== */}
      <section className="zara-hero-section">
        {/* Top bar inside hero context if needed */}
        <div className="hero-top-meta">
          <span className="hero-issue-tag">EDITORIAL ISSUE / VOL. 01</span>
          <span className="hero-scroll-hint">SCROLL TO DISCOVER ↓</span>
        </div>

        {/* Central Hero Stage */}
        <div className="hero-stage">
          {/* Centered Image Container */}
          <div className="hero-photo-frame">
            {/* "The Fold·er" Badge in top-left over the image */}
            <div className="hero-folder-badge">
              <span>The Fold·er</span>
            </div>

            {/* Editorial Fashion Model Image */}
            <div className="hero-image-wrap">
              <Image
                src="/images/zara-reference-hero-crop.jpg"
                alt="Maureen Adim wearing brown trench coat in Zara The Fold-er editorial"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 700px"
                className="hero-img-element"
              />
            </div>

            {/* Bottom Slider Pill Indicator */}
            <div className="hero-bottom-slider">
              <div className="slider-pill" />
            </div>
          </div>

          {/* Giant Bold Statement Headline
              Spans across the entire layout:
              Over the white page edges and right across the central image.
              Styled with tight grotesque tracking and mix-blend / dual contrast */}
          <div className="hero-statement-overlay" aria-label="I want my style to reflect my personality before anything else">
            <h1 className="zara-poster-headline">
              <span className="headline-row row-1">I want my style to</span>
              <span className="headline-row row-2">reflect my personality</span>
              <span className="headline-row row-3">before anything else</span>
            </h1>
          </div>

          {/* Right Bottom Navigation Arrow to Section 1 */}
          <a
            href="#what-we-are"
            className="hero-arrow-btn"
            aria-label="Scroll to What We Are section"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ========================================================
          SECTION 1: WHAT WE ARE
         ======================================================== */}
      <section id="what-we-are" className="editorial-content-section section-what-we-are">
        <div className="section-container">
          <div className="editorial-meta-header">
            <span className="section-index">01 / IDENTITY</span>
            <span className="section-studio-stamp">THREADLINE ATELIER</span>
          </div>

          <div className="editorial-split-grid">
            <div className="grid-left-col">
              <h2 className="editorial-display-heading">
                An independent clothing studio shaping <em>modern everyday uniforms.</em>
              </h2>
              <p className="editorial-lead-para">
                We believe clothing should never overpower the person wearing it. It should frame your character, endure your daily rhythms, and speak with quiet conviction.
              </p>
            </div>

            <div className="grid-right-col">
              <div className="identity-manifesto-box">
                <p>
                  THREADLINE was conceived around a single, rigorous premise: the garments that matter most are rarely the loudest. They are the considered essentials you pull from your closet automatically—engineered with subtle structure, balanced proportions, and exceptional hand-feel.
                </p>
                <p>
                  Rooted in small-batch craftsmanship in India, we blend architectural pattern drafting with honest heavyweight textiles. No seasonal gimmicks. No disposable novelty. Only enduring forms built for the hours between appointments, departures, and quiet afternoons.
                </p>
              </div>

              <div className="identity-stats-grid">
                <div className="stat-card">
                  <strong>240+ GSM</strong>
                  <span>Heavyweight pure cottons and custom structural twills</span>
                </div>
                <div className="stat-card">
                  <strong>0% WASTE</strong>
                  <span>Small-batch cutting cycles with zero inventory disposal</span>
                </div>
                <div className="stat-card">
                  <strong>LIFETIME</strong>
                  <span>Repair commitment to keep your heirloom garments in rotation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: WHAT WE DO
         ======================================================== */}
      <section id="what-we-do" className="editorial-content-section section-what-we-do">
        <div className="section-container">
          <div className="editorial-meta-header">
            <span className="section-index">02 / CRAFT & METHODOLOGY</span>
            <span className="section-studio-stamp">ENGINEERED FORM</span>
          </div>

          <div className="section-intro-block">
            <h2 className="editorial-display-heading">
              Form, weight, and considered silhouettes <em>made to repeat.</em>
            </h2>
            <p className="editorial-subheading-copy">
              We design every piece through three deliberate disciplines, ensuring every seam and proportion serves purpose.
            </p>
          </div>

          <div className="pillars-cards-grid">
            <article className="pillar-card">
              <div className="pillar-num">01</div>
              <h3 className="pillar-title">Weight & Tactile Form</h3>
              <p className="pillar-body">
                Weight changes everything. We utilize dense 240–380 GSM organic cottons, washed canva, and compact brushed twills that drape with clean architectural lines and soften beautifully across years of wear.
              </p>
              <div className="pillar-tag-list">
                <span>Dense Weave</span>
                <span>Pre-Shrunk</span>
                <span>Natural Hand-Feel</span>
              </div>
            </article>

            <article className="pillar-card highlight-card">
              <div className="pillar-num">02</div>
              <h3 className="pillar-title">Pattern Engineering</h3>
              <p className="pillar-body">
                We re-draft classic silhouettes for fluid movement. Relaxed shoulder pitches, generous chest blocks, and balanced lengths remove rigidity, allowing our pieces to bridge masculine structure and effortless drape.
              </p>
              <div className="pillar-tag-list">
                <span>Drop Shoulder</span>
                <span>Ergonomic Sleeve</span>
                <span>Balanced Break</span>
              </div>
            </article>

            <article className="pillar-card">
              <div className="pillar-num">03</div>
              <h3 className="pillar-title">Small-Batch Realization</h3>
              <p className="pillar-body">
                We deliberately cap production quantities. Working closely with master tailors and specialized heritage weavers across India enables obsessive quality control, bound interior seams, and zero landfill waste.
              </p>
              <div className="pillar-tag-list">
                <span>Hand-Inspected</span>
                <span>Fair Atelier Wages</span>
                <span>Traceable Mills</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: OUR VISION
         ======================================================== */}
      <section id="our-vision" className="editorial-content-section section-our-vision">
        <div className="section-container">
          <div className="editorial-meta-header">
            <span className="section-index">03 / MANIFESTO</span>
            <span className="section-studio-stamp">THE PHILOSOPHY</span>
          </div>

          <div className="vision-poster-wrapper">
            <blockquote className="vision-quote">
              &ldquo;I want my style to reflect my personality before anything else.&rdquo;
            </blockquote>
            <p className="vision-attribution">— Maureen Adim & THREADLINE Design Manifesto</p>
          </div>

          <div className="vision-columns-grid">
            <div className="vision-col">
              <h4>The Anti-Trend Wardrobe</h4>
              <p>
                The modern fashion landscape pushes continuous novelty at the expense of genuine identity. Our vision is to restore confidence in repetition. When a piece is cut right, weighted right, and crafted with intention, wearing it two days in a row is an act of clarity, not compromise.
              </p>
            </div>
            <div className="vision-col">
              <h4>Fluidity Over Labels</h4>
              <p>
                We do not believe in rigid gender constraints or occasion-specific uniforms. An overshirt should work over a dress in the morning and paired with work trousers at night. We build pieces that adapt to how you feel on any given day.
              </p>
            </div>
            <div className="vision-col">
              <h4>Material Honesty</h4>
              <p>
                Synthetics mimic luxury on the rack; natural fibers prove their worth over years of life. We only work with unbleached organic cottons, natural botanical dyes, and resilient plant-based twills that develop an irreplaceable patina with age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: ALL OUR SERVICES
         ======================================================== */}
      <section id="all-our-services" className="editorial-content-section section-all-services">
        <div className="section-container">
          <div className="editorial-meta-header">
            <span className="section-index">04 / ALL SERVICES</span>
            <span className="section-studio-stamp">STUDIO CAPABILITIES</span>
          </div>

          <div className="section-intro-block">
            <h2 className="editorial-display-heading">
              Tailored solutions for considered wardrobes and <em>bespoke commissions.</em>
            </h2>
            <p className="editorial-subheading-copy">
              Explore our comprehensive suite of bespoke tailoring, wardrobe architecture, and archival preservation services.
            </p>
          </div>

          {/* Interactive Service Accordion / Cards List */}
          <div className="services-accordion-list">
            {services.map((service, idx) => {
              const isExpanded = activeService === idx;
              return (
                <div
                  key={service.num}
                  className={`service-item-row ${isExpanded ? "expanded" : ""}`}
                >
                  <div
                    className="service-row-header"
                    onClick={() => setActiveService(isExpanded ? null : idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveService(isExpanded ? null : idx);
                      }
                    }}
                  >
                    <span className="service-row-num">{service.num}</span>
                    <div className="service-row-title-block">
                      <h3 className="service-row-title">{service.title}</h3>
                      <p className="service-row-tagline">{service.tagline}</p>
                    </div>
                    <button
                      className="service-toggle-icon"
                      aria-label={isExpanded ? "Collapse service details" : "Expand service details"}
                    >
                      {isExpanded ? "—" : "+"}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="service-row-content">
                      <p className="service-detailed-text">{service.details}</p>

                      <div className="service-deliverables">
                        <h4>Scope & Deliverables:</h4>
                        <ul>
                          {service.deliverables.map((item, i) => (
                            <li key={i}>
                              <span className="bullet-point">✳</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="service-action-bar">
                        <button
                          className="service-inquire-btn"
                          onClick={() => handleServiceInquiry(service.title)}
                        >
                          Inquire about {service.title} <span>→</span>
                        </button>
                        <span className="service-note">Available globally via virtual & studio consultations</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Consultation Contact Box */}
          <div className="services-inquiry-banner">
            <div>
              <h3>Have a bespoke project or private commission?</h3>
              <p>We consult directly with private clients, wardrobe directors, and architectural studios.</p>
            </div>
            <button
              className="banner-contact-btn"
              onClick={() => handleServiceInquiry("Custom Commission Consultation")}
            >
              Direct WhatsApp Inquiry <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer rendered by RootLayout */}
    </main>
  );
}

