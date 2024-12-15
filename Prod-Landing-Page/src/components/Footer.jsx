import React from 'react';

const Footer = ({ footerConfig }) => {
  // Adding a check to ensure footerConfig is defined
  if (!footerConfig) return null;

  return (
    <div className="footer">
      <div className="footer-top">
        <img src={footerConfig.logo} alt="Logo" />
        <div className="footer-content">{footerConfig.content}</div>
        <div className="footer-buttons">
          <button>{footerConfig.buttons[0].text}</button>
          <button>{footerConfig.buttons[1].text}</button>
        </div>
        <div className="footer-social-images">
          {footerConfig.socialImages.map((img, index) => (
            <img key={index} src={img} alt={`Social ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
