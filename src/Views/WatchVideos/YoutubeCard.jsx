import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";

const YoutubeCard = ({
  videoUrl,
  title,
  description,
  buttonText,
  videoDuration,
  backgroundImage,
  Vediotitle,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "394px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: 3,
        position: "relative",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position:"relative",
          // Adjust padding for small screens
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            minWidth: "200px", 
            minHeight: "200px", 
          }}
        />


        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#0294D3",
            color: "#ffffff",
            padding: "8px",
            borderBottomRightRadius: "4px",
            zIndex: 1,
            maxWidth: "calc(100% - 16px)",
          }}
        >
          <Typography component="div" noWrap style={{ fontSize: "10px" }}>
            {title}
          </Typography>
        </Box>

        {/* Video Duration */}
        <Box
          sx={{
            position: "absolute",
            bottom: "8px",
            right: "8px",
            backgroundColor: "#000000",
            color: "#ffffff",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          <Typography variant="caption">{videoDuration}</Typography>
        </Box>
      </Box>

      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop:'200px' }}>
          <Box>
            <Typography
              gutterBottom
              component="div"
              noWrap
              sx={{
                fonntSize: "16px",
                fontWeight: "700",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 2,
                textOverflow: "ellipsis",
                whiteSpace: "normal",
                marginBottom: "0px",
              }}
            >
              {Vediotitle}
            </Typography>
          </Box>
          <Box>
            <MoreHoriz style={{ color: "#0294D3" }} />
          </Box>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 3,
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            marginTop: "4px",
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <Box sx={{ textAlign: "center", padding: "6px" }}>
        <Button
          variant="contained"
          size="small"
          style={{ width: "100%", padding: "6px" }}
          color="secondary"
        >
          {buttonText}
        </Button>
      </Box>
    </Card>
  );
};

export default YoutubeCard;
