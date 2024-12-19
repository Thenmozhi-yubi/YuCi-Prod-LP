import React from 'react'
import { motion } from 'framer-motion'

const Tailor1 = ({ tailorConfig = {} }) => {
  return (
    <div className="p-5 text-center font-sans bg-secondary2 h-auto">
      {/* Title with Fade-in Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className='text-accent2 text-2xl font-bold mb-5 block'>
          {tailorConfig.heading?.spann}
        </span>
        <h2 className="mb-5 text-3xl font-bold text-white">
          {tailorConfig.heading?.title}
        </h2>
        <p className='text-white text-base my-10'>
          {tailorConfig.heading?.subtitle}
        </p>
      </motion.div>

      {/* Cards Container with Professional Hover Effects */}
      <div className="mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3 justify-center items-center w-[1000px]">
        {tailorConfig.cards?.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.1 
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
              transition: { 
                type: 'spring', 
                stiffness: 300 
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-40 max-w-[180px] rounded-lg shadow-md p-4 bg-secondary text-white text-center cursor-pointer"
          >
            {/* Card Image with Zoom Effect */}
            <motion.div 
              className='items-center flex justify-center'
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={card.image}
                alt={card.heading}
                className="w-16 h-16 object-cover rounded-md items-center"
              />
            </motion.div>
            
            {/* Card Content */}
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold">{card.heading}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Button with Interactive Animation */}

      <motion.div 

        className="my-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {tailorConfig.button?.text ? (
          <motion.a 
            href={tailorConfig.button.link} 
            className="bg-primary text-white px-4 py-2 rounded"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'var(--primary-hover)', // Assumes you have this CSS variable
            }}
            whileTap={{ scale: 0.95 }}
          >
            {tailorConfig.button?.text}
          </motion.a>
        ) : (
          <p>No button text available</p>
        )}

      </motion.div> */}

    </div>
  )
}

export default Tailor1