# Heng Ousa Portfolio

Modern, responsive personal portfolio website for **Heng Ousa** — IT student and aspiring Mobile App / Flutter Developer.

Built with React, Vite, Tailwind CSS, Framer Motion, and full English / Khmer localization plus light / dark themes.

## Features

- Single-page portfolio with smooth scrolling sections
- English & Khmer language switching (persisted)
- Light / Dark / System theme support (persisted)
- Floating glassmorphism settings panel
- Responsive design (mobile-first)
- Static JSON content architecture
- Accessible navigation and interactions
- SEO basics (meta tags, Open Graph)

## Tech Stack

- React 18 + JavaScript (ES6+)
- Vite 5
- Tailwind CSS 3
- React Router DOM
- Framer Motion
- Lucide React icons
- React Helmet Async
- React Context API + localStorage

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

Open the URL shown by Vite (usually `http://localhost:5173`).

## Project Structure

```
src/
├── app/              # App entry & providers
├── components/       # Shared UI (common, layout, settings)
├── contexts/         # Theme & Language contexts
├── data/             # Static portfolio JSON
├── features/         # Section feature components
├── hooks/            # Custom hooks
├── locales/          # en.json & km.json translations
├── pages/            # Page components
├── routes/           # Router setup
├── styles/           # Global styles
└── utils/            # Helpers & constants
```

## Customizing Content

Edit the JSON files in `src/data/`:

- `profile.json` — name, bio, social links, email, CV path
- `skills.json` — skill categories
- `projects.json` — project entries and filters
- `experience.json` — activities & volunteering
- `education.json` — education history

Translations live in `src/locales/en.json` and `src/locales/km.json`.

### Social links & email

Update placeholders in `src/data/profile.json`:

```json
"email": "your.real.email@example.com",
"social": {
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "telegram": "https://t.me/yourusername"
}
```

### CV

Place your PDF at `public/cv/Heng_Ousa_CV.pdf` (or change the path in `profile.json`).

## Theme & Language

Preferences are stored in `localStorage` under:

- `heng-ousa-theme` — `light` | `dark` | `system`
- `heng-ousa-language` — `en` | `km`

## License

MIT
# Portfolio
