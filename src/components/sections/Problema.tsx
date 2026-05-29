"use client";

import { useEffect, useRef } from "react";

const PROBLEMAS = [
  {
    num: "01",
    title: "Mensajes sin responder",
    desc: "Clientes que preguntan por WhatsApp y no reciben respuesta a tiempo. Oportunidades que se enfrían mientras el equipo atiende otras tareas.",
  },
  {
    num: "02",
    title: "Leads que se pierden",
    desc: "Sin seguimiento sistemático, los contactos se acumulan en el chat y nadie sabe en qué estado está cada uno. El cierre queda en manos del azar.",
  },
  {
    num: "03",
    title: "Agendamiento a mano",
    desc: "Reservas gestionadas entre WhatsApp, llamadas y un cuaderno. Confirmaciones olvidadas, doble reserva, clientes que no llegan.",
  },
  {
    num: "04",
    title: "Operación fragmentada",
    desc: "Los datos viven en WhatsApp, Excel, el POS, las redes y la memoria del equipo. Nadie tiene el panorama completo del negocio.",
  },
  {
    num: "05",
    title: "Decisiones sin información",
    desc: "Se toman decisiones importantes por intuición porque los datos no están consolidados ni son accesibles cuando se necesitan.",
  },
  {
    num: "06",
    title: "Tiempo en tareas repetitivas",
    desc: "El equipo dedica horas a confirmaciones, recordatorios, reportes y actualizaciones que podrían ejecutarse solos.",
  },
];

export function Problema() {
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
      id="problema"
      ref={ref}
      className="border-t border-b py-24"
      style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1260px] px-9">
        <h2
          className="rv font-display font-bold mb-14 max-w-[22ch]"
          style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--text)" }}
        >
          El costo invisible de operar en modo manual
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {PROBLEMAS.map((p, i) => (
            <div
              key={p.num}
              className={`rv${i % 2 === 1 ? " d1" : ""} grid gap-4 py-7 border-t`}
              style={{
                gridTemplateColumns: "40px 1fr",
                borderColor: "var(--border)",
                paddingRight: i % 2 === 0 ? "40px" : undefined,
                paddingLeft: i % 2 === 1 ? "40px" : undefined,
                borderLeft: i % 2 === 1 ? "1px solid var(--border)" : undefined,
              }}
            >
              <span
                className="font-display text-[0.68rem] font-semibold tracking-[0.08em] pt-0.5"
                style={{ color: "var(--accent)" }}
              >
                {p.num}
              </span>
              <div>
                <p
                  className="font-display text-[0.95rem] font-semibold mb-1.5"
                  style={{ color: "var(--text)" }}
                >
                  {p.title}
                </p>
                <p className="text-sm leading-[1.6]" style={{ color: "var(--text-2)" }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
