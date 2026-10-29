import { Waves, Wind, Sparkles, Castle, Lock, Wifi, UtensilsCrossed, SquareParking, Baby, HeartPulse } from "lucide-react";
import { FEATURES, CONFORTO } from "@/lib/parque-data";

const ICONES_FEATURES: Record<string, React.ReactNode> = {
  spiral: <Sparkles className="h-7 w-7" aria-hidden />,
  waves: <Waves className="h-7 w-7" aria-hidden />,
  river: <Wind className="h-7 w-7" aria-hidden />,
  castle: <Castle className="h-7 w-7" aria-hidden />,
};

const ICONES_CONFORTO: Record<string, React.ReactNode> = {
  lock: <Lock className="h-5 w-5" aria-hidden />,
  wifi: <Wifi className="h-5 w-5" aria-hidden />,
  food: <UtensilsCrossed className="h-5 w-5" aria-hidden />,
  parking: <SquareParking className="h-5 w-5" aria-hidden />,
  child: <Baby className="h-5 w-5" aria-hidden />,
  life: <HeartPulse className="h-5 w-5" aria-hidden />,
};

export default function Destaques() {
  return (
    <>
      {/* ===== O que torna seu dia inesquecível ===== */}
      <section className="bg-cream/75 py-20 md:py-24" aria-labelledby="titulo-destaques">
        <div className="mx-auto max-w-[1180px] px-4 lg:px-6">
          <h2
            id="titulo-destaques"
            className="font-heading text-center text-[clamp(1.6rem,3.4vw,2.5rem)] leading-tight font-bold text-navy"
          >
            O que torna seu dia <span className="text-aqua">inesquecível</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[0.94rem] text-muted-foreground">
            Seis atrações pensadas para todas as idades — da primeira descida ao
            último raio de sol.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <article
                key={f.title}
                className="group rounded-2xl border border-border/50 bg-white p-7 text-center shadow-[0_14px_34px_-24px_rgba(11,37,69,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-24px_rgba(31,163,199,0.45)]"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-aqua-soft text-aqua-deep transition-colors duration-300 group-hover:bg-aqua group-hover:text-white">
                  {ICONES_FEATURES[f.icon]}
                </div>
                <h3 className="font-heading mt-5 text-[1.02rem] font-bold text-navy">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-[0.86rem] leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tudo para seu conforto ===== */}
      <section className="bg-sand/80 py-16 md:py-20" aria-labelledby="titulo-conforto">
        <div className="mx-auto max-w-[1180px] px-4 lg:px-6">
          <p className="kicker text-center text-aqua-deep">Estrutura completa</p>
          <h2
            id="titulo-conforto"
            className="font-heading mt-3 text-center text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-navy"
          >
            Tudo para o seu <span className="text-aqua">conforto</span>
          </h2>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONFORTO.map((c) => (
              <li
                key={c.text}
                className="flex items-center gap-4 rounded-xl border border-border/40 bg-white/80 px-5 py-4 transition-colors hover:border-aqua/40 hover:bg-white"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-aqua-soft text-aqua-deep">
                  {ICONES_CONFORTO[c.icon]}
                </span>
                <span className="text-[0.9rem] leading-snug font-medium text-navy/85">
                  {c.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
