import { MapPin, Mail, Phone, Instagram, MessageCircle, Facebook, Waves } from "lucide-react";
import { CONTATO, FOOTER_EMPRESA } from "@/lib/parque-data";

export default function Footer() {
  return (
    <footer id="contato" className="bg-navy text-cream/80" aria-labelledby="titulo-footer">
      {/* Faixa de chamada final */}
      <div className="border-b border-white/10 bg-navy-2/60 py-12">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-6 px-4 text-center lg:flex-row lg:justify-between lg:px-6 lg:text-left">
          <div>
            <h3 className="font-heading text-[clamp(1.2rem,2.4vw,1.7rem)] font-bold text-cream">
              Seu dia de verão começa aqui
            </h3>
            <p className="mt-1.5 font-label text-[0.84rem] text-cream/60">
              Garanta o seu ingresso agora e chegue ao parque com tudo preparado.
            </p>
          </div>
          <a
            href="#ingressos"
            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-gold px-9 font-label text-[0.76rem] font-bold uppercase tracking-[0.2em] text-navy shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gold-light"
          >
            <Waves className="h-4 w-4" aria-hidden />
            Comprar ingresso
          </a>
        </div>
      </div>

      {/* Colunas principais */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-aqua text-white">
              <Waves className="h-5 w-5" aria-hidden />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-xl font-bold tracking-[0.18em] text-cream">
                MUKAI
              </span>
              <span className="font-label text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-aqua">
                Parque Aquático
              </span>
            </span>
          </div>
          <p className="mt-5 text-[0.84rem] leading-relaxed text-cream/60">
            {FOOTER_EMPRESA.nota}
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icone: Facebook, rotulo: "Facebook do MUKAI" },
              { Icone: Instagram, rotulo: "Instagram do MUKAI" },
              { Icone: MessageCircle, rotulo: "WhatsApp do MUKAI" },
            ].map(({ Icone, rotulo }) => (
              <a
                key={rotulo}
                href="#contato"
                aria-label={rotulo}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream/70 transition-all hover:-translate-y-0.5 hover:border-aqua hover:bg-aqua hover:text-white"
              >
                <Icone className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Contato */}
        <nav aria-label="Contato">
          <h4 className="kicker text-gold-light">Contato</h4>
          <ul className="mt-5 space-y-3.5 text-[0.85rem]">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua" aria-hidden />
              <span>{CONTATO.endereco}</span>
            </li>
            <li>
              <a
                href={`mailto:${CONTATO.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold-light"
              >
                <Mail className="h-4 w-4 shrink-0 text-aqua" aria-hidden />
                {CONTATO.email}
              </a>
            </li>
            <li>
              <a
                href="tel:+5500000000000"
                className="flex items-center gap-2.5 transition-colors hover:text-gold-light"
              >
                <Phone className="h-4 w-4 shrink-0 text-aqua" aria-hidden />
                {CONTATO.telefone}
              </a>
            </li>
          </ul>
        </nav>

        {/* Informações */}
        <nav aria-label="Informações do site">
          <h4 className="kicker text-gold-light">Visite</h4>
          <ul className="mt-5 space-y-2.5 text-[0.85rem]">
            {[
              { rotulo: "Nossa História", href: "#historia" },
              { rotulo: "Atrações", href: "#atracoes" },
              { rotulo: "Ingressos", href: "#ingressos" },
              { rotulo: "Como Chegar", href: "#visite" },
            ].map((l) => (
              <li key={l.rotulo}>
                <a href={l.href} className="transition-colors hover:text-gold-light">
                  {l.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Links úteis */}
        <nav aria-label="Links úteis">
          <h4 className="kicker text-gold-light">Atendimento</h4>
          <ul className="mt-5 space-y-2.5 text-[0.85rem]">
            {[
              { rotulo: "Dúvidas Frequentes", href: "#faq" },
              { rotulo: "Políticas de Privacidade", href: "#contato" },
              { rotulo: "Trabalhe Conosco", href: "#contato" },
            ].map((l) => (
              <li key={l.rotulo}>
                <a href={l.href} className="transition-colors hover:text-gold-light">
                  {l.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-[0.76rem] leading-relaxed text-cream/55">
            <strong className="text-cream/80">Horário de funcionamento:</strong>
            <br />
            Terça a domingo, das 10h às 18h.
            <br />
            Fechado às segundas.
          </p>
        </nav>
      </div>

      {/* Base */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 px-4 py-6 text-center font-label text-[0.72rem] text-cream/45 sm:flex-row lg:px-6">
          <p>
            © {new Date().getFullYear()} {FOOTER_EMPRESA.nome} — Todos os direitos
            reservados.
          </p>
          <p>Parque aquático · Desde 2009 · Site demonstrativo</p>
        </div>
      </div>
    </footer>
  );
}
