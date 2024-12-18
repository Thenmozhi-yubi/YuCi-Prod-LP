import React from "react";
import KpiCounter from "./KpiCounter";
import { motion } from "framer-motion";

const Kpi2 = () => {
    const { heading = {}, kpis = [] } = kpiConfig;
  return (
    <div className="p-8 bg-primary2 py-20  flex">
    {/* Parent container with 12-column grid */}
    <motion.div
        className="grid grid-cols-12 gap-6 w-full mx-12 p-4 px-8 rounded-lg overflow-hidden relative bg-primary2"
        initial={{
          borderWidth: "0px 2px 2px 2px", 
          borderColor: "rgba(255, 255, 255, 0.3)", 
          boxShadow: "none",
        }}
        whileHover={{
          borderWidth: "1px", 
          borderColor: "rgba(255, 255, 255, 0.8)", 
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)", 
        }}
        // transition={{
        //   duration: 0.5, 
        //   ease: [0.25, 0.1, 0.25, 1], 
        // }}
        style={{
          borderStyle: "solid", 
        }}
      >
        {/* Left Side - Span 4 Columns */}
        <div className="col-span-12 sm:col-span-4 text-center mb-8 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-accent2">
            {heading.title || "Default Title"}
          </h1>
          <p className="text-white mt-10 text-left">
            {heading.description || "Default description"}
          </p>
        </div>
  
        {/* Right Side - Span 8 Columns */}
        <div className="col-span-12 sm:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 mt-32 text-white">
          {kpis.length > 0 ? (
            kpis.map((kpi, index) => (
              <div key={index} className="text-center">
                {/* First Line: Counter with Unit */}
                <div className="flex justify-center items-center space-x-2">
                  <KpiCounter targetValue={kpi.counter} />
                  <p className="text-lg font-bold text-white">
                    {kpi.unit === "Percentage" ? `%` : ` SEC`}
                  </p>
                </div>
                {/* Second Line: KPI Title */}
                <p className="text-sm text-white mt-2">{kpi.title}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center">No KPIs available</p>
          )}
        </div>
      </motion.div>
  </div>
  )
}

export default Kpi2