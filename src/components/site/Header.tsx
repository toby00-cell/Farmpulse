import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/articles", label: "Articles" },
  { to: "/categories/crop-technology", label: "Crop Tech" },
  { to: "/categories/livestock", label: "Livestock" },
  { to: "/categories/markets", label: "Markets" },
  { to: "/categories/government", label: "Policy" },
  { to: "/categories/climate", label: "Climate" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-[1.5rem] font-semibold leading-none tracking-tight text-ink">
            FarmPulse
          </span>
          <span className="eyebrow hidden md:inline">Nigeria</span>
        </Link>

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-6">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(item.to + "/");
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`text-[0.9rem] transition ${
                      active ? "text-ink font-medium" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-rule text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-rule bg-paper">
          <ul className="mx-auto max-w-[1320px] px-5 py-3 md:px-10">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-ink-muted hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}