import { motion } from 'framer-motion';
import { FaBook } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16 text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
        <FaBook className="inline-block mr-4 mb-2" />
        Computational Statistics Academy
      </h1>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        Master the fusion of statistical theory and Python programming through our 
        comprehensive learning pathways and interactive resources.
      </p>
    </motion.div>
  );
};

export default Hero;