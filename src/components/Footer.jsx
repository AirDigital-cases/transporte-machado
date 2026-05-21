import { Instagram, MessageCircle } from "lucide-react";
import {
  buildWhatsAppUrl,
  instagramUrl,
  navigation,
} from "../data/siteContent";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="shell grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-start lg:justify-between">
        <div className="max-w-md">
          <Logo />
          <p className="mt-5 text-sm leading-7 text-white/58">
            Transporte seguro, rápido e eficiente de cargas.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/62 sm:grid-cols-4 lg:grid-cols-2">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/72 hover:border-brand-400/30 hover:text-white"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/72 hover:border-brand-400/30 hover:text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>

      <div className="shell mt-8 border-t border-white/10 pt-6 text-sm text-white/38">
        © {new Date().getFullYear()} Machado Transportes. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
