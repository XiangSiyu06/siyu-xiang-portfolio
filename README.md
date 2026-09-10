# Siyu Xiang – CS 2340 Portfolio

Single-page static portfolio for Georgia Tech **CS 2340 (Objects and Design)**.
Built with plain HTML, CSS, and a small amount of vanilla JavaScript – no frameworks or build step.

## Structure

```
.
├── index.html            # The page (About Me, GT Movies Store, Process, Demo Video)
├── style.css             # Styles (responsive, light/dark aware)
├── script.js             # Mobile nav toggle + active-link highlighting
├── assets/
│   ├── placeholder.svg   # Generic placeholder image used until real screenshots exist
│   └── screenshots/      # Put GT Movies Store screenshots here
└── README.md
```

## Filling in the content

Everything marked `[TODO]` in `index.html` is a placeholder:

1. **About Me** – add a short intro paragraph / contact links.
2. **GT Movies Store** – for each page card, replace `assets/placeholder.svg` with a real screenshot
   from `assets/screenshots/` and replace the `[TODO]` description.
3. **Process** – write the development process paragraph(s).
4. **Demo Video** – replace `YOUTUBE_VIDEO_ID` in the iframe `src` with the real YouTube video ID
   (the part after `v=` in a YouTube URL).

## Preview locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this repository to GitHub:
   ```bash
   git push -u origin main
   ```
2. On GitHub, open the repository → **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`, folder `/ (root)`
   - Click **Save**.
4. Wait a minute or two. The site will be published at:

   `https://xiangsiyu06.github.io/siyu-xiang-portfolio/`

   (The URL is also shown at the top of the Pages settings page once the deploy finishes.)

Any later `git push` to `main` automatically redeploys the site.
