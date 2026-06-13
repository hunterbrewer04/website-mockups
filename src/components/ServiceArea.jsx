"use client";
import { useEffect, useRef } from "react"
import { animate, inView, spring } from "motion"

const towns = [
  "Northgate", "Cedar Park", "Maple Heights", "Riverton", "Oakdale", "Lakeview"
];

export default function ServiceArea() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    // Animate left column
    if (leftRef.current) {
      const { stop } = inView(leftRef.current, () => {
        animate(leftRef.current,
          { opacity: [0, 1], transform: ["translateX(-16px)", "none"] },
          { easing: spring({ stiffness: 180, damping: 24 }), duration: 0.6 }
        )
      }, { margin: "-70px" })
      if (rightRef.current) {
        const { stop: stop2 } = inView(rightRef.current, () => {
          animate(rightRef.current,
            { opacity: [0, 1], transform: ["translateX(16px)", "none"] },
            { delay: 0.12, easing: spring({ stiffness: 180, damping: 24 }), duration: 0.6 }
          )
        }, { margin: "-70px" })
        return () => { stop(); stop2() }
      }
      return () => stop()
    }
  }, [])

  return (
    <section id="area" className="bw-sec" style={{ padding: "90px 22px" }}>
      <div className="bw-two-col" style={{
        maxWidth: 1180,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center"
      }}>
        {/* Left: Text */}
        <div ref={leftRef} style={{ opacity: 0 }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13, letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            fontWeight: 600
          }}>
            Where we work
          </div>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(28px, 5vw, 40px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--color-text-dark)",
            margin: "12px 0 0"
          }}>
            Proudly serving Greater Northgate.
          </h2>
          <p style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.55,
            margin: "14px 0 22px",
            maxWidth: 460
          }}>
            Family-owned and local for 15+ years. If you&apos;re nearby and don&apos;t see your town, just ask — we likely cover it.
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10
          }}>
            {towns.map(t => (
              <span key={t} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: 999,
                padding: "9px 16px",
                fontWeight: 600,
                fontSize: 14.5,
                color: "var(--color-text-dark)"
              }}>
                <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, stroke: "#2563EB", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Map placeholder */}
        <div ref={rightRef} style={{
          position: "relative",
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid var(--color-border)",
          background: "linear-gradient(140deg, #EAF1FB, #F1EEE8)",
          aspectRatio: "4/3",
          opacity: 0
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(14,34,53,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,34,53,.05) 1px, transparent 1px)",
            backgroundSize: "38px 38px"
          }} />
          <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%"
          }}>
            <path d="M0 180 C 90 150 130 210 210 175 C 280 145 330 200 400 165" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity=".55" />
          </svg>
          <span style={{ position: "absolute", left: "30%", top: "42%", width: 13, height: 13, borderRadius: "50%", background: "#2563EB", boxShadow: "0 0 0 6px rgba(37,99,235,.18)" }} />
          <span style={{ position: "absolute", left: "62%", top: "58%", width: 13, height: 13, borderRadius: "50%", background: "#2563EB", boxShadow: "0 0 0 6px rgba(37,99,235,.18)" }} />
          <span style={{ position: "absolute", left: "78%", top: "34%", width: 11, height: 11, borderRadius: "50%", background: "#0E2235", boxShadow: "0 0 0 5px rgba(14,34,53,.12)" }} />
          <span style={{
            position: "absolute",
            right: 14, bottom: 13,
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: ".05em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            background: "rgba(255,255,255,.8)",
            padding: "4px 9px",
            borderRadius: 6
          }}>map · greater northgate</span>
        </div>
      </div>
    </section>
  );
}
