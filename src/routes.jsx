import { useRoutes, Navigate } from "react-router-dom/dist"; // Import Navigate
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
import TeachingMethod from "./Views/Resources/TeachingMethod";
import PremiumMembership from "./Views/Auth/PremiumMembership";
import SignIn from "./Views/Auth/SignIn";
import OtpAuthentications from "./Views/Auth/OtpAuthenticaions";
import VerifyEmail from "./Views/Auth/VerifyEmail";
import AuthticationSuccess from "./Views/Auth/AuthticationSuccess";
import Signup from "./Views/Auth/Signup";
import Price from "./Views/Payment/Price";

export default function Router() {
  let element = useRoutes([
    { path: "/subscriptions", element: <PremiumMembership /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <Signup /> },
    { path: "/price", element: <Price /> },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Navigate to="/watch-videos" replace /> },
        { path: "watch-videos", element: <WatchVideos /> },
        { path: "watch-series", element: <WatchSeries /> },
        { path: "no-vedio", element: <NoVideo /> },
        { path: "vedio-list", element: <VideoList /> },
        { path: "series-list", element: <MySeriesList /> },
        { path: "watch-series-two", element: <WatchSeriesTwo /> },
        { path: "watch-history", element: <WatchHistory /> },
        { path: "notifications", element: <Notification /> },
        { path: "resources/about-us", element: <AboutUs /> },
        { path: "otp-authentication", element: <OtpAuthentications /> },
        { path: "verify-email", element: <VerifyEmail /> },
        { path: "auth-success", element: <AuthticationSuccess /> },
        {
          path: "watch-series-phase-two",
          element: <WatchSeriesSecondScreen />,
        },
        { path: "resources/faq", element: <FAQ /> },
        { path: "resources/teaching-method", element: <TeachingMethod /> },
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
