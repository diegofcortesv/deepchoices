"use client";

import { useEffect, useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STEPS = [
  {
    label: "Paso 01",
    title: "Diagnóstico",
    desc: "Entendemos tu operación real: cómo llegan los clientes, cuáles son los cuellos de botella, qué se hace a mano y qué herramientas ya tienes. Sin compromiso.",
    active: true,
  },
  {
    label: "Paso 02",
    title: "Diseño de solución",
    desc: "Proponemos qué se automatiza, con qué herramientas y qué resultados esperar. Nada genérico: cada solución parte de tu caso específico.",
    active: true,
  },
  {
    label: "Paso 03",
    title: "Implementación",
    desc: "Construimos e integramos la solución en tu operación actual. Capacitamos al equipo y validamos que todo funcione antes de salir en producción.",
    active: false,
  },
  {
    label: "Paso 04",
    title: "Mejora continua",
    desc: "Hacemos seguimiento post-implementación, ajustamos lo que necesita ajuste y expandimos la automatización cuando el negocio crece o cambia.",
    active: false,
  },
];

export function Proceso() {
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
    <section id="proceso" ref={ref} className="py-24">
      <div className="mx-auto max-w-[1260px] px-9">

        <div className="rv mb-16">
          <Eyebrow>Cómo trabajamos</Eyebrow>
          <h2
            className="font-display font-bold max-w-[26ch]"
            style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--text)" }}
          >
            De la operación actual a la automatizada, paso a paso
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-[19px] left-[calc(100%/8)] right-[calc(100%/8)] h-px"
            style={{ background: "var(--border)" }}
          />

          {STEPS.map((s, i) => (
            <div
              key={s.label}
              className={`rv${i === 1 ? " d1" : i === 2 ? " d2" : i === 3 ? " d3" : ""} relative z-10`}
            >
              {/* Dot */}
              <div
                className="w-[38px] h-[38px] rounded-full border flex items-center justify-center mb-6"
                style={{
                  background: s.active ? "var(--accent-lt)" : "var(--bg)",
                  borderColor: s.active ? "var(--accent)" : "var(--border)",
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: s.active ? "var(--accent)" : "var(--bg-3)" }}
                />
              </div>

              <span
                className="block font-body text-[0.68rem] font-semibold tracking-[0.08em] uppercase mb-2"
                style={{ color: "var(--accent)" }}
              >
                {s.label}
              </span>
              <h3
                className="font-display font-semibold text-[1rem] mb-2"
                style={{ color: "var(--text)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-[1.6]" style={{ color: "var(--text-2)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
