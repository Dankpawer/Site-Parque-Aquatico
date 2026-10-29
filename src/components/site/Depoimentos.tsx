"use client";

import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DEPOIMENTOS } from "@/lib/parque-data";

export default function Depoimentos() {
  return (
    <section className="bg-sand/80 py-20 md:py-24" aria-labelledby="titulo-depoimentos">
      <div className="mx-auto max-w-[1180px] px-4 lg:px-6">
        <p className="kicker text-center text-aqua-deep">Quem já viveu o MUKAI</p>
        <h2
          id="titulo-depoimentos"
          className="font-heading mt-3 text-center text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold text-navy"
        >
          Histórias de um dia <span className="text-aqua">perfeito</span>
        </h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto mt-12 w-full max-w-[980px]"
        >
          <CarouselContent className="-ml-4">
            {DEPOIMENTOS.map((d) => (
              <CarouselItem key={d.titulo} className="basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col rounded-2xl border border-border/50 bg-white p-7 shadow-[0_18px_44px_-30px_rgba(11,37,69,0.4)]">
                  <Quote className="h-7 w-7 text-gold" aria-hidden />
                  <div className="mt-3 flex gap-1" aria-label="Avaliação 5 de 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                    ))}
                  </div>
                  <figcaption className="font-heading mt-4 text-[1rem] font-bold text-navy">
                    {d.titulo}
                  </figcaption>
                  <blockquote className="mt-2.5 flex-1 text-[0.87rem] leading-relaxed text-muted-foreground">
                    “{d.texto}”
                  </blockquote>
                  <div className="mt-5 border-t border-border/50 pt-4">
                    <p className="font-label text-[0.8rem] font-bold text-navy">
                      {d.autor}
                    </p>
                    <p className="font-label text-[0.7rem] text-muted-foreground">
                      {d.fonte}
                    </p>
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-14px] h-10 w-10 border-border/60 bg-white text-navy shadow-md hover:bg-aqua hover:text-white max-lg:hidden" />
          <CarouselNext className="right-[-14px] h-10 w-10 border-border/60 bg-white text-navy shadow-md hover:bg-aqua hover:text-white max-lg:hidden" />
        </Carousel>
      </div>
    </section>
  );
}
