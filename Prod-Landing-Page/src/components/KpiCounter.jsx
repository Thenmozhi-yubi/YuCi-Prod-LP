import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const KpiCounter = ({ title, targetValue }) => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 16); // Smoother animation with 16ms intervals
    let animationFrame;

    const updateCounter = (timestamp) => {
      start += increment;
      if (start >= targetValue) {
        setCounter(targetValue);
        return;
      }
      setCounter(Math.floor(start));
      animationFrame = requestAnimationFrame(updateCounter);
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetValue, isInView]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };

  // Animation variants for the number
  const numberVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  // Animation variants for the title
  const titleVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div 
      ref={counterRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative text-center group"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary 
                    rounded-full blur-xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 -z-10" />

      {/* Counter number */}
      <motion.div 
        variants={numberVariants}
        className="relative"
      >
        <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r 
                       from-primary via-primary to-primary bg-clip-text text-transparent
                       inline-block transform transition-transform duration-300
                       group-hover:scale-110"
        >
          {counter.toLocaleString()}
        </span>

        {/* Decorative elements */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary2/20 
                      rounded-full blur-lg opacity-0 group-hover:opacity-100 
                      transition-all duration-500 -z-10" />
      </motion.div>

      {/* Title */}
      {title && (
        <motion.div 
          variants={titleVariants}
          className="mt-4"
        >
          <span className="text-lg font-medium text-content relative">
            {title}
            {/* Underline effect */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
                          from-primary to-primary transform scale-x-0 group-hover:scale-x-100 
                          transition-transform duration-300" />
          </span>
        </motion.div>
      )}

      {/* Particle effects on hover */}
      <div className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={isInView ? {
              scale: [1, 0],
              x: Math.cos(i * 60 * Math.PI / 180) * 30,
              y: Math.sin(i * 60 * Math.PI / 180) * 30,
            } : {}}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.1
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default KpiCounter;