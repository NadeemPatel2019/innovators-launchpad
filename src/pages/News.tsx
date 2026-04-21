import { Users, ArrowRight, Microscope, Wrench } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { FadeInInView } from "@/components/Reveal";
import g6 from "@/assets/g6.jpg";

const News = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="News"
        title="Updates from Innovators in Action."
        description="Announcements, milestones, and what’s next for our community programming."
      />
      <nav
        aria-label="News sections"
        className="sticky top-16 z-30 border-b border-border bg-background/80 backdrop-blur lg:top-20"
      >
        <div className="container-wide flex gap-1 overflow-x-auto py-3">
          <a
            href="#registered-non-profit"
            className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-muted hover:text-foreground"
          >
            Registered Non-profit
          </a>
          <a
            href="#wcia-news"
            className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-muted hover:text-foreground"
          >
            WCIA News
          </a>
        </div>
      </nav>

      <section className="container-wide py-20 lg:py-28">
        <FadeInInView
          id="registered-non-profit"
          className="scroll-mt-40 rounded-3xl border border-border bg-gradient-soft p-10 lg:scroll-mt-44 lg:p-14"
        >
          <p className="eyebrow">Recent news</p>
          <h2 className="display mt-3">Innovators in Action is now a registered non-profit.</h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We've officially incorporated as a non-profit organization — a milestone that lets us scale
            curricula, build kits, and the physician-innovator + engineering collaboration model to other
            medical schools across the country.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Users, title: "Community partners", body: "MedLaunch, CU Medical Moms, PACE, Jack & Jill, Disability Resource Expo." },
              { icon: Wrench, title: "Academic partners", body: "Siebel Center for Design, JUMP Sim, (dis)Ability Studio, Unit 4 Schools." },
              { icon: Microscope, title: "What's next", body: "Modular build kits, K–12 outreach, and a national student-led innovation network." },
            ].map((c, i) => (
              <FadeInInView key={c.title} delay={Math.min(i * 0.08, 0.2)}>
                <div className="rounded-2xl bg-card p-6 shadow-card">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                    <c.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </FadeInInView>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-cta hover:-translate-y-0.5"
            >
              Help us scale <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <img src={g6} alt="" className="sr-only" />
        </FadeInInView>

        <FadeInInView
          id="wcia-news"
          className="scroll-mt-40 mt-10 rounded-3xl border border-border bg-card p-8 shadow-card lg:scroll-mt-44 lg:p-10"
        >
          <p className="eyebrow">WCIA News</p>
          <h2 className="display mt-3">Inclusive holiday toy adaptation spotlight</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/kXKhuRIqRG0"
                title="WCIA coverage of Innovators in Action toy adaptation event"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            In December 2025, WCIA highlighted Innovators in Action's fifth community toy-adaptation event,
            where volunteers used a rotating assembly-line process to modify and wrap nearly 100 donated toys
            so children with disabilities could use them more independently. The segment also featured public
            participation, including students from Jack and Jill, and emphasized the nonprofit's mission to
            reduce the high financial and access barriers families face when purchasing accessible toys.
          </p>
          <a
            href="https://www.youtube.com/watch?v=kXKhuRIqRG0"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Watch on YouTube <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </FadeInInView>
      </section>
    </SiteLayout>
  );
};

export default News;
