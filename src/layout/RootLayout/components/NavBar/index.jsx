// import PlayCircleIcon from "@mui/icons-material/PlayCircle";
// import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import LegendToggleIcon from "@mui/icons-material/LegendToggle";
// import SettingsIcon from "@mui/icons-material/Settings";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import clsx from "clsx";
// import {
//   MdOutlineKeyboardArrowDown,
//   MdOutlineKeyboardArrowUp,
// } from "react-icons/md";
// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// import { useSelector } from "react-redux";
// const AUTH_KEY = "isAuthenticated";
// import WelcomePopup from "../../../../components/WellcomPopup/WelcomePopup";
// const Navbar = ({ open, onCloseNav }) => {
//   const [selectedId, setSelectedId] = useState(1);
//   const [selectedSubItem, setSelectedSubItem] = useState(0);
//   const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
//   const primumData = "0";
//   const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);
//   console.log(primumData, "primumData");
//   const isAuthenticatedUser = localStorage.getItem(AUTH_KEY);
//   const location = useLocation();
//   const [showPopup, setShowPopup] = useState(false);

//   // Handle opening the popup when "Tutorial" is clicked
//   const handleTutorialClick = () => {
//     setShowPopup(true);
//   };
//   useEffect(() => {
//     const matchingItem = ListData.find((item) => item.to === location.pathname);
//     if (matchingItem) {
//       setSelectedId(matchingItem.id);
//     }
//   }, [location.pathname]);
//   const authenticatedListData = [
//     {
//       id: 49,
//       title: "Try Premium",
//       icon: <WorkspacePremiumIcon />,
//       to: "/Nodownload",
//       show: primumData === "0",
//     },
//     {
//       id: 1,
//       title: "Videos",
//       icon: <PlayCircleIcon />,
//       to: "/videos",
//     },
//     {
//       id: 10,
//       title: "Series",
//       icon: <SmartDisplayIcon />,
//       to: "/series",
//     },
//     {
//       id: 22,
//       title: "Library",
//       icon: <LibraryBooksIcon />,
//       to: "/library",
//     },
//     {
//       id: 23,
//       title: "Progress",
//       icon: <LegendToggleIcon />,
//       to: "/progress",
//     },
 
//     {
//       id: 24,
//       title: "Resources",
//       icon: <AssessmentIcon />,
//       to: "/",
//       subItems: [
//         { id: 241, title: "FAQ", to: "/resources/faq" },
//         { id: 242, title: "Contact Us", to: "" },
//         { id: 244, title: "About Us", to: "/resources/about-us" },
//         { id: 243, title: "Our Method", to: "/resources/our-method" },
//         {
//           id: 247,
//           title: "Tutorial",
//           to: "#",
//           onClick: handleTutorialClick, 
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Settings",
//       icon: <SettingsIcon />,
//       to: "/settings",
//     },
//   ].filter((item) => item.show === undefined || item.show); 

//   const unauthenticatedListData = [
//     {
//       id: 49,
//       title: "Try Premium",
//       icon: <WorkspacePremiumIcon />,
//       to: "/Nodownload",
//       show: primumData === "0",
//     },

//     {
//       id: 1,
//       title: "Videos",
//       icon: <PlayCircleIcon />,
//       to: "/videos",
//     },
//     {
//       id: 11,
//       title: "Series",
//       icon: <SmartDisplayIcon />,
//       to: "/series",
//     },
//     {
//       id: 22,
//       title: "Library",
//       icon: <LibraryBooksIcon />,
//       to: "/un-authentic",
//     },
//     {
//       id: 23,
//       title: "Progress",
//       icon: <LegendToggleIcon />,
//       to: "/un-authentic",
//     },
//     {
//       id: 24,
//       title: "Resources",
//       icon: <AssessmentIcon />,
//       to: "/",
//       subItems: [
//         { id: 241, title: "FAQ", to: "/primum" },
//         { id: 242, title: "Contact Us", to: "/un-authentic" },
//         { id: 243, title: "About Us", to: "/primum" },
//         { id: 244, title: "Our Method", to: "/primum" },
//         {
//           id: 247,
//           title: "Tutorial",
//           to: "#",
//           onClick: handleTutorialClick, // Open the WelcomePopup
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Settings",
//       icon: <SettingsIcon />,
//       to: "/un-authentic",
//     },
//   ].filter((item) => item.show === undefined || item.show);

//   const PrimumVedioData = [
//     {
//       id: 1,
//       title: "Videos",
//       icon: <PlayCircleIcon />,
//       to: "/videos",
//     },
//     {
//       id: 10,
//       title: "Series",
//       icon: <SmartDisplayIcon />,
//       to: "/series",
//     },
//     {
//       id: 22,
//       title: "Library",
//       icon: <LibraryBooksIcon />,
//       to: "/library",
//     },
//     {
//       id: 23,
//       title: "Progress",
//       icon: <LegendToggleIcon />,
//       to: "/progress",
//     },
 
//     {
//       id: 24,
//       title: "Resources",
//       icon: <AssessmentIcon />,
//       to: "/",
//       subItems: [
//         { id: 241, title: "FAQ", to: "/resources/faq" },
//         { id: 242, title: "Contact Us", to: "" },
//         { id: 244, title: "About Us", to: "/resources/about-us" },
//         { id: 243, title: "Our Method", to: "/resources/our-method" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Settings",
//       icon: <SettingsIcon />,
//       to: "/settings",
//     },
//   ];

//   const ListData = isAuthenticatedUser
//     ? authenticatedListData
//     : primumData === "1"
//     ? PrimumVedioData
//     : unauthenticatedListData;

//   const handleItemClick = (item) => {
//     setSelectedId(item.id);
//     setSelectedSubItem(0);
//     if (item.subItems) {
//       setIsSubMenuVisible(!isSubMenuVisible);
//     }
//   };

//   const renderSubMenu = (list) => {
//     if (!list.subItems) return null;

//     return (
//       <div
//         className={clsx("mt-2 flex flex-col gap-2 w-full", {
//           "opacity-100 flex flex-col": isSubMenuVisible,
//           "opacity-0 hidden": !isSubMenuVisible,
//         })}
//       >
//         {list.subItems.map((subItem) => (
//           <div key={subItem.id} className="flex justify-end pr-6">
//             <Link
//               to={subItem.to}
//               onClick={() => setSelectedSubItem(subItem.id)}
//               className={clsx(
//                 "hover:bg-white/30 p-2 w-[70%] font-medium text-white text-[14px] duration-300 cursor-pointer",
//                 { "bg-white/30": selectedSubItem === subItem.id }
//               )}
//             >
//               {subItem.title}
//             </Link>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div
//       className={clsx(
//         "relative left-0 w-[280px] flex flex-col pt-10 gap-3 bg-primary h-[calc(100vh-12px)] z-10 duration-300 overflow-x-hidden overflow-y-auto",
//         {
//           "fixed left-0 top-[72px] lg:top-[47px]": open,
//           "fixed top-0 left-[-100%] lg:top-[47px] md:left-0": !open,
//         }
//       )}
//     >
//       {ListData.map((list, index) => (
//         <div key={index}>
//           <Link
//             to={list.to}
//             onClick={() => handleItemClick(list)}
//             className={clsx(
//               "hover:bg-white/40 p-3 relative font-medium text-white text-[16px] flex items-center pl-10 gap-2 duration-300 cursor-pointer",
//               { "bg-white/40": !selectedSubItem && selectedId === list.id }
//             )}
//           >
//             {list.subItems &&
//               (isSubMenuVisible ? (
//                 <MdOutlineKeyboardArrowUp
//                   size={19}
//                   className="absolute top-1/2 -translate-y-1/2 right-3"
//                 />
//               ) : (
//                 <MdOutlineKeyboardArrowDown
//                   size={19}
//                   className="absolute top-1/2 -translate-y-1/2 right-3"
//                 />
//               ))}
//             {list.icon}
//             {list.title}
//           </Link>
//           {renderSubMenu(list)}
//         </div>
//       ))}

//       {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
//     </div>
//   );
// };

// export default Navbar;




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
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useSelector } from "react-redux";
const AUTH_KEY = "isAuthenticated";
import WelcomePopup from "../../../../components/WellcomPopup/WelcomePopup";

const Navbar = ({ open, onCloseNav }) => {
  const [selectedId, setSelectedId] = useState(1);
  const [selectedSubItem, setSelectedSubItem] = useState(0);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const primumData = "0";
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);
  const isAuthenticatedUser = localStorage.getItem(AUTH_KEY);
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const handleTutorialClick = () => {
    setShowPopup(prevState => !prevState); // Toggle the popup visibility
  };
  
  useEffect(() => {
    console.log("showPopup changed:", showPopup);
  }, [showPopup]);
  
  

  useEffect(() => {
    const matchingItem = ListData.find((item) => item.to === location.pathname);
    if (matchingItem) {
      setSelectedId(matchingItem.id);
    }
  }, [location.pathname]);

  const authenticatedListData = [
    {
      id: 49,
      title: "Try Premium",
      icon: <WorkspacePremiumIcon />,
      to: "/Nodownload",
      show: primumData === "0",
    },
    {
      id: 1,
      title: "Videos",
      icon: <PlayCircleIcon />,
      to: "/videos",
    },
    {
      id: 10,
      title: "Series",
      icon: <SmartDisplayIcon />,
      to: "/series",
    },
    {
      id: 22,
      title: "Library",
      icon: <LibraryBooksIcon />,
      to: "/library",
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
        { id: 241, title: "FAQ", to: "/resources/faq" },
        { id: 242, title: "Contact Us", to: "" },
        { id: 244, title: "About Us", to: "/resources/about-us" },
        { id: 243, title: "Our Method", to: "/resources/our-method" },
        {
          id: 247,
          title: "Tutorial",
          to: "#",
          onClick: handleTutorialClick, 
        },
      ],
    },
   
  ].filter((item) => item.show === undefined || item.show);

  const unauthenticatedListData = [
    {
      id: 49,
      title: "Try Premium",
      icon: <WorkspacePremiumIcon />,
      to: "/Nodownload",
      show: primumData === "0",
    },
    {
      id: 1,
      title: "Videos",
      icon: <PlayCircleIcon />,
      to: "/videos",
    },
    {
      id: 11,
      title: "Series",
      icon: <SmartDisplayIcon />,
      to: "/series",
    },
    {
      id: 22,
      title: "Library",
      icon: <LibraryBooksIcon />,
      to: "/un-authentic",
    },
    {
      id: 23,
      title: "Progress",
      icon: <LegendToggleIcon />,
      to: "/un-authentic",
    },
    {
      id: 24,
      title: "Resources",
      icon: <AssessmentIcon />,
      to: "/",
      subItems: [
        { id: 241, title: "FAQ", to: "/primum" },
        { id: 242, title: "Contact Us", to: "/un-authentic" },
        { id: 243, title: "About Us", to: "/primum" },
        { id: 244, title: "Our Method", to: "/primum" },
        {
          id: 247,
          title: "Tutorial",
          to: "#",
          onClick: handleTutorialClick, 
        },
      ],
    },

  ].filter((item) => item.show === undefined || item.show);

  const PrimumVedioData = [
    {
      id: 1,
      title: "Videos",
      icon: <PlayCircleIcon />,
      to: "/videos",
    },
    {
      id: 10,
      title: "Series",
      icon: <SmartDisplayIcon />,
      to: "/series",
    },
    {
      id: 22,
      title: "Library",
      icon: <LibraryBooksIcon />,
      to: "/library",
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
        { id: 241, title: "FAQ", to: "/resources/faq" },
        { id: 242, title: "Contact Us", to: "" },
        { id: 244, title: "About Us", to: "/resources/about-us" },
        { id: 243, title: "Our Method", to: "/resources/our-method" },
      ],
    },

  ];

  const ListData = isAuthenticatedUser
    ? authenticatedListData
    : primumData === "1"
    ? PrimumVedioData
    : unauthenticatedListData;

  const handleItemClick = (item) => {
    setSelectedId(item.id);
    setSelectedSubItem(0);
    if (item.subItems) {
      setIsSubMenuVisible(!isSubMenuVisible);
    }
  };

  const renderSubMenu = (list) => {
    if (!list.subItems) return null;

    return (
      <div
        className={clsx("mt-2 flex flex-col gap-2 w-full", {
          "opacity-100 flex flex-col": isSubMenuVisible,
          "opacity-0 hidden": !isSubMenuVisible,
        })}
      >
        {list.subItems.map((subItem) => (
          <div key={subItem.id} className="flex justify-end pr-6">
            <Link
              to={subItem.to}
              onClick={() => {
                setSelectedSubItem(subItem.id);
                if (subItem.onClick) subItem.onClick(); // Execute the onClick when "Tutorial" is clicked
              }}
              className={clsx(
                "hover:bg-white/30 p-2 w-[70%] font-medium text-white text-[14px] duration-300 cursor-pointer",
                { "bg-white/30": selectedSubItem === subItem.id }
              )}
            >
              {subItem.title}
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "relative left-0 w-[280px] flex flex-col pt-10 gap-3 bg-primary h-[calc(100vh-12px)] z-8 duration-300 overflow-x-hidden overflow-y-auto",
        {
          "fixed left-0 top-[72px] lg:top-[47px]": open,
          "fixed top-0 left-[-100%] lg:top-[47px] md:left-0": !open,
        }
      )}
    >
      {ListData.map((list, index) => (
        <div key={index}>
          <Link
            to={list.to}
            onClick={() => handleItemClick(list)}
            className={clsx(
              "hover:bg-white/40 p-3 relative font-medium text-white text-[16px] flex items-center pl-10 gap-2 duration-300 cursor-pointer",
              { "bg-white/40": !selectedSubItem && selectedId === list.id }
            )}
          >
            {list.subItems &&
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
          {renderSubMenu(list)}
        </div>
      ))}

      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}

    </div>
  );
};

export default Navbar;
