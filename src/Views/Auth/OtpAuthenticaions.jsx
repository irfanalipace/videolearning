import React from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import signinImage from "../../assets/picture/signin.png";

const OtpAuthentications = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        marginTop: "5px",
        padding: { xs: "10px", sm: "20px" },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ width: { xs: "100%", sm: "80%" }, textAlign: "left" }}>
          <Box sx={{ mb: 4 }}>
            <img
              src={"/Logo.jpg"}
              alt="Logo"
              style={{ maxWidth: "200px"}}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.125rem" },
            }}
          >
            OTP Authentication
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 3, fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Please enter the four digit verification code we have sent to{" "}
            <Typography sx={{ color: "#0294D3", display: "inline-block" }}>
              hamzayasin499@gmail.com
            </Typography>
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            {[1, 2, 3, 4].map((_, index) => (
              <TextField
                key={index}
                variant="outlined"
                placeholder="-"
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    fontSize: "1.5rem",
                    width: "50px",
                  },
                }}
                sx={{
                  width: { xs: "40px", sm: "50px", md:"90px" },
                  marginRight: index !== 3 ? { xs: "8px", sm: "12px" } : "0",
                }}
              />
            ))}
          </Box>

          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Don’t receive the OTP?{" "}
            <Typography
              component="span"
              sx={{ color: "#0294D3", cursor: "pointer" }}
            >
              Resend OTP
            </Typography>
          </Typography>

          <Button
            size="large"
            sx={{
              width: "100%",
              background: "#0294D3",
              color: "white",
              padding: "10px 0",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              "&:hover": {
                background: "#027bb3",
              },
            }}
          >
            Confirm
          </Button>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ width: { xs: "90%", md: "100%" }, height: "100%" }}>
          <img
            src={signinImage}
            alt="Sign in"
            style={{ height: "470px", width: "100%" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default OtpAuthentications;
