"use client";

import { useState } from "react";
import { CalendarDays, Users, Ticket, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const TIPOS_INGRESSO = [
  { valor: "inteira", rotulo: "Ingresso Inteira" },
  { valor: "familia", rotulo: "Ingresso Família" },
  { valor: "meio-periodo", rotulo: "Ingresso Meio Período" },
  { valor: "passe-anual", rotulo: "Passe Anual" },
];

const PESSOAS = ["1 pessoa", "2 pessoas", "3 pessoas", "4 pessoas", "5 pessoas"];

export default function BookingBar() {
  const [tipo, setTipo] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [pessoas, setPessoas] = useState<string>("");
  const { toast } = useToast();

  const aoBuscar = () => {
    if (!tipo || !data || !pessoas) {
      toast({
        title: "Quase lá!",
        description: "Escolha o ingresso, a data da visita e a quantidade de pessoas.",
      });
      return;
    }
    toast({
      title: "Disponibilidade confirmada! 🎟️",
      description: `${TIPOS_INGRESSO.find((t) => t.valor === tipo)?.rotulo} para ${pessoas} em ${new Date(
        data + "T12:00:00"
      ).toLocaleDateString("pt-BR", { day: "2-digit", month: "long" })}. Finalize a compra na seção de ingressos.`,
    });
    document.querySelector("#ingressos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-30 mx-auto -mt-20 w-full max-w-[1180px] px-4 lg:px-6">
      <div className="rounded-2xl border border-border/60 bg-white/95 p-5 shadow-[0_28px_60px_-30px_rgba(11,37,69,0.45)] backdrop-blur-md md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-end">
          {/* Tipo de ingresso */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-navy/70">
              Escolha seu ingresso
            </label>
            <Select value={tipo} onValueChange={setTipo}>
              <SelectTrigger className="h-12 w-full rounded-xl border-border/80 bg-cream/60 data-[size=default]:h-12">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Ticket className="h-4 w-4 text-aqua" aria-hidden />
                  <SelectValue placeholder="Tipo de ingresso" />
                </span>
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {TIPOS_INGRESSO.map((t) => (
                  <SelectItem key={t.valor} value={t.valor} className="rounded-lg">
                    {t.rotulo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Data da visita */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="data-visita"
              className="font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-navy/70"
            >
              Data da visita
            </label>
            <div className="relative">
              <CalendarDays
                className="pointer-events-none absolute top-1/2 left-3.5 z-10 h-4 w-4 -translate-y-1/2 text-aqua"
                aria-hidden
              />
              <input
                id="data-visita"
                type="date"
                value={data}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setData(e.target.value)}
                className="h-12 w-full rounded-xl border border-border/80 bg-cream/60 pr-3 pl-10 text-sm text-navy outline-none transition-colors focus:ring-2 focus:ring-ring/40"
              />
            </div>
          </div>

          {/* Pessoas */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-navy/70">
              Quantas pessoas?
            </label>
            <Select value={pessoas} onValueChange={setPessoas}>
              <SelectTrigger className="h-12 w-full rounded-xl border-border/80 bg-cream/60 data-[size=default]:h-12">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-aqua" aria-hidden />
                  <SelectValue placeholder="Pessoas" />
                </span>
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {PESSOAS.map((p) => (
                  <SelectItem key={p} value={p} className="rounded-lg">
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Botão */}
          <button
            onClick={aoBuscar}
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-aqua px-7 font-label text-[0.76rem] font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-aqua-deep"
          >
            <Search className="h-4 w-4" aria-hidden />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
