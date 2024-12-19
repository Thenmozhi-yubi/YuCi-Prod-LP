import React from "react";
import { motion } from "framer-motion";
import KpiCounter from "../components/KpiCounter";

const Kpi1 = ({ heading = {}, kpis = [] }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const kpiVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="relative px-8 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary2/5 rounded-full blur-[100px]"
        />
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 container mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Gradient Border Container */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-primary via-secondary2 to-primary">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            {/* Header Section */}
            <motion.div 
              className="text-center mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent mb-6">
                {heading.title || "Default Title"}
              </h1>
              <p className="text-lg text-content">
                {heading.description || "Default description"}
              </p>
            </motion.div>
            
            {/* KPIs Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12"
            >
              {kpis.length > 0 ? (
                kpis.map((kpi, index) => (
                  <motion.div
                    key={index}
                    variants={kpiVariants}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    {/* Card with hover effect */}
                    <div className="relative p-8 rounded-xl bg-white shadow-lg hover:shadow-xl 
                                  transition-all duration-300 border border-gray-100">
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary2/5 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                    rounded-xl" />
                      
                      {/* Counter Section */}
                      <div className="flex justify-center items-baseline space-x-2 mb-4">
                        <motion.div
                          className="text-5xl md:text-6xl font-bold text-primary"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 200,
                            delay: 0.2 + index * 0.1 
                          }}
                        >
                          <KpiCounter targetValue={kpi.counter} />
                        </motion.div>
                        <p className="text-2xl font-bold text-secondary2">
                          {kpi.unit === "Percentage" ? "%" : " SEC"}
                        </p>
                      </div>

                      {/* Title */}
                      <p className="text-lg font-medium text-content group-hover:text-primary2 
                                  transition-colors duration-300">
                        {kpi.title}
                      </p>

                      {/* Decorative bottom line */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                                 from-primary to-secondary2"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.p 
                  variants={kpiVariants}
                  className="col-span-full text-center text-content"
                >
                  No KPIs available
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Kpi1;