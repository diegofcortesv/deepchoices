"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Scenario = { title: string; desc: string };
type Sector = { label: string; id: string; img: string; seed: string; scenarios: Scenario[] };

const SECTORES: Sector[] = [
  {
    label: "Gimnasios",
    id: "gym",
    img: "https://picsum.photos/seed/gym-fitness-col/620/465",
    seed: "gym",
    scenarios: [
      {
        title: "Inscripciones y renovaciones por WhatsApp",
        desc: "Un cliente consulta planes a las 10pm. El asistente responde con tarifas, disponibilidad y opciones de pago. Si decide inscribirse, queda registrado automáticamente sin intervención del equipo.",
      },
      {
        title: "Recordatorios y control de asistencia",
        desc: "Confirmaciones automáticas dos horas antes de cada clase. Si el cliente no asiste, recibe un mensaje de seguimiento. Sin que nadie en el equipo lo gestione.",
      },
      {
        title: "Reactivación de miembros inactivos",
        desc: "Identificamos miembros que llevan semanas sin venir y les enviamos un mensaje personalizado. Conversión real, sin publicidad pagada.",
      },
    ],
  },
  {
    label: "Restaurantes",
    id: "rst",
    img: "https://picsum.photos/seed/restaurante-local-col/620/465",
    seed: "rst",
    scenarios: [
      {
        title: "Reservas sin llamadas",
        desc: "Los clientes reservan mesa por WhatsApp o Instagram. El sistema confirma disponibilidad, envía confirmación y recuerda la reserva con anticipación.",
      },
      {
        title: "Menu del día y pedidos automatizados",
        desc: "Actualización automática del menú del día en todos los canales. Los pedidos se registran sin que nadie tenga que transcribir nada.",
      },
      {
        title: "Fidelización de clientes frecuentes",
        desc: "Identificamos los clientes que más visitan y los impactamos con beneficios específicos. Fidelización real sin tarjetas de puntos genéricas.",
      },
    ],
  },
  {
    label: "Retail y moda",
    id: "ret",
    img: "https://picsum.photos/seed/tienda-ropa-boutique/620/465",
    seed: "ret",
    scenarios: [
      {
        title: "Consultas de tallas y disponibilidad",
        desc: "Un cliente pregunta si hay talla S en un color específico. El asistente consulta el inventario y responde en segundos, las 24 horas.",
      },
      {
        title: "Alertas de inventario y reabastecimiento",
        desc: "El sistema detecta referencias con stock crítico y genera una alerta interna o un pedido automático al proveedor. Menos quiebres de stock.",
      },
      {
        title: "Campañas de lanzamiento inteligentes",
        desc: "Cuando llega nueva colección, el sistema notifica a los clientes que compraron artículos similares. Relevancia real, no spam masivo.",
      },
    ],
  },
  {
    label: "Servicios locales",
    id: "svc",
    img: "https://picsum.photos/seed/servicios-negocio-local/620/465",
    seed: "svc",
    scenarios: [
      {
        title: "Cotizaciones y seguimiento de propuestas",
        desc: "Cada vez que alguien pide una cotización, el sistema registra el contacto, envía la propuesta y hace seguimiento automático en los días siguientes.",
      },
      {
        title: "Gestión de citas sin llamadas",
        desc: "El cliente agenda por WhatsApp, recibe confirmación y recordatorio automático. Si necesita reagendar, lo hace sin llamar.",
      },
      {
        title: "Reportes de operación sin esfuerzo manual",
        desc: "Cada semana el administrador recibe un resumen consolidado: servicios prestados, clientes atendidos, ingreso estimado.",
      },
    ],
  },
];

export function Sectores() {
  const [active, setActive] = useState(0);
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

  const sector = SECTORES[active];

  return (
    <section
      id="sectores"
      ref={ref}
      className="py-24 border-t border-b"
      style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1260px] px-9">

        <h2
          className="rv font-display font-bold mb-11 max-w-[26ch]"
          style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--text)" }}
        >
          Casos reales por industria
        </h2>

        {/* Tabs */}
        <div
          className="rv flex gap-0.5 border-b mb-10 overflow-x-auto scrollbar-hide"
          style={{ borderColor: "var(--border)" }}
          role="tablist"
        >
          {SECTORES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === i}
              aria-controls={`tp-${s.id}`}
              onClick={() => setActive(i)}
              className="font-body text-[0.875rem] font-medium px-[18px] py-3 border-b-2 mb-[-1px] transition-all duration-200 whitespace-nowrap"
              style={{
                color: active === i ? "var(--accent)" : "var(--text-3)",
                borderBottomColor: active === i ? "var(--accent)" : "transparent",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          id={`tp-${sector.id}`}
          role="tabpanel"
          className="rv d1 grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 items-start"
        >
          {/* Image */}
          <div className="hidden md:block rounded-[20px] overflow-hidden aspect-[4/3] relative">
            <Image
              src={sector.img}
              alt={sector.label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          {/* Scenarios */}
          <div>
            {sector.scenarios.map((sc, i) => (
              <div
                key={sc.title}
                className="py-6"
                style={{
                  borderBottom: i < sector.scenarios.length - 1 ? "1px solid var(--border-2)" : undefined,
                }}
              >
                <h3
                  className="font-display text-[0.95rem] font-semibold mb-1.5"
                  style={{ color: "var(--text)" }}
                >
                  {sc.title}
                </h3>
                <p className="text-sm leading-[1.6]" style={{ color: "var(--text-2)" }}>
                  {sc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
