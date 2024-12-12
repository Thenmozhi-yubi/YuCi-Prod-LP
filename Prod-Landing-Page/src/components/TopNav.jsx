import React from 'react';

const TopNav = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Right Navigation Links and CTA */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4">
            <a
              href="#usecase1"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Use Case 1
            </a>
            <a
              href="#usecase2"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Use Case 2
            </a>
            <a
              href="#usecase3"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Use Case 3
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#cta"
            className=" text-black px-4 py-2 rounded-md shadow transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
