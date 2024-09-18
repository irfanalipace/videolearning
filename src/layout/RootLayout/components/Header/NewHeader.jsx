import SearchInput from "./SearchInput";
import { IconButton, Avatar, useTheme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const NewHeader = ({ open, toggleOpen }) => {
  const theme = useTheme();

  return (
    <header className="px-5 py-2 fixed top-0 z-20 w-full bg-white shadow md:flex md:items-center md:justify-between ">
      {/* image div */}
      <div className="w-[280px]  flex items-center justify-center">
        <img
          src={"/Logo.jpg"}
          className="hidden md:block w-[158px] h-[75px] object-contain"
        />
      </div>

      <div className="flex items-center justify-between w-full px-2">
        {/* Search Input */}

        <div
          className="pl-3 block md:hidden hover:scale-110 rounded-full cursor-pointer transition-all duration-300"
          onClick={toggleOpen}
        >
          {open ? (
            <RxCross2 className="w-[158px] h-[25px]" />
          ) : (
            <GiHamburgerMenu className="w-[158px] h-[25px]" />
          )}
        </div>

        <div className="pl-3 hidden md:block hover:scale-110 rounded-full cursor-pointer transition-all duration-300">
          <SearchInput />
        </div>

        {/* my profile */}

        <div className="flex items-center gap-2">
          <IconButton component={Link} to="/notifications">
            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
              <PersonIcon sx={{ color: "#e2e2e2" }} />
            </Avatar>
          </IconButton>
          <h1 className="font-bold font-poppins text-sm md:text-md lg:text-[22px] text-primary">
            My Profile
          </h1>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
