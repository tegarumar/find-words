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

  // Highlight prefix
  if (prefix) {
    const prefixLength = lowerPrefix.length;
    if (lowerWord.startsWith(lowerPrefix)) {
      parts.push(
        <span
          key="prefix"
          style={{ color: "#ffff00", textShadow: "0 0 6px #ffff00" }}
        >
          {word.substring(0, prefixLength)}
        </span>,
      );
      currentIndex = prefixLength;
    }
  }

  // Highlight suffix
  if (suffix) {
    const suffixStart = lowerWord.length - lowerSuffix.length;

    if (currentIndex < suffixStart) {
      parts.push(word.substring(currentIndex, suffixStart));
    }

    parts.push(
      <span
        key="suffix"
        style={{ color: "#ff00ff", textShadow: "0 0 6px #ff00ff" }}
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
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "9px",
            color: "#00ffff",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ animation: "blink 0.4s step-end infinite" }}>█</span>
          <span>LOADING...</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              style={{
                height: "48px",
                background: "#0d0d2b",
                border: "2px solid #1a1a3a",
                animation: `blink ${0.6 + i * 0.1}s step-end infinite`,
              }}
            />
          ))}
        </div>
        <style>{`@keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }`}</style>
      </section>
    );
  }

  // Empty state
  if (showEmpty) {
    return (
      <section
        style={{ marginTop: "32px", textAlign: "center", padding: "48px 16px" }}
        className="animate-pixel-fade"
      >
        <div style={{ fontFamily: "'Press Start 2P', monospace" }}>
          <div
            style={{
              fontSize: "32px",
              marginBottom: "16px",
              color: "#ff0055",
              animation: "blink 1s step-end infinite",
            }}
          >
            ✗
          </div>
          <div
            style={{
              display: "inline-block",
              padding: "16px 24px",
              background: "#1a0010",
              border: "4px solid #ff0055",
              boxShadow: "0 0 16px #ff005540, 4px 4px 0 #ff005520",
            }}
          >
            <h3
              style={{
                fontSize: "12px",
                color: "#ff0055",
                textShadow: "0 0 8px #ff0055",
                marginBottom: "12px",
                letterSpacing: "0.1em",
              }}
            >
              GAME OVER
            </h3>
            <p style={{ fontSize: "8px", color: "#6868aa", lineHeight: "2" }}>
              NO WORDS FOUND
            </p>
            <p
              style={{
                fontSize: "7px",
                color: "#3a3a6a",
                marginTop: "8px",
                lineHeight: "2",
              }}
            >
              TRY A DIFFERENT PREFIX / SUFFIX
            </p>
          </div>
        </div>
        <style>{`@keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }`}</style>
      </section>
    );
  }

  // Default empty state
  if (!hasSearchQuery) {
    return (
      <section
        style={{ marginTop: "32px", textAlign: "center", padding: "48px 16px" }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "24px 32px",
            background: "#0d0d2b",
            border: "4px solid #00ffff",
            boxShadow: "0 0 16px #00ffff30, 4px 4px 0 #00ffff20",
            fontFamily: "'Press Start 2P', monospace",
          }}
        >
          <div
            style={{ fontSize: "28px", marginBottom: "16px", color: "#00ffff" }}
          >
            ⌨
          </div>
          <h3
            style={{
              fontSize: "10px",
              color: "#00ffff",
              textShadow: "0 0 8px #00ffff",
              marginBottom: "16px",
              letterSpacing: "0.1em",
            }}
          >
            INSERT COIN
          </h3>
          <p
            style={{
              fontSize: "7px",
              color: "#6868aa",
              lineHeight: "2",
              maxWidth: "280px",
            }}
          >
            ENTER A PREFIX OR SUFFIX
            <br />
            TO START SEARCHING
          </p>
          <div
            style={{
              marginTop: "16px",
              fontSize: "10px",
              color: "#ffff00",
              animation: "blink 1s step-end infinite",
            }}
          >
            PRESS START ▶
          </div>
        </div>
        <style>{`@keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }`}</style>
      </section>
    );
  }

  // Results
  return (
    <section style={{ marginTop: "32px" }} className="animate-pixel-fade">
      {/* Results header HUD */}
      <div
        style={{
          marginBottom: "16px",
          padding: "10px 16px",
          background: "#0d0d2b",
          border: "4px solid #00ffff",
          boxShadow: "0 0 12px #00ffff30",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "'Press Start 2P', monospace",
        }}
      >
        <h2
          style={{
            fontSize: "10px",
            color: "#00ffff",
            textShadow: "0 0 6px #00ffff",
          }}
        >
          ▶ SEARCH RESULTS
        </h2>
        <span style={{ fontSize: "8px", color: "#6868aa" }}>
          SCORE:{" "}
          <span style={{ color: "#ffff00", textShadow: "0 0 6px #ffff00" }}>
            {words.length}
          </span>
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {wordItems.map(({ word, highlighted, index }) => (
          <div
            key={word}
            style={{
              animation: `slideInPixel 0.1s steps(3) ${Math.min(index * 0.015, 0.5)}s both`,
            }}
          >
            <div
              style={{
                padding: "12px 8px",
                background: "#0d0d2b",
                border: "2px solid #1a1a3a",
                textAlign: "center",
                cursor: "default",
                transition: "all 0.1s steps(2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "2px solid #00ffff";
                el.style.background = "#0a1a2a";
                el.style.boxShadow = "0 0 12px #00ffff40, 0 0 20px #00ffff20";
                el.style.transform = "translate(-2px, -2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "2px solid #1a1a3a";
                el.style.background = "#0d0d2b";
                el.style.boxShadow = "none";
                el.style.transform = "translate(0, 0)";
              }}
            >
              <p
                style={{
                  fontSize: "9px",
                  fontFamily: "'Press Start 2P', monospace",
                  color: "#e0e0ff",
                  wordBreak: "break-all",
                  lineHeight: "1.8",
                }}
                className="uppercase tracking-wider"
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
            background: "#1a1a00",
            border: "2px solid #ffff00",
            boxShadow: "0 0 8px #ffff0030",
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "8px",
            color: "#ffff00",
            textAlign: "center",
            lineHeight: "2",
          }}
        >
          ⚠ SHOWING TOP 100 WORDS
          <br />
          <span style={{ color: "#6868aa", fontSize: "7px" }}>
            TRY A MORE SPECIFIC SEARCH
          </span>
        </div>
      )}

      <style>{`
        @keyframes slideInPixel {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes fade-in-pixel {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .animate-pixel-fade {
          animation: fade-in-pixel 0.4s steps(4, end);
        }
      `}</style>
    </section>
  );
}
