import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const defaultCtaConfig = {
  heading: "Get Started Today",
  content: "Ready to take the next step? Join us now!",
  button: {
    text: "Learn More",
    link: "#"
  },
  image: "/api/placeholder/600/400"
};

const Cta = ({ ctaConfig = defaultCtaConfig }) => {
  const { 
    heading, 
    content, 
    button = defaultCtaConfig.button, 
    image 
  } = { ...defaultCtaConfig, ...ctaConfig };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-primary text-white p-8 md:p-12 rounded-2xl shadow-xl">
          
          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              {heading}
            </h2>
            
            <p className="text-lg md:text-xl opacity-90">
              {content}
            </p>
            
            {/* Animated Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative px-8 py-3 text-sm md:text-base rounded-lg text-white bg-secondary hover:bg-opacity-90 transition-colors"
            >
              <motion.div
                className="flex items-center justify-center space-x-3"
                whileHover={{
                  gap: "1.5rem",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {button.text}
                </motion.span>
                
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.div>
            </motion.button>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt="CTA visual"
                className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Cta;