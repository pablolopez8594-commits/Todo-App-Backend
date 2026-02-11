# QUAL2000 Todo Example Frontend

React + Vite frontend for a Todo app used in QUAL2000. This UI connects to a separate backend API and supports creating, listing, updating, and deleting tasks.

## Features

- Create tasks with title and description
- List tasks as cards with status badges
- Mark tasks as done/open
- Delete tasks
- Light/dark theme toggle with `localStorage` persistence
- Build-time API configuration via Vite env vars

## Tech Stack

- React 19
- Vite 6
- Axios
- ESLint 9

## Prerequisites

- Node.js 20+
- npm
- Running backend API (default local URL: `http://localhost:5700`)

## Environment Variables

Create a `.env` file in repo root:

```env
VITE_API_URL="http://localhost:5700"
VITE_VERSION="green"
```

Notes:
- `VITE_API_URL` is required for production builds.
- In local dev, app falls back to `http://localhost:5700` if `VITE_API_URL` is missing.
- `VITE_VERSION` changes heading accent color (`blue` or `green`).

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the URL shown by Vite (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Project Structure

```text
src/
  Components/
    TodoApp.jsx
    TaskForm.jsx
    TasksContainer.jsx
    TaskCard.jsx
    ThemeToggle.jsx
  App.jsx
  App.css
  index.css
  main.jsx
public/
.github/workflows/
  azure-static-web-apps-thankful-dune-006e5820f.yml
DEPLOY_AZURE_STUDENT.md
```

## Deployment

- Frontend is configured for Azure Static Web Apps via `.github/workflows/azure-static-web-apps-thankful-dune-006e5820f.yml`.
- CI validates `VITE_API_URL` before deploying.
- Full student-focused deployment instructions are in `DEPLOY_AZURE_STUDENT.md`.

## Testing

No automated frontend test suite is currently configured. See `tests/tests.md` for placeholder notes.
