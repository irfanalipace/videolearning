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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IoFilterSharp } from "react-icons/io5";
import YoutubeCard from "../WatchVideos/YoutubeCard";
import image from "../../assets/picture/image1.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const WatchHistory = () => {
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
        sx={{ padding: "5px" }}
      >
      <Grid item xs={6} >
      <Box display="flex" alignItems="center" sx={{marginBottom:"8px"}}>
        <Link to="/watch-library" style={{ textDecoration: "none" }}>
          <Box display="flex" alignItems="center">
            <ArrowBackIcon />
            <Typography sx={{ color: "#0294D3", marginLeft: 1 }}>
              Back
            </Typography>
          </Box>
        </Link>
        <Typography variant="h6" sx={{ marginLeft: 2 }}>
        History of Videos
        </Typography>
      </Box>
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

export default WatchHistory;
