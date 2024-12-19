import React from "react";
import { motion } from "framer-motion";

const Feature1 = ({ featureConfig }) => {
  const { heading, features } = featureConfig;

  // Animation variants
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

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="container mx-auto px-6 py-16 lg:py-24 max-w-7xl"
    >
      {/* Heading Section */}
      <motion.div 
        variants={headingVariants}
        className="flex justify-center items-center mb-16 lg:mb-24"
      >
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight">
            {heading.title}{" "}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
              {heading.subtitle}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed">
            {heading.description}
          </p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="space-y-24">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            variants={containerVariants}
            className={`flex flex-col lg:flex-row ${
              feature.isImageLeft ? "" : "lg:flex-row-reverse"
            } items-center gap-12 lg:gap-16`}
          >
            {/* Image Section */}
            <motion.div
              variants={imageVariants}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </motion.div>
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              variants={contentVariants}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                {feature.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  {feature.subtitle}
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {feature.content}
              </p>

              {/* Enhanced Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#FB923C'
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0.6, 0.01, -0.05, 0.95]
                }}
                className="px-8 py-3 bg-orange-400 text-white rounded-full font-medium text-lg 
                          shadow-lg hover:shadow-orange-400/30 transition-all duration-300
                          relative overflow-hidden group"
              >
                <span className="relative z-10">{feature.buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Feature1;