// KpiCounter.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const KpiCounter = ({ title, targetValue }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCounter(targetValue);
        clearInterval(interval);
      } else {
        setCounter(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center"
    >
      <motion.div 
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        {counter}
      </motion.div>
      {title && (
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 text-lg text-gray-600"
        >
          {title}
        </motion.div>
      )}
    </motion.div>
  );
};

export default KpiCounter;
