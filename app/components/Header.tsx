"use client";

import { useState } from "react";
import { Menu, X, PawPrint, Megaphone } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#animais", label: "Animais" },
  { href: "#ajudar", label: "Como Ajudar" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

interface HeaderProps {
  announcement?: string;
}

export default function Header({ announcement }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Banner de aviso dinâmico vindo do Sanity */}
      {announcement && (
        <div
          className="bg-accent-500 text-white text-center py-2 px-4 text-sm font-medium"
          role="alert"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <Megaphone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{announcement}</span>
          </div>
        </div>
      )}

      <div className="bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Navegação principal"
        >
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 text-primary-700 font-bold text-xl"
              aria-label="OPAR - Voltar ao topo"
            >
              <PawPrint className="w-7 h-7" aria-hidden="true" />
              <span>OPAR</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-primary-600 transition-colors font-medium text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div id="mobile-menu" className="md:hidden pb-4">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-4 py-2 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
