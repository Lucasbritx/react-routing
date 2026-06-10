# Routing POC

This project is a routing playground for comparing React routing approaches.

The current Vite app demonstrates:

- React Router
- TanStack Router

## Run the Vite Examples

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

## Switch Router Examples

The active router is selected in `src/main.tsx`.

To test the React Router example, use:

```tsx
const routerMode: RouterMode = "react-router";
```

To test the TanStack Router example, change it to:

```tsx
const routerMode: RouterMode = "tanstack-router";
```

## Adding a Next.js Routing Example

Next.js is a separate example app instead of being mixed into the current Vite app.

React Router and TanStack Router are client-side routing libraries that can run inside the same Vite setup. Next.js has its own routing system.

Structure:

```txt
react-routing/
  src/
    examples/
      react-router-app.tsx
      tanstack-router-app.tsx

  next-routing/
    app/
      page.tsx
      login/
        page.tsx
      dashboard/
        page.tsx
    package.json
```

With this structure:

- The root app stays focused on Vite-compatible routing libraries.
- The `next-routing/` app can demonstrate file-based routing, nested layouts, route groups, dynamic routes, loading states, and protected routes the Next.js way.
- Each example keeps its own dependencies and scripts.

## Ideas

- Create a routing app without a library.
- Render different components based on `window.location.pathname`.
- Add a separate `next-routing/` app for Next.js App Router examples. - In progress
