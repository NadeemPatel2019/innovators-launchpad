interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export const PageHeader = ({ eyebrow, title, description }: Props) => {
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
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="display mt-4 max-w-3xl text-primary-foreground">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/75 lg:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};
