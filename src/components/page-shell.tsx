import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  centered,
  introClassName = "max-w-2xl",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  centered?: boolean;
  introClassName?: string;
}) {
  return (
    <section
      className={`mx-auto max-w-[1400px] px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-28 ${centered ? "text-center" : ""}`}
    >
      <p className="eyebrow fade-up">{eyebrow}</p>
      <h1
        className={`fade-up mt-6 max-w-4xl text-5xl leading-[1.05] md:text-7xl ${centered ? "mx-auto" : ""}`}
      >
        {title}
      </h1>
      {intro && (
        <p
          className={`fade-up mt-8 text-lg font-light leading-relaxed text-muted-foreground ${introClassName} ${centered ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      )}
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
