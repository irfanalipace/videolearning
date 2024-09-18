import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import SettingsIcon from "@mui/icons-material/Settings";
import clsx from "clsx";

import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NewNavbar = ({ open, onCloseNav }) => {
  const [selectedId, setSelectedId] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const matchingItem = ListData.find((item) => item.to === location.pathname);
    if (matchingItem) {
      setSelectedId(matchingItem.id);
    }
  }, [location.pathname]);

  const ListData = [
    {
      id: 1,
      title: "Watch Videos",
      icon: <PlayCircleIcon />,
      to: "/watch-videos",
    },
    {
      id: 11,
      title: "Watch Series",
      icon: <SmartDisplayIcon />,
      to: "/watch-series",
    },
    {
      id: 22,
      title: "Watch Library",
      icon: <LibraryBooksIcon />,
      to: "/watch-library",
    },
    {
      id: 23,
      title: "Progress",
      icon: <LegendToggleIcon />,
      to: "/progress",
    },
    {
      id: 2,
      title: "Settings",
      icon: <SettingsIcon />,
      // to: "/admin/new-invoices",
    },
  ];
  return (
    <div
      className={clsx(
        "relative  left-0  w-[280px] flex flex-col pt-10 gap-3 bg-primary h-[calc(100vh-12px)] z-10 duration-300 overflow-x-hidden overflow-y-auto",
        {
          "fixed  left-0 top-[72px] lg:top-[92px]": open,
          "fixed top-0 left-[-100%] lg:top-[92px]  md:left-0": !open,
        }
      )}
    >
      {/* <RxCross2
        onClick={onCloseNav}
        className=" md:hidden w-[158px] h-[25px] absolute -right-8 top-2 cursor-pointer transition-all duration-300 text-white font-semibold"
      /> */}
      {ListData?.map((list, index) => (
        <Link
          key={index}
          to={list.to}
          onClick={() => setSelectedId(list.id)}
          className={clsx(
            "hover:bg-white/40 p-3 font-medium text-white text-[16px] flex items-center pl-10 gap-2 duration-300 cursor-pointer",
            {
              "bg-white/40": selectedId === list.id,
            }
          )}
        >
          {list.icon}
          {list.title}
        </Link>
      ))}
    </div>
  );
};

export default NewNavbar;
