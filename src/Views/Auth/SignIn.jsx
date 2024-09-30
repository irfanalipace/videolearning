import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/reducers/action";
import { Alert, Snackbar } from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData))
      .then((response) => {
        console.log(response, "++++++++++++");

        const token = response.data.payload.token;
        console.log(token, 'token')
        if (token) {
          localStorage.setItem("token", token);
        }

        if (response.data.payload.user.is_verified === 1) {
          navigate("/watch-videos");
        } else {
          navigate("/otp-authentication");
        }

        setErrorMessage(response.data.message || "Login successfully!");
        setSnackbarOpen(true);
      })
      .catch((error) => {
        const errorData = error?.response?.data?.payload || {};

        if (errorData.email && errorData.password) {
          setErrorMessage(
            `Email: ${errorData.email} Password: ${errorData.password}`
          );
        } else if (errorData.email) {
          setErrorMessage(`Email: ${errorData.email}`);
        } else if (errorData.password) {
          setErrorMessage(`Password: ${errorData.password}`);
        } else {
          setErrorMessage(
            errorData.message || "Registration failed. Please try again."
          );
        }

        setSnackbarOpen(true);
      });
  };

  return (
    <div>
      <div className="flex h-screen items-center gap-7 justify-center">
        <div className="flex flex-col justify-center gap-8 w-full lg:w-[40%]">
          <img
            src="/Logo.jpg"
            className="object-cover w-[150px] h-[72.37px]"
            alt="Logo"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-black font-bold text-sm md:text-lg lg:text-[36px]">
              Welcome Back!
            </h1>
            <p className="text-signText font-medium text-sm md:text-[16px]">
              Please input your information in the fields below to enter your
              Journey platform.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-black text-sm md:text-[16px] font-semibold">
              Email
            </span>
            <input
              type="text"
              className="px-[10px] py-4 border-[1px] border-signInputBorder rounded-[7px] focus:outline-none"
              placeholder="e.g hamzayasin499@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <span className="text-black text-sm md:text-[16px] font-semibold">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-[10px] py-4 border-[1px] border-signInputBorder rounded-[7px] focus:outline-none"
              placeholder="********"
              required
            />
          </div>
          <button
            className="bg-bluePrimary text-white font-bold py-3 rounded-[7px] text-sm md:text-[16px]"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <div>
            <p className="text-[#808080] text-center mt-4">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-[#0294D3]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[40%]">
          <img
            src="/sign-in.jpg"
            alt="Sign In"
            className="object-contain h-72 w-full"
          />
        </div>
      </div>

      {/* MUI Snackbar for error messages */}
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
    </div>
  );
};

export default SignIn;
