import React from "react";

const Signup = () => {
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
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-black text-sm md:text-[16px] font-semibold">
              Password
            </span>
            <input
              type="text"
              className="px-[10px] py-4 border-[1px] border-signInputBorder rounded-[7px] focus:outline-none"
              placeholder="********"
            />
          </div>
          <button className="bg-bluePrimary text-white font-bold py-3 rounded-[7px] text-sm md:text-[16px]">
            Sign Up
          </button>
          <div>
            <p className="text-[#808080] text-center mt-4">
              Don't have an account?{" "}
              <strong className="text-[#0294D3]">Sign Up</strong>
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
    </div>
  );
};

export default Signup;