import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SeriesIcon from "@mui/icons-material/PlaylistPlay";
import HistoryIcon from "@mui/icons-material/History";
import { useSelector } from "react-redux";

const items = [
  {
    name: "My Download List",
    path: "/vedio-list", // Adjust the path if needed
    icon: <LogoutIcon fontSize="small" />,
  },
  {
    name: "My Video List",
    path: "/vedio-list", // Adjust the path if needed
    icon: <VideoLibraryIcon fontSize="small" />,
  },
  {
    name: "My Series Videos",
    path: "/series-list", // Adjust the path if needed
    icon: <SeriesIcon fontSize="small" />,
  },
  {
    name: "History of Video",
    path: "/watch-history", // Adjust the path if needed
    icon: <HistoryIcon fontSize="small" />,
  },
];

const WatchLibrary = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box>
      {items.map((item) => (
        <Box
          key={item.name}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
          sx={{
            fontWeight: "700",
            borderBottom: "1px solid #ddd",
            "&:last-child": {
              borderBottom: "none",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "600", display: "flex", alignItems: "center" }}
          >
            <span style={{ fontSize: "16px", marginRight: "8px", color: '#0294D3' }}>
              {item.icon}
            </span>
            {item.name}
          </Typography>
          <IconButton
            onClick={() => {
              if (isAuthenticated) {
                handleNavigation(item.path); // User is authenticated, proceed with navigation
              } else {
                navigate('/Nodownload'); // User is not authenticated, navigate to no download page
              }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default WatchLibrary;
