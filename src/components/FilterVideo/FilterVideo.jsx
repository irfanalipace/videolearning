import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Switch,
  Typography,
  InputAdornment,
  Checkbox,
  Menu,
  MenuItem,
} from "@mui/material";
import { Search, ArrowDropDown, Close } from "@mui/icons-material";
import { BarChart, Person, Label } from "@mui/icons-material";

const FilterVideo = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    levels: [],
    guides: [],
    topics: [],
  });
  const [includeFilter, setIncludeFilter] = useState("Include");

  const handleSearchClick = () => {
    setShowSearchBar(true);
  };

  const handleCloseSearch = () => {
    setShowSearchBar(false);
  };

  const openFilterMenu = (event, filter) => {
    setAnchorEl(event.currentTarget);
    setSelectedFilter(filter);
  };

  const closeFilterMenu = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (filter, value) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      const currentValues = newFilters[filter];
      if (currentValues.includes(value)) {
        newFilters[filter] = currentValues.filter((item) => item !== value);
      } else {
        newFilters[filter] = [...currentValues, value];
      }
      return newFilters;
    });
  };

  const toggleIncludeFilter = () => {
    setIncludeFilter((prev) => (prev === "Include" ? "Not Include" : "Include"));
  };

  const guides = [
    { label: "Agustina", count: 665 },
    { label: "Alma", count: 320 },
    { label: "Andrea", count: 977 },
    { label: "Andres", count: 945 },
    { label: "Claudia", count: 54 },
    { label: "Edwin", count: 57 },
    { label: "Jostin", count: 136 },
    { label: "Marce", count: 389 },
    { label: "Michelle", count: 560 },
    { label: "Natalia", count: 111 },
    { label: "Pablo", count: 1684 },
    { label: "Sandra", count: 372 },
  ];

  const topics = [
    { label: "18+", count: 124 },
    { label: "Abilities", count: 85 },
    { label: "Acting", count: 82 },
    { label: "Alcohol", count: 11 },
    { label: "Animals", count: 200 },
    { label: "Appearance", count: 75 },
    { label: "Argentina", count: 136 },
    { label: "Art", count: 81 },
    { label: "Barcelona", count: 18 },
    { label: "Belief", count: 69 },
    { label: "Body", count: 64 },
  ];

  const levels = [
    { label: "Superbeginner", count: 375 },
    { label: "Beginner", count: 1375 },
    { label: "Intermediate", count: 2375 },
    { label: "Advanced", count: 475 },
  ];

  const getSelectedCount = (filter) => selectedFilters[filter]?.length;

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
          marginTop: "-3px",
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
              onClick={(e) => openFilterMenu(e, item.label)} // Pass the correct filter label
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

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeFilterMenu}
        sx={{
          marginTop: "8px",
          padding: "16px",
          borderRadius: "8px",
          width: "650px",
        }}
      >
       
     

        {/* Filter Menu Items */}
        {selectedFilter === "Levels" &&
          levels.map((item, index) => (
            <MenuItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
                <Checkbox
                  checked={selectedFilters[selectedFilter.toLowerCase()]?.includes(item.label) || false}
                  onChange={() => handleCheckboxChange(selectedFilter.toLowerCase(), item.label)}
                />
                <Typography variant="body2">{item.label}</Typography>
              </Box>

              <Typography variant="body2" sx={{ marginLeft: "auto" }}>
                {item.count}
              </Typography>
            </MenuItem>
          ))}

        {selectedFilter === "Guides" &&
          guides.map((item, index) => (
            <MenuItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
                <Checkbox
                  checked={selectedFilters[selectedFilter.toLowerCase()]?.includes(item.label) || false}
                  onChange={() => handleCheckboxChange(selectedFilter.toLowerCase(), item.label)}
                />
                <Typography variant="body2">{item.label}</Typography>
              </Box>

              <Typography variant="body2" sx={{ marginLeft: "auto" }}>
                {item.count}
              </Typography>
            </MenuItem>
          ))}

        {selectedFilter === "Topics" &&
          topics.map((item, index) => (
            <MenuItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
                <Checkbox
                  checked={selectedFilters[selectedFilter.toLowerCase()]?.includes(item.label) || false}
                  onChange={() => handleCheckboxChange(selectedFilter.toLowerCase(), item.label)}
                />
                <Typography variant="body2">{item.label}</Typography>
              </Box>

              <Typography variant="body2" sx={{ marginLeft: "auto" }}>
                {item.count}
              </Typography>
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default FilterVideo;
