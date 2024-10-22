import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button, Menu, MenuItem, CircularProgress } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { FaDownload } from "react-icons/fa6";

const YoutubeCard = ({
  videoUrl,
  title,
  description,
  buttonText,
  videoDuration,
  onPlay,
  Vediotitle,
  showDownloadIcon,
  handleAdd,
  onDownloadClick,
  menuItems,
  isDownloading, 
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle opening of the menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing of the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          src={`https://www.youtube.com/embed/${videoUrl}`}
          title={title}
          onPlay={onPlay}
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
                fontSize: "16px",
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

          {/* More Button */}
          <Box onClick={handleMenuClick}>
            <MoreHoriz style={{ color: "#0294D3", cursor: "pointer" }} />
          </Box>

          {/* Menu for "Add to list" etc. */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {menuItems?.map((item, index) => (
              <MenuItem key={index} onClick={handleMenuClose}>
                <p onClick={handleAdd}>{item}</p>
              </MenuItem>
            ))}
          </Menu>
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

      <Box sx={{ alignItems: "center", padding: "6px", display: "flex", gap: "5px", justifyContent: "center" }}>
        <Button variant="contained" size="small" style={{ width: "100%", padding: "6px" }} color="secondary">
          {buttonText}
        </Button>

        {/* Conditionally render the download icon or loader */}
        {showDownloadIcon && (
          <Box>
            {isDownloading ? (
              <CircularProgress size={24} color="secondary" />
            ) : (
              <FaDownload color="#0294D3" size={30} onClick={onDownloadClick} style={{ cursor: "pointer" }} />
            )}
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default YoutubeCard;
