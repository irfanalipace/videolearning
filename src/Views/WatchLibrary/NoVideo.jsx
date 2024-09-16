import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import image from "../../assets/picture/Dataimage.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const NoVideo = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
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
          Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum. Lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem.
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
  );
};

export default NoVideo;
