"use client";

const services = [
  {
    title: "Interior Painting",
    desc: "Flawless walls, trim, and ceilings — we protect your furniture and floors first, then deliver clean lines and even coverage.",
    tag: "Most popular",
    accent: "#2563EB",
    imgStyle: {
      position: "relative",
      height: 200,
      backgroundImage: "url(/assets/71f67a7e-2796-452a-958f-3812c8e2653b.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "#2563EB", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 12h18" />
      </svg>
    )
  },
  {
    title: "Exterior Painting",
    desc: "Premium weatherproof coatings, thorough prep, and attention to detail — your home's first impression should be exceptional.",
    tag: "Seasonal",
    accent: "#15803D",
    imgStyle: {
      position: "relative",
      height: 200,
      backgroundImage: "url(/assets/992a751d-f10c-4e55-bd23-97294de7923b.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "#15803D", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M12 2v20M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
        <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
      </svg>
    )
  },
  {
    title: "Cabinet Refinishing",
    desc: "Transform your kitchen or bath at a fraction of replacement cost — factory-grade finish with spray technology that lasts.",
    tag: "High value",
    accent: "#7C3AED",
    imgStyle: {
      position: "relative",
      height: 200,
      backgroundImage: "url(/assets/d62058ed-7006-47ca-998b-791f3419795e.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "#7C3AED", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    title: "Commercial",
    desc: "Offices, retail, restaurants — we work around your schedule to minimize disruption and deliver a professional finish.",
    tag: "Business",
    accent: "#0E2235",
    imgStyle: {
      position: "relative",
      height: 200,
      backgroundImage: "url(/assets/39d050eb-2ea7-47ef-ac21-d71b20a93939.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "#0E2235", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
        <path d="M3 21h18" />
        <path d="M3 7v14h18V7l-4-4H7z" />
        <path d="M3 7h18" />
        <path d="M9 21v-6h6v6" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="bw-sec" style={{ padding: "80px 22px 100px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13, letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            fontWeight: 600
          }}>
            What we do
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
            Painting done right, start to finish.
          </h2>
          <p style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.55,
            margin: "14px 0 0"
          }}>
            From a single accent wall to a full commercial repaint — our crews bring the same care to every job.
          </p>
        </div>

        <div className="bw-services-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          marginTop: 48
        }}>
          {services.map((s, i) => (
            <a key={i} href="#contact" style={{
              textDecoration: "none",
              display: "block",
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: 18,
              overflow: "hidden",
              transition: "transform .25s, box-shadow .25s, border-color .25s",
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 26px 50px -28px rgba(14,34,53,.45)";
              e.currentTarget.style.borderColor = "#D7DEEC";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#E7E3DB";
            }}
            // Touch-friendly active state for tap feedback
            onTouchStart={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 14px 30px -18px rgba(14,34,53,.35)";
            }}
            onTouchEnd={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={s.imgStyle}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(14,34,53,0) 42%, rgba(14,34,53,.5))"
                }} />
                <span style={{
                  position: "absolute",
                  left: 13, top: 13,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "rgba(255,255,255,.94)",
                  borderRadius: 999,
                  padding: "5px 12px",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 11.5,
                  letterSpacing: ".02em",
                  color: s.accent
                }}>{s.tag}</span>
                <span style={{
                  position: "absolute",
                  right: 12, bottom: 12,
                  width: 44, height: 44,
                  borderRadius: 12,
                  background: "rgba(255,255,255,.94)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 16px rgba(14,34,53,.2)"
                }}>{s.icon}</span>
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 21,
                  color: "var(--color-text-dark)",
                  margin: 0,
                  letterSpacing: "-0.01em"
                }}>{s.title}</h3>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  margin: "8px 0 0",
                  color: "var(--color-text)"
                }}>{s.desc}</p>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--color-accent)",
                  fontWeight: 600,
                  fontSize: 14.5,
                  marginTop: 14
                }}>
                  Learn more
                  <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, stroke: "#2563EB", strokeWidth: 2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
