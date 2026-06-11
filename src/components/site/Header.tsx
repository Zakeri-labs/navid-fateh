import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/971507657477";

const NAV = [
  { to: "/", label: "خانه" },
  { to: "/guide", label: "راهنما" },
  { to: "/contact", label: "تماس با ما" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container-page relative flex items-center h-16 md:h-20">

          {/* RTL: سمت راست — لوگو + دکمه CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img src={logo} alt="نوید فاتح" className="h-10 w-10 object-contain" />
              <span className="flex flex-col leading-tight">
                <span className="font-extrabold text-base md:text-lg text-foreground">
                  نوید فاتح
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  مشاوره ملک در دبی
                </span>
              </span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary !py-2.5 !px-4 text-base"
            >
              <MessageCircle className="w-4 h-4" />
              شروع مشاوره
            </a>
          </div>

          {/* وسط واقعی — ناوبری با absolute centering */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* موبایل — همبرگر سمت چپ */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden ms-auto inline-flex items-center justify-center w-10 h-10 rounded-lg bg-background/90 border border-border text-foreground"
            aria-label="باز کردن منو"
          >
            <Menu className="w-5 h-5" />
          </button>

        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setOpen(false)} />
          <div className="absolute top-0 inset-x-0 bg-background border-b border-border shadow-card p-5 animate-fade-up">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="نوید فاتح" className="h-10 w-10 object-contain" />
                <div className="leading-tight">
                  <div className="font-extrabold">نوید فاتح</div>
                  <div className="text-xs text-muted-foreground">مشاوره ملک در دبی</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border"
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3.5 text-lg font-semibold text-foreground hover:bg-surface-muted"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              شروع مشاوره در واتساپ
            </a>
          </div>
        </div>
      )}
    </>
  );
}
