"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problema"
      ref={ref}
      className="border-t border-b py-20 lg:py-28"
      style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1260px] px-6 sm:px-9">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="font-display font-bold mb-14"
          style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "var(--text)", maxWidth: "22ch" }}
        >
          El costo invisible de operar en modo manual
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {PROBLEMAS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: i * 0.07 }}
              className="grid gap-4 py-7 border-t"
              style={{
                gridTemplateColumns: "44px 1fr",
                borderColor: "var(--border)",
                paddingRight: i % 2 === 0 ? "2.5rem" : undefined,
                paddingLeft: i % 2 === 1 ? "2.5rem" : undefined,
                borderLeft: i % 2 === 1 ? "1px solid var(--border)" : undefined,
              }}
            >
              <span
                className="font-display text-[0.65rem] font-bold tracking-[0.1em] pt-0.5"
                style={{ color: "var(--accent)" }}
              >
                {p.num}
              </span>
              <div>
                <p
                  className="font-display font-semibold mb-1.5"
                  style={{ fontSize: "0.97rem", color: "var(--text)" }}
                >
                  {p.title}
                </p>
                <p className="text-sm leading-[1.65]" style={{ color: "var(--text-2)" }}>
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
