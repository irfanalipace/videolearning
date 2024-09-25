import { Drawer, styled } from "@mui/material";
import React, { useState } from "react";
import TopBar from "./components/Header/TopBar";
import { Outlet } from "react-router";
import NewHeader from "./components/Header/NewHeader";
import Navbar from "./components/NavBar";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;
const StyledRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  // paddingTop: APP_BAR_MOBILE + 24,
  // paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP - 30,
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
  },
}));
const RootLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative flex  h-screen overflow-hidden min-w-screen">
      {/* <TopBar onOpenNav={() => setOpen(true)} /> */}
      <NewHeader open={open} toggleOpen={toggleOpen} />

      <Navbar open={open} onCloseNav={() => setOpen(false)} />

      <div className="w-screen md:w-h-[calc(100vh-280px)] overflow-y-auto h-[calc(100vh-12px)] py-28 px-16 bg-[#F3F6FB]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
