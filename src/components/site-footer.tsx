import { Link } from "@tanstack/react-router";

const instagramPreview = [
  "/photos/hero-balzac-lobby.jpg",
  "/photos/service-travel-malta.jpg",
  "/photos/blog-fewer-options-spa.jpg",
  "/photos/inquire-st-tropez-alley.jpg",
  "/photos/offering-flights-paris-dusk.jpg",
  "/photos/about-closing-staircase.jpg",
];

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-walnut text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl tracking-[0.18em]">ARP</p>
            <p className="eyebrow mt-2 !text-primary-foreground/70">Experiences</p>
            <p className="mt-8 max-w-sm font-display text-2xl leading-snug text-primary-foreground/90">
              Travel, thoughtfully experienced.
            </p>
            <a
              href="mailto:hello@arpexperiences.com?subject=Subscribe%20to%20the%20Journal"
              className="btn-arp-ghost mt-8"
            >
              Subscribe to our Journal
            </a>
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
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-primary-foreground/60">Connect</p>
            <ul className="mt-6 space-y-3 text-sm font-light">
              <li>
                <Link to="/inquire" className="link-underline">
                  Begin an Inquiry
                </Link>
              </li>
              <li>
                <a href="mailto:hello@arpexperiences.com" className="link-underline">
                  hello@arpexperiences.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/20 pt-10">
          <a
            href="https://www.instagram.com/arpexperiences"
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow link-underline !text-primary-foreground/70"
          >
            @arpexperiences
          </a>
          <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {instagramPreview.map((src) => (
              <a
                key={src}
                href="https://www.instagram.com/arpexperiences"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  width={200}
                  height={200}
                  className="aspect-square w-full object-cover opacity-90 transition-opacity hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-primary-foreground/20 pt-8 text-xs font-light tracking-wide text-primary-foreground/60 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} ARP Experiences</p>
          <p>An Independent Affiliate of Fora Travel, a Virtuoso Company</p>
        </div>
      </div>
    </footer>
  );
}
