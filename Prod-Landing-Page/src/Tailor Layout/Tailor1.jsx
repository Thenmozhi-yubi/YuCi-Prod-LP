import { motion } from 'framer-motion';

const Tailor1 = ({ tailorConfig }) => {
  const { heading, cards, button } = tailorConfig;

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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="relative py-20 px-4 bg-secondary2 min-h-screen">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent2/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {heading.spann && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-accent2 text-lg font-bold mb-4 
                         px-4 py-1 rounded-full bg-accent2/10"
            >
              {heading.spann}
            </motion.span>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white 
                         mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 
                         bg-clip-text text-transparent">
            {heading.title}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {heading.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
                     gap-6 lg:gap-8 justify-items-center"
        >
          {cards?.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              className="w-full bg-secondary rounded-xl overflow-hidden 
                         backdrop-blur-lg bg-opacity-50 shadow-lg 
                         hover:shadow-2xl transition-all duration-300
                         border border-white/10"
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Image Container */}
                <motion.div 
                  className="relative w-20 h-20 mx-auto mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-accent2/20 rounded-lg blur" />
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="relative w-full h-full object-cover rounded-lg 
                             shadow-lg z-10"
                  />
                </motion.div>

                {/* Text Content */}
                <h3 className="text-xl font-semibold text-white mb-4 
                             min-h-[2rem] flex items-center justify-center">
                  {card.heading}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button Section */}
        {button?.text && (
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a 
              href={button.link}
              className="inline-flex items-center justify-center px-8 py-4 
                        bg-gradient-to-r from-primary to-primary/90 text-white 
                        rounded-full font-medium text-lg shadow-lg 
                        hover:shadow-primary/30 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {button.text}
              <svg 
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </motion.a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Tailor1;