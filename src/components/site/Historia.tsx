import Image from "next/image";
import { Flag } from "lucide-react";
import { HISTORIA_TIMELINE } from "@/lib/parque-data";

export default function Historia() {
  return (
    <section id="historia" className="relative overflow-hidden bg-navy py-20 md:py-24" aria-labelledby="titulo-historia">
      {/* Textura de fundo suave */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #3dbbe0 0%, transparent 40%), radial-gradient(circle at 80% 70%, #ccbe85 0%, transparent 40%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
        {/* Texto + timeline */}
        <div>
          <p className="kicker text-gold-light">Nossa história</p>
          <h2
            id="titulo-historia"
            className="font-heading capitular mt-3 text-[clamp(1.7rem,3.6vw,2.6rem)] leading-tight font-bold text-cream"
          >
            De uma praia pequena a um parque de sonhos
          </h2>
          <p className="mt-5 text-[0.94rem] leading-relaxed text-cream/75">
            O que começou com uma piscina e dois tobogãs à beira de uma praia
            quase deserta virou, ao longo de mais de uma década, um dos parques
            aquáticos mais queridos da região. Cada nova atração nasceu de um
            pedido dos visitantes — e de um sonho antigo dos fundadores.
          </p>

          <ol className="mt-9 space-y-7 border-l-2 border-aqua/30 pl-7">
            {HISTORIA_TIMELINE.map((h) => (
              <li key={h.year} className="relative">
                <span
                  className="absolute top-1.5 -left-[38px] grid h-4 w-4 place-items-center rounded-full border-2 border-gold bg-navy"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-heading text-lg font-bold text-gold-light">
                    {h.year}
                  </span>
                  <h3 className="font-heading text-[1.02rem] font-bold text-cream">
                    {h.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-[0.86rem] leading-relaxed text-cream/70">
                  {h.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Imagem com moldura deslocada */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div
            className="absolute -top-4 -right-4 h-full w-full rounded-2xl border-2 border-gold/50"
            aria-hidden
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
            <Image
              src="/parque/img1.jpg"
              alt="Vista aérea atual do Parque Aquático MUKAI"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" />
          </div>
          <div className="relative z-10 -mt-10 ml-6 flex max-w-[300px] items-center gap-3 rounded-xl bg-gold px-5 py-4 shadow-xl">
            <Flag className="h-6 w-6 shrink-0 text-navy" aria-hidden />
            <p className="font-label text-[0.8rem] leading-snug font-semibold text-navy">
              Mais de uma década de verão, risadas e descidas inesquecíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
