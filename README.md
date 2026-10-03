# mramazan.dev

Personal portfolio of **Muhammad Ramazan**, Full Stack Software Engineer.
Live at [mramazan.dev](https://mramazan.dev).

Built with Next.js 15 (App Router), TypeScript and Tailwind CSS. The page is statically rendered, supports light and dark themes, and ships very little client-side JavaScript.

## Editing content

All copy lives in one file: [`src/data/profile.ts`](src/data/profile.ts). Experience, skills, testimonials, education and certifications are plain data, so updating the site rarely means touching a component.

- **Résumé:** `public/CV.pdf` is generated from the same data. After editing `profile.ts`, run `npm run cv` (needs `pdflatex` with the `fontawesome5`, `paracol` and `titlesec` packages, e.g. TeX Live). It writes `cv/cv.tex` from the layout in `cv/preamble.tex` and copies the compiled PDF to `public/CV.pdf`. The `phone` and `cvSummary` fields in `profile.ts` are used only by the CV.
- **Certificates:** add images to `public/certificates/` and reference them from `certificates` in `profile.ts`.

## Structure

```
src/
  app/                  layout, page, Open Graph image, sitemap, robots
  components/sections/  one component per page section
  components/ui/        small shared pieces (theme toggle, contact form, certificate viewer, ...)
  data/profile.ts       all site content
cv/                     generated LaTeX CV (preamble.tex is the hand-written layout)
scripts/generate-cv.mts builds cv/cv.tex from profile.ts
```

## Running locally

```bash
npm install
cp env-example .env   # optional: contact form and analytics
npm run dev
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Contact form delivery via [EmailJS](https://www.emailjs.com/). Template params: `from_name`, `from_email`, `reply_to`, `message`, `to_email`. |
| `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` | Optional [PostHog](https://posthog.com/) analytics. Skipped when the key is not set. |

```bash
npm run lint
npm run build
```

## License

[MIT](LICENSE)
