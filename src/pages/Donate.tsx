import { useState } from "react";
import { Heart, ArrowRight, Check, Sparkles, Users, Wrench, GraduationCap } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";

const tiers = [
  { amount: 25, label: "Adapts 1 toy", desc: "Materials and switch components for a single toy." },
  { amount: 75, label: "Sponsors a family", desc: "Funds a custom build for a child in our network." },
  { amount: 150, label: "Powers a workshop", desc: "Supplies an entire Adapt-a-Thon table for a day." },
  { amount: 500, label: "Underwrites research", desc: "Supports our yearly research project & publications." },
];

const impact = [
  { icon: Wrench, value: "$10", label: "= materials for one adapted switch" },
  { icon: Users, value: "$250", label: "= a Mini Make-a-Thon scholarship" },
  { icon: GraduationCap, value: "$1k", label: "= K–12 outreach build kit pilot" },
];

const Donate = () => {
  const [selected, setSelected] = useState<number>(75);
  const [custom, setCustom] = useState("");

  const value = custom ? Number(custom) || 0 : selected;

  return (
    <SiteLayout>
      {/* Hero impact section */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, hsl(var(--brand-orange)) 0, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--brand-sky)) 0, transparent 45%)",
          }}
        />
        <div className="container-wide relative grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
          <div>
            <p className="eyebrow text-accent">
              <Sparkles className="h-3.5 w-3.5" aria-hidden /> Your gift, doubled in impact
            </p>
            <h1 className="display mt-5 text-balance text-primary-foreground">
              Every dollar puts an <span className="italic text-accent">accessible toy</span> in the
              hands of a child who needs one.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Innovators in Action is a registered 501(c)(3). 100% of donations go directly to
              materials, programming, and the families we serve — no overhead, no salaries.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Tax-deductible — receipt sent automatically",
                "Funds materials, kits, and family programming",
                "Supports our yearly research initiatives",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-primary-foreground/85">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate card */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-accent opacity-25 blur-3xl" aria-hidden />
            <div className="relative rounded-3xl border border-primary-foreground/10 bg-card p-7 text-foreground shadow-elevated lg:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-accent text-accent-foreground">
                  <Heart className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold">Make a one-time gift</p>
                  <p className="text-xs text-muted-foreground">Choose an amount or enter your own</p>
                </div>
              </div>

              <fieldset className="mt-6">
                <legend className="sr-only">Donation amount</legend>
                <div className="grid grid-cols-2 gap-3">
                  {tiers.map((t) => {
                    const active = !custom && selected === t.amount;
                    return (
                      <button
                        key={t.amount}
                        type="button"
                        onClick={() => {
                          setSelected(t.amount);
                          setCustom("");
                        }}
                        aria-pressed={active}
                        className={cn(
                          "rounded-xl border p-4 text-left transition",
                          active
                            ? "border-accent bg-accent/5 shadow-cta"
                            : "border-border hover:border-accent/50 hover:bg-muted/40",
                        )}
                      >
                        <p className="font-serif text-2xl font-semibold text-foreground">
                          ${t.amount}
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                          {t.label}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                          {t.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <label className="mt-5 block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Or enter custom amount
                </span>
                <div className="relative mt-2">
                  <span className="pointer-events-none absolute inset-y-0 left-3 grid place-items-center text-muted-foreground">
                    $
                  </span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={1}
                    placeholder="100"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-8 py-3 text-base font-medium text-foreground outline-none ring-accent/30 transition focus:border-accent focus:ring-2"
                  />
                </div>
              </label>

              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-4 text-base font-semibold text-accent-foreground shadow-cta transition hover:-translate-y-0.5"
              >
                Donate ${value || 0} <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Secure checkout · Receipt emailed instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact statement */}
      <section className="container-wide py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow">Your impact</p>
            <h2 className="display mt-4 text-balance">
              Concrete, measurable, <span className="italic text-accent">human</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We publish detailed budgets and outcomes after every event. Here's a quick look at how
              your contribution translates into real-world programming.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {impact.map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <c.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-5 font-serif text-3xl font-semibold text-foreground">{c.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="container-wide pb-24">
        <div className="rounded-3xl border border-border bg-gradient-soft p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Beyond donating</p>
              <h2 className="display mt-3">More ways to support our mission.</h2>
              <p className="mt-4 text-muted-foreground">
                If a financial gift isn't right for you today, there are many other meaningful ways to
                contribute to disability-centered innovation.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                { t: "Volunteer at an event", d: "Join an Adapt-a-Thon — no engineering background required." },
                { t: "Share programming", d: "Amplify our work within your professional networks." },
                { t: "Become a research partner", d: "Collaborate on publications, grants, and IRB protocols." },
                { t: "Sponsor an Adapt-a-Thon", d: "Cover materials, food, and venue for an entire event day." },
              ].map((i) => (
                <li key={i.t} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <p className="font-serif text-base font-semibold text-foreground">{i.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{i.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Donate;
