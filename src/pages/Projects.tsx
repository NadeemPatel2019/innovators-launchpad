import { Lightbulb, FileText, Boxes, Users, ToyBrick } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { FadeInInView } from "@/components/Reveal";
import { SectionTabs } from "@/components/SectionTabs";

const Projects = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Projects"
        title="Community-centered research and innovation projects."
        description="Our projects focus on practical solutions that improve accessibility, strengthen clinical care, and expand disability-centered design."
        imageSrc={`${import.meta.env.BASE_URL}events-1.jpeg`}
        imageAlt="Students and community members collaborating during an Innovators in Action event."
      />

      <SectionTabs
        ariaLabel="Project sections"
        items={[
          { id: "pace-project", label: "PACE Project" },
          { id: "autism-project", label: "Autism Project" },
          { id: "adapt-toy", label: "Adapt Toy" },
        ]}
      />

      <div>
        <section id="pace-project" className="scroll-mt-40 lg:scroll-mt-44">
          <div className="container-wide py-16 lg:py-20">
            <article className="space-y-8">
              <FadeInInView amount={0.08} className="max-w-3xl">
                <div>
                  <p className="eyebrow">
                    <Lightbulb className="h-3.5 w-3.5" aria-hidden /> Assistive Navigation Design
                  </p>
                  <h2 className="display mt-3 text-balance">PACE Project: 3D-Printed Tactile Map</h2>
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
              </FadeInInView>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <FadeInInView amount={0.08} delay={0.08}>
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
                </FadeInInView>

                <FadeInInView amount={0.08} delay={0.14}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:col-span-2 lg:col-span-2">
                    <p className="eyebrow">
                      <FileText className="h-3.5 w-3.5" aria-hidden /> Result
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-foreground/85">
                      A low-cost tactile 3D map with Braille that helps visually impaired individuals navigate
                      important community spaces.
                    </p>
                  </div>
                </FadeInInView>
              </div>
            </article>
          </div>
        </section>

        <div className="border-t border-border" />

        <section id="autism-project" className="scroll-mt-40 lg:scroll-mt-44">
          <div className="container-wide py-16 lg:py-20">
            <article className="space-y-8">
              <FadeInInView amount={0.08}>
                <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
                  <div className="max-w-3xl">
                    <p className="eyebrow">
                      <Users className="h-3.5 w-3.5" aria-hidden /> Clinical Accessibility Research
                    </p>
                    <h2 className="display mt-3 text-balance">Autism Project</h2>
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
              </FadeInInView>

              <div className="grid gap-5 lg:grid-cols-2">
                <FadeInInView amount={0.08} delay={0.08}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                    <h3 className="font-serif text-xl font-semibold text-foreground">Project Initiatives</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <li>Explore communication barriers between minimally verbal autistic patients and providers.</li>
                      <li>Identify opportunities for innovation to improve clinical care experiences and outcomes.</li>
                      <li>Expand patient-centered approaches for assessments and care delivery.</li>
                    </ul>
                  </div>
                </FadeInInView>

                <FadeInInView amount={0.08} delay={0.14}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                    <h3 className="font-serif text-xl font-semibold text-foreground">Increasing Outreach</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <li>Partner with autistic individuals and families across Urbana-Champaign.</li>
                      <li>Learn the diverse needs within the autistic community through direct engagement.</li>
                      <li>Develop guidance that helps physicians provide more respectful, patient-centered care.</li>
                    </ul>
                  </div>
                </FadeInInView>
              </div>

              <FadeInInView amount={0.08} delay={0.12}>
                <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">Key Questions Driving the Work</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
                    <li>What unmet needs should be prioritized for minimally verbal autistic patients?</li>
                    <li>How can current clinical assessments be improved for this population?</li>
                    <li>How can physician training better support effective, patient-centered communication?</li>
                  </ul>
                </div>
              </FadeInInView>
            </article>
          </div>
        </section>

        <div className="border-t border-border" />

        <section id="adapt-toy" className="scroll-mt-40 lg:scroll-mt-44">
          <div className="container-wide py-16 lg:py-20">
            <article className="space-y-8">
              <FadeInInView amount={0.08}>
                <div>
                  <p className="eyebrow">
                    <ToyBrick className="h-3.5 w-3.5" aria-hidden /> Adaptive Play Research
                  </p>
                  <h2 className="display mt-3 text-balance">Adapt Toy</h2>
                  <h3 className="mt-6 font-serif text-3xl font-semibold text-brand-navy">
                    Toys Impact Child Development
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-foreground/85">
                    Research studies show that toy play is an influential way of{" "}
                    <strong>&ldquo;exploring the environment&rdquo;</strong> and{" "}
                    <strong>&ldquo;learning what actions produce with outcomes&rdquo;</strong> through
                    cause-and-effect.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-foreground/85">
                    However, research on adaptive toys is limited, highlighting the need for{" "}
                    <strong>improved accessibility</strong> so children with disabilities can achieve
                    the same developmental milestones.
                  </p>
                </div>
              </FadeInInView>

              <FadeInInView amount={0.08} delay={0.08}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="mx-auto max-w-4xl">
                    <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
                      <div className="relative mx-auto w-full max-w-[220px]">
                        <img
                          src={`${import.meta.env.BASE_URL}projects/adapt-toy-1.png`}
                          alt="Hand pressing switch input."
                          loading="lazy"
                          width={360}
                          height={360}
                          className="w-full object-contain"
                        />
                        <span
                          aria-hidden
                          className="absolute h-5 w-5 rounded-full bg-green-400 shadow-sm shadow-green-500/40"
                          style={{ left: "198px", top: "7px" }}
                        />
                      </div>

                      <div className="mx-auto flex min-w-[160px] flex-col items-center gap-2 sm:min-w-[220px]">
                        <div className="flex items-center">
                          <span className="block h-3 w-24 bg-brand-orange sm:w-32" />
                          <span className="h-0 w-0 border-y-[14px] border-l-[24px] border-y-transparent border-l-brand-orange" />
                        </div>
                        <p className="font-serif text-2xl font-semibold text-brand-navy">Action → Result</p>
                      </div>

                      <div className="mx-auto w-full max-w-[150px]">
                        <img
                          src={`${import.meta.env.BASE_URL}projects/adapt-toy-2.png`}
                          alt="Adaptive toy output result."
                          loading="lazy"
                          width={150}
                          height={150}
                          className="w-full object-contain"
                        />
                      </div>
                    </div>

                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Mbara, N. C., &amp; Ewunonu, N. N. (2024). Influence of toys and theatre in children&apos;s
                  learning and development: A study of Startright Childhood Learning and Development Centre,
                  Owerri. <em>Journal of Development Communication and Applied Theatre, 2</em>(2), 82.
                </p>
              </FadeInInView>

              <FadeInInView amount={0.08} delay={0.12}>
                <div className="border-t border-border pt-8">
                  <h3 className="font-serif text-3xl font-semibold text-brand-navy">
                    Addressing needs for adaptive toys
                  </h3>

                  <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card">
                    <div className="grid gap-8 lg:grid-cols-2">
                      <div className="space-y-8 lg:pr-6">
                        <FadeInInView amount={0.08} delay={0.08}>
                          <div className="mt-2 flex items-start gap-3">
                            <div className="min-w-0">
                              <div className="flex items-start gap-3">
                                <div className="grid h-9 w-9 flex-none shrink-0 place-items-center rounded-full border border-border bg-background text-xs font-semibold text-foreground shadow-sm">
                                  1
                                </div>
                                <p className="text-2xl font-medium leading-tight text-brand-navy">
                                  Off-the-shelf toys require:
                                </p>
                              </div>
                              <ul className="mt-3 ml-12 list-disc space-y-1 pl-5 text-2xl leading-tight text-brand-navy">
                                <li>Fine motor dexterity</li>
                                <li>Grip strength</li>
                              </ul>
                            </div>
                            <img
                              src={`${import.meta.env.BASE_URL}projects/adapt-toy-3.jpeg`}
                              alt="Hand dexterity icon."
                              loading="lazy"
                              width={170}
                              height={170}
                              className="h-24 w-24 flex-none object-contain"
                            />
                          </div>
                        </FadeInInView>

                        <FadeInInView amount={0.08} delay={0.12} className="lg:pl-24 lg:pt-2">
                          <div className="mt-2 flex items-start gap-3">
                            <div className="min-w-0">
                              <div className="flex items-start gap-3">
                                <div className="grid h-9 w-9 flex-none shrink-0 place-items-center rounded-full border border-border bg-background text-xs font-semibold text-foreground shadow-sm">
                                  2
                                </div>
                                <p className="text-2xl font-medium leading-tight text-brand-navy">
                                  Many kids experience:
                                </p>
                              </div>
                              <ul className="mt-3 ml-12 list-disc space-y-1 pl-5 text-2xl leading-tight text-brand-navy">
                                <li>Less strength</li>
                                <li>Limited motor control</li>
                              </ul>
                            </div>
                            <img
                              src={`${import.meta.env.BASE_URL}projects/adapt-toy-4.jpeg`}
                              alt="Motor control icon."
                              loading="lazy"
                              width={170}
                              height={170}
                              className="h-24 w-24 flex-none object-contain"
                            />
                          </div>
                        </FadeInInView>
                      </div>

                      <div className="space-y-8 lg:pt-10 lg:pl-2">
                        <FadeInInView amount={0.08} delay={0.16}>
                          <div className="mt-2 flex items-start gap-3">
                            <div className="min-w-0">
                              <div className="flex items-start gap-3">
                                <div className="grid h-9 w-9 flex-none shrink-0 place-items-center rounded-full border border-border bg-background text-xs font-semibold text-foreground shadow-sm">
                                  3
                                </div>
                                <p className="text-2xl font-medium leading-tight text-brand-navy">
                                  For many kids this can mean:
                                </p>
                              </div>
                              <ul className="mt-3 ml-12 list-disc space-y-1 pl-5 text-2xl leading-tight text-brand-navy">
                                <li>Fatigue</li>
                                <li>Frustration</li>
                              </ul>
                            </div>
                            <img
                              src={`${import.meta.env.BASE_URL}projects/adapt-toy-6.jpeg`}
                              alt="Group participation icon."
                              loading="lazy"
                              width={170}
                              height={170}
                              className="h-24 w-24 flex-none object-contain"
                            />
                          </div>
                        </FadeInInView>

                        <FadeInInView amount={0.08} delay={0.2} className="lg:pl-16 lg:pt-2">
                          <div className="mt-2 flex items-start gap-3">
                            <div className="min-w-0">
                              <div className="flex items-start gap-3">
                                <div className="grid h-9 w-9 flex-none shrink-0 place-items-center rounded-full border border-border bg-background text-xs font-semibold text-foreground shadow-sm">
                                  4
                                </div>
                                <p className="text-2xl font-medium leading-tight text-brand-navy">
                                  Button switches are often easier to use, and give more children the ability to
                                  play.
                                </p>
                              </div>
                            </div>
                            <img
                              src={`${import.meta.env.BASE_URL}projects/adapt-toy-5.jpeg`}
                              alt="Button switch icon."
                              loading="lazy"
                              width={170}
                              height={170}
                              className="h-24 w-24 flex-none object-contain"
                            />
                          </div>
                        </FadeInInView>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInInView>

              <FadeInInView amount={0.08} delay={0.16}>
                <div className="border-t border-border pt-8">
                  <h3 className="font-serif text-3xl font-semibold text-brand-navy">
                    Adaptive Toys Improve Engagement
                  </h3>

                  <div className="mt-6 grid items-start gap-5 lg:grid-cols-[minmax(0,592px)_minmax(0,592px)] lg:justify-between">
                    <FadeInInView amount={0.08} delay={0.08} className="space-y-4 lg:max-w-[592px]">
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Making adaptive toys can be simple: strategies include adding velcro, making knobs bigger, and
                        utilizing adapted switches. Adaptive toys are associated with more{" "}
                        <strong className="text-foreground">&ldquo;appropriate participation&rdquo;</strong>—including
                        handling a toy and activating it—so children can join in more fully.
                      </p>
                      <img
                        src={`${import.meta.env.BASE_URL}projects/adapt-toy-9.png`}
                        alt="Engagement with an adapted play activity."
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full rounded-2xl border border-border object-cover shadow-card"
                      />
                    </FadeInInView>
                    <FadeInInView amount={0.08} delay={0.14}>
                      <img
                        src={`${import.meta.env.BASE_URL}projects/adapt-toy-10.png`}
                        alt="A child using an adapted switch or control with a toy."
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full rounded-2xl border border-border object-cover shadow-card lg:max-w-[592px]"
                      />
                    </FadeInInView>
                  </div>

                  <div className="mt-6 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Hsieh, Hsieh-Chun. &ldquo;Effects of ordinary and adaptive toys on pre-school children
                      with developmental disabilities.&rdquo; <em>Research in Developmental Disabilities</em>{" "}
                      29.5 (2008): 459-466.
                    </p>
                    <p>
                      Klauber, J. &ldquo;Toy story: How to select and buy adaptive toys.&rdquo;{" "}
                      <em>School Library Journal</em> 42 (1996): 22-24.
                    </p>
                  </div>
                </div>
              </FadeInInView>
            </article>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
};

export default Projects;
