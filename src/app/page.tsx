import { Hero }       from "@/components/sections/Hero";
import { Problema }   from "@/components/sections/Problema";
import { Soluciones } from "@/components/sections/Soluciones";
import { Sectores }   from "@/components/sections/Sectores";
import { Proceso }    from "@/components/sections/Proceso";
import { PorQue }     from "@/components/sections/PorQue";
import { Resultados } from "@/components/sections/Resultados";
import { FAQ }        from "@/components/sections/FAQ";
import { CTAFinal }   from "@/components/sections/CTAFinal";
import { Header }     from "@/components/layout/Header";
import { Footer }     from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Soluciones />
        <Sectores />
        <Proceso />
        <PorQue />
        <Resultados />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
