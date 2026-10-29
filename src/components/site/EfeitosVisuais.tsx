"use client";

import { useEffect } from "react";

/**
 * ==========================================================================
 * MUKAI · EFEITOS VISUAIS (camada JS) — inspirada em Shopify Editions
 * ==========================================================================
 * Componente "fantasma" (não renderiza nada). Apenas OBSERVA os elementos
 * já existentes no site e ADICIONA classes .fx-* — nunca altera texto,
 * imagem, estrutura ou conteúdo. Os estilos vivem em src/app/efeitos.css.
 *
 * Módulos:
 *   1. Header dinâmico .......... glassmorphism + retração ao rolar
 *   2. Parallax suave ........... vídeo do hero + textura da história (rAF)
 *   3. Scroll reveal + stagger .. fade-in-up em cascata (IntersectionObserver)
 *   4. Microinterações .......... brilho nos CTAs, elevação 3D nos cards
 *
 * Performance: listeners passivos, scroll sempre dentro de requestAnimationFrame
 * e observers com unobserve após a revelação (zero custo contínuo).
 * Acessibilidade: desliga 100% sob prefers-reduced-motion.
 * ==========================================================================
 */
export default function EfeitosVisuais() {
  useEffect(() => {
    /* Movimento reduzido? Nenhuma animação desta camada roda. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /** Cada módulo registra sua limpeza aqui (roda no unmount). */
    const limpezas: Array<() => void> = [];

    /* ======================================================================
     * 1) HEADER — vidro fosco + fio de luz + shrink da logo
     * ==================================================================== */
    const header = document.querySelector("header");
    if (header) {
      const logo = header.querySelector("a"); // primeiro <a> = logo MUKAI
      const ctaHeader = header.querySelector("a[href='#ingressos']");

      /* O React reescreve o className do header (e do CTA) quando o estado
       * interno "rolou" muda — o que apagaria classes adicionadas via JS.
       * Este guardião reaplica .fx-* no mesmo tick em que isso acontece. */
      const reaplicarHeader = () => {
        header.classList.add("fx-header");
        header.classList.toggle("fx-scrolled", window.scrollY > 60);
        logo?.classList.add("fx-logo");
        ctaHeader?.classList.add("fx-shine");
      };
      reaplicarHeader();
      const guardiao = new MutationObserver(reaplicarHeader);
      guardiao.observe(header, { attributes: true, attributeFilter: ["class"] });
      limpezas.push(() => guardiao.disconnect());

      let pendente = 0;
      const aplicarHeader = () => {
        pendente = 0;
        header.classList.toggle("fx-scrolled", window.scrollY > 60);
      };
      const aoRolarHeader = () => {
        if (!pendente) pendente = requestAnimationFrame(aplicarHeader);
      };

      window.addEventListener("scroll", aoRolarHeader, { passive: true });
      aplicarHeader();
      limpezas.push(() => {
        window.removeEventListener("scroll", aoRolarHeader);
        if (pendente) cancelAnimationFrame(pendente);
      });
    }

    /* ======================================================================
     * 2) PARALLAX — hero (velocidade 0.3) e textura da Nossa História
     * ==================================================================== */
    const heroFundo = document.querySelector<HTMLElement>("#topo > div:first-child");
    const historiaFundo = document.querySelector<HTMLElement>("#historia > div:first-child");

    if (heroFundo || historiaFundo) {
      heroFundo?.classList.add("fx-parallax-hero");
      historiaFundo?.classList.add("fx-parallax-lento");

      let quadro = 0;
      const aplicarParallax = () => {
        quadro = 0;
        const y = window.scrollY;

        // Hero: desce a 30% da rolagem enquanto o conteúdo sobe (só no topo)
        if (heroFundo) {
          const alturaHero = heroFundo.parentElement?.offsetHeight ?? window.innerHeight;
          if (y < alturaHero + 120) {
            heroFundo.style.transform = `translate3d(0, ${(y * 0.3).toFixed(1)}px, 0) scale(1.14)`;
          }
        }

        // História: textura desliza devagar conforme a seção cruza a tela
        if (historiaFundo && historiaFundo.parentElement) {
          const r = historiaFundo.parentElement.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            const progresso =
              (window.innerHeight - r.top) / (window.innerHeight + r.height) - 0.5;
            historiaFundo.style.transform = `translate3d(0, ${(progresso * 48).toFixed(1)}px, 0)`;
          }
        }
      };
      const aoRolarParallax = () => {
        if (!quadro) quadro = requestAnimationFrame(aplicarParallax);
      };

      window.addEventListener("scroll", aoRolarParallax, { passive: true });
      window.addEventListener("resize", aoRolarParallax, { passive: true });
      aplicarParallax();
      limpezas.push(() => {
        window.removeEventListener("scroll", aoRolarParallax);
        window.removeEventListener("resize", aoRolarParallax);
        if (quadro) cancelAnimationFrame(quadro);
      });
    }

    /* ======================================================================
     * 3) SCROLL REVEAL + STAGGER — títulos, cards, itens e formulários
     * ==================================================================== */
    const alvos: HTMLElement[] = [];

    document.querySelectorAll<HTMLElement>("main section:not(#topo)").forEach((secao) => {
      // Candidatos: título, kicker, parágrafo-guia, cards, molduras de imagem,
      // itens de lista/FAQ, tiles do Instagram e formulários.
      const itens = Array.from(
        secao.querySelectorAll<HTMLElement>(
          [
            "h2",
            "p.kicker",
            "article",
            "figure",
            "main ul.grid > li",
            "[data-slot='accordion-item']",
            "div[class*='aspect-']",
            "a[class*='aspect-square']",
            "form",
          ].join(", ")
        )
      ).filter((el) => {
        // Itens DENTRO de um card não revelam sozinhos (o card já revela)
        if (el.closest("article, figure") && !el.matches("article, figure")) return false;
        // O parágrafo-guia (logo após o h2) entra na coreografia
        return true;
      });

      // O parágrafo introdutório logo depois do título entra no stagger
      itens.forEach((el) => {
        const proximo = el.nextElementSibling;
        if (el.tagName === "H2" && proximo?.tagName === "P" && !itens.includes(proximo as HTMLElement)) {
          itens.push(proximo as HTMLElement);
        }
      });

      // Stagger em cascata: 90ms por item, limitado a 540ms
      itens.forEach((el, i) => {
        el.classList.add("fx-reveal");
        el.style.setProperty("--fx-d", `${Math.min(i * 90, 540)}ms`);
        // Títulos ganham o desfoque editorial que se dissolve
        if (el.tagName === "H2") el.classList.add("fx-soft");
        // Molduras de imagem entram com zoom suave
        if (el.matches("div[class*='aspect-']")) el.dataset.fx = "zoom";
        alvos.push(el);
      });
    });

    if (alvos.length > 0) {
      const observador = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
              entrada.target.classList.add("fx-in");
              observador.unobserve(entrada.target); // anima uma única vez
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
      );
      alvos.forEach((el) => observador.observe(el));
      limpezas.push(() => observador.disconnect());
    }

    /* ======================================================================
     * 4) MICROINTERAÇÕES — shine nos CTAs, elevação nos cards, zoom
     * ==================================================================== */
    // CTAs e botões principais recebem o reflexo de luz
    document
      .querySelectorAll<HTMLElement>(
        [
          "header a[href='#ingressos']",
          "#topo a[href='#ingressos']",
          "#visite a[href='#ingressos']",
          "#faq a[href='#contato']",
          "#ingressos article button",
          "section form button[type='submit']",
          ".z-30 button", // botão "Comprar" da barra de reserva
        ].join(", ")
      )
      .forEach((cta) => cta.classList.add("fx-shine"));

    // Cards de grade: elevação 3D + sombra progressiva
    document
      .querySelectorAll<HTMLElement>("main article, main figure")
      .forEach((card) => card.classList.add("fx-card"));

    // Linhas e tiles: versão lite (sem inclinação 3D)
    document
      .querySelectorAll<HTMLElement>(
        "main ul.grid > li, [data-slot='accordion-item'], a[class*='aspect-square']"
      )
      .forEach((el) => {
        if (!el.closest("article")) el.classList.add("fx-card", "fx-card--lite");
      });

    // Zoom interno nas molduras de imagem (História e Localização)
    document
      .querySelectorAll<HTMLElement>("#historia div[class*='aspect-'], #visite div[class*='aspect-']")
      .forEach((moldura) => moldura.classList.add("fx-zoom"));

    /* Limpeza completa no unmount — sem vazamentos de listeners */
    return () => limpezas.forEach((limpar) => limpar());
  }, []);

  return null;
}
