import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/reducers/action";
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(registerUser(userData));
  };

  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col justify-start gap-8 w-full lg:w-full px-20 py-12 col-span-6">
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
            Please input your information in the fields below to enter your Journey platform.
          </p>
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <span className="text-black text-sm md:text-[16px] font-semibold">
            Email
          </span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-[10px] py-4 border-[1px] border-signInputBorder rounded-[7px] focus:outline-none"
            placeholder="e.g hamzayasin499@gmail.com"
            required
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

        {/* Error message */}
        {/* {error && <p className="text-red-500">{error}</p>} */}

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          // disabled={loading}
          className={`bg-bluePrimary text-white font-bold py-3 rounded-[7px] text-sm md:text-[16px] $`}
        >
          Sign Up
        </button>

        {/* Redirect to Login */}
        <div>
          <p className="text-[#808080] text-center mt-4">
            Already have an account?{" "}
            <strong className="text-[#0294D3]">Login</strong>
          </p>
        </div>
      </div>

      {/* Right side image */}
      <div className="col-span-6">
        <img
          src="src/assets/picture/image 35.png"
          alt="Sign In"
          className="object-cover h-[112vh] w-full"
        />
      </div>
    </div>
  );
};

export default Signup;
