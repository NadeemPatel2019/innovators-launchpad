import { FadeInOnLoad } from "@/components/Reveal";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const PageHeader = ({ eyebrow, title, description, imageSrc, imageAlt }: Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, hsl(var(--brand-orange)) 0, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--brand-sky)) 0, transparent 45%)",
        }}
      />
      <div className="container-wide relative py-20 lg:py-28">
        <div className={imageSrc ? "grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]" : ""}>
          <div>
            <FadeInOnLoad>
              <p className="eyebrow text-accent">{eyebrow}</p>
            </FadeInOnLoad>
            <FadeInOnLoad delay={0.1}>
              <h1 className="display mt-4 max-w-3xl text-primary-foreground">{title}</h1>
            </FadeInOnLoad>
            {description && (
              <FadeInOnLoad delay={0.2}>
                <p className="mt-5 max-w-2xl text-base text-primary-foreground/75 lg:text-lg">
                  {description}
                </p>
              </FadeInOnLoad>
            )}
          </div>

          {imageSrc && (
            <FadeInOnLoad delay={0.14} className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-accent opacity-20 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-primary-foreground/10 shadow-elevated">
                <img
                  src={imageSrc}
                  alt={imageAlt ?? "Page header image"}
                  width={1920}
                  height={1080}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </FadeInOnLoad>
          )}
        </div>
      </div>
    </section>
  );
};
