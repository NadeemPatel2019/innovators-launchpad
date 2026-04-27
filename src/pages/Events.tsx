import { Calendar, MapPin, Microscope, Wrench, HeartHandshake } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { FadeInInView } from "@/components/Reveal";
import { AdaptAThonPhases } from "@/components/AdaptAThonPhases";
import { SectionTabs } from "@/components/SectionTabs";
import { cn } from "@/lib/utils";
import g7 from "@/assets/g7.jpg";

const sections = [
  {
    id: "adapt-a-thon",
    eyebrow: "Foundational programming",
    icon: HeartHandshake,
    title: "Adapt-a-Thon",
    intro:
      "Community-powered events where we adapt commercial toys so children with disabilities can play independently. From sourcing requests to delivery, every phase is designed alongside the families we serve.",
    body: [],
    upcoming: {
      title: "IIA Adapt-a-Thon × CU Medical Moms",
      date: "Tentatively May 2026",
      location: "Champaign-Urbana, IL",
    },
    stats: [
      { value: "60+", label: "Toys adapted last event" },
      { value: "7", label: "Total events hosted" },
      { value: "150+", label: "Volunteers engaged" },
    ],
  },
  {
    id: "mini-make-a-thon",
    eyebrow: "Foundational programming",
    icon: Wrench,
    title: "Mini Make-a-Thon",
    image: `${import.meta.env.BASE_URL}make-a-thon-2025-2.jpeg`,
    imageAlt: "Students prototyping accessibility devices at the Mini Make-a-Thon.",
    intro:
      "A novel, full-day experiential learning event teaching accessibility-centered innovation and empathetic design. MMT connects engineering, medical, and design students with local families of children who have complex medical needs. Outcomes include sustained interest in assistive-technology projects, new community collaborations, and a growing pipeline of physician-innovators.",
    body: [
      "Only 2.8 to 17.6 hours across four years of medical school nationally are devoted to disability-centered education. The Mini Make-a-Thon helps fill that gap with hands-on, partnered learning.",
    ],
    upcoming: {
      title: "IIA Make-a-Thon × MedLaunch & Grainger Engineering",
      date: "March 28",
      location: "University of Illinois Urbana-Champaign",
    },
    stats: [
      { value: "74%", label: "First-time make-a-thon attendees" },
      { value: "97.5%", label: "Want to pursue accessibility projects" },
      { value: "80%", label: "Continue project after event" },
    ],
  },
  {
    id: "yearly-research-project",
    eyebrow: "Community projects",
    icon: Microscope,
    title: "Yearly Research Project",
    image: g7,
    imageAlt: "Researcher reviewing notes for the IIA yearly research initiative.",
    intro:
      "Each year, IIA leads a focused research initiative co-designed with community partners — translating clinical insight into open, replicable interventions.",
    body: [
      "Current focus: communication barriers between minimally verbal autistic patients and healthcare providers, exploring opportunities to improve patient-centered care in clinical settings.",
      "Past projects include the PACE 3D-printed tactile map of Lincoln Square Mall — a multi-grade Braille wayfinding tool for individuals with low vision. [Insert Research Project Name Here] for the most recent initiative.",
    ],
    upcoming: {
      title: "Autism Communication & Clinical Care Study",
      date: "2025–2026 academic year",
      location: "Carle Illinois College of Medicine",
    },
    stats: [
      { value: "2", label: "Active research tracks" },
      { value: "5", label: "Academic partners" },
      { value: "1", label: "Publication in progress" },
    ],
  },
];

const Events = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Events"
        title="Programming that meets real community needs."
        description="Three pillars of work — Adapt-a-Thon, Mini Make-a-Thon, and our yearly research project — drive everything from a Saturday workshop to a year-long study."
        aside={
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Upcoming</p>
            <div className="mt-4 space-y-5">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="border-t border-primary-foreground/15 pt-5 first:border-t-0 first:pt-0"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
                    {section.title}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-primary-foreground">
                    {section.upcoming.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 shrink-0 text-accent" aria-hidden /> {section.upcoming.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden /> {section.upcoming.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Quick nav */}
      <SectionTabs
        ariaLabel="Section"
        items={sections.map((s) => ({
          id: s.id,
          label: s.title,
        }))}
      />

      <div>
        {sections.map((section, idx) => (
          <div key={section.id}>
            <section id={section.id} className="scroll-mt-40 lg:scroll-mt-44">
              <div className="container-wide py-16 lg:py-20">
                <article
                  className={cn(
                    section.image
                      ? cn(
                          section.id === "mini-make-a-thon"
                            ? "grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-x-12 lg:gap-y-6"
                            : "grid gap-12 lg:grid-cols-2 lg:items-center",
                        )
                      : "grid gap-12",
                  )}
                >
                  {section.image && (
                    <FadeInInView
                      amount={0.08}
                      delay={0.08}
                      className={cn(
                        idx % 2 === 1 ? "order-2" : "",
                        section.id === "mini-make-a-thon" ? "lg:order-none lg:col-start-2 lg:row-start-1" : "",
                      )}
                    >
                      <div className={cn("relative", section.id === "mini-make-a-thon" ? "hidden lg:block" : "")}>
                        <div
                          aria-hidden
                          className="absolute -inset-3 rounded-[1.75rem] bg-gradient-accent opacity-15 blur-2xl"
                        />
                        <img
                          src={section.image}
                          alt={section.imageAlt}
                          loading="lazy"
                          width={1280}
                          height={896}
                          className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-elevated"
                        />
                      </div>
                    </FadeInInView>
                  )}

                  <div>
                    <FadeInInView amount={0.08} delay={Math.min(idx * 0.05, 0.2)} duration={0.6}>
                      <p className="eyebrow">
                        <section.icon className="h-3.5 w-3.5" aria-hidden /> {section.eyebrow}
                      </p>
                      <h2 className="display mt-3 text-balance">{section.title}</h2>
                      <p className="mt-5 text-lg leading-relaxed text-foreground/85">{section.intro}</p>
                      {section.id === "mini-make-a-thon" && section.image && (
                        <div className="relative mt-6 lg:hidden">
                          <div
                            aria-hidden
                            className="absolute -inset-3 rounded-[1.75rem] bg-gradient-accent opacity-15 blur-2xl"
                          />
                          <img
                            src={section.image}
                            alt={section.imageAlt}
                            loading="lazy"
                            width={1600}
                            height={1200}
                            className="relative aspect-[16/9] w-full rounded-2xl object-cover shadow-elevated"
                          />
                        </div>
                      )}
                      {section.id === "adapt-a-thon" ? (
                        <AdaptAThonPhases />
                      ) : (
                        section.body.map((p, i) => (
                          <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">
                            {p}
                          </p>
                        ))
                      )}
                    </FadeInInView>

                    {section.id !== "mini-make-a-thon" && (
                      <FadeInInView amount={0.08} delay={0.08}>
                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                          {section.stats.map((s, statIdx) => (
                            <FadeInInView amount={0.08} key={s.label} delay={Math.min(statIdx * 0.06, 0.18)}>
                              <div className="rounded-xl border border-border bg-card p-4 shadow-card">
                                <p className="font-serif text-2xl font-semibold text-foreground">{s.value}</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                              </div>
                            </FadeInInView>
                          ))}
                        </div>

                        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Upcoming</p>
                          <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">
                            {section.upcoming.title}
                          </h3>
                          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                            <span className="inline-flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-accent" aria-hidden /> {section.upcoming.date}
                            </span>
                            <span className="inline-flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-accent" aria-hidden /> {section.upcoming.location}
                            </span>
                          </div>
                        </div>
                      </FadeInInView>
                    )}
                  </div>

                  {section.id === "mini-make-a-thon" && (
                    <FadeInInView amount={0.08} delay={0.08} className="lg:col-span-2 lg:row-start-2">
                      <div className="grid gap-4 sm:grid-cols-3">
                        {section.stats.map((s, statIdx) => (
                          <FadeInInView amount={0.08} key={s.label} delay={Math.min(statIdx * 0.06, 0.18)}>
                            <div className="h-[102px] rounded-xl border border-border bg-card p-4 shadow-card">
                              <p className="font-serif text-2xl font-semibold text-foreground">{s.value}</p>
                              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                            </div>
                          </FadeInInView>
                        ))}
                      </div>
                      <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-elevated">
                        <img
                          src={`${import.meta.env.BASE_URL}make-a-thon-2025-1.jpeg`}
                          alt="Mini Make-a-Thon participants collaborating at a workshop table."
                          loading="lazy"
                          width={1920}
                          height={1080}
                          className="aspect-[16/9] w-full object-cover"
                        />
                      </div>

                      <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent">Upcoming</p>
                        <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">
                          {section.upcoming.title}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-accent" aria-hidden /> {section.upcoming.date}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent" aria-hidden /> {section.upcoming.location}
                          </span>
                        </div>
                      </div>
                    </FadeInInView>
                  )}
                </article>
              </div>
            </section>
            {idx < sections.length - 1 && <div className="border-t border-border" />}
          </div>
        ))}
      </div>
    </SiteLayout>
  );
};

export default Events;
