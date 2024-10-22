import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/reducers/action";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { ClipLoader } from 'react-spinners'; // Loader

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const contentRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseSnackbar = () => setSnackbarOpen(false);
  const handleOpenModal = () => { if (email && password) setModalOpen(true); };
  const handleCloseModal = () => { setModalOpen(false); setIsAgreed(false); };

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await dispatch(registerUser({ email, password }));
      setErrorMessage(response.data.message || "Registration successful!");
      navigate('/otp-authentication');
    } catch (error) {
      const errorData = error?.response?.data?.payload || {};
      setErrorMessage(errorData.email || errorData.password || errorData.message || 'Registration failed.');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmSignup = () => {
    handleCloseModal();
    handleSignup();
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    setIsAgreed(scrollTop + clientHeight >= scrollHeight / 2);
  };

  return (
    <div className="grid grid-cols-12">
      {loading ? (
        <div className="flex justify-center items-center  mx-[600px] w-full h-screen">
          <ClipLoader size={50} color="black" loading />
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-start gap-8 w-full lg:w-full px-20 py-12 col-span-6">
            <img src="/Logo.jpg" className="object-cover w-[150px] h-[72.37px]" alt="Logo" />
            <h1 className="text-black font-bold text-lg lg:text-[36px]">Welcome Back!</h1>
            <p className="text-signText font-medium text-md">Please input your information below to enter your Journey platform.</p>

            <div className="flex flex-col gap-2">
              <label className="text-black text-md font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border rounded focus:outline-none"
                placeholder="e.g. hamzayasin499@gmail.com"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black text-md font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 border rounded focus:outline-none"
                placeholder="********"
                required
              />
            </div>

            <button
              onClick={handleOpenModal}
              className={`text-white font-bold py-3 rounded text-md ${!email || !password ? 'bg-gray-400' : 'bg-bluePrimary'}`}
              disabled={!email || !password}
            >
              Sign Up
            </button>

            <p className="text-gray-600 text-center mt-4">
              Already have an account? <strong className="text-blue-500">Login</strong>
            </p>
          </div>

          <div className="col-span-6">
            <img src="src/assets/picture/image 35.png" alt="Sign In" className="object-cover h-full w-full" />
          </div>

          <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          </Snackbar>

          <Dialog open={modalOpen} onClose={handleCloseModal}>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogContent dividers>
              <div ref={contentRef} onScroll={handleScroll} style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
                  <h1 className="text-2xl font-bold mb-4">Privacy Policy for Arabic All The Time</h1>
                  <p className="mb-4">Effective Date: 22/10/2024</p>

                  <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                  <p className="mb-4">Your privacy is crucial to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our API Client.</p>

                  <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
                  <p className="mb-4">We may collect the following types of information:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Personal Information: Name, email address, and any other information you provide.</li>
                    <li>Usage Data: Information about how you use our services, including your interaction with our API.</li>
                    <li>Device Information: Including IP address, browser type, and operating system.</li>
                    <li>Cookies: Small data files stored on your device to enhance your experience.</li>
                  </ul>

                  <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
                  <p className="mb-4">We use your information for the following purposes:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>To provide and maintain our services.</li>
                    <li>To notify you about changes to our services.</li>
                    <li>To allow you to participate in interactive features when you choose to do so.</li>
                    <li>To provide customer support and respond to inquiries.</li>
                    <li>To gather analysis or valuable information so that we can improve our services.</li>
                    <li>To monitor the usage of our services.</li>
                    <li>To detect, prevent, and address technical issues.</li>
                  </ul>

                  <h2 className="text-xl font-semibold mb-2">4. User Rights</h2>
                  <p className="mb-4">You have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>The right to access your personal information.</li>
                    <li>The right to rectify any inaccurate information.</li>
                    <li>The right to request deletion of your personal data.</li>
                    <li>The right to object to the processing of your data.</li>
                    <li>The right to request the transfer of your data.</li>
                  </ul>

                  <h2 className="text-xl font-semibold mb-2">5. Sharing Your Information</h2>
                  <p className="mb-4">We do not sell or rent your personal information to third parties. We may share your information with:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Trusted service providers to assist us in operating our services.</li>
                    <li>Legal authorities if required by law or to protect our rights.</li>
                    <li>Other parties in accordance with your consent.</li>
                  </ul>

                  <h2 className="text-xl font-semibold mb-2">6. Cookies and Tracking Technologies</h2>
                  <p className="mb-4">We use cookies and similar tracking technologies to monitor activity on our services and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

                  <h2 className="text-xl font-semibold mb-2">7. Data Security</h2>
                  <p className="mb-4">The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>

                  <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
                  <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

                  <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <p>Email: support@example.com</p>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal}>Cancel</Button>
              <Button onClick={handleConfirmSignup} disabled={!isAgreed} className={`bg-${isAgreed ? 'bluePrimary' : 'gray-400'} text-white`}>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default Signup;
