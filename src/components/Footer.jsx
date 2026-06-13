"use client";
import { useEffect, useRef } from "react"
import { animate, inView, spring } from "motion"

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return

    const { stop } = inView(el, () => {
      animate(el,
        { opacity: [0, 1], transform: ["translateY(12px)", "none"] },
        { easing: spring({ stiffness: 160, damping: 24 }), duration: 0.55 }
      )
    }, { margin: "-40px" })

    return () => stop?.()
  }, [])

  return (
    <footer ref={footerRef} style={{
      background: "var(--color-dark-secondary)",
      padding: "50px 22px 30px",
      paddingBottom: "calc(30px + var(--safe-bottom))",
      opacity: 0
    }}>
      <div className="bw-footer-grid" style={{
        maxWidth: 1180,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
        gap: 40
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              width: 34, height: 34, borderRadius: 9,
              background: "var(--color-accent)",
              display: "flex", alignItems: "center", justifyContent: "center"
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
              color: "#fff"
            }}>Brightwork</span>
          </div>
          <p style={{
            fontSize: 15,
            color: "#AAB6C6",
            margin: "16px 0 0",
            maxWidth: 280,
            lineHeight: 1.55
          }}>
            Professional painting you can trust. Family-owned, licensed &amp; insured, serving Greater Northgate for 15+ years.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <SocialIcon icon={
              <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "#fff", strokeWidth: 1.7, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            } />
            <SocialIcon icon={
              <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "#fff", strokeWidth: 1.7, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            } />
            <SocialIcon icon={
              <svg viewBox="0 0 24 24" style={{ width: 17, height: 17, stroke: "#fff", strokeWidth: 1.7, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8a4 4 0 1 1-1.2-2.8" />
              </svg>
            } />
          </div>
        </div>

        {/* Company */}
        <div>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            color: "#fff",
            fontSize: 15,
            marginBottom: 14
          }}>Company</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#gallery">Gallery</FooterLink>
            <FooterLink href="#reviews">Reviews</FooterLink>
            <FooterLink href="#about">About us</FooterLink>
          </div>
        </div>

        {/* Services */}
        <div>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            color: "#fff",
            fontSize: 15,
            marginBottom: 14
          }}>Services</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <FooterLink href="#services">Interior</FooterLink>
            <FooterLink href="#services">Exterior</FooterLink>
            <FooterLink href="#services">Cabinet refinishing</FooterLink>
            <FooterLink href="#services">Commercial</FooterLink>
          </div>
        </div>

        {/* Service Area */}
        <div>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            color: "#fff",
            fontSize: 15,
            marginBottom: 14
          }}>Service Area</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <span style={{ color: "#AAB6C6", fontSize: 14.5 }}>Northgate · Cedar Park</span>
            <span style={{ color: "#AAB6C6", fontSize: 14.5 }}>Maple Heights · Riverton</span>
            <span style={{ color: "#AAB6C6", fontSize: 14.5 }}>Oakdale · Lakeview</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 1180,
        margin: "40px auto 0",
        paddingTop: 24,
        borderTop: "1px solid rgba(255,255,255,.12)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 12
      }}>
        <span style={{ fontSize: 13.5, color: "var(--color-text-light)" }}>
          &copy; 2026 Brightwork Painting Co. &middot; Lic. #BW-104872 &middot; Bonded &amp; Insured
        </span>
        <span style={{ fontSize: 13.5, color: "var(--color-text-light)" }}>
          Privacy &middot; Terms
        </span>
      </div>
    </footer>
  );
}

/** Footer link with spring color transition */
function FooterLink({ href, children }) {
  const ref = useRef(null)

  const handleEnter = () => {
    if (!ref.current) return
    animate(ref.current, { color: "#fff" }, { easing: spring({ stiffness: 300, damping: 20 }), duration: 0.2 })
  }
  const handleLeave = () => {
    if (!ref.current) return
    animate(ref.current, { color: "#AAB6C6" }, { easing: spring({ stiffness: 200, damping: 22 }), duration: 0.25 })
  }

  return (
    <a ref={ref} href={href} style={{
      textDecoration: "none",
      color: "#AAB6C6",
      fontSize: 14.5,
      padding: "6px 0",
      minHeight: 44,
      display: "inline-flex",
      alignItems: "center",
      touchAction: "manipulation",
      WebkitTapHighlightColor: "transparent"
    }}
    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}
    >{children}</a>
  );
}

/** Social icon with spring hover */
function SocialIcon({ icon }) {
  const ref = useRef(null)

  const handleEnter = () => {
    if (!ref.current) return
    animate(ref.current, { background: "rgba(255,255,255,.12)" }, { easing: spring({ stiffness: 300, damping: 20 }), duration: 0.2 })
  }
  const handleLeave = () => {
    if (!ref.current) return
    animate(ref.current, { background: "transparent" }, { easing: spring({ stiffness: 200, damping: 22 }), duration: 0.25 })
  }

  return (
    <a ref={ref} href="#top" aria-label="Social" style={{
      width: 44,
      height: 44,
      minWidth: 44,
      minHeight: 44,
      borderRadius: 10,
      border: "1px solid rgba(255,255,255,.16)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      touchAction: "manipulation",
      WebkitTapHighlightColor: "transparent"
    }}
    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}
    >{icon}</a>
  );
}
