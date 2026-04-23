import { Lightbulb, FileText, Boxes, Users } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { FadeInInView } from "@/components/Reveal";

const Projects = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Projects"
        title="Community-centered research and innovation projects."
        description="Our projects focus on practical solutions that improve accessibility, strengthen clinical care, and expand disability-centered design."
      />

      <div className="container-wide space-y-24 py-20 lg:space-y-32">
        <FadeInInView>
          <article id="pace-project" className="scroll-mt-40 space-y-8 lg:scroll-mt-44">
            <div className="max-w-3xl">
              <p className="eyebrow">
                <Lightbulb className="h-3.5 w-3.5" aria-hidden /> Assistive Navigation Design
              </p>
              <h2 className="display mt-4 text-balance">PACE Project: 3D-Printed Tactile Map</h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/85">
                Led by Jake Nazarian, the PACE Project supports adults over 65 who need home and community
                accommodations. This initiative develops a low-cost, 3D-printed tactile map of Lincoln
                Square Mall for people with low vision.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The map includes multiple levels of Braille (Grades 1, 2, and 3) so users can navigate
                spaces more independently and with greater confidence.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <p className="eyebrow">
                  <Boxes className="h-3.5 w-3.5" aria-hidden /> Resources Required
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>CAD software (free options available)</li>
                  <li>TouchSee platform (free)</li>
                  <li>3D printer</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:col-span-2 lg:col-span-2">
                <p className="eyebrow">
                  <FileText className="h-3.5 w-3.5" aria-hidden /> Result
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">
                  A low-cost tactile 3D map with Braille that helps visually impaired individuals navigate
                  important community spaces.
                </p>
              </div>
            </div>
          </article>
        </FadeInInView>

        <div className="border-t border-border" />

        <FadeInInView delay={0.08}>
          <article id="autism-project" className="scroll-mt-40 space-y-8 lg:scroll-mt-44">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div className="max-w-3xl">
                <p className="eyebrow">
                  <Users className="h-3.5 w-3.5" aria-hidden /> Clinical Accessibility Research
                </p>
                <h2 className="display mt-4 text-balance">Autism Project</h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/85">
                  Led by Victoria Rivera, this project supports the minimally verbal autistic population by
                  identifying communication barriers between patients and healthcare providers and exploring
                  innovations that improve care in clinical settings.
                </p>
              </div>

              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[1.75rem] bg-gradient-accent opacity-15 blur-2xl"
                />
                <img
                  src={`${import.meta.env.BASE_URL}autism-project-1.jpeg`}
                  alt="Community members and students collaborating during an autism-focused project session."
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="relative aspect-[16/9] w-full rounded-2xl object-cover shadow-elevated"
                />
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-serif text-xl font-semibold text-foreground">Project Initiatives</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>Explore communication barriers between minimally verbal autistic patients and providers.</li>
                  <li>Identify opportunities for innovation to improve clinical care experiences and outcomes.</li>
                  <li>Expand patient-centered approaches for assessments and care delivery.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-serif text-xl font-semibold text-foreground">Increasing Outreach</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>Partner with autistic individuals and families across Urbana-Champaign.</li>
                  <li>Learn the diverse needs within the autistic community through direct engagement.</li>
                  <li>Develop guidance that helps physicians provide more respectful, patient-centered care.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <h3 className="font-serif text-xl font-semibold text-foreground">Key Questions Driving the Work</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
                <li>What unmet needs should be prioritized for minimally verbal autistic patients?</li>
                <li>How can current clinical assessments be improved for this population?</li>
                <li>How can physician training better support effective, patient-centered communication?</li>
              </ul>
            </div>
          </article>
        </FadeInInView>
      </div>
    </SiteLayout>
  );
};

export default Projects;
