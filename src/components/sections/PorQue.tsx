"use client";

import { useEffect, useRef } from "react";

const DIFERENCIADORES = [
  {
    title: "Soluciones a medida, no paquetes genéricos",
    desc: "Cada implementación parte de entender tu operación específica. No hay un paquete para gimnasios que le sirva igual a todos los gimnasios.",
  },
  {
    title: "Implementación real, no promesas de roadmap",
    desc: "Lo que construimos funciona desde el primer día. No vendemos estrategias en presentaciones ni pilotos que nunca escalan.",
  },
  {
    title: "Criterio técnico con visión de negocio",
    desc: "Tomamos decisiones de arquitectura pensando en costos operativos, escalabilidad y facilidad de uso para tu equipo.",
  },
  {
    title: "Para negocios que ya venden",
    desc: "No trabajamos con empresas que exploran si la IA sirve. Trabajamos con negocios que ya tienen operación y quieren que funcione mejor.",
  },
];

export function PorQue() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".rv");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="porque"
      ref={ref}
      className="py-24 border-t border-b"
      style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1260px] px-9">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_8fr] gap-20 items-start">

          {/* Left statement */}
          <div className="rv">
            <h2
              className="font-display font-bold leading-[1.18] mb-5"
              style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)", color: "var(--text)" }}
            >
              Tecnología aplicada al negocio real, no a las demos
            </h2>
            <p className="text-[0.9rem] leading-[1.7]" style={{ color: "var(--text-2)" }}>
              DeepChoices no es una agencia de marketing ni una consultora de transformación digital. Somos una firma boutique que construye soluciones concretas con IA, automatización y datos para negocios que ya operan y quieren crecer con orden.
            </p>
          </div>

          {/* Differentiators list */}
          <div>
            {DIFERENCIADORES.map((d, i) => (
              <div
                key={d.title}
                className={`rv${i >= 1 ? " d1" : ""} grid gap-3.5 py-6 border-t`}
                style={{
                  gridTemplateColumns: "16px 1fr",
                  borderColor: "var(--border)",
                  borderBottom: i === DIFERENCIADORES.length - 1 ? "1px solid var(--border)" : undefined,
                }}
              >
                <div
                  className="w-[7px] h-[7px] rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                <div>
                  <h3
                    className="font-display text-[0.92rem] font-semibold mb-1"
                    style={{ color: "var(--text)" }}
                  >
                    {d.title}
                  </h3>
                  <p className="text-[0.85rem] leading-[1.6]" style={{ color: "var(--text-2)" }}>
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
