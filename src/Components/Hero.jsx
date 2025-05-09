import React from "react";
import bannerImage from "../assets/banner4.png";
import sideImage from "../assets/banner1.png";

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
      <div className="text-neutral-content w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-10 gap-10">
        {/* Left side */}
        <div className="text-center md:text-left ">
          <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl font-bold text-secondary font-cinzel">
            Dive into Tranquility
          </h1>
          <p className="mb-5 text-2xl md:text-4xl">
          Bring the Ocean to Your Living Room
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="rounded-md border border-primary px-6 py-2 text-lg bg-primary hover:bg-secondary hover:bg-opacity-80 hover:border-secondary hover:border-opacity-60 text-text transition duration-300 font-semibold">
              Get Started
            </button>
            <button className="rounded-md border border-primary px-6 py-2 text-lg hover:bg-primary hover:text-white transition duration-300 font-semibold">
              See More
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={sideImage}
            className="w-[320px] md:w-[270px] lg:w-[500px]  object-cover"
            alt="Aquarium illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
