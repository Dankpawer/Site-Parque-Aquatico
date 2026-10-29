import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/parque-data";

export default function Faq() {
  return (
    <section id="faq" className="bg-cream/75 py-20 md:py-24" aria-labelledby="titulo-faq">
      <div className="mx-auto max-w-[820px] px-4 lg:px-6">
        <p className="kicker text-center text-aqua-deep">Antes de vir</p>
        <h2
          id="titulo-faq"
          className="font-heading capitular mt-3 text-center text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold text-navy"
        >
          dúvidas frequentes
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-[0.92rem] leading-relaxed text-muted-foreground">
          Respostas rápidas para planejar a sua visita. Se a sua dúvida não
          estiver aqui, fale com a gente pelo WhatsApp.
        </p>

        <Accordion type="single" collapsible className="mt-12 space-y-3.5">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={item.pergunta}
              value={`item-${i}`}
              className="rounded-xl border border-border/60 bg-white px-5 shadow-[0_10px_28px_-22px_rgba(11,37,69,0.35)] data-[state=open]:border-aqua/40"
            >
              <AccordionTrigger className="py-4.5 text-left font-label text-[0.92rem] font-semibold text-navy hover:no-underline hover:text-aqua-deep [&>svg]:text-aqua">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[0.88rem] leading-relaxed text-muted-foreground">
                {item.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex justify-center">
          <a
            href="#contato"
            className="inline-flex h-11 items-center gap-2.5 rounded-full border-2 border-aqua px-7 font-label text-[0.74rem] font-bold uppercase tracking-[0.18em] text-aqua-deep transition-all hover:-translate-y-0.5 hover:bg-aqua hover:text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}
