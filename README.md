# MindShipping Frontend

Minimal App Router experience for the MindShipping blog/community. All content runs on mocked data today so we can focus on nailing the UI/UX and routing while the backend ships later.

## Stack

- Next.js 16 (App Router)
- TypeScript + ESLint
- Tailwind CSS v4 with custom palette in `src/styles/globals.css`

## Structure

```
src/
 ├─ app/
 │   ├─ (public)/        → feed, posts, profiles
 │   ├─ (auth)/          → login + register layout
 │   └─ (dashboard)/     → creator settings
 ├─ components/          → layout, posts, profile, UI primitives
 ├─ hooks/               → auth/profile/post actions
 ├─ lib/                 → mock API/auth/utils/ws
 └─ styles/              → global theme + utilities
```

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Routes

- `/` – MindShipping home feed with featured posts and tags
- `/posts/[postId]` – Post detail with likes, comments, share CTA
- `/[username]` – Profile page with stats + recent essays
- `/login` & `/register` – Auth forms on standalone layout
- `/settings` – Dashboard scaffold for upcoming creator tools

## Notes

- Brand colors: background `#373643`, accent `#18cb96`
- Assets live in `public/images`; favicon comes from `src/app/icon.svg`
- Mock data + API helpers are centralized in `src/lib/constants.ts` and `src/lib/api.ts`