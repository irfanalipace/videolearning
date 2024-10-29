import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, CircularProgress, Grid } from "@mui/material";
import image from "../../assets/picture/Dataimage.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { request } from "../../services/axios";
import YoutubeCard from "../WatchVideos/YoutubeCard";
import ToastComp from "../../components/toast/ToastComp";

const VideoList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await request({
          url: "api/video/list",
          method: "get",
        });

        if (response?.status === 200) {
          setList(response.data.payload); // Assuming response.data.payload is the array of video objects
        }
      } catch (error) {
        console.log("Error fetching video data:", error);
        ToastComp({
          variant: "error",
          message: "Failed to fetch videos. Please try again later.",
        });
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchSeries();
  }, []);

  return (
    <Grid container spacing={4} sx={{ padding: 2 }}>
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
      ) : list?.length > 0 ? (
        list?.map((item) => {
          // Use 'item' for clarity
          const video = item.video; // Access the nested video object
          return (
            <Grid item xs={12} sm={12} md={6} key={video.id}>
              <YoutubeCard
                Vediotitle={video?.title}
                videoUrl={video.video} // Correctly reference video URL
                title={video.title}
                description={video.description}
                buttonText={video.level}
                videoDuration={"N/A"} // Replace with actual duration if available
                backgroundImage={""} // You can specify a default image if needed
              />
            </Grid>
          );
        })
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          textAlign="center"
          p={2}
        >
          <img
            src={image}
            alt="No Video"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            There is No Video content
          </Typography>
          <Box sx={{ width: "50%" }}>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem
              ipsum dolor sit amet, lorem ipsum dolor sit amet.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0294D3",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#0273b6",
              },
            }}
            onClick={handleBack}
          >
            <ArrowBackIcon /> Go Back to Library
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default VideoList;
