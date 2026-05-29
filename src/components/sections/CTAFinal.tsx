"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export function CTAFinal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".rv");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, me interesa saber más sobre DeepChoices")}`;
  const mailUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Solicitud de diagnóstico")}`;

  return (
    <section
      id="cta"
      ref={ref}
      className="border-t py-24"
      style={{ background: "var(--bg-3)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1260px] px-9">
        <div className="rv text-center max-w-[600px] mx-auto">
          <h2
            className="font-display font-bold leading-[1.1] tracking-[-0.025em] mb-5"
            style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)", color: "var(--text)" }}
          >
            Tu operación puede funcionar mejor de lo que funciona hoy
          </h2>
          <p className="text-[0.95rem] leading-[1.65] mb-8" style={{ color: "var(--text-2)" }}>
            El diagnóstico es gratuito y sin compromiso. En una sesión identificamos los puntos de mayor impacto para tu negocio y te explicamos exactamente cómo los resolveríamos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Button href={mailUrl}>Solicitar diagnóstico</Button>
            <Button
              href={waUrl}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
