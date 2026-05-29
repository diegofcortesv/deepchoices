"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MagnifyingGlass, Wrench, Rocket, ArrowsClockwise } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Entendemos tu operación real: cómo llegan los clientes, los cuellos de botella, qué se hace a mano y qué herramientas ya tienes. Sin compromiso.",
    Icon: MagnifyingGlass,
    active: true,
  },
  {
    num: "02",
    title: "Diseño de solución",
    desc: "Proponemos qué se automatiza, con qué herramientas y qué resultados esperar. Nada genérico: cada solución parte de tu caso específico.",
    Icon: Wrench,
    active: true,
  },
  {
    num: "03",
    title: "Implementación",
    desc: "Construimos e integramos la solución en tu operación actual. Capacitamos al equipo y validamos que todo funcione antes de salir en producción.",
    Icon: Rocket,
    active: false,
  },
  {
    num: "04",
    title: "Mejora continua",
    desc: "Hacemos seguimiento post-implementación, ajustamos lo que necesita ajuste y expandimos la automatización cuando el negocio crece o cambia.",
    Icon: ArrowsClockwise,
    active: false,
  },
];

export function Proceso() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proceso" ref={ref} className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1260px] px-6 sm:px-9">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "var(--text)", maxWidth: "26ch" }}
          >
            De la operación actual a la automatizada, paso a paso
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
            className="hidden lg:block absolute top-[19px] left-[calc(100%/8)] right-[calc(100%/8)] h-px origin-left"
            style={{ background: "var(--border)" }}
          />

          {STEPS.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.1 }}
                className="relative z-10"
              >
                <div
                  className="w-[38px] h-[38px] rounded-full border flex items-center justify-center mb-6"
                  style={{
                    background: s.active ? "var(--accent-lt)" : "var(--bg)",
                    borderColor: s.active ? "var(--accent)" : "var(--border)",
                  }}
                >
                  <Icon
                    size={16}
                    weight="duotone"
                    color={s.active ? "var(--accent)" : "var(--text-3)"}
                  />
                </div>

                <span
                  className="block font-display text-[0.65rem] font-bold tracking-[0.1em] uppercase mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {s.num}
                </span>
                <h3 className="font-display font-semibold mb-2" style={{ fontSize: "1rem", color: "var(--text)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-[1.65]" style={{ color: "var(--text-2)" }}>
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
