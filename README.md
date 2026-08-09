# Your Name — Archive

A personal hub for design work, software/tools, and technical writeups.
Plain HTML/CSS/JS, no build step — open `index.html` directly in a browser,
or deploy as-is.

## Structure

```
personal-hub/
├── index.html              ← homepage: filterable catalog of all entries
├── design/
│   └── example-project.html   ← template for a design piece
├── software/
│   └── example-tool.html      ← template for a tool/script/app
├── notes/
│   └── example-note.html      ← template for a "how I solved X" writeup
└── assets/
    ├── css/style.css       ← all styling + design tokens (colors, type)
    └── js/filter.js        ← powers the [design]/[software]/[notes] filter bar
```

## Adding a new entry

1. Duplicate the relevant template (`design/example-project.html`,
   `software/example-tool.html`, or `notes/example-note.html`).
2. Rename the file and edit its content.
3. Add a matching `<a class="entry" data-type="...">` block to the
   `.catalog` grid in `index.html`, with the next catalog number.

That's the whole workflow — no CMS, no database.

## Rebrand

- Replace "Your Name" in each `<title>` and in `index.html`'s `<h1>`.
- Colors and fonts live at the top of `assets/css/style.css` under `:root`.
  `--accent-blue`, `--accent-purple`, `--accent-cyan` drive the background
  orbs and the per-type tag colors (design/software/notes).
- The moving background, cursor glow, hero parallax, and scroll-reveal on
  cards are all handled by `assets/js/main.js` — delete any of those blocks
  there if you want to simplify.

## Deploying

Free options that work with this structure as-is:
- **GitHub Pages** — push this folder to a repo, enable Pages in settings.
- **Vercel** or **Netlify** — drag-and-drop deploy, or connect the repo.

If you outgrow hand-editing HTML for every new note (once you have a lot of
writeups), consider migrating to a static site generator like Astro, which
can auto-generate a page per Markdown file — the folder structure above
maps directly onto that migration.
