import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/articles";
import { CATEGORIES } from "@/data/articles";

function categoryName(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function ArticleCard({
  article,
  variant = "default",
}: {
  article: Article;
  variant?: "default" | "feature" | "compact" | "wide";
}) {
  if (variant === "wide") {
    return (
      <Link
        to="/articles/$slug"
        params={{ slug: article.slug }}
        className="group grid gap-6 border-b border-rule pb-8 md:grid-cols-[260px_1fr]"
      >
        <div className="aspect-[4/3] overflow-hidden bg-paper-deep">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div>
          <div className="eyebrow">{categoryName(article.category)}</div>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-snug tracking-tight text-ink transition group-hover:text-harvest">
            {article.title}
          </h3>
          <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-ink-muted">{article.dek}</p>
          <div className="mt-4 flex items-center gap-3 eyebrow">
            <span className="text-ink">{article.author.name}</span>
            <span className="text-rule">·</span>
            <span>{formatDate(article.date)}</span>
            <span className="text-rule">·</span>
            <span>{article.readMinutes} min</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/articles/$slug"
      params={{ slug: article.slug }}
      className="group flex h-full flex-col"
    >
      <div
        className={`relative overflow-hidden bg-paper-deep ${
          variant === "feature" ? "aspect-[16/11]" : variant === "compact" ? "aspect-[4/3]" : "aspect-[16/10]"
        }`}
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 pt-4">
        <div className="eyebrow">{categoryName(article.category)}</div>
        <h3
          className={`font-display font-semibold leading-snug tracking-tight text-ink transition group-hover:text-harvest ${
            variant === "feature" ? "text-[1.8rem]" : "text-[1.2rem]"
          }`}
        >
          {article.title}
        </h3>
        {variant !== "compact" && (
          <p className="text-[0.95rem] leading-relaxed text-ink-muted">{article.dek}</p>
        )}
        <div className="mt-auto flex items-center gap-3 eyebrow">
          <span className="text-ink">{article.author.name}</span>
          <span className="text-rule">·</span>
          <span>{formatDate(article.date)}</span>
          <span className="text-rule">·</span>
          <span>{article.readMinutes} min</span>
        </div>
      </div>
    </Link>
  );
}