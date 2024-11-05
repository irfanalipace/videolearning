import { Box, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { Person } from "@mui/icons-material"; 
import logo from "../../../../assets/picture/video-based.jpg";
import { useNavigate } from "react-router-dom";
const AuthenticatedHeader = () => {
    const navigate = useNavigate();
    const isAuthenticatedUser = localStorage.getItem("isAuthenticated"); 

    const handleLogout = () => {
      const token = localStorage.getItem("token");
    
      if (token) {
        localStorage.removeItem("token");
  
        localStorage.removeItem("isAuthenticated");
        navigate("/sign-in");
  
        console.log("User logged out successfully");
      } else {
        console.log("No token found, user might not be logged in");
      }
    };
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        boxShadow: 1,
        padding: "6px 10px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 20,
      }}
    >
      <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "120px", marginRight: "20px" }}
        />
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: "#333" }}>
          Welcome Back!
        </Typography>
      </Box>
      
      <Toolbar sx={{ display: "flex", alignItems: "center", flex: 2, justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: '500', color: "#555" }}>Min Circle</Typography>
          <Typography variant="body1" sx={{ fontWeight: '500', color: "#555" }}>Day Streak</Typography>
          <Typography variant="body1" sx={{ fontWeight: '500', color: "#555" }}>Level</Typography>
          <Typography variant="body1" sx={{ fontWeight: '500', color: "#555" }}>Words</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      
        <Button
        variant="outlined"
        sx={{
          borderColor: "#ff9301",
          color: "#ff9301",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          padding: "5px 10px",
        }}
      >
        <Avatar sx={{ width: 24, height: 24, marginRight: 1 }} alt="User Avatar" src="/path/to/avatar.jpg">
          <Person /> 
        </Avatar>
       Jay
      </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff9301",
              color: "#fff",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#ff7c01",
              },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default AuthenticatedHeader;
