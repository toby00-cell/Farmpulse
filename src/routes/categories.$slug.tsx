import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ArticleCard } from "@/components/site/ArticleCard";
import { articlesInCategory, CATEGORIES, getCategory, type Article } from "@/data/articles";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, articles: articlesInCategory(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? pageMeta({
          title: `${loaderData.category.name} — FarmPulse`,
          description: loaderData.category.blurb,
        })
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-4xl font-black text-loam">Unknown desk</h1>
        <Link to="/articles" className="mt-6 inline-flex bg-loam px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper">
          See all articles
        </Link>
      </div>
    </SiteShell>
  ),
  errorComponent: ({ reset }) => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-loam">Could not load this desk</h1>
        <button onClick={reset} className="mt-4 bg-loam px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper">Retry</button>
      </div>
    </SiteShell>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, articles } = Route.useLoaderData();
  return (
    <SiteShell>
      <section className="border-b border-rule bg-paper-deep">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10">
          <Link to="/articles" className="eyebrow text-clay hover:text-loam">← All articles</Link>
          <div className="mt-6">
            <div>
              <div className="eyebrow text-clay">Desk</div>
              <h1 className="mt-2 font-display text-[clamp(2.4rem,5vw,4rem)] font-black leading-[0.95] tracking-tight text-loam">
                {category.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-ink-muted">{category.blurb}</p>
              <div className="mt-3 eyebrow">{articles.length} article{articles.length === 1 ? "" : "s"}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-10">
        {articles.length === 0 ? (
          <div className="border border-rule bg-paper-deep p-12 text-center text-ink-muted">
            No stories filed under this desk yet.
          </div>
        ) : (
          <div className="grid gap-10">
            {articles.map((a: Article) => (
              <ArticleCard key={a.slug} article={a} variant="wide" />
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-rule bg-paper-deep">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10">
          <h2 className="eyebrow text-clay">Other desks</h2>
          <div className="mt-6 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => (
              <Link
                key={c.slug}
                to="/categories/$slug"
                params={{ slug: c.slug }}
                className="group bg-paper p-6 transition hover:bg-loam hover:text-paper"
              >
                <div className="font-display text-lg font-bold tracking-tight">{c.name}</div>
                <div className="mt-1 text-sm text-ink-muted group-hover:text-paper/70">{c.blurb}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}