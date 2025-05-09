import React, { useState } from "react";
import Headline from "../Shared/Head;ine";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" flex flex-col items-center justify-center  mt-8 py-6 w-11/12 mx-auto">
      <Headline
        title="Welcome Back"
        description="Login to your account to explore the world of aquariums"
      />

      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
                placeholder="Enter your password"
                required
              />
              <div className="absolute top-1/2 -translate-y-1/2 right-4" onClick={()=>{
                setShowPassword(!showPassword)
              }}>
                {showPassword ?  <FaEye></FaEye> :<FaEyeSlash />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-secondary transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-primary font-medium hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
