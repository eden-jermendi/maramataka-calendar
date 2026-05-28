# Hina o te Maramataka

## Screenshot

![screenshot](./docs/screenshots/maramataka-screenshot.png)

## Project Overview

Hina o te Maramataka is a full-stack React + TypeScript web application designed to showcase a traditional Māori lunar calendar (Maramataka) with contextual guidance and a pattern-tracking personal reflection journal. The app maps real-world Gregorian dates to corresponding lunar phases, energy levels, and daily recommendations using a custom-built, time-aware calculation engine.

## Features

- **Time-Aware Engine**: Automatically maps Gregorian dates to the correct lunar phases for any day between 2024 and 2027 using verified lunar month anchors.
- **Consistent Grid Calendar**: An elegant month calendar grid featuring perfectly uniform cell sizes (`h-[95px]`), absolutely positioned day numbers, and consistent vertical spacing for energy circles and day names to prevent layout shifts.
- **Cultural Grounding**: Integrated guidance based on Māori lunar phases featuring High, Medium, and Low energy indicators, whakataukī, and activity recommendations (e.g. planting, fishing, reflection).
- **Private Reflections**: A personal journaling system allowing users to write, review, and persist text reflections anchored to specific lunar phases.
- **Tailwind CSS v4 UI**: A fully refactored, beautiful deep-blue thematic interface with curated dark colors, glassmorphic legend styling, and smooth nav controls.

## Tech Stack

### Frontend
- **Framework**: React 19 + TypeScript (TSX)
- **Routing**: React Router Dom v7
- **Styling**: Tailwind CSS v4 (natively integrated via `@tailwindcss/vite` with theme-tailored design tokens)
- **Service Layer**: Asynchronous API client with a resilient local mock data fallback for robust standalone operation.

### Backend
- **Server**: Node.js + Express API server (running on port `3001` with CORS support)
- **Database**: SQLite3 (persisted locally inside the `server/dev.sqlite3` container)
- **Query Builder**: Knex.js (used for structured schema migrations and complete 2024–2027 lunar cycle seed seeding)

## Current Status

- [x] **MVP 1: Foundation**: Domain models, static data seeding, and basic dynamic lookup.
- [x] **MVP 2: Core Experience**: Routing, Interactive Month Grid, and text reflections.
- [x] **Tailwind CSS v4 Migration**: Styled refactoring of all components using modern utility classes.
- [x] **Full-Stack Database Setup**: Transited from LocalStorage to a fully seed-complete SQLite database with Knex migrations and Express server integration.
- [ ] **Authentication**: Transition to a secure multi-user login and cloud-synced reflection storage.
- [ ] **MVP 3: Advanced Insight**: Comparison of patterns and reflections across multiple cycles of the same lunar day, data exports, and enhanced route transition animations.

## Next Steps

1. **User Authentication & Cloud Storage**
   - Add simple user auth to transition the local reflections database to individual cloud-synced accounts.
2. **Cycle Comparison & Insights**
   - Implement a dashboard that lets users compare journaling notes captured across multiple cycles of the same lunar day (e.g., comparing current Ōhua reflections to past Ōhua phases).
3. **Enhanced UI Transitions**
   - Introduce smooth page-level transitions and animations for calendar and day views.

---

*Note: Cultural references to Maramataka are for educational and personal use, informed by verified lunar calendar anchors and community resources. Date mappings are carefully calculated using Gregorian-to-Lunar anchoring (DD-MM-YYYY).*
