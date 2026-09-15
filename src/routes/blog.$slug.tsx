import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/page-shell";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Not found — ARP Experiences" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — ARP Experiences` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} — ARP Experiences` },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <Section>
      <h1 className="text-5xl">That entry doesn't exist.</h1>
      <Link to="/blog" className="eyebrow link-underline mt-8 inline-block">
        Back to the journal
      </Link>
    </Section>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-20 md:pt-28">
      <p className="eyebrow">{post.category}</p>
      <h1 className="mt-6 text-5xl leading-[1.05] md:text-6xl">{post.title}</h1>
      <p className="mt-6 text-xs font-light tracking-wide text-muted-foreground">
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <img
        src={post.image}
        alt={post.imageAlt}
        loading="lazy"
        width={1200}
        height={800}
        className="mt-10 aspect-[3/2] w-full object-cover"
      />
      <div className="mt-12 space-y-7 text-lg font-light leading-relaxed text-muted-foreground">
        {post.body.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <div className="mt-16 border-t border-border pt-10">
        <Link to="/blog" className="eyebrow link-underline">
          Back to the journal
        </Link>
      </div>
    </article>
  );
}
