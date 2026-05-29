"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const FAQS = [
  {
    q: "Mi negocio ya usa WhatsApp y Excel. ¿Esto sirve igual?",
    a: "Sí. De hecho, ese es el escenario más común. Partimos de lo que ya tienes y construimos sobre ello. No tienes que abandonar WhatsApp ni cambiar la forma en que tu equipo trabaja. Automatizamos las partes repetitivas sin romper lo que ya funciona.",
  },
  {
    q: "¿Tengo que cambiar mi software actual?",
    a: "En la mayoría de los casos, no. Integramos con lo que ya usas: WhatsApp Business, Google Sheets, tu POS, tu plataforma de pagos. Si hay alguna herramienta que no encaja bien, lo discutimos en el diagnóstico antes de proponer cualquier cambio.",
  },
  {
    q: "¿Esto es solo IA generativa o chatbots?",
    a: "No. Usamos la tecnología que le sirve a cada caso: automatización de flujos, integraciones entre herramientas, modelos de lenguaje cuando tienen sentido, analítica de datos, agentes para tareas complejas. Nada de IA por IA. Todo orientado a un resultado operativo concreto.",
  },
  {
    q: "¿Cuánto tarda una implementación?",
    a: "Depende del alcance. Una automatización puntual puede estar en producción en 2 a 4 semanas. Un sistema más completo, entre 6 y 10 semanas. En el diagnóstico definimos el alcance inicial y los tiempos reales antes de comprometerse con nada.",
  },
  {
    q: "¿Se puede empezar por algo pequeño?",
    a: "Sí, y generalmente es lo recomendable. Empezamos por el punto de mayor impacto para tu negocio específico y expandimos desde ahí. El diagnóstico sirve precisamente para priorizar por dónde empezar.",
  },
  {
    q: "¿Cuánto soporte incluye después de implementar?",
    a: "Todas las implementaciones incluyen un período de acompañamiento post-lanzamiento. Los planes de servicio recurrente incluyen monitoreo continuo, ajustes y mejoras programadas. Nada se entrega y se abandona.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 lg:py-28 border-t"
      style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1260px] px-6 sm:px-9">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="lg:sticky lg:top-28"
          >
            <h2
              className="font-display font-bold leading-[1.1]"
              style={{ fontSize: "clamp(1.9rem, 3vw, 2.5rem)", color: "var(--text)" }}
            >
              Lo que más preguntan antes de empezar
            </h2>
          </motion.div>

          {/* Right: accordion */}
          <div className="max-w-[680px]">
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="border-t"
                style={{
                  borderColor: "var(--border)",
                  borderBottom: i === FAQS.length - 1 ? "1px solid var(--border)" : undefined,
                }}
              >
                <button
                  className="w-full text-left py-5 flex items-center justify-between gap-4 transition-colors duration-200"
                  style={{ color: open === i ? "var(--accent)" : "var(--text)" }}
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-display font-semibold" style={{ fontSize: "0.95rem" }}>
                    {faq.q}
                  </span>
                  <span
                    className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      background: open === i ? "var(--accent)" : "transparent",
                      borderColor: open === i ? "var(--accent)" : "var(--border)",
                    }}
                  >
                    {open === i
                      ? <Minus size={10} weight="bold" color="#F0F0EE" />
                      : <Plus size={10} weight="bold" color="var(--text-3)" />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="pb-5 text-sm leading-[1.75]"
                        style={{ color: "var(--text-2)", maxWidth: "60ch" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
