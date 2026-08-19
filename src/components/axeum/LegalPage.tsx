import type { ReactNode } from "react";

export const AXEUM_ADDRESS = {
  name: "Axeum Technologies, Inc.",
  street: "252 NW 29th St. Floor 9",
  city: "Miami, FL 33127",
  phone: "305.501.4741",
  phoneHref: "tel:+13055014741",
};

export function LegalPage({
  title,
  effective,
  email,
  children,
}: {
  title: string;
  effective: string;
  email: string;
  children: ReactNode;
}) {
  return (
    <div className="shell py-16 sm:py-24">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary">
        Axeum Legal
      </p>
      <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.25rem)] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-foreground">
        {title}
      </h1>
      <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
        Effective: {effective}
      </p>
      <span className="mt-6 block h-[2px] w-40 bg-copper" aria-hidden />

      <div className="legal-body mt-10 max-w-3xl space-y-6 font-sans text-[0.95rem] leading-relaxed text-muted-foreground">
        {children}
      </div>

      <div className="rule-top mt-14 max-w-3xl pt-8">
        <h2 className="font-serif text-lg font-semibold uppercase tracking-[0.12em] text-foreground">
          Contact
        </h2>
        <address className="mt-4 space-y-1 font-sans text-[0.95rem] not-italic leading-relaxed text-muted-foreground">
          <span className="block text-foreground">{AXEUM_ADDRESS.name}</span>
          <span className="block">{AXEUM_ADDRESS.street}</span>
          <span className="block">{AXEUM_ADDRESS.city}</span>
          <a href={AXEUM_ADDRESS.phoneHref} className="block text-primary hover:underline">
            {AXEUM_ADDRESS.phone}
          </a>
          <a href={`mailto:${email}`} className="block text-primary hover:underline">
            {email}
          </a>
        </address>
      </div>
    </div>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="pt-6 font-serif text-xl font-semibold uppercase tracking-[0.1em] text-foreground">
      {children}
    </h2>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item, i) => (
        <li key={i} className="list-disc marker:text-copper">
          {item}
        </li>
      ))}
    </ul>
  );
}
