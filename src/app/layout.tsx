import type { Metadata } from "next";
import { Cinzel, Montserrat, Raleway, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUKAI — Parque Aquático | Um dia inteiro de diversão para toda a família",
  description:
    "MUKAI, parque aquático com espiral gigante, corrida de colchões, mar de ondas, rio tranquilo e área infantil para toda a família. Desde 2009.",
  keywords: [
    "MUKAI",
    "parque aquático",
    "tobogã",
    "espiral gigante",
    "mar de ondas",
    "rio tranquilo",
    "diversão em família",
    "ingressos",
  ],
  openGraph: {
    title: "MUKAI — Parque Aquático",
    description:
      "Espirais gigantes, ondas que nunca param e um rio que convida a desacelerar. Um dia inteiro de diversão para toda a família.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${montserrat.variable} ${raleway.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
