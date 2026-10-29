import Image from "next/image";
import { MapPin, Clock, SquareParking, Bus } from "lucide-react";
import { VISITE_INFO } from "@/lib/parque-data";
import { Button } from "@/components/ui/button";

const ICONES: Record<string, React.ReactNode> = {
  pin: <MapPin className="h-5 w-5" aria-hidden />,
  clock: <Clock className="h-5 w-5" aria-hidden />,
  car: <SquareParking className="h-5 w-5" aria-hidden />,
  bus: <Bus className="h-5 w-5" aria-hidden />,
};

export default function Localizacao() {
  return (
    <section id="visite" className="bg-cream/75 py-20 md:py-24" aria-labelledby="titulo-visite">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
        {/* Imagem com sobreposição de mapa */}
        <div className="relative order-2 mx-auto w-full max-w-[520px] lg:order-1">
          <div
            className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl bg-aqua-soft"
            aria-hidden
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(11,37,69,0.5)]">
            <Image
              src="/parque/img10.jpg"
              alt="Rio Tranquilo do Parque MUKAI cercado de vegetação"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 -mt-12 ml-auto mr-6 flex max-w-[320px] items-center gap-3 rounded-xl bg-white p-5 shadow-xl">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-aqua text-white">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
            <p className="font-label text-[0.8rem] leading-snug font-semibold text-navy">
              Mapa interativo disponível após o endereço ser cadastrado.
            </p>
          </div>
        </div>

        {/* Texto e informações */}
        <div className="order-1 lg:order-2">
          <p className="kicker text-aqua-deep">Onde estamos</p>
          <h2
            id="titulo-visite"
            className="font-heading capitular mt-3 text-[clamp(1.7rem,3.6vw,2.6rem)] leading-tight font-bold text-navy"
          >
            venha até o MUKAI
          </h2>
          <p className="mt-5 max-w-xl text-[0.94rem] leading-relaxed text-muted-foreground">
            Planeje a sua visita com as informações de endereço, horários e
            estacionamento. Chegue cedo: os melhores horários costumam esgotar
            nos fins de semana e feriados.
          </p>

          <dl className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VISITE_INFO.map((v) => (
              <div key={v.titulo} className="flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-aqua-soft text-aqua-deep">
                  {ICONES[v.icon]}
                </span>
                <div>
                  <dt className="font-heading text-[0.94rem] font-bold text-navy">
                    {v.titulo}
                  </dt>
                  <dd className="mt-1 text-[0.82rem] leading-relaxed text-muted-foreground">
                    {v.texto}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <Button
            asChild
            className="mt-10 h-12 rounded-full bg-navy px-9 font-label text-[0.74rem] font-bold uppercase tracking-[0.2em] text-cream shadow-lg transition-all hover:-translate-y-0.5 hover:bg-navy-2"
          >
            <a href="#ingressos">Planejar minha visita</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
