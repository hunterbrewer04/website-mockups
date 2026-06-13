const StarRating = ({ small }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" style={{
        width: small ? 14 : 16,
        height: small ? 14 : 16,
        fill: "#F59E0B",
        stroke: "#F59E0B",
        strokeWidth: 1
      }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const reviews = [
  {
    initials: "JD",
    name: "Jennifer D.",
    where: "Northgate · Interior full home",
    quote: "Brightwork transformed our 1970s home into something we're genuinely proud of. The crew was on time every single day, protected every surface, and the cut-in lines are razor sharp. We've already recommended them to three neighbors."
  },
  {
    initials: "ML",
    name: "Marcus L.",
    where: "Maple Heights · Exterior repaint",
    quote: "The prep work alone made me a believer. They power-washed, scraped, sanded, caulked every gap, then primed — all before a drop of color went on. Eight months later the house still looks fresh. Worth every cent."
  },
  {
    initials: "SB",
    name: "Sarah & Ben K.",
    where: "Cedar Park · Cabinet refinishing",
    quote: "We were quoted $12K for new cabinets. Brightwork refinished ours for a fraction and they look like factory-new. The spray finish is glass-smooth. No drips, no brush marks, and the kitchen was usable again in four days."
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="bw-sec" style={{
      padding: "96px 22px",
      background: "linear-gradient(180deg, #F7F5F1, #FFFFFF 28%, #FFFFFF 72%, #F7F5F1)"
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
          marginBottom: 40
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13, letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              fontWeight: 600
            }}>
              Reviews
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
              Neighbors who&apos;d hire us again.
            </h2>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: 14,
            padding: "12px 18px"
          }}>
            <StarRating />
            <div>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                color: "var(--color-text-dark)",
                fontSize: 15
              }}>4.9 on Google</div>
              <div style={{ fontSize: 12.5, color: "var(--color-text-muted)" }}>200+ reviews</div>
            </div>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20
        }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 16,
              padding: 26,
              display: "flex",
              flexDirection: "column"
            }}>
              <StarRating small />
              <p style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "#2C333D",
                margin: "14px 0 0",
                flex: 1
              }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 20
              }}>
                <span style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "var(--color-dark-secondary)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 16
                }}>{r.initials}</span>
                <div>
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    color: "var(--color-text-dark)",
                    fontSize: 15
                  }}>{r.name}</div>
                  <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>{r.where}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
