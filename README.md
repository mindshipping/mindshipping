# MindShipping Frontend

Internal UI powering the MindShipping social platform. This repository stays private and is not meant for public distribution or open-source sharing.

## How we run it

- Install dependencies once with `npm install`.
- Set `NEXT_PUBLIC_BACKEND_ROOT_URL` in `.env` to whichever backend namespace you want this build to talk to (prod, staging, or local).
- Use `npm run dev` for local work. `npm run lint` / `npm run build` are available when you need them.

## Notes for the team

- Keep assets and brand files inside `public/` as usual.
- Treat the `.env` file and this repo as confidential—nothing here should be published externally.