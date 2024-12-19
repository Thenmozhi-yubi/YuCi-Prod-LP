import React from "react";
import { motion } from "framer-motion";

const Feature2 = ({ featureConfig }) => {
  const { heading, features } = featureConfig;

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl">
      {/* Heading */}
      <div className="flex justify-center items-center mb-8">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-heading">
            {heading.title}{" "}
            <span className="text-primary">{heading.subtitle}</span>
          </h1>
          <p className="text-content mt-10">{heading.description}</p>
        </div>
      </div>

      {/* Feature Sections */}
      {features.map((feature) => (
        <div
          key={feature.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 bg-gray-50 rounded-xl p-6 shadow-lg"
        >
          {/* Image Section with Staggered Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 1.5
            }}
            className={`relative ${feature.isImageLeft ? 'md:order-1' : 'md:order-2'}`}
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-xl -z-10 transform rotate-6"></div>
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-auto rounded-xl relative z-10 shadow-2xl"
            />
          </motion.div>

          {/* Content Section with Unique Animation */}
          <motion.div
            initial={{ x: feature.isImageLeft ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 1,
              ease: "easeOut"
            }}
            className={`space-y-4 ${feature.isImageLeft ? 'md:order-2' : 'md:order-1'}`}
          >
            <h2 className="text-3xl font-bold text-gray-800">
              {feature.title}{" "}
              <span className="text-primary">{feature.subtitle}</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {feature.content}
            </p>

            {/* Animated Button with Hover Effect */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-full 
              shadow-lg hover:shadow-xl transform transition-all 
              duration-300 ease-in-out"
            >
              {feature.buttonText}
            </motion.button>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Feature2;