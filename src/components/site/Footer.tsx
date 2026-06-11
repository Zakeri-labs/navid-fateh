import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Building2 } from "lucide-react";
import founder from "@/assets/founder-portrait.jpg";

const WHATSAPP_URL = "https://wa.me/971507657477";

export function Footer() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={founder}
              alt="نوید فاتح، مشاور املاک"
              loading="lazy"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
            />
            <div>
              <div className="font-extrabold text-lg">نوید فاتح</div>
              <div className="text-xs opacity-80">Albandar Real Estate · Dubai</div>
            </div>
          </div>
          <p className="text-base leading-7 opacity-85 max-w-md">
            مشاوره فارسی‌زبان برای تصمیم مطمئن‌تر در خرید ملک دبی.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-6 inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            شروع مشاوره در واتساپ
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4 opacity-90">پیوندها</h4>
          <ul className="space-y-2 text-base opacity-85">
            <li><Link to="/" className="hover:opacity-100">خانه</Link></li>
            <li><Link to="/guide" className="hover:opacity-100">راهنما</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">تماس با ما</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4 opacity-90">ارتباط</h4>
          <ul className="space-y-2 text-base opacity-85">
            <li>
              <a href="https://instagram.com/navidfateh_realstate" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-100">
                <Instagram className="w-4 h-4" /> @navidfateh_realstate
              </a>
            </li>
            <li>
              <a href="https://instagram.com/albandar_realestate" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-100">
                <Instagram className="w-4 h-4" /> @albandar_realestate
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-100">
                <MessageCircle className="w-4 h-4" /> 00971507657477
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-wrap items-center justify-between gap-3 text-sm opacity-70">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4" /> Albandar Real Estate
          </div>
          <div>© {new Date().getFullYear()} — تمامی حقوق محفوظ است.</div>
        </div>
      </div>
    </footer>
  );
}
