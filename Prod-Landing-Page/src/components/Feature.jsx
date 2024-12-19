// import React from "react";
// import { motion } from "framer-motion";

// const Feature = ({ featureConfig }) => {
//   return (
//     <div className="container mx-auto px-4 py-8 max-w-screen-xl ">
//       {/* Heading */}
//       <div className="flex justify-center items-center mb-8">
//   <div className="text-center max-w-3xl">
//     <h1 className="text-4xl font-bold text-heading  ">
//       {featureConfig.heading.title}{" "}
//       <span className="text-primary ">{featureConfig.heading.subtitle}</span>
//     </h1>
//     <p className="text-content mt-10">{featureConfig.heading.description}</p>
//   </div>
// </div>

//       {/* Feature Sections */}
//       {featureConfig.features.map((feature, index) => (
//         <div
//           key={feature.id}
//           className={`flex flex-col md:flex-row ${
//             feature.isImageLeft ? "" : "md:flex-row-reverse"
//           } items-center mb-12`}
//         >
//           {/* Image Section with Motion */}
//           <motion.div
//             initial={{ x: feature.isImageLeft ? -250 : 250, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{
//               duration: 2, // Slow down the animation to 2 seconds
//               type: "spring",
//               stiffness: 40, // Even gentler spring for smooth animation
//               damping: 20, // Smooth out the motion with more damping
//             }}
//             className="md:w-1/2"
//           >
//             <img
//               src={feature.image}
//               alt={feature.title}
//               className="w-full h-auto rounded-lg"
//             />
//           </motion.div>

//           {/* Content Section with Motion */}
//           <motion.div
//             initial={{ x: feature.isImageLeft ? -250 : 250, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{
//               duration: 2, // Slow down the animation to 2 seconds
//               type: "spring",
//               stiffness: 40, // Even gentler spring for smooth animation
//               damping: 20, // Smooth out the motion with more damping
//             }}
//             className="md:w-1/2 md:pl-8 text-center md:text-left"
//           >
//             <h2 className="text-2xl font-bold">
//               {feature.title}{" "}
//               <span className="text-orange-400">{feature.subtitle}</span>
//             </h2>
//             <p className="text-gray-600 mt-4">{feature.content}</p>

//             {/* Button with Continuous Jump Animation */}
//             <motion.button
//               animate={{
//                 y: [0, -6, 0], // Slightly reduced the vertical movement
//               }}
//               transition={{
//                 repeat: Infinity, // Repeat animation infinitely
//                 repeatType: "loop", // Loop the animation
//                 duration: 3, // Slow the bounce to 3 seconds for a relaxed effect
//                 ease: "easeInOut", // Smooth easing for bounce
//               }}
//               className="mt-4 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-700 transition"
//             >
//               {feature.buttonText}
//             </motion.button>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feature;

import React from 'react'
import Feature1 from '../feature Layout/Feature1';
import Features2 from '../feature Layout/Features2';

export default function Feature({featureConfig}) {
  const safefeatureConfig = featureConfig || {};
  console.log(JSON.stringify(safefeatureConfig) + 'hero')
  // Get the selected hero from config, default to 'hero1' if not specified
  const selectedHero = safefeatureConfig.selectedfeature || '1';
console.log(selectedHero , 'ccbdhbjdbvfjrbvfbr')
  // Function to render the selected hero component
  const renderFeatureComponent = () => {
    switch (selectedHero) {
      case '1':
        return <Features2
        featureConfig={safefeatureConfig}
        />;
      case '2':
      default:
        return <Feature1
          featureConfig={safefeatureConfig}
        />;
    }
  };

  return (
    <div className="hero-wrapper">
      {renderFeatureComponent()}
    </div>
  );

}
