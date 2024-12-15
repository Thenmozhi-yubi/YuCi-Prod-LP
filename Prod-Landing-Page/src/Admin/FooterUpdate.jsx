import React, { useState, useEffect } from "react";

const FooterUpdate = ({ footerConfig, setFooterConfig }) => {
  const [image, setImage] = useState(footerConfig.logo || "");
  const [content, setContent] = useState(footerConfig.content || "");
  const [button1, setButton1] = useState(footerConfig.buttons[0].text || "");
  const [button2, setButton2] = useState(footerConfig.buttons[1].text || "");
  const [socialImages, setSocialImages] = useState(footerConfig.socialImages || ["", ""]);

  const handleSaveChanges = () => {
    const updatedFooterConfig = {
      logo: image,
      content: content,
      buttons: [
        { text: button1, link: "#" }, // link to be updated based on application logic
        { text: button2, link: "#" },  // link to be updated based on application logic
      ],
      socialImages: socialImages,
    };
    setFooterConfig(updatedFooterConfig);
  };

  useEffect(() => {
    setImage(footerConfig.logo);
    setContent(footerConfig.content);
    setButton1(footerConfig.buttons[0].text);
    setButton2(footerConfig.buttons[1].text);
    setSocialImages(footerConfig.socialImages);
  }, [footerConfig]);

  return (
    <div className="footer-update-container">
      <div className="footer-logo">
        <label>Logo Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="footer-content">
        <label>Footer Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="footer-buttons">
        <label>Button 1 Text:</label>
        <input
          type="text"
          value={button1}
          onChange={(e) => setButton1(e.target.value)}
        />
        <label>Button 2 Text:</label>
        <input
          type="text"
          value={button2}
          onChange={(e) => setButton2(e.target.value)}
        />
      </div>

      <div className="footer-social-images">
        <label>Social Media Images (URL):</label>
        {socialImages.map((img, index) => (
          <input
            key={index}
            type="text"
            value={img}
            onChange={(e) => {
              const updatedImages = [...socialImages];
              updatedImages[index] = e.target.value;
              setSocialImages(updatedImages);
            }}
          />
        ))}
      </div>

      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default FooterUpdate;
