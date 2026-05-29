"use client";

import { useEffect, useRef } from "react";

const RESULTADOS = [
  {
    metric: "Respuesta inmediata",
    label: "Tiempo de atención al cliente",
    desc: "Tus clientes reciben respuesta en segundos, no en horas. Sin depender de que alguien esté disponible en ese momento.",
  },
  {
    metric: "Seguimiento constante",
    label: "Recuperación de oportunidades",
    desc: "Cada lead, cada cotización, cada contacto tiene un próximo paso automatizado. Nada queda en el olvido por falta de tiempo.",
  },
  {
    metric: "Panorama claro",
    label: "Visibilidad del negocio",
    desc: "Métricas de ventas, atención y operación consolidadas y accesibles. Menos intuición, más criterio en cada decisión.",
  },
];

export function Resultados() {
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
    <section id="resultados" ref={ref} className="py-24">
      <div className="mx-auto max-w-[1260px] px-9">

        <h2
          className="rv font-display font-bold mb-14 max-w-[26ch]"
          style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--text)" }}
        >
          Lo que cambia cuando la operación se ordena
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {RESULTADOS.map((r, i) => (
            <div
              key={r.label}
              className={`rv${i > 0 ? ` d${i}` : ""}`}
              style={{
                padding: i === 0 ? "0 52px 0 0" : i === 1 ? "0 52px" : "0 0 0 52px",
                borderRight: i < 2 ? "1px solid var(--border)" : undefined,
              }}
            >
              <div
                className="font-display font-bold mb-2.5 leading-none"
                style={{ fontSize: "1.85rem", color: "var(--accent)" }}
              >
                {r.metric}
              </div>
              <h3
                className="font-display font-semibold text-[0.95rem] mb-2"
                style={{ color: "var(--text)" }}
              >
                {r.label}
              </h3>
              <p className="text-[0.85rem] leading-[1.6]" style={{ color: "var(--text-2)" }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
