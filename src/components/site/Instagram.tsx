import Image from "next/image";
import { Instagram as InstagramIcon } from "lucide-react";
import { INSTAGRAM_IMGS } from "@/lib/parque-data";

export default function Instagram() {
  return (
    <section className="bg-navy py-20 md:py-24" aria-labelledby="titulo-instagram">
      <div className="mx-auto max-w-[1180px] px-4 lg:px-6">
        <p className="kicker text-center text-gold-light">Siga-nos no Instagram</p>
        <h2
          id="titulo-instagram"
          className="font-heading mt-3 text-center text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold text-cream"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-3 transition-colors hover:text-gold-light"
          >
            <InstagramIcon className="h-7 w-7 text-aqua" aria-hidden />
            @parquemukai
          </a>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[0.9rem] text-cream/65">
          Bastidores das atrações, dias de sol e os melhores momentos dos
          visitantes. Marque o MUKAI nas suas fotos e apareça por aqui.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {INSTAGRAM_IMGS.map((src, i) => (
            <a
              key={src + i}
              href="#contato"
              aria-label={`Publicação ${i + 1} do Instagram do MUKAI`}
              className="group relative block aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={`Momento ${i + 1} do Parque Aquático MUKAI`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-navy/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <InstagramIcon className="h-7 w-7 text-white" aria-hidden />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
