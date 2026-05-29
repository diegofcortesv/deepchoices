"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resultados" ref={ref} className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1260px] px-6 sm:px-9">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="font-display font-bold mb-16"
          style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "var(--text)", maxWidth: "26ch" }}
        >
          Lo que cambia cuando la operación se ordena
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {RESULTADOS.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              style={{
                padding: i === 0 ? "0 3rem 0 0" : i === 1 ? "0 3rem" : "0 0 0 3rem",
                borderRight: i < 2 ? "1px solid var(--border)" : undefined,
              }}
            >
              <div
                className="font-display font-bold mb-2.5 leading-none"
                style={{ fontSize: "1.9rem", color: "var(--accent)" }}
              >
                {r.metric}
              </div>
              <h3
                className="font-display font-semibold mb-2"
                style={{ fontSize: "0.95rem", color: "var(--text)" }}
              >
                {r.label}
              </h3>
              <p className="text-[0.85rem] leading-[1.65]" style={{ color: "var(--text-2)" }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
