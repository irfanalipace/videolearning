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
import { FilterList, BarChart, Public, Person, Label, Mic } from "@mui/icons-material";

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
            backdropFilter: "blur(5px)", // Add blur effect
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start", // Align to the top
            paddingTop: "30px",
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "1000px", // Max width for the overlay
              padding: "12px",
              backgroundColor: "white",
              borderRadius: "16px",
              marginTop: '23px',
              boxShadow: 3, // Optional: adds shadow to the search box
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
                  <IconButton onClick={handleCloseSearch} sx={{ color: "text.primary" }}>
                    <Close />
                  </IconButton>
                </InputAdornment>
              }
            />

            <IconButton onClick={handleSearchClick} sx={{ color: "text.primary" }}>
              <Search sx={{ fontSize: "33px" }} />
            </IconButton>
          </Box>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "8px",
          gap: "8px",
          backgroundColor: "white",
          borderRadius: "16px",
        }}
      >
        {[
          { label: "Sort", icon: <FilterList /> },
          { label: "Levels", icon: <BarChart /> },
          { label: "Countries", icon: <Public /> },
          { label: "Guides", icon: <Person /> },
          { label: "Topics", icon: <Label /> },
          { label: "Sound", icon: <Mic /> },
        ].map((item, index) => (
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
            }}
          >
            {item.label}
          </Button>
        ))}

        {/* Hide Watched Switch */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Switch />
          <Typography variant="body2">Hide watched</Typography>
        </Box>

        {/* Search Icon */}
        <IconButton onClick={handleSearchClick} sx={{ color: "text.primary" }}>
          <Search />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FilterVideo;
