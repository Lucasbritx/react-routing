import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { Home } from "./pages/home";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { ProtectedRoute } from "./routes/protected-route";

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

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
