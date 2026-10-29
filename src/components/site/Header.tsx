"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Waves } from "lucide-react";
import { NAV_LINKS } from "@/lib/parque-data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 60);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const transparente = !rolou;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparente
          ? "bg-transparent py-4"
          : "bg-cream/95 py-2 shadow-[0_10px_30px_-18px_rgba(11,37,69,0.4)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="#topo" className="flex items-center gap-2.5" aria-label="MUKAI — início">
          <span
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${
              transparente ? "bg-white/15 text-white" : "bg-aqua text-white"
            }`}
          >
            <Waves className="h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-heading text-xl font-bold tracking-[0.18em] transition-colors ${
                transparente ? "text-white" : "text-navy"
              }`}
            >
              MUKAI
            </span>
            <span
              className={`font-label text-[0.58rem] font-semibold uppercase tracking-[0.3em] transition-colors ${
                transparente ? "text-white/75" : "text-aqua-deep"
              }`}
            >
              Parque Aquático
            </span>
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 font-label text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors outline-none ${
                    transparente
                      ? "text-white/90 hover:bg-white/10 hover:text-white"
                      : "text-navy/85 hover:bg-aqua-soft hover:text-navy"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="border-border/70 rounded-xl px-1.5 py-2">
                  {item.children.map((filho) => (
                    <DropdownMenuItem key={filho.label} asChild>
                      <a
                        href={filho.href}
                        className="font-label cursor-pointer rounded-lg px-3 py-2 text-[0.82rem] font-medium text-navy/85 data-[highlighted]:bg-aqua-soft"
                      >
                        {filho.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-full px-3.5 py-2 font-label text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  transparente
                    ? "text-white/90 hover:bg-white/10 hover:text-white"
                    : "text-navy/85 hover:bg-aqua-soft hover:text-navy"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            className={`hidden h-10 rounded-full px-6 font-label text-[0.74rem] font-bold uppercase tracking-[0.18em] shadow-lg transition-all hover:-translate-y-0.5 sm:inline-flex ${
              transparente
                ? "bg-gold text-navy hover:bg-gold-light"
                : "bg-aqua text-white hover:bg-aqua-deep"
            }`}
          >
            <a href="#ingressos">Comprar ingresso</a>
          </Button>

          {/* Menu mobile */}
          <Sheet open={aberto} onOpenChange={setAberto}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menu"
                className={`xl:hidden ${
                  transparente ? "text-white hover:bg-white/15" : "text-navy hover:bg-aqua-soft"
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm overflow-y-auto bg-cream p-0">
              <SheetHeader className="border-b border-border/60 p-5 text-left">
                <SheetTitle className="font-heading text-lg font-bold tracking-[0.16em] text-navy">
                  MUKAI · PARQUE AQUÁTICO
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Menu de navegação do Parque Aquático MUKAI
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4" aria-label="Menu mobile">
                {NAV_LINKS.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setAberto(false)}
                      className="block rounded-lg px-3 py-2.5 font-label text-sm font-semibold uppercase tracking-[0.12em] text-navy hover:bg-aqua-soft"
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <div className="ml-4 border-l-2 border-aqua-soft pl-3">
                        {item.children.map((filho) => (
                          <a
                            key={filho.label}
                            href={filho.href}
                            onClick={() => setAberto(false)}
                            className="block rounded-lg px-3 py-2 text-[0.82rem] text-navy/70 hover:bg-aqua-soft hover:text-navy"
                          >
                            {filho.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="mt-4 h-11 rounded-full bg-aqua font-label text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-aqua-deep">
                  <a href="#ingressos" onClick={() => setAberto(false)}>
                    Comprar ingresso
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
