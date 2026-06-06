import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/articles";

export function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-loam bg-loam text-paper">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-harvest text-loam font-display text-xl font-black">
              F
            </span>
            <span className="font-display text-2xl font-black tracking-tight">
              Farm<span className="text-harvest">Pulse</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-[0.92rem] leading-relaxed text-paper/65">
            Independent reporting on Nigerian agriculture — agritech, livestock, markets,
            climate and the policy that shapes the field.
          </p>
          <p className="mt-5 eyebrow text-paper/50">Abuja · Lagos · Kano</p>
        </div>

        <div>
          <h5 className="eyebrow text-harvest">Topics</h5>
          <ul className="mt-4 space-y-2 text-[0.9rem]">
            {CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/categories/$slug"
                  params={{ slug: c.slug }}
                  className="text-paper/70 transition hover:text-harvest"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="eyebrow text-harvest">The Paper</h5>
          <ul className="mt-4 space-y-2 text-[0.9rem]">
            <li><Link to="/articles" className="text-paper/70 hover:text-harvest">All Articles</Link></li>
            <li><Link to="/about" className="text-paper/70 hover:text-harvest">About FarmPulse</Link></li>
            <li><Link to="/contact" className="text-paper/70 hover:text-harvest">Pitch a story</Link></li>
            <li><Link to="/contact" className="text-paper/70 hover:text-harvest">Advertise</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-3 px-5 py-5 eyebrow text-paper/50 md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} FarmPulse Nigeria · Independent agricultural press</span>
          <span>Abuja, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}