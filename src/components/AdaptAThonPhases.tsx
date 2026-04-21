const phases = [
  {
    title: "Preparation and Outreach",
    body: "Connect with community partners and source requests for toys.",
  },
  {
    title: "Resource Gathering",
    body: "Gather materials, assign location, and recruit volunteers.",
  },
  {
    title: "Adapt-a-Thon Event",
    body: "Deconstruct, modify, reassemble, and repackage toys.",
  },
  {
    title: "Distribution to the Community",
    body: "Connect with community partners to distribute requested toys.",
  },
];

export const AdaptAThonPhases = () => {
  return (
    <div className="mt-6 rounded-2xl border border-border bg-card px-5 py-4 shadow-card sm:px-6 sm:py-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Adapt-a-Thon phases</p>

      <div className="mt-5 hidden md:grid md:auto-rows-fr md:grid-cols-4 md:gap-4 lg:gap-5">
        {phases.map((phase, i) => (
          <div key={phase.title} className="flex h-full flex-col items-center">
            <div className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-xs font-semibold text-foreground shadow-sm">
              {i + 1}
            </div>

            <div className="mt-3 flex w-full flex-1 flex-col items-center gap-3 text-center">
              <h3 className="text-sm font-semibold leading-snug text-foreground">{phase.title}</h3>
              <p className="text-balance text-sm leading-snug text-muted-foreground">{phase.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-5 md:hidden">
        {phases.map((phase, i) => (
          <div key={phase.title} className="flex items-start gap-3">
            <div className="grid h-9 w-9 flex-none place-items-center rounded-full border border-border bg-background text-xs font-semibold text-foreground shadow-sm">
              {i + 1}
            </div>
            <div className="min-w-0 space-y-3">
              <h3 className="text-base font-semibold text-foreground">{phase.title}</h3>
              <p className="text-sm leading-snug text-muted-foreground">{phase.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
