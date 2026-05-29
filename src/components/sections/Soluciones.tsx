"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ChatCircle, Calendar, ChartLine, Gear, TrendUp,
} from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const SOLUCIONES = [
  {
    tag: "WhatsApp y atención",
    title: "Atención automática que suena como tu equipo",
    desc: "Respondemos consultas frecuentes, calificamos leads y escalamos al humano cuando corresponde. Sin bots genéricos. El canal trabaja las 24 horas.",
    result: "Más conversaciones atendidas, menos carga para el equipo",
    for: "Para cualquier negocio con WhatsApp como canal principal",
    span: 7,
    accent: true,
    Icon: ChatCircle,
  },
  {
    tag: "Agendamiento",
    title: "Reservas y recordatorios sin fricción",
    desc: "Agenda automatizada con confirmaciones, recordatorios y seguimiento post-cita. Menos no-shows, menos trabajo manual.",
    result: "Agenda actualizada, equipo enfocado en atender",
    for: "Gimnasios, salones, consultorios, restaurantes",
    span: 5,
    accent: false,
    Icon: Calendar,
  },
  {
    tag: "Seguimiento comercial",
    title: "Ningún lead se enfría solo",
    desc: "Recuperamos contactos pendientes y mantenemos la conversación activa hasta el cierre. Sin depender de que alguien recuerde hacerlo.",
    for: "Negocios con ventas por consulta o cotización",
    span: 4,
    accent: false,
    Icon: TrendUp,
  },
  {
    tag: "Analítica operativa",
    title: "Datos que se leen, decisiones que se toman",
    desc: "Consolidamos métricas de ventas, atención y operación en reportes accionables. No hace falta saber de tecnología para entenderlos.",
    result: "Menos intuición, más criterio en cada decisión",
    for: "Retail, restaurantes, negocios con operación compleja",
    span: 5,
    accent: false,
    Icon: ChartLine,
  },
  {
    tag: "Automatización interna",
    title: "Flujos que se ejecutan solos",
    desc: "Reportes automáticos, alertas internas y tareas repetitivas que ya no necesitan a nadie para ejecutarse.",
    for: "Cualquier operación con pasos manuales repetibles",
    span: 3,
    accent: false,
    Icon: Gear,
  },
];

export function Soluciones() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="soluciones" ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1260px] px-6 sm:px-9">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <h2
            className="font-display font-bold mb-3.5"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "var(--text)", maxWidth: "28ch" }}
          >
            Soluciones concretas para cada parte de la operación
          </h2>
          <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--text-2)", maxWidth: "52ch" }}>
            Cada implementación parte de entender tu negocio. No vendemos paquetes ni demos bonitas.
          </p>
        </motion.div>

        {/* Bento grid — asymmetric 12-col */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {SOLUCIONES.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.tag}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="rounded-2xl border p-7 transition-all duration-300 hover:border-[--accent]"
                style={{
                  gridColumn: `span ${s.span}`,
                  background: s.accent ? "var(--accent)" : i === 2 ? "var(--bg-2)" : i === 4 ? "var(--bg-3)" : "var(--surface)",
                  borderColor: s.accent ? "var(--accent)" : "var(--border)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: s.accent ? "rgba(255,255,255,0.12)" : "var(--accent-lt)" }}
                >
                  <Icon
                    size={18}
                    weight="duotone"
                    color={s.accent ? "#F0F0EE" : "var(--accent)"}
                  />
                </div>

                <span
                  className="block text-[0.67rem] font-semibold tracking-[0.1em] uppercase mb-3.5"
                  style={{ color: s.accent ? "rgba(240,240,238,0.5)" : "var(--accent)" }}
                >
                  {s.tag}
                </span>

                <h3
                  className="font-display font-semibold leading-[1.22] mb-2.5"
                  style={{ fontSize: "1.05rem", color: s.accent ? "#F0F0EE" : "var(--text)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-[1.65] mb-4"
                  style={{ color: s.accent ? "rgba(240,240,238,0.68)" : "var(--text-2)" }}
                >
                  {s.desc}
                </p>

                {s.result && (
                  <p
                    className="text-[0.77rem] font-medium pt-3.5 border-t"
                    style={{
                      color: s.accent ? "rgba(240,240,238,0.8)" : "var(--accent)",
                      borderColor: s.accent ? "rgba(255,255,255,0.12)" : "var(--border)",
                    }}
                  >
                    {s.result}
                  </p>
                )}

                <p
                  className="text-[0.74rem] font-medium mt-3"
                  style={{ color: s.accent ? "rgba(240,240,238,0.4)" : "var(--text-3)" }}
                >
                  {s.for}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
