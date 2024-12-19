import React from "react";
import { motion } from "framer-motion";

const Feature1 = ({ featureConfig }) => {
    console.log(JSON.stringify(featureConfig + 'HARISH'))
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
          className={`flex flex-col md:flex-row ${
            feature.isImageLeft ? "" : "md:flex-row-reverse"
          } items-center mb-12`}
        >
          {/* Image Section with Motion */}
          <motion.div
            initial={{ x: feature.isImageLeft ? -250 : 250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 40,
              damping: 20,
            }}
            className="md:w-1/2"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>

          {/* Content Section with Motion */}
          <motion.div
            initial={{ x: feature.isImageLeft ? -250 : 250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 40,
              damping: 20,
            }}
            className="md:w-1/2 md:pl-8 text-center md:text-left"
          >
            <h2 className="text-2xl font-bold">
              {feature.title}{" "}
              <span className="text-orange-400">{feature.subtitle}</span>
            </h2>
            <p className="text-gray-600 mt-4">{feature.content}</p>

            {/* Button with Continuous Jump Animation */}
            <motion.button
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
                ease: "easeInOut",
              }}
              className="mt-4 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-700 transition"
            >
              {feature.buttonText}
            </motion.button>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Feature1;
