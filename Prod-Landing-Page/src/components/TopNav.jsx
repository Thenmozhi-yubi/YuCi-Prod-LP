import React, { useEffect, useState } from "react";

const TopNav = ({ config }) => {
  const [savedConfig, setSavedConfig] = useState(config);

  // Load the config from localStorage on initial mount
  useEffect(() => {
    const savedConfig = JSON.parse(localStorage.getItem("config"));
    if (savedConfig) {
      setSavedConfig(savedConfig);
    }
  }, []);

  const { logo, useCases, cta } = savedConfig;

  return (
    <div className="w-full bg-white ">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="  w-auto h-20" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-9">
            {useCases.map((useCase, index) => (
              <a
                key={index}
                href={`#usecase${index + 1}`}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                {useCase}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href={cta.link}
            className=" text-black px-4 py-2 rounded-3xl shadow hover:bg-black hover:text-white transition border border-black "
          >
            {cta.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
