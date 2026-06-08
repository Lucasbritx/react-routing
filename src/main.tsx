import ReactDOM from "react-dom/client";
import type { ReactNode } from "react";
import "./index.css";
import { ReactRouterApp } from "./examples/react-router-app";
import { TanStackRouterApp } from "./examples/tanstack-router-app";

type RouterMode = "react-router" | "tanstack-router";

const routerMode: RouterMode = "react-router";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

const routerApps: Record<RouterMode, ReactNode> = {
  "react-router": <ReactRouterApp />,
  "tanstack-router": <TanStackRouterApp />,
};

ReactDOM.createRoot(root).render(routerApps[routerMode]);
