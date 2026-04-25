import { Link } from "react-router-dom";
import { Mail, Instagram, Github } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="mt-24 border-t border-border bg-brand-navy-deep text-primary-foreground">
      <div className="container-wide grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-accent text-accent-foreground">
              <span className="font-serif text-lg font-bold leading-none">i</span>
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight">
              Innovators in Action
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            A medical-student-led non-profit, building accessible
            futures through engineering, design, and community partnership.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/events" className="hover:text-accent">Events</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/news" className="hover:text-accent">News</Link></li>
            <li><Link to="/team" className="hover:text-accent">Team</Link></li>
            <li><Link to="/donate" className="hover:text-accent">Donate</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            Programs
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>Adapt-a-Thon</li>
            <li>Mini Make-a-Thon</li>
            <li>Yearly Research Project</li>
            <li>Community Partnerships</li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            Connect
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li>
              <a href="mailto:hello@innovatorsinaction.org" className="inline-flex items-center gap-2 hover:text-accent">
                <Mail className="h-4 w-4" aria-hidden /> innovators.in.action@outlook.com
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 hover:text-accent">
                <Instagram className="h-4 w-4" aria-hidden /> @innovatorsinaction
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 hover:text-accent">
                <Github className="h-4 w-4" aria-hidden /> Open Source
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide flex flex-col items-start justify-between gap-3 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Innovators in Action .</p>
          <p>Designed with accessibility at its core.</p>
        </div>
      </div>
    </footer>
  );
};
