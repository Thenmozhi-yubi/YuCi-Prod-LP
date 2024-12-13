// src/Admin/HeroUpdate.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroUpdate = ({ heroConfig, setHeroConfig }) => {
  const [title, setTitle] = useState(heroConfig.title);
  const [subtitle, setSubtitle] = useState(heroConfig.subtitle);
  const [bgImage, setBgImage] = useState(heroConfig.bgImage);
  const [buttonText, setButtonText] = useState(heroConfig.buttonText);

  const navigate = useNavigate();

  const hasChanges =
    title !== heroConfig.title ||
    subtitle !== heroConfig.subtitle ||
    bgImage !== heroConfig.bgImage ||
    buttonText !== heroConfig.buttonText;

  const saveChanges = () => {
    // Save to heroConfig state and also store in localStorage
    const updatedConfig = { title, subtitle, bgImage, buttonText };
    setHeroConfig(updatedConfig);
    localStorage.setItem("heroConfig", JSON.stringify(updatedConfig)); // Save to localStorage
    navigate("/"); // Redirect back to Home
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Update Hero Section</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Hero Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Hero Subtitle:</label>
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Background Image URL:</label>
        <input
          type="text"
          value={bgImage}
          onChange={(e) => setBgImage(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Button Text:</label>
        <input
          type="text"
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <button
        onClick={saveChanges}
        disabled={!hasChanges}
        className={`bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition ${
          !hasChanges ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Save Changes
      </button>

      <button
        onClick={() => navigate("/")}
        className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition ml-4"
      >
        Back
      </button>
    </div>
  );
};

export default HeroUpdate;
