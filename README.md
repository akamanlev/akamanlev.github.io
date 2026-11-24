# May Yu Ya Maw: portfolio site

Plain HTML, CSS and JavaScript with no build step. Files:

- `index.html`: layout, styles and interactive features (k-means hero, coursework DataFrame and chart, skill heatmap, project filter, console).
- `data.js`: **all content**. Edit only this file to add modules, projects, jobs or links.

## Add a module
Copy an entry in `modules`, then change `code`, `name`, `year`, `status` (`"Complete"` or `"Enrolled"`), `area`, `summary`, `skills`, `tools` and `projects` (the project ids).

## Add a project
Copy an entry in `projects`. Give it a unique `id`, set `module` to the subject code, which links the two both ways, and add `metrics` (short numbers shown on the card) and `links` (`{ label, url }`, for example GitHub). Set `featured: true` to pin it to the top.

The stats, subject table, skill heatmap and console update on their own.

## Publish for free
Upload `index.html` and `data.js` to a GitHub repository, then turn on **Settings → Pages**. Netlify Drop (drag the folder in) also works.
