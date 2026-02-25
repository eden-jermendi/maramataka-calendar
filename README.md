# Hina o te Maramataka

## Project Overview

Hina o te Maramataka is a React + TypeScript project designed to showcase a Māori lunar calendar with contextual guidance and a personal notes section. The app will eventually pull lunar phase data from an API and map it to traditional maramataka names, energy levels, and daily recommendations.

This project is currently in the **setup phase**: the folder structure and core files are in place, but no functional components or API integrations exist yet.

## Goals

- Display lunar calendar phases with Māori names.
- Provide a short description of energy levels associated with each phase.
- Include daily recommendations based on the phase.

  Stretch:
- Allow users to write and save personal notes tied to each day and lunar phase.
- Maintain a clean, beautiful UI with future potential for backend integration and full-stack capabilities.

## Current Status

- Folder structure created.
- Placeholder files set up for components, hooks, types, API, and pages.
- No functional UI, API calls, or data persistence yet.

## Tech Stack

- React + TypeScript (TSX)
- Tailwind CSS for styling
- Local storage for initial notes persistence
- Placeholder for API integration for lunar phase data

## Next Steps

1. Lock the domain model
- Update LunarDay type.
- Enforce ASCII-only slug IDs.
- Single source of truth.
2.	Align data
- Update dataset.
- Add lunarDaysById lookup map.
3. Add safe selector
- monthId + dayNumber → lunarDay
- Validate and return safe result (no UI crashes).
4. Stub one month
- 5–10 days only.
- All IDs must resolve.
5.	Wire Today + Month
- Use mock { monthId, dayNumber }
- Render via safe lookup.
- No Gregorian logic.
6.	Extend only after stable
- Add ordering, legend, sources.
- Date accuracy is Phase 2.

---

_Note: This project is in early development and all cultural references to maramataka are for educational and personal use. Accuracy will be improved with further research over time._
