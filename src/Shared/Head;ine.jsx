import React from "react";

const Headline = ({ title, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-primary font-cinzel mb-4">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-text leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Headline;
