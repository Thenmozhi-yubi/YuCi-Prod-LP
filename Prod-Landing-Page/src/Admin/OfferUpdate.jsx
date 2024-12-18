import React, { useState } from "react";

const OfferUpdate = ({ offerConfig, setOfferConfig }) => {
  const [localConfig, setLocalConfig] = useState(offerConfig);

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;

    if (index !== null) {
      // Update card content
      const updatedCards = [...localConfig.cards];
      updatedCards[index] = { ...updatedCards[index], [name]: value };
      setLocalConfig({ ...localConfig, cards: updatedCards });
    } else {
      // Update title/subtitle
      setLocalConfig({
        ...localConfig,
        heading: { ...localConfig.heading, [name]: value },
      });
    }
  };

  const handleSave = () => {
    setOfferConfig(localConfig);
    alert("Offer configuration saved!");
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Update Offer Section</h2>

      {/* Heading and Subtitle */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Title</label>
        <input
          type="text"
          name="title"
          value={localConfig.heading.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />

        <label className="block mt-4 mb-2 font-semibold">Subtitle</label>
        <input
          type="text"
          name="subtitle"
          value={localConfig.heading.subtitle}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Cards */}
      <h3 className="text-lg font-semibold mb-2">Cards</h3>
      {localConfig.cards.map((card, index) => (
        <div key={index} className="mb-4 border p-4 rounded">
          <label className="block mb-2 font-semibold">Card Heading</label>
          <input
            type="text"
            name="heading"
            value={card.heading}
            onChange={(e) => handleInputChange(e, index)}
            className="w-full p-2 border rounded"
          />

          <label className="block mt-4 mb-2 font-semibold">Card Content</label>
          <textarea
            name="content"
            value={card.content}
            onChange={(e) => handleInputChange(e, index)}
            className="w-full p-2 border rounded"
          ></textarea>

          <label className="block mt-4 mb-2 font-semibold">Card Image URL</label>
          <input
            type="text"
            name="image"
            value={card.image}
            onChange={(e) => handleInputChange(e, index)}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}

      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default OfferUpdate;
