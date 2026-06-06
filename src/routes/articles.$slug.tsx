import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ArticleCard } from "@/components/site/ArticleCard";
import { NewsletterInline } from "@/components/site/NewsletterInline";
import { ARTICLES, getArticle, getCategory } from "@/data/articles";
import { renderMarkdown } from "@/lib/markdown";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? pageMeta({
          title: `${loaderData.article.title} — FarmPulse`,
          description: loaderData.article.dek,
        })
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <div className="eyebrow text-clay">404</div>
        <h1 className="mt-3 font-display text-4xl font-black text-loam">Story not found</h1>
        <p className="mt-3 text-ink-muted">It may have been moved or unpublished.</p>
        <Link to="/articles" className="mt-6 inline-flex bg-loam px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper">
          Back to articles
        </Link>
      </div>
    </SiteShell>
  ),
  errorComponent: ({ reset }) => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-loam">Something went wrong</h1>
        <button onClick={reset} className="mt-4 bg-loam px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper">Retry</button>
      </div>
    </SiteShell>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const cat = getCategory(article.category);
  const related = ARTICLES.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3);
  const more = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 4);
  const date = new Date(article.date).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });

  return (
    <SiteShell>
      {/* Hero */}
      <article>
        <header className="border-b border-rule">
          <div className="mx-auto max-w-4xl px-5 pt-12 pb-8 md:px-10 md:pt-16">
            <nav className="flex flex-wrap items-center gap-2 eyebrow">
              <Link to="/" className="hover:text-ink">Home</Link>
              <span>·</span>
              <Link to="/articles" className="hover:text-ink">Articles</Link>
              {cat && (
                <>
                  <span>·</span>
                  <Link to="/categories/$slug" params={{ slug: cat.slug }} className="hover:text-ink">
                    {cat.name}
                  </Link>
                </>
              )}
            </nav>
            <h1 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink-muted">{article.dek}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3 eyebrow">
              <span className="text-ink">{article.author.name}</span>
              <span className="text-rule">·</span>
              <span>{date}</span>
              <span className="text-rule">·</span>
              <span>{article.readMinutes} min read</span>
            </div>
          </div>
          <div className="mx-auto max-w-[1240px] px-5 pb-10 md:px-10">
            <img
              src={article.image}
              alt={article.title}
              width={1280}
              height={832}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </header>

        {/* Body */}
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full max-w-2xl">
            <div className="prose-article">{renderMarkdown(article.body)}</div>

            <div className="mt-12 border-t border-rule pt-8">
              <div className="eyebrow">Filed under</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {article.tags.map((t: string) => (
                  <span key={t} className="border border-rule bg-paper-deep px-3 py-1 text-[0.78rem] text-ink-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-start gap-5 border border-rule bg-paper-deep p-6">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-base text-paper">
                {article.author.initials}
              </span>
              <div>
                <div className="font-display text-lg font-semibold text-ink">{article.author.name}</div>
                <div className="eyebrow">{article.author.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{article.author.bio}</p>
              </div>
            </div>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
            <div className="border border-rule bg-paper p-5">
              <div className="eyebrow">Related</div>
              <ul className="mt-4 space-y-4">
                {related.map((r) => (
                  <li key={r.slug} className="border-b border-rule pb-3 last:border-b-0 last:pb-0">
                    <Link
                      to="/articles/$slug"
                      params={{ slug: r.slug }}
                      className="font-display text-[0.98rem] font-semibold leading-snug text-ink hover:text-harvest"
                    >
                      {r.title}
                    </Link>
                    <div className="mt-1 eyebrow">{r.readMinutes} min</div>
                  </li>
                ))}
              </ul>
            </div>
            <NewsletterInline tone="paper" />
          </aside>
        </div>

        {/* More */}
        <section className="border-t border-rule bg-paper-deep">
          <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10">
            <div className="mb-6 flex items-end justify-between border-b border-rule pb-4">
              <h2 className="eyebrow">More from FarmPulse</h2>
              <Link to="/articles" className="eyebrow hover:text-ink">All →</Link>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {more.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}