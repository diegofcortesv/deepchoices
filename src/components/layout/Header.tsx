"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";
import { LogoMark } from "@/components/ui/LogoMark";
import { Sun, Moon, List, X } from "@phosphor-icons/react";

export function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [mounted, setMounted]     = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300"
        style={{
          background: scrolled
            ? "color-mix(in srgb, var(--bg) 92%, transparent)"
            : "var(--hero-bg)",
          borderBottom: "1px solid",
          borderColor: scrolled ? "var(--border)" : "var(--hero-border)",
          backdropFilter: scrolled ? "blur(14px)" : "none",
        }}
      >
        <div className="mx-auto flex h-full max-w-[1260px] items-center justify-between gap-6 px-9">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="DeepChoices inicio">
            <LogoMark className="w-[26px] h-[26px]" />
            <span
              className="font-display font-semibold text-[1rem] tracking-[-0.02em]"
              style={{ color: scrolled ? "var(--text)" : "var(--hero-text)" }}
            >
              DeepChoices
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Navegación principal">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.875rem] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200"
                style={{ color: scrolled ? "var(--text-2)" : "var(--hero-text-2)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? "var(--text)" : "var(--hero-text)";
                  (e.target as HTMLElement).style.background = scrolled ? "var(--bg-2)" : "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? "var(--text-2)" : "var(--hero-text-2)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar modo de color"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[--bg-2]"
              style={{ color: scrolled ? "var(--text-2)" : "var(--hero-text-2)" }}
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            {/* CTA — desktop */}
            <div className="hidden sm:block">
              <Button href="#cta">Solicitar diagnóstico</Button>
            </div>

            {/* Hamburger — mobile */}
            <button
              className="flex md:hidden w-9 h-9 items-center justify-center rounded-lg transition-all duration-200 hover:bg-[--bg-2]"
              style={{ color: scrolled ? "var(--text-2)" : "var(--hero-text-2)" }}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav
          className="fixed inset-x-0 top-[72px] bottom-0 z-40 flex flex-col gap-1 px-5 pt-8 pb-10"
          style={{ background: "var(--bg)" }}
          aria-label="Menú móvil"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="font-display text-xl font-medium py-3.5 border-b transition-colors duration-200"
              style={{ color: "var(--text-2)", borderColor: "var(--border-2)" }}
            >
              {item.label}
            </a>
          ))}
          <Button href="#cta" className="mt-5 w-full justify-center" onClick={closeMenu}>
            Solicitar diagnóstico
          </Button>
        </nav>
      )}
    </>
  );
}

