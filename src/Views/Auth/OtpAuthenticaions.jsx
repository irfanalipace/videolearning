import React, { useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import signinImage from "../../assets/picture/signin.png";
import { resendOtp, verifyOtp } from "../../store/reducers/action";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material"; // Add this line



const OtpAuthentications = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((stat) => stat?.admin?.user)
  // console.log(data, 'ujooooooooooo')
  const navigate = useNavigate()
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // 'success' or 'error'


  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    const otpData = { email: data.email, otp: otpCode };

    dispatch(verifyOtp(otpData))
      .then((response) => {
        console.log(response, 'jjjjj')
        if (response.data.success) {
          setSnackbarMessage(response?.data?.message || "OTP verified successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          navigate('/watch-videos');
        } else {
          setSnackbarMessage(response?.data?.message || "OTP verification failed.");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      })
      .catch((error) => {
        setSnackbarMessage(error?.response?.data?.message || "OTP verification failed.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      });
  };


  const handleResendOtp = () => {
    const resendData = { email: data.email };

    dispatch(resendOtp(resendData))
      .then((response) => {
        console.log(response, 'jj')

        if (response.data.success) {
          setSnackbarMessage(response?.data?.message || "OTP resent successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
        }
      })
      .catch((error) => {
        setSnackbarMessage(error?.response?.data?.message || "OTP resend failed.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      });
  };




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
            <img src={"/Logo.jpg"} alt="Logo" style={{ maxWidth: "200px" }} />
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
            Please enter the four-digit verification code we have sent to{" "}
            <Typography sx={{ color: "#0294D3", display: "inline-block" }}>
              {data?.email}
            </Typography>
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            {[0, 1, 2, 3].map((index) => (
              <TextField
                key={index}
                variant="outlined"
                placeholder="-"
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    fontSize: "1.5rem",
                  },
                }}
                value={otp[index]}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                sx={{
                  width: { xs: "40px", sm: "50px", md: "90px" },
                  marginRight: index !== 3 ? { xs: "8px", sm: "12px" } : "0",
                }}
              />
            ))}
          </Box>

          {errorMessage && (
            <Typography variant="body1" color="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Typography>
          )}

          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Don’t receive the OTP?{" "}
            <Typography
              onClick={handleResendOtp}
              component="span"
              sx={{ color: "#0294D3", cursor: "pointer" }}
            >
              Resend OTP
            </Typography>
          </Typography>

          <Button
            size="large"
            onClick={handleSubmit}
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
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
          <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>

      </Grid>
    </Grid>
  );
};

export default OtpAuthentications;
