import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  FormControl,
  ListItemText,
  Checkbox,
  ListItem,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { IoFilterSharp } from "react-icons/io5";
import YoutubeCard from "./YoutubeCard";
import image from "../../assets/picture/image1.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const WatchVideos = () => {
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  const [level, setLevel] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [guide, setGuide] = useState([]);
  const [topic, setTopic] = useState([]);
  const [sound, setSound] = useState([]);
  const [sortBy, setSortBy] = useState([]);
  const handleToggle = (value, setter, selectedItems) => {
    setter(
      selectedItems.includes(value)
        ? selectedItems.filter((item) => item !== value)
        : [...selectedItems, value]
    );
  };

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

  const videoData = [
    {
      videoUrl: "https://www.youtube.com/embed/video2",
      title: "Video Title 2",
      Vediotitle: "Video Title 2 with a background image",

      buttonText: "Auto Beginner",
      videoDuration: "10:30",
      backgroundImage: "image2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel turpis a odio fringilla egestas. Integer non justo sit amet nunc varius fermentum.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/video2",
      title: "Video Title 2",
      Vediotitle: "Video Title 2 with a background image",

      buttonText: "Beginner",
      videoDuration: "10:30",
      backgroundImage: "image2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel turpis a odio fringilla egestas. Integer non justo sit amet nunc varius fermentum.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/video2",
      title: "Video Title 2",
      Vediotitle: "Video Title 2 with a background image",
      buttonText: "Premium",
      videoDuration: "10:30",
      backgroundImage: "image2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel turpis a odio fringilla egestas. Integer non justo sit amet nunc varius fermentum.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/video2",
      title: "Video Title 2",
      Vediotitle: "Video Title 2 with a background image",
      //   description: "Description for Video 2",
      buttonText: "Auto Beginner",
      videoDuration: "10:30",
      backgroundImage: "image2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel turpis a odio fringilla egestas. Integer non justo sit amet nunc varius fermentum.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/video2",
      title: "Video Title 2",
      Vediotitle: "Video Title 2 with a background image",
      // description: "Description for Video 2",
      buttonText: "Premium",
      videoDuration: "10:30",
      backgroundImage: "image2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel turpis a odio fringilla egestas. Integer non justo sit amet nunc varius fermentum.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/video2",
      title: "Video Title 2",
      Vediotitle: "Video Title 2 with a background image",
      //  description: "Description for Video 2",
      buttonText: "Beginner",
      videoDuration: "10:30",
      backgroundImage: "image2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel turpis a odio fringilla egestas. Integer non justo sit amet nunc varius fermentum.",
    },
  ];

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "7px" }}
      >
        <Grid item xs={6}>
          <Typography variant="h6">Watch Video</Typography>
        </Grid>

        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <Link to="/bignners">
              <IconButton color="primary">
                <DashboardIcon />
              </IconButton>
            </Link>
            <Link to="/watch-videos">
              <IconButton color="primary">
                <DensitySmallIcon />
              </IconButton>
            </Link>
          </Box>
        </Grid>

        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ marginTop: "0px", marginBottom: "12px" }}
        >
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
                    <MenuItem value="roundam"> Random</MenuItem>
                    <MenuItem>New </MenuItem>
                    <MenuItem>Old </MenuItem>
                    <MenuItem>Easy </MenuItem>
                    <MenuItem>Hard </MenuItem>
                    <MenuItem>Short </MenuItem>
                    <MenuItem>Long </MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="level-label">Levels</InputLabel>
                  <Select
                    labelId="level-label"
                    multiple
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    <MenuItem value="Superbeginner">
                      <Checkbox checked={level.includes("Superbeginner")} />
                      <ListItemText primary="Superbeginner" />
                    </MenuItem>
                    <MenuItem value="Beginner">
                      <Checkbox checked={level.includes("Beginner")} />
                      <ListItemText primary="Beginner" />
                    </MenuItem>
                    <MenuItem value="Intermediate">
                      <Checkbox checked={level.includes("Intermediate")} />
                      <ListItemText primary="Intermediate" />
                    </MenuItem>
                    <MenuItem value="Advanced">
                      <Checkbox checked={level.includes("Advanced")} />
                      <ListItemText primary="Advanced" />
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Countries */}
                <FormControl fullWidth>
                  <InputLabel id="country-label">Countries</InputLabel>
                  <Select
                    labelId="country-label"
                    multiple
                    value={selectedCountries}
                    onChange={(e) => setSelectedCountries(e.target.value)}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    <MenuItem value="Argentina">
                      <Checkbox
                        checked={selectedCountries.includes("Argentina")}
                      />
                      <ListItemText primary="Argentina" />
                    </MenuItem>
                    <MenuItem value="Bolivia">
                      <Checkbox
                        checked={selectedCountries.includes("Bolivia")}
                      />
                      <ListItemText primary="Bolivia" />
                    </MenuItem>
                    <MenuItem value="Chile">
                      <Checkbox checked={selectedCountries.includes("Chile")} />
                      <ListItemText primary="Chile" />
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Guides */}
                <FormControl fullWidth>
                  <InputLabel id="guide-label">Guides</InputLabel>
                  <Select
                    labelId="guide-label"
                    multiple
                    value={guide}
                    onChange={(e) => setGuide(e.target.value)}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    <MenuItem value="Argentina">
                      <Checkbox checked={guide.includes("Argentina")} />
                      <ListItemText primary="Argentina" />
                    </MenuItem>
                    <MenuItem value="Bolivia">
                      <Checkbox checked={guide.includes("Bolivia")} />
                      <ListItemText primary="Bolivia" />
                    </MenuItem>
                    <MenuItem value="Chile">
                      <Checkbox checked={guide.includes("Chile")} />
                      <ListItemText primary="Chile" />
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Topics */}
                <FormControl fullWidth>
                  <InputLabel id="topic-label">Topics</InputLabel>
                  <Select
                    labelId="topic-label"
                    multiple
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    <MenuItem value="Argentina">
                      <Checkbox checked={topic.includes("Argentina")} />
                      <ListItemText primary="Argentina" />
                    </MenuItem>
                    <MenuItem value="Bolivia">
                      <Checkbox checked={topic.includes("Bolivia")} />
                      <ListItemText primary="Bolivia" />
                    </MenuItem>
                    <MenuItem value="Chile">
                      <Checkbox checked={topic.includes("Chile")} />
                      <ListItemText primary="Chile" />
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="sound-label">Sound</InputLabel>
                  <Select
                    labelId="sound-label"
                    value={sound}
                    onChange={(e) => setSound(e.target.value)}
                  >
                    <MenuItem value="on">
                      <Checkbox checked={sound.includes("on")} />
                      <ListItemText primary="On" />
                    </MenuItem>
                    <MenuItem value="off">
                      <Checkbox checked={sound.includes("off")} />
                      <ListItemText primary="Off" />
                    </MenuItem>
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
                  <FilterAltIcon style={{ marginRight: "0.4rem" }} /> Apply
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
                  <FilterAltIcon style={{ marginRight: "0.4rem" }} /> Apply
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
        <Grid container spacing={4}>
          {videoData.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <YoutubeCard
                videoUrl={video.videoUrl}
                title={video.title}
                Vediotitle={video.Vediotitle}
                description={video.description}
                buttonText={video.buttonText}
                videoDuration={video.videoDuration}
                backgroundImage={video.backgroundImage}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default WatchVideos;
