# Ximing Wang — CV

Source repository for the academic CV published at `https://vexpaer.github.io/cv/`.

## Structure

- `cv.tex` — LaTeX source for the downloadable PDF.
- `index.html` — responsive web version of the CV.
- `styles.css` — web CV styling.
- `.github/workflows/cv-pages.yml` — CI/CD pipeline.

PDF files are intentionally ignored and must not be committed. GitHub Actions compiles `cv.tex` on every pull request and every push to `main`. On `main`, the workflow assembles the static website, adds the generated PDF as `Ximing_Wang_CV.pdf`, and deploys the result to GitHub Pages.

## Updating the CV

1. Update `cv.tex`.
2. Keep the matching web content in `index.html` up to date.
3. Open a pull request. CI verifies that LaTeX compiles, no PDF is tracked, the web CV contains the required content, and the downloadable PDF is generated successfully.
4. Merge to `main` to deploy.

## One-time Pages setting

For the first deployment, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. After that, deployment is automatic.
