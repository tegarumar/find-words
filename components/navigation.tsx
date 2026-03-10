"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center gap-6">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors duration-200 ${
              pathname === "/"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Indonesia
          </Link>
          <div className="w-px h-4 bg-border" />
          <Link
            href="/english"
            className={`text-sm font-semibold transition-colors duration-200 ${
              pathname === "/english"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            English
          </Link>
          <a
            href="https://www.tiktok.com/@tegarua"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold transition-colors duration-200 text-muted-foreground hover:text-foreground ms-auto"
          >
            By <span className="text-primary">KAEL</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
