import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site/SiteShell";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({
      title: "Contact — FarmPulse Nigeria",
      description: "Pitch a story, request a correction, advertise, or write for FarmPulse. Reach the editorial desk.",
    }),
  }),
  component: Contact,
});

const TOPICS = ["Pitch a story", "Tip / leak", "Correction request", "Write for us", "Advertise", "Other"];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: TOPICS[0], message: "" });

  return (
    <SiteShell>
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-5 py-20 md:px-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="eyebrow text-clay">Contact</div>
            <h1 className="mt-3 font-display text-[clamp(2.4rem,5vw,4rem)] font-black leading-[0.95] tracking-tight text-loam">
              Got a tip?<br />
              <span className="italic font-normal text-clay">We listen.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink-muted">
              Pitch stories, share leaks, request corrections, or work with our editorial desk.
              Replies within two business days.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <div className="eyebrow text-clay">Editorial</div>
                <div className="mt-1 font-display text-lg text-ink">brightjoel196@gmail.com</div>
              </div>
              <div>
                <div className="eyebrow text-clay">Advertising</div>
                <div className="mt-1 font-display text-lg text-ink">joelbright508@gmail.com</div>
              </div>
              <div>
                <div className="eyebrow text-clay">Office</div>
                <div className="mt-1 text-ink">Plot 14, Aminu Kano Crescent · Wuse 2, Abuja</div>
              </div>
              <div>
                <div className="eyebrow text-clay">Secure tip</div>
                <div className="mt-1 text-ink">Signal: +234 915 8876 342</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message received — we'll be in touch.");
              setForm({ name: "", email: "", topic: TOPICS[0], message: "" });
            }}
            className="border border-rule bg-paper-deep p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow text-clay">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full border border-rule bg-paper px-4 py-3 outline-none focus:border-loam"
                />
              </label>
              <label className="block">
                <span className="eyebrow text-clay">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full border border-rule bg-paper px-4 py-3 outline-none focus:border-loam"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="eyebrow text-clay">Topic</span>
              <select
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
                className="mt-2 w-full border border-rule bg-paper px-4 py-3 outline-none focus:border-loam"
              >
                {TOPICS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="mt-5 block">
              <span className="eyebrow text-clay">Message</span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full border border-rule bg-paper px-4 py-3 outline-none focus:border-loam"
              />
            </label>
            <button className="mt-6 bg-loam px-8 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-paper hover:bg-bark">
              Send message
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}