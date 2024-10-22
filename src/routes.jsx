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
import VedioPlateform from "./Views/Resources/VedioPlateform";
import PreSubscriptions from "./Views/Resources/PreSubscriptions";
import Price from "./Views/Payment/Price";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";

export default function Router() {
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);
  // console.log(isAuthenticated, 'hh+++++++++++')
  let element = useRoutes([
    { path: "/subscriptions", element: <PremiumMembership /> },
    { path: "/", element: <SignIn /> },
    { path: "/sign-up", element: <Signup /> },
    { path: "/price", element: <Price /> },
    { path: "otp-authentication", element: <OtpAuthentications /> },
        {element : <ProtectedRoutes isLogged={isAuthenticated}/>, children:[
          {
            path:"/",
            element: <RootLayout />,
            children :[
              { path: "watch-videos", element: <WatchVideos /> },
              { path: "watch-series", element: <WatchSeries /> },
              { path: "no-vedio", element: <NoVideo /> },
              { path: "vedio-list", element: <VideoList /> },
              { path: "series-list", element: <MySeriesList /> },
              { path: "watch-series-two", element: <WatchSeriesTwo /> },
              { path: "watch-history", element: <WatchHistory /> },
              { path: "notifications", element: <Notification /> },
              { path: "resources/about-us", element: <AboutUs /> },
              {
                path: "watch-series-phase-two",
                element: <WatchSeriesSecondScreen />,
              },
              { path: "resources/faq", element: <FAQ /> },
              { path: "resources/teaching-method", element: <TeachingMethod /> },
              { path: "resources/vedio-plateform", element: <VedioPlateform /> },
              { path: "resources/subscriptions", element: <PreSubscriptions /> },
              { path: "watch-library", element: <WatchLibrary /> },
              { path: "library", element: <Library /> },
              { path: "progress", element: <Progress /> },
              { path: "bignners", element: <Bignner /> },
              { path: "settings", element: <Settings /> },
            ]
          }
       
        ]},
        
        { path: "verify-email", element: <VerifyEmail /> },
        { path: "auth-success", element: <AuthticationSuccess /> },
  ]);
  return element;
}
