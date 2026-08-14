import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Podium Lava Rápido | Seu carro limpo, seu tempo livre",
  description: "Lavagem automotiva completa em Aparecida de Goiânia, com busca e entrega mediante agendamento.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
