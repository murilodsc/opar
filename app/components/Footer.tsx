import { PawPrint, Phone, Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/** Formata número de WhatsApp para exibição: 5512991234567 → (12) 99123-4567 */
function formatWhatsapp(raw: string): string {
  const national = raw.startsWith("55") ? raw.slice(2) : raw;
  if (national.length === 11) {
    return `(${national.slice(0, 2)}) ${national.slice(2, 7)}-${national.slice(7)}`;
  }
  return raw;
}

interface FooterProps {
  whatsapp?: string;
  email?: string;
  description?: string;
  address?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  socialText?: string;
}

export default function Footer({
  whatsapp,
  email,
  description,
  address,
  instagramUrl,
  facebookUrl,
  socialText,
}: FooterProps) {
  const whatsappNumber = whatsapp || "5512991234567";
  const contactEmail = email || "contato@oparsjc.org";
  const displayDescription =
    description ||
    "Organização de Proteção Animal de Resgate. Desde 2015 salvando vidas em São José dos Campos.";
  const displayAddress = address || "São José dos Campos - SP\nCEP 12240-000";
  const displayInstagramUrl = instagramUrl || "https://instagram.com/oparsjc";
  const displayFacebookUrl = facebookUrl || "https://facebook.com/oparsjc";
  const displaySocialText =
    socialText || "Siga-nos para acompanhar os resgates e eventos de adoção!";

  const addressLines = displayAddress.split("\n");

  return (
    <footer
      id="contato"
      className="bg-slate-900 text-slate-300"
      aria-label="Rodapé com informações de contato"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <PawPrint
                className="w-6 h-6 text-primary-400"
                aria-hidden="true"
              />
              <span>OPAR</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {displayDescription}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                  aria-label={`Contato via WhatsApp: ${formatWhatsapp(whatsappNumber)}`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>{formatWhatsapp(whatsappNumber)}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                  aria-label={`Enviar e-mail para ${contactEmail}`}
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>{contactEmail}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <MapPin
                    className="w-4 h-4 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <address className="not-italic">
                    {addressLines.map((line, i) => (
                      <span key={i}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href={displayInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary-600 transition-colors"
                aria-label="Seguir OPAR no Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={displayFacebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary-600 transition-colors"
                aria-label="Seguir OPAR no Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">{displaySocialText}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2025 OPAR - Organização de Proteção Animal de Resgate. Todos
            os direitos reservados.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Desenvolvido com 💚 por voluntários para a causa animal.
          </p>
        </div>
      </div>
    </footer>
  );
}
