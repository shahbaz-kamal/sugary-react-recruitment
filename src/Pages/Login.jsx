import React, { useState } from "react";
import Headline from "../Shared/Headline";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const password = e.target.password.value;

    try {
      login(userName, password);
      navigate("/dashboard/overview");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center  mt-8 py-6 w-11/12 mx-auto">
      <Headline
        title="Welcome Back"
        description="Login to your account to explore the world of aquariums"
      />

      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Name
            </label>
            <input
              type="email"
              name="userName"
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
                name="password"
                required
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 right-4"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash />}
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
      </div>
    </div>
  );
};

export default Login;
