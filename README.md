# depthvector-site

Marketing site for **Depth Vector** — [depth-vector.com](https://depth-vector.com).

Plain static site: `index.html` + `styles.css` + `script.js` + `assets/`. No framework, no build step. Hosted on GitHub Pages.

## Updating content

- **Images:** drop files into `assets/` with the exact names listed in the comment block at the top of `index.html` — placeholders swap to the real image automatically. No code changes needed.
- **Walkthrough video:** set `VIDEO_ID` in `script.js` to the YouTube video ID.
- **Store links:** when App Store / Play listings go live, add real links to the `.store-badge` elements in `index.html` and remove the `coming-soon` class.
- **Launch checklist:** the full TODO list lives in the HTML comment at the top of `index.html`.

## Local preview

Open `index.html` in a browser, or run any static server, e.g.:

```sh
python3 -m http.server 8080
```

## Deploy

Push to `main`. GitHub Pages serves from the branch root; `CNAME` pins the custom domain.
