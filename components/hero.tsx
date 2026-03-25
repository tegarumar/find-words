export default function Hero() {
  return (
    <section
      style={{
        background: "#3B82F6",
        borderBottom: "3px solid #0A0A0A",
        padding: "36px 24px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div style={{ marginBottom: "16px" }}>
          <a
            href="https://www.roblox.com/games/130342654546662/Sambung-Kata"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 12px",
              background: "#F72585",
              border: "3px solid #0A0A0A",
              boxShadow: "3px 3px 0 #0A0A0A",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              color: "#FFFFFF",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "transform 0.08s ease, box-shadow 0.08s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translate(3px, 3px)";
              el.style.boxShadow = "0px 0px 0 #0A0A0A";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translate(0, 0)";
              el.style.boxShadow = "3px 3px 0 #0A0A0A";
            }}
          >
            ★ SAMBUNG KATA — ROBLOX ★
          </a>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 7vw, 80px)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Sambung Kata Helper
          </h1>
        </div>

        {/* Sub */}
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            color: "rgba(255,255,255,0.85)",
            marginTop: "10px",
            letterSpacing: "0.01em",
          }}
        >
          Cari kata berdasarkan awalan atau akhiran
        </p>
      </div>
    </section>
  );
}
