# BlueMop Facility Services (Next.js 14)

Production-ready static marketing site for **BlueMop Facility Services** built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Build for production

```bash
npm run build
```

This project uses `output: 'export'` in `next.config.mjs` for static output and zero-config Vercel deployment.

## Deploy to Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Keep framework preset as **Next.js**.
4. Deploy (no additional config required).

## Where to edit partner links

Update the `href` values in:

- `data/site.ts`

These values are consumed by both the Partners page and footer links.

## Where to replace/swap the logo

Edit the logo mark and wordmark in:

- `components/logo.tsx`

You can swap the inline SVG icon, text styling, or both.
