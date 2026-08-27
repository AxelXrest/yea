# Kidvero Landing Page

React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion recreation inspired by the supplied Kidvero reference image.

## Structure

- `src/components/Header.tsx` — responsive navigation
- `src/components/Footer.tsx` — footer
- `src/components/Reveal.tsx` — reusable scroll reveal animation
- `src/components/SectionHeading.tsx` — reusable section heading
- `src/sections/*` — each landing-page section is isolated and easy to replace
- `src/data/content.ts` — programs, teachers, FAQ and blog content
- `src/styles.css` — global theme, decorative shapes and reusable field styles

## Run

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

## Customize

Most future content changes can be made only in `src/data/content.ts`. Images are currently remote Unsplash images so the starter works without adding a large asset bundle. Replace those URLs with your own images when ready.
