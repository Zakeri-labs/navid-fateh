import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { MessageCircle, Instagram, ChevronDown, ShieldCheck } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/971507657477";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس | شروع مشاوره خرید ملک دبی — نوید فاتح" },
      { name: "description", content: "تماس مستقیم با نوید فاتح برای مشاوره خرید ملک در دبی. واتساپ، اینستاگرام و فرم سریع." },
      { property: "og:title", content: "تماس با نوید فاتح" },
      { property: "og:description", content: "شروع مشاوره فارسی‌زبان خرید ملک در دبی." },
    ],
  }),
  component: ContactPage,
});

const FAQ = [
  { q: "آیا بازده تضمینی است؟", a: "خیر. هیچ بازده‌ای تضمین نمی‌شود. اعداد ارائه‌شده برآورد تقریبی هستند و باید برای هر پروژه جداگانه بررسی شوند." },
  { q: "شرایط اقساط در همه پروژه‌ها یکسان است؟", a: "خیر. مبلغ اولیه، مدت پرداخت و زمان تحویل بسته به سازنده و پروژه متفاوت است." },
  { q: "آیا خرید ملک همیشه به اقامت منجر می‌شود؟", a: "خرید ملک به‌تنهایی به معنی اقامت نیست. شرایط بر اساس ارزش ملک، نوع پروژه و قوانین روز متفاوت است." },
  { q: "برای شروع مشاوره چه اطلاعاتی لازم است؟", a: "هدف خرید، حدود بودجه و روش پرداخت برای شروع کافی است." },
  { q: "آیا برای شروع باید تصمیم نهایی گرفته باشم؟", a: "خیر. مرحله اول فقط برای شناخت شرایط و بررسی گزینه‌های مرتبط است." },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Header />
      <main className="pt-28 md:pt-32">
        <div className="container-page max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
            تماس و شروع مشاوره
          </h1>
          <p className="mt-4 text-muted-foreground leading-8 max-w-2xl">
            هدف این صفحه پاسخ به پرسش‌های رایج و فراهم‌کردن مسیر ارتباط مستقیم است.
          </p>

          <section className="mt-10 card-soft p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-extrabold">بخش شفافیت و ضدریسک</h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-8">
              هیچ بازده، اقامت یا رشد قیمتی تضمین نمی‌شود. هدف مشاوره، شفاف‌سازی شرایط و کمک به تصمیم بهتر است؛ نه فروش پروژه به هر قیمت.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">پرسش‌های متداول</h2>
            <div className="mt-5 space-y-3">
              {FAQ.map((f, i) => <FaqItem key={i} {...f} />)}
            </div>
          </section>

          <section className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="card-soft p-6 md:p-8">
              <h2 className="text-xl font-extrabold mb-2">فرم مشاوره سریع</h2>
              <p className="text-sm text-muted-foreground leading-7 mb-5">
                اطلاعات شما ثبت می‌شود و در کوتاه‌ترین زمان پاسخ داده خواهد شد.
              </p>
              <ContactForm />
            </div>
            <div className="card-soft p-6 md:p-8 bg-surface">
              <h2 className="text-xl font-extrabold mb-4">روش‌های ارتباطی</h2>
              <div className="space-y-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                  <MessageCircle className="w-5 h-5" /> واتساپ: 00971507657477
                </a>
                <a href="https://instagram.com/navidfateh_realstate" target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
                  <Instagram className="w-5 h-5" /> @navidfateh_realstate
                </a>
                <a href="https://instagram.com/albandar_realestate" target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
                  <Instagram className="w-5 h-5" /> @albandar_realestate
                </a>
              </div>
              <p className="mt-6 text-xs text-muted-foreground leading-6">
                ساعت پاسخگویی: ۱۰ صبح تا ۱۰ شب به وقت دبی.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-soft overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-right">
        <span className="font-bold text-foreground">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-7">{a}</div>}
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ name: "", phone: "", note: "" });
  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `سلام، فرم تماس از سایت:%0A نام: ${data.name}%0A تلفن: ${data.phone}%0A پیام: ${data.note}`;
    window.open(`${WHATSAPP_URL}?text=${msg}`, "_blank");
    setSent(true);
  };
  return (
    <form onSubmit={handle} className="space-y-3">
      <input required value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="نام شما" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
      <input required value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder="شماره تماس یا واتساپ" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
      <textarea value={data.note} onChange={(e) => setData({ ...data, note: e.target.value })} placeholder="هدف خرید و حدود بودجه" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
      <button type="submit" className="btn-primary w-full">
        <MessageCircle className="w-5 h-5" /> شروع مشاوره در واتساپ
      </button>
      {sent && <p className="text-xs text-[var(--color-whatsapp)] font-semibold">پیام شما در واتساپ آماده شد.</p>}
    </form>
  );
}
