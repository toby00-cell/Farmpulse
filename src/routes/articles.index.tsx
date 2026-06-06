import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { ArticleCard } from "@/components/site/ArticleCard";
import { ARTICLES, CATEGORIES } from "@/data/articles";
import { pageMeta } from "@/lib/seo";

const searchSchema = z.object({
  q: z.string().optional(),
  cat: z.string().optional(),
});

export const Route = createFileRoute("/articles/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: pageMeta({
      title: "All Articles — FarmPulse Nigeria",
      description: "Every story from FarmPulse: agritech, livestock, markets, climate, irrigation and Nigerian agricultural policy.",
    }),
  }),
  component: ArticlesIndex,
});

function ArticlesIndex() {
  const { q, cat } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(q ?? "");

  const filtered = useMemo(() => {
    const needle = (q ?? "").toLowerCase();
    return ARTICLES.filter((a) => {
      const catOk = !cat || a.category === cat;
      if (!catOk) return false;
      if (!needle) return true;
      return (
        a.title.toLowerCase().includes(needle) ||
        a.dek.toLowerCase().includes(needle) ||
        a.tags.some((t) => t.toLowerCase().includes(needle))
      );
    });
  }, [q, cat]);

  return (
    <SiteShell>
      <section className="border-b border-rule bg-paper-deep">
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-10">
          <div className="eyebrow text-clay">The archive</div>
          <h1 className="mt-3 font-display text-[clamp(2.4rem,5vw,4rem)] font-black leading-[0.95] tracking-tight text-loam">
            Every story.<br />
            <span className="italic font-normal text-clay">Filed by hand.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-muted">
            {filtered.length} article{filtered.length === 1 ? "" : "s"}
            {cat ? ` in ${CATEGORIES.find((c) => c.slug === cat)?.name}` : ""}
            {q ? ` matching "${q}"` : ""}.
          </p>

          <form
            className="mt-8 flex max-w-2xl"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ search: { q: query || undefined, cat } });
            }}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, crops, places…"
              className="flex-1 border border-rule border-r-0 bg-paper px-5 py-3 text-base outline-none focus:border-loam"
            />
            <button className="bg-loam px-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper hover:bg-bark">
              Search
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-1">Filter</span>
            <Link
              to="/articles"
              search={{ q }}
              className={`border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition ${
                !cat ? "border-loam bg-loam text-paper" : "border-rule bg-paper text-ink-muted hover:border-loam"
              }`}
            >
              All
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/articles"
                search={{ q, cat: c.slug }}
                className={`border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition ${
                  cat === c.slug
                    ? "border-loam bg-loam text-paper"
                    : "border-rule bg-paper text-ink-muted hover:border-loam"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-10">
        {filtered.length === 0 ? (
          <div className="border border-rule bg-paper-deep p-12 text-center">
            <div className="font-display text-2xl font-bold text-loam">No matches.</div>
            <p className="mt-2 text-ink-muted">Try a different keyword or filter.</p>
          </div>
        ) : (
          <div className="grid gap-10">
            {filtered.map((a) => (
              <ArticleCard key={a.slug} article={a} variant="wide" />
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}