"use client";
import { useEffect, useRef } from "react"
import { animate, inView, spring } from "motion"

const trustItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "#7FA8F0", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Licensed & Insured"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "#7FA8F0", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    label: "10-Year Warranty"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "#7FA8F0", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M20 7l-8-4-8 4m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    label: "15+ Years Local"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "#7FA8F0", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    label: "200+ 5★ Reviews"
  }
];

export default function TrustStrip() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const { stop } = inView(el, () => {
      const items = el.querySelectorAll('[data-trust-item]')
      items.forEach((item, i) => {
        animate(item,
          { opacity: [0, 1], transform: ["translateY(8px)", "none"] },
          { delay: 0.05 + i * 0.08, easing: spring({ stiffness: 200, damping: 24 }), duration: 0.5 }
        )
      })
    }, { margin: "-40px" })

    return () => stop?.()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: "var(--color-dark-secondary)" }}>
      <div className="bw-trust-grid" style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "26px 22px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20
      }}>
        {trustItems.map((item, i) => (
          <div key={i} data-trust-item style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifyContent: "center",
            padding: "6px 0",
            minHeight: 44,
            opacity: 0
          }}>
            <span style={{ color: "#7FA8F0", display: "flex", flexShrink: 0 }}>{item.icon}</span>
            <span style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "clamp(13px, 1.5vw, 15px)",
              fontFamily: "var(--font-heading)",
              whiteSpace: "nowrap"
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
