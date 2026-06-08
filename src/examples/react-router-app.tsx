import { createBrowserRouter } from "react-router";
import { Link, useNavigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { ProtectedRoute } from "../routes/protected-route";

function ReactRouterHome() {
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

function ReactRouterLogin() {
  const navigate = useNavigate();

  return <Login onLoginSuccess={() => navigate("/dashboard", { replace: true })} />;
}

function ReactRouterDashboard() {
  const navigate = useNavigate();

  return <Dashboard onLogout={() => navigate("/login", { replace: true })} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReactRouterHome />,
  },
  {
    path: "/login",
    element: <ReactRouterLogin />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <ReactRouterDashboard />,
      },
    ],
  },
]);

export function ReactRouterApp() {
  return <RouterProvider router={router} />;
}
