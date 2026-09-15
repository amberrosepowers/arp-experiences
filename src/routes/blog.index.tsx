import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/page-shell";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — ARP Experiences" },
      {
        name: "description",
        content:
          "Notes on hotels, destinations, gatherings, and hospitality from the founder of ARP Experiences.",
      },
      { property: "og:title", content: "Journal — ARP Experiences" },
      {
        property: "og:description",
        content: "Notes on hotels, destinations, gatherings, and hospitality.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHeader
        centered
        eyebrow="Journal"
        title="Notes on places, people, and hospitality."
        intro="Observations from inside the industry — the hotels & destinations worth knowing, the way a gathering comes together, and the thinking behind how we plan."
      />

      <Section className="!pt-0">
        <div className="mx-auto max-w-5xl">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className="grid items-center gap-10 border-t border-border py-14 first:pt-0 md:grid-cols-[0.9fr_1.1fr] md:gap-14"
            >
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className={`block overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                />
              </Link>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex flex-wrap items-center gap-6">
                  <span className="eyebrow">{post.category}</span>
                  <span className="text-xs font-light tracking-wide text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="link-underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="eyebrow link-underline mt-8 inline-block"
                >
                  Read
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
