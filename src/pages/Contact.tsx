import { ArrowUpRight, MessageCircle, Mail, Wrench } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { FadeInInView } from "@/components/Reveal";

const contactLinks = [
  {
    title: "Discord",
    description: "Join our Discord server.",
    href: "https://discord.gg/7VBAD8eP",
    icon: MessageCircle,
  },
  {
    title: "Email List",
    description: "Join our mailing list to stay updated with the latest information and event dates.",
    href: "https://forms.gle/AsfX9PAZBR9spNzV8",
    icon: Mail,
  },
  {
    title: "Assistive Device Request",
    description: "Request an assistive toy or device.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScWN2yQnhFJXkJ1c3eG2XNlC1mo7Kkn3fV6gbSZqJenutfjSA/viewform?usp=header",
    icon: Wrench,
  },
];

const Contact = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Stay connected with Innovators in Action."
        description="Use the links below to join our community, receive updates, or request support."
      />

      <section className="container-wide py-16 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {contactLinks.map((item, i) => (
            <FadeInInView key={item.title} delay={Math.min(i * 0.08, 0.2)}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-5 font-serif text-xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Open link <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </a>
            </FadeInInView>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
