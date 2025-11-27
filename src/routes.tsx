import type { RouteObject } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { UsersPage } from "./pages/UsersPage";
import { AlbumsPage } from "./pages/AlbumsPage";
import { PhotosPage } from "./pages/PhotosPage";
import { FavouritesPage } from "./pages/FavouritesPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: `users/:id/albums`,
    element: <AlbumsPage />,
  },
  {
    path: "/albums",
    element: <AlbumsPage />,
  },
  {
    path: "/albums/:id/photos",
    element: <PhotosPage />,
  },
  {
      path: "/favourites",
    element: <FavouritesPage />,
  },
];
