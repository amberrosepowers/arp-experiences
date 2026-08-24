import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-oxblood text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl tracking-[0.18em]">ARP</p>
            <p className="eyebrow mt-2 !text-primary-foreground/70">Experiences</p>
            <p className="mt-8 max-w-sm font-display text-2xl leading-snug text-primary-foreground/90">
              Travel, thoughtfully experienced.
            </p>
          </div>

          <div>
            <p className="eyebrow !text-primary-foreground/60">Explore</p>
            <ul className="mt-6 space-y-3 text-sm font-light">
              <li>
                <Link to="/about" className="link-underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="link-underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="link-underline">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/faq" className="link-underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-primary-foreground/60">Connect</p>
            <ul className="mt-6 space-y-3 text-sm font-light">
              <li>
                <a href="mailto:hello@arpexperiences.com" className="link-underline">
                  hello@arpexperiences.com
                </a>
              </li>
              <li>
                <Link to="/inquire" className="link-underline">
                  Begin an inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-primary-foreground/20 pt-8 text-xs font-light tracking-wide text-primary-foreground/60 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} ARP Experiences</p>
          <p>Exceptional places. Personal relationships. Experiences worth remembering.</p>
        </div>
      </div>
    </footer>
  );
}
