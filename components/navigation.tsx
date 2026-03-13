"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50" style={{
      background: '#0a0a1a',
      borderBottom: '4px solid #00ffff',
      boxShadow: '0 4px 0 0 #00ffff40, 0 0 20px #00ffff20',
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center gap-8">
          {/* Indonesia Link */}
          <Link
            href="/"
            className="relative group"
            style={{ textDecoration: 'none' }}
          >
            <span
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '10px',
                color: pathname === "/" ? '#00ffff' : '#6868aa',
                textShadow: pathname === "/" ? '0 0 8px #00ffff, 0 0 16px #00ffff40' : 'none',
                transition: 'all 0.1s steps(2)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {pathname === "/" && (
                <span style={{ color: '#ffff00', animation: 'blink 0.8s step-end infinite' }}>▶</span>
              )}
              Indonesia
            </span>
            {/* Hover underline pixel */}
            <div style={{
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              right: 0,
              height: '2px',
              background: pathname === "/" ? '#00ffff' : 'transparent',
              boxShadow: pathname === "/" ? '0 0 8px #00ffff' : 'none',
            }} />
          </Link>

          {/* Pixel divider */}
          <div style={{
            width: '4px',
            height: '20px',
            background: '#1a1a3a',
            borderLeft: '2px solid #00ffff40',
          }} />

          {/* English Link */}
          <Link
            href="/english"
            className="relative group"
            style={{ textDecoration: 'none' }}
          >
            <span
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '10px',
                color: pathname === "/english" ? '#00ffff' : '#6868aa',
                textShadow: pathname === "/english" ? '0 0 8px #00ffff, 0 0 16px #00ffff40' : 'none',
                transition: 'all 0.1s steps(2)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {pathname === "/english" && (
                <span style={{ color: '#ffff00', animation: 'blink 0.8s step-end infinite' }}>▶</span>
              )}
              English
            </span>
            <div style={{
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              right: 0,
              height: '2px',
              background: pathname === "/english" ? '#00ffff' : 'transparent',
              boxShadow: pathname === "/english" ? '0 0 8px #00ffff' : 'none',
            }} />
          </Link>

          {/* Credits - pushed to right */}
          <a
            href="https://www.tiktok.com/@tegarua"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: 'auto',
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '8px',
              color: '#6868aa',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}
          >
            BY <span style={{
              color: '#ff00ff',
              textShadow: '0 0 8px #ff00ff',
            }}>KAEL</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </nav>
  );
}
