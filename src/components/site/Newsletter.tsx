"use client";

import { useState } from "react";
import { Send, Waves } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const aoEnviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || email.length < 6) {
      toast({
        title: "Email inválido",
        description: "Digite um email válido para receber as ofertas do MUKAI.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Inscrição confirmada! ☀️",
      description: "Você receberá as melhores ofertas e novidades do parque no seu email.",
    });
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-aqua-deep py-16 md:py-20" aria-labelledby="titulo-newsletter">
      {/* Ondas decorativas */}
      <svg
        className="absolute inset-x-0 top-0 w-full text-aqua-soft/10"
        viewBox="0 0 1440 90"
        fill="currentColor"
        aria-hidden
      >
        <path d="M0,48 C240,88 480,8 720,48 C960,88 1200,8 1440,48 L1440,0 L0,0 Z" />
      </svg>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #fefcf5 0%, transparent 30%), radial-gradient(circle at 85% 80%, #ccbe85 0%, transparent 35%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[720px] px-4 text-center lg:px-6">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/15 text-cream" aria-hidden>
          <Waves className="h-7 w-7" />
        </span>
        <h2
          id="titulo-newsletter"
          className="font-heading mt-5 text-[clamp(1.4rem,3vw,2rem)] leading-snug font-bold text-cream"
        >
          Receba as melhores ofertas no seu email
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[0.9rem] leading-relaxed text-cream/75">
          Promoções de temporada, avisos de eventos especiais e dicas para
          aproveitar cada atração — direto na sua caixa de entrada.
        </p>

        <form onSubmit={aoEnviar} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
          <label htmlFor="email-newsletter" className="sr-only">
            Seu melhor email
          </label>
          <input
            id="email-newsletter"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor email"
            className="h-12 flex-1 rounded-full border border-white/25 bg-white/12 px-5 text-[0.9rem] text-cream placeholder:text-cream/55 outline-none transition-colors focus:border-gold focus:bg-white/18"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 font-label text-[0.74rem] font-bold uppercase tracking-[0.18em] text-navy shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
          >
            <Send className="h-4 w-4" aria-hidden />
            Inscrever
          </button>
        </form>
      </div>
    </section>
  );
}
