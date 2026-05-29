"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Lightning, CheckCircle } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.9, ease } },
};

const SECTORS = ["Gimnasios", "Restaurantes", "Retail", "Servicios locales", "Salud y bienestar"];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        minHeight: "100dvh",
        paddingTop: "64px",
        background: "var(--hero-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle teal glow — brand color only, not AI purple */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,92,82,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="mx-auto w-full max-w-[1260px] px-6 sm:px-9">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center py-20 lg:py-28"
        >
          {/* LEFT: copy */}
          <div>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  border: "1px solid var(--hero-border)",
                  color: "var(--hero-accent)",
                  background: "rgba(42,144,130,0.1)",
                  letterSpacing: "0.02em",
                }}
              >
                <Lightning size={11} weight="fill" />
                Boutique de automatización para pymes
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                letterSpacing: "-0.03em",
                color: "var(--hero-text)",
                maxWidth: "14ch",
              }}
            >
              Menos tiempo operando.{" "}
              <span style={{ color: "var(--hero-accent)" }}>
                Más tiempo creciendo.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="leading-[1.7] mb-8"
              style={{
                fontSize: "1.08rem",
                color: "var(--hero-text-2)",
                maxWidth: "42ch",
              }}
            >
              Automatizamos atención, seguimiento y operación para que tu negocio venda más con menos carga manual.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-10">
              <Button href="#cta">
                Solicitar diagnóstico
                <ArrowRight size={15} weight="bold" />
              </Button>
              <Button
                href="#soluciones"
                variant="ghost"
                style={{
                  borderColor: "var(--hero-border)",
                  color: "var(--hero-text)",
                }}
              >
                Ver soluciones
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {["Diagnóstico gratuito", "Sin permanencia mínima", "Resultados en semanas"].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: "var(--hero-text-2)" }}
                >
                  <CheckCircle size={13} weight="fill" style={{ color: "var(--hero-accent)" }} />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: animated diagram */}
          <motion.div
            variants={fadeIn}
            className="flex justify-center lg:justify-end"
          >
            <HeroDiagram />
          </motion.div>
        </motion.div>
      </div>

      {/* Sector ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{
          borderTop: "1px solid var(--hero-border)",
          padding: "14px 0",
          background: "rgba(12,18,16,0.7)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="marquee-inner select-none" aria-hidden="true">
          {[...SECTORS, ...SECTORS, ...SECTORS, ...SECTORS].map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-3 px-6 text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--hero-text-2)", whiteSpace: "nowrap" }}
            >
              {s}
              <span style={{ color: "var(--hero-accent)", fontSize: 10 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroDiagram() {
  return (
    <svg
      viewBox="0 0 400 480"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 380 }}
    >
      {/* Background card */}
      <rect
        x="12" y="12" width="376" height="456"
        rx="20"
        fill="var(--hero-surface)"
        stroke="var(--hero-border)"
        strokeWidth="1"
      />

      {/* Grid dots */}
      <g opacity=".08">
        {[60,120,180,240,300,360].map((x) =>
          [60,120,180,240,300,360,420].map((y) => (
            y < 460 ? <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="var(--hero-text)" /> : null
          ))
        )}
      </g>

      {/* Connection lines */}
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
        <line x1="100" y1="110" x2="200" y2="110"/>
        <line x1="200" y1="110" x2="300" y2="200"/>
        <line x1="100" y1="200" x2="200" y2="110"/>
        <line x1="300" y1="320" x2="200" y2="370"/>
        <line x1="100" y1="290" x2="200" y2="370"/>
      </g>

      {/* Active path — animated dashes */}
      <path
        d="M100,110 L200,110 L300,200 L200,370 L300,320"
        stroke="var(--hero-accent)"
        strokeWidth="1.5"
        strokeDasharray="6 5"
        className="path-anim"
        opacity=".6"
        fill="none"
      />

      {/* Node: Atención */}
      <g className="np1">
        <circle cx="100" cy="110" r="30" fill="var(--hero-accent)" opacity=".12"/>
        <circle cx="100" cy="110" r="20" fill="var(--hero-accent)"/>
        <rect x="91" y="103" width="17" height="12" rx="3" stroke="#F0F0EE" strokeWidth="1.2" fill="none"/>
        <path d="M92 113l-4 5 5.5-1.8" stroke="#F0F0EE" strokeWidth="1.2" strokeLinecap="round"/>
      </g>

      {/* Node: Seguimiento */}
      <g className="np2">
        <circle cx="200" cy="110" r="26" fill="var(--hero-accent)" opacity=".1"/>
        <circle cx="200" cy="110" r="17" fill="var(--hero-accent)" opacity=".8"/>
        <path d="M194 110l4.5 4.5 7-7" stroke="#F0F0EE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      {/* Node: Agenda */}
      <g>
        <circle cx="300" cy="200" r="26" fill="var(--hero-accent)" opacity=".12"/>
        <circle cx="300" cy="200" r="18" fill="var(--hero-accent)"/>
        <rect x="290" y="193" width="18" height="14" rx="2.5" stroke="#F0F0EE" strokeWidth="1.2" fill="none"/>
        <line x1="294" y1="191" x2="294" y2="196" stroke="#F0F0EE" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="306" y1="191" x2="306" y2="196" stroke="#F0F0EE" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="290" y1="200" x2="308" y2="200" stroke="#F0F0EE" strokeWidth="1" opacity=".45"/>
      </g>

      {/* Node: Analítica */}
      <g className="np3">
        <circle cx="200" cy="370" r="32" fill="var(--hero-accent)" opacity=".12"/>
        <circle cx="200" cy="370" r="21" fill="var(--hero-accent)"/>
        <rect x="191" y="374" width="5" height="6"  fill="#F0F0EE" opacity=".9" rx="1"/>
        <rect x="198" y="368" width="5" height="12" fill="#F0F0EE" opacity=".9" rx="1"/>
        <rect x="205" y="362" width="5" height="18" fill="#F0F0EE" opacity=".9" rx="1"/>
      </g>

      {/* Node: Operación */}
      <g className="np4">
        <circle cx="300" cy="320" r="22" fill="rgba(255,255,255,0.04)" stroke="var(--hero-border)" strokeWidth="1.2"/>
        <circle cx="300" cy="320" r="12" fill="var(--hero-accent)" opacity=".25"/>
        <path d="M295 320h10M300 315v10" stroke="var(--hero-accent)" strokeWidth="1.8" strokeLinecap="round"/>
      </g>

      <circle cx="100" cy="200" r="8" fill="var(--hero-accent)" opacity=".3"/>
      <circle cx="100" cy="290" r="6" fill="rgba(255,255,255,0.08)" stroke="var(--hero-border)" strokeWidth="1"/>

      {/* Labels */}
      <g fontFamily="system-ui" fontSize="9" fill="var(--hero-text-2)" textAnchor="middle">
        <text x="100" y="148">Atención</text>
        <text x="200" y="142">Seguimiento</text>
        <text x="300" y="234">Agenda</text>
        <text x="200" y="406">Analítica</text>
        <text x="300" y="354">Operación</text>
      </g>

      {/* Top stat card */}
      <rect x="36" y="36" width="130" height="52" rx="10" fill="rgba(255,255,255,0.04)" stroke="var(--hero-border)" strokeWidth="1"/>
      <text x="50" y="56" fontFamily="system-ui" fontSize="18" fontWeight="700" fill="var(--hero-accent)">24/7</text>
      <text x="50" y="72" fontFamily="system-ui" fontSize="8.5" fill="var(--hero-text-2)" opacity=".7">Atención automatizada</text>

      {/* Bottom stat card */}
      <rect x="246" y="400" width="120" height="48" rx="10" fill="rgba(255,255,255,0.04)" stroke="var(--hero-border)" strokeWidth="1"/>
      <text x="258" y="421" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="var(--hero-accent)">2-4 sem.</text>
      <text x="258" y="436" fontFamily="system-ui" fontSize="8.5" fill="var(--hero-text-2)" opacity=".7">Tiempo de entrega</text>
    </svg>
  );
}
