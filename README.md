# Harbour Tutoring website

A single-page, mobile-responsive site built with React, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev      # start a local dev server
npm run build    # production build in dist/
```

## Editing

- Page sections live in `src/components/` (`Hero`, `WhyChooseUs`, `About`, `Services`, `Pricing`, `Contact`, `Footer`).
- Brand colours and the font are set once in `src/index.css` (`@theme` block).
- Placeholders to replace: the team photo (`About.jsx`), the Google Maps box (`Contact.jsx`) and the social links (`Footer.jsx`).

## Deploying

Netlify builds the site with `npm run build` and publishes `dist/` (see `netlify.toml`).
Contact form submissions go to Netlify Forms and show up in the Netlify dashboard under **Forms**.
In local dev the form only simulates a successful send.
