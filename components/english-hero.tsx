export default function EnglishHero() {
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
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 12px",
              background: "#FFE600",
              border: "3px solid #0A0A0A",
              boxShadow: "3px 3px 0 #0A0A0A",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              color: "#0A0A0A",
              letterSpacing: "0.04em",
            }}
          >
            ★ WORD GAME HELPER ★
          </div>
        </div>

        {/* Main title */}
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
          English Word Helper
        </h1>

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
          Find words by prefix or suffix
        </p>
      </div>
    </section>
  );
}
