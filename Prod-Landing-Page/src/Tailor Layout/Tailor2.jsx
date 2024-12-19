import { motion } from 'framer-motion';

const Tailor2 = ({ tailorConfig }) => {
  const { heading, cards, button } = tailorConfig;

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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

  // Scroll-triggered animations for header elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {heading.spann && (
            <motion.span 
              variants={fadeInUp}
              className="inline-block text-primary font-semibold text-lg mb-3 
                         px-4 py-1 rounded-full bg-primary/10"
            >
              {heading.spann}
            </motion.span>
          )}
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 
                       leading-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-700 
                       bg-clip-text text-transparent"
          >
            {heading.title}
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 leading-relaxed mx-auto max-w-2xl"
          >
            {heading.subtitle}
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl 
                         transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t 
                                from-black/30 to-transparent z-10" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="h-full"
                  >
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="w-full h-full object-cover transform transition-transform 
                               duration-700 ease-out"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 
                               group-hover:text-primary transition-colors duration-300">
                    {card.heading}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.content}
                  </p>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-t 
                              from-primary/10 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary 
                              transform scale-x-0 group-hover:scale-x-100 
                              transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button Section */}
        {button?.text && (
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a 
              href={button.link}
              className="inline-flex items-center justify-center px-8 py-4 
                        bg-gradient-to-r from-primary to-primary/90 text-white 
                        rounded-full font-medium text-lg shadow-lg 
                        hover:shadow-primary/30 transition-all duration-300
                        hover:scale-105 active:scale-95"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                y: -2 
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
    </section>
  );
};

export default Tailor2;