export function pageMeta(opts: {
  title: string;
  description: string;
  image?: string;
}) {
  const title = opts.title;
  return [
    { title },
    { name: "description", content: opts.description },
    { property: "og:title", content: title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: "website" },
    ...(opts.image ? [{ property: "og:image", content: opts.image }] : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: opts.description },
  ];
}