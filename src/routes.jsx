import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import RootLayout from "./layout/RootLayout/RootLayout";
import WatchVideos from "./Views/WatchVideos/WatchVideos";
import WatchSeries from "./Views/WatchSeries/WatchSeries";
import WatchLibrary from "./Views/WatchLibrary/WatchLibrary";
import Library from "./Views/Library/Library";
import Settings from "./Views/Settings/Settings";
import Progress from "./Views/Progress/Progress";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "watch-videos", element: <WatchVideos /> },
        { path: "watch-series", element: <WatchSeries /> },
        { path: "watch-library", element: <WatchLibrary /> },
        { path: "library", element: <Library /> },
        { path: "progress", element: <Progress /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);
  return element;
}
