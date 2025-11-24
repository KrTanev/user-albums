import type { RouteObject } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { UsersPage } from "./pages/UsersPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
];
