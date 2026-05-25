import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "OPAR - Organização de Proteção Animal de Resgate | São José dos Campos",
  description:
    "A OPAR resgata, cuida e promove a adoção responsável de animais em situação de risco em São José dos Campos. Ajude-nos a salvar vidas!",
  keywords: [
    "OPAR",
    "proteção animal",
    "resgate animal",
    "adoção",
    "São José dos Campos",
    "ONG animal",
    "animais perdidos",
    "doação",
  ],
  openGraph: {
    title: "OPAR - Organização de Proteção Animal de Resgate",
    description:
      "Resgatamos, cuidamos e promovemos a adoção responsável de animais em São José dos Campos.",
    url: "https://oparsjc.org",
    siteName: "OPAR SJC",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
