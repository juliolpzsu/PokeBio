import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--fuente-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

const texto = Inter({
  variable: "--fuente-texto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PokeBio - Enciclopedia de biologia de campo",
    template: "%s - PokeBio",
  },
  description:
    "Fichas de biologia evolutiva, ecologia y etologia de especies Pokemon, redactadas con datos de PokeAPI e interpretadas por IA.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${texto.variable} font-sans antialiased`}>
        <header className="border-b border-regla/70">
          <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-4 px-6 py-5">
            <Link href="/" className="group flex items-baseline gap-3">
              <span className="font-display text-2xl font-semibold tracking-tight text-tinta">
                Poke<span className="text-herbario">Bio</span>
              </span>
              <span className="rotulo hidden sm:inline">Enciclopedia de biologia de campo</span>
            </Link>
            <span className="rotulo hidden shrink-0 md:inline">Vol. I &middot; 1025 especies</span>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>

        <footer className="mt-16 border-t border-regla/70">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-tinta-suave">
            <p>
              Datos morfometricos de{" "}
              <a
                href="https://pokeapi.co"
                className="text-herbario underline underline-offset-4 hover:text-tinta"
                target="_blank"
                rel="noreferrer"
              >
                PokeAPI
              </a>
              . Interpretacion biologica generada con Claude.
            </p>
            <p className="mt-1">
              Proyecto academico sin animo de lucro. Pokemon es una marca registrada de Nintendo,
              Game Freak y The Pokemon Company.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
