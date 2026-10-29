"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, Ticket, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 500);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-2.5 sm:right-5 sm:bottom-5">
      {/* Voltar ao topo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className={`grid h-11 w-11 place-items-center rounded-full border border-border/60 bg-white text-navy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream ${
          visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-4.5 w-4.5" />
      </button>

      {/* Telefone */}
      <a
        href="tel:+5500000000000"
        aria-label="Ligar para o MUKAI"
        className="grid h-11 w-11 place-items-center rounded-full bg-navy text-cream shadow-lg transition-all hover:-translate-y-0.5 hover:bg-navy-2"
      >
        <Phone className="h-4.5 w-4.5" />
      </a>

      {/* WhatsApp */}
      <a
        href="#contato"
        aria-label="Falar no WhatsApp com o MUKAI"
        className="grid h-11 w-11 place-items-center rounded-full bg-[#25d366] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:brightness-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      {/* Ingressos */}
      <a
        href="#ingressos"
        aria-label="Comprar ingressos"
        className="group inline-flex h-11 items-center gap-2 overflow-hidden rounded-full bg-gold px-4 text-navy shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
      >
        <Ticket className="h-4.5 w-4.5 shrink-0" />
        <span className="font-label max-w-0 text-[0.7rem] font-bold uppercase tracking-[0.14em] whitespace-nowrap transition-all duration-300 group-hover:max-w-[120px]">
          Ingressos
        </span>
      </a>
    </div>
  );
}
