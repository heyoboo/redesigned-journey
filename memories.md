# Project Memories: HEYOBOO Astro Blog

## Context

* I (yo) am currently experimenting with Astro and Next.js but can't choose which to start first.
* I am currently disabled and unable to sit and use the computer, so I'm relying on the AI assistant to help build this project.

## Project Goal

*   Create a personal blog named "HEYOBOO" using Astro.
*   Target audience: Software engineering fellows.
*   Content will include technical reviews, project thoughts and progress, a life journal, and a portfolio.
* The current focus is the life journal.
* Have an about page.

## Key Decisions

*   **Project Name:** HEYOBOO
*   **Framework:** Astro
*   **Styling:** Tailwind CSS
* **Content format:** MDX
*   **Comments:** Giscus
*   **Themes:** Dark (very dark blue background) and Light (white background).
*   **Primary Color:** Default: Dodgerblue (user-customizable).
*   **Secondary Color:** Something darker than Dodgerblue (user-customizable).
* **Layout**
    * **Portfolio page:** Should be a page that has your projects and their descriptions.
    * **About page:** Should be a page with info about you.

## Setup Steps

1.  Created Astro project with `npx create-astro@latest HEYOBOO --template minimal`.
2.  Installed project dependencies with `npm install`.
3.  Added Tailwind CSS with `npx astro add tailwind`.
4.  Added MDX with `npx astro add mdx`.

## Next Steps

1.  Modify `global.css` to configure dark and light themes.
2.  Create `Layout.astro` for the base site layout.
3.  Create `about.astro` page.
4. Create portfolio folder.
5.  Modify `index.astro` to use the new `Layout` and include basic home content.

## Important notes

* This file will be used to keep the memories of the project.
* this is not a perfect log, because I can't keep memory between sessions.