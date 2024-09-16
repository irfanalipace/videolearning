import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled, alpha, useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Drawer,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import { makeStyles } from "@mui/styles";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import clsx from "clsx";
import useResponsive from "../../../../components/hooks/useResponsive";

const NAV_WIDTH = 280;
const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));
const useStyles = makeStyles((theme) => ({
  selected: {
    background: "#fff",
    borderRadius: 10,
  },
  icon: {
    marginLeft: "auto",
  },
  drawer: {},
  btn: {},
}));
export default function Nav({ openNav, onCloseNav }) {
  const ListData = [
    {
      id: 1,
      title: "Watch Videos",
      icon: <DashboardIcon />,
      to: "/watch-videos",
    },
    {
      id: 11,
      title: "Watch Series",
      icon: <ManageAccountsIcon />,
      to: "/watch-series",
    },
    {
      id: 22,
      title: "Watch Library",
      icon: <GolfCourseIcon />,
      to: "/watch-library",
    },
    {
      id: 23,
      title: "Progress",
      icon: <ChatBubbleIcon />,
      to: "/progress",
    },
    {
      id: 2,
      title: "Settings",
      icon: <SettingsIcon />,
      // to: "/admin/new-invoices",
    },
    {
      id: 3,
      title: "Signout",
      icon: <ExitToAppIcon />,
      // to: "/admin/approved-by-admin",
    },
  ];
  const location = useLocation();
  const [dOpen, setDopen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const isDesktop = useResponsive("up", "lg");
  const classes = useStyles();
  const theme = useTheme();
  React.useEffect(() => {
    const matchingItem = ListData.find((item) => item.to === location.pathname);
    if (matchingItem) {
      setSelectedIndex(matchingItem.id);
    }
  }, [location.pathname]);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setDopen(false);
  };
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [location]);

  const renderContent = (
    <Box
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ mt: 1.5, fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Pocker Game
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <List component="nav">
          {ListData.map((val) => {
            return (
              <>
                <ListItem
                  key={val}
                  disablePadding
                  className={clsx(classes.root, {
                    [classes.selected]: selectedIndex === val.id,
                  })}
                  component={Link}
                  to={val.to}
                  sx={{ mb: 2 }}
                >
                  <ListItemButton
                    selected={selectedIndex === val.id}
                    onClick={(event) => handleListItemClick(event, val.id)}
                    sx={{
                      "&:hover": {
                        borderRadius: "10px",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: selectedIndex === val.id ? "#000" : "#fff",
                      }}
                    >
                      {val.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={val.title}
                      sx={{
                        color: selectedIndex === val.id ? "#000" : "#fff",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </>
            );
          })}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: theme.palette.primary.main,
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
