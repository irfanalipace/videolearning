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
import WatchSeriesTwo from "./Views/WatchSeriesTwo/WatchSeries";
import WatchSeriesSecondScreen from "./Views/WatchSeriesSecondScreen";
import WatchHistory from "./Views/WatchLibrary/WatchHistory";
import Notification from "./layout/RootLayout/components/Notification";
import FAQ from "./Views/Resources/FAQ";
import AboutUs from "./Views/Resources/AboutUs";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <WatchVideos /> },
        { path: "watch-series", element: <WatchSeries /> },
        { path: "no-vedio", element: <NoVideo /> },
        { path: "vedio-list", element: <VideoList /> },
        { path: "series-list", element: <MySeriesList /> },
        { path: "watch-series-two", element: <WatchSeriesTwo /> },
        { path: "watch-history", element: <WatchHistory /> },
        { path: "notifications", element: <Notification />},
        { path: "resources/about-us", element: <AboutUs />},
        {
          path: "watch-series-phase-two",
          element: <WatchSeriesSecondScreen />,
        },
        { path: "resources/faq", element: <FAQ /> },
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
