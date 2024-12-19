import React from 'react';
import Tailor2 from '../Tailor Layout/Tailor2';
import Tailor1 from '../Tailor Layout/Tailor1';

// Main Tailor wrapper component
const Tailor = ({ tailorConfig }) => {
  // Ensure tailorConfig exists to prevent errors
  const safeTailorConfig = tailorConfig || {};
  console.log(safeTailorConfig);
  
  
  // Get the selected tailor from config, default to '1' if not specified
  const selectedTailor = safeTailorConfig.selectedTailor || '2';

  // Function to render the selected tailor component
  const renderTailorComponent = () => {
    switch (selectedTailor) {
      case '2':
        return <Tailor2 tailorConfig={safeTailorConfig} />;
      case '1':
      default:
        return <Tailor1 tailorConfig={safeTailorConfig} />;
    }
  };
  return (
    <div className="tailor-wrapper">
      {renderTailorComponent()}
    </div>
  );

};

export default Tailor;

