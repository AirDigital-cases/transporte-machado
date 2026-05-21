import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buildWhatsAppUrl, navigation } from "../data/siteContent";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkClass =
    "text-sm font-medium text-white/72 hover:text-white transition";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-ink-950/84 shadow-[0_20px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between py-3 sm:py-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            <MessageCircle size={18} />
            Solicitar cotação
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[1.15rem] border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-50 bg-ink-950/95 px-5 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="panel mx-auto mt-3 flex min-h-[calc(100vh-1.5rem)] w-full max-w-lg flex-col p-5"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="mt-8 grid flex-1 grid-cols-2 gap-3">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="panel-soft flex min-h-[4.5rem] items-end px-4 py-4 text-sm font-medium text-white/82"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="primary-button mt-6 w-full"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={18} />
                Solicitar cotação
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
