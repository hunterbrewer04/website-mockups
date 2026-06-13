"use client";
import { useState, useEffect, useRef } from "react"
import { animate, inView, spring } from "motion"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const { stop } = inView(el, () => {
      const left = el.querySelector('[data-contact-left]')
      const right = el.querySelector('[data-contact-right]')
      if (left) {
        animate(left,
          { opacity: [0, 1], transform: ["translateX(-16px)", "none"] },
          { delay: 0.05, easing: spring({ stiffness: 180, damping: 24 }), duration: 0.6 }
        )
      }
      if (right) {
        animate(right,
          { opacity: [0, 1], transform: ["translateY(16px)", "none"] },
          { delay: 0.15, easing: spring({ stiffness: 180, damping: 23 }), duration: 0.6 }
        )
      }
    }, { margin: "-80px" })

    return () => stop?.()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="contact" className="bw-sec" style={{ padding: "80px 22px 100px" }}>
      <div className="bw-contact-grid" style={{
        maxWidth: 1180,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: ".85fr 1.15fr",
        gap: 56
      }}>
        {/* Left: Info */}
        <div data-contact-left style={{ opacity: 0 }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13, letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            fontWeight: 600
          }}>
            Get in touch
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
            Let&apos;s get your estimate started.
          </h2>
          <p style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.55,
            margin: "14px 0 28px",
            maxWidth: 420
          }}>
            Tell us a little about your project and we&apos;ll get right back to you — most estimates go out the same day.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <ContactItem
              icon={<svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "#2563EB", strokeWidth: 1.7, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>}
              label="Call or text"
              value="(555) 248-1900"
            />
            <ContactItem
              icon={<svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "#2563EB", strokeWidth: 1.7, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>}
              label="Email"
              value="hello@brightworkpainting.co"
            />
            <ContactItem
              icon={<svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "#2563EB", strokeWidth: 1.7, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
              label="Hours"
              value="Mon–Sat · 7am–6pm"
            />
          </div>
          <div style={{
            marginTop: 24,
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "var(--color-success-bg)",
            border: "1px solid var(--color-success-border)",
            color: "#15803D",
            borderRadius: 10,
            padding: "10px 15px",
            fontWeight: 600,
            fontSize: 14
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-success)" }} />
            We respond within 2 hours
          </div>
        </div>

        {/* Right: Form */}
        <div data-contact-right style={{
          background: "#fff",
          border: "1px solid var(--color-border)",
          borderRadius: 20,
          padding: 30,
          boxShadow: "0 24px 56px -36px rgba(14,34,53,.4)",
          opacity: 0
        }}>
          {submitted ? (
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minHeight: 420
            }}>
              <span style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "var(--color-success-bg)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <svg viewBox="0 0 24 24" style={{ width: 30, height: 30, stroke: "#16A34A", strokeWidth: 2.2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: 26,
                color: "var(--color-text-dark)",
                margin: "20px 0 0",
                letterSpacing: "-0.01em"
              }}>
                Thanks — we&apos;ve got it!
              </h3>
              <p style={{
                fontSize: 16,
                lineHeight: 1.55,
                margin: "10px 0 0",
                maxWidth: 320
              }}>
                A Brightwork estimator will reach out within 2 hours during business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="bw-contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <label style={{ display: "block" }}>
                  <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--color-text-dark)", marginBottom: 7 }}>Name</span>
                  <input required type="text" name="name" placeholder="Jane Doe" autoComplete="name" inputMode="text" style={inputStyle} />
                </label>
                <label style={{ display: "block" }}>
                  <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--color-text-dark)", marginBottom: 7 }}>Phone</span>
                  <input required type="tel" name="phone" placeholder="(555) 000-0000" autoComplete="tel" inputMode="tel" style={inputStyle} />
                </label>
              </div>
              <label style={{ display: "block", marginTop: 16 }}>
                <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--color-text-dark)", marginBottom: 7 }}>Email</span>
                <input required type="email" name="email" placeholder="you@email.com" autoComplete="email" inputMode="email" style={inputStyle} />
              </label>
              <label style={{ display: "block", marginTop: 16 }}>
                <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--color-text-dark)", marginBottom: 7 }}>Service type</span>
                <select name="service_type" style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m6 9 6 6 6-6' fill='none' stroke='%236B7180' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: 18, paddingRight: 40 }}>
                  <option>Interior painting</option>
                  <option>Exterior painting</option>
                  <option>Spray painting</option>
                  <option>Drywall repair</option>
                  <option>Cabinet refinishing</option>
                  <option>Commercial project</option>
                  <option>Something else</option>
                </select>
              </label>
              <label style={{ display: "block", marginTop: 16 }}>
                <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--color-text-dark)", marginBottom: 7 }}>Project details</span>
                <textarea name="details" rows="4" placeholder="Tell us about the rooms, square footage, timeline…" inputMode="text" style={{ ...inputStyle, resize: "vertical", minHeight: 100 }} />
              </label>
              <SubmitButton />
              <p style={{
                textAlign: "center",
                fontSize: 12.5,
                color: "#8A8F98",
                margin: "13px 0 0"
              }}>
                No spam, ever. We only use your details to prepare your estimate.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/** Submit button with spring hover */
function SubmitButton() {
  const ref = useRef(null)

  const handleEnter = () => {
    if (!ref.current) return
    animate(ref.current, { background: "#1D4ED8", transform: "translateY(-1px)" }, { easing: spring({ stiffness: 300, damping: 20 }), duration: 0.25 })
  }
  const handleLeave = () => {
    if (!ref.current) return
    animate(ref.current, { background: "#2563EB", transform: "none" }, { easing: spring({ stiffness: 200, damping: 22 }), duration: 0.3 })
  }

  return (
    <button ref={ref} type="submit" style={{
      width: "100%",
      marginTop: 20,
      background: "var(--color-accent)",
      color: "#fff",
      fontWeight: 600,
      fontSize: 16,
      fontFamily: "inherit",
      border: "none",
      padding: 15,
      minHeight: 56,
      borderRadius: 12,
      cursor: "pointer",
      boxShadow: "0 10px 24px rgba(37,99,235,.3)",
      touchAction: "manipulation",
      WebkitTapHighlightColor: "transparent"
    }}
    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}
    >
      Request My Free Estimate
    </button>
  )
}

function ContactItem({ icon, label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <span style={{
        width: 44, height: 44, flex: "none",
        borderRadius: 12,
        background: "#EAF0FB",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>{icon}</span>
      <div>
        <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>{label}</div>
        <div style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          color: "var(--color-text-dark)",
          fontSize: 16
        }}>{value}</div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  border: "1px solid #E7E3DB",
  background: "#FBFAF8",
  borderRadius: 11,
  padding: "14px 15px",
  fontSize: 16,
  fontFamily: "inherit",
  color: "#0E2235",
  outline: "none",
  transition: "border-color .2s, box-shadow .2s",
  WebkitAppearance: "none"
};
