"use client";

export default function CTABand() {
  return (
    <section style={{
      position: "relative",
      overflow: "hidden",
      background: "var(--color-dark)",
      padding: "96px 22px"
    }}>
      <div style={{
        position: "absolute",
        inset: "-5%",
        backgroundImage: "url(/assets/d6c3ba5a-81d0-4576-a867-6b2e6e3a6355.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "kenburns 30s ease-in-out infinite alternate"
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(11,28,44,.82), rgba(11,28,44,.9))"
      }} />
      <div style={{
        position: "relative",
        maxWidth: 900,
        margin: "0 auto",
        textAlign: "center"
      }}>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: 46,
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
          color: "#fff",
          margin: 0
        }}>
          Ready to transform your space?
        </h2>
        <p style={{
          fontSize: 18,
          color: "#AAB6C6",
          margin: "16px auto 0",
          maxWidth: 540,
          lineHeight: 1.5
        }}>
          Free, no-pressure estimates — usually within 2 hours. Let&apos;s talk about your project.
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 14,
          marginTop: 30
        }}>
          <a href="#contact" style={{
            textDecoration: "none",
            background: "var(--color-accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            padding: "15px 28px",
            borderRadius: 12,
            boxShadow: "0 12px 30px rgba(37,99,235,.4)",
            transition: "background .2s, transform .2s"
          }}
          onMouseEnter={e => { e.target.style.background = "#1D4ED8"; e.target.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.target.style.background = "#2563EB"; e.target.style.transform = "none"; }}
          >
            Get Your Free Estimate
          </a>
          <a href="tel:5552481900" style={{
            textDecoration: "none",
            background: "transparent",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            padding: "15px 28px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,.25)",
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            transition: "border-color .2s"
          }}
          onMouseEnter={e => { e.target.style.borderColor = "#fff"; }}
          onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,.25)"; }}
          >
            <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "#fff", strokeWidth: 1.7, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (555) 248-1900
          </a>
        </div>
      </div>
    </section>
  );
}
