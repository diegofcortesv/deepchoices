"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckFat } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="porque"
      ref={ref}
      className="py-20 lg:py-28 border-t border-b"
      style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1260px] px-6 sm:px-9">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_8fr] gap-16 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <h2
              className="font-display font-bold leading-[1.15] mb-5"
              style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)", color: "var(--text)" }}
            >
              Tecnología aplicada al negocio real, no a las demos
            </h2>
            <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--text-2)" }}>
              DeepChoices no es una agencia de marketing ni una consultora de transformación digital. Somos una firma boutique que construye soluciones concretas con IA, automatización y datos para negocios que ya operan y quieren crecer con orden.
            </p>
          </motion.div>

          <div>
            {DIFERENCIADORES.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="grid gap-3.5 py-6 border-t"
                style={{
                  gridTemplateColumns: "20px 1fr",
                  borderColor: "var(--border)",
                  borderBottom: i === DIFERENCIADORES.length - 1 ? "1px solid var(--border)" : undefined,
                }}
              >
                <CheckFat size={14} weight="fill" style={{ color: "var(--accent)", marginTop: 2 }} />
                <div>
                  <h3
                    className="font-display font-semibold mb-1"
                    style={{ fontSize: "0.93rem", color: "var(--text)" }}
                  >
                    {d.title}
                  </h3>
                  <p className="text-[0.85rem] leading-[1.65]" style={{ color: "var(--text-2)" }}>
                    {d.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
