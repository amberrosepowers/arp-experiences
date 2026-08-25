import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/arp-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Journal" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="flex items-center" aria-label="ARP Experiences home">
          <img src={logo.url} alt="ARP Experiences" className="h-14 w-auto md:h-16" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="eyebrow link-underline text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={item.to === "/" ? { exact: true } : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/inquire" className="btn-arp !px-7 !py-3">
            Inquiry
          </Link>
        </nav>

        <button
          className="eyebrow md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-5 border-t border-border px-6 py-8 md:hidden">
          {[...nav, { to: "/inquire", label: "Inquiry" } as const].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
