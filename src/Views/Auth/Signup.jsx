import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/reducers/action";
import {
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Policy from "./Policy";
import "./styles.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const contentRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [policyOpen, setPolicyOpen] = useState(false);
  const handleCloseSnackbar = () => setSnackbarOpen(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleOpenModal = () => {
    if (!emailError && !passwordError && email && password) {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setIsAgreed(false);
  };

  const handleSignup = async () => {
    setLoading(true); // Start loading
    try {
      const response = await dispatch(registerUser({ email, password }));
      setErrorMessage(response.data.message || "Registration successful!");
      navigate("/otp-authentication");
    } catch (error) {
      const errorData = error?.response?.data?.payload || {};
      setErrorMessage(
        errorData.email ||
          errorData.password ||
          errorData.message ||
          "Registration failed."
      );
      setSnackbarOpen(true);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleConfirmSignup = () => {
    handleCloseModal();
    handleSignup();
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    setIsAgreed(scrollTop + clientHeight >= scrollHeight / 1.1);
  };

  const goToLogin = () => {
    navigate("/sign-in");
  };

  const isButtonDisabled = !email || !password || loading || emailError || passwordError || !isCheckboxChecked;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="flex flex-col justify-start gap-8 w-full px-6 py-8 md:px-12 lg:px-20 lg:py-12 lg:col-span-6">
        <h1 className="text-black font-bold text-xl md:text-2xl lg:text-[36px]">
          Create your account!
        </h1>
        <p className="text-signText font-medium text-sm md:text-md">
          Please input your information below to enter your Journey platform.
        </p>

        <div className="flex flex-col gap-2">
          <label className="text-black text-sm md:text-md font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className="px-4 py-2 border rounded focus:outline-none"
            placeholder="e.g. hamzayasin499@gmail.com"
            required
          />
          {emailError && (
            <span className="text-red-500 text-sm">{emailError}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black text-sm md:text-md font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            className="px-4 py-2 border rounded focus:outline-none"
            placeholder="********"
            required
          />
          {passwordError && (
            <span className="text-red-500 text-sm">{passwordError}</span>
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            id="termsCheckbox"
            onChange={(e) => setIsCheckboxChecked(e.target.checked)}
            required
          />
          <span className="text-black text-xs md:text-sm font-semibold">
            I agree to{" "}
            <span
              onClick={() => setPolicyOpen(true)}
              className="text-blue-600 underline cursor-pointer"
            >
              Terms And Conditions
            </span>
          </span>
        </div>

        <button
          onClick={handleOpenModal}
          className={`text-white font-bold py-3 rounded text-sm md:text-md ${
            isButtonDisabled ? "bg-gray-400" : "bg-bluePrimary"
          }`}
          disabled={isButtonDisabled}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
        </button>

        <p className="text-gray-600 text-center mt-0 text-sm md:text-md">
          Already have an account?{" "}
          <strong onClick={goToLogin} className="text-blue-500 cursor-pointer">
            Login
          </strong>
        </p>
      </div>

      <div className="hidden lg:block lg:col-span-6">
        <img
          src="/image 35.png"
          alt="Sign In"
          className="object-cover h-full w-full"
        />
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>

      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle>Privacy Policy</DialogTitle>
        <DialogContent dividers className="no-scrollbar">
          <Policy contentRef={contentRef} handleScroll={handleScroll} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmSignup}
            color="primary"
            disabled={!isAgreed}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Signup;
