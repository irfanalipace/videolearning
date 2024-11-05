import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  CircularProgress,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { IoIosMenu } from "react-icons/io";
import { ArrowBack } from "@mui/icons-material";
import YoutubeCard from "./YoutubeCard";
import { useNavigate } from "react-router-dom";
import { request } from "../../services/axios";
import { useTheme } from "@mui/material";
import FilterVideo from "../../components/FilterVideo/FilterVideo";

const WatchVideos = () => {
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const [showFilters, setShowFilters] = useState(false);
  const [view, setView] = useState("list");
  const [video, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloadingVideos, setDownloadingVideos] = useState({});

  const navigate = useNavigate();

  // Fetch videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await request({
          url: "api/videos",
          method: "get",
        });

        if (response?.status === 200) {
          setVideoData(response.data.payload);
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
        // You can add a Toast or Snackbar for user feedback
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Handle video download
  const handleDownloadClick = async (video_id) => {
    setDownloadingVideos((prev) => ({ ...prev, [video_id]: true })); // Set loading to true for this video
    try {
      await request({
        method: "post",
        url: "api/video/list",
        data: {
          video_id,
          type: "video",
        },
      });
      console.log("Download initiated for video_id:", video_id);
    } catch (error) {
      console.error("Error downloading video:", error);
      // Optionally show user feedback like Toast or Snackbar
    } finally {
      setDownloadingVideos((prev) => ({ ...prev, [video_id]: false })); // Set loading to false after download attempt
    }
  };

  // Handle video play event
  const handleVideoPlay = async (video_id) => {
    try {
      await request({
        method: "post",
        url: "api/video/history",
        data: {
          video_id,
          type: "video",
        },
      });
      console.log("Play initiated for video_id:", video_id);
    } catch (error) {
      console.error("Error playing video:", error);
    }
  };

  const handleAddToList = async (video_id, type) => {
    try {
      await request({
        method: "post",
        url: "api/video/list",
        data: {
          video_id,
          type: "video",
        },
      });
      console.log(`Video ${video_id} added to the list`);
      // Optionally show user feedback like Toast or Snackbar
    } catch (error) {
      console.error("Error adding video to the list:", error);
      // Optionally show user feedback
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
      {/*


        <Grid item xs={6}>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            {view === "dashboard" && (
              <ArrowBack
                sx={{ mr: 2, color: secondary }}
                onClick={() => setView("list")}
              />
            )}
            <Typography variant="h6" fontWeight="bold" color="secondary">
              Watch Videos
            </Typography>
          </Box>
        </Grid>
*
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <Box
              sx={{
                background: view === "dashboard" ? secondary : "#e2e2e2",
                borderRadius: "10px",
              }}
            >
              <IconButton disableRipple onClick={() => setView("dashboard")}>
                <DashboardIcon
                  sx={{ color: view === "dashboard" ? "white" : "black" }}
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
        */}

        <Grid item xs={12}>
        <Box>
        <FilterVideo />
        </Box>

        </Grid>

        <Grid container sx={{ my: "12px", mb: 3 }}>
          {view === "list" && (
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              ></Box>
            </Grid>
          )}
        </Grid>

        {/* Video Cards */}
        <Grid container spacing={4}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "300px",
              }}
            >
              <CircularProgress color="secondary" />
            </Box>
          ) : video?.length > 0 ? (
            video?.map((videos, index) => (
              <Grid item xs={12} sm={12} md={6} key={index}>
                <YoutubeCard
                  Vediotitle={videos.title}
                  videoUrl={videos.video}
                  title={videos.title}
                  onPlay={() => handleVideoPlay(videos.id)}
                  description={videos.description}
                  buttonText={videos.level}
                  videoDuration={videos.videoDuration}
                  backgroundImage={videos.backgroundImage}
                  showDownloadIcon={true}
                  onDownloadClick={() => handleDownloadClick(videos.id)}
                  isDownloading={downloadingVideos[videos.id]}
                  menuItems={["Add to list"]}
                  handleAdd={() => handleAddToList(videos.id)}
                />
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              sx={{ textAlign: "center", width: "100%" }}
            >
              No videos available
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default WatchVideos;
