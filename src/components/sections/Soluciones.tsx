"use client";

import { useEffect, useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const SOLUCIONES = [
  {
    tag: "WhatsApp y atención",
    title: "Atención automática que suena como tu equipo",
    desc: "Respondemos consultas frecuentes, calificamos leads y escalamos al equipo humano cuando corresponde. Sin bots genéricos, sin respuestas que frustran. El canal de WhatsApp trabaja las 24 horas.",
    result: "Resultado: más conversaciones atendidas, menos carga para el equipo",
    for: "Para cualquier negocio con WhatsApp como canal principal",
    span: 7,
    accent: true,
    icon: ChatIcon,
  },
  {
    tag: "Agendamiento",
    title: "Reservas y recordatorios sin fricción",
    desc: "Agenda automatizada con confirmaciones por WhatsApp, recordatorios previos y seguimiento post-cita. Menos no-shows, menos trabajo manual.",
    result: "Resultado: agenda actualizada, equipo enfocado en atender",
    for: "Gimnasios, salones, consultorios, restaurantes",
    span: 5,
    accent: false,
    icon: CalendarIcon,
  },
  {
    tag: "Seguimiento comercial",
    title: "Ningún lead se enfría solo",
    desc: "Recuperamos contactos pendientes y mantenemos la conversación activa hasta el cierre. Sin depender de que alguien recuerde hacerlo.",
    for: "Negocios con ventas por consulta o cotización",
    span: 4,
    accent: false,
    icon: PulseIcon,
  },
  {
    tag: "Analítica operativa",
    title: "Datos que se leen, decisiones que se toman",
    desc: "Consolidamos métricas de ventas, atención y operación en reportes accionables. No hay que saber de tecnología para entenderlos.",
    result: "Resultado: menos intuición, más criterio en cada decisión",
    for: "Retail, restaurantes, negocios con operación compleja",
    span: 5,
    accent: false,
    icon: BarIcon,
  },
  {
    tag: "Automatización interna",
    title: "Flujos que se ejecutan solos",
    desc: "Reportes automáticos, alertas internas y tareas repetitivas que ya no necesitan a nadie del equipo para ejecutarse.",
    for: "Cualquier operación con pasos manuales repetibles",
    span: 3,
    accent: false,
    icon: StarIcon,
  },
];

export function Soluciones() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".rv");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="soluciones" ref={ref} className="py-24">
      <div className="mx-auto max-w-[1260px] px-9">

        <div className="rv mb-12">
          <Eyebrow>Qué hacemos</Eyebrow>
          <h2
            className="font-display font-bold mb-3.5 max-w-[28ch]"
            style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--text)" }}
          >
            Soluciones concretas para cada parte de la operación
          </h2>
          <p className="text-[0.95rem] leading-[1.6] max-w-[52ch]" style={{ color: "var(--text-2)" }}>
            Cada implementación parte de entender tu negocio. No vendemos paquetes ni demos bonitas.
          </p>
        </div>

        {/* Bento grid — asymmetric, 12-col base */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
          {SOLUCIONES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.tag}
                className={`rv${i === 1 ? " d1" : i === 2 ? "" : i === 3 ? " d1" : i === 4 ? " d2" : ""} rounded-[20px] border p-8 transition-all duration-200 hover:border-[--accent]`}
                style={{
                  gridColumn: `span ${s.span}`,
                  background: s.accent ? "var(--accent)" : i === 2 ? "var(--bg-2)" : i === 4 ? "var(--bg-3)" : "var(--surface)",
                  borderColor: s.accent ? "var(--accent)" : "var(--border)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: s.accent ? "rgba(245,243,239,0.14)" : "var(--accent-lt)",
                  }}
                >
                  <Icon accent={s.accent} />
                </div>

                {/* Tag */}
                <span
                  className="block font-body text-[0.68rem] font-semibold tracking-[0.09em] uppercase mb-3.5"
                  style={{ color: s.accent ? "rgba(245,243,239,0.55)" : "var(--accent)" }}
                >
                  {s.tag}
                </span>

                <h3
                  className="font-display font-semibold leading-[1.22] mb-2.5"
                  style={{
                    fontSize: "1.08rem",
                    color: s.accent ? "#F5F3EF" : "var(--text)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-[1.6] mb-4"
                  style={{ color: s.accent ? "rgba(245,243,239,0.72)" : "var(--text-2)" }}
                >
                  {s.desc}
                </p>

                {s.result && (
                  <p
                    className="text-[0.78rem] font-medium pt-3.5 border-t"
                    style={{
                      color: s.accent ? "rgba(245,243,239,0.82)" : "var(--accent)",
                      borderColor: s.accent ? "rgba(245,243,239,0.15)" : "var(--border)",
                    }}
                  >
                    {s.result}
                  </p>
                )}

                <p
                  className="text-[0.75rem] font-medium mt-3"
                  style={{ color: s.accent ? "rgba(245,243,239,0.45)" : "var(--text-3)" }}
                >
                  {s.for}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---- Icons ---- */
function ChatIcon({ accent }: { accent: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent ? "#F5F3EF" : "var(--accent)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}
function CalendarIcon({ accent }: { accent: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent ? "#F5F3EF" : "var(--accent)"} strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}
function PulseIcon({ accent }: { accent: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent ? "#F5F3EF" : "var(--accent)"} strokeWidth="1.5" strokeLinecap="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  );
}
function BarIcon({ accent }: { accent: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent ? "#F5F3EF" : "var(--accent)"} strokeWidth="1.5" strokeLinecap="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  );
}
function StarIcon({ accent }: { accent: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent ? "#F5F3EF" : "var(--accent)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}
