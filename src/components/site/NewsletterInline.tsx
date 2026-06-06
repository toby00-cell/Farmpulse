import { useState } from "react";
import { toast } from "sonner";

export function NewsletterInline({ tone = "loam" }: { tone?: "loam" | "paper" }) {
  const [email, setEmail] = useState("");
  const dark = tone === "loam";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.includes("@")) {
          toast.error("That email doesn't look right.");
          return;
        }
        toast.success("You're on the list. First brief lands Sunday.");
        setEmail("");
      }}
      className={`p-8 ${dark ? "bg-loam text-paper" : "bg-paper-deep text-ink"} border border-rule`}
    >
      <div className={`eyebrow ${dark ? "text-harvest" : "text-clay"}`}>The Field Brief</div>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
        One long read. Three signals. Sundays.
      </h3>
      <p className={`mt-2 text-sm ${dark ? "text-paper/65" : "text-ink-muted"}`}>
        Weekly intelligence for Nigerian farmers, agribusiness owners and food-system professionals.
      </p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`flex-1 border px-4 py-3 font-sans text-sm outline-none transition ${
            dark
              ? "border-paper/20 bg-loam text-paper placeholder:text-paper/40 focus:border-harvest"
              : "border-rule bg-paper text-ink placeholder:text-ink-muted focus:border-loam"
          }`}
        />
        <button
          type="submit"
          className="bg-harvest px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-loam transition hover:bg-straw"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}