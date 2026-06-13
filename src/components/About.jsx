"use client";
import { useEffect, useRef } from "react"
import { animate, inView, scroll, spring } from "motion"

const benefits = [
  {
    title: "Licensed & fully insured",
    desc: "Peace of mind built in — we carry full liability and workers' comp coverage.",
    chip: "#EAF0FB",
    accent: "#2563EB"
  },
  {
    title: "10-year workmanship warranty",
    desc: "We stand behind our work. If anything peels, cracks, or fades prematurely, we'll make it right.",
    chip: "#EAF6EE",
    accent: "#16A34A"
  },
  {
    title: "Same crew, start to finish",
    desc: "No rotating subs. The painters who prep your home are the ones who put the final coat on.",
    chip: "#FEF3C7",
    accent: "#D97706"
  },
  {
    title: "Spotless cleanup every day",
    desc: "We treat your home like ours. Floors covered, furniture protected, and a full tidy before we leave.",
    chip: "#F3E8FF",
    accent: "#7C3AED"
  }
];

export default function About() {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    // Fade in both columns when scrolled into view with slight stagger
    const { stop } = inView(el, () => {
      if (leftRef.current) {
        animate(leftRef.current,
          { opacity: [0, 1], transform: ["translateX(-20px)", "none"] },
          { delay: 0.05, easing: spring({ stiffness: 180, damping: 24 }), duration: 0.65 }
        )
      }
      if (rightRef.current) {
        animate(rightRef.current,
          { opacity: [0, 1], transform: ["translateX(20px)", "none"] },
          { delay: 0.15, easing: spring({ stiffness: 180, damping: 24 }), duration: 0.65 }
        )
      }
    }, { margin: "-80px" })

    return () => stop?.()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="bw-sec" style={{ padding: "0 22px 100px" }}>
      <div className="bw-two-col" style={{
        maxWidth: 1180,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
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
            Why Brightwork
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
            The difference is in the details.
          </h2>
          <p style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.55,
            margin: "14px 0 24px",
            maxWidth: 480
          }}>
            We treat your home like our own — careful prep, clean lines, and a crew that shows up on time and tidies up before they leave.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 13, minHeight: 44 }}>
                <span style={{
                  marginTop: 1,
                  width: 26, height: 26,
                  flex: "none",
                  borderRadius: 8,
                  background: b.chip,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, stroke: b.accent, strokeWidth: 2.4, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "var(--color-text-dark)"
                  }}>{b.title}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.5, marginTop: 2 }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image + Stats */}
        <div ref={rightRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, opacity: 0 }}>
          <div style={{
            gridColumn: "1 / -1",
            position: "relative",
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid var(--color-border)",
            aspectRatio: "16/10",
            backgroundImage: "url(/assets/47f95ed4-b825-494e-88f3-d837d22b371b.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(14,34,53,0) 55%, rgba(14,34,53,.38))"
            }} />
            <span style={{
              position: "absolute",
              left: 14, bottom: 12,
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 12,
              color: "#fff",
              background: "rgba(14,34,53,.45)",
              backdropFilter: "blur(4px)",
              padding: "5px 12px",
              borderRadius: 999,
              WebkitBackdropFilter: "blur(4px)"
            }}>Our crew on site</span>
          </div>
          <div style={{
            background: "var(--color-dark-secondary)",
            borderRadius: 18,
            padding: 22,
            color: "#fff"
          }}>
            <div style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 38px)",
              letterSpacing: "-0.02em"
            }}>98%</div>
            <div style={{ fontSize: "clamp(12px, 1.4vw, 14px)", color: "#AAB6C6", marginTop: 2, lineHeight: 1.4 }}>
              of projects finished on schedule
            </div>
          </div>
          <div style={{
            background: "var(--color-accent)",
            borderRadius: 18,
            padding: 22,
            color: "#fff"
          }}>
            <div style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 38px)",
              letterSpacing: "-0.02em"
            }}>10-yr</div>
            <div style={{ fontSize: "clamp(12px, 1.4vw, 14px)", color: "#D5E2FB", marginTop: 2, lineHeight: 1.4 }}>
              workmanship warranty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
