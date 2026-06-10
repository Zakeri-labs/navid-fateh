import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { MessageCircle, ShieldCheck, Calculator, Home } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/971507657477";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "راهنما | اقامت و ماشین حساب بودجه — نوید فاتح" },
      { name: "description", content: "راهنمای اقامت از طریق خرید ملک در دبی و ماشین حساب تقریبی بودجه و اقساط." },
      { property: "og:title", content: "راهنمای خرید ملک در دبی" },
      { property: "og:description", content: "اقامت، بودجه و اقساط — به زبان فارسی." },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Header />
      <main className="pt-28 md:pt-32">
        <div className="container-page max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
            راهنمای خرید ملک در دبی
          </h1>
          <p className="mt-4 text-muted-foreground leading-8">
            مرور کوتاه اقامت، بودجه و اقساط برای تصمیم آگاهانه‌تر. این مطالب صرفاً جنبه راهنما دارند و جایگزین بررسی پروژه‌محور نیستند.
          </p>

          <section className="mt-12 card-soft p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Home className="w-5 h-5" /></span>
              <h2 className="text-2xl font-extrabold">راهنمای اقامت از طریق خرید ملک</h2>
            </div>
            <div className="mt-5 space-y-4 text-foreground/85 leading-8 text-sm md:text-base">
              <p>در دبی برخی شرایط ملکی می‌تواند زمینه‌ساز اقامت کوتاه‌مدت یا بلندمدت باشد. شرایط بر اساس ارزش ملک، نوع پروژه و قوانین روز متفاوت است.</p>
              <p>قبل از تصمیم خرید با هدف اقامت، باید مدارک، حداقل ارزش ملک و وضعیت سند پروژه به‌صورت پروژه‌محور بررسی شود.</p>
            </div>
            <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
              <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-7">
                خرید ملک به‌تنهایی به معنی اعطای قطعی اقامت نیست. شرایط و قوانین در زمان خرید باید بررسی شود.
              </p>
            </div>
          </section>

          <BudgetCalculator />

          <div className="mt-12 text-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="w-5 h-5" /> دریافت راهنمایی متناسب با شرایط من
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

function BudgetCalculator() {
  const [price, setPrice] = useState(1000000);
  const [down, setDown] = useState(20);
  const [years, setYears] = useState(4);

  const { downAmount, remaining, monthly } = useMemo(() => {
    const d = (price * down) / 100;
    const r = price - d;
    const m = years > 0 ? r / (years * 12) : 0;
    return { downAmount: d, remaining: r, monthly: m };
  }, [price, down, years]);

  const fmt = (n: number) => new Intl.NumberFormat("fa-IR").format(Math.round(n));

  return (
    <section className="mt-12 card-soft p-6 md:p-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Calculator className="w-5 h-5" /></span>
        <h2 className="text-2xl font-extrabold">ماشین حساب تقریبی بودجه و اقساط</h2>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-7">
        برای برآورد اولیه. شرایط واقعی پروژه‌ها متفاوت است.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-5">
        <Field label={`قیمت ملک (درهم): ${fmt(price)}`}>
          <input type="range" min={100000} max={10000000} step={50000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full accent-[var(--color-primary)]" />
        </Field>
        <Field label={`پیش‌پرداخت: ${down}٪`}>
          <input type="range" min={5} max={60} step={1} value={down} onChange={(e) => setDown(+e.target.value)} className="w-full accent-[var(--color-primary)]" />
        </Field>
        <Field label={`مدت اقساط: ${years} سال`}>
          <input type="range" min={1} max={6} step={1} value={years} onChange={(e) => setYears(+e.target.value)} className="w-full accent-[var(--color-primary)]" />
        </Field>
      </div>

      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <Result label="مبلغ پیش‌پرداخت" value={`${fmt(downAmount)} درهم`} />
        <Result label="مبلغ اقساط" value={`${fmt(remaining)} درهم`} />
        <Result label="قسط ماهانه تقریبی" value={`${fmt(monthly)} درهم`} primary />
      </div>

      <p className="mt-4 text-xs text-muted-foreground leading-6">
        این برآورد بدون احتساب کارمزد، مالیات، بیمه و شرایط خاص هر پروژه است و صرفاً جنبه تقریبی دارد.
      </p>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm font-bold text-foreground mb-2">{label}</div>
      {children}
    </div>
  );
}

function Result({ label, value, primary }: { label: string; value: string; primary?: boolean }) {
  return (
    <div className={`p-4 rounded-xl border ${primary ? "bg-primary text-primary-foreground border-primary" : "bg-surface border-border"}`}>
      <div className={`text-xs ${primary ? "text-white/80" : "text-muted-foreground"}`}>{label}</div>
      <div className="mt-1 text-xl font-extrabold">{value}</div>
    </div>
  );
}
