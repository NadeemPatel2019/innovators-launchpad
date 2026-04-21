import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, HeartHandshake, GraduationCap, Wrench } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { MasonryGallery, type GalleryPhoto } from "@/components/MasonryGallery";
import { FadeInInView, FadeInOnLoad } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";

const photos: GalleryPhoto[] = [
  { src: g2, width: 1280, height: 896, alt: "Medical students with adapted toys at a community event.", caption: "Adapt-a-Thon community day" },
  { src: g1, width: 1024, height: 1280, alt: "Hands soldering wires onto an adapted children's toy.", caption: "Soldering button switches" },
  { src: g4, width: 1280, height: 896, alt: "Child playing with an adapted toy featuring a large button switch.", caption: "Play, made accessible" },
  { src: g5, width: 1280, height: 960, alt: "Make-a-thon workshop with students prototyping at long tables.", caption: "Mini Make-a-Thon" },
  { src: g3, width: 1024, height: 1024, alt: "Hands inspecting a 3D printed tactile braille map.", caption: "Tactile map prototype" },
  { src: g6, width: 1024, height: 1280, alt: "Volunteers packaging adapted toys in labeled distribution boxes.", caption: "Ready for delivery" },
  { src: g8, width: 1280, height: 896, alt: "Innovators in Action executive team portrait.", caption: "Our executive team" },
  { src: g7, width: 1024, height: 1024, alt: "Researcher reviewing notes at a desk for the autism communication project.", caption: "Research in progress" },
];

const stats = [
  { value: "10", label: "Adapt-a-Thons (including minis!)" },
  { value: "100+", label: "Community volunteers" },
  { value: "60+", label: "Toys adapted in our last event" },
  { value: "150+", label: "Toys adapted since founding" },
  { value: "7", label: "Schools served" },
];

const pillars = [
  {
    icon: HeartHandshake,
    title: "Disability-centered education",
    body: "Closing long-standing gaps in medical training with hands-on, lived-experience learning.",
  },
  {
    icon: Wrench,
    title: "Affordable assistive tech",
    body: "Adapting commercial toys and prototyping low-cost devices that meet real community needs.",
  },
  {
    icon: GraduationCap,
    title: "Interdisciplinary collaboration",
    body: "Medical, engineering, and design students working alongside families and clinicians.",
  },
];

const Index = () => {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, hsl(var(--brand-orange)) 0, transparent 40%), radial-gradient(circle at 85% 80%, hsl(var(--brand-sky)) 0, transparent 50%)",
          }}
        />
        <div className="container-wide relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <FadeInOnLoad duration={0.8}>
              <p className="eyebrow text-accent">
                <Sparkles className="h-3.5 w-3.5" aria-hidden /> A registered non-profit
              </p>
            </FadeInOnLoad>
            <FadeInOnLoad delay={0.06} duration={0.8}>
              <h1 className="display mt-5 text-balance text-primary-foreground">
                Building <span className="italic text-accent">community</span> through the lens of a medical student.
              </h1>
            </FadeInOnLoad>
            <FadeInOnLoad delay={0.12} duration={0.8}>
              <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
                Innovators in Action is a medical-student-led organization improving disability-centered
                education, expanding access to affordable assistive technology, and strengthening the
                partnerships that support people with disabilities.
              </p>
            </FadeInOnLoad>
            <FadeInOnLoad delay={0.18} duration={0.8}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-cta transition-transform hover:-translate-y-0.5"
                >
                  Support our mission <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/10"
                >
                  Explore our work
                </Link>
              </div>
            </FadeInOnLoad>
          </div>

          <FadeInOnLoad className="relative" delay={0.08} duration={0.8}>
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-accent opacity-20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-primary-foreground/10 shadow-elevated">
              <img
                src={hero}
                alt="Medical and engineering students collaborating to adapt accessible toys at a community workshop."
                width={1920}
                height={1080}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-elevated sm:block">
              <p className="font-serif text-2xl font-semibold text-foreground">100+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Toys adapted to date</p>
            </div>
          </FadeInOnLoad>
        </div>
      </section>

      {/* MISSION PILLARS */}
      <section className="container-wide py-20 lg:py-28">
        <FadeInInView className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2 className="display mt-4 text-balance">
              Engineering principles meet <span className="italic text-accent">health equity</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Our mission is to address gaps in medical training and bring assistive technology directly to
              the families who need it. We do this by integrating engineering principles, health equity, and
              user-centered design into hands-on programming.
            </p>
          </div>
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <FadeInInView key={p.title} delay={Math.min(i * 0.08, 0.2)} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                    <p.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </FadeInInView>
            ))}
          </div>
        </FadeInInView>
      </section>

      {/* IMPACT */}
      <section className="bg-brand-navy text-primary-foreground">
        <FadeInInView className="container-wide py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-accent">Impact at a glance</p>
              <h2 className="display mt-3 text-primary-foreground">By the numbers.</h2>
            </div>
            <p className="max-w-md text-primary-foreground/70">
              Cumulative reach across our Adapt-a-Thons, Mini Make-a-Thons, and yearly research initiatives.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s, i) => (
              <FadeInInView
                key={s.label}
                delay={Math.min(i * 0.06, 0.2)}
                translateY={false}
                className={[
                  "bg-brand-navy",
                  i === stats.length - 1 ? "sm:col-span-2 lg:col-span-1" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="p-8">
                  <p className="font-serif text-5xl font-semibold text-accent lg:text-6xl">{s.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/70">
                    {s.label}
                  </p>
                </div>
              </FadeInInView>
            ))}
          </div>
        </FadeInInView>
      </section>

      {/* GALLERY */}
      <section className="container-wide py-20 lg:py-28">
        <FadeInInView className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Project gallery</p>
            <h2 className="display mt-3 text-balance">Stories from the workshop.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Click any image to expand. Every photo is captioned and tagged with descriptive
              alt-text — accessibility is part of the design, not an afterthought.
            </p>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            See full event recaps <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </FadeInInView>
        <FadeInInView className="mt-10" delay={0.06}>
          <MasonryGallery photos={photos} />
        </FadeInInView>
      </section>

      {/* CTA */}
      <section className="container-wide pb-20">
        <FadeInInView className="relative overflow-hidden rounded-3xl bg-gradient-accent p-10 text-accent-foreground shadow-elevated lg:p-14">
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, white 0, transparent 30%), radial-gradient(circle at 20% 80%, white 0, transparent 25%)",
            }}
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">Get involved</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-balance lg:text-4xl">
                One adapted toy can change a child's day. Help us deliver hundreds.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy-deep px-6 py-3 text-sm font-semibold text-primary-foreground shadow-cta transition hover:-translate-y-0.5"
              >
                Donate now <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 rounded-full border border-accent-foreground/30 px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-foreground/10"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </FadeInInView>
      </section>
    </SiteLayout>
  );
};

export default Index;
