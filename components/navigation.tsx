"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#FFFBF0",
        borderBottom: "3px solid #0A0A0A",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "18px",
            color: "#0A0A0A",
            textDecoration: "none",
            letterSpacing: "-0.03em",
            marginRight: "8px",
          }}
        >
          FWORD<span style={{ color: "#3B82F6" }}>.</span>
        </Link>

        {/* Indonesia button */}
        <NavButton
          href="/"
          active={pathname === "/"}
          activeColor="#3B82F6"
          label="🇮🇩 Indonesia"
        />

        {/* English button */}
        <NavButton
          href="/english"
          active={pathname === "/english"}
          activeColor="#F72585"
          label="🇬🇧 English"
        />

        {/* Spacer */}
        <div style={{ marginLeft: "auto" }}>
          <a
            href="https://www.tiktok.com/@tegarua"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "7px 14px",
              background: "#FFE600",
              border: "3px solid #0A0A0A",
              boxShadow: "3px 3px 0 #0A0A0A",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              color: "#0A0A0A",
              textDecoration: "none",
              letterSpacing: "0.02em",
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
            BY KAEL
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavButton({
  href,
  active,
  activeColor,
  label,
}: {
  href: string;
  active: boolean;
  activeColor: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "7px 14px",
        background: active ? activeColor : "#FFFFFF",
        border: "3px solid #0A0A0A",
        boxShadow: active ? "3px 3px 0 #0A0A0A" : "3px 3px 0 #0A0A0A",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: "13px",
        color: active ? "#FFFFFF" : "#0A0A0A",
        textDecoration: "none",
        letterSpacing: "0.02em",
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
      {label}
    </Link>
  );
}
