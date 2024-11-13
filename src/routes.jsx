

import { Navigate, useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Nodownload from "./layout/RootLayout/components/Nodownload";
import WelcomePopup from "./components/WellcomPopup/WelcomePopup";
import UnauthenticatedMessage from "./components/unauthenticatedMessage/AnauthenticatedMessage";
import Primuim from "./components/Primuim/Primuim";

export default function Router() {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  useEffect(() => {

    const isWelcomePopupShown = localStorage.getItem("welcomePopupShown");

    if (!isWelcomePopupShown) {
      setShowWelcomePopup(true);
     
      localStorage.setItem("welcomePopupShown", "true");
    }
  }, []);

  let element = useRoutes([
    { path: "/subscriptions", element: <PremiumMembership /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <Signup /> },
    { path: "/price", element: <Price /> },
    { path: "otp-authentication", element: <OtpAuthentications /> },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Navigate to="/videos" replace /> },
        { path: "videos", element: <WatchVideos /> },
        { path: "series", element: <WatchSeries /> },
        { path: "no-vedio", element: <NoVideo /> },
        { path: "vedio-list", element: <VideoList /> },
        { path: "series-list", element: <MySeriesList /> },
        { path: "watch-series-two", element: <WatchSeriesTwo /> },
        { path: "watch-history", element: <WatchHistory /> },
        { path: "notifications", element: <Notification /> },
        { path: "resources/about-us", element: <AboutUs /> },
        {
          path: "series-phase-two",
          element: <WatchSeriesSecondScreen />,
        },
        { path: "resources/faq", element: <FAQ /> },
        { path: "resources/our-method", element: <TeachingMethod /> },
        { path: "resources/vedio-plateform", element: <VedioPlateform /> },
        { path: "resources/subscriptions", element: <PreSubscriptions /> },
        { path: "library", element: <WatchLibrary /> },
        { path: "library", element: <Library /> },
        { path: "progress", element: <Progress /> },
        { path: "bignners", element: <Bignner /> },
        { path: "settings", element: <Settings /> },
        { path: "Nodownload", element: <Nodownload /> },
        { path: "un-authentic", element: <UnauthenticatedMessage /> },
        { path: "primum", element: <Primuim /> },
      ],
    },
    { path: "verify-email", element: <VerifyEmail /> },
    { path: "auth-success", element: <AuthticationSuccess /> },
  ]);


  return (
    <>
      {showWelcomePopup && <WelcomePopup />}
      {element}
    </>
  );
}
