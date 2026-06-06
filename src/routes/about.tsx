import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({
      title: "About — FarmPulse Nigeria",
      description: "Independent agricultural press, based in Abuja, reporting from 36 states. Who we are and what we file.",
    }),
  }),
  component: About,
});

const TEAM = [
  { name: "Bright Joel", title: "Editor in chief", initials: "BJ", state: "Abuja" },
];

function About() {
  return (
    <SiteShell>
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-[1100px] px-5 py-20 md:px-10">
          <div className="eyebrow text-clay">About FarmPulse</div>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5rem)] font-black leading-[0.95] tracking-tight text-loam">
            We file from the field.<br />
            <span className="italic font-normal text-clay">Not the conference room.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink-muted">
            FarmPulse is an independent agricultural newsroom covering Nigerian agritech, livestock,
            markets, climate adaptation and the policy that shapes the country's farms. Our
            reporters spend weeks on the ground in Kano, Benue, Plateau, Ogun and beyond — because
            the story is almost never on the press release.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-20 md:px-10">
        <div className="grid gap-px bg-rule sm:grid-cols-3">
          {[
            { k: "2021", v: "Founded in Abuja" },
            { k: "36", v: "States with on-the-ground sources" },
            { k: "12K", v: "Monthly readers · 60% on mobile" },
            { k: "240+", v: "Original investigations and guides" },
            { k: "₦0", v: "Owed to advertisers in editorial calls" },
            { k: "100%", v: "Independent · reader and grant funded" },
          ].map((s) => (
            <div key={s.v} className="bg-paper p-8">
              <div className="font-display text-4xl font-black text-loam">{s.k}</div>
              <div className="mt-2 text-sm text-ink-muted">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-paper-deep">
        <div className="mx-auto max-w-[1100px] px-5 py-20 md:px-10">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
            <div>
              <div className="eyebrow text-clay">The editorial line</div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-loam">What we owe our readers</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-ink">
              <p>
                We name sources where it is safe to. We do not run sponsored content disguised as
                reporting. We disclose every grant, every co-publishing arrangement, every conflict.
              </p>
              <p>
                When we get it wrong, we correct in the same place we published, at the top of the
                page, with the original text preserved below the line.
              </p>
              <p>
                We file in plain language. If a farmer can't follow what we wrote, we have failed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-20 md:px-10">
        <div className="eyebrow text-clay">The desk</div>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-loam">Reporters in rotation</h2>
        <div className="mt-10 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div key={m.name} className="flex items-start gap-4 bg-paper p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-loam font-mono text-sm text-paper">
                {m.initials}
              </span>
              <div>
                <div className="font-display text-lg font-bold text-ink">{m.name}</div>
                <div className="eyebrow text-clay">{m.title}</div>
                <div className="mt-1 text-sm text-ink-muted">Based in {m.state}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/contact" className="bg-loam px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-paper hover:bg-bark">
            Pitch us a story
          </Link>
          <Link to="/newsletter" className="border border-loam px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-loam hover:bg-loam hover:text-paper">
            Get the Field Brief
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}