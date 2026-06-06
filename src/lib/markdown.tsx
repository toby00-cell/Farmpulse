import type { ReactNode } from "react";

export function renderMarkdown(src: string): ReactNode {
  const blocks = src.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-12 mb-4 font-display text-3xl font-bold tracking-tight text-ink">
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-8 mb-3 font-display text-2xl font-bold tracking-tight text-ink">
          {block.slice(4)}
        </h3>
      );
    }
    if (block.startsWith("> ")) {
      return (
        <blockquote
          key={i}
          className="my-8 border-l-4 border-harvest pl-6 font-display text-xl italic leading-relaxed text-loam"
        >
          {inline(block.slice(2))}
        </blockquote>
      );
    }
    if (/^(\d+\.|-)\s+/.test(block)) {
      const items = block.split("\n").map((l) => l.replace(/^(\d+\.|-)\s+/, ""));
      const ordered = /^\d+\.\s+/.test(block);
      const ListTag = ordered ? "ol" : "ul";
      return (
        <ListTag
          key={i}
          className={`my-5 space-y-2 pl-6 text-[1.06rem] leading-relaxed text-ink ${ordered ? "list-decimal" : "list-disc"}`}
        >
          {items.map((it, j) => (
            <li key={j}>{inline(it)}</li>
          ))}
        </ListTag>
      );
    }
    return (
      <p key={i} className="my-5 text-[1.08rem] leading-[1.8] text-ink">
        {inline(block)}
      </p>
    );
  });
}

function inline(s: string): ReactNode {
  const parts: ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|_[^_]+_)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(s))) {
    if (m.index > last) parts.push(s.slice(last, m.index));
    const token = m[0];
    if (token.startsWith("**"))
      parts.push(
        <strong key={key++} className="font-semibold text-loam">
          {token.slice(2, -2)}
        </strong>,
      );
    else parts.push(<em key={key++}>{token.slice(1, -1)}</em>);
    last = m.index + token.length;
  }
  if (last < s.length) parts.push(s.slice(last));
  return parts;
}