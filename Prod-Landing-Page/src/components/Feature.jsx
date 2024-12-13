import React from "react";

const Feature = ({ featureConfig }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          {featureConfig.heading.title}{" "}
          <span className="text-blue-500">{featureConfig.heading.subtitle}</span>
        </h1>
        <p className="text-gray-600 mt-2">{featureConfig.heading.description}</p>
      </div>

      {/* Feature Sections */}
      {featureConfig.features.map((feature) => (
        <div
          key={feature.id}
          className={`flex flex-col md:flex-row ${
            feature.isImageLeft ? "" : "md:flex-row-reverse"
          } items-center mb-12`}
        >
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-96 rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-8 text-center md:text-left">
            <h2 className="text-2xl font-bold">
              {feature.title} <span className="text-orange-400">{feature.subtitle}</span>
            </h2>
            <p className="text-gray-600 mt-4">{feature.content}</p>
            <button className="mt-4 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-700 transition">
              {feature.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
