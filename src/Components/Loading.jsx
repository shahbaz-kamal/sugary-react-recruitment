import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-secondary border-b-transparent rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 border-4 border-accent border-l-transparent rounded-full animate-spin-reverse"></div>
      </div>

      <p className="mt-6 text-xl text-text font-semibold tracking-wide animate-pulse">
        Loading ShopVerse...
      </p>
    </div>
  );
};

export default Loading;
