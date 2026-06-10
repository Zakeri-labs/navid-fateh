import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Users, TrendingUp, CalendarRange, ChevronLeft, MessageCircle,
  MapPin, Building, LineChart, Calculator, Target, Wallet, CreditCard,
  Compass, Hammer, CheckCircle2, BarChart3, Clock, Award, Instagram,
  Send, Filter, FileSearch, Phone, Quote,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { QualifyForm } from "@/components/site/QualifyForm";
import heroAdvisor from "@/assets/hero-advisor.jpg";
import problemAdvisor from "@/assets/problem-advisor.jpg";
import dubaiSkyline from "@/assets/dubai-skyline.jpg";

const WHATSAPP_URL = "https://wa.me/971507657477";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نوید فاتح | خرید امن ملک در دبی برای فارسی‌زبانان" },
      { name: "description", content: "مشاوره تخصصی فارسی‌زبان برای خرید امن ملک در دبی. سرمایه‌گذاری، اقامت، اقساط و درآمد اجاره — تصمیم آگاهانه با راهنمایی مستقیم." },
      { property: "og:title", content: "خرید امن ملک در دبی برای فارسی‌زبانان" },
      { property: "og:description", content: "مشاوره فارسی‌زبان شفاف برای انتخاب درست ملک در دبی." },
    ],
  }),
  component: HomePage,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="w-6 h-px bg-primary" />
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle, align = "start" }: {
  eyebrow: string; title: React.ReactNode; subtitle?: string; align?: "start" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-8">{subtitle}</p>}
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pb-24 md:pb-0">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ApproachSection />
        <AudienceFitSection />
        <DataProofSection />
        <ClearOfferSection />
        <PersonalTrustSection />
        <PurchaseJourneySection />
        <SocialProofSection />
        <CashVsInstallmentSection />
        <QualifiedCTASection />
        <FinalBanner />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

/* ---------------- 1. HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-28">
      <div className="relative min-h-[760px] md:min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroAdvisor}
            alt="نوید فاتح، مشاور فارسی‌زبان خرید ملک در دبی، مقابل افق دبی"
            width={1664}
            height={945}
            className="h-full w-full object-cover object-[28%_center] opacity-35 md:object-center md:opacity-100"
          />
        </div>

        <div className="container-page relative z-10">
          <div className="flex min-h-[600px] flex-col justify-center py-8 md:min-h-[calc(100vh-160px)] md:flex-row md:items-center md:gap-10 md:py-16 lg:gap-16">
            <div className="w-full md:w-[48%] lg:w-[46%] text-right animate-fade-up">
              <div className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-primary w-fit px-0 py-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                مشاوره خرید ملک در دبی برای فارسی‌زبانان
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.15]">
                برای خرید ملک در دبی،
                <br />
                <span>اول مطمئن تصمیم بگیرید</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-foreground/80 leading-8 max-w-xl">
                پروژه مناسب شما باید بر اساس بودجه، هدف خرید، شرایط پرداخت، اعتبار سازنده و موقعیت ملک انتخاب شود؛ نه صرفاً بر اساس تبلیغات.
              </p>
              <p className="mt-3 text-sm md:text-base text-foreground/70 leading-8 max-w-xl">
                خرید نقدی یا اقساطی، سرمایه‌گذاری، اقامت یا انتخاب ملک مناسب برای زندگی؛ مسیر از یک بررسی شفاف و هدفمند شروع می‌شود.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="w-5 h-5" />
                  شروع مشاوره در واتساپ
                  <ChevronLeft className="w-4 h-4" />
                </a>
                <a href="#qualify" className="btn-outline bg-background/80 backdrop-blur">
                  بررسی گزینه مناسب بودجه من
                  <ChevronLeft className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-7">
                برای شروع، فقط هدف خرید، حدود بودجه و روش پرداخت را مشخص کنید.
              </p>
            </div>

            <div className="hidden md:block md:flex-1" aria-hidden="true" />
          </div>
        </div>

        <div className="container-page relative z-20 -mt-8 md:-mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {[
              { icon: ShieldCheck, title: "مشاور Verified", body: "پیج تأییدشده و اطلاعات واقعی پروژه‌ها." },
              { icon: Users, title: "+۵۷K دنبال‌کننده", body: "اعتماد جامعه فارسی‌زبان به محتوای تخصصی." },
              { icon: TrendingUp, title: "بازده اجاره تا ٪", body: "برآورد سود اجاره برای مقایسه فرصت‌ها." },
              { icon: CalendarRange, title: "اقساط تا ۶ سال", body: "بررسی شرایط پرداخت پروژه‌ها." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-soft p-5 md:p-7 text-center">
                <div className="mx-auto flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary-soft text-primary mb-4">
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="text-base md:text-xl font-extrabold text-foreground">{title}</div>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-7">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. PROBLEM ---------------- */
function ProblemSection() {
  const risks = [
    { icon: MapPin, label: "منطقه نامناسب" },
    { icon: Building, label: "سازنده ضعیف" },
    { icon: LineChart, label: "بازدهی غیرواقعی" },
    { icon: Calculator, label: "اقساط نامتناسب" },
  ];

  return (
    <section className="mt-24 md:mt-32">
      <div className="container-page">
        <div className="relative rounded-3xl bg-gradient-to-b from-surface to-background border border-border overflow-hidden p-6 sm:p-10 md:p-14">
          {/* Decorative bubble */}
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-8 left-10 w-24 h-24 rounded-full bg-[oklch(0.7_0.12_240)]/15 blur-2xl" />

          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image side (left in RTL) */}
            <div className="order-2 lg:order-1 lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-muted">
                <img
                  src={problemAdvisor}
                  alt="مشاور در حال بررسی گزینه‌های ملک در دبی"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 text-6xl md:text-7xl font-black text-primary/30 leading-none select-none">؟</div>
              </div>
            </div>

            {/* Content (right in RTL) */}
            <div className="order-1 lg:order-2 lg:col-span-7 text-right">
              <div className="text-xs font-semibold text-muted-foreground mb-3">
                بخش ۲ | مسئله
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-[1.2]">
                مشکل، کمبود ملک نیست؛
                <br />
                <span className="text-foreground">انتخاب اشتباه است</span>
              </h2>
              <p className="mt-4 text-sm md:text-base font-semibold text-muted-foreground">
                بازتعریف روان‌شناسی تصمیم
              </p>
              <div className="mt-4 w-16 h-1 bg-primary rounded-full" />

              <div className="mt-7 flex gap-4 p-5 rounded-2xl bg-primary-soft border border-primary/15">
                <Target className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-base md:text-lg font-bold text-primary leading-8">
                  در دبی پروژه زیاد است؛ اما پروژه مناسب بودجه، هدف و ریسک‌پذیری شما کم است.
                </p>
              </div>

              <p className="mt-6 text-sm md:text-base text-muted-foreground leading-8">
                در بازاری که هر روز پروژه جدید معرفی می‌شود، تصمیم خوب از فیلترکردن گزینه‌ها شروع می‌شود.
                هر پروژه‌ای که جذاب به نظر می‌رسد، الزاماً برای بودجه، هدف یا زمان‌بندی شما مناسب نیست.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {risks.map(({ icon: Icon, label }) => (
                  <div key={label} className="card-soft p-4 text-center">
                    <Icon className="w-7 h-7 text-primary mx-auto mb-2" />
                    <div className="text-sm font-bold text-foreground leading-6">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a href="#qualify" className="btn-primary">
                  <Filter className="w-5 h-5" />
                  قبل از خرید، شرایط خودتان را بررسی کنید
                </a>
                <p className="text-xs text-muted-foreground">یک پروژه خوب برای همه مناسب نیست.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. APPROACH ---------------- */
function ApproachSection() {
  const steps = [
    { icon: Target, title: "هدف خرید", body: "سرمایه‌گذاری، اقامت، درآمد اجاره یا زندگی." },
    { icon: Wallet, title: "بودجه", body: "مبلغ اولیه، توان پرداخت و بازه تصمیم‌گیری." },
    { icon: CreditCard, title: "روش پرداخت", body: "خرید نقدی یا اقساطی." },
    { icon: Compass, title: "منطقه", body: "تقاضای اجاره، دسترسی، نوع پروژه و ظرفیت رشد." },
    { icon: Hammer, title: "سازنده و پروژه", body: "سابقه، زمان تحویل، شرایط قرارداد و کیفیت اجرا." },
    { icon: CheckCircle2, title: "انتخاب نهایی", body: "مقایسه گزینه‌های متناسب." },
  ];
  return (
    <section className="mt-24 md:mt-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="قبل از معرفی هر پروژه"
          title={<>انتخاب ملک باید از شرایط شما شروع شود، <span className="text-primary">نه از لیست پروژه‌ها</span></>}
          subtitle="هر گزینه زمانی ارزش بررسی دارد که با هدف، بودجه و مدل خرید شما هماهنگ باشد."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="card-soft p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <s.icon className="w-5 h-5" />
                </div>
                <span className="text-3xl font-black text-primary/15">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-lg font-extrabold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-primary text-primary-foreground">
          <p className="font-bold text-base md:text-lg">مرحله اول، معرفی پروژه نیست؛ شناخت شرایط شماست.</p>
          <a href="#qualify" className="btn-primary !bg-accent">
            بررسی شرایط خرید من
            <ChevronLeft className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. AUDIENCE FIT ---------------- */
function AudienceFitSection() {
  const goals = [
    { title: "برای سرمایه‌گذاری", body: "رشد سرمایه با ارزیابی منطقه و سازنده.", icon: TrendingUp },
    { title: "برای اقامت", body: "بررسی شرایط ملکی مرتبط با اقامت.", icon: ShieldCheck },
    { title: "برای خرید اقساطی", body: "مقایسه برنامه‌های پرداخت و زمان تحویل.", icon: CreditCard },
    { title: "برای درآمد اجاره", body: "مناطقی با تقاضای اجاره و بازده مناسب.", icon: BarChart3 },
    { title: "برای زندگی در دبی", body: "انتخاب محله، مدارس و سبک زندگی.", icon: Compass },
  ];
  return (
    <section className="mt-24 md:mt-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="بر اساس هدف شما"
          title={<>این مشاوره برای چه کسانی <span className="text-primary">مناسب است؟</span></>}
          subtitle="مسیر خرید برای همه یکسان نیست. هدف شما مشخص می‌کند چه گزینه‌هایی باید بررسی شوند."
        />

        <div className="mt-10 -mx-5 px-5 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible">
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 min-w-max md:min-w-0">
            {goals.map((g) => (
              <div key={g.title} className="card-soft p-5 w-64 md:w-auto shrink-0">
                <div className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-primary-soft text-primary mb-3">
                  <g.icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-foreground">{g.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-6">{g.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#qualify" className="btn-primary">
            هدف خرید من را بررسی کنید
            <ChevronLeft className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. DATA PROOF ---------------- */
function DataProofSection() {
  const metrics = [
    { label: "مبلغ اولیه", value: "از ٪۱۰", caption: "بسته به سازنده و پروژه" },
    { label: "برنامه پرداخت", value: "تا ۶ سال", caption: "اقساط بلندمدت برای برخی پروژه‌ها" },
    { label: "زمان تحویل", value: "۱ تا ۴ سال", caption: "وابسته به مرحله ساخت" },
    { label: "تقاضای اجاره منطقه", value: "متفاوت", caption: "بسته به محله و نوع واحد" },
    { label: "سابقه سازنده", value: "بررسی فردی", caption: "اعتبار، تعهد و کیفیت اجرا" },
    { label: "بازده احتمالی اجاره", value: "۶٪ تا ۱۰٪", caption: "برآورد تقریبی، نه تضمینی" },
  ];
  return (
    <section className="mt-24 md:mt-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="تصمیم بر اساس واقعیت بازار"
          title={<>بازار را با عدد ببینید، <span className="text-primary">نه هیجان</span></>}
          subtitle="بازده اجاره، شرایط پرداخت، زمان تحویل، سابقه سازنده و موقعیت پروژه باید در کنار هم بررسی شوند."
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {metrics.map((m) => (
            <div key={m.label} className="card-soft p-6">
              <div className="text-xs font-semibold text-muted-foreground">{m.label}</div>
              <div className="mt-2 text-3xl md:text-4xl font-extrabold text-primary">{m.value}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-6">{m.caption}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 p-5 rounded-2xl border border-border bg-surface">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm md:text-base text-muted-foreground leading-7">
            <strong className="text-foreground">توجه: </strong>
            هیچ عددی بدون بررسی پروژه و شرایط روز بازار نباید مبنای تصمیم نهایی باشد.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a href="#qualify" className="btn-primary">
            تحلیل گزینه‌های مناسب بودجه من
            <ChevronLeft className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. CLEAR OFFER ---------------- */
function ClearOfferSection() {
  const items = [
    "بررسی هدف خرید",
    "بررسی بودجه و روش پرداخت",
    "مقایسه مناطق مناسب",
    "معرفی پروژه‌ها و سازنده‌های مرتبط",
    "توضیح مسیر خرید و نکات مهم قرارداد",
    "پاسخ به پرسش‌های اقساط، اقامت و بازده احتمالی",
  ];
  return (
    <section className="mt-24 md:mt-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="خروجی مشاوره"
              title={<>دقیقاً چه کمکی <span className="text-primary">دریافت می‌کنید؟</span></>}
              subtitle="هدف این نیست که فقط پروژه‌های بیشتری ببینید. هدف این است که گزینه‌های مناسب‌تر را سریع‌تر تشخیص دهید."
            />
            <p className="mt-6 text-sm text-muted-foreground leading-7">
              برای شروع لازم نیست همه پاسخ‌ها را بدانید. اطلاعات اولیه کافی است.
            </p>
            <a href="#qualify" className="btn-primary mt-6 inline-flex">
              دریافت پیشنهاد اولیه بر اساس شرایط من
              <ChevronLeft className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="card-soft p-6 md:p-8">
              <ul className="grid sm:grid-cols-2 gap-3">
                {items.map((t) => (
                  <li key={t} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface border border-border">
                    <span className="inline-flex w-7 h-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span className="text-sm md:text-base font-semibold text-foreground leading-6">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. PERSONAL TRUST ---------------- */
function PersonalTrustSection() {
  return (
    <section className="mt-24 md:mt-32">
      <div className="container-page">
        <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-6 sm:p-10 md:p-14">
          <img
            src={dubaiSkyline}
            alt="افق دبی در غروب"
            loading="lazy"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <img
                  src={heroAdvisor}
                  alt="نوید فاتح، مشاور ملک در دبی"
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-56 h-56 md:w-64 md:h-64 rounded-3xl object-cover border-4 border-white/20 shadow-card"
                />
                <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground font-bold text-xs px-3 py-1.5 rounded-full shadow-soft">
                  <ShieldCheck className="w-3.5 h-3.5 inline ms-1" /> Verified
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 text-right">
              <Eyebrow><span className="text-white/80">درباره نوید و Albandar</span></Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                مشاوره‌ای که بر شفافیت، دسترسی مستقیم و اطلاعات واقعی تکیه دارد
              </h2>
              <p className="mt-4 text-white/85 leading-8 max-w-2xl">
                نوید فاتح در دبی فعالیت می‌کند و از طریق Albandar Real Estate به فارسی‌زبانان برای بررسی گزینه‌های خرید ملک کمک می‌کند.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  { icon: MapPin, text: "حضور فعال در بازار دبی" },
                  { icon: MessageCircle, text: "ارتباط مستقیم از طریق واتساپ" },
                  { icon: ShieldCheck, text: "پیج تأییدشده نوید فاتح" },
                  { icon: Users, text: "بیش از ۵۷K دنبال‌کننده" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                    <Icon className="w-5 h-5 text-white" />
                    <span className="text-sm font-semibold">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="w-5 h-5" /> پیام مستقیم در واتساپ
                </a>
                <a href="https://instagram.com/navidfateh_realstate" target="_blank" rel="noopener noreferrer" className="btn-outline bg-white text-primary border-white hover:!bg-white/90 hover:!text-primary">
                  <Instagram className="w-5 h-5" /> مشاهده اینستاگرام نوید
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. PURCHASE JOURNEY ---------------- */
function PurchaseJourneySection() {
  const steps = [
    { icon: Send, title: "ارسال اطلاعات اولیه" },
    { icon: FileSearch, title: "بررسی شرایط" },
    { icon: Building, title: "معرفی گزینه‌های مرتبط" },
    { icon: BarChart3, title: "مقایسه و پاسخ به پرسش‌ها" },
    { icon: CheckCircle2, title: "انتخاب و پیگیری مراحل خرید" },
  ];
  return (
    <section className="mt-24 md:mt-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="مسیر همکاری"
          title={<>از پیام واتساپ تا انتخاب پروژه، <span className="text-primary">مرحله‌به‌مرحله</span></>}
          subtitle="برای شروع لازم نیست تصمیم نهایی گرفته باشید. مسیر از یک گفت‌وگوی کوتاه درباره شرایط شما آغاز می‌شود."
        />
        <div className="mt-10 relative">
          <div className="hidden md:block absolute top-7 right-8 left-8 h-px bg-border" />
          <ol className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative card-soft p-5 text-center">
                <div className="mx-auto inline-flex w-14 h-14 items-center justify-center rounded-full bg-primary text-primary-foreground border-4 border-background relative z-10">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="mt-3 text-xs font-bold text-primary">مرحله {i + 1}</div>
                <div className="mt-1 font-extrabold text-foreground leading-6">{s.title}</div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-8 text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle className="w-5 h-5" /> شروع مرحله اول در واتساپ
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 9. SOCIAL PROOF ---------------- */
function SocialProofSection() {
  const items = [
    { tag: "سرمایه‌گذاری", text: "نمونه پیام واتساپ مشتری — به‌زودی جایگزین می‌شود.", name: "[نام مشتری]" },
    { tag: "اقساطی", text: "نمونه تجربه خریدار اقساطی — به‌زودی جایگزین می‌شود.", name: "[نام مشتری]" },
    { tag: "اقامت", text: "نمونه مسیر خرید برای اقامت — به‌زودی جایگزین می‌شود.", name: "[نام مشتری]" },
    { tag: "درآمد اجاره", text: "نمونه گزارش بازده اجاره — به‌زودی جایگزین می‌شود.", name: "[نام مشتری]" },
  ];
  return (
    <section className="mt-24 md:mt-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="تجربه مشتریان"
          title={<>اعتماد زمانی معنا پیدا می‌کند که <span className="text-primary">نتیجه آن دیده شود</span></>}
          subtitle="بخشی از تجربه خریدارانی که مسیر بررسی و انتخاب ملک در دبی را طی کرده‌اند."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div key={i} className="card-soft p-5 flex flex-col">
              <Quote className="w-7 h-7 text-primary/30" />
              <p className="mt-3 text-sm text-foreground/85 leading-7 flex-1">{it.text}</p>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-bold text-muted-foreground">{it.name}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-primary-soft text-primary">{it.tag}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground text-center">
          نمونه‌های واقعی به‌زودی با اجازه مشتریان جایگزین خواهد شد.
        </p>
        <div className="mt-8 text-center">
          <a href="#qualify" className="btn-primary">
            شرایط خرید من را بررسی کنید
            <ChevronLeft className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 10. CASH VS INSTALLMENT ---------------- */
function CashVsInstallmentSection() {
  const cash = ["مناسب برای نقدینگی آماده", "تصمیم‌گیری سریع‌تر", "مناسب برخی واحدهای آماده", "نیازمند بررسی ارزش خرید"];
  const inst = ["ورود مرحله‌ای به بازار", "مدیریت بهتر جریان نقدی", "تفاوت در مبلغ اولیه، مدت و زمان تحویل", "نیازمند بررسی توان پرداخت"];
  return (
    <section className="mt-24 md:mt-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="انتخاب روش پرداخت"
          title={<>خرید نقدی یا اقساطی؟ <span className="text-primary">پاسخ به شرایط شما بستگی دارد</span></>}
          subtitle="روش پرداخت باید با بودجه، هدف خرید و برنامه مالی شما هماهنگ باشد."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {[
            { title: "خرید نقدی", icon: Wallet, items: cash, tone: "bg-primary text-primary-foreground" },
            { title: "خرید اقساطی", icon: CreditCard, items: inst, tone: "bg-surface text-foreground border border-border" },
          ].map((col) => (
            <div key={col.title} className={`rounded-2xl p-6 md:p-8 ${col.tone}`}>
              <div className="flex items-center gap-3">
                <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-white/15">
                  <col.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold">{col.title}</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {col.items.map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 opacity-80" />
                    <span className="text-sm md:text-base leading-7">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center">
          <p className="text-sm font-semibold text-muted-foreground">هیچ روش پرداختی برای همه مناسب نیست.</p>
        </div>
        <div className="mt-6 text-center">
          <a href="#qualify" className="btn-primary">
            روش پرداخت مناسب من را بررسی کنید
            <ChevronLeft className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 11. QUALIFIED CTA ---------------- */
function QualifiedCTASection() {
  return (
    <section id="qualify" className="mt-24 md:mt-32 scroll-mt-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="شروع بررسی شرایط شما"
          title={<>برای دریافت پیشنهاد اولیه، <span className="text-primary">فقط سه موضوع را مشخص کنید</span></>}
          subtitle="هدف خرید، حدود بودجه و روش پرداخت شما کمک می‌کند گزینه‌های مرتبط‌تری بررسی شوند."
        />
        <div className="mt-10">
          <QualifyForm />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL BANNER ---------------- */
function FinalBanner() {
  return (
    <section className="mt-20">
      <div className="container-page">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={dubaiSkyline}
            alt="افق دبی"
            loading="lazy"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/70 to-primary/95" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
            <div className="text-right">
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                آماده‌اید مسیر خرید را با اطمینان شروع کنید؟
              </h3>
              <p className="mt-2 text-white/85 text-sm md:text-base">
                یک پیام کوتاه در واتساپ کافی است تا گزینه‌های مناسب بررسی شوند.
              </p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp shrink-0">
              <MessageCircle className="w-5 h-5" />
              شروع مشاوره در واتساپ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
