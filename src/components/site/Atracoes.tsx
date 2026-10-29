import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { ATRACOES } from "@/lib/parque-data";

export default function Atracoes() {
  return (
    <section id="atracoes" className="bg-cream/75 py-20 md:py-24" aria-labelledby="titulo-atracoes">
      <div className="mx-auto max-w-[1180px] px-4 lg:px-6">
        <p className="kicker text-center text-aqua-deep">Seis motivos para vir</p>
        <h2
          id="titulo-atracoes"
          className="font-heading capitular mt-3 text-center text-[clamp(1.8rem,3.8vw,2.8rem)] font-bold text-navy"
        >
          atrações
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-[0.94rem] leading-relaxed text-muted-foreground">
          O MUKAI reúne atrações para todos os perfis: quem busca adrenalina nas
          espirais, famílias no mar de ondas e quem só quer relaxar no rio. Todas
          com monitoria e socorristas dedicados.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {ATRACOES.map((a) => (
            <article
              key={a.nome}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-white shadow-[0_18px_44px_-28px_rgba(11,37,69,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_56px_-28px_rgba(31,163,199,0.5)]"
            >
              {/* Imagem */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={a.imagem}
                  alt={`Atração ${a.nome} do Parque Aquático MUKAI`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                <span className="absolute bottom-3.5 left-4 flex items-center gap-1.5 font-label text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/95">
                  <MapPin className="h-3.5 w-3.5 text-gold-light" aria-hidden />
                  {a.local}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="font-heading text-[1.14rem] leading-snug font-bold text-navy">
                  {a.nome}
                </h3>
                <p className="mt-2.5 min-h-[96px] text-[0.86rem] leading-relaxed text-muted-foreground">
                  {a.texto}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {a.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-aqua-soft px-3 py-1 font-label text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-aqua-deep"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#ingressos"
                  className="mt-5 inline-flex items-center gap-2 font-label text-[0.74rem] font-bold uppercase tracking-[0.18em] text-navy transition-colors hover:text-aqua-deep"
                >
                  Garantir ingresso
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
