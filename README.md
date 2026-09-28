# Limitless

A workout app that builds your training week around your sport, level, equipment and injuries.

- 7 sports and goals: Hypertrophy, Cricket, Football, MMA, Swimming, Older Adults, Triathlon
- 48 coached exercises with cues and animated demos
- Equipment and injury filtering
- Streaks and weekly goals
- Works offline, progress saved on your device
- Light and dark themes

## Run locally

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy on GitHub Pages

1. Push these files to a GitHub repo.
2. Go to **Settings > Pages**.
3. Under **Source**, choose the `main` branch and the `/ (root)` folder, then save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Structure

```
index.html      page markup and intro splash
styles.css      all styles
app.js          app logic and intro animation
assets/
  logo.png      full-resolution logo mark (transparent)
  logo.webp     compressed logo used in the app and favicon
```
