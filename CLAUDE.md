# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

`AGENTS.md` holds the project's Expo rules (check the `expo` major version in `package.json` and fetch the matching versioned docs before touching Expo/RN APIs; use `npx expo install <pkg>` to add dependencies). Read it first.

## Commands

No test runner is configured. `package.json` scripts are only `start`, `android`, `ios`, `web` (all `expo start ...`). Lint and typecheck are not scripts, but AGENTS.md requires running both before finishing a task:

```bash
npx expo lint
npx tsc --noEmit
```

The project uses npm (`package-lock.json`), so use `npx`, not `bunx`.

## Architecture

- Expo Router app (entry is `expo-router/entry`). Routes live in `src/app/`; components go in `src/components/` and hooks in `src/hooks/`, outside the router directory.
- Imports from `src/` use the `@/` alias (`@/components/...`, `@/hooks/...`), configured via `paths` in `tsconfig.json` (Expo resolves it natively; no babel/metro config).
- `src/app/(auth)/` is a route group with a `_layout.tsx` that renders a `<Slot />` (currently a placeholder layout, with no auth logic yet). `canchas/` is a nested Stack inside the Canchas tab: `index.tsx` is served at `/canchas` and `[id].tsx` at `/canchas/<id>` (sample data in `src/data/canchas.ts`).
- The old root `App.tsx` and `index.ts` were deleted in favour of Expo Router.
- TypeScript `strict` mode, extending `expo/tsconfig.base`.
- No `ios/` or `android/` directories: native config is generated, so change it via `app.json` and config plugins only.
- The app is early-stage scaffolding. Spanish domain naming (e.g. `canchas` = courts) is used for routes.
