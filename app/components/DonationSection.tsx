"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check, Heart } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface DonationSectionProps {
  pixKey?: string;
  qrCodeUrl?: string;
  title?: string;
  subtitle?: string;
  cardTitle?: string;
  cardDescription?: string;
  pixKeyLabel?: string;
  institutionInfo?: string;
}

const FALLBACK_PIX_KEY = "12.345.678/0001-99";

export default function DonationSection({
  pixKey,
  qrCodeUrl,
  title,
  subtitle,
  cardTitle,
  cardDescription,
  pixKeyLabel,
  institutionInfo,
}: DonationSectionProps) {
  const [copied, setCopied] = useState(false);
  const displayPixKey = pixKey || FALLBACK_PIX_KEY;

  const displayTitle = title || "Como Ajudar";
  const displaySubtitle =
    subtitle ||
    "Sua contribuição salva vidas. Com qualquer valor via Pix, você ajuda a custear ração, medicamentos e atendimento veterinário.";
  const displayCardTitle = cardTitle || "Doe via Pix";
  const displayCardDescription =
    cardDescription ||
    (qrCodeUrl
      ? "Escaneie o QR Code ou copie nossa chave Pix abaixo:"
      : "Copie nossa chave Pix abaixo para fazer sua doação:");
  const displayPixKeyLabel = pixKeyLabel || "Chave Pix (CNPJ)";
  const displayInstitutionInfo =
    institutionInfo ||
    `OPAR - Organização de Proteção Animal de Resgate | CNPJ: ${displayPixKey}`;

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(displayPixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = displayPixKey;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      id="ajudar"
      className="py-20 md:py-28 bg-linear-to-br from-accent-50 via-white to-primary-50"
      aria-labelledby="donation-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="donation-heading"
          title={displayTitle}
          subtitle={displaySubtitle}
        />

        <div className="max-w-lg mx-auto mt-12">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-accent-100 text-accent-600 mb-6">
              <Heart className="w-8 h-8" aria-hidden="true" />
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              {displayCardTitle}
            </h3>
            <p className="text-slate-600 mb-8">{displayCardDescription}</p>

            {/* QR Code dinâmico do Sanity */}
            {qrCodeUrl && (
              <div className="mb-6">
                <Image
                  src={qrCodeUrl}
                  alt="QR Code para doação via Pix"
                  width={200}
                  height={200}
                  className="mx-auto rounded-xl border border-slate-200"
                />
              </div>
            )}

            {/* Pix Key Display */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-medium">
                {displayPixKeyLabel}
              </p>
              <p className="text-xl font-mono font-bold text-slate-800 select-all">
                {displayPixKey}
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopyPix}
              className={`inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-primary-600 text-white hover:bg-primary-700"
              }`}
              aria-label={
                copied
                  ? "Chave Pix copiada com sucesso"
                  : "Copiar chave Pix para a área de transferência"
              }
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" aria-hidden="true" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" aria-hidden="true" />
                  Copiar Chave Pix
                </>
              )}
            </button>

            <p className="mt-6 text-sm text-slate-500">
              {displayInstitutionInfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
