import React from "react";

const Signup = () => {
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
            type="password"
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
