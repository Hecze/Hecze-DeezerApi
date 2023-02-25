import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import AlbumPage from "./routes/AlbumPage";
import Music from "./routes/Music";

import store from "./app/store";
import { Provider } from "react-redux";


import Song from "./components/Song";

import PlaylistPage from "./routes/PlaylistPage";
import SearchResultsPage from "./routes/SearchResultsPage";
import FavoritesPage from "./routes/FavoritesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/album/:id",
    element: <AlbumPage />,
  },
  {
    path: "/playlist/:id",
    element: <PlaylistPage />,
  },
  {
    path: "/music/:id",
    element: <Music />,
  },

  {
    path: "searchResults/:id",
    element: <SearchResultsPage/>,
  },
  {
    path: "favorites",
    element: <FavoritesPage/>,
  },
  {
    path: "*",
    element: <Home />,
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Song></Song>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
