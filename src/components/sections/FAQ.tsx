"use client";

import { useState, useEffect, useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

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
      id="faq"
      ref={ref}
      className="py-24 border-t"
      style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1260px] px-9">

        <div className="rv mb-11">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2
            className="font-display font-bold max-w-[26ch]"
            style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--text)" }}
          >
            Lo que más preguntan antes de empezar
          </h2>
        </div>

        <div className="max-w-[740px]">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="rv border-t"
              style={{
                borderColor: "var(--border)",
                borderBottom: i === FAQS.length - 1 ? "1px solid var(--border)" : undefined,
              }}
            >
              <button
                className="w-full text-left py-6 flex items-center justify-between gap-4 transition-colors duration-200"
                style={{ color: open === i ? "var(--accent)" : "var(--text)" }}
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-semibold text-[0.95rem]">{faq.q}</span>
                <span
                  className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    background: open === i ? "var(--accent)" : "transparent",
                    borderColor: open === i ? "var(--accent)" : "var(--border)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg
                    width="11" height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke={open === i ? "#F5F3EF" : "var(--text-3)"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <line x1="6" y1="1" x2="6" y2="11"/>
                    <line x1="1" y1="6" x2="11" y2="6"/>
                  </svg>
                </span>
              </button>

              {open === i && (
                <p
                  className="pb-6 text-sm leading-[1.7] max-w-[62ch]"
                  style={{ color: "var(--text-2)" }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
