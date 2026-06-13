"use client";
import { useState } from "react";

const filterCategories = ["All", "Interior", "Exterior", "Cabinets", "Commercial"];

const galleryItems = [
  { cat: "Interior", label: "Living Room", img: "468962f8-7aa9-400d-aa30-c8b1f50296b1.jpg" },
  { cat: "Exterior", label: "Colonial", img: "cfc678aa-89bf-4274-9a20-4b477f9a49bd.jpg" },
  { cat: "Interior", label: "Kitchen", img: "0a902bcf-0008-4480-923a-dc604f240c44.jpg" },
  { cat: "Cabinets", label: "Kitchen Refresh", img: "3e7dfc12-e26c-4f6d-86ed-d2d68e93990e.jpg" },
  { cat: "Commercial", label: "Office", img: "b296ec68-64db-4e57-857b-904884a601f4.jpg" },
  { cat: "Exterior", label: "Ranch", img: "4519e2cb-2e56-4c37-925b-58f2835e937d.jpg" },
  { cat: "Interior", label: "Bedroom", img: "5a50e85d-ca75-4d3f-9a20-5b56d8a292d5.jpg" },
  { cat: "Cabinets", label: "Bath Vanity", img: "57e5eeee-c6db-4c91-967d-c27d22b1b8a4.jpg" },
  { cat: "Exterior", label: "Victorian", img: "689668d3-83f8-4b1a-9522-2951d4b1cc9c.jpg" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [baPosition, setBaPosition] = useState(50);

  const handleBAMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setBaPosition(Math.max(5, Math.min(95, x)));
  };

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(g => g.cat === activeFilter);

  return (
    <section id="gallery" className="bw-sec" style={{ padding: "100px 22px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13, letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              fontWeight: 600
            }}>
              Our work
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(28px, 5vw, 42px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--color-text-dark)",
              margin: "12px 0 0"
            }}>
              Recent projects.
            </h2>
          </div>
          {/* Filter pills — horizontally scrollable on mobile */}
          <div className="bw-scroll-x" style={{
            display: "flex",
            gap: 9,
            flexWrap: "nowrap",
            paddingBottom: 4
          }}>
            {filterCategories.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                padding: "11px 20px",
                minWidth: 44,
                minHeight: 44,
                borderRadius: 999,
                border: f === activeFilter ? "1px solid #2563EB" : "1px solid #E7E3DB",
                background: f === activeFilter ? "#2563EB" : "#fff",
                color: f === activeFilter ? "#fff" : "#0E2235",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all .2s",
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
                whiteSpace: "nowrap",
                flexShrink: 0
              }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Before / After slider */}
        <div style={{
          marginTop: 34,
          background: "#fff",
          border: "1px solid var(--color-border)",
          borderRadius: 20,
          padding: 18,
          boxShadow: "0 20px 50px -34px rgba(14,34,53,.4)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, margin: "4px 6px 14px" }}>
            <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "#2563EB", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
              <path d="M21 15V6a2 2 0 0 0-2-2h-9" />
              <path d="m9 4-6 6 6 6" />
              <path d="M3 9v9a2 2 0 0 0 2 2h9" />
            </svg>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(13px, 2vw, 15px)", color: "var(--color-text-dark)" }}>
              Drag to see the transformation
            </span>
          </div>
          <div
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              handleBAMove(e);
            }}
            onPointerMove={(e) => {
              if (e.buttons === 1) handleBAMove(e);
            }}
            // Touch event handler for mobile
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.touches[0];
              const x = ((touch.clientX - rect.left) / rect.width) * 100;
              setBaPosition(Math.max(5, Math.min(95, x)));
            }}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "21/9",
              borderRadius: 14,
              overflow: "hidden",
              cursor: "ew-resize",
              userSelect: "none",
              touchAction: "none",
              WebkitUserSelect: "none"
            }}>
            {/* After (base) */}
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/assets/42e6b591-50db-44c9-8ed2-6b745298346a.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <span style={{
                position: "absolute",
                right: 14, bottom: 13,
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: ".04em",
                textTransform: "uppercase",
                color: "var(--color-text-dark)",
                background: "rgba(255,255,255,.86)",
                padding: "5px 11px",
                borderRadius: 999
              }}>After</span>
            </div>
            {/* Before (clipped) */}
            <div style={{
              position: "absolute",
              inset: 0,
              clipPath: `inset(0 ${100 - baPosition}% 0 0)`,
              backgroundImage: "url(/assets/42e6b591-50db-44c9-8ed2-6b745298346a.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(.72) brightness(.66) contrast(1.04)"
            }}>
              <span style={{
                position: "absolute",
                left: 14, bottom: 13,
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: ".04em",
                textTransform: "uppercase",
                color: "#fff",
                background: "rgba(14,34,53,.68)",
                padding: "5px 11px",
                borderRadius: 999
              }}>Before</span>
            </div>
            {/* Handle */}
            <div style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${baPosition}%`,
              width: 3,
              background: "#fff",
              boxShadow: "0 0 0 4px rgba(255,255,255,.3)",
              transform: "translateX(-50%)",
              pointerEvents: "none"
            }}>
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#fff",
                boxShadow: "0 4px 14px rgba(14,34,53,.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "#0E2235", strokeWidth: 2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="m15 18-6-6 6-6" />
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="bw-gallery-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
          marginTop: 18
        }}>
          {filtered.map((g, i) => (
            <div key={i} style={{
              position: "relative",
              aspectRatio: "4/3",
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid #E7E3DB",
              backgroundImage: `url(/assets/${g.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform .25s, box-shadow .25s",
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 16px 40px -20px rgba(14,34,53,.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <span style={{
                position: "absolute",
                left: 12, top: 12,
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 11.5,
                letterSpacing: ".03em",
                textTransform: "uppercase",
                color: "var(--color-text-dark)",
                background: "rgba(255,255,255,.85)",
                padding: "4px 10px",
                borderRadius: 999
              }}>{g.cat}</span>
              <span style={{
                position: "absolute",
                left: 12, bottom: 11,
                fontFamily: "var(--font-mono)",
                fontSize: 10.5,
                letterSpacing: ".04em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                background: "rgba(255,255,255,.8)",
                padding: "4px 9px",
                borderRadius: 6
              }}>{g.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
