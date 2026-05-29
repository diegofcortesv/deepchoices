"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function CTAFinal() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, me interesa saber más sobre DeepChoices")}`;
  const mailUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Solicitud de diagnóstico")}`;

  return (
    <section
      id="cta"
      ref={ref}
      className="py-24 lg:py-32 border-t"
      style={{ background: "var(--hero-bg)", borderColor: "rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "60vw",
          maxWidth: 1000,
          maxHeight: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,92,82,0.2) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="mx-auto max-w-[1260px] px-6 sm:px-9 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center max-w-[620px] mx-auto"
        >
          <h2
            className="font-display font-bold leading-[1.08] mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.03em", color: "var(--hero-text)" }}
          >
            Tu operación puede funcionar mejor de lo que funciona hoy
          </h2>
          <p
            className="leading-[1.7] mb-10"
            style={{ fontSize: "1rem", color: "var(--hero-text-2)", maxWidth: "48ch", margin: "0 auto 2.5rem" }}
          >
            El diagnóstico es gratuito y sin compromiso. En una sesión identificamos los puntos de mayor impacto para tu negocio y te explicamos exactamente cómo los resolveríamos.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={mailUrl}>
              Solicitar diagnóstico
              <ArrowRight size={15} weight="bold" />
            </Button>
            <Button
              href={waUrl}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: "var(--hero-border)", color: "var(--hero-text)" }}
            >
              <WhatsappLogo size={16} weight="fill" />
              Escribir por WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
