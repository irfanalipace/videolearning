import SearchInput from "./SearchInput";
import { IconButton, Avatar, useTheme, Button } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";

const NewHeader = ({ open, toggleOpen }) => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(
{type: "LOGOUT_SUCCESS"}
    )
  }
  return (
    <header className="px-5 py-2 fixed top-0 z-20 w-full bg-white shadow md:flex md:items-center md:justify-between ">
      <div className="w-[280px]  flex items-center justify-center">
        <img
          src={"/Logo.jpg"}
          className="hidden md:block w-[158px] h-[75px] object-contain"
        />
      </div>

      <div className="flex items-center justify-between w-full px-2">
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
        <div className="flex items-center gap-2">
          <Button
            sx={{ textTransform: "none" }}
            color="secondary"
            variant="outlined"
            onClick={handleLogout}
          >
            Log Out
          </Button>
          
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
