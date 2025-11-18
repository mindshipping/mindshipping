Perfect! Here’s a **ready-to-use README** version that you can give to **Vibe Coding Assistance** as a **prompt** to always generate frontend code for your blog app according to your URL structure, theme, and folder conventions.

You can literally copy–paste this as a README or as a prompt template.

---

# 📁 **Vibe Coding Assistance — Next.js Blog App Standard (Prompt)**

This document defines the **official folder structure, URL conventions, theme, and coding standards** for all frontend projects built with **Next.js (App Router), TypeScript, and TailwindCSS**.
Whenever generating code, **Vibe Coding Assistance must follow these rules exactly**, unless explicitly instructed otherwise.

---

## 🌐 **URL Behavior / Routing**

| URL               | Description                                                                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/`               | Home page (visible to everyone). Shows top 5 blog posts in minimal style (title, short description, image, like/comment/share). Only logged-in users can interact. |
| `/posts/[postId]` | Dynamic blog detail page. Users can like, comment, share. Non-logged users can only view.                                                                          |
| `/[username]`     | Dynamic user profile page. Shows user info and user’s posts. Owner can edit details.                                                                               |
| `(auth)/login`    | Login page. Separate layout.                                                                                                                                       |
| `(auth)/register` | Registration page. Separate layout.                                                                                                                                |

---

## 📁 **Folder Structure**

```
src/
 ├── app/
 │    ├── page.tsx                    → Home page (/)
 │    ├── layout.tsx                  → Root layout (theme applied)
 │    ├── posts/[postId]/page.tsx     → Blog detail page
 │    ├── (auth)/layout.tsx           → Auth layout
 │    │     ├── login/page.tsx
 │    │     └── register/page.tsx
 │    ├── (dashboard)/layout.tsx      → User dashboard layout
 │    │     └── settings/page.tsx
 │    └── [username]/page.tsx         → User profile page
 │
 ├── components/
 │    ├── ui/                         → Buttons, Inputs, Cards
 │    ├── layout/                     → Navbar, Footer
 │    ├── posts/                      → PostCard, PostActions, PostDetail, CommentList, CommentForm
 │    └── profile/                    → ProfileHeader, UserPosts
 │
 ├── lib/
 │    ├── api.ts                      → API wrapper
 │    ├── auth.ts                      → Auth helpers
 │    ├── utils.ts                     → Helper functions
 │    ├── ws.ts                        → WebSocket client for real-time updates
 │    └── constants.ts                 → THEME colors, API URLs
 │
 ├── hooks/
 │    ├── useAuth.ts
 │    ├── usePostActions.ts           → like/comment/share logic
 │    └── useProfile.ts
 │
 ├── types/
 │    ├── post.ts
 │    ├── user.ts
 │    └── comment.ts
 │
 ├── styles/
 │    └── globals.css                 → Tailwind + theme setup
 │
 └── public/
      └── images/
```

---

## 🎨 **Theme**

* **Background color:** `#373643`
* **Accent / Brand color:** `#18cb96`

Tailwind config example:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#18cb96",
        background: "#373643"
      }
    }
  }
}
```

Global CSS:

```css
body {
  background-color: #373643;
  color: white;
}
```

---

## 📌 **Rules for Vibe Coding Assistance**

1. **Always use App Router** with `src/app/`
2. **Follow route groups**: `(public)`, `(auth)`, `(dashboard)` for different layouts
3. **Components must not fetch data** — API calls go through `lib/api.ts` or server actions in `/app/api/`
4. **TypeScript must be used everywhere** (`.ts` / `.tsx`)
5. **TailwindCSS for styling**; avoid inline styles
6. **WebSocket logic** centralized in `/lib/ws.ts`
7. **Never mix backend logic inside components**
8. **Dynamic pages**:

   * `/posts/[postId]` → blog detail
   * `/[username]` → profile page

---

## 🧩 **Component Guidelines**

* `PostCard.tsx` → Shows minimal blog info (title, short description, image, like/comment/share buttons)
* `PostActions.tsx` → Handles like/comment/share logic
* `PostDetail.tsx` → Blog detail content
* `CommentList.tsx` → Shows comments
* `CommentForm.tsx` → Add new comment
* `ProfileHeader.tsx` → User profile info
* `UserPosts.tsx` → List of user’s posts

---

## ✅ **Expected Behavior**

* `/` → Home feed, top 5 posts, logged-in users can interact
* `/posts/[postId]` → Full post + interactions
* `/[username]` → Profile page, editable if owner
* All components follow **theme colors**
* All interactions (likes/comments) can be **real-time using WebSockets**

---

This README can now be **used directly as a prompt** for Vibe Coding Assistance to ensure **consistent folder structure, routing, and theme adherence**.

---

If you want, I can also **make a “ready-to-copy prompt template” version** that you can literally paste into Vibe and it will auto-generate files in this structure.

Do you want me to do that next?
