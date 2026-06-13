const steps = [
  {
    num: "01",
    title: "Free Estimate",
    desc: "We visit your home, discuss your vision, take measurements, and deliver a detailed, no-pressure quote — usually within 48 hours.",
    accent: "#2563EB"
  },
  {
    num: "02",
    title: "Prep & Protect",
    desc: "Furniture moved, floors covered, trim taped, surfaces cleaned and sanded. We spend more time prepping than painting — that's the secret.",
    accent: "#16A34A"
  },
  {
    num: "03",
    title: "Paint & Perfect",
    desc: "Premium paint applied by experienced crews. Two coats minimum, back-rolled for adhesion, with meticulous cut-in lines.",
    accent: "#7C3AED"
  },
  {
    num: "04",
    title: "Walkthrough & Cleanup",
    desc: "We walk you through every room, touch up anything you notice, and leave your home spotless. You don't lift a finger.",
    accent: "#D97706"
  }
];

export default function Process() {
  return (
    <section className="bw-sec" style={{
      padding: "96px 22px",
      background: "linear-gradient(180deg, #F7F5F1, #FFFFFF 26%, #FFFFFF 74%, #F7F5F1)"
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 50px" }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13, letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            fontWeight: 600
          }}>
            How it works
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
            Simple, from hello to walkthrough.
          </h2>
        </div>
        <div className="bw-process-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 18
        }}>
          {steps.map((p, i) => (
            <div key={i} style={{
              position: "relative",
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderTop: `3px solid ${p.accent}`,
              borderRadius: 16,
              padding: "24px 22px"
            }}>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: 15,
                color: p.accent,
                letterSpacing: ".04em"
              }}>{p.num}</div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 19,
                color: "var(--color-text-dark)",
                margin: "10px 0 0",
                letterSpacing: "-0.01em"
              }}>{p.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.5, margin: "8px 0 0" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
