import React from "react";
import Kpi1 from "../Kpi Layout/Kpi1";
import Kpi2 from "../Kpi Layout/Kpi2";

const Kpi = ({ kpiConfig }) => {
  // Ensure kpiConfig exists to prevent errors
  const safeKpiConfig = kpiConfig || {};
  
  // Get the selected kpi from config, default to 'kpi1' if not specified
  const selectedKpi = safeKpiConfig.selectedKpi || 'kpi1';

  // Function to render the selected kpi component
  const renderKpiComponent = () => {
    switch (selectedKpi.toLowerCase()) {
      case 'kpi2':
        return <Kpi2 heading={safeKpiConfig.heading} kpis={safeKpiConfig.kpis} />;
      case 'kpi1':
      default:
        return <Kpi1 heading={safeKpiConfig.heading} kpis={safeKpiConfig.kpis} />;
    }
  };

  return (
    <div className="kpi-wrapper">
      {renderKpiComponent()}
    </div>
  );
};

export default Kpi;