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
} from "@mui/material";
import { Menu as MenuIcon, Person } from "@mui/icons-material";
import logo from "../../../../assets/picture/video-based.jpg";
import { useNavigate } from "react-router-dom";

const AuthenticatedHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    navigate("/");
    console.log("User logged out successfully");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ["Min Circle", "Day Streak", "Level", "Words"];

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
        zIndex: 20,
      }}
    >
      <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "120px", marginRight: "20px" }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#333",
            display: { xs: "none", sm: "block" },
          }}
        >
          Welcome Back!
        </Typography>
      </Box>

      <Toolbar
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {menuItems.map((item, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{ fontWeight: 500, color: "#555" }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#ff9301",
              color: "#ff9301",
              borderRadius: "20px",
              padding: "5px 10px",
            }}
          >
            <Avatar
              sx={{ width: 24, height: 24, marginRight: 1 }}
              alt="User Avatar"
            >
              <Person />
            </Avatar>
            Jay
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff9301",
              color: "#fff",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#ff7c01" },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>

      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>

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
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#ff9301",
                  color: "#ff9301",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  padding: "5px 10px",
                  width: "100%",
                }}
              >
                <Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>
                  <Person />
                </Avatar>
                Jay
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff9301",
                  color: "#fff",
                  borderRadius: "20px",
                  width: "100%",
                  "&:hover": { backgroundColor: "#ff7c01" },
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AuthenticatedHeader;
