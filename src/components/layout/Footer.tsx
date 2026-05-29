import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";
import { siteConfig } from "@/lib/siteConfig";

const footerLinks = {
  Servicios: [
    { label: "Atención por WhatsApp",  href: "#soluciones" },
    { label: "Agendamiento automático", href: "#soluciones" },
    { label: "Seguimiento comercial",  href: "#soluciones" },
    { label: "Analítica operativa",    href: "#soluciones" },
  ],
  Sectores: [
    { label: "Gimnasios",       href: "#sectores" },
    { label: "Restaurantes",    href: "#sectores" },
    { label: "Retail y moda",   href: "#sectores" },
    { label: "Servicios locales", href: "#sectores" },
  ],
  Contacto: [
    { label: siteConfig.email,       href: `mailto:${siteConfig.email}` },
    { label: "Cómo trabajamos",      href: "#proceso" },
    { label: "Preguntas frecuentes", href: "#faq" },
    { label: "Solicitar diagnóstico", href: "#cta" },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1260px] px-9 pt-14 pb-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="DeepChoices">
              <LogoMark className="w-[26px] h-[26px]" />
              <span
                className="font-display font-semibold text-[1rem] tracking-[-0.02em]"
                style={{ color: "var(--text)" }}
              >
                DeepChoices
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-[26ch]" style={{ color: "var(--text-2)" }}>
              Automatización e inteligencia aplicada para negocios locales en Colombia y LATAM.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-body text-[0.72rem] font-semibold tracking-[0.07em] uppercase mb-4"
                style={{ color: "var(--text-3)" }}
              >
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-[--accent]"
                      style={{ color: "var(--text-2)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-7 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="text-[0.78rem]" style={{ color: "var(--text-3)" }}>
            © 2025 DeepChoices. {siteConfig.location}.
          </span>
          <span className="flex items-center gap-1.5 text-[0.78rem]" style={{ color: "var(--text-3)" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {siteConfig.location} · Servicio en toda LATAM
          </span>
        </div>
      </div>
    </footer>
  );
}
