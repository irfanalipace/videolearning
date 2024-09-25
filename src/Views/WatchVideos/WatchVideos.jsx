import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Button,
  useTheme,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import YoutubeCard from "./YoutubeCard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DropDown from "../../components/DropDown/DropDown";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { ArrowBack } from "@mui/icons-material";
const WatchVideos = () => {
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const [showFilters, setShowFilters] = useState(false);
  const [view, setView] = useState("list");
  const navigate = useNavigate();
  console.log(view, "KKKKKKKKKKK");

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

  const dropdownData = [
    {
      id: 1,
      title: "Levels",
      options: ["Level 1", "Level 2", "Level 3"],
    },
    {
      id: 2,
      title: "Countries",
      options: ["Country 1", "Country 2", "Country 3"],
    },
    {
      id: 3,
      title: "Topics",
      options: ["Topic 1", "Topic 2", "Topic 3"],
    },
    {
      id: 4,
      title: "Guides",
      options: ["Guide 1", "Guide 2", "Guide 3"],
    },
  ];
  const ButtonsData = [
    { id: 1, title: "Absolute Beginner", s: true },
    { id: 2, title: "Beginner", s: false },
    { id: 3, title: "Early Intermediate", s: false },
    { id: 4, title: "High Intermediate", s: false },
    { id: 5, title: "Advanced", s: false },
  ];
  const handleClick = () => {
    if (view === "list") {
      setView("dashboard");
    } else {
      setView("list");
    }
  };
  return (
    <Box>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "7px" }}
      >
        <Grid item xs={6}>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            {view === "dashboard" && (
              <ArrowBack
                sx={{ mr: 2, color: secondary }}
                onClick={handleClick}
              />
            )}
            <Typography variant="h6" fontWeight="bold" color="secondary">
              Watch Videos
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <Box
              sx={{
                background: view === "dashboard" ? secondary : "#e2e2e2",
                borderRadius: "10px",
              }}
            >
              <IconButton disableRipple>
                <DashboardIcon
                  sx={{
                    color: view === "dashboard" ? "white" : "black",
                  }}
                  onClick={() => setView("dashboard")}
                />
              </IconButton>
            </Box>
            <Box
              sx={{
                background: view === "list" ? secondary : "#e2e2e2",
                borderRadius: "10px",
                mx: 1.5,
              }}
            >
              <IconButton onClick={() => setView("list")} disableRipple>
                <IoIosMenu color={view === "list" ? "white" : "black"} />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid container alignItems="center" sx={{ my: "12px", mb: 3 }}>
          {view === "list" ? (
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                {dropdownData.map((val, ind) => (
                  <Box key={ind}>
                    <DropDown data={val} />
                  </Box>
                ))}
                <Box sx={{ borderRight: "1px solid grey" }}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch />}
                      label="Hide Watched"
                    />
                  </FormGroup>
                </Box>
                <Box>
                  <IoIosSearch
                    size={35}
                    style={{ marginLeft: "-20px", cursor: "pointer" }}
                  />
                </Box>
              </Box>
            </Grid>
          ) : (
            <Grid item xs={12}>
              {ButtonsData.map((val, ind) => {
                return (
                  <Button
                    variant="contained"
                    color="secondary"
                    disableElevation
                    sx={{
                      textTransform: "none",
                      mr: 2,
                      background: !val.s ? "#e2e2e2" : "",
                      color: !val.s ? "black" : "white",
                      px: 4,
                      py: 1,
                    }}
                  >
                    {val.title}
                  </Button>
                );
              })}
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
    </Box>
  );
};

export default WatchVideos;
