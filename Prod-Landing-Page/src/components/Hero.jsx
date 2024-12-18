import React from 'react';
import Hero1 from '../Hero Layout/Hero1';
import Hero2 from '../Hero Layout/Hero2';

const Hero = ({ heroConfig }) => {
  // Ensure heroConfig exists to prevent errors
  const safeHeroConfig = heroConfig || {};
  
  // Get the selected hero from config, default to 'hero1' if not specified
  const selectedHero = safeHeroConfig.selectedHero || 'hero2';

  // Function to render the selected hero component
  const renderHeroComponent = () => {
    switch (selectedHero.toLowerCase()) {
      case 'hero2':
        return <Hero2 
          title={safeHeroConfig.title}
          subtitle={safeHeroConfig.subtitle}
          bgImage={safeHeroConfig.bgImage}
          buttonText={safeHeroConfig.buttonText}
        />;
      case 'hero1':
      default:
        return <Hero1 
          title={safeHeroConfig.title}
          subtitle={safeHeroConfig.subtitle}
          bgImage={safeHeroConfig.bgImage}
          buttonText={safeHeroConfig.buttonText}
        />;
    }
  };

  return (
    <div className="hero-wrapper">
      {renderHeroComponent()}
    </div>
  );
};

export default Hero;