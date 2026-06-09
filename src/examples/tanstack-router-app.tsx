import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";

const isAuthenticated = () => localStorage.getItem("mock-auth") === "true";

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

function TanStackHome() {
  return (
    <Home
      renderLink={({ to, className, children }) => (
        <Link className={className} to={to}>
          {children}
        </Link>
      )}
    />
  );
}

function TanStackLogin() {
  const navigate = useNavigate();

  return <Login onLoginSuccess={() => navigate({ to: "/dashboard", replace: true })} />;
}

function TanStackDashboard() {
  const navigate = useNavigate();

  return <Dashboard onLogout={() => navigate({ to: "/login", replace: true })} />;
}

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: TanStackHome,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: TanStackLogin,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/login",
        replace: true,
      });
    }
  },
  component: TanStackDashboard,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  dashboardRoute,
]);

const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function TanStackRouterApp() {
  return <RouterProvider router={router} />;
}
