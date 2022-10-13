import React from "react";

const PlaylistPage = React.lazy(() => import("./Pages/Playlist"));
const MyPlayListPage = React.lazy(() => import("./Pages/My-Playlist"));
const DiscoverPage = React.lazy(() => import("./Pages/Discover"));
const LibraryPage = React.lazy(() => import("./Pages/Library"));
const RecentPage = React.lazy(() => import("./Pages/Recent"));
const LikePage = React.lazy(() => import("./Pages/LikeSong"));

export const APPROUTES = {
  PlaylistPage: {
    id: "2",
    element: PlaylistPage,
    path: "playlist",
  },
  MyPlayListPage: {
    id: "3",
    element: MyPlayListPage,
    path: "myplaylist",
  },
  DiscoverPage: {
    id: "4",
    element: DiscoverPage,
    path: "discovery",
  },
  LibraryPage: {
    id: "5",
    element: LibraryPage,
    path: "library",
  },
  RecentPage: {
    id: "6",
    element: RecentPage,
    path: "recent",
  },
  LikePage: {
    id: "6",
    element: LikePage,
    path: "likesong",
  },
};
