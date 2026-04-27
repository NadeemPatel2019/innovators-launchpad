import { cn } from "@/lib/utils";

interface SectionTabItem {
  id: string;
  label: string;
}

interface SectionTabsProps {
  ariaLabel: string;
  items: SectionTabItem[];
  className?: string;
}

export const SectionTabs = ({ ariaLabel, items, className }: SectionTabsProps) => {
  return (
    <nav
      aria-label={ariaLabel}
      className={cn("sticky top-16 z-30 border-b border-border bg-background/80 backdrop-blur lg:top-20", className)}
    >
      <div className="container-wide flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-muted hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
