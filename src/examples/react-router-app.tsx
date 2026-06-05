import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { ProtectedRoute } from "../routes/protected-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export function ReactRouterApp() {
  return <RouterProvider router={router} />;
}
