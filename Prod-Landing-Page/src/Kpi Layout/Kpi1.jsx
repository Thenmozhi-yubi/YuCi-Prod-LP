import React from "react";
import KpiCounter from "../components/KpiCounter";

const Kpi1 = ({ heading = {}, kpis = [] }) => {
  return (
    <div className="p-8 bg-[#ffffff] py-20 rounded-xl border-primary shadow-[0_4px_15px_rgba(253,113,73,0.5)]">
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {heading.title || "Default Title"}
        </h1>
        <p className="text-content mt-10">
          {heading.description || "Default description"}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 mt-32">
        {kpis.length > 0 ? (
          kpis.map((kpi, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center space-x-2">
                <KpiCounter targetValue={kpi.counter} />
                <p className="text-2xl font-bold text-secondary">
                  {kpi.unit === "Percentage" ? `%` : ` SEC`}
                </p>
              </div>
              <p className="text-base text-content mt-2">{kpi.title}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">No KPIs available</p>
        )}
      </div>
    </div>
  );
};

export default Kpi1;