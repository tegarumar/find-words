import { useMemo } from "react";

interface EnglishResultsSectionProps {
  words: string[];
  prefix: string;
  suffix: string;
  isLoading: boolean;
}

function highlightMatch(
  word: string,
  prefix: string,
  suffix: string,
): React.ReactNode[] {
  if (!prefix && !suffix) return [word];

  const lowerWord = word.toLowerCase();
  const lowerPrefix = prefix.toLowerCase();
  const lowerSuffix = suffix.toLowerCase();

  const parts: React.ReactNode[] = [];
  let currentIndex = 0;

  if (prefix) {
    const prefixLength = lowerPrefix.length;
    if (lowerWord.startsWith(lowerPrefix)) {
      parts.push(
        <span
          key="prefix"
          style={{
            background: "#FFE600",
            color: "#0A0A0A",
            fontWeight: 800,
            padding: "0 1px",
          }}
        >
          {word.substring(0, prefixLength)}
        </span>,
      );
      currentIndex = prefixLength;
    }
  }

  if (suffix) {
    const suffixStart = lowerWord.length - lowerSuffix.length;
    if (currentIndex < suffixStart) {
      parts.push(word.substring(currentIndex, suffixStart));
    }
    parts.push(
      <span
        key="suffix"
        style={{
          background: "#FF2D55",
          color: "#FFFFFF",
          fontWeight: 800,
          padding: "0 1px",
        }}
      >
        {word.substring(suffixStart)}
      </span>,
    );
  } else if (currentIndex < word.length) {
    parts.push(word.substring(currentIndex));
  }

  return parts.length > 0 ? parts : [word];
}

export default function EnglishResultsSection({
  words,
  prefix,
  suffix,
  isLoading,
}: EnglishResultsSectionProps) {
  const hasSearchQuery = prefix || suffix;
  const showEmpty = hasSearchQuery && words.length === 0 && !isLoading;

  const wordItems = useMemo(() => {
    return words.map((word, index) => ({
      word,
      highlighted: highlightMatch(word, prefix, suffix),
      index,
    }));
  }, [words, prefix, suffix]);

  // Loading state
  if (isLoading) {
    return (
      <section style={{ marginTop: "32px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 12px",
            background: "#0A0A0A",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            color: "#FFE600",
            marginBottom: "16px",
            letterSpacing: "0.08em",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              background: "#FFE600",
              animation: "brut-bounce 0.5s ease-in-out infinite",
            }}
          />
          LOADING...
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              style={{
                height: "56px",
                background:
                  i % 3 === 0 ? "#FFE600" : i % 3 === 1 ? "#F0EDE0" : "#FFFFFF",
                border: "3px solid #0A0A0A",
                opacity: 0.4 + i * 0.06,
              }}
            />
          ))}
        </div>
        <style>{`@keyframes brut-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }`}</style>
      </section>
    );
  }

  // Empty state (searched but no results)
  if (showEmpty) {
    return (
      <section
        style={{ marginTop: "32px", textAlign: "center", padding: "48px 16px" }}
        className="animate-brut-fade"
      >
        <div
          style={{
            display: "inline-block",
            padding: "24px 32px",
            background: "#FF2D55",
            border: "4px solid #0A0A0A",
            boxShadow: "6px 6px 0 #0A0A0A",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              marginBottom: "12px",
              color: "#FFFFFF",
              fontWeight: 800,
            }}
          >
            ✗
          </div>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "8px",
              letterSpacing: "-0.02em",
            }}
          >
            NO WORDS FOUND
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 500,
            }}
          >
            Try a different prefix or suffix
          </p>
        </div>
      </section>
    );
  }

  // Default empty state (no query yet)
  if (!hasSearchQuery) {
    return (
      <section
        style={{ marginTop: "32px", textAlign: "center", padding: "48px 16px" }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "28px 40px",
            background: "#FFFFFF",
            border: "4px solid #0A0A0A",
            boxShadow: "6px 6px 0 #0A0A0A",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              marginBottom: "12px",
              color: "#0A0A0A",
            }}
          >
            ⌨
          </div>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#0A0A0A",
              marginBottom: "10px",
              letterSpacing: "-0.02em",
            }}
          >
            START SEARCHING
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#666666",
              fontWeight: 500,
              maxWidth: "260px",
              lineHeight: 1.6,
            }}
          >
            Type a prefix or suffix above to find matching words
          </p>
          <div
            style={{
              marginTop: "16px",
              display: "inline-block",
              padding: "8px 16px",
              background: "#0066FF",
              border: "3px solid #0A0A0A",
              fontWeight: 800,
              fontSize: "13px",
              color: "#FFFFFF",
              letterSpacing: "0.04em",
            }}
          >
            SEARCH NOW →
          </div>
        </div>
      </section>
    );
  }

  // Results
  return (
    <section style={{ marginTop: "32px" }} className="animate-brut-fade">
      {/* Results header */}
      <div
        style={{
          marginBottom: "16px",
          padding: "12px 16px",
          background: "#FFE600",
          border: "3px solid #0A0A0A",
          boxShadow: "3px 3px 0 #0A0A0A",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#0a0a0a",
            letterSpacing: "0.06em",
          }}
        >
          ▶ SEARCH RESULTS
        </h2>
        <span
          style={{
            fontWeight: 800,
            fontSize: "14px",
            color: "#0a0a0a",
          }}
        >
          {words.length}{" "}
          <span style={{ fontWeight: 500, color: "#0a0a0a", fontSize: "12px" }}>
            words
          </span>
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {wordItems.map(({ word, highlighted, index }) => (
          <div
            key={word}
            style={{
              animation: `brut-slide-in 0.15s ease ${Math.min(index * 0.012, 0.4)}s both`,
            }}
          >
            <div
              style={{
                padding: "12px 10px",
                background: "#FFFFFF",
                border: "3px solid #0A0A0A",
                boxShadow: "3px 3px 0 #0A0A0A",
                textAlign: "center",
                cursor: "default",
                transition:
                  "transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translate(3px, 3px)";
                el.style.boxShadow = "0px 0px 0 #0A0A0A";
                el.style.background = "#FFE600";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translate(0, 0)";
                el.style.boxShadow = "3px 3px 0 #0A0A0A";
                el.style.background = "#FFFFFF";
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  color: "#0A0A0A",
                  wordBreak: "break-all",
                  lineHeight: 1.5,
                  textTransform: "lowercase",
                }}
              >
                {highlighted}
              </p>
            </div>
          </div>
        ))}
      </div>

      {words.length === 100 && (
        <div
          style={{
            marginTop: "24px",
            padding: "12px 16px",
            background: "#FFE600",
            border: "3px solid #0A0A0A",
            boxShadow: "4px 4px 0 #0A0A0A",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "13px",
            color: "#0A0A0A",
            textAlign: "center",
          }}
        >
          ⚠ SHOWING TOP 100 WORDS —{" "}
          <span style={{ fontWeight: 500 }}>try a more specific search</span>
        </div>
      )}

      <style>{`
        @keyframes brut-slide-in {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
