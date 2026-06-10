import { useMemo, useState } from "react";
import { MessageCircle, Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/971507657477";

const goals = ["سرمایه‌گذاری", "اقامت", "زندگی", "درآمد اجاره", "هنوز مطمئن نیستم"];
const initialBudgets = ["تا ۱۰۰ هزار درهم", "۱۰۰ تا ۳۰۰ هزار درهم", "۳۰۰ هزار تا ۱ میلیون درهم", "بیش از ۱ میلیون درهم", "هنوز مشخص نیست"];
const totalBudgets = ["تا ۵۰۰ هزار درهم", "۵۰۰ هزار تا ۱.۵ میلیون درهم", "۱.۵ تا ۳ میلیون درهم", "بیش از ۳ میلیون درهم", "هنوز مشخص نیست"];
const payments = ["نقدی", "اقساطی", "نیاز به مقایسه دارم"];

type ChipsProps = { label: string; options: string[]; value: string | null; onChange: (v: string) => void };

function Chips({ label, options, value, onChange }: ChipsProps) {
  return (
    <div>
      <div className="text-sm font-bold text-foreground mb-3">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className={`px-3.5 py-2 rounded-full text-sm font-semibold border transition-all ${
                active
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-card text-foreground/80 border-border hover:border-primary/40"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function QualifyForm() {
  const [goal, setGoal] = useState<string | null>(null);
  const [initBudget, setInitBudget] = useState<string | null>(null);
  const [totalBudget, setTotalBudget] = useState<string | null>(null);
  const [payment, setPayment] = useState<string | null>(null);

  const message = useMemo(() => {
    return `سلام، برای بررسی گزینه‌های خرید ملک در دبی پیام می‌دهم.

هدف خرید من: ${goal ?? "—"}
حدود بودجه اولیه: ${initBudget ?? "—"}
حدود بودجه کلی: ${totalBudget ?? "—"}
روش پرداخت مدنظر: ${payment ?? "—"}

لطفاً راهنمایی کنید چه گزینه‌هایی برای شرایط من مناسب‌تر هستند.`;
  }, [goal, initBudget, totalBudget, payment]);

  const ready = goal && initBudget && totalBudget && payment;
  const href = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 card-soft p-6 md:p-8 space-y-7">
        <Chips label="۱. هدف خرید" options={goals} value={goal} onChange={setGoal} />
        <Chips label="۲. بودجه اولیه" options={initialBudgets} value={initBudget} onChange={setInitBudget} />
        <Chips label="۳. بودجه کلی تقریبی" options={totalBudgets} value={totalBudget} onChange={setTotalBudget} />
        <Chips label="۴. روش پرداخت" options={payments} value={payment} onChange={setPayment} />
      </div>

      <div className="lg:col-span-2 card-soft p-6 md:p-8 bg-surface flex flex-col">
        <div className="text-sm font-bold text-primary mb-3">پیش‌نمایش پیام واتساپ</div>
        <pre className="text-sm leading-7 whitespace-pre-wrap text-foreground/85 bg-card border border-border rounded-xl p-4 font-sans flex-1">
{message}
        </pre>
        <p className="text-xs text-muted-foreground mt-3 leading-6">
          پس از انتخاب گزینه‌ها، پیام آماده برای واتساپ ساخته می‌شود. قبل از ارسال می‌توانید آن را بررسی کنید.
        </p>
        <a
          href={ready ? href : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!ready}
          onClick={(e) => { if (!ready) e.preventDefault(); }}
          className={`btn-whatsapp mt-4 ${!ready && "opacity-50 cursor-not-allowed"}`}
        >
          <MessageCircle className="w-5 h-5" />
          ارسال اطلاعات و شروع مشاوره
        </a>
        <div className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-[var(--color-whatsapp)]" />
          مرحله اول فقط برای شناخت شرایط و بررسی گزینه‌های مرتبط است.
        </div>
      </div>
    </div>
  );
}
