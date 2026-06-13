"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid #E7E3DB",
      WebkitBackdropFilter: "blur(16px)"
    }}>
      <div style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "0 22px",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20
      }}>
        {/* Logo */}
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{
            width: 34,
            height: 34,
            borderRadius: 9,
            background: "var(--color-accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(37,99,235,.28)"
          }}>
            <svg viewBox="0 0 24 24" style={{ width: 19, height: 19, stroke: "#fff", strokeWidth: 1.7, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
              <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
              <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
            </svg>
          </span>
          <span style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 19,
            color: "inherit",
            letterSpacing: "-0.01em"
          }}>
            Brightwork<span style={{ color: "var(--color-accent)" }}>.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="bw-hide-mobile" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <a href="#services" style={{ textDecoration: "none", color: "inherit", fontWeight: 500, fontSize: 15 }}>Services</a>
          <a href="#gallery" style={{ textDecoration: "none", color: "inherit", fontWeight: 500, fontSize: 15 }}>Gallery</a>
          <a href="#reviews" style={{ textDecoration: "none", color: "inherit", fontWeight: 500, fontSize: 15 }}>Reviews</a>
          <a href="#area" style={{ textDecoration: "none", color: "inherit", fontWeight: 500, fontSize: 15 }}>Service Area</a>
          <a href="#about" style={{ textDecoration: "none", color: "inherit", fontWeight: 500, fontSize: 15 }}>About</a>
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="tel:5552481900" className="bw-hide-mobile" style={{
            display: "flex", alignItems: "center", gap: 7, textDecoration: "none",
            color: "inherit", fontWeight: 600, fontSize: 15
          }}>
            <svg viewBox="0 0 24 24" style={{ width: 17, height: 17, stroke: "#2563EB", strokeWidth: 1.7, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (555) 248-1900
          </a>
          <a href="#contact" className="bw-hide-mobile" style={{
            textDecoration: "none", background: "var(--color-accent)", color: "#fff",
            fontWeight: 600, fontSize: 15, padding: "11px 19px", borderRadius: 11,
            boxShadow: "0 6px 16px rgba(37,99,235,.28)", transition: "background .2s, transform .2s"
          }}
          onMouseEnter={e => { e.target.style.background = "#1D4ED8"; e.target.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.target.style.background = "#2563EB"; e.target.style.transform = "none"; }}
          >
            Get Free Estimate
          </a>
          <button
            className="bw-only-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              background: "transparent", border: "1px solid #E7E3DB", borderRadius: 10,
              width: 42, height: 42, display: "none", alignItems: "center",
              justifyContent: "center", cursor: "pointer"
            }}>
            <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, stroke: "currentColor", strokeWidth: 1.8, fill: "none", strokeLinecap: "round" }}>
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bw-only-mobile" style={{
          display: "block", borderTop: "1px solid #E7E3DB", background: "#fff",
          padding: "14px 22px 20px"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              ["Services", "#services"],
              ["Gallery", "#gallery"],
              ["Reviews", "#reviews"],
              ["Service Area", "#area"],
              ["About", "#about"]
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{
                textDecoration: "none", color: "#0E2235", fontWeight: 500,
                fontSize: 16, padding: "11px 4px", borderBottom: "1px solid #F0EDE7"
              }}>{label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{
              textDecoration: "none", textAlign: "center", background: "var(--color-accent)",
              color: "#fff", fontWeight: 600, fontSize: 16, padding: 13,
              borderRadius: 11, marginTop: 10
            }}>Get Free Estimate</a>
          </div>
        </div>
      )}
    </nav>
  );
}
