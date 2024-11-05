import { Box, Toolbar, Typography } from "@mui/material";
import logo from "../../../../assets/picture/video-based.jpg";

const AuthenticatedHeader = () => {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        boxShadow: 1,
        padding: "3px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 20,
      }}
    >
      <Box sx={{ width: "20%" }}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "120px", marginLeft: "30px" }}
        />
      </Box>
      <Toolbar sx={{ justifyContent: "space-between", width: "80%" }}>
        {/* Add your authenticated header elements here */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Replace with actual data */}
          <Typography variant="h6">Min Circle: 5</Typography>
          <Typography variant="h6" sx={{ mx: 2 }}>Day Streak: 10</Typography>
          <Typography variant="h6">Level #: 2</Typography>
          <Typography variant="h6" sx={{ mx: 2 }}>Words #: 100</Typography>
          <Typography variant="h6">Avatar/Name</Typography>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default AuthenticatedHeader;
