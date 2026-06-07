import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <nav>
        <Link to="/">Home</Link> <Link to="/login">Login</Link>{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Outlet />
    </>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  dashboardRoute,
]);

const router = createRouter({
  routeTree,
});

export function TanStackRouterApp() {
  return <RouterProvider router={router} />;
}
