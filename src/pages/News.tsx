import { Calendar, MapPin, Users, ArrowRight, Microscope, Wrench, HeartHandshake } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import g2 from "@/assets/g2.jpg";
import g5 from "@/assets/g5.jpg";
import g7 from "@/assets/g7.jpg";
import g6 from "@/assets/g6.jpg";

const sections = [
  {
    id: "adapt-a-thon",
    eyebrow: "Foundational programming",
    icon: HeartHandshake,
    title: "Adapt-a-Thon",
    image: g2,
    imageAlt: "Volunteers packaging adapted toys at an Adapt-a-Thon event.",
    intro:
      "Community-powered events where we adapt commercial toys so children with disabilities can play independently. From sourcing requests to delivery, every phase is designed alongside the families we serve.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Each Adapt-a-Thon brings together medical students, engineers, designers, and community volunteers for a full day of learning and impact.",
      "Sed do eiusmod tempor incididunt ut labore — phases include preparation and outreach, resource gathering, the event itself, and distribution to community partners.",
    ],
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
    image: g5,
    imageAlt: "Students prototyping accessibility devices at the Mini Make-a-Thon.",
    intro:
      "A novel, full-day experiential learning event teaching accessibility-centered innovation and empathetic design. MMT connects engineering, medical, and design students with local families of children who have complex medical needs.",
    body: [
      "Only 2.8 to 17.6 hours across four years of medical school nationally are devoted to disability-centered education. The Mini Make-a-Thon helps fill that gap with hands-on, partnered learning.",
      "Lorem ipsum dolor sit amet — outcomes include sustained interest in assistive-technology projects, new community collaborations, and a growing pipeline of physician-innovators.",
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

const News = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="News & events"
        title="Programming that meets real community needs."
        description="Three pillars of work — Adapt-a-Thon, Mini Make-a-Thon, and our yearly research project — drive everything from a Saturday workshop to a year-long study."
      />

      {/* Quick nav */}
      <nav aria-label="Section" className="border-b border-border bg-background/80 sticky top-16 z-30 backdrop-blur lg:top-20">
        <div className="container-wide flex gap-1 overflow-x-auto py-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-muted hover:text-foreground"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-wide space-y-24 py-20 lg:space-y-32">
        {sections.map((section, idx) => (
          <article
            key={section.id}
            id={section.id}
            className="scroll-mt-32 grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative">
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
            </div>

            <div>
              <p className="eyebrow">
                <section.icon className="h-3.5 w-3.5" aria-hidden /> {section.eyebrow}
              </p>
              <h2 className="display mt-4 text-balance">{section.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/85">{section.intro}</p>
              {section.body.map((p, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {section.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card p-4 shadow-card">
                    <p className="font-serif text-2xl font-semibold text-foreground">{s.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  </div>
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
            </div>
          </article>
        ))}

        {/* Recent news */}
        <section className="rounded-3xl border border-border bg-gradient-soft p-10 lg:p-14">
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
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-card p-6 shadow-card">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                  <c.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
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
        </section>
      </div>
    </SiteLayout>
  );
};

export default News;
