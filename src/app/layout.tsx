import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepchoices.co"),
  title: {
    default: "DeepChoices — Automatización e Inteligencia para Pymes",
    template: "%s | DeepChoices",
  },
  description:
    "Automatizamos atención al cliente, seguimiento comercial y operación para gimnasios, restaurantes, retail y negocios de servicios en Colombia y LATAM.",
  keywords: [
    "automatización pymes",
    "whatsapp automatico",
    "IA para negocios",
    "automatización colombia",
    "software gimnasios",
    "agendamiento automatico",
  ],
  authors: [{ name: "DeepChoices", url: "https://deepchoices.co" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "DeepChoices",
    title: "DeepChoices — Menos tiempo operando. Más tiempo creciendo.",
    description:
      "Firma boutique de automatización e inteligencia aplicada para pymes locales que ya operan y quieren crecer con orden.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepChoices — Automatización e Inteligencia para Pymes",
    description:
      "Soluciones concretas de IA y automatización para negocios locales en LATAM.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${outfit.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
