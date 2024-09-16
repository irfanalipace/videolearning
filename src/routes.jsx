import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import RootLayout from "./layout/RootLayout/RootLayout";
import WatchVideos from "./Views/WatchVideos/WatchVideos";
import WatchSeries from "./Views/WatchSeries/WatchSeries";
import WatchLibrary from "./Views/WatchLibrary/WatchLibrary";
import Library from "./Views/Library/Library";
import Settings from "./Views/Settings/Settings";
import Progress from "./Views/Progress/Progress";
import Bignner from "./Views/WatchVideos/Bignner";
import NoVideo from "./Views/WatchLibrary/NoVideo";
import VideoList from "./Views/WatchLibrary/VideoList";
import MySeriesList from "./Views/WatchLibrary/MySeriesList";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "watch-videos", element: <WatchVideos /> },
        { path: "watch-series", element: <WatchSeries /> },
        { path: "no-vedio", element: <NoVideo /> },
        { path: "vedio-list", element: <VideoList /> },
        { path: "series-list", element: <MySeriesList /> },
        { path: "watch-library", element: <WatchLibrary /> },
        { path: "library", element: <Library /> },
        { path: "progress", element: <Progress /> },
        { path: "bignners", element: <Bignner /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);
  return element;
}
