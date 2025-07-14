import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana Flávia Guarda",
  description: "Aulas de inglês personalizadas com foco em conversação e prática real. Alcance fluência natural com a professora Ana Flávia Guarda.",
  keywords: "Ana Flávia Guarda, aulas de inglês, conversação em inglês, fluência em inglês, aula particular de inglês, método de conversação, feedback imediato, revisão ativa, mentoria VIP, prática guiada, suporte contínuo",
  authors: [{ name: "Guilherme Francisco Pereira" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://ana-flavia-guarda.vercel.app/",
    title: "Ana Flávia Guarda | Aulas de Inglês Personalizadas",
    description: "Aulas de inglês personalizadas com foco em conversação e prática real. Alcance fluência natural com a professora Ana Flávia Guarda.",
    siteName: "Ana Flávia Guarda"
  }
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactElement }>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
