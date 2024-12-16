import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const GetStart = ({
  buttonText,
}) => {
  const [storedHeroConfig, setStoredHeroConfig] = useState(null);

  useEffect(() => {
    const savedHeroConfig = JSON.parse(localStorage.getItem("heroConfig"));
    if (savedHeroConfig) {
      setStoredHeroConfig(savedHeroConfig);
    } else {
      setStoredHeroConfig({
       
        buttonText,
      });
    }
  }, [title, subtitle, bgImage, buttonText]);
  return (
    <div>
       <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="relative px-6 py-2 text-xs sm:text-sm lg:text-base rounded-md text-white bg-secondary "
              disabled={false}
            >
              {/* Button Content */}
              <motion.div
                className="relative flex items-center justify-center"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px", // Initial gap between arrow and text
                  // overflow: "hidden",
                }}
                whileHover={{
                  gap: "30px", // Adjust gap for both arrow and text on hover
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {/* Arrow and Text */}
                <motion.div
                  className="flex items-center gap-2" // This groups the text and arrow together
                  initial={{ x: 0 }}
                  whileHover={{
                    x: 100, // Moves arrow and text together to the right
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                >
                  {/* Arrow */}
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 90 }} // Arrow moves right on hover
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <FaArrowRight className="bg-primary p-2 text-white rounded-full text-3xl" />
                  </motion.span>

                  {/* Text */}
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -130 }} // Text moves left on hover
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {storedHeroConfig?.buttonText || buttonText}
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.button>
    </div>
  )
}

export default GetStart