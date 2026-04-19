import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";

interface Member {
  name: string;
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

const board: Member[] = [
  { name: "Kaitlin Manning", role: "President-Elect", major: "Carle Illinois College of Medicine" },
  { name: "David Pak", role: "Vice President", major: "Carle Illinois College of Medicine" },
  { name: "Conway Hsieh", role: "Treasurer", major: "Carle Illinois College of Medicine" },
  { name: "Ayse Ozkan", role: "Secretary", major: "Carle Illinois College of Medicine" },
  { name: "Brian Ellis", role: "Lead Engineer", major: "Bioengineering" },
  { name: "Jonah Dewing", role: "Lead Engineer", major: "Bioengineering" },
  { name: "Sathveka Sembian", role: "Lead Engineer", major: "Bioengineering" },
  { name: "Amogh Angadi", role: "Lead Engineer", major: "Bioengineering" },
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

const initials = (n: string) =>
  n.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase();

const palette = [
  "from-brand-navy to-brand-industrial",
  "from-brand-orange to-brand-orange-deep",
  "from-brand-industrial to-brand-sky",
  "from-brand-orange-deep to-brand-orange",
  "from-brand-navy-deep to-brand-navy",
  "from-brand-sky to-brand-industrial",
];

const Card = ({ m, i }: { m: Member; i: number }) => (
  <article className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
    <div
      className={`grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br ${palette[i % palette.length]} font-serif text-xl font-semibold text-primary-foreground shadow-card`}
      aria-hidden
    >
      {initials(m.name)}
    </div>
    <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">{m.name}</h3>
    <p className="mt-1 text-sm font-medium text-accent">{m.role}</p>
    <p className="mt-1 text-sm text-muted-foreground">{m.major}</p>
  </article>
);

const Section = ({ title, eyebrow, members }: { title: string; eyebrow: string; members: Member[] }) => (
  <section className="container-wide py-16 lg:py-20">
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-3">{title}</h2>
    </div>
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {members.map((m, i) => <Card key={m.name} m={m} i={i} />)}
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
      <Section eyebrow="IIA Executive Team" title="Leadership" members={executive} />
      <div className="border-t border-border" />
      <Section eyebrow="IIA CIMED Board" title="Chapter board" members={board} />
      <div className="border-t border-border" />
      <Section eyebrow="Faculty & partners" title="Faculty advisor & undergraduate partners" members={partners} />
    </SiteLayout>
  );
};

export default Team;
