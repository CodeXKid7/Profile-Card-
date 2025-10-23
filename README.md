# Frontend Wizards — Stage 1 (Fresh Drip Theme)

This is a simple 3-page static site built for the Frontend Wizards Stage 1 task.
It includes:
- `index.html` — Profile card (landing)
- `about.html` — About Me page with semantic sections
- `contact.html` — Contact form with validation and accessibility
- `style.css` — Shared styles (glassmorphism + drip)
- `script.js` — Client-side validation logic

## Features & Acceptance
- All required `data-testid` attributes are present for testing.
- Contact form validation:
  - All fields required
  - Email format checked
  - Message minimum length 10 characters
  - Error messages tied with `aria-describedby`
  - Success message shown only on valid submission
- Semantic HTML (`<main>`, `<section>`, headings).
- Accessible labels, ARIA attributes, and keyboard navigability.
- Responsive across mobile/tablet/desktop.

## How to use
1. Download the repository and unzip.
2. Open `index.html` in a browser (or host on GitHub Pages / Netlify).
3. To deploy: upload the folder or the produced `.zip` to your hosting provider.

## Deployment
- For GitHub Pages: push the files to a repository and enable Pages from the `main` branch.
- For Netlify: drag & drop the unzipped folder to Netlify or connect repository.

