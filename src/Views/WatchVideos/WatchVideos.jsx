import React, { useState } from "react";
import { Box, Typography, Container, Grid, IconButton, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { IoFilterSharp } from "react-icons/io5"; // Import your filter icon

const WatchVideos = () => {
  const [showFilters, setShowFilters] = useState(false);

  // Dropdown state
  const [sortBy, setSortBy] = useState("");
  const [level, setLevel] = useState("");
  const [country, setCountry] = useState("");
  const [guide, setGuide] = useState("");
  const [topic, setTopic] = useState("");
  const [sound, setSound] = useState("");

  const handleApplyFilters = () => {
    setShowFilters(true);
  };

  const handleCancel = () => {
    setShowFilters(false);
    setSortBy("");
    setLevel("");
    setCountry("");
    setGuide("");
    setTopic("");
    setSound("");
  };

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="space-between" sx={{ padding: "7px" }}>
        <Grid item xs={6}>
          <Typography variant="h6">Watch Video</Typography>
        </Grid>

        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton color="primary">
              <DashboardIcon />
            </IconButton>
            <IconButton color="primary">
              <DensitySmallIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid container spacing={4} alignItems="center" sx={{marginTop:"0px"}}>
          {showFilters ? (
            <Grid item xs={12}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap={2}
                flexWrap="nowrap"
                sx={{
                  overflowX: "auto", 
                  "& > *": {
                    flexBasis: "150px", 
                    flexGrow: 1,
                  },
                }}
              >
             
                <FormControl fullWidth>
                  <InputLabel id="sort-by-label">Sort By</InputLabel>
                  <Select
                    labelId="sort-by-label"
                    value={sortBy}
                    label="Sort By"
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <MenuItem value="date">Date</MenuItem>
                    <MenuItem value="popularity">Popularity</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="level-label">Levels</InputLabel>
                  <Select
                    labelId="level-label"
                    value={level}
                    label="Levels"
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="intermediate">Intermediate</MenuItem>
                    <MenuItem value="advanced">Advanced</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="country-label">Countries</InputLabel>
                  <Select
                    labelId="country-label"
                    value={country}
                    label="Countries"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="UK">UK</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="guide-label">Guides</InputLabel>
                  <Select
                    labelId="guide-label"
                    value={guide}
                    label="Guides"
                    onChange={(e) => setGuide(e.target.value)}
                  >
                    <MenuItem value="guide1">Guide 1</MenuItem>
                    <MenuItem value="guide2">Guide 2</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="topic-label">Topics</InputLabel>
                  <Select
                    labelId="topic-label"
                    value={topic}
                    label="Topics"
                    onChange={(e) => setTopic(e.target.value)}
                  >
                    <MenuItem value="topic1">Topic 1</MenuItem>
                    <MenuItem value="topic2">Topic 2</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="sound-label">Sound</InputLabel>
                  <Select
                    labelId="sound-label"
                    value={sound}
                    label="Sound"
                    onChange={(e) => setSound(e.target.value)}
                  >
                    <MenuItem value="on">On</MenuItem>
                    <MenuItem value="off">Off</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleCancel}
                  sx={{ padding: "14px" }}
                >
                  Cancel
                </Button>

                <Button
                  variant="contained"
                  onClick={handleApplyFilters}
                  sx={{ padding: "14px" }}
                >
                  <IoFilterSharp style={{ marginRight: "0.4rem" }} /> Apply
                </Button>
              </Box>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  sx={{ fontWeight: 600 }}
                  onClick={handleApplyFilters}
                >
                  <IoFilterSharp style={{ marginRight: "0.4rem" }} /> Apply
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default WatchVideos;
