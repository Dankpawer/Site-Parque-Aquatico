import Header from "@/components/site/Header";
import FundoAmbiente from "@/components/site/FundoAmbiente";
import Hero from "@/components/site/Hero";
import BookingBar from "@/components/site/BookingBar";
import Destaques from "@/components/site/Destaques";
import Historia from "@/components/site/Historia";
import Atracoes from "@/components/site/Atracoes";
import Localizacao from "@/components/site/Localizacao";
import Instagram from "@/components/site/Instagram";
import Ingressos from "@/components/site/Ingressos";
import Faq from "@/components/site/Faq";
import Depoimentos from "@/components/site/Depoimentos";
import Newsletter from "@/components/site/Newsletter";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Camada ambiente: bolhas e luzes à deriva atrás do conteúdo */}
      <FundoAmbiente />

      <Header />

      <main className="relative z-10 flex-1">
        {/* Hero fullscreen com foto aérea — como no La Villa */}
        <Hero />

        {/* Barra de compra sobreposta ao hero — "Escolha seu dia no MUKAI" */}
        <BookingBar />

        {/* O que torna seu dia inesquecível + Tudo para seu conforto */}
        <Destaques />

        {/* Nossa história — timeline do parque */}
        <Historia />

        {/* Cards das 6 atrações — equivalente aos cards das Villas */}
        <Atracoes />

        {/* Onde estamos — venha até o MUKAI */}
        <Localizacao />

        {/* Instagram @parquemukai */}
        <Instagram />

        {/* Ingressos e promoções */}
        <Ingressos />

        {/* Dúvidas frequentes */}
        <Faq />

        {/* Depoimentos de visitantes */}
        <Depoimentos />

        {/* Receba as melhores ofertas */}
        <Newsletter />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
      <FloatingButtons />
    </div>
  );
}
