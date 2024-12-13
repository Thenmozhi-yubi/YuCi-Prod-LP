import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeatureUpdate = ({ featureConfig, setFeatureConfig }) => {
  const [formData, setFormData] = useState(featureConfig.heading);
  const [features, setFeatures] = useState(featureConfig.features);
  const navigate = useNavigate();

  // Handle Heading Input Changes
  const handleHeadingChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Feature Changes
  const handleFeatureChange = (id, field, value) => {
    setFeatures(
      features.map((feature) =>
        feature.id === id ? { ...feature, [field]: value } : feature
      )
    );
  };

  // Add a New Feature
  const addFeature = () => {
    const newFeature = {
      id: features.length + 1,
      title: "",
      subtitle: "",
      content: "",
      image: "",
      buttonText: "",
      isImageLeft: true,
    };
    setFeatures([...features, newFeature]);
  };

  // Remove a Feature
  const removeFeature = (id) => {
    setFeatures(features.filter((feature) => feature.id !== id));
  };

  // Save Changes
  const saveChanges = () => {
    const updatedConfig = {
      heading: formData,
      features,
    };
    setFeatureConfig(updatedConfig);
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Update Features</h2>

      {/* Update Heading */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Heading Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleHeadingChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <label className="block text-gray-700 font-medium mt-2">Heading Subtitle:</label>
        <input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleHeadingChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <label className="block text-gray-700 font-medium mt-2">Heading Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleHeadingChange}
          className="w-full px-4 py-2 border rounded-md"
        ></textarea>
      </div>

      {/* Update Features */}
      {features.map((feature) => (
        <div key={feature.id} className="mb-6 border p-4 rounded-md">
          <h3 className="text-lg font-medium mb-2">Feature {feature.id}</h3>
          <input
            type="text"
            placeholder="Title"
            value={feature.title}
            onChange={(e) => handleFeatureChange(feature.id, "title", e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Subtitle"
            value={feature.subtitle}
            onChange={(e) => handleFeatureChange(feature.id, "subtitle", e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-2"
          />
          <textarea
            placeholder="Content"
            value={feature.content}
            onChange={(e) => handleFeatureChange(feature.id, "content", e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-2"
          ></textarea>
          <input
            type="text"
            placeholder="Image URL"
            value={feature.image}
            onChange={(e) => handleFeatureChange(feature.id, "image", e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Button Text"
            value={feature.buttonText}
            onChange={(e) => handleFeatureChange(feature.id, "buttonText", e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-2"
          />
          <select
            value={feature.isImageLeft ? "left" : "right"}
            onChange={(e) =>
              handleFeatureChange(feature.id, "isImageLeft", e.target.value === "left")
            }
            className="w-full px-4 py-2 border rounded-md mb-2"
          >
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
          <button
            onClick={() => removeFeature(feature.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Add Feature Button */}
      <button
        onClick={addFeature}
        className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition mb-4"
      >
        Add Feature
      </button>

      {/* Save Changes Button */}
      <button
        onClick={saveChanges}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </div>
  );
};

export default FeatureUpdate;
