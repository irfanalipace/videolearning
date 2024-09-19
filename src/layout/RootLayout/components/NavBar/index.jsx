import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import clsx from "clsx";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = ({ open, onCloseNav }) => {
  const [selectedId, setSelectedId] = useState(1);
  const [selectedSubItem, setSelectedSubItem] = useState(0);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const location = useLocation();

  const selectedItemClick = (item) => {
    setSelectedId(item.id);
    setSelectedSubItem(0);
    if (item.subItems) {
      setIsSubMenuVisible(!isSubMenuVisible);
    }
  };

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
      id: 24,
      title: "Resources",
      icon: <AssessmentIcon />,
      to: "/",
      subItems: [
        {
          id: 241,
          title: "FAQ",
          to: "/resources/faq",
        },
        {
          id: 242,
          title: "About Us",
          to: "/resources/about-us",
        },
        {
          id: 243,
          title: "Teaching Method",
          to: "/resources/teaching-method",
        },
      ],
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
        <div key={index}>
          <Link
            to={list.to}
            onClick={() => selectedItemClick(list)}
            className={clsx(
              "hover:bg-white/40 p-3 relative font-medium text-white text-[16px] flex items-center pl-10 gap-2 duration-300 cursor-pointer",
              {
                "bg-white/40": !selectedSubItem && selectedId === list.id,
              }
            )}
          >
            {!!list.subItems &&
              (isSubMenuVisible ? (
                <MdOutlineKeyboardArrowUp
                  size={19}
                  className="absolute top-1/2 -translate-y-1/2 right-3"
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  size={19}
                  className="absolute top-1/2 -translate-y-1/2 right-3"
                />
              ))}
            {list.icon}
            {list.title}
          </Link>

          {!!list.subItems && (
            <div
              className={clsx("mt-2 flex flex-col gap-2 w-full", {
                " opacity-100 flex flex-col": isSubMenuVisible,
                " opacity-0 hidden": !isSubMenuVisible,
              })}
            >
              {list.subItems.map((subItem) => (
                <div key={subItem.id} className="flex justify-end pr-6 ">
                  <Link
                    to={subItem.to}
                    onClick={() => setSelectedSubItem(subItem.id)}
                    className={clsx(
                      "hover:bg-white/30 p-2  w-[70%] font-medium text-white text-[14px]  duration-300 cursor-pointer",
                      {
                        "bg-white/30": selectedSubItem === subItem.id,
                      }
                    )}
                  >
                    {subItem.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
