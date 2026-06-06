import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ArticleCard } from "@/components/site/ArticleCard";
import { ARTICLES, CATEGORIES } from "@/data/articles";
import { pageMeta } from "@/lib/seo";
import heroImg from "@/assets/articles/hero-landscape.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "FarmPulse Nigeria — Agritech, Farming & Food Systems",
      description:
        "Independent reporting on Nigerian agriculture: agritech, livestock, markets, climate and policy. Read by 12,000+ farmers and agribusiness leaders.",
    }),
  }),
  component: Index,
});

function Index() {
  const lead = ARTICLES[0];
  const co = ARTICLES[1];
  const rest = ARTICLES.slice(2);

  return (
    <SiteShell>
      {/* Masthead */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-10 md:py-20">
          <div className="eyebrow">Independent agricultural journalism · Nigeria</div>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            Reporting from the field, for the people who work it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Practical guides, market intelligence and on-the-ground reporting for Nigerian
            farmers, agribusiness owners and food-system professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/articles"
              className="inline-flex items-center bg-ink px-5 py-3 text-[0.85rem] text-paper transition hover:bg-bark"
            >
              Read the latest
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-[1320px] px-5 pb-14 md:px-10">
          <img
            src={heroImg}
            alt="Nigerian farmland at sunrise"
            width={1600}
            height={896}
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </section>

      {/* Lead + co-lead */}
      <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-4 border-b border-rule pb-4">
          <h2 className="eyebrow">Featured stories</h2>
          <Link to="/articles" className="eyebrow hover:text-ink">All stories →</Link>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr]">
          <ArticleCard article={lead} variant="feature" />
          <div className="flex flex-col gap-10">
            <ArticleCard article={co} />
          </div>
        </div>
      </section>

      {/* Topics strip */}
      <section className="border-y border-rule bg-paper-deep">
        <div className="mx-auto max-w-[1320px] px-5 py-10 md:px-10">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Browse by topic
            </h2>
            <span className="eyebrow">{CATEGORIES.length} sections</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/categories/$slug"
                params={{ slug: c.slug }}
                className="group flex flex-col gap-2 border border-rule bg-paper p-5 transition hover:border-ink"
              >
                <span className="font-display text-lg font-semibold tracking-tight text-ink">{c.name}</span>
                <span className="text-sm leading-snug text-ink-muted">
                  {c.blurb}
                </span>
                <span className="mt-2 eyebrow group-hover:text-ink">Browse →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More articles + sidebar */}
      <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-6 flex items-end justify-between border-b border-rule pb-4">
              <h2 className="eyebrow">More stories</h2>
              <Link to="/articles" className="eyebrow hover:text-ink">All →</Link>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              {rest.slice(0, 6).map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>

          <aside className="space-y-10">
            <div className="border border-rule bg-paper p-6">
              <div className="eyebrow">Most read</div>
              <ol className="mt-4 space-y-4">
                {ARTICLES.slice(0, 5).map((a, i) => (
                  <li key={a.slug} className="flex gap-3 border-b border-rule pb-4 last:border-b-0 last:pb-0">
                    <span className="font-display text-2xl font-semibold text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <Link
                        to="/articles/$slug"
                        params={{ slug: a.slug }}
                        className="font-display text-[0.98rem] font-semibold leading-snug text-ink hover:text-harvest"
                      >
                        {a.title}
                      </Link>
                      <div className="mt-1 eyebrow">{a.reads ?? "1K"} reads</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-rule bg-paper p-6">
              <div className="eyebrow">Topics</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Maize", "Rice", "Poultry", "Cassava", "Irrigation", "Soil", "Drones", "Cold Chain", "Yam", "Fertiliser", "Aquaculture", "Soybean", "Agri-loans", "Export"].map(
                  (t) => (
                    <Link
                      key={t}
                      to="/articles"
                      search={{ q: t }}
                      className="border border-rule bg-paper px-3 py-1 text-[0.78rem] text-ink-muted transition hover:border-ink hover:text-ink"
                    >
                      {t}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
