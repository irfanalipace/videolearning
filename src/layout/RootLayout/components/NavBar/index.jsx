import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
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

import SettingsIcon from "@mui/icons-material/Settings";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import useResponsive from "../../../../components/hooks/useResponsive";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";

const NAV_WIDTH = 280;
const useStyles = makeStyles((theme) => ({
  selected: {
    background: "#FFFFFF59",
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
  const location = useLocation();
  const [dOpen, setDopen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const isDesktop = useResponsive("up", "lg");
  const classes = useStyles();
  const theme = useTheme();
  const { palette } = theme;
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
      <Box
        sx={{
          py: "3px",
          display: "inline-flex",
          bgcolor: palette.typography.allVariants.color,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img src={"/Logo.jpg"} />
        </Box>
      </Box>
      <Box>
        <List component="nav">
          {ListData.map((val) => {
            return (
              <>
                <ListItem
                  key={val.id}
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
                      color: palette.typography.allVariants,
                      p: 2,
                      "&:hover": {
                        borderRadius: "10px",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: 2,
                        color: palette.typography.allVariants,
                      }}
                    >
                      {val.icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: selectedIndex === val.id ? 700 : 500,
                        fontSize: "16px",
                      }}
                      primary={val.title}
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
