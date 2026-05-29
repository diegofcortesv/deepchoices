"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

const TRUST_PILLS = ["Gimnasios", "Restaurantes", "Retail", "Servicios locales"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".rv");
    if (!("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="flex items-center"
      style={{ minHeight: "100dvh", paddingTop: "72px" }}
    >
      <div className="mx-auto w-full max-w-[1260px] px-9">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-14 items-center py-20 lg:py-24">

          {/* Left: copy */}
          <div className="max-w-[560px]">
            <h1
              className="rv font-display font-bold tracking-[-0.03em] leading-[1.07] mb-6"
              style={{
                fontSize: "clamp(2.6rem, 5vw, 3.8rem)",
                color: "var(--text)",
              }}
            >
              Menos tiempo operando.{" "}
              <br className="hidden sm:block" />
              Más tiempo{" "}
              <em className="not-italic" style={{ color: "var(--accent)" }}>
                creciendo.
              </em>
            </h1>

            <p
              className="rv d1 text-[1.05rem] leading-[1.65] mb-8 max-w-[44ch]"
              style={{ color: "var(--text-2)" }}
            >
              Automatizamos atención, seguimiento y operación para que tu negocio venda más con menos carga manual.
            </p>

            <div className="rv d2 flex flex-wrap items-center gap-2.5 mb-10">
              <Button href="#cta">Solicitar diagnóstico</Button>
              <Button href="#soluciones" variant="ghost">Ver soluciones</Button>
            </div>

            <div className="rv d3 flex flex-wrap items-center gap-3.5">
              <span
                className="text-[0.7rem] font-medium tracking-[0.07em] uppercase"
                style={{ color: "var(--text-3)" }}
              >
                Para
              </span>
              <div className="flex flex-wrap gap-1.5">
                {TRUST_PILLS.map((p) => (
                  <span
                    key={p}
                    className="text-[0.75rem] font-medium px-3 py-1 rounded-full border"
                    style={{
                      color: "var(--text-2)",
                      background: "var(--bg-2)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: abstract SVG diagram */}
          <div className="rv d2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px]">
              <HeroDiagram />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function HeroDiagram() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid dots */}
      <g opacity=".12">
        {[48,128,208,288,368,432].map((x) =>
          [48,128,208,288,340].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="var(--text-2)"/>
          ))
        )}
      </g>

      {/* Passive lines */}
      <g stroke="var(--border)" strokeWidth="1">
        <line x1="108" y1="88"  x2="168" y2="88"/>
        <line x1="168" y1="88"  x2="280" y2="170"/>
        <line x1="108" y1="168" x2="168" y2="88"/>
        <line x1="360" y1="130" x2="400" y2="220"/>
        <line x1="168" y1="250" x2="260" y2="308"/>
        <line x1="260" y1="308" x2="360" y2="220"/>
      </g>

      {/* Active path */}
      <g stroke="var(--accent)" strokeWidth="1.5" opacity=".55" strokeDasharray="5 4">
        <line x1="96"  y1="88"  x2="196" y2="88"/>
        <line x1="196" y1="88"  x2="304" y2="168"/>
        <line x1="304" y1="168" x2="268" y2="308"/>
        <line x1="268" y1="308" x2="392" y2="308"/>
      </g>

      {/* Node: Atención/WhatsApp */}
      <g className="np1">
        <circle cx="96" cy="88" r="24" fill="var(--accent)" opacity=".12"/>
        <circle cx="96" cy="88" r="16" fill="var(--accent)"/>
        <rect x="88" y="81" width="16" height="11" rx="2.5" stroke="#F5F3EF" strokeWidth="1.3" fill="none"/>
        <path d="M88 90l-4 4 5-1.5" stroke="#F5F3EF" strokeWidth="1.3" strokeLinecap="round"/>
      </g>

      {/* Node: Seguimiento */}
      <g className="np2">
        <circle cx="196" cy="88" r="20" fill="var(--accent)" opacity=".1"/>
        <circle cx="196" cy="88" r="13" fill="var(--accent)" opacity=".75"/>
        <path d="M191 88l4 4 6-6" stroke="#F5F3EF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      {/* Node: Agendamiento */}
      <g>
        <circle cx="304" cy="168" r="22" fill="var(--accent)" opacity=".12"/>
        <circle cx="304" cy="168" r="15" fill="var(--accent)"/>
        <rect x="296" y="162" width="16" height="12" rx="2" stroke="#F5F3EF" strokeWidth="1.2" fill="none"/>
        <line x1="299.5" y1="160" x2="299.5" y2="165" stroke="#F5F3EF" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="308.5" y1="160" x2="308.5" y2="165" stroke="#F5F3EF" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="296" y1="168" x2="312" y2="168" stroke="#F5F3EF" strokeWidth="1" opacity=".55"/>
      </g>

      {/* Node: Analítica */}
      <g className="np3">
        <circle cx="268" cy="308" r="28" fill="var(--accent)" opacity=".12"/>
        <circle cx="268" cy="308" r="19" fill="var(--accent)"/>
        <rect x="260" y="312" width="4" height="5"  fill="#F5F3EF" opacity=".9" rx="1"/>
        <rect x="266" y="307" width="4" height="10" fill="#F5F3EF" opacity=".9" rx="1"/>
        <rect x="272" y="302" width="4" height="15" fill="#F5F3EF" opacity=".9" rx="1"/>
      </g>

      {/* Node: Operación */}
      <g>
        <circle cx="392" cy="308" r="19" fill="var(--bg-3)" stroke="var(--border)" strokeWidth="1"/>
        <circle cx="392" cy="308" r="11" fill="var(--accent)" opacity=".22"/>
        <path d="M388 308h8M392 304v8" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"/>
      </g>

      {/* Secondary nodes */}
      <circle cx="168" cy="250" r="7" fill="var(--accent)" opacity=".3"/>
      <circle cx="108" cy="168" r="7" fill="var(--bg-3)" stroke="var(--border)" strokeWidth="1"/>

      {/* Labels */}
      <g fontFamily="DM Sans, sans-serif" fontSize="9.5" fill="var(--text-2)" opacity=".65" textAnchor="middle">
        <text x="96"  y="118">Atención</text>
        <text x="196" y="114">Seguimiento</text>
        <text x="304" y="197">Agendamiento</text>
        <text x="268" y="342">Analítica</text>
        <text x="392" y="336">Operación</text>
      </g>
    </svg>
  );
}
