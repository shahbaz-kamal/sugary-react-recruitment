import React from "react";
import { Link } from "react-router-dom";

const Error = ({ message = "Something went wrong!" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-accent">Oops!</h2>
        <p className="text-text text-lg">{message}</p>
        <Link to="/">
          <button className="mt-4 px-6 py-2 rounded-md bg-primary text-white hover:bg-secondary transition duration-300 font-semibold">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
