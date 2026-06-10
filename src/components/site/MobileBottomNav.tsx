import { Link } from "@tanstack/react-router";
import { Home, BookOpen, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/971507657477";

export function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-40">
      <div className="rounded-2xl bg-background/95 backdrop-blur border border-border shadow-card flex items-center justify-between px-2 py-2">
        <Link to="/" className="flex-1 flex flex-col items-center gap-0.5 py-2 text-[11px] text-foreground/70" activeProps={{ className: "text-primary" }}>
          <Home className="w-5 h-5" /> خانه
        </Link>
        <Link to="/guide" className="flex-1 flex flex-col items-center gap-0.5 py-2 text-[11px] text-foreground/70" activeProps={{ className: "text-primary" }}>
          <BookOpen className="w-5 h-5" /> راهنما
        </Link>
        <Link to="/contact" className="flex-1 flex flex-col items-center gap-0.5 py-2 text-[11px] text-foreground/70" activeProps={{ className: "text-primary" }}>
          <Phone className="w-5 h-5" /> تماس
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ms-1 inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-whatsapp)] text-[var(--color-whatsapp-foreground)] px-3 py-2.5 text-xs font-bold shadow-soft"
        >
          <MessageCircle className="w-4 h-4" /> واتساپ
        </a>
      </div>
    </div>
  );
}
