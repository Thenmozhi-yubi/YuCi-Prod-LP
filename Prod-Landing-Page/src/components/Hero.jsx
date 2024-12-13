import React, { useState, useEffect } from "react";

const Hero = ({ title, subtitle, bgImage, buttonText }) => {
  const [storedHeroConfig, setStoredHeroConfig] = useState(null);

  useEffect(() => {
    // Load Hero Config from localStorage when the component mounts
    const savedHeroConfig = JSON.parse(localStorage.getItem("heroConfig"));
    if (savedHeroConfig) {
      setStoredHeroConfig(savedHeroConfig);
    } else {
      setStoredHeroConfig({ title, subtitle, bgImage, buttonText });
    }
  }, [title, subtitle, bgImage, buttonText]);

  return (
    <div className="flex items-center justify-between py-16 px-4 bg-white">
      {/* Left Side */}
      <div className="text-left w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          {storedHeroConfig?.title || title}
        </h1>
        <p className="text-lg mb-6">
          {storedHeroConfig?.subtitle || subtitle}
        </p>
        <button className="bg-blue-600 px-6 py-3 rounded-md text-white hover:bg-blue-700 transition">
          {storedHeroConfig?.buttonText || buttonText}
        </button>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2">
        <img
          src={storedHeroConfig?.bgImage || bgImage}
          alt="Hero"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
