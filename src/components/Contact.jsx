"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bw-sec" style={{ padding: "80px 22px 100px" }}>
      <div className="bw-contact-grid" style={{
        maxWidth: 1180,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: ".85fr 1.15fr",
        gap: 56
      }}>
        {/* Left: Info */}
        <div>
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
            fontSize: 40,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--color-text-dark)",
            margin: "12px 0 0"
          }}>
            Let&apos;s get your estimate started.
          </h2>
          <p style={{
            fontSize: 17,
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
        <div style={{
          background: "#fff",
          border: "1px solid var(--color-border)",
          borderRadius: 20,
          padding: 30,
          boxShadow: "0 24px 56px -36px rgba(14,34,53,.4)"
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
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <label style={{ display: "block" }}>
                  <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--color-text-dark)", marginBottom: 7 }}>Name</span>
                  <input required type="text" placeholder="Jane Doe" style={inputStyle} />
                </label>
                <label style={{ display: "block" }}>
                  <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--color-text-dark)", marginBottom: 7 }}>Phone</span>
                  <input required type="tel" placeholder="(555) 000-0000" style={inputStyle} />
                </label>
              </div>
              <label style={{ display: "block", marginTop: 16 }}>
                <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--color-text-dark)", marginBottom: 7 }}>Email</span>
                <input required type="email" placeholder="you@email.com" style={inputStyle} />
              </label>
              <label style={{ display: "block", marginTop: 16 }}>
                <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--color-text-dark)", marginBottom: 7 }}>Service type</span>
                <select style={{ ...inputStyle, appearance: "none" }}>
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
                <textarea rows="4" placeholder="Tell us about the rooms, square footage, timeline…" style={{ ...inputStyle, resize: "vertical" }} />
              </label>
              <button type="submit" style={{
                width: "100%",
                marginTop: 20,
                background: "var(--color-accent)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                fontFamily: "inherit",
                border: "none",
                padding: 15,
                borderRadius: 12,
                cursor: "pointer",
                boxShadow: "0 10px 24px rgba(37,99,235,.3)",
                transition: "background .2s, transform .2s"
              }}
              onMouseEnter={e => { e.target.style.background = "#1D4ED8"; e.target.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.target.style.background = "#2563EB"; e.target.style.transform = "none"; }}
              >
                Request My Free Estimate
              </button>
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
  padding: "13px 14px",
  fontSize: 15,
  fontFamily: "inherit",
  color: "#0E2235",
  outline: "none",
  transition: "border-color .2s, box-shadow .2s"
};
