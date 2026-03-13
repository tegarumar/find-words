export default function EnglishHero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 pb-6 sm:pb-10">
      {/* Starfield pixel background */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: i % 3 === 0 ? '4px' : '2px',
              height: i % 3 === 0 ? '4px' : '2px',
              background: i % 4 === 0 ? '#00ffff' : i % 4 === 1 ? '#ffff00' : i % 4 === 2 ? '#ff00ff' : '#ffffff',
              left: `${(i * 43 + 17) % 100}%`,
              top: `${(i * 59 + 13) % 100}%`,
              animation: `blink ${1 + (i % 3) * 0.5}s step-end infinite`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        {/* Game badge */}
        <div className="mb-6 inline-block">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: '#0d0d2b',
              border: '2px solid #ffff00',
              boxShadow: '0 0 8px #ffff0060, 4px 4px 0 #ffff0040',
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#ffff00',
              textShadow: '0 0 8px #ffff00',
              letterSpacing: '0.05em',
            }}
          >
            <span>★</span>
            <span>WORD GAME HELPER</span>
            <span>★</span>
          </div>
        </div>

        {/* Main title */}
        <h1 style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 'clamp(18px, 4vw, 32px)',
          lineHeight: '1.6',
          letterSpacing: '0.05em',
          marginBottom: '16px',
        }}>
          <span style={{
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff60',
            display: 'block',
          }}>
            ENGLISH
          </span>
          <span style={{
            color: '#ff00ff',
            textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff60',
            display: 'block',
          }}>
            WORD
          </span>
          <span style={{
            color: '#ffff00',
            textShadow: '0 0 8px #ffff00, 0 0 16px #ffff0060',
            fontSize: '0.6em',
            display: 'block',
            marginTop: '8px',
          }}>
            HELPER
          </span>
        </h1>

        {/* Pixel divider */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginTop: '16px',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '14px',
          color: '#00ffff',
          opacity: 0.6,
        }}>
          <span>━━━━</span>
          <span style={{ color: '#ffff00', animation: 'blink 1s step-end infinite' }}>◆</span>
          <span>━━━━</span>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
