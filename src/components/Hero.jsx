"use client";

const StarRating = () => (
  <div style={{ display: "flex", gap: 2 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "#F59E0B", stroke: "#F59E0B", strokeWidth: 1 }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function Hero() {
  return (
    <header id="top" style={{
      position: "relative",
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      overflow: "hidden",
      background: "var(--color-dark)"
    }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          inset: "-4%",
          backgroundImage: "url(/assets/983a1705-7e5c-46a0-be31-e62efc722e7a.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          animation: "kenburns 26s ease-in-out infinite alternate"
        }} />
        <div style={{
          position: "absolute",
          top: "-20%",
          bottom: "-20%",
          left: "-35%",
          width: "26%",
          transform: "skewX(-12deg)",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,.10), transparent)",
          animation: "sweep 9s ease-in-out infinite"
        }} />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(11,28,44,.62) 0%, rgba(11,28,44,.24) 30%, rgba(11,28,44,.46) 60%, rgba(11,28,44,.93) 100%)"
      }} />

      {/* Recording indicator */}
      <div className="bw-hide-mobile" style={{
        position: "absolute",
        top: 92,
        right: 24,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(11,28,44,.4)",
        border: "1px solid rgba(255,255,255,.2)",
        backdropFilter: "blur(6px)",
        borderRadius: 999,
        padding: "7px 13px",
        WebkitBackdropFilter: "blur(6px)"
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: "50%",
          background: "#F87171",
          animation: "rec 1.8s ease-out infinite"
        }} />
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11, letterSpacing: ".05em",
          textTransform: "uppercase", color: "rgba(255,255,255,.82)"
        }}>reel · crew on site</span>
      </div>

      {/* Hero content */}
      <div style={{
        position: "relative",
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "0 24px 60px"
      }}>
        {/* Badge */}
        <div className="hero-animate-up" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(255,255,255,.12)",
          border: "1px solid rgba(255,255,255,.24)",
          backdropFilter: "blur(6px)",
          borderRadius: 999,
          padding: "7px 14px",
          fontSize: 13,
          fontWeight: 600,
          color: "#fff",
          WebkitBackdropFilter: "blur(6px)"
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34D399" }} />
          Proudly painting our community since 2009
        </div>

        {/* Main heading */}
        <h1 className="hero-animate-pop" style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-0.03em",
          lineHeight: 0.84,
          margin: "16px 0 0",
          fontSize: "clamp(58px, 13vw, 212px)",
          textTransform: "uppercase",
          textShadow: "0 24px 60px rgba(0,0,0,.45)"
        }}>
          Brightwork
        </h1>

        {/* Subcontent row */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 26,
          marginTop: 18
        }}>
          {/* Left text */}
          <div className="hero-animate-up-delayed">
            <p style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "clamp(23px, 3vw, 36px)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: 0
            }}>
              Residential &amp; commercial painters.
            </p>
            <p style={{
              fontSize: "clamp(15px, 1.5vw, 18px)",
              color: "rgba(255,255,255,.8)",
              margin: "12px 0 0",
              maxWidth: 480,
              lineHeight: 1.55
            }}>
              Interior, exterior, cabinets &amp; drywall — meticulous prep, premium paint, and a finish that lasts.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 13, marginTop: 24 }}>
              <a href="#contact" style={{
                textDecoration: "none",
                background: "var(--color-accent)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                padding: "15px 26px",
                borderRadius: 12,
                boxShadow: "0 14px 30px rgba(37,99,235,.4)",
                transition: "background .2s, transform .2s"
              }}
              onMouseEnter={e => { e.target.style.background = "#1D4ED8"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.background = "#2563EB"; e.target.style.transform = "none"; }}
              >
                Get a Free Estimate
              </a>
              <a href="#gallery" style={{
                textDecoration: "none",
                background: "rgba(255,255,255,.1)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                padding: "15px 26px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,.35)",
                backdropFilter: "blur(6px)",
                transition: "background .2s, transform .2s",
                WebkitBackdropFilter: "blur(6px)"
              }}
              onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,.2)"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,.1)"; e.target.style.transform = "none"; }}
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Rating card */}
          <div className="hero-animate-up-delayed-2" style={{
            background: "#fff",
            borderRadius: 16,
            padding: "15px 19px",
            boxShadow: "0 26px 50px -20px rgba(0,0,0,.6)",
            display: "flex",
            alignItems: "center",
            gap: 13
          }}>
            <span style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 34,
              color: "var(--color-text-dark)",
              letterSpacing: "-0.02em",
              lineHeight: 1
            }}>4.9</span>
            <div>
              <StarRating />
              <div style={{
                fontSize: 12.5,
                color: "var(--color-text-muted)",
                marginTop: 3,
                maxWidth: 158
              }}>
                200+ Google reviews · Licensed &amp; Insured
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="bw-hide-mobile" style={{
        position: "absolute",
        bottom: 16,
        left: "50%",
        transform: "translate(-50%, 0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        animation: "bob 2s ease-in-out infinite"
      }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.66)"
        }}>Scroll</span>
        <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "rgba(255,255,255,.7)", strokeWidth: 2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </header>
  );
}
