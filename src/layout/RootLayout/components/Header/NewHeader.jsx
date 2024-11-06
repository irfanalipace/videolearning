// import SearchInput from "./SearchInput";
// import { IconButton, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import logo from "../../../../assets/picture/video-based.jpg"
// const NewHeader = ({ open, toggleOpen, onLogout }) => {
//   const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);
//   const dispatch = useDispatch()
//   const handleLogout = () => {
//     dispatch(
//       { type: "LOGOUT_SUCCESS" }
//     )
//   }

//   return (
//     <header className="px-5 py-2 fixed top-0 z-20 w-full bg-white shadow md:flex md:items-center md:justify-between">
//       <div className="w-[280px] flex items-center justify-center">
//          <img
//           src={logo}
//           className="hidden md:block w-[158px] h-[75px] object-contain"
//         />
//       </div>

//       <div className="flex items-center justify-between w-full px-2">
//         <div
//           className="pl-3 block md:hidden hover:scale-110 rounded-full cursor-pointer transition-all duration-300"
//           onClick={toggleOpen}
//         >
//           {open ? (
//             <RxCross2 className="w-[158px] h-[25px]" />
//           ) : (
//             <GiHamburgerMenu className="w-[158px] h-[25px]" />
//           )}
//         </div>

//         <div className="pl-3 hidden md:block hover:scale-110 rounded-full cursor-pointer transition-all duration-300">
//           <SearchInput />
//         </div>
//         <div className="flex items-center gap-2">
//           {!isAuthenticated ? (
//             <>
//               <Button
//                 sx={{ textTransform: "none" }}
//                 color="secondary"
//                 variant="outlined"
//                 component={Link}
//                 to="/sign-up"
//               >
//                 Sign up
//               </Button>
//               <Button
//                 sx={{ textTransform: "none" }}
//                 color="secondary"
//                 variant="contained"
//                 component={Link}
//                 to="/sign-in"
//               >
//                 Sign in
//               </Button>
//             </>
//           ) : (
// <Button
//   sx={{ textTransform: "none" }}
//   color="secondary"
//   variant="contained"
//   onClick={handleLogout}
//   >
//   Log out
// </Button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NewHeader;

import SearchInput from "./SearchInput";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../../assets/picture/video-based.jpg";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { useNavigate } from "react-router-dom";
import { Remove } from "@mui/icons-material";
const NewHeader = ({ open, toggleOpen }) => {
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticatedUser = localStorage.getItem("isAuthenticated"); 
  const handleLogout = () => {
    const token = localStorage.getItem("token");
  
    if (token) {
      localStorage.removeItem("token");

      localStorage.removeItem("isAuthenticated");
      navigate("/sign-in");

      console.log("User logged out successfully");
    } else {
      console.log("No token found, user might not be logged in");
    }
  };

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        boxShadow: 1,
        padding: "3px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 20,
      }}
    >
      <Box sx={{ width: "20%" }}>
        <img
          src={logo}
          alt="image"
          style={{ width: "120px", marginLeft: "30px" }}
        />
      </Box>
      <Toolbar sx={{ justifyContent: "space-between", width: "80%" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SvgIcon
            viewBox="0 0 1024 1024"
            sx={{
              fontSize: 40,
              color: "currentColor",
              mr: 2,
              background: "#6354b1",
              padding: "8px",
              borderRadius: "4px",
              color: "white",
            }}
          >
            <path d="M876.6 480.975h112.502v56.251h-112.502v-56.251zM29.1 480.975h112.5v56.251h-112.5v-56.251zM228.793 749.619l39.769 39.767-79.542 79.544-39.769-39.767 79.543-79.544zM785.674 749.614l79.534 79.539-39.772 39.772-79.534-79.539 39.772-39.772zM481 876.6h56.247v112.502h-56.247v-112.502zM714.977 364.163c-36.562-50.062-58.501-105.75-63.56-162.563h-284.635c-4.495 58.5-25.308 113.62-59.063 156.938-46.683 61.313-62.433 139.495-43.87 215.435 25.809 105.882 122.602 190.126 244.688 190.126 138.896 0 253.691-111.672 253.691-253.124 0-52.875-16.317-103.5-47.252-146.812zM368.5 29.1h281.248v116.25h-281.248v-116.25z"></path>
          </SvgIcon>
          <Typography component="div" sx={{}}>
            Sign up now to not lose your progress.
          </Typography>
        </Box>

        {/* Right Side Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{ background: "#ff9301" }}
            component={Link}
            to="/sign-up"
          >
            Sign up
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/sign-in"
            sx={{ background: "#fff5e7", color: "#ff9301", border: "none" }}
          >
            Log in
          </Button>
       
         
        </Box>
      </Toolbar>
    </Box>
  );
};

export default NewHeader;
