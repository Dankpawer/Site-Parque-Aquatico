"use client";

import { Check, Sparkles } from "lucide-react";
import { INGRESSOS } from "@/lib/parque-data";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export default function Ingressos() {
  const { toast } = useToast();

  const aoEscolher = (nome: string, preco: string) => {
    toast({
      title: `${nome} selecionado! 🎟️`,
      description: `Ingresso ${nome} — ${preco}. Valores ilustrativos para demonstração do site; finalize a compra pelo WhatsApp em breve.`,
    });
  };

  return (
    <section id="ingressos" className="bg-sand/80 py-20 md:py-24" aria-labelledby="titulo-ingressos">
      <div className="mx-auto max-w-[1180px] px-4 lg:px-6">
        <p className="kicker text-center text-aqua-deep">Planos e promoções</p>
        <h2
          id="titulo-ingressos"
          className="font-heading capitular mt-3 text-center text-[clamp(1.8rem,3.8vw,2.8rem)] font-bold text-navy"
        >
          escolha o seu dia no MUKAI
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-[0.94rem] leading-relaxed text-muted-foreground">
          Quatro formas de viver o parque: do passe de um dia ao ano inteiro de
          verão. Crianças de até 5 anos não pagam entrada.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INGRESSOS.map((i) => (
            <article
              key={i.nome}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                i.destaque
                  ? "border-aqua bg-navy shadow-[0_30px_60px_-28px_rgba(11,37,69,0.65)]"
                  : "border-border/60 bg-white shadow-[0_18px_44px_-28px_rgba(11,37,69,0.35)] hover:shadow-[0_26px_52px_-28px_rgba(31,163,199,0.45)]"
              }`}
            >
              {i.destaque && (
                <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 font-label text-[0.64rem] font-bold uppercase tracking-[0.14em] text-navy shadow-lg">
                  <Sparkles className="h-3 w-3" aria-hidden />
                  Melhor custo-benefício
                </span>
              )}

              <h3
                className={`font-heading text-[1.08rem] font-bold ${
                  i.destaque ? "text-gold-light" : "text-navy"
                }`}
              >
                {i.nome}
              </h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span
                  className={`font-heading text-[2.1rem] leading-none font-black ${
                    i.destaque ? "text-cream" : "text-aqua-deep"
                  }`}
                >
                  {i.preco}
                </span>
                <span
                  className={`font-label text-[0.72rem] font-medium ${
                    i.destaque ? "text-cream/60" : "text-muted-foreground"
                  }`}
                >
                  {i.porPessoa}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {i.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        i.destaque ? "text-gold-light" : "text-aqua"
                      }`}
                      aria-hidden
                    />
                    <span
                      className={`text-[0.83rem] leading-snug ${
                        i.destaque ? "text-cream/85" : "text-navy/75"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => aoEscolher(i.nome, i.preco)}
                className={`mt-7 h-11 w-full rounded-full font-label text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-all ${
                  i.destaque
                    ? "bg-gold text-navy hover:bg-gold-light"
                    : "bg-aqua text-white hover:bg-aqua-deep"
                }`}
              >
                Comprar agora
              </Button>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-label text-[0.72rem] leading-relaxed text-muted-foreground/80">
          Valores ilustrativos, criados apenas para demonstração do site. Preços
          reais, condições e horários devem ser definidos pelo parque.
        </p>
      </div>
    </section>
  );
}
