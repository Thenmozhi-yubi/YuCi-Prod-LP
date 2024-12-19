import React from "react";
import { motion } from "framer-motion";
import KpiCounter from "../components/KpiCounter";

const Kpi1 = ({ heading = {}, kpis = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative p-8 py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative rounded-xl border-primary shadow-[0_4px_15px_rgba(253,113,73,0.5)] bg-white/90 backdrop-blur-sm p-8">
        {/* Heading Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-8 max-w-2xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {heading.title || "Default Title"}
          </h1>
          <p className="text-content mt-10 text-lg">
            {heading.description || "Default description"}
          </p>
        </motion.div>
        
        {/* KPIs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-20">
          {kpis.length > 0 ? (
            kpis.map((kpi, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative p-6"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Card Content */}
                <div className="relative bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-baseline space-x-2">
                      <KpiCounter targetValue={kpi.counter} />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl font-bold text-secondary"
                      >
                        {kpi.unit === "Percentage" ? "%" : " SEC"}
                      </motion.span>
                    </div>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-base text-content font-medium"
                    >
                      {kpi.title}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p 
              variants={itemVariants}
              className="col-span-full text-center text-gray-500"
            >
              No KPIs available
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Kpi1;