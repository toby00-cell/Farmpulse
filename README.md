# FarmPulse Nigeria

A static editorial blog for Nigerian agritech news, farming guides, and agricultural policy analysis. Built for farmers, agribusiness owners, and food systems professionals across all 36 states.

<img width="1440" height="817" alt="Screenshot 2026-06-20 at 10 45 26" src="https://github.com/user-attachments/assets/c343e46c-0b8a-4afa-9af3-42a5200a5e49" />


## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage — hero, featured stories, article grid, market prices sidebar |
| `blog.html` | Articles listing — search, filters, pagination |
| `article.html` | Single article — full content, share bar, reading progress, related posts |
| `css/style.css` | All styles — one shared stylesheet across all pages |

---

## Stack

- **Pure HTML/CSS/JS** — no build tools, no frameworks, no dependencies
- **Google Fonts** — Syne (headings), Bitter (body), IBM Plex Mono (labels/meta)
- Responsive from 320px to 1440px+

---

## Structure

```
farmpulse/
├── index.html
├── blog.html
├── article.html
└── css/
    └── style.css
```

---

## Design Tokens

All colours and spacing are defined as CSS variables in `:root` inside `style.css`.

```css
--deep-soil:  #2A1A06   /* nav, hero, footer backgrounds */
--amber:      #D4883A   /* primary accents, borders */
--gold:       #E8B84B   /* highlights, active states */
--terracotta: #B8552A   /* category pills, links */
--grass:      #3D6B2C   /* secondary accent, market header */
--cream:      #F8F3EA   /* card backgrounds */
--body-bg:    #F4EFE4   /* page background */
```

---

## Key Components

**Utility bar** — top strip with date, WhatsApp link, and quick nav links.

**Ticker** — auto-scrolling commodity price strip (Maize, Rice, Soybean etc). Update prices in `index.html` inside `.ticker-inner`.

**Hero** — two-column layout: editorial headline left, numbered latest-stories list right.

**Market prices widget** — sidebar table with commodity name, price, and up/down % badge. Appears on homepage and article page.

**Article page extras** — reading progress bar (JS, no library), sticky share column, callout boxes, data boxes, pull quotes, author bio, related articles.

---

## Replacing Placeholder Content

### Images
Every card currently uses a CSS gradient placeholder. To swap in a real image, replace:

```html
<div class="card-thumb-placeholder" style="background: ...">
  <span class="card-thumb-cat">Category</span>
</div>
```

with:

```html
<div class="card-img-wrap" style="position:relative;">
  <img src="path/to/image.jpg" alt="Description" class="card-thumb">
  <span class="card-thumb-cat" style="position:absolute; bottom:12px; left:14px;">Category</span>
</div>
```

### Market prices
Edit the `.market-row` blocks in the sidebar. Each row follows this pattern:

```html
<div class="market-row">
  <span class="market-crop">Maize (white)</span>
  <span class="market-price">₦95,000</span>
  <span class="market-change up">+4.2%</span>   <!-- use "down" class for red -->
</div>
```

### Ticker prices
Edit the text inside `.ticker-inner` in `index.html`. The animation is CSS-only — no JS needed.

---

## Responsive Behaviour

| Breakpoint | Changes |
|---|---|
| `< 1000px` | Hero stacks vertically, sidebar drops below content, featured grid goes single column |
| `< 760px` | Nav links hidden, utility bar right side hidden, share bar hidden |
| `< 540px` | List cards stack vertically, hero stats compress |

---

## Adding a New Article

1. Duplicate `article.html`
2. Update the `<title>`, breadcrumb, category pill, `<h1>`, and author meta
3. Replace the hero image placeholder gradient with your colour or a real `<img>`
4. Write the article body inside `.article-body` using the available content blocks:
   - `<p class="lead">` — intro paragraph with left border
   - `<div class="callout">` — green-tinted tip box
   - `<div class="data-box">` — dark stat/data highlight box
   - `<blockquote>` — pull quote with green left border
5. Update the related articles and sidebar links
6. Link to it from `index.html` and `blog.html`

---

## Deployment

No build step required. Drop the folder on any static host:

- **Vercel** — `vercel deploy`
- **Netlify** — drag and drop the folder in the Netlify dashboard
- **Cloudflare Pages** — connect the repo or upload directly
- **GitHub Pages** — push to a repo, enable Pages in Settings

---

## License

MIT — free to use and modify.
