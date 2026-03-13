interface SearchSectionProps {
  prefix: string
  setPrefix: (value: string) => void
  suffix: string
  setSuffix: (value: string) => void
  isLoading: boolean
}

export default function SearchSection({
  prefix,
  setPrefix,
  suffix,
  setSuffix,
  isLoading,
}: SearchSectionProps) {
  return (
    <section className="mb-12 sm:mb-16 animate-pixel-fade">
      {/* Section header */}
      <div style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '10px',
        color: '#00ffff',
        textShadow: '0 0 8px #00ffff',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <span style={{ color: '#ffff00', animation: 'blink 1s step-end infinite' }}>▶</span>
        <span>INPUT PANEL</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prefix Input */}
        <div style={{
          background: '#0d0d2b',
          border: '4px solid #00ffff',
          boxShadow: '0 0 12px #00ffff30, 4px 4px 0 #00ffff20',
          padding: '16px',
          position: 'relative',
        }}>
          {/* Inner border decoration */}
          <div style={{
            position: 'absolute',
            inset: '4px',
            border: '1px solid #00ffff30',
            pointerEvents: 'none',
          }} />

          <label
            htmlFor="prefix"
            style={{
              display: 'block',
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#00ffff',
              marginBottom: '12px',
              letterSpacing: '0.1em',
            }}
          >
            ▸ AWALAN KATA
          </label>

          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '10px',
              color: prefix ? '#00ffff' : '#6868aa',
              pointerEvents: 'none',
              textShadow: prefix ? '0 0 6px #00ffff' : 'none',
            }}>
              {'>'}
            </span>
            <input
              id="prefix"
              type="text"
              placeholder="cari awalan..."
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              disabled={isLoading}
              style={{
                width: '100%',
                paddingLeft: '28px',
                paddingRight: '12px',
                paddingTop: '10px',
                paddingBottom: '10px',
                background: '#060616',
                border: '2px solid',
                borderColor: prefix ? '#00ffff' : '#1a1a3a',
                boxShadow: prefix ? '0 0 10px #00ffff30, inset 0 0 10px #00ffff10' : 'inset 0 0 10px #00000040',
                color: '#e0e0ff',
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '10px',
                outline: 'none',
                transition: 'all 0.1s steps(2)',
                cursor: isLoading ? 'not-allowed' : 'text',
                opacity: isLoading ? 0.5 : 1,
              }}
              onFocus={e => {
                e.target.style.borderColor = '#00ffff';
                e.target.style.boxShadow = '0 0 12px #00ffff40, inset 0 0 12px #00ffff10';
              }}
              onBlur={e => {
                e.target.style.borderColor = prefix ? '#00ffff' : '#1a1a3a';
                e.target.style.boxShadow = prefix ? '0 0 10px #00ffff30, inset 0 0 10px #00ffff10' : 'inset 0 0 10px #00000040';
              }}
            />
          </div>

          <p style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '7px',
            color: '#6868aa',
            marginTop: '8px',
            lineHeight: '1.8',
          }}>
            {'// '}<span style={{ color: '#e0e0ff' }}>ka</span> → kaca, kaki, kamar
          </p>
        </div>

        {/* Suffix Input */}
        <div style={{
          background: '#0d0d2b',
          border: '4px solid #ff00ff',
          boxShadow: '0 0 12px #ff00ff30, 4px 4px 0 #ff00ff20',
          padding: '16px',
          position: 'relative',
        }}>
          {/* Inner border decoration */}
          <div style={{
            position: 'absolute',
            inset: '4px',
            border: '1px solid #ff00ff30',
            pointerEvents: 'none',
          }} />

          <label
            htmlFor="suffix"
            style={{
              display: 'block',
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#ff00ff',
              marginBottom: '12px',
              letterSpacing: '0.1em',
              textShadow: '0 0 6px #ff00ff',
            }}
          >
            ▸ AKHIRAN KATA
          </label>

          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '10px',
              color: suffix ? '#ff00ff' : '#6868aa',
              pointerEvents: 'none',
              textShadow: suffix ? '0 0 6px #ff00ff' : 'none',
            }}>
              {'>'}
            </span>
            <input
              id="suffix"
              type="text"
              placeholder="cari akhiran..."
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              disabled={isLoading}
              style={{
                width: '100%',
                paddingLeft: '28px',
                paddingRight: '12px',
                paddingTop: '10px',
                paddingBottom: '10px',
                background: '#060616',
                border: '2px solid',
                borderColor: suffix ? '#ff00ff' : '#1a1a3a',
                boxShadow: suffix ? '0 0 10px #ff00ff30, inset 0 0 10px #ff00ff10' : 'inset 0 0 10px #00000040',
                color: '#e0e0ff',
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '10px',
                outline: 'none',
                transition: 'all 0.1s steps(2)',
                cursor: isLoading ? 'not-allowed' : 'text',
                opacity: isLoading ? 0.5 : 1,
              }}
              onFocus={e => {
                e.target.style.borderColor = '#ff00ff';
                e.target.style.boxShadow = '0 0 12px #ff00ff40, inset 0 0 12px #ff00ff10';
              }}
              onBlur={e => {
                e.target.style.borderColor = suffix ? '#ff00ff' : '#1a1a3a';
                e.target.style.boxShadow = suffix ? '0 0 10px #ff00ff30, inset 0 0 10px #ff00ff10' : 'inset 0 0 10px #00000040';
              }}
            />
          </div>

          <p style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '7px',
            color: '#6868aa',
            marginTop: '8px',
            lineHeight: '1.8',
          }}>
            {'// '}<span style={{ color: '#e0e0ff' }}>an</span> → makan, jalan, tangan
          </p>
        </div>
      </div>

      {/* Status HUD */}
      <div style={{
        marginTop: '16px',
        padding: '10px 16px',
        background: '#0d0d2b',
        border: '2px solid #1a1a3a',
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '8px',
        color: '#6868aa',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{ color: '#00ff41' }}>STATUS:</span>
        {prefix || suffix ? (
          <>
            <span style={{ color: '#00ffff', textShadow: '0 0 6px #00ffff' }}>ACTIVE</span>
            {prefix && suffix && (
              <span>
                {' '}· AWL:<span style={{ color: '#ffff00', marginLeft: '4px' }}>{prefix}</span>
                {' '}· AKH:<span style={{ color: '#ffff00', marginLeft: '4px' }}>{suffix}</span>
              </span>
            )}
            {prefix && !suffix && (
              <span>· AWL:<span style={{ color: '#ffff00', marginLeft: '4px' }}>{prefix}</span></span>
            )}
            {!prefix && suffix && (
              <span>· AKH:<span style={{ color: '#ffff00', marginLeft: '4px' }}>{suffix}</span></span>
            )}
          </>
        ) : (
          <span style={{ color: '#6868aa' }}>AWAITING INPUT...</span>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        input::placeholder {
          color: #3a3a6a;
          font-family: 'Press Start 2P', monospace;
          font-size: 9px;
        }
      `}</style>
    </section>
  )
}
