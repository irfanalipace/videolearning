import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Switch,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Search, ArrowDropDown, Close } from "@mui/icons-material";
import {
  FilterList,
  BarChart,
  Public,
  Person,
  Label,
  Mic,
} from "@mui/icons-material";

const FilterVideo = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchClick = () => {
    setShowSearchBar(true);
  };

  const handleCloseSearch = () => {
    setShowSearchBar(false);
  };

  return (
    <Box>
      {showSearchBar && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "30px",
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "1000px",
              padding: "12px",
              backgroundColor: "white",
              borderRadius: "16px",
              marginTop: "23px",
              boxShadow: 3,
            }}
          >
            <InputBase
              placeholder="Search..."
              autoFocus
              sx={{
                width: "100%",
                padding: "10px",
                borderRadius: "16px",
                backgroundColor: "white",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleCloseSearch}
                    sx={{ color: "text.primary" }}
                  >
                    <Close />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </Box>
      )}

      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px",
        gap: "46px",
        backgroundColor: "white",
        borderRadius: "16px",
        marginTop: "4.4rem",
        flexWrap: { xs: "wrap", sm: "nowrap" },
        justifyContent: "space-between",
      }}
    >
      {[{ label: "Levels", icon: <BarChart /> }, { label: "Guides", icon: <Person /> }, { label: "Topics", icon: <Label /> }]
        .map((item, index) => (
          <Button
            key={index}
            variant="outlined"
            startIcon={item.icon}
            endIcon={<ArrowDropDown />}
            sx={{
              color: "text.primary",
              backgroundColor: "#eef2f6",
              borderColor: "rgba(0, 0, 0, 0.1)",
              textTransform: "none",
              borderRadius: "16px",
              padding: "6px 16px",
              fontSize: { xs: "12px", sm: "14px" },
              minWidth: { xs: "100%", sm: "200px" },
            }}
          >
            {item.label}
          </Button>
        ))}
    
      <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <Switch />
        <Typography variant="body2">Hide watched</Typography>
      </Box>
    
      <IconButton
        onClick={handleSearchClick}
        sx={{
          color: "text.primary",
          "&:hover": {
            backgroundColor: "inherit",
          },
        }}
      >
        <Search />
        <Typography variant="body2">Search</Typography>
      </IconButton>
    </Box>
    
    </Box>
  );
};

export default FilterVideo;
