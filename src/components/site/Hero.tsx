"use client";

import { useEffect, useRef } from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Garante o autoplay mesmo se o navegador segurar o muted inicial
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      /* autoplay bloqueado: o poster continua no lugar */
    });
  }, []);

  return (
    <section id="topo" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Fundo com drone subindo sobre o parque */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/parque/hero-drone.mp4"
          poster="/parque/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Vídeo aéreo do Parque Aquático MUKAI"
        />
        {/* Véu em degradê navy */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/45 to-navy/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,37,69,0.35)_100%)]" />
      </div>

      {/* Ícones sociais laterais (como no La Villa) */}
      <div className="absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 md:flex">
        <span className="h-16 w-px bg-white/30" aria-hidden />
        {[
          { Icone: Facebook, rotulo: "Facebook do MUKAI" },
          { Icone: Instagram, rotulo: "Instagram do MUKAI" },
          { Icone: MessageCircle, rotulo: "WhatsApp do MUKAI" },
        ].map(({ Icone, rotulo }) => (
          <a
            key={rotulo}
            href="#contato"
            aria-label={rotulo}
            className="text-white/70 transition-all hover:-translate-y-0.5 hover:text-gold-light"
          >
            <Icone className="h-[18px] w-[18px]" />
          </a>
        ))}
        <span className="h-16 w-px bg-white/30" aria-hidden />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 pt-24 pb-36 text-center lg:px-6">
        <p className="kicker surgir text-white/85">Parque aquático · Desde 2009</p>

        <h1 className="font-heading surgir surgir-1 mt-6 text-[clamp(3.4rem,11vw,8.5rem)] leading-[0.95] font-black tracking-[0.06em] text-white text-shadow-hero">
          MUKAI
        </h1>

        <p className="surgir surgir-2 mx-auto mt-7 max-w-2xl text-[0.98rem] leading-relaxed font-light text-white/90 md:text-lg">
          Espirais gigantes, ondas que nunca param e um rio que convida a
          desacelerar. Um dia inteiro de diversão para toda a família.
        </p>

        <div className="surgir surgir-3 mt-10 flex flex-col items-center gap-3">
          <Button
            asChild
            className="h-12 rounded-full bg-gold px-10 font-label text-[0.78rem] font-bold uppercase tracking-[0.22em] text-navy shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gold-light"
          >
            <a href="#ingressos">Compre seu ingresso</a>
          </Button>
          <span className="font-label text-[0.72rem] font-medium tracking-wide text-white/75">
            O melhor preço garantido na compra online.
          </span>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <div className="absolute bottom-32 left-1/2 z-10 hidden -translate-x-1/2 md:block" aria-hidden>
        <div className="flutuar flex h-11 w-7 items-start justify-center rounded-full border-2 border-white/45 pt-2">
          <span className="h-2.5 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
