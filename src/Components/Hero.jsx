import React from "react";
import bannerImage from "../assets/banner5.png";
import sideImage from "../assets/banner7.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-70"></div>
      <div className="text-text w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-10 gap-10">
        {/* Left Side */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold text-accent font-cinzel">
            Welcome to ShopVerse
          </h1>
          <p className="mb-6 text-xl md:text-2xl text-white">
            Your one-stop hub for fashion, gadgets & everyday essentials.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link to="/dashboard/all-products">
              <button className="rounded-md border border-primary px-6 py-2 text-lg bg-primary hover:bg-secondary hover:text-white hover:border-secondary text-white transition duration-300 font-semibold">
                Shop Now
              </button>
            </Link>

            <Link to="/dashboard/all-products">
              <button className="rounded-md border border-primary px-6 py-2 text-lg hover:bg-accent text-white transition duration-300 font-semibold hover:border-secondary">
                Browse Products
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={sideImage}
            alt="Shopping illustration"
            className="w-[320px] md:w-[300px] lg:w-[800px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
