interface EnglishSearchSectionProps {
  prefix: string;
  setPrefix: (value: string) => void;
  suffix: string;
  setSuffix: (value: string) => void;
  isLoading: boolean;
}

export default function EnglishSearchSection({
  prefix,
  setPrefix,
  suffix,
  setSuffix,
  isLoading,
}: EnglishSearchSectionProps) {
  return (
    <section style={{ marginBottom: "40px" }} className="animate-brut-fade">
      {/* Section label */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
          padding: "4px 12px",
          background: "#0A0A0A",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "12px",
          color: "#FFE600",
          letterSpacing: "0.1em",
        }}
      >
        ▶ INPUT PANEL
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Prefix Input */}
        <div
          style={{
            background: "#FFFFFF",
            border: "4px solid #0A0A0A",
            boxShadow: "5px 5px 0 #0A0A0A",
            padding: "20px",
          }}
        >
          <label
            htmlFor="prefix"
            style={{
              display: "block",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "11px",
              color: "#0066FF",
              marginBottom: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            PREFIX
          </label>

          <input
            id="prefix"
            type="text"
            placeholder="starts with... (e.g. ap)"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "14px 16px",
              background: prefix ? "#FFFBF0" : "#FFFFFF",
              border: "3px solid #0A0A0A",
              color: "#0A0A0A",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              outline: "none",
              transition: "box-shadow 0.1s ease, transform 0.1s ease",
              cursor: isLoading ? "not-allowed" : "text",
              opacity: isLoading ? 0.6 : 1,
            }}
          />

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              color: "#666666",
              marginTop: "10px",
            }}
          >
            e.g. <strong style={{ color: "#0A0A0A" }}>ap</strong> → apple,
            apply, april
          </p>
        </div>

        {/* Suffix Input */}
        <div
          style={{
            background: "#FFFFFF",
            border: "4px solid #0A0A0A",
            boxShadow: "5px 5px 0 #0A0A0A",
            padding: "20px",
          }}
        >
          <label
            htmlFor="suffix"
            style={{
              display: "block",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "11px",
              color: "#FF2D55",
              marginBottom: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            SUFFIX
          </label>

          <input
            id="suffix"
            type="text"
            placeholder="ends with... (e.g. ing)"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "14px 16px",
              background: suffix ? "#FFFBF0" : "#FFFFFF",
              border: "3px solid #0A0A0A",
              color: "#0A0A0A",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              outline: "none",
              transition: "box-shadow 0.1s ease, transform 0.1s ease",
              cursor: isLoading ? "not-allowed" : "text",
              opacity: isLoading ? 0.6 : 1,
            }}
          />

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              color: "#666666",
              marginTop: "10px",
            }}
          >
            e.g. <strong style={{ color: "#0A0A0A" }}>ing</strong> → running,
            playing, going
          </p>
        </div>
      </div>

      {/* Status bar */}
      <div
        style={{
          marginTop: "16px",
          padding: "12px 16px",
          background: "#0A0A0A",
          border: "3px solid #0A0A0A",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "13px",
          color: "#FFE600",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "#00C853" }}>STATUS:</span>
        {prefix || suffix ? (
          <>
            <span style={{ color: "#FFE600" }}>ACTIVE</span>
            {prefix && (
              <span>
                PREFIX:{" "}
                <span
                  style={{
                    background: "#0066FF",
                    color: "#FFFFFF",
                    padding: "2px 6px",
                    fontWeight: 800,
                  }}
                >
                  {prefix}
                </span>
              </span>
            )}
            {suffix && (
              <span>
                SUFFIX:{" "}
                <span
                  style={{
                    background: "#FF2D55",
                    color: "#FFFFFF",
                    padding: "2px 6px",
                    fontWeight: 800,
                  }}
                >
                  {suffix}
                </span>
              </span>
            )}
          </>
        ) : (
          <span style={{ color: "#666666" }}>AWAITING INPUT...</span>
        )}
      </div>

      <style>{`
        input::placeholder {
          color: #AAAAAA;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
