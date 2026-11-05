# React Developer Portfolio

Vite + React 18 + TypeScript. Light and dark themes follow the visitor's system setting.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Edit your content

All text lives in `src/data.ts`. Replace everything in [brackets]: name, email, phone, LinkedIn, GitHub and the LingoRefresh links. Colors and fonts are tokens at the top of `src/index.css`.

## Deploy (free)

**Vercel or Netlify:** push this folder to GitHub, import the repo, and use the defaults (build command `npm run build`, output folder `dist`).

**GitHub Pages:** add `base: "/your-repo-name/"` to `vite.config.ts`, run `npm run build`, and publish the `dist` folder.

## Before you publish

- Confirm your employer allows you to describe IBoost and Zebu Taxi publicly.
- Never add credentials, test logins or internal URLs to this site.
- Update the `<title>` and description in `index.html`.
