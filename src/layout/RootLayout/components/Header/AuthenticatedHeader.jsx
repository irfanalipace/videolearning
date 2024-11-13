import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, Person } from "@mui/icons-material";
import logo from "../../../../assets/picture/video-based.jpg";
import { useNavigate } from "react-router-dom";
import CircularProgressWithLabel from "../../../../Views/Progress/CircularProgressWithLabel"; // Assuming the component is in this path
import { MdDiamond } from "react-icons/md";
import StreakIcon from '@mui/icons-material/Stars';
import TranslateIcon from '@mui/icons-material/Translate';
import CircularProgress from "@mui/material/CircularProgress"; // Importing MUI CircularProgress
const AuthenticatedHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    navigate("/");
    console.log("User logged out successfully");
  };
const handleSetting = () => {
  navigate("/settings")
}
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ["Min Circle", "Day Streak", "Level", "Words"];

  const staticData = {
    "Min Circle": {
      size: 18,
      progress: 100, // Progress value is not shown
      strokeWidth: 4,
      primaryColor: "#0294D3",
    },
    "Day Streak": { count: 10, icon: <StreakIcon sx={{ fontSize: "18px" }} /> },
    "Level": { level: 5, icon: <MdDiamond sx={{ fontSize: "20px" }} /> },
    "Words": { wordCount: 4, icon: <TranslateIcon sx={{ fontSize: "20px" }} /> },
  };


  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        boxShadow: 1,
        padding: "6px 10px",
        position: "fixed",
        top: 0,
        width: "100%",
      zIndex: 10
      }}
    >
      {/* Logo Section */}
      <Box sx={{ flex: 1 }}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "120px", marginRight: "20px" }}
        />
      </Box>

      <Toolbar
        sx={{
          flex: 2,
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          {menuItems.map((item, index) => (
            <Box key={index} display="flex" alignItems="center" sx={{ gap: 1}}>
              {/* CircularProgressWithLabel for Min Circle */}
              {item === "Min Circle" && (
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                  
                  }}
                >
                <CircularProgress
                size={staticData[item].size}
                thickness={staticData[item].strokeWidth}
                value={staticData[item].progress} 
                variant="determinate"
                sx={{
                  color: staticData[item].primaryColor,
                }}
              />
                </Box>
              )}
              {/* Display other items */}
              {item !== "Min Circle" && staticData[item]?.icon && (
                <Box
                  sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  {staticData[item].icon}
                </Box>
              )}

              <Typography variant="body1" sx={{ fontWeight: 500, color: "#555" }}>
                {item}
              </Typography>

              {/* Conditional rendering for specific item content */}
              {item === "Min Circle" && (
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#0294D3" }}>
                  {staticData[item].progress}
                </Typography>
              )}

              {item === "Day Streak" && (
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#0294D3" }}>
                  {staticData[item].count}
                </Typography>
              )}

              {item === "Level" && (
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#0294D3" }}>
                  {staticData[item].level}
                </Typography>
              )}

              {item === "Words" && (
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#0294D3" }}>
                  {staticData[item].wordCount}
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            sx={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                backgroundColor: "#ff9301",
                "&:hover": { backgroundColor: "#ff7c01" },
              }}
            >
              <Person />
            </Avatar>
            <Typography sx={{ marginLeft: 1, fontWeight: "bold", color: "#333" }}>
              Joy
            </Typography>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleSetting}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: "block", md: "none" } }} // Show on small screens only
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            padding: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
            <ListItem>
              <Box display="flex" alignItems="center" width="100%" onClick={(e) => e.stopPropagation()}>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ cursor: "pointer" }}
                  onClick={handleClick}
                >
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#ff9301",
                      "&:hover": { backgroundColor: "#ff7c01" },
                    }}
                  >
                    <Person />
                  </Avatar>
                  <Typography sx={{ marginLeft: 1, fontWeight: "bold", color: "#333" }}>
                    Joy
                  </Typography>
                </Box>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AuthenticatedHeader;
