import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { FadeInInView } from "@/components/Reveal";
import { SectionTabs } from "@/components/SectionTabs";

const photoExtensions = ["jpeg", "jpg", "png", "webp"] as const;

interface Member {
  name: string;
  /** Appended to `name` in the heading (e.g. ", M.A., PSM") without affecting photo slug. */
  nameSuffix?: string;
  role: string;
  major: string;
}

const executive: Member[] = [
  { name: "Oluwabusayo Oni", role: "President", major: "Carle Illinois College of Medicine" },
  { name: "Gregory Ridgel", role: "Executive Team", major: "Carle Illinois College of Medicine" },
  { name: "Jona Kerluku", role: "Executive Team", major: "Carle Illinois College of Medicine" },
  { name: "Debora Nya", role: "Executive Team", major: "Carle Illinois College of Medicine" },
  { name: "Brian Wadugu", role: "Executive Team", major: "Carle Illinois College of Medicine" },
  { name: "Shelby Oke", role: "Executive Team", major: "Carle Illinois College of Medicine" },
  { name: "Diamond Coleman", role: "Executive Team", major: "Carle Illinois College of Medicine" },
];

const executiveBoard: Member[] = [
  {
    name: "Florence Adibu",
    nameSuffix: ", M.A., PSM",
    role: "Executive Board",
    major: "Carle Illinois College of Medicine",
  },
  { name: "Dr. Nicole del Castillo", role: "Executive Board", major: "Carle Illinois College of Medicine" },
  { name: "Dr. Julie Cutright", role: "Executive Board", major: "Carle Illinois College of Medicine" },
  { name: "Dr. Allison Jones", role: "Executive Board", major: "Carle Illinois College of Medicine" },
  { name: "Dr. Ruby Mendenhall", role: "Executive Board", major: "Carle Illinois College of Medicine" },
  { name: "Dr. Deana McDonagh", role: "Executive Board", major: "Carle Illinois College of Medicine" },
  { name: "Dr. Imanni Sheppard", role: "Executive Board", major: "Carle Illinois College of Medicine" },
  { name: "Dr. Victor Stams", role: "Executive Board", major: "Carle Illinois College of Medicine" },
];

const board: Member[] = [
  { name: "Kaitlin Manning", role: "President-Elect", major: "Carle Illinois College of Medicine" },
  { name: "David Pak", role: "Vice President", major: "Carle Illinois College of Medicine" },
  { name: "Conway Hsieh", role: "Treasurer", major: "Carle Illinois College of Medicine" },
  { name: "Ayse Ozkan", role: "Secretary", major: "Carle Illinois College of Medicine" },
  { name: "Brian Ellis", role: "Lead Engineer", major: "Carle Illinois College of Medicine" },
  { name: "Jonah Dewing", role: "Lead Engineer", major: "Carle Illinois College of Medicine" },
  { name: "Sathveka Sembian", role: "Lead Engineer", major: "Carle Illinois College of Medicine" },
  { name: "Amogh Angadi", role: "Lead Engineer", major: "Carle Illinois College of Medicine" },
  { name: "Meenakshi Singhal", role: "Community Outreach", major: "Carle Illinois College of Medicine" },
  { name: "Cindy Mei", role: "Community Outreach", major: "Carle Illinois College of Medicine" },
  { name: "Mehreen Ali", role: "Community Outreach & Research", major: "Carle Illinois College of Medicine" },
  { name: "Victoria Rivera", role: "MedLaunch Liaison", major: "Carle Illinois College of Medicine" },
];

const partners: Member[] = [
  { name: "Dr. Joe Bradley", role: "Faculty Advisor", major: "Carle Illinois College of Medicine" },
  { name: "Stephen Thomas", role: "MedLaunch President", major: "Bioengineering — 3rd year" },
  { name: "Sofia Ranallo", role: "Research Partner", major: "Bioengineering — 2nd year" },
];

const teamSections = [
  { id: "leadership", label: "Leadership" },
  { id: "executive-board", label: "Executive Board" },
  { id: "chapter-board", label: "Chapter Board" },
  { id: "faculty-partners", label: "Faculty Advisor & Undergraduate Partners" },
];

const initials = (n: string) =>
  n.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase();

const memberSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/\bdr\.?\s+/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const palette = [
  "from-brand-navy to-brand-industrial",
  "from-brand-orange to-brand-orange-deep",
  "from-brand-industrial to-brand-sky",
  "from-brand-orange-deep to-brand-orange",
  "from-brand-navy-deep to-brand-navy",
  "from-brand-sky to-brand-industrial",
];

const Card = ({ m, i }: { m: Member; i: number }) => {
  const [extIndex, setExtIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const slug = memberSlug(m.name);
  const photoSrc = `${import.meta.env.BASE_URL}team/${slug}.${photoExtensions[extIndex]}`;

  useEffect(() => {
    setExtIndex(0);
    setImageFailed(false);
  }, [slug]);

  const content = (
    <article className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
      {!imageFailed ? (
        <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-xl shadow-card">
          <img
            src={photoSrc}
            alt={`${m.name}${m.nameSuffix ?? ""} headshot`}
            loading="lazy"
            decoding="async"
            width={240}
            height={300}
            className="aspect-[4/5] w-full object-cover object-top"
            onError={() => {
              if (extIndex < photoExtensions.length - 1) {
                setExtIndex((prev) => prev + 1);
              } else {
                setImageFailed(true);
              }
            }}
          />
        </div>
      ) : (
        <div
          className={`mx-auto grid aspect-[4/5] w-full max-w-[240px] place-items-center rounded-xl bg-gradient-to-br ${palette[i % palette.length]} font-serif text-xl font-semibold text-primary-foreground shadow-card`}
          aria-hidden
        >
          {initials(m.name)}
        </div>
      )}
      <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
        {m.name}
        {m.nameSuffix ?? ""}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent">{m.role}</p>
      <p className="mt-1 text-sm text-muted-foreground">{m.major}</p>
    </article>
  );

  return (
    <FadeInInView delay={Math.min(i * 0.06, 0.24)}>
      {content}
    </FadeInInView>
  );
};

const Section = ({
  id,
  title,
  eyebrow,
  members,
}: {
  id: string;
  title: string;
  eyebrow: string;
  members: Member[];
}) => (
  <section id={id} className="scroll-mt-40 lg:scroll-mt-44">
    <div className="container-wide py-16 lg:py-20">
      <FadeInInView className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display mt-3">{title}</h2>
      </FadeInInView>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((m, i) => <Card key={m.name} m={m} i={i} />)}
      </div>
    </div>
  </section>
);

const Team = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our team"
        title="The students, advisors, and partners building Innovators in Action."
        description="A coalition of medical, engineering, and design students working alongside faculty mentors and community collaborators."
      />
      <SectionTabs ariaLabel="Team sections" items={teamSections} />

      <Section id="leadership" eyebrow="IIA Executive Team" title="Leadership" members={executive} />
      <div className="border-t border-border" />
      <Section
        id="executive-board"
        eyebrow="IIA Executive Board"
        title="Executive Board"
        members={executiveBoard}
      />
      <div className="border-t border-border" />
      <Section id="chapter-board" eyebrow="IIA CIMED Board" title="Chapter Board" members={board} />
      <div className="border-t border-border" />
      <Section
        id="faculty-partners"
        eyebrow="Faculty & partners"
        title="Faculty Advisor & Undergraduate Partners"
        members={partners}
      />
    </SiteLayout>
  );
};

export default Team;
