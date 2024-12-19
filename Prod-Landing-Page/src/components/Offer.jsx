import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const Offer = ({ offerConfig }) => {
  const { heading, cards } = offerConfig;

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    if (!Icon) {
      // Fallback icon if the specified icon doesn't exist
      return LucideIcons.HelpCircle;
    }
    return Icon;
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16"
      >
        {heading}
      </motion.h2>

      {/* Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-6"
      >
        {cards.map((card, index) => {
          const Icon = getIcon(card.icon);
          
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center group px-4"
            >
              {/* Icon Container */}
              <motion.div 
                className="w-24 h-24 mb-6 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Circle with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full transform transition-all duration-300 group-hover:shadow-lg" />
                
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4 min-h-[56px]">
                {card.title}
              </h3>

              {/* Content */}
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Offer;